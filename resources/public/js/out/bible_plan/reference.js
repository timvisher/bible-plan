// Compiled by ClojureScript 0.0-2075
goog.provide('bible_plan.reference');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('bible_plan.verse_map');
goog.require('bible_plan.verse_map');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('shodan.console');
goog.require('shodan.console');
bible_plan.reference.__GT_verse_maps = (function __GT_verse_maps(reference){var map__13141 = reference;var map__13141__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13141))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13141):map__13141);var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13141__$1,cljs.core.constant$keyword$144);var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13141__$1,cljs.core.constant$keyword$145);var verse_maps = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);var verse_maps__$1 = (cljs.core.truth_(end)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(verse_maps,end):verse_maps);return verse_maps__$1;
});
/**
* @param {...*} var_args
*/
bible_plan.reference.reference_LT_ = (function() { 
var reference_LT___delegate = function (reference,references){if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reference,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$146], null))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",1405049013,null),new cljs.core.Symbol(null,"reference","reference",1729280260,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$146], null))], 0)))].join('')));
}
if(cljs.core.truth_(cljs.core.every_QMARK_((function (p1__13142_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__13142_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$146], null));
}),references)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__13142#","p1__13142#",1677004560,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",1405049013,null),new cljs.core.Symbol(null,"p1__13142#","p1__13142#",1677004560,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$146], null))),new cljs.core.Symbol(null,"references","references",-255581119,null))], 0)))].join('')));
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map._LT_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.reference.__GT_verse_maps,cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reference], null),references))));
};
var reference_LT_ = function (reference,var_args){
var references = null;if (arguments.length > 1) {
  references = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reference_LT___delegate.call(this,reference,references);};
reference_LT_.cljs$lang$maxFixedArity = 1;
reference_LT_.cljs$lang$applyTo = (function (arglist__13143){
var reference = cljs.core.first(arglist__13143);
var references = cljs.core.rest(arglist__13143);
return reference_LT___delegate(reference,references);
});
reference_LT_.cljs$core$IFn$_invoke$arity$variadic = reference_LT___delegate;
return reference_LT_;
})()
;
bible_plan.reference.reference_QMARK_ = (function reference_QMARK_(p__13144){var map__13146 = p__13144;var map__13146__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13146))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13146):map__13146);var reference = map__13146__$1;var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13146__$1,cljs.core.constant$keyword$144);var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13146__$1,cljs.core.constant$keyword$145);var and__3279__auto__ = (bible_plan.verse_map.verse_map_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bible_plan.verse_map.verse_map_QMARK_.cljs$core$IFn$_invoke$arity$1(start) : bible_plan.verse_map.verse_map_QMARK_.call(null,start));if(cljs.core.truth_(and__3279__auto__))
{if(cljs.core.truth_(end))
{var and__3279__auto____$1 = (bible_plan.verse_map.verse_map_QMARK_.cljs$core$IFn$_invoke$arity$1 ? bible_plan.verse_map.verse_map_QMARK_.cljs$core$IFn$_invoke$arity$1(end) : bible_plan.verse_map.verse_map_QMARK_.call(null,end));if(cljs.core.truth_(and__3279__auto____$1))
{return (bible_plan.verse_map._LT_.cljs$core$IFn$_invoke$arity$2 ? bible_plan.verse_map._LT_.cljs$core$IFn$_invoke$arity$2(start,end) : bible_plan.verse_map._LT_.call(null,start,end));
} else
{return and__3279__auto____$1;
}
} else
{return true;
}
} else
{return and__3279__auto__;
}
});
bible_plan.reference.single__GT_str = (function single__GT_str(p__13147){var map__13149 = p__13147;var map__13149__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13149))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13149):map__13149);var reference = map__13149__$1;var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13149__$1,cljs.core.constant$keyword$145);if(cljs.core.truth_(bible_plan.reference.reference_QMARK_(reference)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"reference?","reference?",-255581171,null),new cljs.core.Symbol(null,"reference","reference",1729280260,null))], 0)))].join('')));
}
return (bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str.cljs$core$IFn$_invoke$arity$1 ? bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str.cljs$core$IFn$_invoke$arity$1(start) : bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str.call(null,start));
});
bible_plan.reference.compound__GT_str = (function compound__GT_str(p__13150){var map__13154 = p__13150;var map__13154__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13154))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13154):map__13154);var reference = map__13154__$1;var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13154__$1,cljs.core.constant$keyword$144);var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13154__$1,cljs.core.constant$keyword$145);if(cljs.core.truth_(bible_plan.reference.reference_QMARK_(reference)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"reference?","reference?",-255581171,null),new cljs.core.Symbol(null,"reference","reference",1729280260,null))], 0)))].join('')));
}
if(cljs.core.truth_(end))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"end","end",-1640430956,null)], 0)))].join('')));
}
var map__13155 = start;var map__13155__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13155))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13155):map__13155);var start_verse_map = map__13155__$1;var s_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13155__$1,cljs.core.constant$keyword$146);var s_chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13155__$1,cljs.core.constant$keyword$147);var s_verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13155__$1,cljs.core.constant$keyword$148);var map__13156 = end;var map__13156__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13156))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13156):map__13156);var end_verse_map = map__13156__$1;var e_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,cljs.core.constant$keyword$146);var e_chapter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,cljs.core.constant$keyword$147);var e_verse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,cljs.core.constant$keyword$148);var verse_string = [cljs.core.str((bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str.cljs$core$IFn$_invoke$arity$1 ? bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str.cljs$core$IFn$_invoke$arity$1(start_verse_map) : bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str.call(null,start_verse_map))),cljs.core.str("-")].join('');var lowest_unequal_specificity = (bible_plan.verse_map.lowest_unequal_specificity.cljs$core$IFn$_invoke$arity$2 ? bible_plan.verse_map.lowest_unequal_specificity.cljs$core$IFn$_invoke$arity$2(end_verse_map,start_verse_map) : bible_plan.verse_map.lowest_unequal_specificity.call(null,end_verse_map,start_verse_map));var shown_specificities = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_while(((function (verse_string,lowest_unequal_specificity){
return (function (specificity){return (bible_plan.verse_map.specificity_LT_.cljs$core$IFn$_invoke$arity$2 ? bible_plan.verse_map.specificity_LT_.cljs$core$IFn$_invoke$arity$2(specificity,lowest_unequal_specificity) : bible_plan.verse_map.specificity_LT_.call(null,specificity,lowest_unequal_specificity));
});})(verse_string,lowest_unequal_specificity))
,bible_plan.verse_map.verse_map_specificities));return [cljs.core.str(verse_string),cljs.core.str((bible_plan.verse_map.__GT_str_fn.cljs$core$IFn$_invoke$arity$1 ? bible_plan.verse_map.__GT_str_fn.cljs$core$IFn$_invoke$arity$1(shown_specificities) : bible_plan.verse_map.__GT_str_fn.call(null,shown_specificities)).call(null,end_verse_map))].join('');
});
bible_plan.reference.__GT_str = (function __GT_str(p__13157){var map__13159 = p__13157;var map__13159__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13159))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13159):map__13159);var reference = map__13159__$1;var start_verse_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13159__$1,cljs.core.constant$keyword$145);var end_verse_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13159__$1,cljs.core.constant$keyword$144);if(cljs.core.truth_(bible_plan.reference.reference_QMARK_(reference)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"reference?","reference?",-255581171,null),new cljs.core.Symbol(null,"reference","reference",1729280260,null))], 0)))].join('')));
}
bible_plan.reference._STAR_whee_STAR_ = cljs.core.constant$keyword$149;
if(cljs.core.truth_((function (){var and__3279__auto__ = start_verse_map;if(cljs.core.truth_(and__3279__auto__))
{return end_verse_map;
} else
{return and__3279__auto__;
}
})()))
{return bible_plan.reference.compound__GT_str(reference);
} else
{return bible_plan.reference.single__GT_str(reference);
}
});
/**
* @param {...*} var_args
*/
bible_plan.reference.contiguous_ascending_ints_QMARK_ = (function() { 
var contiguous_ascending_ints_QMARK___delegate = function (int_1,ints){if(typeof int_1 === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"int-1","int-1",-1540171892,null))], 0)))].join('')));
}
if(cljs.core.truth_(cljs.core.every_QMARK_(cljs.core.number_QMARK_,ints)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"ints","ints",-1637294051,null))], 0)))].join('')));
}
var G__13165 = cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [int_1], null),ints);var vec__13166 = G__13165;var this_int = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13166,0,null);var next_ints = cljs.core.nthnext(vec__13166,1);var G__13165__$1 = G__13165;while(true){
var vec__13167 = G__13165__$1;var this_int__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13167,0,null);var next_ints__$1 = cljs.core.nthnext(vec__13167,1);if(cljs.core.not(cljs.core.first(next_ints__$1)))
{return true;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1 + this_int__$1),cljs.core.first(next_ints__$1)))
{{
var G__13168 = next_ints__$1;
G__13165__$1 = G__13168;
continue;
}
} else
{return false;
}
}
break;
}
};
var contiguous_ascending_ints_QMARK_ = function (int_1,var_args){
var ints = null;if (arguments.length > 1) {
  ints = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return contiguous_ascending_ints_QMARK___delegate.call(this,int_1,ints);};
contiguous_ascending_ints_QMARK_.cljs$lang$maxFixedArity = 1;
contiguous_ascending_ints_QMARK_.cljs$lang$applyTo = (function (arglist__13169){
var int_1 = cljs.core.first(arglist__13169);
var ints = cljs.core.rest(arglist__13169);
return contiguous_ascending_ints_QMARK___delegate(int_1,ints);
});
contiguous_ascending_ints_QMARK_.cljs$core$IFn$_invoke$arity$variadic = contiguous_ascending_ints_QMARK___delegate;
return contiguous_ascending_ints_QMARK_;
})()
;
bible_plan.reference.join_points = (function join_points(references){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (start_segments,reference_part){if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reference_part,cljs.core.constant$keyword$144)))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(start_segments,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(reference_part,cljs.core.constant$keyword$144)], null));
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(start_segments,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(start_segments) - 1)], null),cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$2(reference_part,cljs.core.constant$keyword$145));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (start_and_ends,reference){if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reference,cljs.core.constant$keyword$144)))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(start_and_ends,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,cljs.core.get.cljs$core$IFn$_invoke$arity$2(reference,cljs.core.constant$keyword$145)], null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$144,cljs.core.get.cljs$core$IFn$_invoke$arity$2(reference,cljs.core.constant$keyword$144)], null));
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(start_and_ends,reference);
}
}),cljs.core.PersistentVector.EMPTY,references));
});
/**
* @param {...*} var_args
*/
bible_plan.reference.contiguous_QMARK_ = (function() { 
var contiguous_QMARK___delegate = function (references){if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bible_plan.reference.reference_LT_,references)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"reference<","reference<",-255581174,null),new cljs.core.Symbol(null,"references","references",-255581119,null))], 0)))].join('')));
}
if(cljs.core.truth_(references))
{var join_points = bible_plan.reference.join_points(references);var and__3279__auto__ = cljs.core.every_QMARK_((function (join_point){var specificity = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.highest_common_verse_map_specificity,join_point);return (bible_plan.verse_map.lower_specificities_equal_QMARK_.cljs$core$IFn$_invoke$arity$2 ? bible_plan.verse_map.lower_specificities_equal_QMARK_.cljs$core$IFn$_invoke$arity$2(specificity,join_point) : bible_plan.verse_map.lower_specificities_equal_QMARK_.call(null,specificity,join_point));
}),join_points);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.every_QMARK_((function (join_point){var specificity = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map.highest_common_verse_map_specificity,join_point);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bible_plan.reference.contiguous_ascending_ints_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(specificity,join_point));
}),join_points);
} else
{return and__3279__auto__;
}
} else
{return null;
}
};
var contiguous_QMARK_ = function (var_args){
var references = null;if (arguments.length > 0) {
  references = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return contiguous_QMARK___delegate.call(this,references);};
contiguous_QMARK_.cljs$lang$maxFixedArity = 0;
contiguous_QMARK_.cljs$lang$applyTo = (function (arglist__13170){
var references = cljs.core.seq(arglist__13170);
return contiguous_QMARK___delegate(references);
});
contiguous_QMARK_.cljs$core$IFn$_invoke$arity$variadic = contiguous_QMARK___delegate;
return contiguous_QMARK_;
})()
;
bible_plan.reference.reference_verse_map_range = (function reference_verse_map_range(p__13171){var map__13173 = p__13171;var map__13173__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13173))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13173):map__13173);var reference = map__13173__$1;var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13173__$1,cljs.core.constant$keyword$144);var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13173__$1,cljs.core.constant$keyword$145);if(cljs.core.truth_(bible_plan.reference.reference_QMARK_(reference)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"reference?","reference?",-255581171,null),new cljs.core.Symbol(null,"reference","reference",1729280260,null))], 0)))].join('')));
}
if(cljs.core.truth_(end))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"end","end",-1640430956,null)], 0)))].join('')));
}
return (bible_plan.verse_map.verse_map_range.cljs$core$IFn$_invoke$arity$2 ? bible_plan.verse_map.verse_map_range.cljs$core$IFn$_invoke$arity$2(start,end) : bible_plan.verse_map.verse_map_range.call(null,start,end));
});
bible_plan.reference.overlapping_QMARK_ = (function overlapping_QMARK_(reference_1,reference_2){var reference_1_range = bible_plan.reference.reference_verse_map_range(reference_1);var reference_2_range = bible_plan.reference.reference_verse_map_range(reference_2);return !(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.into(cljs.core.PersistentHashSet.EMPTY,reference_1_range),cljs.core.into(cljs.core.PersistentHashSet.EMPTY,reference_2_range))));
});
bible_plan.reference.none_overlap_QMARK_ = (function none_overlap_QMARK_(references,reference){return cljs.core.some((function (other_reference){return bible_plan.reference.overlapping_QMARK_(other_reference,reference);
}),references);
});
/**
* @param {...*} var_args
*/
bible_plan.reference.disjoint_refs_QMARK_ = (function() { 
var disjoint_refs_QMARK___delegate = function (references){if(cljs.core.truth_(references))
{return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.reference.none_overlap_QMARK_,references),references);
} else
{return null;
}
};
var disjoint_refs_QMARK_ = function (var_args){
var references = null;if (arguments.length > 0) {
  references = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return disjoint_refs_QMARK___delegate.call(this,references);};
disjoint_refs_QMARK_.cljs$lang$maxFixedArity = 0;
disjoint_refs_QMARK_.cljs$lang$applyTo = (function (arglist__13174){
var references = cljs.core.seq(arglist__13174);
return disjoint_refs_QMARK___delegate(references);
});
disjoint_refs_QMARK_.cljs$core$IFn$_invoke$arity$variadic = disjoint_refs_QMARK___delegate;
return disjoint_refs_QMARK_;
})()
;
bible_plan.reference.merge_refs = (function merge_refs(start_ref,end_ref){if(cljs.core.truth_(bible_plan.reference.reference_LT_.cljs$core$IFn$_invoke$arity$variadic(start_ref,cljs.core.array_seq([end_ref], 0))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"reference<","reference<",-255581174,null),new cljs.core.Symbol(null,"start-ref","start-ref",523987553,null),new cljs.core.Symbol(null,"end-ref","end-ref",1046039130,null))], 0)))].join('')));
}
if(cljs.core.truth_(bible_plan.reference.contiguous_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([start_ref,end_ref], 0))))
{var sorted_verse_maps = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(bible_plan.verse_map._LT_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.reference.__GT_verse_maps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_ref,end_ref], null))));return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$145,cljs.core.first(sorted_verse_maps),cljs.core.constant$keyword$144,cljs.core.last(sorted_verse_maps)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_ref,end_ref], null);
}
});
