(ns bible-plan.ui.plan
  (:require    time-ui
               [clj-time.core           :as ct]
               [bible-plan.ui.reference :as ref-ui]
               [dommy.core              :as dom]
               [bible-plan.plan         :as plan]
               [shodan.console          :as console])
  (:use-macros [dommy.macros :only [sel1 sel node deftemplate]]))

(comment
  (in-ns 'bible-plan.ui.plan)
  )

(defn hide-plan []
  (dom/add-class! (sel1 :#plan) :hidden))

(defn log-pr [object]
  (console/log (pr-str object)))

(defn show-plan! [plan-dom-content]
  (dom/replace-contents! (sel1 :#plan) plan-dom-content)
  (dom/remove-class! (sel1 :#plan) :hidden))

(defn start-date []
  (let [start-date-value (.-value (sel1 :#start-date))]
    (if-not (empty? start-date-value)
      (goog.date/fromIsoString start-date-value)
      (ct/plus (ct/now) (ct/days 1)))))

(defn end-date []
  (let [end-date-value (.-value (sel1 :#end-date))]
    (if-not (empty? end-date-value)
      (goog.date/fromIsoString end-date-value)
      (ct/plus (start-date) (ct/years 1)))))

(defn plan-state->plan-options []
  (let [base-plan             (keyword (.-value (sel1 (keyword "input[name=plan]:checked"))))
        skip-days             (into #{}
                                    (map (fn day-input->keyword [day-input]
                                           (keyword (.-value day-input)))
                                         (sel (keyword "input[name=skip-day]:checked"))))
        start-date            (start-date)
        end-date              (end-date)
        books-at-a-time?-node (sel1 (keyword "input[name=books-at-a-time]:checked"))
        books-at-a-time?-raw  (if books-at-a-time?-node
                                (.-value books-at-a-time?-node)
                                nil)
        books-at-a-time?      (= "yes" books-at-a-time?-raw)
        plan-options          {:base-plan        base-plan
                               :skip-days        skip-days
                               :start-date       start-date
                               :end-date         end-date
                               :books-at-a-time? books-at-a-time?}]
    (console/log (pr-str plan-options))
    plan-options))

(deftemplate plan-day->tr [{:keys [readings date] :as plan-day}]
  [:tr
   (time-ui/->td date)
   (map ref-ui/->td readings)])

(defn plan->dom-content [the-plan]
  (map plan-day->tr the-plan))

(defn re-show-plan [e]
  (if (sel1 (keyword "input[name=plan]:checked"))
    (let [plan-options     (plan-state->plan-options)
          the-plan         (plan/calculate-plan plan-options)
          plan-dom-content (plan->dom-content the-plan)]
      (show-plan! plan-dom-content))))

(comment
  (in-ns 'bible-plan.ui.plan)
  )
