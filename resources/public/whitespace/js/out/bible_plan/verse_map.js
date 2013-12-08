// Compiled by ClojureScript 0.0-2075
goog.provide('bible_plan.verse_map');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('bible_plan.bible');
goog.require('bible_plan.bible');
goog.require('shodan.console');
goog.require('shodan.console');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('clojure.string');
bible_plan.verse_map.verse_maps = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
bible_plan.verse_map.assoc_verse_map = (function assoc_verse_map(name,verse_map_data){return cljs.core.swap_BANG_.call(null,bible_plan.verse_map.verse_maps,cljs.core.assoc,name,verse_map_data);
});
bible_plan.verse_map.load_verse_maps = (function load_verse_maps(){return ajax.core.ajax_request.call(null,"/edn/verse-maps/verse-maps.edn",new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function load_available_verse_maps(p__7548){var vec__7558 = p__7548;var ok = cljs.core.nth.call(null,vec__7558,0,null);var verse_map_names = cljs.core.nth.call(null,vec__7558,1,null);if(cljs.core.truth_(ok))
{var seq__7559 = cljs.core.seq.call(null,verse_map_names);var chunk__7560 = null;var count__7561 = 0;var i__7562 = 0;while(true){
if((i__7562 < count__7561))
{var verse_map_name = cljs.core._nth.call(null,chunk__7560,i__7562);shodan.console.log.call(null,[cljs.core.str("Loading verse-map: "),cljs.core.str(verse_map_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/verse-maps/"),cljs.core.str(cljs.core.name.call(null,verse_map_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__7559,chunk__7560,count__7561,i__7562,verse_map_name){
return (function (p__7563){var vec__7564 = p__7563;var ok__$1 = cljs.core.nth.call(null,vec__7564,0,null);var verse_map_data = cljs.core.nth.call(null,vec__7564,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.verse_map.assoc_verse_map.call(null,verse_map_name,verse_map_data);
} else
{return null;
}
});})(seq__7559,chunk__7560,count__7561,i__7562,verse_map_name))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__7567 = seq__7559;
var G__7568 = chunk__7560;
var G__7569 = count__7561;
var G__7570 = (i__7562 + 1);
seq__7559 = G__7567;
chunk__7560 = G__7568;
count__7561 = G__7569;
i__7562 = G__7570;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7559);if(cljs.core.truth_(temp__4092__auto__))
{var seq__7559__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7559__$1))
{var c__4010__auto__ = cljs.core.chunk_first.call(null,seq__7559__$1);{
var G__7571 = cljs.core.chunk_rest.call(null,seq__7559__$1);
var G__7572 = c__4010__auto__;
var G__7573 = cljs.core.count.call(null,c__4010__auto__);
var G__7574 = 0;
seq__7559 = G__7571;
chunk__7560 = G__7572;
count__7561 = G__7573;
i__7562 = G__7574;
continue;
}
} else
{var verse_map_name = cljs.core.first.call(null,seq__7559__$1);shodan.console.log.call(null,[cljs.core.str("Loading verse-map: "),cljs.core.str(verse_map_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/verse-maps/"),cljs.core.str(cljs.core.name.call(null,verse_map_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__7559,chunk__7560,count__7561,i__7562,verse_map_name,seq__7559__$1,temp__4092__auto__){
return (function (p__7565){var vec__7566 = p__7565;var ok__$1 = cljs.core.nth.call(null,vec__7566,0,null);var verse_map_data = cljs.core.nth.call(null,vec__7566,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.verse_map.assoc_verse_map.call(null,verse_map_name,verse_map_data);
} else
{return null;
}
});})(seq__7559,chunk__7560,count__7561,i__7562,verse_map_name,seq__7559__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__7575 = cljs.core.next.call(null,seq__7559__$1);
var G__7576 = null;
var G__7577 = 0;
var G__7578 = 0;
seq__7559 = G__7575;
chunk__7560 = G__7576;
count__7561 = G__7577;
i__7562 = G__7578;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
});
bible_plan.verse_map.load_verse_maps.call(null);
bible_plan.verse_map.verse_map_QMARK_ = (function verse_map_QMARK_(p__7579){var map__7581 = p__7579;var map__7581__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7581))?cljs.core.apply.call(null,cljs.core.hash_map,map__7581):map__7581);var maybe_verse_map = map__7581__$1;var verse = cljs.core.get.call(null,map__7581__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var chapter = cljs.core.get.call(null,map__7581__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var book = cljs.core.get.call(null,map__7581__$1,new cljs.core.Keyword(null,"book","book",1016933979));var and__3279__auto__ = (function (){var or__3291__auto__ = (function (){var and__3279__auto__ = book;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = chapter;if(cljs.core.truth_(and__3279__auto____$1))
{return verse;
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})();if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (function (){var and__3279__auto__ = book;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = chapter;if(cljs.core.truth_(and__3279__auto____$1))
{return cljs.core.not.call(null,verse);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})();if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{var and__3279__auto__ = book;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not.call(null,(function (){var and__3279__auto____$1 = chapter;if(cljs.core.truth_(and__3279__auto____$1))
{return verse;
} else
{return and__3279__auto____$1;
}
})());
} else
{return and__3279__auto__;
}
}
}
})();if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,cljs.core.vals.call(null,maybe_verse_map));
} else
{return and__3279__auto__;
}
});
bible_plan.verse_map.__GT_comparable_verse = (function __GT_comparable_verse(p__7582){var map__7584 = p__7582;var map__7584__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7584))?cljs.core.apply.call(null,cljs.core.hash_map,map__7584):map__7584);var verse_map = map__7584__$1;var verse = cljs.core.get.call(null,map__7584__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var chapter = cljs.core.get.call(null,map__7584__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var book = cljs.core.get.call(null,map__7584__$1,new cljs.core.Keyword(null,"book","book",1016933979));if(cljs.core.truth_(book))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"book","book",-1637501790,null)))].join('')));
}
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [book,(function (){var or__3291__auto__ = chapter;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return 0;
}
})(),(function (){var or__3291__auto__ = verse;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return 0;
}
})()], null);
});
/**
* @param {...*} var_args
*/
bible_plan.verse_map._LT_ = (function() { 
var _LT___delegate = function (p__7585,verse_maps){var map__7587 = p__7585;var map__7587__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7587))?cljs.core.apply.call(null,cljs.core.hash_map,map__7587):map__7587);var verse_map = map__7587__$1;var verse = cljs.core.get.call(null,map__7587__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var chapter = cljs.core.get.call(null,map__7587__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var book = cljs.core.get.call(null,map__7587__$1,new cljs.core.Keyword(null,"book","book",1016933979));var verse_maps__$1 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map], null),verse_maps);var comparison_pairs = cljs.core.partition.call(null,2,1,cljs.core.map.call(null,bible_plan.verse_map.__GT_comparable_verse,verse_maps__$1));return cljs.core.every_QMARK_.call(null,(function (comparison_pair){return (0 > cljs.core.apply.call(null,cljs.core.compare,comparison_pair));
}),comparison_pairs);
};
var _LT_ = function (p__7585,var_args){
var verse_maps = null;if (arguments.length > 1) {
  verse_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return _LT___delegate.call(this,p__7585,verse_maps);};
_LT_.cljs$lang$maxFixedArity = 1;
_LT_.cljs$lang$applyTo = (function (arglist__7588){
var p__7585 = cljs.core.first(arglist__7588);
var verse_maps = cljs.core.rest(arglist__7588);
return _LT___delegate(p__7585,verse_maps);
});
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___delegate;
return _LT_;
})()
;
bible_plan.verse_map.verse_map_specificity = (function verse_map_specificity(p__7589){var map__7591 = p__7589;var map__7591__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7591))?cljs.core.apply.call(null,cljs.core.hash_map,map__7591):map__7591);var verse_map = map__7591__$1;var verse = cljs.core.get.call(null,map__7591__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var chapter = cljs.core.get.call(null,map__7591__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var book = cljs.core.get.call(null,map__7591__$1,new cljs.core.Keyword(null,"book","book",1016933979));if(cljs.core.truth_(book))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"book","book",-1637501790,null)))].join('')));
}
if(cljs.core.truth_(verse))
{return new cljs.core.Keyword(null,"verse","verse",1126001831);
} else
{if(cljs.core.truth_(chapter))
{return new cljs.core.Keyword(null,"chapter","chapter",1752919999);
} else
{if(cljs.core.truth_(book))
{return new cljs.core.Keyword(null,"book","book",1016933979);
} else
{return null;
}
}
}
});
/**
* @param {...*} var_args
*/
bible_plan.verse_map.common_specificities = (function() { 
var common_specificities__delegate = function (verse_maps){if(cljs.core.truth_(verse_maps))
{var verse_map_specificities = cljs.core.map.call(null,bible_plan.verse_map.verse_map_specificity,verse_maps);var specificities_set = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,verse_map_specificities);return cljs.core.apply.call(null,cljs.core.min_key,cljs.core.count,cljs.core.map.call(null,(function (verse_map_keys){return cljs.core.filter.call(null,specificities_set,verse_map_keys);
}),cljs.core.map.call(null,cljs.core.keys,verse_maps)));
} else
{return null;
}
};
var common_specificities = function (var_args){
var verse_maps = null;if (arguments.length > 0) {
  verse_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_specificities__delegate.call(this,verse_maps);};
common_specificities.cljs$lang$maxFixedArity = 0;
common_specificities.cljs$lang$applyTo = (function (arglist__7592){
var verse_maps = cljs.core.seq(arglist__7592);
return common_specificities__delegate(verse_maps);
});
common_specificities.cljs$core$IFn$_invoke$arity$variadic = common_specificities__delegate;
return common_specificities;
})()
;
bible_plan.verse_map.verse_map_specificities = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"book","book",1016933979),new cljs.core.Keyword(null,"chapter","chapter",1752919999),new cljs.core.Keyword(null,"verse","verse",1126001831)], null);
bible_plan.verse_map.specificity_weight = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"book","book",1016933979),1,new cljs.core.Keyword(null,"chapter","chapter",1752919999),2,new cljs.core.Keyword(null,"verse","verse",1126001831),3], null);
bible_plan.verse_map.specificity_comparator_fn = (function specificity_comparator_fn(clojure_comparator_fn){return (function() { 
var G__7593__delegate = function (specificities){if(cljs.core.truth_(specificities))
{return cljs.core.apply.call(null,clojure_comparator_fn,cljs.core.map.call(null,bible_plan.verse_map.specificity_weight,specificities));
} else
{return null;
}
};
var G__7593 = function (var_args){
var specificities = null;if (arguments.length > 0) {
  specificities = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7593__delegate.call(this,specificities);};
G__7593.cljs$lang$maxFixedArity = 0;
G__7593.cljs$lang$applyTo = (function (arglist__7594){
var specificities = cljs.core.seq(arglist__7594);
return G__7593__delegate(specificities);
});
G__7593.cljs$core$IFn$_invoke$arity$variadic = G__7593__delegate;
return G__7593;
})()
;
});
bible_plan.verse_map.specificity_LT_ = bible_plan.verse_map.specificity_comparator_fn.call(null,cljs.core._LT_);
bible_plan.verse_map.specificity_GT_ = bible_plan.verse_map.specificity_comparator_fn.call(null,cljs.core._GT_);
bible_plan.verse_map.lower_specificities = (function lower_specificities(specificity){var specificity_weight = bible_plan.verse_map.specificity_weight.call(null,specificity);return cljs.core.filter.call(null,cljs.core.partial.call(null,bible_plan.verse_map.specificity_GT_,specificity),bible_plan.verse_map.verse_map_specificities);
});
bible_plan.verse_map.lower_specificities_equal_QMARK_ = (function lower_specificities_equal_QMARK_(specificity,verse_maps){var lower_specificities = bible_plan.verse_map.lower_specificities.call(null,specificity);return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,cljs.core.apply.call(null,cljs.core.juxt,lower_specificities),verse_maps));
});
/**
* @param {...*} var_args
*/
bible_plan.verse_map.highest_common_verse_map_specificity = (function() { 
var highest_common_verse_map_specificity__delegate = function (verse_maps){if(cljs.core.truth_(verse_maps))
{var highest_distinct_specificities = cljs.core.distinct.call(null,cljs.core.map.call(null,bible_plan.verse_map.verse_map_specificity,verse_maps));return cljs.core.first.call(null,cljs.core.sort.call(null,bible_plan.verse_map.specificity_LT_,highest_distinct_specificities));
} else
{return null;
}
};
var highest_common_verse_map_specificity = function (var_args){
var verse_maps = null;if (arguments.length > 0) {
  verse_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return highest_common_verse_map_specificity__delegate.call(this,verse_maps);};
highest_common_verse_map_specificity.cljs$lang$maxFixedArity = 0;
highest_common_verse_map_specificity.cljs$lang$applyTo = (function (arglist__7595){
var verse_maps = cljs.core.seq(arglist__7595);
return highest_common_verse_map_specificity__delegate(verse_maps);
});
highest_common_verse_map_specificity.cljs$core$IFn$_invoke$arity$variadic = highest_common_verse_map_specificity__delegate;
return highest_common_verse_map_specificity;
})()
;
bible_plan.verse_map.masked__GT_ = (function masked__GT_(verse_map_1,verse_map_2){var verse_maps = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map_1,verse_map_2], null);var or__3291__auto__ = (function (){var and__3279__auto__ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"book","book",1016933979),verse_maps);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.apply.call(null,cljs.core._GT_,cljs.core.map.call(null,new cljs.core.Keyword(null,"book","book",1016933979),verse_maps));
} else
{return and__3279__auto__;
}
})();if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (function (){var and__3279__auto__ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"book","book",1016933979),verse_maps);if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"chapter","chapter",1752919999),verse_maps);if(cljs.core.truth_(and__3279__auto____$1))
{var and__3279__auto____$2 = cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,new cljs.core.Keyword(null,"book","book",1016933979),verse_maps));if(cljs.core.truth_(and__3279__auto____$2))
{return cljs.core.apply.call(null,cljs.core._GT_,cljs.core.map.call(null,new cljs.core.Keyword(null,"chapter","chapter",1752919999),verse_maps));
} else
{return and__3279__auto____$2;
}
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})();if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{var and__3279__auto__ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"book","book",1016933979),verse_maps);if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"chapter","chapter",1752919999),verse_maps);if(cljs.core.truth_(and__3279__auto____$1))
{var and__3279__auto____$2 = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"verse","verse",1126001831),verse_maps);if(cljs.core.truth_(and__3279__auto____$2))
{var and__3279__auto____$3 = cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,new cljs.core.Keyword(null,"book","book",1016933979),verse_maps));if(cljs.core.truth_(and__3279__auto____$3))
{var and__3279__auto____$4 = cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,new cljs.core.Keyword(null,"chapter","chapter",1752919999),verse_maps));if(cljs.core.truth_(and__3279__auto____$4))
{return cljs.core.apply.call(null,cljs.core._GT_,cljs.core.map.call(null,new cljs.core.Keyword(null,"verse","verse",1126001831),verse_maps));
} else
{return and__3279__auto____$4;
}
} else
{return and__3279__auto____$3;
}
} else
{return and__3279__auto____$2;
}
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
}
}
});
bible_plan.verse_map.masked__EQ_ = (function masked__EQ_(verse_map_1,verse_map_2){var verse_maps = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map_1,verse_map_2], null);return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,cljs.core.apply.call(null,cljs.core.juxt,cljs.core.apply.call(null,bible_plan.verse_map.common_specificities,verse_maps)),verse_maps));
});
bible_plan.verse_map.masked__GT__EQ_ = (function masked__GT__EQ_(verse_map_1,verse_map_2){var verse_maps = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map_1,verse_map_2], null);var or__3291__auto__ = cljs.core.apply.call(null,bible_plan.verse_map.masked__EQ_,verse_maps);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.apply.call(null,bible_plan.verse_map.masked__GT_,verse_maps);
}
});
bible_plan.verse_map.range = (function range(p__7596){var map__7598 = p__7596;var map__7598__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7598))?cljs.core.apply.call(null,cljs.core.hash_map,map__7598):map__7598);var reference = map__7598__$1;var end = cljs.core.get.call(null,map__7598__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__7598__$1,new cljs.core.Keyword(null,"start","start",1123661780));var verse_map_range = cljs.core.drop_while.call(null,cljs.core.partial.call(null,bible_plan.verse_map.masked__GT_,start),cljs.core.get.call(null,cljs.core.deref.call(null,bible_plan.verse_map.verse_maps),new cljs.core.Keyword(null,"esv","esv",1014004986)));var verse_map_range__$1 = (cljs.core.truth_(end)?cljs.core.take_while.call(null,cljs.core.partial.call(null,bible_plan.verse_map.masked__GT__EQ_,end),verse_map_range):cljs.core.take_while.call(null,cljs.core.partial.call(null,bible_plan.verse_map.masked__EQ_,start),verse_map_range));return verse_map_range__$1;
});
bible_plan.verse_map.max_verse_map = (function max_verse_map(p__7599){var map__7601 = p__7599;var map__7601__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7601))?cljs.core.apply.call(null,cljs.core.hash_map,map__7601):map__7601);var reference = map__7601__$1;var start_verse_map = cljs.core.get.call(null,map__7601__$1,new cljs.core.Keyword(null,"start","start",1123661780));var end_verse_map = cljs.core.get.call(null,map__7601__$1,new cljs.core.Keyword(null,"end","end",1014004813));if(cljs.core.truth_(start_verse_map))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"start-verse-map","start-verse-map",895319762,null)))].join('')));
}
var or__3291__auto__ = end_verse_map;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return start_verse_map;
}
});
bible_plan.verse_map.min_verse_map = (function min_verse_map(p__7602){var map__7604 = p__7602;var map__7604__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7604))?cljs.core.apply.call(null,cljs.core.hash_map,map__7604):map__7604);var reference = map__7604__$1;var start_verse_map = cljs.core.get.call(null,map__7604__$1,new cljs.core.Keyword(null,"start","start",1123661780));var end_verse_map = cljs.core.get.call(null,map__7604__$1,new cljs.core.Keyword(null,"end","end",1014004813));if(cljs.core.truth_(start_verse_map))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"start-verse-map","start-verse-map",895319762,null)))].join('')));
}
return start_verse_map;
});
bible_plan.verse_map.lowest_unequal_specificity = (function lowest_unequal_specificity(verse_map_1,verse_map_2){if(cljs.core.truth_(bible_plan.verse_map.verse_map_QMARK_.call(null,verse_map_1)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"verse-map?","verse-map?",1808441780,null),new cljs.core.Symbol(null,"verse-map-1","verse-map-1",-2096541919,null))))].join('')));
}
if(cljs.core.truth_(bible_plan.verse_map.verse_map_QMARK_.call(null,verse_map_2)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"verse-map?","verse-map?",1808441780,null),new cljs.core.Symbol(null,"verse-map-2","verse-map-2",-2096541918,null))))].join('')));
}
return cljs.core.some.call(null,(function (specificity){if(cljs.core.not_EQ_.call(null,specificity.call(null,verse_map_1),specificity.call(null,verse_map_2)))
{return specificity;
} else
{return null;
}
}),bible_plan.verse_map.verse_map_specificities);
});
bible_plan.verse_map.__GT_book_str = (function __GT_book_str(p__7605){var map__7608 = p__7605;var map__7608__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7608))?cljs.core.apply.call(null,cljs.core.hash_map,map__7608):map__7608);var verse_map = map__7608__$1;var chapter = cljs.core.get.call(null,map__7608__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var book = cljs.core.get.call(null,map__7608__$1,new cljs.core.Keyword(null,"book","book",1016933979));if(cljs.core.truth_(book))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"book","book",-1637501790,null)))].join('')));
}
var book_str = ((cljs.core.not.call(null,chapter))?cljs.core.get_in.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,bible_plan.bible.bibles),new cljs.core.Keyword(null,"esv","esv",1014004986)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book,new cljs.core.Keyword(null,"name","name",1017277949)], null)):cljs.core.get_in.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,bible_plan.bible.bibles),new cljs.core.Keyword(null,"esv","esv",1014004986)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book,new cljs.core.Keyword(null,"abbreviation","abbreviation",3348225728)], null)));var book_str__$1 = (cljs.core.truth_(cljs.core.re_matches.call(null,/^[0-9] .+/,book_str))?(function (){var vec__7609 = clojure.string.split.call(null,book_str,/ /,2);var number_part = cljs.core.nth.call(null,vec__7609,0,null);var name_part = cljs.core.nth.call(null,vec__7609,1,null);return [cljs.core.str(number_part),cljs.core.str(" "),cljs.core.str(clojure.string.capitalize.call(null,name_part))].join('');
})():clojure.string.capitalize.call(null,book_str));return book_str__$1;
});
bible_plan.verse_map.__GT_chapter_str = (function __GT_chapter_str(p__7610){var map__7612 = p__7610;var map__7612__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7612))?cljs.core.apply.call(null,cljs.core.hash_map,map__7612):map__7612);var verse_map = map__7612__$1;var chapter = cljs.core.get.call(null,map__7612__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));if(cljs.core.truth_(chapter))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chapter","chapter",-901515770,null)))].join('')));
}
return [cljs.core.str(chapter)].join('');
});
bible_plan.verse_map.__GT_verse_str = (function __GT_verse_str(p__7613){var map__7615 = p__7613;var map__7615__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7615))?cljs.core.apply.call(null,cljs.core.hash_map,map__7615):map__7615);var verse_map = map__7615__$1;var verse = cljs.core.get.call(null,map__7615__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));if(cljs.core.truth_(verse))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"verse","verse",-1528433938,null)))].join('')));
}
return [cljs.core.str(verse)].join('');
});
bible_plan.verse_map.__GT_chapter_verse_QMARK__str = (function __GT_chapter_verse_QMARK__str(p__7616){var map__7618 = p__7616;var map__7618__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7618))?cljs.core.apply.call(null,cljs.core.hash_map,map__7618):map__7618);var verse_map = map__7618__$1;var verse = cljs.core.get.call(null,map__7618__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var chapter = cljs.core.get.call(null,map__7618__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));if(cljs.core.truth_(bible_plan.verse_map.verse_map_QMARK_.call(null,verse_map)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"verse-map?","verse-map?",1808441780,null),new cljs.core.Symbol(null,"verse-map","verse-map",1241672317,null))))].join('')));
}
if(cljs.core.truth_(chapter))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chapter","chapter",-901515770,null)))].join('')));
}
var verse_str = bible_plan.verse_map.__GT_chapter_str.call(null,verse_map);var verse_str__$1 = (cljs.core.truth_(verse)?[cljs.core.str(verse_str),cljs.core.str("."),cljs.core.str(bible_plan.verse_map.__GT_verse_str.call(null,verse_map))].join(''):verse_str);return verse_str__$1;
});
bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str = (function __GT_book_chapter_QMARK__verse_QMARK__str(p__7619){var map__7621 = p__7619;var map__7621__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7621))?cljs.core.apply.call(null,cljs.core.hash_map,map__7621):map__7621);var verse_map = map__7621__$1;var verse = cljs.core.get.call(null,map__7621__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var chapter = cljs.core.get.call(null,map__7621__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var book = cljs.core.get.call(null,map__7621__$1,new cljs.core.Keyword(null,"book","book",1016933979));if(cljs.core.truth_(bible_plan.verse_map.verse_map_QMARK_.call(null,verse_map)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"verse-map?","verse-map?",1808441780,null),new cljs.core.Symbol(null,"verse-map","verse-map",1241672317,null))))].join('')));
}
if(cljs.core.truth_((function (){var or__3291__auto__ = book;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (function (){var and__3279__auto__ = book;if(cljs.core.truth_(and__3279__auto__))
{return chapter;
} else
{return and__3279__auto__;
}
})();if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{var and__3279__auto__ = book;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = chapter;if(cljs.core.truth_(and__3279__auto____$1))
{return verse;
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
}
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"book","book",-1637501790,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"book","book",-1637501790,null),new cljs.core.Symbol(null,"chapter","chapter",-901515770,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"book","book",-1637501790,null),new cljs.core.Symbol(null,"chapter","chapter",-901515770,null),new cljs.core.Symbol(null,"verse","verse",-1528433938,null)))))].join('')));
}
var verse_str = bible_plan.verse_map.__GT_book_str.call(null,verse_map);var verse_str__$1 = (cljs.core.truth_(chapter)?[cljs.core.str(verse_str),cljs.core.str(". "),cljs.core.str(bible_plan.verse_map.__GT_chapter_str.call(null,verse_map))].join(''):verse_str);var verse_str__$2 = (cljs.core.truth_(verse)?[cljs.core.str(verse_str__$1),cljs.core.str("."),cljs.core.str(bible_plan.verse_map.__GT_verse_str.call(null,verse_map))].join(''):verse_str__$1);return verse_str__$2;
});
bible_plan.verse_map.__GT_str_fn = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"book","book",1016933979),new cljs.core.Keyword(null,"chapter","chapter",1752919999),new cljs.core.Keyword(null,"verse","verse",1126001831)], null),bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chapter","chapter",1752919999),new cljs.core.Keyword(null,"verse","verse",1126001831)], null),bible_plan.verse_map.__GT_chapter_verse_QMARK__str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"verse","verse",1126001831)], null),bible_plan.verse_map.__GT_verse_str], true, false);
