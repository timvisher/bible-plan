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
bible_plan.verse_map.verse_maps = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
bible_plan.verse_map.assoc_verse_map = (function assoc_verse_map(name,verse_map_data){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bible_plan.verse_map.verse_maps,cljs.core.assoc,name,verse_map_data);
});
bible_plan.verse_map.load_verse_maps = (function load_verse_maps(){return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3("/edn/verse-maps/verse-maps.edn",cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,(function load_available_verse_maps(p__13709){var vec__13719 = p__13709;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13719,0,null);var verse_map_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13719,1,null);if(cljs.core.truth_(ok))
{var seq__13720 = cljs.core.seq(verse_map_names);var chunk__13721 = null;var count__13722 = 0;var i__13723 = 0;while(true){
if((i__13723 < count__13722))
{var verse_map_name = chunk__13721.cljs$core$IIndexed$_nth$arity$2(null,i__13723);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading verse-map: "),cljs.core.str(verse_map_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/verse-maps/"),cljs.core.str(cljs.core.name(verse_map_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__13720,chunk__13721,count__13722,i__13723,verse_map_name){
return (function (p__13724){var vec__13725 = p__13724;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13725,0,null);var verse_map_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13725,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.verse_map.assoc_verse_map(verse_map_name,verse_map_data);
} else
{return null;
}
});})(seq__13720,chunk__13721,count__13722,i__13723,verse_map_name))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__13728 = seq__13720;
var G__13729 = chunk__13721;
var G__13730 = count__13722;
var G__13731 = (i__13723 + 1);
seq__13720 = G__13728;
chunk__13721 = G__13729;
count__13722 = G__13730;
i__13723 = G__13731;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13720);if(cljs.core.truth_(temp__4092__auto__))
{var seq__13720__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13720__$1))
{var c__4010__auto__ = cljs.core.chunk_first(seq__13720__$1);{
var G__13732 = cljs.core.chunk_rest(seq__13720__$1);
var G__13733 = c__4010__auto__;
var G__13734 = cljs.core.count(c__4010__auto__);
var G__13735 = 0;
seq__13720 = G__13732;
chunk__13721 = G__13733;
count__13722 = G__13734;
i__13723 = G__13735;
continue;
}
} else
{var verse_map_name = cljs.core.first(seq__13720__$1);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading verse-map: "),cljs.core.str(verse_map_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/verse-maps/"),cljs.core.str(cljs.core.name(verse_map_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__13720,chunk__13721,count__13722,i__13723,verse_map_name,seq__13720__$1,temp__4092__auto__){
return (function (p__13726){var vec__13727 = p__13726;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13727,0,null);var verse_map_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13727,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.verse_map.assoc_verse_map(verse_map_name,verse_map_data);
} else
{return null;
}
});})(seq__13720,chunk__13721,count__13722,i__13723,verse_map_name,seq__13720__$1,temp__4092__auto__))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__13736 = cljs.core.next(seq__13720__$1);
var G__13737 = null;
var G__13738 = 0;
var G__13739 = 0;
seq__13720 = G__13736;
chunk__13721 = G__13737;
count__13722 = G__13738;
i__13723 = G__13739;
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
}),cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
});
bible_plan.verse_map.load_verse_maps();
bible_plan.verse_map.verse_map_QMARK_ = (function verse_map_QMARK_(p__13740){var map__13742 = p__13740;var map__13742__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13742))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13742):map__13742);var maybe_verse_map = map__13742__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13742__$1,cljs.core.constant$keyword$144);var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13742__$1,cljs.core.constant$keyword$145);var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13742__$1,cljs.core.constant$keyword$146);var and__3279__auto__ = (function (){var or__3291__auto__ = (function (){var and__3279__auto__ = book;if(cljs.core.truth_(and__3279__auto__))
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
{return cljs.core.not(verse);
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
{return cljs.core.not((function (){var and__3279__auto____$1 = chapter;if(cljs.core.truth_(and__3279__auto____$1))
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
{return cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(maybe_verse_map));
} else
{return and__3279__auto__;
}
});
bible_plan.verse_map.__GT_comparable_verse = (function __GT_comparable_verse(p__13743){var map__13745 = p__13743;var map__13745__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13745))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13745):map__13745);var verse_map = map__13745__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13745__$1,cljs.core.constant$keyword$144);var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13745__$1,cljs.core.constant$keyword$145);var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13745__$1,cljs.core.constant$keyword$146);if(cljs.core.truth_(book))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"book","book",-1637501790,null)], 0)))].join('')));
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
var _LT___delegate = function (p__13746,verse_maps){var map__13748 = p__13746;var map__13748__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13748))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13748):map__13748);var verse_map = map__13748__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13748__$1,cljs.core.constant$keyword$144);var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13748__$1,cljs.core.constant$keyword$145);var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13748__$1,cljs.core.constant$keyword$146);var verse_maps__$1 = cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map], null),verse_maps);var comparison_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$3(2,1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.__GT_comparable_verse,verse_maps__$1));return cljs.core.every_QMARK_((function (comparison_pair){return (0 > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,comparison_pair));
}),comparison_pairs);
};
var _LT_ = function (p__13746,var_args){
var verse_maps = null;if (arguments.length > 1) {
  verse_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return _LT___delegate.call(this,p__13746,verse_maps);};
_LT_.cljs$lang$maxFixedArity = 1;
_LT_.cljs$lang$applyTo = (function (arglist__13749){
var p__13746 = cljs.core.first(arglist__13749);
var verse_maps = cljs.core.rest(arglist__13749);
return _LT___delegate(p__13746,verse_maps);
});
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___delegate;
return _LT_;
})()
;
bible_plan.verse_map.verse_map_specificity = (function verse_map_specificity(p__13750){var map__13752 = p__13750;var map__13752__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13752))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13752):map__13752);var verse_map = map__13752__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13752__$1,cljs.core.constant$keyword$144);var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13752__$1,cljs.core.constant$keyword$145);var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13752__$1,cljs.core.constant$keyword$146);if(cljs.core.truth_(book))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"book","book",-1637501790,null)], 0)))].join('')));
}
if(cljs.core.truth_(verse))
{return cljs.core.constant$keyword$144;
} else
{if(cljs.core.truth_(chapter))
{return cljs.core.constant$keyword$145;
} else
{if(cljs.core.truth_(book))
{return cljs.core.constant$keyword$146;
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
{var verse_map_specificities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.verse_map_specificity,verse_maps);var specificities_set = cljs.core.into(cljs.core.PersistentHashSet.EMPTY,verse_map_specificities);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (verse_map_keys){return cljs.core.filter(specificities_set,verse_map_keys);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,verse_maps)));
} else
{return null;
}
};
var common_specificities = function (var_args){
var verse_maps = null;if (arguments.length > 0) {
  verse_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_specificities__delegate.call(this,verse_maps);};
common_specificities.cljs$lang$maxFixedArity = 0;
common_specificities.cljs$lang$applyTo = (function (arglist__13753){
var verse_maps = cljs.core.seq(arglist__13753);
return common_specificities__delegate(verse_maps);
});
common_specificities.cljs$core$IFn$_invoke$arity$variadic = common_specificities__delegate;
return common_specificities;
})()
;
bible_plan.verse_map.verse_map_specificities = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$146,cljs.core.constant$keyword$145,cljs.core.constant$keyword$144], null);
bible_plan.verse_map.specificity_weight = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$146,1,cljs.core.constant$keyword$145,2,cljs.core.constant$keyword$144,3], null);
bible_plan.verse_map.specificity_comparator_fn = (function specificity_comparator_fn(clojure_comparator_fn){return (function() { 
var G__13754__delegate = function (specificities){if(cljs.core.truth_(specificities))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure_comparator_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.specificity_weight,specificities));
} else
{return null;
}
};
var G__13754 = function (var_args){
var specificities = null;if (arguments.length > 0) {
  specificities = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13754__delegate.call(this,specificities);};
G__13754.cljs$lang$maxFixedArity = 0;
G__13754.cljs$lang$applyTo = (function (arglist__13755){
var specificities = cljs.core.seq(arglist__13755);
return G__13754__delegate(specificities);
});
G__13754.cljs$core$IFn$_invoke$arity$variadic = G__13754__delegate;
return G__13754;
})()
;
});
bible_plan.verse_map.specificity_LT_ = bible_plan.verse_map.specificity_comparator_fn(cljs.core._LT_);
bible_plan.verse_map.specificity_GT_ = bible_plan.verse_map.specificity_comparator_fn(cljs.core._GT_);
bible_plan.verse_map.lower_specificities = (function lower_specificities(specificity){var specificity_weight = (bible_plan.verse_map.specificity_weight.cljs$core$IFn$_invoke$arity$1 ? bible_plan.verse_map.specificity_weight.cljs$core$IFn$_invoke$arity$1(specificity) : bible_plan.verse_map.specificity_weight.call(null,specificity));return cljs.core.filter(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.specificity_GT_,specificity),bible_plan.verse_map.verse_map_specificities);
});
bible_plan.verse_map.lower_specificities_equal_QMARK_ = (function lower_specificities_equal_QMARK_(specificity,verse_maps){var lower_specificities = bible_plan.verse_map.lower_specificities(specificity);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,lower_specificities),verse_maps));
});
/**
* @param {...*} var_args
*/
bible_plan.verse_map.highest_common_verse_map_specificity = (function() { 
var highest_common_verse_map_specificity__delegate = function (verse_maps){if(cljs.core.truth_(verse_maps))
{var highest_distinct_specificities = cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.verse_map_specificity,verse_maps));return cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.specificity_LT_,highest_distinct_specificities));
} else
{return null;
}
};
var highest_common_verse_map_specificity = function (var_args){
var verse_maps = null;if (arguments.length > 0) {
  verse_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return highest_common_verse_map_specificity__delegate.call(this,verse_maps);};
highest_common_verse_map_specificity.cljs$lang$maxFixedArity = 0;
highest_common_verse_map_specificity.cljs$lang$applyTo = (function (arglist__13756){
var verse_maps = cljs.core.seq(arglist__13756);
return highest_common_verse_map_specificity__delegate(verse_maps);
});
highest_common_verse_map_specificity.cljs$core$IFn$_invoke$arity$variadic = highest_common_verse_map_specificity__delegate;
return highest_common_verse_map_specificity;
})()
;
bible_plan.verse_map.masked__GT_ = (function masked__GT_(verse_map_1,verse_map_2){var verse_maps = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map_1,verse_map_2], null);var or__3291__auto__ = (function (){var and__3279__auto__ = cljs.core.every_QMARK_(cljs.core.constant$keyword$146,verse_maps);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$146,verse_maps));
} else
{return and__3279__auto__;
}
})();if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (function (){var and__3279__auto__ = cljs.core.every_QMARK_(cljs.core.constant$keyword$146,verse_maps);if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.every_QMARK_(cljs.core.constant$keyword$145,verse_maps);if(cljs.core.truth_(and__3279__auto____$1))
{var and__3279__auto____$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$146,verse_maps));if(cljs.core.truth_(and__3279__auto____$2))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$145,verse_maps));
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
{var and__3279__auto__ = cljs.core.every_QMARK_(cljs.core.constant$keyword$146,verse_maps);if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.every_QMARK_(cljs.core.constant$keyword$145,verse_maps);if(cljs.core.truth_(and__3279__auto____$1))
{var and__3279__auto____$2 = cljs.core.every_QMARK_(cljs.core.constant$keyword$144,verse_maps);if(cljs.core.truth_(and__3279__auto____$2))
{var and__3279__auto____$3 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$146,verse_maps));if(cljs.core.truth_(and__3279__auto____$3))
{var and__3279__auto____$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$145,verse_maps));if(cljs.core.truth_(and__3279__auto____$4))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$144,verse_maps));
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
bible_plan.verse_map.masked__EQ_ = (function masked__EQ_(verse_map_1,verse_map_2){var verse_maps = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map_1,verse_map_2], null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.common_specificities,verse_maps)),verse_maps));
});
bible_plan.verse_map.masked__GT__EQ_ = (function masked__GT__EQ_(verse_map_1,verse_map_2){var verse_maps = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map_1,verse_map_2], null);var or__3291__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.masked__EQ_,verse_maps);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.masked__GT_,verse_maps);
}
});
bible_plan.verse_map.range = (function range(p__13757){var map__13759 = p__13757;var map__13759__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13759))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13759):map__13759);var reference = map__13759__$1;var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13759__$1,cljs.core.constant$keyword$147);var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13759__$1,cljs.core.constant$keyword$148);var verse_map_range = cljs.core.drop_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.masked__GT_,start),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bible_plan.verse_map.verse_maps),cljs.core.constant$keyword$149));var verse_map_range__$1 = (cljs.core.truth_(end)?cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.masked__GT__EQ_,end),verse_map_range):cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.masked__EQ_,start),verse_map_range));return verse_map_range__$1;
});
bible_plan.verse_map.max_verse_map = (function max_verse_map(p__13760){var map__13762 = p__13760;var map__13762__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13762))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13762):map__13762);var reference = map__13762__$1;var start_verse_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13762__$1,cljs.core.constant$keyword$148);var end_verse_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13762__$1,cljs.core.constant$keyword$147);if(cljs.core.truth_(start_verse_map))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"start-verse-map","start-verse-map",895319762,null)], 0)))].join('')));
}
var or__3291__auto__ = end_verse_map;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return start_verse_map;
}
});
bible_plan.verse_map.min_verse_map = (function min_verse_map(p__13763){var map__13765 = p__13763;var map__13765__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13765))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13765):map__13765);var reference = map__13765__$1;var start_verse_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13765__$1,cljs.core.constant$keyword$148);var end_verse_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13765__$1,cljs.core.constant$keyword$147);if(cljs.core.truth_(start_verse_map))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"start-verse-map","start-verse-map",895319762,null)], 0)))].join('')));
}
return start_verse_map;
});
bible_plan.verse_map.lowest_unequal_specificity = (function lowest_unequal_specificity(verse_map_1,verse_map_2){if(cljs.core.truth_(bible_plan.verse_map.verse_map_QMARK_(verse_map_1)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"verse-map?","verse-map?",1808441780,null),new cljs.core.Symbol(null,"verse-map-1","verse-map-1",-2096541919,null))], 0)))].join('')));
}
if(cljs.core.truth_(bible_plan.verse_map.verse_map_QMARK_(verse_map_2)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"verse-map?","verse-map?",1808441780,null),new cljs.core.Symbol(null,"verse-map-2","verse-map-2",-2096541918,null))], 0)))].join('')));
}
return cljs.core.some((function (specificity){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((specificity.cljs$core$IFn$_invoke$arity$1 ? specificity.cljs$core$IFn$_invoke$arity$1(verse_map_1) : specificity.call(null,verse_map_1)),(specificity.cljs$core$IFn$_invoke$arity$1 ? specificity.cljs$core$IFn$_invoke$arity$1(verse_map_2) : specificity.call(null,verse_map_2))))
{return specificity;
} else
{return null;
}
}),bible_plan.verse_map.verse_map_specificities);
});
bible_plan.verse_map.__GT_book_str = (function __GT_book_str(p__13766){var map__13769 = p__13766;var map__13769__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13769))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13769):map__13769);var verse_map = map__13769__$1;var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13769__$1,cljs.core.constant$keyword$145);var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13769__$1,cljs.core.constant$keyword$146);if(cljs.core.truth_(book))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"book","book",-1637501790,null)], 0)))].join('')));
}
var book_str = ((cljs.core.not(chapter))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bible_plan.bible.bibles),cljs.core.constant$keyword$149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book,cljs.core.constant$keyword$150], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bible_plan.bible.bibles),cljs.core.constant$keyword$149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book,cljs.core.constant$keyword$151], null)));var book_str__$1 = (cljs.core.truth_(cljs.core.re_matches(/^[0-9] .+/,book_str))?(function (){var vec__13770 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(book_str,/ /,2);var number_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13770,0,null);var name_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13770,1,null);return [cljs.core.str(number_part),cljs.core.str(" "),cljs.core.str(clojure.string.capitalize(name_part))].join('');
})():clojure.string.capitalize(book_str));return book_str__$1;
});
bible_plan.verse_map.__GT_chapter_str = (function __GT_chapter_str(p__13771){var map__13773 = p__13771;var map__13773__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13773))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13773):map__13773);var verse_map = map__13773__$1;var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13773__$1,cljs.core.constant$keyword$145);if(cljs.core.truth_(chapter))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"chapter","chapter",-901515770,null)], 0)))].join('')));
}
return [cljs.core.str(chapter)].join('');
});
bible_plan.verse_map.__GT_verse_str = (function __GT_verse_str(p__13774){var map__13776 = p__13774;var map__13776__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13776))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13776):map__13776);var verse_map = map__13776__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13776__$1,cljs.core.constant$keyword$144);if(cljs.core.truth_(verse))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"verse","verse",-1528433938,null)], 0)))].join('')));
}
return [cljs.core.str(verse)].join('');
});
bible_plan.verse_map.__GT_chapter_verse_QMARK__str = (function __GT_chapter_verse_QMARK__str(p__13777){var map__13779 = p__13777;var map__13779__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13779))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13779):map__13779);var verse_map = map__13779__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13779__$1,cljs.core.constant$keyword$144);var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13779__$1,cljs.core.constant$keyword$145);if(cljs.core.truth_(bible_plan.verse_map.verse_map_QMARK_(verse_map)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"verse-map?","verse-map?",1808441780,null),new cljs.core.Symbol(null,"verse-map","verse-map",1241672317,null))], 0)))].join('')));
}
if(cljs.core.truth_(chapter))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"chapter","chapter",-901515770,null)], 0)))].join('')));
}
var verse_str = bible_plan.verse_map.__GT_chapter_str(verse_map);var verse_str__$1 = (cljs.core.truth_(verse)?[cljs.core.str(verse_str),cljs.core.str("."),cljs.core.str(bible_plan.verse_map.__GT_verse_str(verse_map))].join(''):verse_str);return verse_str__$1;
});
bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str = (function __GT_book_chapter_QMARK__verse_QMARK__str(p__13780){var map__13782 = p__13780;var map__13782__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13782))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13782):map__13782);var verse_map = map__13782__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13782__$1,cljs.core.constant$keyword$144);var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13782__$1,cljs.core.constant$keyword$145);var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13782__$1,cljs.core.constant$keyword$146);if(cljs.core.truth_(bible_plan.verse_map.verse_map_QMARK_(verse_map)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"verse-map?","verse-map?",1808441780,null),new cljs.core.Symbol(null,"verse-map","verse-map",1241672317,null))], 0)))].join('')));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"book","book",-1637501790,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"book","book",-1637501790,null),new cljs.core.Symbol(null,"chapter","chapter",-901515770,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"book","book",-1637501790,null),new cljs.core.Symbol(null,"chapter","chapter",-901515770,null),new cljs.core.Symbol(null,"verse","verse",-1528433938,null)))], 0)))].join('')));
}
var verse_str = bible_plan.verse_map.__GT_book_str(verse_map);var verse_str__$1 = (cljs.core.truth_(chapter)?[cljs.core.str(verse_str),cljs.core.str(". "),cljs.core.str(bible_plan.verse_map.__GT_chapter_str(verse_map))].join(''):verse_str);var verse_str__$2 = (cljs.core.truth_(verse)?[cljs.core.str(verse_str__$1),cljs.core.str("."),cljs.core.str(bible_plan.verse_map.__GT_verse_str(verse_map))].join(''):verse_str__$1);return verse_str__$2;
});
bible_plan.verse_map.__GT_str_fn = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$146,cljs.core.constant$keyword$145,cljs.core.constant$keyword$144], null),bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$144], null),bible_plan.verse_map.__GT_chapter_verse_QMARK__str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144], null),bible_plan.verse_map.__GT_verse_str], true, false);
