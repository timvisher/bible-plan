// Compiled by ClojureScript 0.0-2138
goog.provide('bible_plan.core');
goog.require('cljs.core');
goog.require('bible_plan.ui.plan');
goog.require('dommy.attrs');
goog.require('dommy.core');
goog.require('bible_plan.ui.reference');
goog.require('bible_plan.ui.reference');
goog.require('clojure.browser.repl');
goog.require('dommy.attrs');
goog.require('goog.ui.DatePicker');
goog.require('bible_plan.ui.plan');
goog.require('dommy.core');
dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("form"))[0]),new cljs.core.Keyword(null,"change","change",3947235106),bible_plan.ui.plan.re_show_plan);
if(cljs.core.truth_(Modernizr.inputtypes.date))
{} else
{dommy.attrs.add_class_BANG_.call(null,document.documentElement,"no-date-input");
}
