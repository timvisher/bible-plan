goog.provide('bible_plan.ui.reference');
goog.require('cljs.core');
goog.require('titlecase');
goog.require('time_ui');
goog.require('clojure.string');
goog.require('bible_plan.reference');
goog.require('dommy.core');
bible_plan.ui.reference.__GT_li = (function __GT_li(day){
var dom6336 = document.createElement("li");
dom6336.appendChild(dommy.template.__GT_node_like.call(null,clojure.string.join.call(null,", ",cljs.core.map.call(null,cljs.core.comp.call(null,titlecase.__GT_titlecase,bible_plan.reference.__GT_str),day))));
return dom6336;
});
bible_plan.ui.reference.__GT_td = (function __GT_td(reference){
var dom6338 = document.createElement("td");
dom6338.appendChild(dommy.template.__GT_node_like.call(null,titlecase.__GT_titlecase.call(null,bible_plan.reference.__GT_str.call(null,reference))));
return dom6338;
});
bible_plan.ui.reference.__GT_tr = (function __GT_tr(date,day){
var dom6340 = document.createElement("tr");
dom6340.appendChild(dommy.template.__GT_node_like.call(null,time_ui.__GT_td.call(null,date)));
dom6340.appendChild(dommy.template.__GT_node_like.call(null,cljs.core.map.call(null,bible_plan.ui.reference.__GT_td,day)));
return dom6340;
});
