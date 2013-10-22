(ns bible-plan.reference
  (:require [clojure.string :as string]
            [cljs.reader    :as reader]
            [clojure.set    :as set]
            [shodan.console :as console]))

(def bible (cljs.reader/read-string js/bible_plan.edn.bibles.esv))

(def verses (cljs.reader/read-string js/bible_plan.edn.verses.esv))

(defn max-verse [{start-verse :start end-verse :end :as reference}]
  {:pre [start-verse]}
  (or end-verse start-verse))

(defn min-verse [{start-verse :start end-verse :end :as reference}]
  {:pre [start-verse]}
  start-verse)

(defn reference< [reference & references]
  {:pre [(get-in reference [:start :book])
         (every? #(get-in % [:start :book]) references)]}
  (let [references              (into [reference] references)
        [books chapters verses] ((juxt (partial map (comp :book max-verse))
                                       (partial map (comp :chapter max-verse))
                                       (partial map (comp :verse max-verse)))
                                 references)]
    (or (apply < books)
        (and (apply = books)
             (every? identity chapters)
             (apply < chapters))
        (and (apply = books)
             (every? identity chapters)
             (apply = chapters)
             (every? identity verses)
             (apply < verses)))))

(defn ->book-str [{:keys [book chapter] :as reference}]
  {:pre [book]}
  (if (not chapter)
    (get-in bible [book :name])
    (get-in bible [book :abbreviation])))

(defn ->chapter-str [{:keys [chapter] :as reference}]
  {:pre [chapter]}
  chapter)

(defn ->verse-str [{:keys [verse] :as reference}]
  {:pre [verse]}
  verse)

(defn single->str [{:keys [book chapter verse] :as reference}]
  {:pre [(or (and book chapter verse)
             (and book chapter (not verse))
             (and book (not (and chapter verse))))
         (every? number? (vals reference))]}
  ;; TODO: Each of these should be calls to format
  (cond (and book chapter verse)
        (str (string/capitalize (->book-str reference)) ". " (->chapter-str reference) "." (->verse-str reference))

        (and book chapter)
        (str (string/capitalize (->book-str reference)) ". " (->chapter-str reference))

        book
        (string/capitalize (->book-str reference))))

(defn compound->str [start end]
  {:pre [(reference< start end)]}
  (let [{s-book :book s-chapter :chapter s-verse :verse} start
        {e-book :book e-chapter :chapter e-verse :verse} end]
    (cond ;; {:start {:book 30 :chapter 1 :verse 16} :end {:book 30 :chapter 1 :verse 32}}
     (and (= s-book e-book) (= s-chapter e-chapter) (not= s-verse e-verse))
     (str (string/capitalize (->book-str start)) ". " (->chapter-str start) "." s-verse "-" e-verse)

     ;; {:start {:book 30 :chapter 1 :verse 16} :end {:book 30 :chapter 2 :verse 32}}
     (and (= s-book e-book) (not= s-chapter e-chapter) (not= s-verse e-verse))
     (str (string/capitalize (->book-str start)) ". " (->chapter-str start) "." s-verse "-" (->chapter-str end) "." e-verse)

     ;; {:start {:book 1 :chapter 35} :end {:book 1 :chapter 36}}
     (and (= s-book e-book) (not= s-chapter e-chapter) (nil? s-verse) (nil? e-verse))
     (str (string/capitalize (->book-str start)) ". " (->chapter-str start) "-" (->chapter-str end))

     :default
     (str (single->str start) "-" (single->str end)))))

(defn ->str [{:keys [start end] :as reference}]
  {:pre [(:book start)]}
  (if (and start end)
    (compound->str start end)
    (single->str start)))

(defn verse-specificity [{:keys [book chapter verse]}]
  {:pre [book]}
  (cond verse
        :verse

        chapter
        :chapter

        book
        :book))

(defn contiguous-ascending-ints? [int-1 & ints]
  {:pre [(number? int-1)
         (every? number? ints)]}
  (loop [[this-int & next-ints] (into [int-1] ints)]
    (if (not (first next-ints))
      true
      (if (= (+ 1 this-int) (first next-ints))
        (recur next-ints)
        false))))

(def verse-specificities [:book :chapter :verse])

(def specificity-weight {:book    1
                         :chapter 2
                         :verse   3})

(defn specificity-comparator-fn [clojure-comparator-fn]
  (fn [& specificities]
    (if specificities
      (apply clojure-comparator-fn (map specificity-weight specificities)))))

(def specificity< (specificity-comparator-fn <))

(def specificity> (specificity-comparator-fn >))

(defn join-points [references]
  (reduce (fn [start-segments reference-part]
            (if (:end reference-part)
              (conj start-segments [(:end reference-part)])
              (update-in start-segments [(- (count start-segments) 1)] conj (:start reference-part))))
          [[]]
          (reduce (fn [start-and-ends reference]
                    (if (:end reference)
                      (conj (conj start-and-ends {:start (:start reference)}) {:end (:end reference)})
                      (conj start-and-ends reference)))
                  []
                  references)))

(defn lower-specificities [specificity]
  (let [specificity-weight (specificity-weight specificity)]
    (filter (partial specificity> specificity) verse-specificities)))

(defn lower-specificities-equal? [specificity verses]
  (let [lower-specificities (lower-specificities specificity)]
    (apply = (map (apply juxt lower-specificities) verses))))

(defn ->verses [reference]
  (let [{:keys [start end]} reference
        verses [start]
        verses (if end
                 (conj verses end)
                 verses)]
    verses))

(defn highest-common-verse-specificity [& verses]
  (if verses
    (let [highest-distinct-specificities (distinct (map verse-specificity verses))]
      (first (sort specificity< highest-distinct-specificities)))))

(defn contiguous? [& references]
  {:pre [(apply reference< references)]}
  (if references
    (let [join-points (join-points references)]
      (and (every? (fn [join-point]
                     (let [specificity (apply highest-common-verse-specificity join-point)]
                       (lower-specificities-equal? specificity join-point)))
                   join-points)
           (every? (fn [join-point]
                     (let [specificity (apply highest-common-verse-specificity join-point)]
                       (apply contiguous-ascending-ints? (map specificity join-point))))
                   join-points)))))

(defn ->mask [verse]
  (let [specificity (verse-specificity verse)]
    (conj (lower-specificities specificity) specificity)))

(defn masked-comparator [clojure-comparator-fn mask verse & verses]
  (if verses
    (let [verses (distinct (map #(select-keys % mask) (into [verse] verses)))]
      (loop [[current-specificity & next-specificities] (sort specificity< mask)]
        (if (or (not next-specificities)
                (not (apply = (distinct (map current-specificity verses)))))
          (apply clojure-comparator-fn (distinct (map current-specificity verses)))
          (recur next-specificities))))
    (clojure-comparator-fn verse)))

(defn masked->
  ([mask verse-1 verse-2]
     (let [books    (map :book [verse-1 verse-2])
           chapters (map :chapter [verse-1 verse-2])
           verses   (map :verse [verse-1 verse-2])]
       (cond (= [:book :chapter :verse] mask)
             (or (apply > books)
                 (and (apply = books)
                      (apply > chapters))
                 (and (apply = books)
                      (apply = chapters)
                      (apply > verses)))

             (= [:book :chapter] mask)
             (and (apply = books)
                  (apply > chapters))

             (= [:book] mask)
             (apply > books))))
  ([mask verse-1 verse-2 & verses]
     (if verses
       (let [verses (into [verse-1 verse-2] verses)]
         (every? (fn [verses]
                   {:pre [(= 2 (count verses))]}
                   (apply masked-> mask verses))
                 (partition 2 1 verses)))
       (masked-> mask verse-1 verse-2))))

(defn masked-= [mask verse & verses]
  (if verses
    (apply = (map #(select-key % mask) (into [verse] verses)))
    (= verse)))

(def masked->= [mask verse & verses]
  (if verses
    (let [verses (into [verse] verses)]
      (or (apply masked-= mask verses)
          (apply masked-> mask verses)))
    (>= verse)))

(defn reference-verse-range [{:keys [start end] :as reference}]
  (let [verse-range (drop-while (partial masked-> (->mask start) start) verses)
        verse-range (if end
                      (take-while (partial masked->= (->mask end) end) verse-range)
                      (take-while (partial masked-= (->mask start) start) verse-range))]
    verse-range))

(defn overlapping? [reference-1 reference-2]
  (and (not (= reference-1 reference-2))
       (let [{start-1 :start end-1 :end} reference-1
             {start-2 :start end-2 :end} reference-2]
         )))

(defn none-overlap? [references reference]
  (some (fn [other-reference]
          (overlapping? other-reference reference))
        references))

(defn disjoint-refs? [& references]
  (if references
    (every? (partial none-overlap? references) references)))

(defn merge-refs [start-ref end-ref]
  {:pre [(reference< start-ref end-ref)]}
  (if (contiguous? start-ref end-ref)
    {:start (min-verse start-ref) :end (max-verse end-ref)}
    [start-ref end-ref]))

(comment
  (->str {:start {:book 1 :chapter 35} :end {:book 1 :chapter 36} :kind "family"})
  )
