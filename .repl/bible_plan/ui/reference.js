goog.provide('bible_plan.ui.reference');
goog.require('cljs.core');
goog.require('bible_plan.reference');
goog.require('dommy.core');
bible_plan.ui.reference.__GT_li = (function __GT_li(day){
var dom5695 = document.createElement("li");
dom5695.appendChild(dommy.template.__GT_node_like.call(null,string.join.call(null,", ",cljs.core.map.call(null,bible_plan.reference.__GT_str,day))));
return dom5695;
});
