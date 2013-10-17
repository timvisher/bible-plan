(ns bible-plan.plan
  (:require [bible-plan.plan.mcheyne :as mcheyne]
            time-ui
            [shodan.console          :as console]))

(def plans {:mcheyne mcheyne/mcheyne})

(defn order-by-book [plan]
  (console/log "Ordering by book")
  plan)

(defn calculate-plan [{:keys [base-plan available-dates skip-days books-at-a-time?] :as plan-options}]
  {:pre [base-plan
         (base-plan plans)]}
  (let [dates    (take (count (base-plan plans)) (filter (complement (partial time-ui/day-in skip-days)) available-dates))
        the-plan (if books-at-a-time?
                   (order-by-book base-plan)
                   base-plan)]
    (map (fn [readings date]
           {:readings readings
            :date      date})
         (base-plan plans)
         dates)))

(comment
  (in-ns 'bible-plan.plan)
  )
