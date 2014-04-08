(ns bible-plan.export.remember-the-milk
  (:require [shodan.console :as console]))

(defn ->task [plan-day]
  (console/log (pr-str plan-day)))

;;; produce a series of 20 task long rtm smart task names in mailto links

(defn export [the-plan]
  (dorun (map ->task the-plan)))
