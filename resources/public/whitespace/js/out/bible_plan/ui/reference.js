// Compiled by ClojureScript 0.0-2075
goog.provide('bible_plan.ui.reference');
goog.require('cljs.core');
goog.require('titlecase');
goog.require('time_ui');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('bible_plan.reference');
goog.require('bible_plan.reference');
goog.require('dommy.core');
goog.require('dommy.core');
bible_plan.ui.reference.__GT_li = (function __GT_li(day){var dom7754 = document.createElement("li");dom7754.appendChild(dommy.template.__GT_node_like.call(null,clojure.string.join.call(null,", ",cljs.core.map.call(null,cljs.core.comp.call(null,titlecase.__GT_titlecase,bible_plan.reference.__GT_str),day))));
return dom7754;
});
bible_plan.ui.reference.__GT_td = (function __GT_td(reference){var dom7756 = document.createElement("td");dom7756.appendChild(dommy.template.__GT_node_like.call(null,bible_plan.reference.__GT_str.call(null,reference)));
return dom7756;
});
