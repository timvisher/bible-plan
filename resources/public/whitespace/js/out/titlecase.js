// Compiled by ClojureScript 0.0-2202
goog.provide('titlecase');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
titlecase.__GT_titlecase = (function __GT_titlecase(title){var words = clojure.string.split.call(null,title," ");var capitalized_words = cljs.core.map.call(null,clojure.string.capitalize,words);var title__$1 = clojure.string.join.call(null," ",capitalized_words);return title__$1;
});
