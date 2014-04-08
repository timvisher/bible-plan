(ns clj-time.core
  (:require goog.date.Date
            goog.date.Interval
            goog.date.DateTime
            goog.date.UtcDateTime)
  (:refer-clojure :exclude [second]))

(defprotocol DateTimeProtocol
  "Interface for various date time functions"
  (year [this] "Return the year component of the given date/time.")
  (month [this]   "Return the month component of the given date/time.")
  (day [this]   "Return the day of month component of the given date/time.")
  (day-of-week [this]   "Return the day of week component of the given date/time. Monday is 1 and Sunday is 7")
  (hour [this]   "Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.")
  (minute [this]   "Return the minute of hour component of the given date/time.")
  (sec [this]   "Return the second of minute component of the given date/time.")
  (second [this]   "Return the second of minute component of the given date/time.")
  (milli [this]   "Return the millisecond of second component of the given date/time.")
  (after? [this that] "Returns true if ReadableDateTime 'this' is strictly after date/time 'that'.")
  (before? [this that] "Returns true if ReadableDateTime 'this' is strictly before date/time 'that'.")
  (plus- [this #^goog.date.Interval period]
    "Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).")
  (minus- [this #^goog.date.Interval period]
    "Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s)."))

(extend-protocol DateTimeProtocol
  goog.date.UtcDateTime
  (year [this] (.getFullYear this))
  (month [this] (.getMonth this))
  (day [this] (.getDate this))
  (day-of-week [this] (.getDay this))
  (hour [this] (.getHours this))
  (minute [this] (.getMinutes this))
  (second [this] (.getSeconds this))
  (milli [this] (.getMilliseconds this))
  (after? [this #^goog.date.Date that] (< 0 (goog.date.Date/compare this that)))
  (before? [this #^goog.date.Date that] (> 0 (goog.date.Date/compare this that)))
  (plus- [this #^goog.date.Interval interval] (doto (.clone this) (.add interval)))
  (minus- [this #^goog.date.Interval interval] (doto (.clone this) (.add (.getInverse interval))))

  goog.date.DateTime
  (year [this] (.getFullYear this))
  (month [this] (.getMonth this))
  (day [this] (.getDate this))
  (day-of-week [this] (.getDay this))
  (hour [this] (.getHours this))
  (minute [this] (.getMinutes this))
  (second [this] (.getSeconds this))
  (milli [this] (.getMilliseconds this))
  (after? [this #^goog.date.Date that] (< 0 (goog.date.Date/compare this that)))
  (before? [this #^goog.date.Date that] (> 0 (goog.date.Date/compare this that)))
  (plus- [this #^goog.date.Interval interval] (doto (.clone this) (.add interval)))
  (minus- [this #^goog.date.Interval interval] (doto (.clone this) (.add (.getInverse interval))))

  goog.date.Date
  (year [this] (.getFullYear this))
  (month [this] (.getMonth this))
  (day [this] (.getDate this))
  (day-of-week [this] (.getDay this))
  (after? [this #^goog.date.Date that] (< 0 (goog.date.Date/compare this that)))
  (before? [this #^goog.date.Date that] (> 0 (goog.date.Date/compare this that)))
  (plus- [this #^goog.date.Interval interval] (doto (.clone this) (.add interval)))
  (minus- [this #^goog.date.Interval interval] (doto (.clone this) (.add (.getInverse interval)))))

(defn now []
  (goog.date.DateTime.))

(defn plus
  "Returns a new date/time corresponding to the given date/time moved forwards by
   the given Period(s)."
  ([dt #^goog.date.Interval p]
     (plus- dt p))
  ([dt p & ps]
     (reduce plus- (plus- dt p) ps)))

(defn years
  ([#^number n]
     (goog.date.Interval. n)))

(defn days
  ([#^number n]
     (goog.date.Interval. 0 0 n)))
