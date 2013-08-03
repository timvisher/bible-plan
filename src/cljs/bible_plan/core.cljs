(ns bible-plan.core
  (:require    [goog.date.DateTime]
               [dommy.core :as dom])
  (:use-macros [dommy.macros :only [sel sel1]]))

(comment

  (.-textContent (sel1 :body))

  (dom/text (sel1 :h1))

  (sel :h1)

  (goog.date/DateTime.)

  (set! (.-value (goog.dom/getElementsByTagNameAndClass "h1")) "Ohai, Charnock!")
  (.-value (goog.dom/getElement "afield"))

  (set! (.-textContent (aget (goog.dom/getElementsByTagNameAndClass "h1") 0)) "Ohai, Whitefield!")
  (.log js/console "h1")
  

)
