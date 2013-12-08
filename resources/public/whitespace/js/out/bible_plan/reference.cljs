(ns bible-plan.reference
  (:require [clojure.string       :as string]
            [cljs.reader          :as reader]
            [clojure.set          :as set]
            [shodan.console       :as console]
            [bible-plan.verse-map :as verse-map]
            [ajax.core            :as ajax :refer [ajax-request]])
  (:refer-clojure :exclude [<]))

(defn ->verse-maps [reference]
  (let [{:keys [start end]} reference
        verse-maps [start]
        verse-maps (if end
                 (conj verse-maps end)
                 verse-maps)]
    verse-maps))

(defn < [reference & references]
  {:pre [(get-in reference [:start :book])
         (every? #(get-in % [:start :book]) references)]}

  (apply verse-map/< (reduce into [] (map ->verse-maps (into [reference] references)))))

(defn reference? [{:keys [start end] :as reference}]
  (and (verse-map/verse-map? start)
       (if end
         (and (verse-map/verse-map? end)
              (verse-map/< start end))
         true)))

(defn single->str [{:keys [start] :as reference}]
  {:pre [(reference? reference)]}
  (verse-map/->book-chapter?-verse?-str start))

(defn compound->str [{:keys [start end] :as reference}]
  {:pre [(reference? reference)
         end]}
  (let [{s-book :book s-chapter :chapter s-verse :verse :as start-verse-map} start
        {e-book :book e-chapter :chapter e-verse :verse :as end-verse-map}   end]
    (let [verse-string               (str (verse-map/->book-chapter?-verse?-str start-verse-map) "-")
          lowest-unequal-specificity (verse-map/lowest-unequal-specificity end-verse-map start-verse-map)
          shown-specificities        (apply vector (drop-while (fn [specificity]
                                                                 (verse-map/specificity< specificity lowest-unequal-specificity))
                                                               verse-map/verse-map-specificities))
]
      (str verse-string ((verse-map/->str-fn shown-specificities) end-verse-map)))))

(defn ->str [{start-verse-map :start end-verse-map :end :as reference}]
  {:pre [(reference? reference)]}
  (def *whee* :whee)
  (if (and start-verse-map end-verse-map)
    (compound->str reference)
    (single->str reference)))

(defn contiguous-ascending-ints? [int-1 & ints]
  {:pre [(number? int-1)
         (every? number? ints)]}
  (loop [[this-int & next-ints] (into [int-1] ints)]
    (if (not (first next-ints))
      true
      (if (= (+ 1 this-int) (first next-ints))
        (recur next-ints)
        false))))

(defn join-points [references]
  (reduce (fn [start-segments reference-part]
            (if (get reference-part :end)
              (conj start-segments [(get reference-part :end)])
              (update-in start-segments [(- (count start-segments) 1)] conj (get reference-part :start))))
          [[]]
          (reduce (fn [start-and-ends reference]
                    (if (get reference :end)
                      (conj (conj start-and-ends {:start (get reference :start)}) {:end (get reference :end)})
                      (conj start-and-ends reference)))
                  []
                  references)))

(defn contiguous? [& references]
  {:pre [(apply < references)]}
  (if references
    (let [join-points (join-points references)]
      (and (every? (fn [join-point]
                     (let [specificity (apply verse-map/highest-common-verse-map-specificity join-point)]
                       (verse-map/lower-specificities-equal? specificity join-point)))
                   join-points)
           (every? (fn [join-point]
                     (let [specificity (apply verse-map/highest-common-verse-map-specificity join-point)]
                       (apply contiguous-ascending-ints? (map specificity join-point))))
                   join-points)))))

(defn reference-verse-map-range [{:keys [start end] :as reference}]
  {:pre [(reference? reference)
         end]}
  (verse-map/verse-map-range start end))

(defn overlapping? [reference-1 reference-2]
  (let [reference-1-range (reference-verse-map-range reference-1)
        reference-2-range (reference-verse-map-range reference-2)]
    (not (empty? (set/intersection (into #{} reference-1-range) (into #{} reference-2-range))))))

(defn none-overlap? [references reference]
  (some (fn [other-reference]
          (overlapping? other-reference reference))
        references))

(defn disjoint-refs? [& references]
  (if references
    (every? (partial none-overlap? references) references)))

(defn merge-refs [start-ref end-ref]
  {:pre [(< start-ref end-ref)]}
  (if (contiguous? start-ref end-ref)
    (let [sorted-verse-maps (sort verse-map/< (reduce into [] (map ->verse-maps [start-ref end-ref])))]
      {:start (first sorted-verse-maps) :end (last sorted-verse-maps)})
    [start-ref end-ref]))

(comment
  (->str {:start {:book 1 :chapter 35} :end {:book 1 :chapter 36} :kind "family"})
  )
