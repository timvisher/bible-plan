(ns bible-plan.ui.plan
  (:use-macros [dommy.macros :only [sel1 sel node deftemplate]]))

(defn show-plan [plan e]
  (dom/replace-contents! e (map ref-ui/->tr (time-ui/days-from-today) plan)))
