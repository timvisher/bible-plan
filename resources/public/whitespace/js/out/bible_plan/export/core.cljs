(ns bible-plan.export.core
  (:require [bible-plan.export.remember-the-milk :as rtm]
            [bible-plan.export.html :as html]))

(def exporters {:rtm rtm/export
                :html html/export})
