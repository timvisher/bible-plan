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
bible_plan.ui.reference.__GT_li = (function __GT_li(day){var dom9508 = document.createElement("li");dom9508.appendChild(dommy.template.__GT_node_like(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(titlecase.__GT_titlecase,bible_plan.reference.__GT_str),day))));
return dom9508;
});
bible_plan.ui.reference.__GT_td = (function __GT_td(reference){var dom9510 = document.createElement("td");dom9510.appendChild(dommy.template.__GT_node_like(bible_plan.reference.__GT_str(reference)));
return dom9510;
});
