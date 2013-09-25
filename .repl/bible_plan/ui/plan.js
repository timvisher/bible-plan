goog.provide('bible_plan.ui.plan');
goog.require('cljs.core');
goog.require('bible_plan.plan');
goog.require('dommy.core');
goog.require('bible_plan.ui.reference');
goog.require('time_ui');
bible_plan.ui.plan.hide_plan = (function hide_plan(){
return dommy.core.add_class_BANG_.call(null,document.getElementById("base-plan"),"\uFDD0:hidden");
});
bible_plan.ui.plan.show_plan = (function show_plan(plan,days){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,plan),cljs.core.count.call(null,days)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"plan","plan",-1637088030,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"days","days",-1637455344,null)))))].join('')));
}
dommy.core.replace_contents_BANG_.call(null,document.getElementById("base-plan"),cljs.core.map.call(null,bible_plan.ui.reference.__GT_tr,days,plan));
return dommy.core.remove_class_BANG_.call(null,document.getElementById("base-plan"),"\uFDD0:hidden");
});
bible_plan.ui.plan.toggle_plan = (function toggle_plan(e){
if(cljs.core.truth_(document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,"input[name=plan]:checked")))))
{var plan = cljs.core.get.call(null,bible_plan.plan.plans,cljs.core.keyword.call(null,document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,"input[name=plan]:checked"))).value));
var skip_days = cljs.core.map.call(null,((function (plan){
return (function day_input__GT_keyword(day_input){
return cljs.core.keyword.call(null,day_input.value);
});})(plan))
,dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,cljs.core.keyword.call(null,"input[name=skip-day]:checked")))));
var days = cljs.core.take.call(null,cljs.core.count.call(null,plan),cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.partial.call(null,time_ui.day_in,skip_days)),time_ui.days_from_now.call(null)));
return bible_plan.ui.plan.show_plan.call(null,plan,days);
} else
{return bible_plan.ui.plan.hide_plan.call(null);
}
});
