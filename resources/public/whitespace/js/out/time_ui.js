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
time_ui.weekdays = new cljs.core.PersistentArrayMap(null, 7, ["Monday",new cljs.core.Keyword(null,"monday","monday",4240368770),"Tuesday",new cljs.core.Keyword(null,"tuesday","tuesday",4331527615),"Wednesday",new cljs.core.Keyword(null,"wednesday","wednesday",2407434952),"Thursday",new cljs.core.Keyword(null,"thursday","thursday",2585959756),"Friday",new cljs.core.Keyword(null,"friday","friday",4042586321),"Saturday",new cljs.core.Keyword(null,"saturday","saturday",3194669867),"Sunday",new cljs.core.Keyword(null,"sunday","sunday",4417684802)], null);
time_ui.day = (function day(date){return cljs.core.get.call(null,time_ui.weekdays,cljs.core.get.call(null,goog.i18n.DateTimeSymbols.WEEKDAYS,date.getDay()));
});
time_ui.now = (function now(){return (new goog.date.DateTime());
});
time_ui.inc_date_by_day = (function inc_date_by_day(date){var G__7864 = date.clone();G__7864.add((new goog.date.Interval(0,0,1)));
return G__7864;
});
time_ui.dec_date_by_day = (function dec_date_by_day(date){var G__7866 = date.clone();G__7866.add((new goog.date.Interval(0,0,-1)));
return G__7866;
});
time_ui.inc_date_by_year = (function inc_date_by_year(date){var G__7868 = date.clone();G__7868.add((new goog.date.Interval(1)));
return G__7868;
});
time_ui.date_GT__EQ_ = (function date_GT__EQ_(date_1,date_2){return (0 <= goog.date.Date.compare(date_1,date_2));
});
time_ui.date_GT_ = (function date_GT_(date_1,date_2){return (0 < goog.date.Date.compare(date_1,date_2));
});
time_ui.days_from = (function days_from(date){return cljs.core.iterate.call(null,time_ui.inc_date_by_day,date);
});
time_ui.date_range = (function date_range(start_date,end_date){var all_days = time_ui.days_from.call(null,start_date);return cljs.core.take_while.call(null,cljs.core.partial.call(null,time_ui.date_GT_,end_date),all_days);
});
time_ui.days_from_now = (function days_from_now(){return time_ui.days_from.call(null,time_ui.now.call(null));
});
time_ui.date__GT_long_format = (function date__GT_long_format(date){var long_date_formatter = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_DATE));var formatted_date = long_date_formatter.format(date);return formatted_date;
});
time_ui.__GT_td = (function __GT_td(date){var long_date_formatter = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_DATE));var now = date;var formatted_now = long_date_formatter.format(date);var dom7870 = document.createElement("td");dom7870.appendChild(dommy.template.__GT_node_like.call(null,time_ui.date__GT_long_format.call(null,date)));
return dom7870;
});
time_ui.days_of_week = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"sunday","sunday",4417684802),0,new cljs.core.Keyword(null,"monday","monday",4240368770),1,new cljs.core.Keyword(null,"tuesday","tuesday",4331527615),2,new cljs.core.Keyword(null,"wednesday","wednesday",2407434952),3,new cljs.core.Keyword(null,"thursday","thursday",2585959756),4,new cljs.core.Keyword(null,"friday","friday",4042586321),5,new cljs.core.Keyword(null,"saturday","saturday",3194669867),6], null);
time_ui.day_is = (function day_is(day_of_week,date){return cljs.core._EQ_.call(null,day_of_week.call(null,time_ui.days_of_week),date.getDay());
});
time_ui.day_in = (function day_in(days_of_week,date){if(cljs.core.truth_((function (){var and__3279__auto__ = days_of_week;if(cljs.core.truth_(and__3279__auto__))
{return !(cljs.core.empty_QMARK_.call(null,days_of_week));
} else
{return and__3279__auto__;
}
})()))
{return cljs.core.some.call(null,cljs.core.identity,cljs.core.apply.call(null,cljs.core.juxt,cljs.core.map.call(null,(function (p1__7871_SHARP_){return cljs.core.partial.call(null,time_ui.day_is,p1__7871_SHARP_);
}),days_of_week)).call(null,date));
} else
{return null;
}
});
