(ns bible-plan.ui.time
  (:require goog.i18n.DateTimeFormat.Format
            goog.i18n.DateTimeFormat)

  (:use-macros [dommy.macros :only [node]]))

(defn date->long-format [date]
  (let [long-date-formatter (goog.i18n.DateTimeFormat. goog.i18n.DateTimeFormat.Format.LONG_DATE)
        formatted-date      (.format long-date-formatter date)]
    formatted-date))

(defn ->td [date]
  (node [:td (date->long-format date)]))
