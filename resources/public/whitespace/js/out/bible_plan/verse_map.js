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
bible_plan.verse_map.load_verse_maps = (function load_verse_maps(){return ajax.core.ajax_request.call(null,"/edn/verse-maps/verse-maps.edn",new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function load_available_verse_maps(p__7524){var vec__7534 = p__7524;var ok = cljs.core.nth.call(null,vec__7534,0,null);var verse_map_names = cljs.core.nth.call(null,vec__7534,1,null);if(cljs.core.truth_(ok))
{var seq__7535 = cljs.core.seq.call(null,verse_map_names);var chunk__7536 = null;var count__7537 = 0;var i__7538 = 0;while(true){
if((i__7538 < count__7537))
{var verse_map_name = cljs.core._nth.call(null,chunk__7536,i__7538);shodan.console.log.call(null,[cljs.core.str("Loading verse-map: "),cljs.core.str(verse_map_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/verse-maps/"),cljs.core.str(cljs.core.name.call(null,verse_map_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__7535,chunk__7536,count__7537,i__7538,verse_map_name){
return (function (p__7539){var vec__7540 = p__7539;var ok__$1 = cljs.core.nth.call(null,vec__7540,0,null);var verse_map_data = cljs.core.nth.call(null,vec__7540,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.verse_map.assoc_verse_map.call(null,verse_map_name,verse_map_data);
} else
{return null;
}
});})(seq__7535,chunk__7536,count__7537,i__7538,verse_map_name))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__7543 = seq__7535;
var G__7544 = chunk__7536;
var G__7545 = count__7537;
var G__7546 = (i__7538 + 1);
seq__7535 = G__7543;
chunk__7536 = G__7544;
count__7537 = G__7545;
i__7538 = G__7546;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7535);if(cljs.core.truth_(temp__4092__auto__))
{var seq__7535__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7535__$1))
{var c__4010__auto__ = cljs.core.chunk_first.call(null,seq__7535__$1);{
var G__7547 = cljs.core.chunk_rest.call(null,seq__7535__$1);
var G__7548 = c__4010__auto__;
var G__7549 = cljs.core.count.call(null,c__4010__auto__);
var G__7550 = 0;
seq__7535 = G__7547;
chunk__7536 = G__7548;
count__7537 = G__7549;
i__7538 = G__7550;
continue;
}
} else
{var verse_map_name = cljs.core.first.call(null,seq__7535__$1);shodan.console.log.call(null,[cljs.core.str("Loading verse-map: "),cljs.core.str(verse_map_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/verse-maps/"),cljs.core.str(cljs.core.name.call(null,verse_map_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__7535,chunk__7536,count__7537,i__7538,verse_map_name,seq__7535__$1,temp__4092__auto__){
return (function (p__7541){var vec__7542 = p__7541;var ok__$1 = cljs.core.nth.call(null,vec__7542,0,null);var verse_map_data = cljs.core.nth.call(null,vec__7542,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.verse_map.assoc_verse_map.call(null,verse_map_name,verse_map_data);
} else
{return null;
}
});})(seq__7535,chunk__7536,count__7537,i__7538,verse_map_name,seq__7535__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__7551 = cljs.core.next.call(null,seq__7535__$1);
var G__7552 = null;
var G__7553 = 0;
var G__7554 = 0;
seq__7535 = G__7551;
chunk__7536 = G__7552;
count__7537 = G__7553;
i__7538 = G__7554;
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
bible_plan.verse_map.verse_map_QMARK_ = (function verse_map_QMARK_(p__7555){var map__7557 = p__7555;var map__7557__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7557))?cljs.core.apply.call(null,cljs.core.hash_map,map__7557):map__7557);var maybe_verse_map = map__7557__$1;var verse = cljs.core.get.call(null,map__7557__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var chapter = cljs.core.get.call(null,map__7557__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var book = cljs.core.get.call(null,map__7557__$1,new cljs.core.Keyword(null,"book","book",1016933979));var and__3279__auto__ = (function (){var or__3291__auto__ = (function (){var and__3279__auto__ = book;if(cljs.core.truth_(and__3279__auto__))
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
bible_plan.verse_map.__GT_comparable_verse = (function __GT_comparable_verse(p__7558){var map__7560 = p__7558;var map__7560__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7560))?cljs.core.apply.call(null,cljs.core.hash_map,map__7560):map__7560);var verse_map = map__7560__$1;var verse = cljs.core.get.call(null,map__7560__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var chapter = cljs.core.get.call(null,map__7560__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var book = cljs.core.get.call(null,map__7560__$1,new cljs.core.Keyword(null,"book","book",1016933979));if(cljs.core.truth_(book))
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
var _LT___delegate = function (p__7561,verse_maps){var map__7563 = p__7561;var map__7563__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7563))?cljs.core.apply.call(null,cljs.core.hash_map,map__7563):map__7563);var verse_map = map__7563__$1;var verse = cljs.core.get.call(null,map__7563__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var chapter = cljs.core.get.call(null,map__7563__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var book = cljs.core.get.call(null,map__7563__$1,new cljs.core.Keyword(null,"book","book",1016933979));var verse_maps__$1 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map], null),verse_maps);var comparison_pairs = cljs.core.partition.call(null,2,1,cljs.core.map.call(null,bible_plan.verse_map.__GT_comparable_verse,verse_maps__$1));return cljs.core.every_QMARK_.call(null,(function (comparison_pair){return (0 > cljs.core.apply.call(null,cljs.core.compare,comparison_pair));
}),comparison_pairs);
};
var _LT_ = function (p__7561,var_args){
var verse_maps = null;if (arguments.length > 1) {
  verse_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return _LT___delegate.call(this,p__7561,verse_maps);};
_LT_.cljs$lang$maxFixedArity = 1;
_LT_.cljs$lang$applyTo = (function (arglist__7564){
var p__7561 = cljs.core.first(arglist__7564);
var verse_maps = cljs.core.rest(arglist__7564);
return _LT___delegate(p__7561,verse_maps);
});
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___delegate;
return _LT_;
})()
;
bible_plan.verse_map.verse_map_specificity = (function verse_map_specificity(p__7565){var map__7567 = p__7565;var map__7567__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7567))?cljs.core.apply.call(null,cljs.core.hash_map,map__7567):map__7567);var verse_map = map__7567__$1;var verse = cljs.core.get.call(null,map__7567__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var chapter = cljs.core.get.call(null,map__7567__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var book = cljs.core.get.call(null,map__7567__$1,new cljs.core.Keyword(null,"book","book",1016933979));if(cljs.core.truth_(book))
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
common_specificities.cljs$lang$applyTo = (function (arglist__7568){
var verse_maps = cljs.core.seq(arglist__7568);
return common_specificities__delegate(verse_maps);
});
common_specificities.cljs$core$IFn$_invoke$arity$variadic = common_specificities__delegate;
return common_specificities;
})()
;
bible_plan.verse_map.verse_map_specificities = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"book","book",1016933979),new cljs.core.Keyword(null,"chapter","chapter",1752919999),new cljs.core.Keyword(null,"verse","verse",1126001831)], null);
bible_plan.verse_map.specificity_weight = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"book","book",1016933979),1,new cljs.core.Keyword(null,"chapter","chapter",1752919999),2,new cljs.core.Keyword(null,"verse","verse",1126001831),3], null);
bible_plan.verse_map.specificity_comparator_fn = (function specificity_comparator_fn(clojure_comparator_fn){return (function() { 
var G__7569__delegate = function (specificities){if(cljs.core.truth_(specificities))
{return cljs.core.apply.call(null,clojure_comparator_fn,cljs.core.map.call(null,bible_plan.verse_map.specificity_weight,specificities));
} else
{return null;
}
};
var G__7569 = function (var_args){
var specificities = null;if (arguments.length > 0) {
  specificities = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7569__delegate.call(this,specificities);};
G__7569.cljs$lang$maxFixedArity = 0;
G__7569.cljs$lang$applyTo = (function (arglist__7570){
var specificities = cljs.core.seq(arglist__7570);
return G__7569__delegate(specificities);
});
G__7569.cljs$core$IFn$_invoke$arity$variadic = G__7569__delegate;
return G__7569;
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
highest_common_verse_map_specificity.cljs$lang$applyTo = (function (arglist__7571){
var verse_maps = cljs.core.seq(arglist__7571);
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
bible_plan.verse_map.range = (function range(p__7572){var map__7574 = p__7572;var map__7574__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7574))?cljs.core.apply.call(null,cljs.core.hash_map,map__7574):map__7574);var reference = map__7574__$1;var end = cljs.core.get.call(null,map__7574__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__7574__$1,new cljs.core.Keyword(null,"start","start",1123661780));var verse_map_range = cljs.core.drop_while.call(null,cljs.core.partial.call(null,bible_plan.verse_map.masked__GT_,start),cljs.core.get.call(null,cljs.core.deref.call(null,bible_plan.verse_map.verse_maps),new cljs.core.Keyword(null,"esv","esv",1014004986)));var verse_map_range__$1 = (cljs.core.truth_(end)?cljs.core.take_while.call(null,cljs.core.partial.call(null,bible_plan.verse_map.masked__GT__EQ_,end),verse_map_range):cljs.core.take_while.call(null,cljs.core.partial.call(null,bible_plan.verse_map.masked__EQ_,start),verse_map_range));return verse_map_range__$1;
});
bible_plan.verse_map.max_verse_map = (function max_verse_map(p__7575){var map__7577 = p__7575;var map__7577__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7577))?cljs.core.apply.call(null,cljs.core.hash_map,map__7577):map__7577);var reference = map__7577__$1;var start_verse_map = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"start","start",1123661780));var end_verse_map = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"end","end",1014004813));if(cljs.core.truth_(start_verse_map))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"start-verse-map","start-verse-map",895319762,null)))].join('')));
}
var or__3291__auto__ = end_verse_map;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return start_verse_map;
}
});
bible_plan.verse_map.min_verse_map = (function min_verse_map(p__7578){var map__7580 = p__7578;var map__7580__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7580))?cljs.core.apply.call(null,cljs.core.hash_map,map__7580):map__7580);var reference = map__7580__$1;var start_verse_map = cljs.core.get.call(null,map__7580__$1,new cljs.core.Keyword(null,"start","start",1123661780));var end_verse_map = cljs.core.get.call(null,map__7580__$1,new cljs.core.Keyword(null,"end","end",1014004813));if(cljs.core.truth_(start_verse_map))
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
bible_plan.verse_map.__GT_book_str = (function __GT_book_str(p__7581){var map__7584 = p__7581;var map__7584__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7584))?cljs.core.apply.call(null,cljs.core.hash_map,map__7584):map__7584);var verse_map = map__7584__$1;var chapter = cljs.core.get.call(null,map__7584__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var book = cljs.core.get.call(null,map__7584__$1,new cljs.core.Keyword(null,"book","book",1016933979));if(cljs.core.truth_(book))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"book","book",-1637501790,null)))].join('')));
}
var book_str = ((cljs.core.not.call(null,chapter))?cljs.core.get_in.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,bible_plan.bible.bibles),new cljs.core.Keyword(null,"esv","esv",1014004986)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book,new cljs.core.Keyword(null,"name","name",1017277949)], null)):cljs.core.get_in.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,bible_plan.bible.bibles),new cljs.core.Keyword(null,"esv","esv",1014004986)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book,new cljs.core.Keyword(null,"abbreviation","abbreviation",3348225728)], null)));var book_str__$1 = (cljs.core.truth_(cljs.core.re_matches.call(null,/^[0-9] .+/,book_str))?(function (){var vec__7585 = clojure.string.split.call(null,book_str,/ /,2);var number_part = cljs.core.nth.call(null,vec__7585,0,null);var name_part = cljs.core.nth.call(null,vec__7585,1,null);return [cljs.core.str(number_part),cljs.core.str(" "),cljs.core.str(clojure.string.capitalize.call(null,name_part))].join('');
})():clojure.string.capitalize.call(null,book_str));return book_str__$1;
});
bible_plan.verse_map.__GT_chapter_str = (function __GT_chapter_str(p__7586){var map__7588 = p__7586;var map__7588__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7588))?cljs.core.apply.call(null,cljs.core.hash_map,map__7588):map__7588);var verse_map = map__7588__$1;var chapter = cljs.core.get.call(null,map__7588__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));if(cljs.core.truth_(chapter))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chapter","chapter",-901515770,null)))].join('')));
}
return [cljs.core.str(chapter)].join('');
});
bible_plan.verse_map.__GT_verse_str = (function __GT_verse_str(p__7589){var map__7591 = p__7589;var map__7591__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7591))?cljs.core.apply.call(null,cljs.core.hash_map,map__7591):map__7591);var verse_map = map__7591__$1;var verse = cljs.core.get.call(null,map__7591__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));if(cljs.core.truth_(verse))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"verse","verse",-1528433938,null)))].join('')));
}
return [cljs.core.str(verse)].join('');
});
bible_plan.verse_map.__GT_chapter_verse_QMARK__str = (function __GT_chapter_verse_QMARK__str(p__7592){var map__7594 = p__7592;var map__7594__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7594))?cljs.core.apply.call(null,cljs.core.hash_map,map__7594):map__7594);var verse_map = map__7594__$1;var verse = cljs.core.get.call(null,map__7594__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var chapter = cljs.core.get.call(null,map__7594__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));if(cljs.core.truth_(bible_plan.verse_map.verse_map_QMARK_.call(null,verse_map)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"verse-map?","verse-map?",1808441780,null),new cljs.core.Symbol(null,"verse-map","verse-map",1241672317,null))))].join('')));
}
if(cljs.core.truth_(chapter))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chapter","chapter",-901515770,null)))].join('')));
}
var verse_str = bible_plan.verse_map.__GT_chapter_str.call(null,verse_map);var verse_str__$1 = (cljs.core.truth_(verse)?[cljs.core.str(verse_str),cljs.core.str("."),cljs.core.str(bible_plan.verse_map.__GT_verse_str.call(null,verse_map))].join(''):verse_str);return verse_str__$1;
});
bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str = (function __GT_book_chapter_QMARK__verse_QMARK__str(p__7595){var map__7597 = p__7595;var map__7597__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7597))?cljs.core.apply.call(null,cljs.core.hash_map,map__7597):map__7597);var verse_map = map__7597__$1;var verse = cljs.core.get.call(null,map__7597__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var chapter = cljs.core.get.call(null,map__7597__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var book = cljs.core.get.call(null,map__7597__$1,new cljs.core.Keyword(null,"book","book",1016933979));if(cljs.core.truth_(bible_plan.verse_map.verse_map_QMARK_.call(null,verse_map)))
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
