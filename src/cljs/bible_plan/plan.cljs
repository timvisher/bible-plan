(ns bible-plan.plan
  (:require [bible-plan.plan.mcheyne :as mcheyne]
            [bible-plan.reference    :as ref]
            time-ui
            [shodan.console          :as console]))

(def plans {:mcheyne mcheyne/mcheyne})

(defn book-order [plan]
  (loop [[reading & next-readings] (reduce into [] plan)
         seen                                #{}
         book-order                          []]
    (if (not reading)
      book-order
      (let [reading-book (get-in reading [:start :book])]
        (if (not (seen reading-book))
          (recur next-readings (conj seen reading-book) (conj book-order reading-book))
          (recur next-readings seen book-order))))))

(defn book-readings [plan]
  (loop [[reading & next-readings] (reduce into [] plan)
         book-readings             {}]
    (if (not reading)
      book-readings
      (let [reading-book (get-in reading [:start :book])]
        (if (get book-readings reading-book)
          (recur next-readings (update-in book-readings [reading-book] conj reading))
          (recur next-readings (assoc book-readings reading-book [reading])))))))

(defn group-reading-day [raw-reading-day]
  (group-by (comp :book :start) raw-reading-day))

(defn coalesce-reading-day [grouped-reading-day]
  (let [books (keys grouped-reading-day)]
    (map (fn merge-reading-book-group [reading-book-group]
           (reduce ref/merge-refs (get grouped-reading-day reading-book-group)))
         books)))

(defn order-by-book [number-of-reading-days plan]
  (console/log "Ordering by book")
  (let [book-order             (book-order plan)
        book-readings          (book-readings plan)
        raw-plan-by-book       (reduce into [] (map (partial get book-readings) book-order))
        raw-reading-days       (partition-all (/ (count raw-plan-by-book) number-of-reading-days) raw-plan-by-book)
        grouped-reading-days   (map group-reading-day raw-reading-days)
        _ (def *charnock* grouped-reading-days)
        coalesced-reading-days (map coalesce-reading-day grouped-reading-days)]
    grouped-reading-days))

(defn calculate-plan [{:keys [base-plan start-date end-date skip-days books-at-a-time?] :as plan-options}]
  {:pre [base-plan
         (base-plan plans)]}
  (let [the-plan   (base-plan plans)
        start-date (if start-date
                     start-date
                     (time-ui/now))
        end-date   (if end-date
                     end-date
                     (time-ui/inc-date-by-year start-date))
        dates      (filter (complement (partial time-ui/day-in skip-days)) (time-ui/date-range start-date (time-ui/inc-date-by-day end-date)))
        the-plan   (if books-at-a-time?
                     (order-by-book (count dates) the-plan)
                     the-plan)]
    (map (fn [readings date]
           {:readings readings
            :date      date})
         the-plan
         dates)))

(comment
  (in-ns 'bible-plan.plan)
  )
