(ns bible-plan.ui.reference
  (:require    [dommy.core           :as dom]
               [bible-plan.reference :as ref]
               [clojure.string       :as string]
               titlecase)

  (:use-macros [dommy.macros :only [sel1 sel node deftemplate]]))

(comment
  (dom/append! (sel1 :#base-plan) (->li {:start {:book 1 :chapter 1}}))

  (require 'bible-plan.plan.mcheyne)

  (dom/replace-contents! (sel1 :#base-plan) (map ->li mcheyne/mcheyne))

  (dom/listen! (sel1 (keyword "input[name=plan]")) :change (fn [e] (.log js/console e)))
  )

(deftemplate ->li [day]
  [:li (string/join ", " (map (comp titlecase/->titlecase ref/->str) day))])

(deftemplate ->td [reference]
  [:td (ref/->str reference)])
