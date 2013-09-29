(ns bible-plan.ui.plan
  (:require    time-ui
               [bible-plan.ui.reference :as ref-ui]
               [dommy.core              :as dom]
               [bible-plan.plan         :as plan])
  (:use-macros [dommy.macros :only [sel1 sel node deftemplate]]))

(comment
  (in-ns 'bible-plan.ui.plan)
  )

(defn hide-plan []
  (dom/add-class! (sel1 :#plan) :hidden))

(defn show-plan [plan days]
  {:pre [(= (count plan) (count days))]}
  (dom/replace-contents! (sel1 :#plan) (map ref-ui/->tr days plan))
  (dom/remove-class! (sel1 :#plan) :hidden))

(defn calc-plan [e]
  (if (sel1 (keyword "input[name=plan]:checked"))
    (let [plan      (get plan/plans (keyword (.-value (sel1 (keyword "input[name=plan]:checked")))))
          skip-days (map (fn day-input->keyword [day-input]
                           (keyword (.-value day-input)))
                         (sel (keyword "input[name=skip-day]:checked")))
          days      (take (count plan) (filter (complement (partial time-ui/day-in skip-days)) (time-ui/days-from-now)))]
      (show-plan plan days))))

(comment
  (.-value (sel1 (keyword "input[name=books-at-a-time]:checked")))
  )

(comment
  (dom/replace-contents! (sel1 :#plan) [])
  (toggle-plan nil)

  (calc-plan nil)

  (in-ns 'bible-plan.ui.plan)

  (second *charnock*)

  (count (:mcheyne plan/plans))

  (sel1 (keyword ))
  )
