(ns clj-time.periodic
  (:require [clj-time.internal.fn :as ifns]
            [clj-time.core        :as ct]
            goog.date.UtcDateTime
            goog.date.Interval))

(defn periodic-seq
  "Returns an infinite sequence of date-time values growing over specific interval"
  [^goog.date.UtcDateTime start ^goog.date.Interval interval]
  (iterate (ifns/fpartial ct/plus interval) start))
