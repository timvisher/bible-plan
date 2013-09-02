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
var G__6342 = date;
G__6342.add((new goog.date.Interval(0,0,1)));
return G__6342;
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
var dom6344 = document.createElement("td");
dom6344.appendChild(dommy.template.__GT_node_like.call(null,time_ui.date__GT_long_format.call(null,date)));
return dom6344;
});
time_ui.days_of_week = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:sunday",0,"\uFDD0:monday",1,"\uFDD0:tuesday",2,"\uFDD0:wednesday",3,"\uFDD0:thursday",4,"\uFDD0:friday",5,"\uFDD0:saturday",6], true);
time_ui.day_is = (function day_is(day_of_week,date){
return cljs.core._EQ_.call(null,day_of_week.call(null,time_ui.days_of_week),date.getDay());
});
