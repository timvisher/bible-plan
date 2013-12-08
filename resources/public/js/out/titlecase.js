// Compiled by ClojureScript 0.0-2075
goog.provide('titlecase');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
titlecase.__GT_titlecase = (function __GT_titlecase(title){var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(title," ");var capitalized_words = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words);var title__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",capitalized_words);return title__$1;
});
