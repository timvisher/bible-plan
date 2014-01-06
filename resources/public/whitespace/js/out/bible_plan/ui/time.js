// Compiled by ClojureScript 0.0-2138
goog.provide('bible_plan.ui.time');
goog.require('cljs.core');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeFormat.Format');
bible_plan.ui.time.date__GT_long_format = (function date__GT_long_format(date){var long_date_formatter = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_DATE));var formatted_date = long_date_formatter.format(date);return formatted_date;
});
bible_plan.ui.time.__GT_td = (function __GT_td(date){var dom5806 = document.createElement("td");dom5806.appendChild(dommy.template.__GT_node_like.call(null,bible_plan.ui.time.date__GT_long_format.call(null,date)));
return dom5806;
});
