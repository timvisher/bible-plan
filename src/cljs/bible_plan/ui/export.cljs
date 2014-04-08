(ns bible-plan.ui.export
  (:require [shodan.console :as console]))

(defn show-plan-exporter* [{:keys [import-mail-address reading-list-title plan-item-tags] :as args}]
  (console/log "Args: " args))

(defn show-plan-exporter []
  (show-plan-exporter* {:import-mail-address "user+12345+import@rmilk.com"
                        :reading-list-title "cl.ps.bible_reading"
                        :plan-item-tags ["reading" "bible"]}))
