// Compiled by ClojureScript 0.0-2202
goog.provide('bible_plan.ui.reference');
goog.require('cljs.core');
goog.require('titlecase');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('bible_plan.reference');
goog.require('bible_plan.reference');
goog.require('dommy.core');
goog.require('dommy.core');
bible_plan.ui.reference.__GT_li = (function __GT_li(day){var dom5919 = document.createElement("li");dom5919.appendChild(dommy.template.__GT_node_like.call(null,clojure.string.join.call(null,", ",cljs.core.map.call(null,cljs.core.comp.call(null,titlecase.__GT_titlecase,bible_plan.reference.__GT_str),day))));
return dom5919;
});
bible_plan.ui.reference.__GT_td = (function __GT_td(reference){var dom5921 = document.createElement("td");dom5921.appendChild(dommy.template.__GT_node_like.call(null,bible_plan.reference.__GT_str.call(null,reference)));
return dom5921;
});
