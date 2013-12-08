// Compiled by ClojureScript 0.0-2075
goog.provide('bible_plan.environment');
goog.require('cljs.core');
bible_plan.environment.hostname = (function hostname(){return location.hostname;
});
bible_plan.environment.environments = new cljs.core.PersistentArrayMap(null, 3, ["localhost",new cljs.core.Keyword(null,"dev","dev",1014003591),"staging.bibleplan.twonegatives.com",new cljs.core.Keyword(null,"staging","staging",3411348397),"bibleplan.twonegatives.com",new cljs.core.Keyword(null,"prod","prod",1017353929)], null);
bible_plan.environment.environment = cljs.core.get.call(null,bible_plan.environment.environments,bible_plan.environment.hostname.call(null));
