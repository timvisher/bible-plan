(ns time-ui
  (:require [goog.date.Date]
            [goog.date.DateTime]
            [goog.date.Interval]
            [goog.date.DateRange]
            [goog.i18n.DateTimeSymbols :as g-date-time-symbols]
            [goog.i18n.DateTimeFormat.Format]
            [goog.i18n.DateTimeFormat])

  (:use-macros [dommy.macros :only [node deftemplate]]))

(comment
  (in-ns 'time-ui)
  )

(def weekdays {"Monday" :monday
               "Tuesday" :tuesday
               "Wednesday" :wednesday
               "Thursday" :thursday
               "Friday" :friday
               "Saturday" :saturday
               "Sunday" :sunday})

(defn day [date]
  (get weekdays (get g-date-time-symbols/WEEKDAYS (.getDay date))))

(defn now []
  (goog.date.DateTime.))

(defn inc-date-by-day [date]
  (doto (.clone date)
    (.add (goog.date.Interval. 0 0 1))))

(defn dec-date-by-day [date]
  (doto (.clone date)
    (.add (goog.date.Interval. 0 0 -1))))

(defn inc-date-by-year [date]
  (doto (.clone date)
    (.add (goog.date.Interval. 1))))

(defn date>= [date-1 date-2]
  (<= 0 (goog.date.Date/compare date-1 date-2)))

(defn date> [date-1 date-2]
  (< 0 (goog.date.Date/compare date-1 date-2)))

(defn days-from [date]
  (iterate inc-date-by-day date))

(defn date-range [start-date end-date]
  (let [all-days (days-from start-date)]
    (take-while (partial date> end-date) all-days)))

(defn days-from-now []
  (days-from (now)))

(defn date->long-format [date]
  (let [long-date-formatter (goog.i18n.DateTimeFormat. goog.i18n.DateTimeFormat.Format.LONG_DATE)
        formatted-date      (.format long-date-formatter date)]
    formatted-date))

(defn ->td [date]
  (let [long-date-formatter (goog.i18n.DateTimeFormat. goog.i18n.DateTimeFormat.Format.LONG_DATE)
        now                 date
        formatted-now       (.format long-date-formatter date)]
    (node [:td (date->long-format date)])))

(def days-of-week {:sunday    0
                   :monday    1
                   :tuesday   2
                   :wednesday 3
                   :thursday  4
                   :friday    5
                   :saturday  6})

(defn day-is [day-of-week date]
  (= (day-of-week days-of-week) (.getDay date)))

(defn day-in [days-of-week date]
  (if (and days-of-week 
           (not (empty? days-of-week)))
      (some identity ((apply juxt (map #(partial day-is %) days-of-week)) date))))

(comment

  (day-in [:sunday :tuesday :wednesday :monday] (now))
  (day-in [] (now))
  (in-ns 'time-ui)
  ((juxt (partial day-is :sunday) (partial day-is :monday) (partial day-is :tuesday) (partial day-is :wednesday)) (now))
  ((partial day-is :sunday) (now))

  (set! (.-checked (sel1 (keyword "input[name=plan]:checked"))) false)

  (take 20 (filter (complement (partial day-is :sunday)) (days-from-now)))

  (.getDay (now))

  days-of-week


  (+ 1 1)

  (take 5 (days-from-now))

  (let [long-date-formatter (goog.i18n.DateTimeFormat. goog.i18n.DateTimeFormat.Format.LONG_DATE)
        now                 (now)
        time                (.add now (goog.date.Interval. 0 0 1))
        formatted-now       (.format long-date-formatter time)]
    formatted-now)

  (def charnock (now))

  (doto (now)
    (.add (goog.date.Interval. 0 0 1)))
  
  (.add charnock (goog.date.Interval. 0 0 1))

  (.-textContent (sel1 :#base-plan))

  (dom/text (sel1 :h1))

  (sel :h1)



  (set! (.-value (goog.dom.getElementsByTagNameAndClass "h1")) "Ohai, Charnock!")
  (.-value (goog.dom.getElement "afield"))

  (set! (.-textContent (aget (goog.dom.getElementsByTagNameAndClass "h1") 0)) "Ohai, Whitefield!")
  (.log js/console "h1")

)
