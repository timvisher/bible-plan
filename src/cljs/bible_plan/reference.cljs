(ns bible-plan.reference
  (:require [clojure.string :as string]
            [cljs.reader    :as reader]))

(def bible (cljs.reader/read-string js/bible_edn))

(defn reference< [reference & references]
  {:pre [#(every? :book (into [reference] references))]}
  (let [references              (into [reference] references)
        [books chapters verses] ((juxt (partial map :book)
                                       (partial map :chapter)
                                       (partial map :verse))
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
    (def ^:dynamic *charnock* [s-book e-book s-chapter e-chapter s-verse e-verse])
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

(comment
  (->str {:start {:book 1 :chapter 35} :end {:book 1 :chapter 36} :kind "family"})
  *charnock*
  )
