goog.provide('time_ui');
goog.require('cljs.core');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeFormat.Format');
goog.require('goog.date.Interval');
goog.require('goog.date.DateTime');
time_ui.now = (function now(){
return (new goog.date.DateTime());
});
time_ui.inc_date_by_day = (function inc_date_by_day(date){
return (function (){var G__7592 = date;
G__7592.add((new goog.date.Interval(0,0,1)));
return G__7592;
})().clone();
});
time_ui.days_from = (function days_from(date){
return cljs.core.iterate.call(null,time_ui.inc_date_by_day,date);
});
time_ui.days_from_now = (function days_from_now(){
return time_ui.days_from.call(null,time_ui.now.call(null));
});
time_ui.date__GT_long_format = (function date__GT_long_format(date){
var long_date_formatter = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_DATE));
var formatted_date = long_date_formatter.format(date);
return formatted_date;
});
time_ui.__GT_td = (function __GT_td(date){
var long_date_formatter = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_DATE));
var now = date;
var formatted_now = long_date_formatter.format(date);
var dom7594 = document.createElement("td");
dom7594.appendChild(dommy.template.__GT_node_like.call(null,time_ui.date__GT_long_format.call(null,date)));
return dom7594;
});
time_ui.days_of_week = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:sunday",0,"\uFDD0:monday",1,"\uFDD0:tuesday",2,"\uFDD0:wednesday",3,"\uFDD0:thursday",4,"\uFDD0:friday",5,"\uFDD0:saturday",6], true);
time_ui.day_is = (function day_is(day_of_week,date){
return cljs.core._EQ_.call(null,day_of_week.call(null,time_ui.days_of_week),date.getDay());
});
time_ui.day_in = (function day_in(days_of_week,date){
var and__3941__auto__ = days_of_week;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = !(cljs.core.empty_QMARK_.call(null,days_of_week));
if(and__3941__auto____$1)
{return cljs.core.some.call(null,cljs.core.identity,cljs.core.apply.call(null,cljs.core.juxt,cljs.core.map.call(null,(function (p1__7595_SHARP_){
return cljs.core.partial.call(null,time_ui.day_is,p1__7595_SHARP_);
}),days_of_week)).call(null,date));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
