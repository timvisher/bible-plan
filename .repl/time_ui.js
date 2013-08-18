goog.provide('time_ui');
goog.require('cljs.core');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeFormat.Format');
goog.require('goog.date.DateTime');
time_ui.__GT_td = (function __GT_td(date){
var long_date_formatter = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_DATE));
var now = date;
var formatted_now = long_date_formatter.format(date);
var dom5918 = document.createElement("td");
dom5918.appendChild(dommy.template.__GT_node_like.call(null,formatted_now));
return dom5918;
});
