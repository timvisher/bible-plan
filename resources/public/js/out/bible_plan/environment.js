// Compiled by ClojureScript 0.0-2138
goog.provide('bible_plan.environment');
goog.require('cljs.core');
bible_plan.environment.hostname = (function hostname(){return location.hostname;
});
bible_plan.environment.environments = new cljs.core.PersistentArrayMap(null, 3, ["localhost",cljs.core.constant$keyword$186,"staging.bibleplan.twonegatives.com",cljs.core.constant$keyword$187,"bibleplan.twonegatives.com",cljs.core.constant$keyword$188], null);
bible_plan.environment.environment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bible_plan.environment.environments,bible_plan.environment.hostname());
