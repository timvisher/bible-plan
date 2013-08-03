(ns bible-plan.core
  (:require    [goog.date.DateTime]
               [goog.i18n.DateTimeFormat.Format]
               [goog.i18n.DateTimeFormat]
               [dommy.core :as dom])
  (:use-macros [dommy.macros :only [sel sel1]]))

(let [long-date-formatter (goog.i18n/DateTimeFormat. goog.i18n.DateTimeFormat.Format.LONG_DATE)
      now                 (goog.date/DateTime.)
      formatted-now       (.format long-date-formatter now)
      h1                  (sel1 :h1)]
  (dom/set-text! h1 (str (dom/text h1) " " formatted-now)))

(comment

  (.-textContent (sel1 :body))

  (dom/text (sel1 :h1))

  (sel :h1)

  

  (set! (.-value (goog.dom/getElementsByTagNameAndClass "h1")) "Ohai, Charnock!")
  (.-value (goog.dom/getElement "afield"))

  (set! (.-textContent (aget (goog.dom/getElementsByTagNameAndClass "h1") 0)) "Ohai, Whitefield!")
  (.log js/console "h1")
  

)
