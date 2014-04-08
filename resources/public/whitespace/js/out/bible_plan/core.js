// Compiled by ClojureScript 0.0-2202
goog.provide('bible_plan.core');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('bible_plan.ui.plan');
goog.require('dommy.core');
goog.require('goog.ui.DatePicker');
goog.require('bible_plan.ui.reference');
goog.require('clojure.browser.repl');
goog.require('bible_plan.ui.export$');
goog.require('bible_plan.ui.plan');
goog.require('bible_plan.ui.reference');
goog.require('dommy.attrs');
goog.require('dommy.core');
goog.require('bible_plan.ui.export$');
dommy.core.listen_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,"#wizard"))),new cljs.core.Keyword(null,"change","change",3947235106),bible_plan.ui.plan.re_show_plan);
dommy.core.listen_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,"#export"))),new cljs.core.Keyword(null,"submit","submit",4417336202),bible_plan.ui.export$.show_plan_exporter);
if(cljs.core.truth_(Modernizr.inputtypes.date))
{} else
{dommy.attrs.add_class_BANG_.call(null,document.documentElement,"no-date-input");
}
