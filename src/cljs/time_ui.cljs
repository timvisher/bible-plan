(ns time-ui
  (:require [goog.date.DateTime]
            [goog.date.Interval]
            [goog.i18n.DateTimeFormat.Format]
            [goog.i18n.DateTimeFormat])

  (:use-macros [dommy.macros :only [node deftemplate]]))

(defn now []
  (goog.date/DateTime.))

(defn inc-date-by-day [date]
  (doto date
    (.add (goog.date/Interval. 0 0 1))))

(defn days-from [date]
  (iterate inc-date-by-day date))

(defn days-from-now []
  (days-from (now)))

(defn date->long-format [date]
  (let [long-date-formatter (goog.i18n/DateTimeFormat. goog.i18n.DateTimeFormat.Format.LONG_DATE)
        formatted-date      (.format long-date-formatter date)]
    formatted-date))

(defn ->td [date]
  (let [long-date-formatter (goog.i18n/DateTimeFormat. goog.i18n.DateTimeFormat.Format.LONG_DATE)
        now                 date
        formatted-now       (.format long-date-formatter date)]
    (node [:td (date->long-format date)])))

(comment

  (take 5 (days-from-now))

  (let [long-date-formatter (goog.i18n/DateTimeFormat. goog.i18n.DateTimeFormat.Format.LONG_DATE)
        now                 (now)
        time                (.add now (goog.date/Interval. 0 0 1))
        formatted-now       (.format long-date-formatter time)]
    formatted-now)

  (def charnock (now))

  (doto (now)
    (.add (goog.date/Interval. 0 0 1)))
  
  (.add charnock (goog.date/Interval. 0 0 1))

  (.-textContent (sel1 :#base-plan))

  (dom/text (sel1 :h1))

  (sel :h1)



  (set! (.-value (goog.dom/getElementsByTagNameAndClass "h1")) "Ohai, Charnock!")
  (.-value (goog.dom/getElement "afield"))

  (set! (.-textContent (aget (goog.dom/getElementsByTagNameAndClass "h1") 0)) "Ohai, Whitefield!")
  (.log js/console "h1")


)
