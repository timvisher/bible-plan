// Compiled by ClojureScript 0.0-2202
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
clj_time.periodic.periodic_seq = (function periodic_seq(start,interval){return cljs.core.iterate(clj_time.internal.fn.fpartial.cljs$core$IFn$_invoke$arity$variadic(clj_time.core.plus,cljs.core.array_seq([interval], 0)),start);
});
