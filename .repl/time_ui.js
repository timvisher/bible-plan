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
var G__6205 = date;
G__6205.add((new goog.date.Interval(0,0,1)));
return G__6205;
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
var dom6207 = document.createElement("td");
dom6207.appendChild(dommy.template.__GT_node_like.call(null,time_ui.date__GT_long_format.call(null,date)));
return dom6207;
});
