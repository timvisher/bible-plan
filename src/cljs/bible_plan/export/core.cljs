(ns bible-plan.export.core
  (:require [bible-plan.export.remember-the-milk :as rtm]
            [bible-plan.export.html :as html]))

(def exporters {:remember-the-milk rtm/export
                :html              html/export})
