(ns bible-plan.bible
  (:require [shodan.console :as console]
            [ajax.core      :as ajax :refer [ajax-request]]))

(def bibles (atom {}))

(defn assoc-bible [name bible-data]
  (swap! bibles assoc name bible-data))

(defn load-bibles []
  (ajax-request "/edn/bibles/bibles.edn"
                :get
                {:handler (fn load-available-bibles [[ok bible-names]]
                            (when ok
                              (doseq [bible-name bible-names]
                                (console/log (str "Loading bible: " bible-name))
                                (ajax-request (str "/edn/bibles/" (name bible-name) ".edn")
                                              :get
                                              {:handler (fn [[ok bible-data]]
                                                          (if ok
                                                            (assoc-bible bible-name bible-data)))
                                               :format (ajax/edn-format)}))))
                 :format (ajax/edn-format)}))

(load-bibles)
