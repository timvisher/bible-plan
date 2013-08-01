(ns bible-plan.core
  (:require [goog.date.DateTime]))

(comment
  (set! (.-value (goog.dom/getElement "afield")) "Ohai, Charnock!")
  (.-value (goog.dom/getElement "afield"))

  (load-namespace 'goog.date.DateTime)
  (goog.date/DateTime.)
  )
