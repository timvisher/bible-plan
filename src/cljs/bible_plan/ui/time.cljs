(ns bible-plan.ui.time
  (:require goog.i18n.DateTimeFormat.Format
            goog.i18n.DateTimeFormat)

  (:use-macros [dommy.macros :only [node]]))

(defn ->td [date]
  (let [long-date-formatter (goog.i18n.DateTimeFormat. goog.i18n.DateTimeFormat.Format.LONG_DATE)
        now                 date
        formatted-now       (.format long-date-formatter date)]
    (node [:td (date->long-format date)])))
