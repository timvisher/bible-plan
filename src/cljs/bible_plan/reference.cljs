(ns bible-plan.reference
  (:require    [dommy.core         :as dom]
               [bible-plan.mcheyne :as mcheyne]
               [bible-plan.bible   :as bible]
               [clojure.string     :as string])

  (:use-macros [dommy.macros :only [sel1 sel node deftemplate]]))

(deftemplate ->li [reference]
  [:li (str (get-in reference [:start :book]) " " (get-in reference [:start :chapter]))])

(defn reference< [reference & references]
  {:pre [#(every? :book (into [reference] references))]}
  (let [references (into [reference] references)
        books      (map :book references)
        chapters   (map #(or (:chapter %) 1) references)
        verses     (map #(or (:verse %) 1) references)]
    (or (apply < books)
        (and (apply = books) (apply < chapters))
        (and (apply = books) (apply = chapters) (apply < verses)))))

(comment
  (dom/append! (sel1 :#base-plan) (->li {:start {:book 1 :chapter 1}}))

  (->str {:start {:book 30}}) ;; => Amos

  bible/bible

  *charnock*
  (->str {:start {:book 30 :chapter 1}}) ;; => Am. 1
  (->str {:start {:book 30 :chapter 1 :verse 1}}) ;; => Am. 1.1
  (->str {:start {:book 30 :chapter 1} :end {:book 30 :chapter 1 :verse 15}}) ;; => Am. 1.1-15
  (->str {:start {:book 30 :chapter 1 :verse 16} :end {:book 30 :chapter 1 :verse 32}}) ;; => Am. 1.16-32
  (->str {:start {:book 30 :chapter 1} :end {:book 29 :chapter 1}}) ;; => Error. References must be in book order
  (->str {:start {:book 30 :chapter 1} :end {:book 32 :chapter 3}}) ;; => Am. 1-Jon. 3
  (->str {:start {:book 30 :chapter 1 :verse 15} :end {:book 30 :chapter 1 :verse 1}}) ;; Error. References must be in ascending order
  mcheyne/mcheyne
  )

(defn ->book-str [{:keys [book chapter] :as reference}]
  {:pre [book]}
  (if (not chapter)
    (get-in bible/bible [book :name])
    (get-in bible/bible [book :abbreviation])))

(defn ->chapter-str [{:keys [chapter] :as reference}]
  chapter)

(defn ->verse-str [{:keys [verse] :as reference}]
  verse)

(defn single->str [{:keys [book chapter verse] :as reference}]
  {:pre [(or (and book chapter verse)
             (and book chapter (not verse))
             (and book (not chapter verse)))]}
  (def ^:dynamic *charnock* [book chapter verse reference])
  (cond (and book chapter verse)
        (str (string/capitalize (->book-str reference)) ". " (->chapter-str reference) "." (->verse-str reference))

        (and book chapter)
        (str (string/capitalize (->book-str reference)) ". " (->chapter-str reference))

        book
        (string/capitalize (->book-str reference))))

(defn compound->str [start end]
  {:pre [(reference< start end)]}
  (let [{s-book :book s-chapter :chapter s-verse :verse :or {s-chapter 1 s-verse 1}} start
        {e-book :book e-chapter :chapter e-verse :verse :or {e-chapter 1 e-verse 1}} end]
    (cond (and (= s-book e-book) (= s-chapter e-chapter) (not= s-verse e-verse))
          (str (string/capitalize (->book-str start)) ". " (->chapter-str start) "." s-verse "-" e-verse)

          (and (= s-book e-book) (not= s-chapter e-chapter) (not= s-verse e-verse))
          (str (string/capitalize (->book-str start)) ". " (->chapter-str start) "." s-verse "-" (->chapter-str end) "." e-verse)

          :default
          (str (single->str start) "-" (single->str end)))))

(defn ->str [{:keys [start end] :as reference}]
  {:pre [(:book start)]}
  (if (and start end)
    (compound->str start end)
    (single->str start)))


