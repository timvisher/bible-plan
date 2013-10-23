(ns bible-plan.reference
  (:require [clojure.string :as string]
            [cljs.reader    :as reader]
            [clojure.set    :as set]
            [shodan.console :as console]))

(def bible (cljs.reader/read-string js/bible_plan.edn.bibles.esv))

(def verse-maps (cljs.reader/read-string js/bible_plan.edn.verse_maps.esv))

(defn max-verse-map [{start-verse-map :start end-verse-map :end :as reference}]
  {:pre [start-verse-map]}
  (or end-verse-map start-verse-map))

(defn min-verse-map [{start-verse-map :start end-verse-map :end :as reference}]
  {:pre [start-verse-map]}
  start-verse-map)

(defn ->verse-maps [reference]
  (let [{:keys [start end]} reference
        verse-maps [start]
        verse-maps (if end
                 (conj verse-maps end)
                 verse-maps)]
    verse-maps))

(defn verse-map-specificity [{:keys [book chapter verse] :as verse-map}]
  {:pre [book]}
  (cond verse
        :verse

        chapter
        :chapter

        book
        :book))

(defn common-specificities [& verse-maps]
  (if verse-maps
    (let [verse-map-specificities (map verse-map-specificity verse-maps)
          specificities-set (into #{} verse-map-specificities)]
      (apply min-key count (map (fn [verse-map-keys]
                                  (filter specificities-set verse-map-keys))
                                (map keys verse-maps))))))

(defn ->comparable-verse [{:keys [book chapter verse] :as verse-map}]
  {:pre [book]}
  [book (or chapter 0) (or verse 0)])

(defn verse-map< [{:keys [book chapter verse] :as verse-map} & verse-maps]
  (let [verse-maps        (into [verse-map] verse-maps)
        comparison-pairs  (partition 2 1 (map ->comparable-verse verse-maps))]
    (every? (fn [comparison-pair]
              (> 0 (apply compare comparison-pair)))
            comparison-pairs)))

(defn reference< [reference & references]
  {:pre [(get-in reference [:start :book])
         (every? #(get-in % [:start :book]) references)]}
  (apply verse-map< (reduce into [] (map ->verse-maps (into [reference] references)))))

(defn ->book-str [{:keys [book chapter] :as verse-map}]
  {:pre [book]}
  (if (not chapter)
    (get-in bible [book :name])
    (get-in bible [book :abbreviation])))

(defn ->chapter-str [{:keys [chapter] :as verse-map}]
  {:pre [chapter]}
  chapter)

(defn ->verse-str [{:keys [verse] :as verse-map}]
  {:pre [verse]}
  verse)

(defn single->str [{:keys [book chapter verse] :as verse-map}]
  {:pre [(or (and book chapter verse)
             (and book chapter (not verse))
             (and book (not (and chapter verse))))
         (every? number? (vals verse-map))]}
  ;; TODO: Each of these should be calls to format
  (cond (and book chapter verse)
        (str (string/capitalize (->book-str verse-map)) ". " (->chapter-str verse-map) "." (->verse-str verse-map))

        (and book chapter)
        (str (string/capitalize (->book-str verse-map)) ". " (->chapter-str verse-map))

        book
        (string/capitalize (->book-str verse-map))))

(defn compound->str [start-verse-map end]
  {:pre [(verse-map< start-verse-map end)]}
  (let [{s-book :book s-chapter :chapter s-verse :verse} start-verse-map
        {e-book :book e-chapter :chapter e-verse :verse} end]
    (cond ;; {:start {:book 30 :chapter 1 :verse 16} :end {:book 30 :chapter 1 :verse 32}}
     (and (= s-book e-book) (= s-chapter e-chapter) (not= s-verse e-verse))
     (str (string/capitalize (->book-str start-verse-map)) ". " (->chapter-str start-verse-map) "." s-verse "-" e-verse)

     ;; {:start {:book 30 :chapter 1 :verse 16} :end {:book 30 :chapter 2 :verse 32}}
     (and (= s-book e-book) (not= s-chapter e-chapter) (not= s-verse e-verse))
     (str (string/capitalize (->book-str start-verse-map)) ". " (->chapter-str start-verse-map) "." s-verse "-" (->chapter-str end) "." e-verse)

     ;; {:start {:book 1 :chapter 35} :end {:book 1 :chapter 36}}
     (and (= s-book e-book) (not= s-chapter e-chapter) (nil? s-verse) (nil? e-verse))
     (str (string/capitalize (->book-str start-verse-map)) ". " (->chapter-str start-verse-map) "-" (->chapter-str end))

     :default
     (str (single->str start-verse-map) "-" (single->str end)))))

(defn ->str [{start-verse-map :start end-verse-map :end :as reference}]
  {:pre [(:book start-verse-map)]}
  (if (and start-verse-map end-verse-map)
    (compound->str start-verse-map end-verse-map)
    (single->str start-verse-map)))

(defn contiguous-ascending-ints? [int-1 & ints]
  {:pre [(number? int-1)
         (every? number? ints)]}
  (loop [[this-int & next-ints] (into [int-1] ints)]
    (if (not (first next-ints))
      true
      (if (= (+ 1 this-int) (first next-ints))
        (recur next-ints)
        false))))

(def verse-map-specificities [:book :chapter :verse])

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
    (filter (partial specificity> specificity) verse-map-specificities)))

(defn lower-specificities-equal? [specificity verse-maps]
  (let [lower-specificities (lower-specificities specificity)]
    (apply = (map (apply juxt lower-specificities) verse-maps))))

(defn highest-common-verse-map-specificity [& verse-maps]
  (if verse-maps
    (let [highest-distinct-specificities (distinct (map verse-map-specificity verse-maps))]
      (first (sort specificity< highest-distinct-specificities)))))

(defn contiguous? [& references]
  {:pre [(apply reference< references)]}
  (if references
    (let [join-points (join-points references)]
      (and (every? (fn [join-point]
                     (let [specificity (apply highest-common-verse-map-specificity join-point)]
                       (lower-specificities-equal? specificity join-point)))
                   join-points)
           (every? (fn [join-point]
                     (let [specificity (apply highest-common-verse-map-specificity join-point)]
                       (apply contiguous-ascending-ints? (map specificity join-point))))
                   join-points)))))

(defn masked-> [verse-map-1 verse-map-2]
  (let [verse-maps [verse-map-1 verse-map-2]]
    (or (and (every? :book verse-maps)
             (apply > (map :book verse-maps)))
        (and (every? :book verse-maps)
             (every? :chapter verse-maps)
             (apply = (map :book verse-maps))
             (apply > (map :chapter verse-maps)))
        (and (every? :book verse-maps)
             (every? :chapter verse-maps)
             (every? :verse verse-maps)
             (apply = (map :book verse-maps))
             (apply = (map :chapter verse-maps))
             (apply > (map :verse verse-maps))))))

(defn masked-= [verse-map-1 verse-map-2]
  (let [verse-maps [verse-map-1 verse-map-2]]
    (apply = (map (apply juxt (apply common-specificities verse-maps)) verse-maps))))

(defn masked->= [verse-map-1 verse-map-2]
  (let [verse-maps [verse-map-1 verse-map-2]]
    (or (apply masked-= verse-maps)
        (apply masked-> verse-maps))))

(defn reference-verse-map-range [{:keys [start end] :as reference}]
  (let [verse-map-range (drop-while (partial masked-> start) verse-maps)
        verse-map-range (if end
                      (take-while (partial masked->= end) verse-map-range)
                      (take-while (partial masked-= start) verse-map-range))]
    verse-map-range))

(defn overlapping? [reference-1 reference-2]
  (let [reference-1-range (reference-verse-map-range reference-1)
        reference-2-range (reference-verse-map-range reference-2)]
    (not (empty? (set/intersection (into #{} reference-1-range) (into #{} reference-2-range))))))

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
    {:start (min-verse-map start-ref) :end (max-verse-map end-ref)}
    [start-ref end-ref]))

(comment
  (->str {:start {:book 1 :chapter 35} :end {:book 1 :chapter 36} :kind "family"})
  )
