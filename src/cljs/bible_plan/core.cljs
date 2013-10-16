(ns bible-plan.core
  (:require    [dommy.core              :as dom]
               [bible-plan.plan.mcheyne :as mcheyne]
               [bible-plan.ui.reference :as ref-ui]
               [bible-plan.ui.plan      :as plan-ui]
               clojure.browser.repl)

  (:use-macros [dommy.macros :only [sel sel1]]))

(comment
  (in-ns 'bible-plan.core)
  )

(dom/listen! (sel1 (keyword "input[name=plan]")) :change plan-ui/re-show-plan)

;; (doseq [skip-day-node (sel (keyword "input[name=skip-day]"))]
;;   (dom/listen! skip-day-node :change'plan-ui/calc-plan))

;; (doseq [books-at-a-time-node (sel (keyword "input[name=books-at-a-time]"))]
;;   (dom/listen! books-at-a-time-node :change plan-ui/calc-plan))

(comment
  (dom/event-listeners (sel1 (keyword "input[name=plan]")))
  (dom/unlisten! (sel1 (keyword "input[name=plan]")) :change plan-ui/show-plan)

  (plan-ui/show-plan mcheyne/mcheyne nil)

  (in-ns 'bible-plan.core)

  (keyword (.-value (sel1 (keyword "input[name=skip-day]:checked"))))

  (set! (.-onchange (sel1 (keyword "input[name=plan]"))) nil)
  )
