(ns bible-plan.reference
  (:require    [dommy.core         :as dom]
               [bible-plan.mcheyne :as mcheyne]
               [bible-plan.bible   :as bible]
               [clojure.string     :as string])

  (:use-macros [dommy.macros :only [sel1 sel node deftemplate]]))

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

(comment
  (dom/append! (sel1 :#base-plan) (->li {:start {:book 1 :chapter 1}}))

  (dom/replace-contents! (sel1 :#base-plan) (map ->li mcheyne/mcheyne))

  (dom/listen! (sel1 (keyword "input[name=plan]")) :change (fn [e] (.log js/console e)))
  )

(defn ->book-str [{:keys [book chapter] :as reference}]
  {:pre [book]}
  (if (not chapter)
    (get-in bible/bible [book :name])
    (get-in bible/bible [book :abbreviation])))

(defn ->chapter-str [{:keys [chapter] :as reference}]
  {:pre [chapter]}
  chapter)

(defn ->verse-str [{:keys [verse] :as reference}]
  {:pre [verse]}
  verse)

(defn single->str [{:keys [book chapter verse] :as reference}]
  {:pre [(or (and book chapter verse)
             (and book chapter (not verse))
             (and book (not chapter verse)))]}
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

(deftemplate ->li [day]
  [:li (string/join ", " (map ->str day))])
