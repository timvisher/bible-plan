(ns bible-plan.verse-map
  (:require [clojure.string   :as string]
            [ajax.core        :as ajax :refer [ajax-request]]
            [shodan.console   :as console]
            [bible-plan.bible :as bible])
  (:refer-clojure :exclude [< range]))

(def verse-maps (atom {}))

(defn assoc-verse-map [name verse-map-data]
  (swap! verse-maps assoc name verse-map-data))

(defn load-verse-maps []
  (ajax-request "/edn/verse-maps/verse-maps.edn"
                :get
                {:handler (fn load-available-verse-maps [[ok verse-map-names]]
                            (when ok
                              (doseq [verse-map-name verse-map-names]
                                (console/log (str "Loading verse-map: " verse-map-name))
                                (ajax-request (str "/edn/verse-maps/" (name verse-map-name) ".edn")
                                              :get
                                              {:handler (fn [[ok verse-map-data]]
                                                          (if ok
                                                            (assoc-verse-map verse-map-name verse-map-data)))
                                               :format (ajax/edn-format)}))))
                 :format (ajax/edn-format)}))

(load-verse-maps)

(defn verse-map? [{:keys [book chapter verse] :as maybe-verse-map}]
  (and (or (and book chapter verse)
           (and book chapter (not verse))
           (and book (not (and chapter verse))))
       (every? number? (vals maybe-verse-map))))

(defn ->comparable-verse [{:keys [book chapter verse] :as verse-map}]
  {:pre [book]}
  [book (or chapter 0) (or verse 0)])

(defn < [{:keys [book chapter verse] :as verse-map} & verse-maps]
  (let [verse-maps        (into [verse-map] verse-maps)
        comparison-pairs  (partition 2 1 (map ->comparable-verse verse-maps))]
    (every? (fn [comparison-pair]
              (> 0 (apply compare comparison-pair)))
            comparison-pairs)))

(defn verse-map-specificity [{:keys [book chapter verse] :as verse-map}]
  {:pre [book]}
  (cond verse
        :verse

        chapter
        :chapter

        book
        :book))

(defn common-specificities [& verse-maps]
  (if verse-maps
    (let [verse-map-specificities (map verse-map-specificity verse-maps)
          specificities-set (into #{} verse-map-specificities)]
      (apply min-key count (map (fn [verse-map-keys]
                                  (filter specificities-set verse-map-keys))
                                (map keys verse-maps))))))

(def verse-map-specificities [:book :chapter :verse])

(def specificity-weight {:book    1
                         :chapter 2
                         :verse   3})

(defn specificity-comparator-fn [clojure-comparator-fn]
  (fn [& specificities]
    (if specificities
      (apply clojure-comparator-fn (map specificity-weight specificities)))))

(def specificity< (specificity-comparator-fn clojure.core/<))

(def specificity> (specificity-comparator-fn >))

(defn lower-specificities [specificity]
  (let [specificity-weight (specificity-weight specificity)]
    (filter (partial specificity> specificity) verse-map-specificities)))

(defn lower-specificities-equal? [specificity verse-maps]
  (let [lower-specificities (lower-specificities specificity)]
    (apply = (map (apply juxt lower-specificities) verse-maps))))

(defn highest-common-verse-map-specificity [& verse-maps]
  (if verse-maps
    (let [highest-distinct-specificities (distinct (map verse-map-specificity verse-maps))]
      (first (sort specificity< highest-distinct-specificities)))))

(defn masked-> [verse-map-1 verse-map-2]
  (let [verse-maps [verse-map-1 verse-map-2]]
    (or (and (every? :book verse-maps)
             (apply > (map :book verse-maps)))
        (and (every? :book verse-maps)
             (every? :chapter verse-maps)
             (apply = (map :book verse-maps))
             (apply > (map :chapter verse-maps)))
        (and (every? :book verse-maps)
             (every? :chapter verse-maps)
             (every? :verse verse-maps)
             (apply = (map :book verse-maps))
             (apply = (map :chapter verse-maps))
             (apply > (map :verse verse-maps))))))

(defn masked-= [verse-map-1 verse-map-2]
  (let [verse-maps [verse-map-1 verse-map-2]]
    (apply = (map (apply juxt (apply common-specificities verse-maps)) verse-maps))))

(defn masked->= [verse-map-1 verse-map-2]
  (let [verse-maps [verse-map-1 verse-map-2]]
    (or (apply masked-= verse-maps)
        (apply masked-> verse-maps))))

(defn range [{:keys [start end] :as reference}]
  (let [verse-map-range (drop-while (partial masked-> start) (:esv @verse-maps))
        verse-map-range (if end
                      (take-while (partial masked->= end) verse-map-range)
                      (take-while (partial masked-= start) verse-map-range))]
    verse-map-range))

(defn max-verse-map [{start-verse-map :start end-verse-map :end :as reference}]
  {:pre [start-verse-map]}
  (or end-verse-map start-verse-map))

(defn min-verse-map [{start-verse-map :start end-verse-map :end :as reference}]
  {:pre [start-verse-map]}
  start-verse-map)

(defn lowest-unequal-specificity [verse-map-1 verse-map-2]
  {:pre [(verse-map? verse-map-1)
         (verse-map? verse-map-2)]}
  (some (fn [specificity]
          (if (not= (specificity verse-map-1) (specificity verse-map-2))
            specificity))
        verse-map-specificities))

(defn ->book-str [{:keys [book chapter] :as verse-map}]
  {:pre [book]}
  (let [book-str (if (not chapter)
                   (get-in (:esv @bible/bibles) [book :name])
                   (get-in (:esv @bible/bibles) [book :abbreviation]))
        book-str (if (re-matches #"^[0-9] .+" book-str)
                   (let [[number-part name-part] (string/split book-str #" " 2)]
                     (str number-part " " (string/capitalize name-part)))
                   (string/capitalize book-str))]
    book-str))

(defn ->chapter-str [{:keys [chapter] :as verse-map}]
  {:pre [chapter]}
  (str chapter))

(defn ->verse-str [{:keys [verse] :as verse-map}]
  {:pre [verse]}
  (str verse))

(defn ->chapter-verse?-str [{:keys [chapter verse] :as verse-map}]
  {:pre [(verse-map? verse-map)
         chapter]}
  (let [verse-str (->chapter-str verse-map)
        verse-str (if verse
                    (str verse-str "." (->verse-str verse-map))
                    verse-str)]
    verse-str))

(defn ->book-chapter?-verse?-str [{:keys [book chapter verse] :as verse-map}]
  {:pre [(verse-map? verse-map)
         (or book
             (and book chapter)
             (and book chapter verse))]}
  (let [verse-str (->book-str verse-map)
        verse-str (if chapter
                    (str verse-str ". " (->chapter-str verse-map))
                    verse-str)
        verse-str (if verse
                    (str verse-str "." (->verse-str verse-map))
                    verse-str)]
    verse-str))

(def ->str-fn {[:book :chapter :verse] ->book-chapter?-verse?-str
               [:chapter :verse]       ->chapter-verse?-str
               [:verse]                ->verse-str})
