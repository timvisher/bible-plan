(ns bible-plan.core
  (:require [bible-plan.plan.mcheyne]
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

(comment
  (first (filter #(some (fn [plan-day] (and (:start plan-day) (:end plan-day))) %) bible-plan.plan.mcheyne/mcheyne))
  [{:kind "family", :start {:book "genesis", :chapter 9}, :end {:book "genesis", :chapter 10}}
   {:kind "family", :start {:book "matthew", :chapter 9}}
   {:kind "secret", :start {:book "ezra", :chapter 9}}
   {:kind "secret", :start {:book "acts", :chapter 9}}]
  [{:kind "family", :start {:book "genesis", :chapter 1}}
   {:kind "family", :start {:book "matthew", :chapter 1}}
   {:kind "secret", :start {:book "ezra", :chapter 1}}
   {:kind "secret", :start {:book "acts", :chapter 1}}]
  )
