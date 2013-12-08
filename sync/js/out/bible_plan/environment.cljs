(ns bible-plan.environment)

(defn hostname []
  (.-hostname js/location))

(def environments {"localhost"                          :dev
                   "staging.bibleplan.twonegatives.com" :staging
                   "bibleplan.twonegatives.com"         :prod})

(def environment (get environments (hostname)))

;;; TODO: Have some way of applying an environment mask.
