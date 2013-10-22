(ns bible-plan.plan
  (:require [bible-plan.reference :as ref]
            time-ui
            [shodan.console       :as console]))

(def plans {:mcheyne (cljs.reader/read-string js/bible_plan.edn.plans.mcheyne)})

(defn annotate-plan-readings-with-days [plan]
  (map (fn [day-number readings]
         (map (fn [reading]
                (assoc reading :day day-number))
              readings))
       (range)
       plan))

(defn reading-day-> [annotated-reading annotated-reading-day]
                   (let [reading-day-day-number ((comp :day first) annotated-reading-day)
                         reading-day-number     (:day annotated-reading)]
                     (> reading-day-number reading-day-day-number)))

(defn reading-book? [book reading-day]
  (some (fn start-or-end-in-book? [{{s-book :book} :start {e-book :book} :end}]
          (some (partial = book) [s-book e-book]))
        reading-day))

(defn readings-for-book-in-reading-day [book reading-day]
  (some (fn start-or-end-in-book? [{{s-book :book} :start {e-book :book} :end :as reading}]
          (if (some (partial = book) [s-book e-book])
            reading))
        reading-day))

(defn contiguous-readings-from [annotated-plan annotated-reading]
  (let [available-reading-days       (drop-while (partial reading-day-> annotated-reading) annotated-plan)
        annotated-reading-book       (get-in annotated-reading [:start :book])
        contiguous-book-reading-days (take-while (partial reading-book? annotated-reading-book) available-reading-days)
        readings-for-book            (map (partial readings-for-book-in-reading-day annotated-reading-book) contiguous-book-reading-days)]
    readings-for-book))

(defn book-order [plan]
  (let [annotated-plan     (map (fn [reading-day]
                                  (map #(select-keys % [:start :end :day]) reading-day))
                                (annotate-plan-readings-with-days plan))
        annotated-readings (reduce into [] annotated-plan)]
    (loop [[annotated-reading & next-annotated-readings] annotated-readings
           processed-readings                            #{}
           book-order                                    []]
      (if (not annotated-reading)
        book-order
        (if (processed-readings annotated-reading)
          (recur next-annotated-readings processed-readings book-order)
          (let [contiguous-readings (contiguous-readings-from annotated-plan annotated-reading)]
            (recur next-annotated-readings (into processed-readings contiguous-readings) (conj book-order (get-in annotated-reading [:start :book])))))))))

(defn update-vals [the-map update-fn]
  (into {} (for [[k v] the-map] [k (update-fn v)])))

(defn group-into-ascending-readings [readings]
  (reduce (fn [ascending-readings reference]
            (if (ref/reference< (last (nth ascending-readings (- (count ascending-readings) 1))) reference)
              (update-in ascending-readings [(- (count ascending-readings) 1)] conj reference)
              (conj ascending-readings [reference])))
          [[(first readings)]]
          (rest readings)))

(defn book-readings [plan]
  {:post [;; (every? (fn [[_ book-readings]]
          ;;           (apply ref/disjoint-refs? book-readings))
          ;;         %)
          ]}
  (let [readings          (reduce into [] plan)
        raw-book-readings (group-by (fn reading-start-book [reading]
                                      (get-in reading [:start :book]))
                                    readings)]
    (update-vals raw-book-readings group-into-ascending-readings)))

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
