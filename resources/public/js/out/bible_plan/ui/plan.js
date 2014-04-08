// Compiled by ClojureScript 0.0-2202
goog.provide('bible_plan.ui.plan');
goog.require('cljs.core');
goog.require('bible_plan.export$.core');
goog.require('shodan.console');
goog.require('bible_plan.plan');
goog.require('clj_time.core');
goog.require('dommy.core');
goog.require('bible_plan.ui.reference');
goog.require('clj_time.core');
goog.require('bible_plan.export$.core');
goog.require('shodan.console');
goog.require('bible_plan.ui.reference');
goog.require('bible_plan.plan');
goog.require('dommy.core');
goog.require('goog.date');
bible_plan.ui.plan.hide_plan = (function hide_plan(){return (dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 ? dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(document.getElementById("plan"),cljs.core.constant$keyword$177) : dommy.core.add_class_BANG_.call(null,document.getElementById("plan"),cljs.core.constant$keyword$177));
});
bible_plan.ui.plan.log_pr = (function log_pr(object){return shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([object], 0))], 0));
});
bible_plan.ui.plan.show_plan_BANG_ = (function show_plan_BANG_(plan_dom_content){dommy.core.replace_contents_BANG_(document.getElementById("plan"),plan_dom_content);
return (dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 ? dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(document.getElementById("plan"),cljs.core.constant$keyword$177) : dommy.core.remove_class_BANG_.call(null,document.getElementById("plan"),cljs.core.constant$keyword$177));
});
bible_plan.ui.plan.start_date = (function start_date(){var start_date_value = document.getElementById("start-date").value;if(!(cljs.core.empty_QMARK_(start_date_value)))
{return goog.date.fromIsoString(start_date_value);
} else
{return clj_time.core.plus.cljs$core$IFn$_invoke$arity$2(clj_time.core.now(),clj_time.core.days(1));
}
});
bible_plan.ui.plan.end_date = (function end_date(){var end_date_value = document.getElementById("end-date").value;if(!(cljs.core.empty_QMARK_(end_date_value)))
{return goog.date.fromIsoString(end_date_value);
} else
{return clj_time.core.plus.cljs$core$IFn$_invoke$arity$2(bible_plan.ui.plan.start_date(),clj_time.core.years(1));
}
});
bible_plan.ui.plan.days_of_week = new cljs.core.PersistentArrayMap(null, 7, ["sunday",0,"monday",1,"tuesday",2,"wednesday",3,"thursday",4,"friday",5,"saturday",6], null);
bible_plan.ui.plan.plan_state__GT_plan_options = (function plan_state__GT_plan_options(){var base_plan = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(document.querySelector(dommy.core.selector(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("input[name=plan]:checked"))).value);var skip_days = cljs.core.into(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (base_plan){
return (function day_input__GT_day_number(day_input){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(bible_plan.ui.plan.days_of_week,day_input.value);
});})(base_plan))
,dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("input[name=skip-day]:checked"))))));var start_date = bible_plan.ui.plan.start_date();var end_date = bible_plan.ui.plan.end_date();var books_at_a_time_QMARK__node = document.querySelector(dommy.core.selector(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("input[name=books-at-a-time]:checked")));var books_at_a_time_QMARK__raw = (cljs.core.truth_(books_at_a_time_QMARK__node)?books_at_a_time_QMARK__node.value:null);var books_at_a_time_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("yes",books_at_a_time_QMARK__raw);var plan_options = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$176,base_plan,cljs.core.constant$keyword$173,skip_days,cljs.core.constant$keyword$175,start_date,cljs.core.constant$keyword$174,end_date,cljs.core.constant$keyword$172,books_at_a_time_QMARK_], null);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([plan_options], 0))], 0));
return plan_options;
});
bible_plan.ui.plan.re_show_plan = (function re_show_plan(e){if(cljs.core.truth_(document.querySelector(dommy.core.selector(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("input[name=plan]:checked")))))
{var plan_options = bible_plan.ui.plan.plan_state__GT_plan_options();var the_plan = bible_plan.plan.calculate_plan(plan_options);var plan_dom_content = cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(bible_plan.export$.core.exporters).call(null,the_plan);bible_plan.ui.plan.show_plan_BANG_(plan_dom_content);
return cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(bible_plan.export$.core.exporters).call(null,the_plan);
} else
{return null;
}
});
