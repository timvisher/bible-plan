goog.provide('bible_plan.ui.plan');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('bible_plan.ui.reference');
goog.require('time_ui');
bible_plan.ui.plan.show_plan = (function show_plan(plan,e){
return dommy.core.replace_contents_BANG_.call(null,document.getElementById("base-plan"),cljs.core.map.call(null,bible_plan.ui.reference.__GT_tr,time_ui.days_from_now.call(null),plan));
});
