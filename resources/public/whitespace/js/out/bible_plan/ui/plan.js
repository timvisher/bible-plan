// Compiled by ClojureScript 0.0-2138
goog.provide('bible_plan.ui.plan');
goog.require('cljs.core');
goog.require('bible_plan.export$.core');
goog.require('bible_plan.export$.core');
goog.require('clj_time.core');
goog.require('bible_plan.plan');
goog.require('clj_time.core');
goog.require('bible_plan.plan');
goog.require('dommy.core');
goog.require('bible_plan.ui.reference');
goog.require('bible_plan.ui.reference');
goog.require('shodan.console');
goog.require('shodan.console');
goog.require('dommy.core');
bible_plan.ui.plan.hide_plan = (function hide_plan(){return dommy.core.add_class_BANG_.call(null,document.getElementById("plan"),new cljs.core.Keyword(null,"hidden","hidden",4091384092));
});
bible_plan.ui.plan.log_pr = (function log_pr(object){return shodan.console.log.call(null,cljs.core.pr_str.call(null,object));
});
bible_plan.ui.plan.show_plan_BANG_ = (function show_plan_BANG_(plan_dom_content){dommy.core.replace_contents_BANG_.call(null,document.getElementById("plan"),plan_dom_content);
return dommy.core.remove_class_BANG_.call(null,document.getElementById("plan"),new cljs.core.Keyword(null,"hidden","hidden",4091384092));
});
bible_plan.ui.plan.start_date = (function start_date(){var start_date_value = document.getElementById("start-date").value;if(!(cljs.core.empty_QMARK_.call(null,start_date_value)))
{return goog.date.fromIsoString(start_date_value);
} else
{return clj_time.core.plus.call(null,clj_time.core.now.call(null),clj_time.core.days.call(null,1));
}
});
bible_plan.ui.plan.end_date = (function end_date(){var end_date_value = document.getElementById("end-date").value;if(!(cljs.core.empty_QMARK_.call(null,end_date_value)))
{return goog.date.fromIsoString(end_date_value);
} else
{return clj_time.core.plus.call(null,bible_plan.ui.plan.start_date.call(null),clj_time.core.years.call(null,1));
}
});
bible_plan.ui.plan.days_of_week = new cljs.core.PersistentArrayMap(null, 7, ["sunday",0,"monday",1,"tuesday",2,"wednesday",3,"thursday",4,"friday",5,"saturday",6], null);
bible_plan.ui.plan.plan_state__GT_plan_options = (function plan_state__GT_plan_options(){var base_plan = cljs.core.keyword.call(null,document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,"input[name=plan]:checked"))).value);var skip_days = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (base_plan){
return (function day_input__GT_day_number(day_input){return cljs.core.get.call(null,bible_plan.ui.plan.days_of_week,day_input.value);
});})(base_plan))
,dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,cljs.core.keyword.call(null,"input[name=skip-day]:checked"))))));var start_date = bible_plan.ui.plan.start_date.call(null);var end_date = bible_plan.ui.plan.end_date.call(null);var books_at_a_time_QMARK__node = document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,"input[name=books-at-a-time]:checked")));var books_at_a_time_QMARK__raw = (cljs.core.truth_(books_at_a_time_QMARK__node)?books_at_a_time_QMARK__node.value:null);var books_at_a_time_QMARK_ = cljs.core._EQ_.call(null,"yes",books_at_a_time_QMARK__raw);var plan_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"base-plan","base-plan",3446158359),base_plan,new cljs.core.Keyword(null,"skip-days","skip-days",3061888855),skip_days,new cljs.core.Keyword(null,"start-date","start-date",3689065899),start_date,new cljs.core.Keyword(null,"end-date","end-date",2692795602),end_date,new cljs.core.Keyword(null,"books-at-a-time?","books-at-a-time?",761096577),books_at_a_time_QMARK_], null);shodan.console.log.call(null,cljs.core.pr_str.call(null,plan_options));
return plan_options;
});
bible_plan.ui.plan.re_show_plan = (function re_show_plan(e){if(cljs.core.truth_(document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,"input[name=plan]:checked")))))
{var plan_options = bible_plan.ui.plan.plan_state__GT_plan_options.call(null);var the_plan = bible_plan.plan.calculate_plan.call(null,plan_options);var plan_dom_content = new cljs.core.Keyword(null,"html","html",1017117469).cljs$core$IFn$_invoke$arity$1(bible_plan.export$.core.exporters).call(null,the_plan);return bible_plan.ui.plan.show_plan_BANG_.call(null,plan_dom_content);
} else
{return null;
}
});
