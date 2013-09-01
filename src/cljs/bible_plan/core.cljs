(ns bible-plan.core
  (:require    [dommy.core              :as dom]
               [bible-plan.plan.mcheyne :as mcheyne]
               [bible-plan.ui.reference :as ref-ui]
               [bible-plan.ui.plan      :as plan-ui])

  (:use-macros [dommy.macros :only [sel sel1]]))

(dom/listen! (sel1 (keyword "input[name=plan]")) :change (partial plan-ui/show-plan mcheyne/mcheyne))

(comment
  (dom/event-listeners (sel1 (keyword "input[name=plan]")))

  (plan-ui/show-plan mcheyne/mcheyne nil)

  (in-ns 'bible-plan.core)

  (set! (.-onchange (sel1 (keyword "input[name=plan]"))) nil)
  )
