// Compiled by ClojureScript 0.0-2075
goog.provide('time_ui');
goog.require('cljs.core');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeFormat.Format');
goog.require('goog.i18n.DateTimeSymbols');
goog.require('goog.i18n.DateTimeSymbols');
goog.require('goog.date.DateRange');
goog.require('goog.date.Interval');
goog.require('goog.date.DateTime');
goog.require('goog.date.Date');
time_ui.weekdays = new cljs.core.PersistentArrayMap(null, 7, ["Monday",cljs.core.constant$keyword$160,"Tuesday",cljs.core.constant$keyword$161,"Wednesday",cljs.core.constant$keyword$162,"Thursday",cljs.core.constant$keyword$163,"Friday",cljs.core.constant$keyword$164,"Saturday",cljs.core.constant$keyword$165,"Sunday",cljs.core.constant$keyword$166], null);
time_ui.day = (function day(date){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(time_ui.weekdays,cljs.core.get.cljs$core$IFn$_invoke$arity$2(goog.i18n.DateTimeSymbols.WEEKDAYS,date.getDay()));
});
time_ui.now = (function now(){return (new goog.date.DateTime());
});
time_ui.inc_date_by_day = (function inc_date_by_day(date){var G__13341 = date.clone();G__13341.add((new goog.date.Interval(0,0,1)));
return G__13341;
});
time_ui.dec_date_by_day = (function dec_date_by_day(date){var G__13343 = date.clone();G__13343.add((new goog.date.Interval(0,0,-1)));
return G__13343;
});
time_ui.inc_date_by_year = (function inc_date_by_year(date){var G__13345 = date.clone();G__13345.add((new goog.date.Interval(1)));
return G__13345;
});
time_ui.date_GT__EQ_ = (function date_GT__EQ_(date_1,date_2){return (0 <= goog.date.Date.compare(date_1,date_2));
});
time_ui.date_GT_ = (function date_GT_(date_1,date_2){return (0 < goog.date.Date.compare(date_1,date_2));
});
time_ui.days_from = (function days_from(date){return cljs.core.iterate(time_ui.inc_date_by_day,date);
});
time_ui.date_range = (function date_range(start_date,end_date){var all_days = time_ui.days_from(start_date);return cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_ui.date_GT_,end_date),all_days);
});
time_ui.days_from_now = (function days_from_now(){return time_ui.days_from(time_ui.now());
});
time_ui.date__GT_long_format = (function date__GT_long_format(date){var long_date_formatter = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_DATE));var formatted_date = long_date_formatter.format(date);return formatted_date;
});
time_ui.__GT_td = (function __GT_td(date){var long_date_formatter = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_DATE));var now = date;var formatted_now = long_date_formatter.format(date);var dom13347 = document.createElement("td");dom13347.appendChild(dommy.template.__GT_node_like(time_ui.date__GT_long_format(date)));
return dom13347;
});
time_ui.days_of_week = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$166,0,cljs.core.constant$keyword$160,1,cljs.core.constant$keyword$161,2,cljs.core.constant$keyword$162,3,cljs.core.constant$keyword$163,4,cljs.core.constant$keyword$164,5,cljs.core.constant$keyword$165,6], null);
time_ui.day_is = (function day_is(day_of_week,date){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((day_of_week.cljs$core$IFn$_invoke$arity$1 ? day_of_week.cljs$core$IFn$_invoke$arity$1(time_ui.days_of_week) : day_of_week.call(null,time_ui.days_of_week)),date.getDay());
});
time_ui.day_in = (function day_in(days_of_week,date){if(cljs.core.truth_((function (){var and__3279__auto__ = days_of_week;if(cljs.core.truth_(and__3279__auto__))
{return !(cljs.core.empty_QMARK_(days_of_week));
} else
{return and__3279__auto__;
}
})()))
{return cljs.core.some(cljs.core.identity,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13348_SHARP_){return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_ui.day_is,p1__13348_SHARP_);
}),days_of_week)).call(null,date));
} else
{return null;
}
});
