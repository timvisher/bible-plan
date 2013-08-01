(ns bible-plan.core
  (:require [bible-plan.mcheyne]
            [clj-time.core :as time]
            [clj-time.format :as time-format]
            [clojure.string :as string]
            [postal.core :as mail]))

(def days-from-today (map #(time/plus (time/now) (time/days %)) (range)))
(def not-sundays-from-today (filter (comp (partial not= 7) time/day-of-week) days-from-today))

(defn datetime->year-month-day [datetime]
  (time-format/unparse (time-format/formatters :year-month-day) datetime))

(defn rtm-task [datetime task]
  (str task " ^" (datetime->year-month-day datetime)))

(def rtm-import-max-tasks 20)

(defn send-import-mail [list body]
  (mail/send-message {:from    "bible-plan-generator@ssm-monetate.local"
                      :to      ["tim.visher+85c483+import@rmilk.com"]
                      :subject list
                      :body    body}))

(defn import-to-rtm [rtm-tasks]
  (let [par-rtm-tasks (partition-all 20 rtm-tasks)]
    (doseq [rtm-task-mail-body (map (partial string/join "\n") par-rtm-tasks)]
      (send-import-mail "cl.ps.bible_reading" rtm-task-mail-body))))

(comment
  (with-open [r (clojure.java.io/reader "mcheyne-by-books.txt")]
    (let [reading-points (line-seq r)
          rtm-tasks      (map rtm-task not-sundays-from-today reading-points)]
      (import-to-rtm rtm-tasks)))

  ;; Should be useful if you want to do this via clojurescript as a static site.
  ;; http://stackoverflow.com/questions/10356329/mailto-link-multiple-body-lines
  )

(def bible
  #{{:number 1 :name "genesis" :chapters 50}
    {:number 2 :name "exodus" :chapters 40}
    {:number 3 :name "leviticus" :chapters 27}
    {:number 4 :name "numbers" :chapters 36}
    {:number 5 :name "deuteronomy" :chapters 34}
    {:number 6 :name "joshua" :chapters 24}
    {:number 7 :name "judges" :chapters 21}
    {:number 8 :name "ruth" :chapters 4}
    {:number 9 :name "1 samuel" :chapters 31}
    {:number 10 :name "2 samuel" :chapters 24}
    {:number 11 :name "1 kings" :chapters 22}
    {:number 12 :name "2 kings" :chapters 25}
    {:number 13 :name "1 chronicles" :chapters 29}
    {:number 14 :name "2 chronicles" :chapters 36}
    {:number 15 :name "ezra" :chapters 10}
    {:number 16 :name "nehemiah" :chapters 13}
    {:number 17 :name "esther" :chapters 10}
    {:number 18 :name "job" :chapters 42}
    {:number 19 :name "psalms" :chapters 150}
    {:number 20 :name "proverbs" :chapters 31}
    {:number 21 :name "ecclesiastes" :chapters 12}
    {:number 22 :name "song of songs" :chapters 8}
    {:number 23 :name "isaiah" :chapters 66}
    {:number 24 :name "jeremiah" :chapters 52}
    {:number 25 :name "lamentations" :chapters 5}
    {:number 26 :name "ezekiel" :chapters 48}
    {:number 27 :name "daniel" :chapters 14}
    {:number 28 :name "hosea" :chapters 14}
    {:number 29 :name "joel" :chapters 4}
    {:number 30 :name "amos" :chapters 9}
    {:number 31 :name "obadiah" :chapters 1}
    {:number 32 :name "jonah" :chapters 4}
    {:number 33 :name "micah" :chapters 7}
    {:number 34 :name "nahum" :chapters 3}
    {:number 35 :name "habakkuk" :chapters 3}
    {:number 36 :name "zephaniah" :chapters 3}
    {:number 37 :name "haggai" :chapters 2}
    {:number 38 :name "zechariah" :chapters 14}
    {:number 39 :name "malachi" :chapters 3}
    {:number 40 :name "matthew" :chapters 28}
    {:number 41 :name "mark" :chapters 16}
    {:number 42 :name "luke" :chapters 24}
    {:number 43 :name "john" :chapters 21}
    {:number 44 :name "acts" :chapters 28}
    {:number 45 :name "romans" :chapters 16}
    {:number 46 :name "1 corinthians" :chapters 16}
    {:number 47 :name "2 corinthians" :chapters 13}
    {:number 48 :name "galatians" :chapters 6}
    {:number 49 :name "ephesians" :chapters 6}
    {:number 50 :name "philippians" :chapters 4}
    {:number 51 :name "colossians" :chapters 4}
    {:number 52 :name "1 thessalonians" :chapters 5}
    {:number 53 :name "2 thessalonians" :chapters 3}
    {:number 54 :name "1 timothy" :chapters 6}
    {:number 55 :name "2 timothy" :chapters 4}
    {:number 56 :name "titus" :chapters 3}
    {:number 57 :name "philemon" :chapters 1}
    {:number 58 :name "hebrews" :chapters 13}
    {:number 59 :name "james" :chapters 5}
    {:number 60 :name "1 peter" :chapters 5}
    {:number 61 :name "2 peter" :chapters 3}
    {:number 62 :name "1 john" :chapters 5}
    {:number 63 :name "2 john" :chapters 1}
    {:number 64 :name "3 john" :chapters 1}
    {:number 65 :name "jude" :chapters 1}
    {:number 66 :name "revelation" :chapters 22}})

(defn reference<* [reference1 reference2]
  )

(defn sparse-reference->reference [{:keys [book chapter verse] :as sparse-reference}]
  {:pre [book
         (number? book)
         (if chapter (number? chapter) true)
         (if verse (number? verse) true)
         (if verse chapter true)]}
  (let [chapter (if chapter chapter 1)
        verse   (if verse verse 1)]
    {:book book
     :chapter chapter
     :verse verse}))

(defn reference< [reference & references]
  {:pre [(:book reference)
         #(every? :book references)]}
  (let [references (map sparse-reference->reference (into [reference] references))]
    (cond (apply < (map :book references))
          true

          
         (apply < (map :chapter references))
         (apply < (map :verse references))
         ;; refs with books = to each other are < if (< chapters)
         ;; refs with (= books chapters) are < if (< verses)
         )))

(comment
  (first (filter #(some (fn [plan-day] (and (:start plan-day) (:end plan-day))) %) bible-plan.mcheyne/mcheyne))
  [{:kind "family", :start {:book "genesis", :chapter 9}, :end {:book "genesis", :chapter 10}}
   {:kind "family", :start {:book "matthew", :chapter 9}}
   {:kind "secret", :start {:book "ezra", :chapter 9}}
   {:kind "secret", :start {:book "acts", :chapter 9}}]
  [{:kind "family", :start {:book "genesis", :chapter 1}}
   {:kind "family", :start {:book "matthew", :chapter 1}}
   {:kind "secret", :start {:book "ezra", :chapter 1}}
   {:kind "secret", :start {:book "acts", :chapter 1}}]
  )
