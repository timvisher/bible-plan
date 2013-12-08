// Compiled by ClojureScript 0.0-2075
goog.provide('clj_time.periodic');
goog.require('cljs.core');
goog.require('goog.date.Interval');
goog.require('goog.date.UtcDateTime');
goog.require('clj_time.core');
goog.require('clj_time.core');
goog.require('clj_time.internal.fn');
goog.require('clj_time.internal.fn');
/**
* Returns an infinite sequence of date-time values growing over specific interval
*/
clj_time.periodic.periodic_seq = (function periodic_seq(start,interval){return cljs.core.iterate.call(null,clj_time.internal.fn.fpartial.call(null,clj_time.core.plus,interval),start);
});
