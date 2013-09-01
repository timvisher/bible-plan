(ns bible-plan.ui.plan
  (:require    time-ui
               [bible-plan.ui.reference :as ref-ui]
               [dommy.core              :as dom])
  (:use-macros [dommy.macros :only [sel1 sel node deftemplate]]))

(defn show-plan [plan e]
  (dom/replace-contents! (sel1 :#base-plan) (map ref-ui/->tr (time-ui/days-from-now) plan)))
