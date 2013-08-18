(ns time-ui
  (:require [goog.date.DateTime]
            [goog.i18n.DateTimeFormat.Format]
            [goog.i18n.DateTimeFormat])

  (:use-macros [dommy.macros :only [node deftemplate]]))

(defn ->td [date]
  (let [long-date-formatter (goog.i18n/DateTimeFormat. goog.i18n.DateTimeFormat.Format.LONG_DATE)
        now                 date
        formatted-now       (.format long-date-formatter date)]
    (node [:td formatted-now])))

(comment

  (.-textContent (->td (goog.date/DateTime.)))

  (let [long-date-formatter (goog.i18n/DateTimeFormat. goog.i18n.DateTimeFormat.Format.LONG_DATE)
        now                 (goog.date/DateTime.)
        formatted-now       (.format long-date-formatter now)
        h1                  (sel1 :h1)]
    (dom/set-text! h1 (str (dom/text h1) " " formatted-now)))

  (.-textContent (sel1 :#base-plan))

  (dom/text (sel1 :h1))

  (sel :h1)



  (set! (.-value (goog.dom/getElementsByTagNameAndClass "h1")) "Ohai, Charnock!")
  (.-value (goog.dom/getElement "afield"))

  (set! (.-textContent (aget (goog.dom/getElementsByTagNameAndClass "h1") 0)) "Ohai, Whitefield!")
  (.log js/console "h1")


)
