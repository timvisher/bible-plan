(ns bible-plan.plan
  (:require [bible-plan.plan.mcheyne :as mcheyne]
            time-ui))

(def plans {:mcheyne mcheyne/mcheyne})

(defn order-by-book [plan]
  plan)

(defn calculate-plan [{:keys [base-plan available-dates skip-days books-at-a-time?] :as plan-options}]
  {:pre [base-plan
         (base-plan plans)]}
  (let [dates (take (count (base-plan plans)) (filter (complement (partial time-ui/day-in skip-days)) available-dates))]
    (map (fn [readings date]
           {:readings readings
            :day      date})
         (base-plan plans)
         dates)))

(comment
  (in-ns 'bible-plan.plan)
  )
