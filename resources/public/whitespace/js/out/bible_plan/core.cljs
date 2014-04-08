(ns bible-plan.core
  (:require    [dommy.core              :as dom]
               [dommy.attrs             :as dom-attrs]
               [bible-plan.ui.reference :as ref-ui]
               [bible-plan.ui.plan      :as plan-ui]
               [bible-plan.ui.export    :as export-ui]
               [goog.ui.DatePicker]
               clojure.browser.repl)

  (:use-macros [dommy.macros :only [sel sel1]]))

(comment
  (in-ns 'bible-plan.core)
  )

(dom/listen! (sel1 (keyword "#wizard")) :change plan-ui/re-show-plan)

(dom/listen! (sel1 (keyword "#export")) :submit export-ui/show-plan-exporter)

(when-not (.-date (.-inputtypes js/Modernizr))
  (dom-attrs/add-class! (.-documentElement js/document) "no-date-input"))

;; (when-not (.-date (.-inputtypes js/Modernizr))
;;   (def start-date-picker (goog.ui.DatePicker.))

;;   (.render start-date-picker (sel1 :#start-date-picker))

;;   (goog.events/listen start-date-picker
;;                       goog.ui.DatePicker.Events.CHANGE
;;                       (fn start-date-picker-changed! [e]
;;                         (dom/set-value! (sel1 :#start-date)
;;                                         (if (.-date e)
;;                                           (.toIsoString (.-date e) true)
;;                                           ""))
;;                         (plan-ui/re-show-plan))))



(comment
  (dom/event-listeners (sel1 (keyword "input[name=plan]")))
  (dom/unlisten! (sel1 (keyword "input[name=plan]")) :change plan-ui/show-plan)

  (in-ns 'bible-plan.core)

  (keyword (.-value (sel1 (keyword "input[name=skip-day]:checked"))))

  (set! (.-onchange (sel1 (keyword "input[name=plan]"))) nil)
  )
