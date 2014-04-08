// Compiled by ClojureScript 0.0-2202
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
bible_plan.verse_map.load_verse_maps = (function load_verse_maps(){return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3("/edn/verse-maps/verse-maps.edn",cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,(function load_available_verse_maps(p__9532){var vec__9542 = p__9532;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9542,0,null);var verse_map_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9542,1,null);if(cljs.core.truth_(ok))
{var seq__9543 = cljs.core.seq(verse_map_names);var chunk__9544 = null;var count__9545 = 0;var i__9546 = 0;while(true){
if((i__9546 < count__9545))
{var verse_map_name = chunk__9544.cljs$core$IIndexed$_nth$arity$2(null,i__9546);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading verse-map: "),cljs.core.str(verse_map_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/verse-maps/"),cljs.core.str(cljs.core.name(verse_map_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__9543,chunk__9544,count__9545,i__9546,verse_map_name,vec__9542,ok,verse_map_names){
return (function (p__9547){var vec__9548 = p__9547;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9548,0,null);var verse_map_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9548,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.verse_map.assoc_verse_map(verse_map_name,verse_map_data);
} else
{return null;
}
});})(seq__9543,chunk__9544,count__9545,i__9546,verse_map_name,vec__9542,ok,verse_map_names))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__9551 = seq__9543;
var G__9552 = chunk__9544;
var G__9553 = count__9545;
var G__9554 = (i__9546 + 1);
seq__9543 = G__9551;
chunk__9544 = G__9552;
count__9545 = G__9553;
i__9546 = G__9554;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__9543);if(temp__4126__auto__)
{var seq__9543__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9543__$1))
{var c__4229__auto__ = cljs.core.chunk_first(seq__9543__$1);{
var G__9555 = cljs.core.chunk_rest(seq__9543__$1);
var G__9556 = c__4229__auto__;
var G__9557 = cljs.core.count(c__4229__auto__);
var G__9558 = 0;
seq__9543 = G__9555;
chunk__9544 = G__9556;
count__9545 = G__9557;
i__9546 = G__9558;
continue;
}
} else
{var verse_map_name = cljs.core.first(seq__9543__$1);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading verse-map: "),cljs.core.str(verse_map_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/verse-maps/"),cljs.core.str(cljs.core.name(verse_map_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__9543,chunk__9544,count__9545,i__9546,verse_map_name,seq__9543__$1,temp__4126__auto__,vec__9542,ok,verse_map_names){
return (function (p__9549){var vec__9550 = p__9549;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9550,0,null);var verse_map_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9550,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.verse_map.assoc_verse_map(verse_map_name,verse_map_data);
} else
{return null;
}
});})(seq__9543,chunk__9544,count__9545,i__9546,verse_map_name,seq__9543__$1,temp__4126__auto__,vec__9542,ok,verse_map_names))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__9559 = cljs.core.next(seq__9543__$1);
var G__9560 = null;
var G__9561 = 0;
var G__9562 = 0;
seq__9543 = G__9559;
chunk__9544 = G__9560;
count__9545 = G__9561;
i__9546 = G__9562;
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
bible_plan.verse_map.verse_map_QMARK_ = (function verse_map_QMARK_(p__9563){var map__9565 = p__9563;var map__9565__$1 = ((cljs.core.seq_QMARK_(map__9565))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9565):map__9565);var maybe_verse_map = map__9565__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9565__$1,cljs.core.constant$keyword$156);var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9565__$1,cljs.core.constant$keyword$157);var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9565__$1,cljs.core.constant$keyword$158);var and__3469__auto__ = (function (){var or__3481__auto__ = (function (){var and__3469__auto__ = book;if(cljs.core.truth_(and__3469__auto__))
{var and__3469__auto____$1 = chapter;if(cljs.core.truth_(and__3469__auto____$1))
{return verse;
} else
{return and__3469__auto____$1;
}
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (function (){var and__3469__auto__ = book;if(cljs.core.truth_(and__3469__auto__))
{var and__3469__auto____$1 = chapter;if(cljs.core.truth_(and__3469__auto____$1))
{return cljs.core.not(verse);
} else
{return and__3469__auto____$1;
}
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(or__3481__auto____$1))
{return or__3481__auto____$1;
} else
{var and__3469__auto__ = book;if(cljs.core.truth_(and__3469__auto__))
{return cljs.core.not((function (){var and__3469__auto____$1 = chapter;if(cljs.core.truth_(and__3469__auto____$1))
{return verse;
} else
{return and__3469__auto____$1;
}
})());
} else
{return and__3469__auto__;
}
}
}
})();if(cljs.core.truth_(and__3469__auto__))
{return cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(maybe_verse_map));
} else
{return and__3469__auto__;
}
});
bible_plan.verse_map.__GT_comparable_verse = (function __GT_comparable_verse(p__9566){var map__9568 = p__9566;var map__9568__$1 = ((cljs.core.seq_QMARK_(map__9568))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9568):map__9568);var verse_map = map__9568__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9568__$1,cljs.core.constant$keyword$156);var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9568__$1,cljs.core.constant$keyword$157);var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9568__$1,cljs.core.constant$keyword$158);if(cljs.core.truth_(book))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"book","book",-1637501790,null)], 0)))].join('')));
}
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [book,(function (){var or__3481__auto__ = chapter;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return 0;
}
})(),(function (){var or__3481__auto__ = verse;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return 0;
}
})()], null);
});
/**
* @param {...*} var_args
*/
bible_plan.verse_map._LT_ = (function() { 
var _LT___delegate = function (p__9569,verse_maps){var map__9571 = p__9569;var map__9571__$1 = ((cljs.core.seq_QMARK_(map__9571))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9571):map__9571);var verse_map = map__9571__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9571__$1,cljs.core.constant$keyword$156);var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9571__$1,cljs.core.constant$keyword$157);var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9571__$1,cljs.core.constant$keyword$158);var verse_maps__$1 = cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map], null),verse_maps);var comparison_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$3(2,1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.__GT_comparable_verse,verse_maps__$1));return cljs.core.every_QMARK_(((function (verse_maps__$1,comparison_pairs,map__9571,map__9571__$1,verse_map,verse,chapter,book){
return (function (comparison_pair){return (0 > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,comparison_pair));
});})(verse_maps__$1,comparison_pairs,map__9571,map__9571__$1,verse_map,verse,chapter,book))
,comparison_pairs);
};
var _LT_ = function (p__9569,var_args){
var verse_maps = null;if (arguments.length > 1) {
  verse_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return _LT___delegate.call(this,p__9569,verse_maps);};
_LT_.cljs$lang$maxFixedArity = 1;
_LT_.cljs$lang$applyTo = (function (arglist__9572){
var p__9569 = cljs.core.first(arglist__9572);
var verse_maps = cljs.core.rest(arglist__9572);
return _LT___delegate(p__9569,verse_maps);
});
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___delegate;
return _LT_;
})()
;
bible_plan.verse_map.verse_map_specificity = (function verse_map_specificity(p__9573){var map__9575 = p__9573;var map__9575__$1 = ((cljs.core.seq_QMARK_(map__9575))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9575):map__9575);var verse_map = map__9575__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9575__$1,cljs.core.constant$keyword$156);var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9575__$1,cljs.core.constant$keyword$157);var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9575__$1,cljs.core.constant$keyword$158);if(cljs.core.truth_(book))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"book","book",-1637501790,null)], 0)))].join('')));
}
if(cljs.core.truth_(verse))
{return cljs.core.constant$keyword$156;
} else
{if(cljs.core.truth_(chapter))
{return cljs.core.constant$keyword$157;
} else
{if(cljs.core.truth_(book))
{return cljs.core.constant$keyword$158;
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
{var verse_map_specificities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.verse_map_specificity,verse_maps);var specificities_set = cljs.core.into(cljs.core.PersistentHashSet.EMPTY,verse_map_specificities);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (verse_map_specificities,specificities_set){
return (function (verse_map_keys){return cljs.core.filter(specificities_set,verse_map_keys);
});})(verse_map_specificities,specificities_set))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,verse_maps)));
} else
{return null;
}
};
var common_specificities = function (var_args){
var verse_maps = null;if (arguments.length > 0) {
  verse_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_specificities__delegate.call(this,verse_maps);};
common_specificities.cljs$lang$maxFixedArity = 0;
common_specificities.cljs$lang$applyTo = (function (arglist__9576){
var verse_maps = cljs.core.seq(arglist__9576);
return common_specificities__delegate(verse_maps);
});
common_specificities.cljs$core$IFn$_invoke$arity$variadic = common_specificities__delegate;
return common_specificities;
})()
;
bible_plan.verse_map.verse_map_specificities = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,cljs.core.constant$keyword$157,cljs.core.constant$keyword$156], null);
bible_plan.verse_map.specificity_weight = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$158,1,cljs.core.constant$keyword$157,2,cljs.core.constant$keyword$156,3], null);
bible_plan.verse_map.specificity_comparator_fn = (function specificity_comparator_fn(clojure_comparator_fn){return (function() { 
var G__9577__delegate = function (specificities){if(cljs.core.truth_(specificities))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure_comparator_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.specificity_weight,specificities));
} else
{return null;
}
};
var G__9577 = function (var_args){
var specificities = null;if (arguments.length > 0) {
  specificities = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9577__delegate.call(this,specificities);};
G__9577.cljs$lang$maxFixedArity = 0;
G__9577.cljs$lang$applyTo = (function (arglist__9578){
var specificities = cljs.core.seq(arglist__9578);
return G__9577__delegate(specificities);
});
G__9577.cljs$core$IFn$_invoke$arity$variadic = G__9577__delegate;
return G__9577;
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
highest_common_verse_map_specificity.cljs$lang$applyTo = (function (arglist__9579){
var verse_maps = cljs.core.seq(arglist__9579);
return highest_common_verse_map_specificity__delegate(verse_maps);
});
highest_common_verse_map_specificity.cljs$core$IFn$_invoke$arity$variadic = highest_common_verse_map_specificity__delegate;
return highest_common_verse_map_specificity;
})()
;
bible_plan.verse_map.masked__GT_ = (function masked__GT_(verse_map_1,verse_map_2){var verse_maps = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map_1,verse_map_2], null);var or__3481__auto__ = (function (){var and__3469__auto__ = cljs.core.every_QMARK_(cljs.core.constant$keyword$158,verse_maps);if(and__3469__auto__)
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$158,verse_maps));
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (function (){var and__3469__auto__ = cljs.core.every_QMARK_(cljs.core.constant$keyword$158,verse_maps);if(and__3469__auto__)
{var and__3469__auto____$1 = cljs.core.every_QMARK_(cljs.core.constant$keyword$157,verse_maps);if(and__3469__auto____$1)
{var and__3469__auto____$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$158,verse_maps));if(cljs.core.truth_(and__3469__auto____$2))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$157,verse_maps));
} else
{return and__3469__auto____$2;
}
} else
{return and__3469__auto____$1;
}
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(or__3481__auto____$1))
{return or__3481__auto____$1;
} else
{var and__3469__auto__ = cljs.core.every_QMARK_(cljs.core.constant$keyword$158,verse_maps);if(and__3469__auto__)
{var and__3469__auto____$1 = cljs.core.every_QMARK_(cljs.core.constant$keyword$157,verse_maps);if(and__3469__auto____$1)
{var and__3469__auto____$2 = cljs.core.every_QMARK_(cljs.core.constant$keyword$156,verse_maps);if(and__3469__auto____$2)
{var and__3469__auto____$3 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$158,verse_maps));if(cljs.core.truth_(and__3469__auto____$3))
{var and__3469__auto____$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$157,verse_maps));if(cljs.core.truth_(and__3469__auto____$4))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$156,verse_maps));
} else
{return and__3469__auto____$4;
}
} else
{return and__3469__auto____$3;
}
} else
{return and__3469__auto____$2;
}
} else
{return and__3469__auto____$1;
}
} else
{return and__3469__auto__;
}
}
}
});
bible_plan.verse_map.masked__EQ_ = (function masked__EQ_(verse_map_1,verse_map_2){var verse_maps = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map_1,verse_map_2], null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.common_specificities,verse_maps)),verse_maps));
});
bible_plan.verse_map.masked__GT__EQ_ = (function masked__GT__EQ_(verse_map_1,verse_map_2){var verse_maps = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verse_map_1,verse_map_2], null);var or__3481__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.masked__EQ_,verse_maps);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.masked__GT_,verse_maps);
}
});
bible_plan.verse_map.range = (function range(p__9580){var map__9582 = p__9580;var map__9582__$1 = ((cljs.core.seq_QMARK_(map__9582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9582):map__9582);var reference = map__9582__$1;var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9582__$1,cljs.core.constant$keyword$159);var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9582__$1,cljs.core.constant$keyword$160);var verse_map_range = cljs.core.drop_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.masked__GT_,start),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bible_plan.verse_map.verse_maps),cljs.core.constant$keyword$161));var verse_map_range__$1 = (cljs.core.truth_(end)?cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.masked__GT__EQ_,end),verse_map_range):cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.masked__EQ_,start),verse_map_range));return verse_map_range__$1;
});
bible_plan.verse_map.max_verse_map = (function max_verse_map(p__9583){var map__9585 = p__9583;var map__9585__$1 = ((cljs.core.seq_QMARK_(map__9585))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9585):map__9585);var reference = map__9585__$1;var start_verse_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9585__$1,cljs.core.constant$keyword$160);var end_verse_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9585__$1,cljs.core.constant$keyword$159);if(cljs.core.truth_(start_verse_map))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"start-verse-map","start-verse-map",895319762,null)], 0)))].join('')));
}
var or__3481__auto__ = end_verse_map;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return start_verse_map;
}
});
bible_plan.verse_map.min_verse_map = (function min_verse_map(p__9586){var map__9588 = p__9586;var map__9588__$1 = ((cljs.core.seq_QMARK_(map__9588))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9588):map__9588);var reference = map__9588__$1;var start_verse_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9588__$1,cljs.core.constant$keyword$160);var end_verse_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9588__$1,cljs.core.constant$keyword$159);if(cljs.core.truth_(start_verse_map))
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
bible_plan.verse_map.__GT_book_str = (function __GT_book_str(p__9589){var map__9592 = p__9589;var map__9592__$1 = ((cljs.core.seq_QMARK_(map__9592))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9592):map__9592);var verse_map = map__9592__$1;var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9592__$1,cljs.core.constant$keyword$157);var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9592__$1,cljs.core.constant$keyword$158);if(cljs.core.truth_(book))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"book","book",-1637501790,null)], 0)))].join('')));
}
var book_str = ((cljs.core.not(chapter))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bible_plan.bible.bibles),cljs.core.constant$keyword$161),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book,cljs.core.constant$keyword$162], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bible_plan.bible.bibles),cljs.core.constant$keyword$161),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [book,cljs.core.constant$keyword$163], null)));var book_str__$1 = (cljs.core.truth_(cljs.core.re_matches(/^[0-9] .+/,book_str))?(function (){var vec__9593 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(book_str,/ /,2);var number_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9593,0,null);var name_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9593,1,null);return [cljs.core.str(number_part),cljs.core.str(" "),cljs.core.str(clojure.string.capitalize(name_part))].join('');
})():clojure.string.capitalize(book_str));return book_str__$1;
});
bible_plan.verse_map.__GT_chapter_str = (function __GT_chapter_str(p__9594){var map__9596 = p__9594;var map__9596__$1 = ((cljs.core.seq_QMARK_(map__9596))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9596):map__9596);var verse_map = map__9596__$1;var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9596__$1,cljs.core.constant$keyword$157);if(cljs.core.truth_(chapter))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"chapter","chapter",-901515770,null)], 0)))].join('')));
}
return [cljs.core.str(chapter)].join('');
});
bible_plan.verse_map.__GT_verse_str = (function __GT_verse_str(p__9597){var map__9599 = p__9597;var map__9599__$1 = ((cljs.core.seq_QMARK_(map__9599))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9599):map__9599);var verse_map = map__9599__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9599__$1,cljs.core.constant$keyword$156);if(cljs.core.truth_(verse))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"verse","verse",-1528433938,null)], 0)))].join('')));
}
return [cljs.core.str(verse)].join('');
});
bible_plan.verse_map.__GT_chapter_verse_QMARK__str = (function __GT_chapter_verse_QMARK__str(p__9600){var map__9602 = p__9600;var map__9602__$1 = ((cljs.core.seq_QMARK_(map__9602))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9602):map__9602);var verse_map = map__9602__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9602__$1,cljs.core.constant$keyword$156);var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9602__$1,cljs.core.constant$keyword$157);if(cljs.core.truth_(bible_plan.verse_map.verse_map_QMARK_(verse_map)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"verse-map?","verse-map?",1808441780,null),new cljs.core.Symbol(null,"verse-map","verse-map",1241672317,null))], 0)))].join('')));
}
if(cljs.core.truth_(chapter))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"chapter","chapter",-901515770,null)], 0)))].join('')));
}
var verse_str = bible_plan.verse_map.__GT_chapter_str(verse_map);var verse_str__$1 = (cljs.core.truth_(verse)?[cljs.core.str(verse_str),cljs.core.str("."),cljs.core.str(bible_plan.verse_map.__GT_verse_str(verse_map))].join(''):verse_str);return verse_str__$1;
});
bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str = (function __GT_book_chapter_QMARK__verse_QMARK__str(p__9603){var map__9605 = p__9603;var map__9605__$1 = ((cljs.core.seq_QMARK_(map__9605))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9605):map__9605);var verse_map = map__9605__$1;var verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9605__$1,cljs.core.constant$keyword$156);var chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9605__$1,cljs.core.constant$keyword$157);var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9605__$1,cljs.core.constant$keyword$158);if(cljs.core.truth_(bible_plan.verse_map.verse_map_QMARK_(verse_map)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"verse-map?","verse-map?",1808441780,null),new cljs.core.Symbol(null,"verse-map","verse-map",1241672317,null))], 0)))].join('')));
}
if(cljs.core.truth_((function (){var or__3481__auto__ = book;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (function (){var and__3469__auto__ = book;if(cljs.core.truth_(and__3469__auto__))
{return chapter;
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(or__3481__auto____$1))
{return or__3481__auto____$1;
} else
{var and__3469__auto__ = book;if(cljs.core.truth_(and__3469__auto__))
{var and__3469__auto____$1 = chapter;if(cljs.core.truth_(and__3469__auto____$1))
{return verse;
} else
{return and__3469__auto____$1;
}
} else
{return and__3469__auto__;
}
}
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"book","book",-1637501790,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"book","book",-1637501790,null),new cljs.core.Symbol(null,"chapter","chapter",-901515770,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"book","book",-1637501790,null),new cljs.core.Symbol(null,"chapter","chapter",-901515770,null),new cljs.core.Symbol(null,"verse","verse",-1528433938,null)))], 0)))].join('')));
}
var verse_str = bible_plan.verse_map.__GT_book_str(verse_map);var verse_str__$1 = (cljs.core.truth_(chapter)?[cljs.core.str(verse_str),cljs.core.str(". "),cljs.core.str(bible_plan.verse_map.__GT_chapter_str(verse_map))].join(''):verse_str);var verse_str__$2 = (cljs.core.truth_(verse)?[cljs.core.str(verse_str__$1),cljs.core.str("."),cljs.core.str(bible_plan.verse_map.__GT_verse_str(verse_map))].join(''):verse_str__$1);return verse_str__$2;
});
bible_plan.verse_map.__GT_str_fn = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,cljs.core.constant$keyword$157,cljs.core.constant$keyword$156], null),bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,cljs.core.constant$keyword$156], null),bible_plan.verse_map.__GT_chapter_verse_QMARK__str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156], null),bible_plan.verse_map.__GT_verse_str], true, false);
