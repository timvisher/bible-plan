(ns bible-plan.export.html
  (:require    [bible-plan.ui.time      :as ui-time]
               [bible-plan.ui.reference :as ui-ref])
  (:use-macros [dommy.macros :only [deftemplate]]))

(deftemplate plan-day->tr [{:keys [readings date] :as plan-day}]
  [:tr
   (ui-time/->td date)
   (map ui-ref/->td readings)])

(defn plan->dom-content [the-plan]
  (map plan-day->tr the-plan))

(defn export [the-plan]
  (plan->dom-content the-plan))
