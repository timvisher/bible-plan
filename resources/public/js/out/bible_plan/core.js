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
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((dommy.utils.__GT_Array(document.getElementsByTagName("form"))[0]),cljs.core.array_seq([cljs.core.constant$keyword$185,bible_plan.ui.plan.re_show_plan], 0));
if(cljs.core.truth_(Modernizr.inputtypes.date))
{} else
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(document.documentElement,"no-date-input");
}
