(ns bible-plan.plan
  (:require [bible-plan.reference :as ref]
            time-ui
            [shodan.console       :as console]
            [ajax.core            :as ajax :refer [ajax-request]]))

(def plans (atom {}))

(defn assoc-plan [name plan-data]
  (swap! plans assoc name plan-data))

(defn load-plans []
  (ajax-request "/edn/plans/plans.edn"
                :get
                {:handler (fn load-available-plans [[ok plan-names]]
                            (when ok
                              (doseq [plan-name plan-names]
                                (console/log (str "Loading plan: " plan-name))
                                (ajax-request (str "/edn/plans/" (name plan-name) ".edn")
                                              :get
                                              {:handler (fn [[ok plan-data]]
                                                          (if ok
                                                            (assoc-plan plan-name plan-data)))
                                               :format (ajax/edn-format)}))))
                 :format (ajax/edn-format)}))

(load-plans)

(defn annotate-plan-readings-with-days [plan]
  (map (fn [day-number readings]
         (map (fn [reading]
                (assoc reading :day day-number))
              readings))
       (range)
       plan))

(defn reading-day-> [annotated-reading annotated-reading-day]
                   (let [reading-day-day-number ((comp :day first) annotated-reading-day)
                         reading-day-number     (get annotated-reading :day)]
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
  (let [original-order   (distinct (map (comp :book :start) raw-reading-day))
        grouped-readings (group-by (comp :book :start) raw-reading-day)]
    {:book-order    original-order
     :book-readings grouped-readings}))

(defn coalesce-reading-day [{:keys [book-order book-readings] :as grouped-reading-day}]
  (map (fn merge-reading-book-group [reading-book-group]
         (reduce ref/merge-refs (get book-readings reading-book-group)))
       book-order))

(defn raw-plan-by-book [book-readings book-order]
  (loop [raw-plan            []
         book-readings       book-readings
         [book & next-books] book-order]
    (if book
      (let [current-book-readings (first (get book-readings book))
            next-book-readings    (update-in book-readings [book] rest)]
        (recur (into raw-plan current-book-readings) next-book-readings next-books))
      raw-plan)))

(defn partition-all-balanced [n coll]
  (if (= (.floor js/Math n) n)
    (partition-all n coll)
    (loop [rest-coll-items  coll
           partitioned-coll []
           step-size        (.floor js/Math n)
           sub-1-part       (rem n 1)
           make-up          sub-1-part]
      (if (seq rest-coll-items)
        (recur (drop (+ step-size (.floor js/Math make-up)) rest-coll-items)
               (conj partitioned-coll (take (+ step-size (.floor js/Math make-up)) rest-coll-items))
               step-size
               sub-1-part
               (+ sub-1-part (rem make-up 1)))
        partitioned-coll))))

(defn combine-last-two-items [coll]
  (conj (into [] (take (- (count coll) 2) coll)) (apply concat (drop (- (count coll) 2) coll))))

(defn order-by-book [number-of-reading-days plan]
  (console/log "Ordering by book")
  (let [book-order             (book-order plan)
        book-readings          (book-readings plan)
        raw-plan-by-book       (raw-plan-by-book book-readings book-order)
        raw-reading-days       (partition-all-balanced (/ (count raw-plan-by-book) number-of-reading-days) raw-plan-by-book)
        fixed-raw-reading-days (if (> (count raw-reading-days) number-of-reading-days)
                                 (combine-last-two-items raw-reading-days)
                                 raw-reading-days)
        grouped-reading-days   (map group-reading-day fixed-raw-reading-days)
        coalesced-reading-days (map coalesce-reading-day grouped-reading-days)]
    coalesced-reading-days))

(defn order-by-plan [number-of-reading-days plan]
  (let [raw-reading-days       (map (fn [reading-days]
                                      (reduce into reading-days))
                                    (partition-all-balanced (/ (count plan) number-of-reading-days) plan))
        fixed-raw-reading-days (if (> (count plan) number-of-reading-days)
                                 (combine-last-two-items raw-reading-days)
                                 raw-reading-days)
        grouped-reading-days   (map group-reading-day fixed-raw-reading-days)
        coalesced-reading-days (map coalesce-reading-day grouped-reading-days)]
    coalesced-reading-days))

(defn calculate-plan [{:keys [base-plan start-date end-date skip-days books-at-a-time?] :as plan-options}]
  {:pre [base-plan
         (base-plan @plans)]}
  (let [the-plan   (base-plan @plans)
        start-date (if start-date
                     start-date
                     (time-ui/now))
        end-date   (if end-date
                     end-date
                     (time-ui/inc-date-by-year start-date))
        dates      (filter (comp (complement (or skip-days #{})) time-ui/day) (time-ui/date-range start-date end-date))
        the-plan   (if books-at-a-time?
                     (order-by-book (count dates) the-plan)
                     (order-by-plan (count dates) the-plan))]
    (map (fn [readings date]
           {:readings readings
            :date     date})
         the-plan
         dates)))

(comment
  (in-ns 'bible-plan.plan)
  )
