(ns bible-plan.core
  (:require    [dommy.core              :as dom]
               [bible-plan.plan.mcheyne :as mcheyne]
               [bible-plan.ui.reference :as ref-ui])

  (:use-macros [dommy.macros :only [sel sel1]]))

(dom/listen! (sel1 (keyword "input[name=plan]")) :change (partial plan-ui/show-plan mcheyne/mcheyne) )

(comment
  (dom/event-listeners (sel1 (keyword "input[name=plan]")))

  (set! (.-onchange (sel1 (keyword "input[name=plan]"))) nil)
  )
