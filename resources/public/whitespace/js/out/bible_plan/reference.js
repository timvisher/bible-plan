// Compiled by ClojureScript 0.0-2138
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
bible_plan.reference.__GT_verse_maps = (function __GT_verse_maps(reference){var map__5767 = reference;var map__5767__$1 = ((cljs.core.seq_QMARK_.call(null,map__5767))?cljs.core.apply.call(null,cljs.core.hash_map,map__5767):map__5767);var end = cljs.core.get.call(null,map__5767__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__5767__$1,new cljs.core.Keyword(null,"start","start",1123661780));var verse_maps = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);var verse_maps__$1 = (cljs.core.truth_(end)?cljs.core.conj.call(null,verse_maps,end):verse_maps);return verse_maps__$1;
});
/**
* @param {...*} var_args
*/
bible_plan.reference._LT_ = (function() { 
var _LT___delegate = function (reference,references){if(cljs.core.truth_(cljs.core.get_in.call(null,reference,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"book","book",1016933979)], null))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",1405049013,null),new cljs.core.Symbol(null,"reference","reference",1729280260,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"book","book",1016933979)], null))))].join('')));
}
if(cljs.core.every_QMARK_.call(null,(function (p1__5768_SHARP_){return cljs.core.get_in.call(null,p1__5768_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"book","book",1016933979)], null));
}),references))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__5768#","p1__5768#",-1529696073,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",1405049013,null),new cljs.core.Symbol(null,"p1__5768#","p1__5768#",-1529696073,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"book","book",1016933979)], null))),new cljs.core.Symbol(null,"references","references",-255581119,null))))].join('')));
}
return cljs.core.apply.call(null,bible_plan.verse_map._LT_,cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,bible_plan.reference.__GT_verse_maps,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reference], null),references))));
};
var _LT_ = function (reference,var_args){
var references = null;if (arguments.length > 1) {
  references = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return _LT___delegate.call(this,reference,references);};
_LT_.cljs$lang$maxFixedArity = 1;
_LT_.cljs$lang$applyTo = (function (arglist__5769){
var reference = cljs.core.first(arglist__5769);
var references = cljs.core.rest(arglist__5769);
return _LT___delegate(reference,references);
});
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___delegate;
return _LT_;
})()
;
bible_plan.reference.reference_QMARK_ = (function reference_QMARK_(p__5770){var map__5772 = p__5770;var map__5772__$1 = ((cljs.core.seq_QMARK_.call(null,map__5772))?cljs.core.apply.call(null,cljs.core.hash_map,map__5772):map__5772);var reference = map__5772__$1;var end = cljs.core.get.call(null,map__5772__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__5772__$1,new cljs.core.Keyword(null,"start","start",1123661780));var and__3396__auto__ = bible_plan.verse_map.verse_map_QMARK_.call(null,start);if(cljs.core.truth_(and__3396__auto__))
{if(cljs.core.truth_(end))
{var and__3396__auto____$1 = bible_plan.verse_map.verse_map_QMARK_.call(null,end);if(cljs.core.truth_(and__3396__auto____$1))
{return bible_plan.verse_map._LT_.call(null,start,end);
} else
{return and__3396__auto____$1;
}
} else
{return true;
}
} else
{return and__3396__auto__;
}
});
bible_plan.reference.single__GT_str = (function single__GT_str(p__5773){var map__5775 = p__5773;var map__5775__$1 = ((cljs.core.seq_QMARK_.call(null,map__5775))?cljs.core.apply.call(null,cljs.core.hash_map,map__5775):map__5775);var reference = map__5775__$1;var start = cljs.core.get.call(null,map__5775__$1,new cljs.core.Keyword(null,"start","start",1123661780));if(cljs.core.truth_(bible_plan.reference.reference_QMARK_.call(null,reference)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reference?","reference?",-255581171,null),new cljs.core.Symbol(null,"reference","reference",1729280260,null))))].join('')));
}
return bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str.call(null,start);
});
bible_plan.reference.compound__GT_str = (function compound__GT_str(p__5776){var map__5780 = p__5776;var map__5780__$1 = ((cljs.core.seq_QMARK_.call(null,map__5780))?cljs.core.apply.call(null,cljs.core.hash_map,map__5780):map__5780);var reference = map__5780__$1;var end = cljs.core.get.call(null,map__5780__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__5780__$1,new cljs.core.Keyword(null,"start","start",1123661780));if(cljs.core.truth_(bible_plan.reference.reference_QMARK_.call(null,reference)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reference?","reference?",-255581171,null),new cljs.core.Symbol(null,"reference","reference",1729280260,null))))].join('')));
}
if(cljs.core.truth_(end))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"end","end",-1640430956,null)))].join('')));
}
var map__5781 = start;var map__5781__$1 = ((cljs.core.seq_QMARK_.call(null,map__5781))?cljs.core.apply.call(null,cljs.core.hash_map,map__5781):map__5781);var start_verse_map = map__5781__$1;var s_book = cljs.core.get.call(null,map__5781__$1,new cljs.core.Keyword(null,"book","book",1016933979));var s_chapter = cljs.core.get.call(null,map__5781__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var s_verse = cljs.core.get.call(null,map__5781__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var map__5782 = end;var map__5782__$1 = ((cljs.core.seq_QMARK_.call(null,map__5782))?cljs.core.apply.call(null,cljs.core.hash_map,map__5782):map__5782);var end_verse_map = map__5782__$1;var e_book = cljs.core.get.call(null,map__5782__$1,new cljs.core.Keyword(null,"book","book",1016933979));var e_chapter = cljs.core.get.call(null,map__5782__$1,new cljs.core.Keyword(null,"chapter","chapter",1752919999));var e_verse = cljs.core.get.call(null,map__5782__$1,new cljs.core.Keyword(null,"verse","verse",1126001831));var verse_string = [cljs.core.str(bible_plan.verse_map.__GT_book_chapter_QMARK__verse_QMARK__str.call(null,start_verse_map)),cljs.core.str("-")].join('');var lowest_unequal_specificity = bible_plan.verse_map.lowest_unequal_specificity.call(null,end_verse_map,start_verse_map);var shown_specificities = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.drop_while.call(null,((function (verse_string,lowest_unequal_specificity){
return (function (specificity){return bible_plan.verse_map.specificity_LT_.call(null,specificity,lowest_unequal_specificity);
});})(verse_string,lowest_unequal_specificity))
,bible_plan.verse_map.verse_map_specificities));return [cljs.core.str(verse_string),cljs.core.str(bible_plan.verse_map.__GT_str_fn.call(null,shown_specificities).call(null,end_verse_map))].join('');
});
bible_plan.reference.__GT_str = (function __GT_str(p__5783){var map__5785 = p__5783;var map__5785__$1 = ((cljs.core.seq_QMARK_.call(null,map__5785))?cljs.core.apply.call(null,cljs.core.hash_map,map__5785):map__5785);var reference = map__5785__$1;var start_verse_map = cljs.core.get.call(null,map__5785__$1,new cljs.core.Keyword(null,"start","start",1123661780));var end_verse_map = cljs.core.get.call(null,map__5785__$1,new cljs.core.Keyword(null,"end","end",1014004813));if(cljs.core.truth_(bible_plan.reference.reference_QMARK_.call(null,reference)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reference?","reference?",-255581171,null),new cljs.core.Symbol(null,"reference","reference",1729280260,null))))].join('')));
}
bible_plan.reference._STAR_whee_STAR_ = new cljs.core.Keyword(null,"whee","whee",1017552547);
if(cljs.core.truth_((function (){var and__3396__auto__ = start_verse_map;if(cljs.core.truth_(and__3396__auto__))
{return end_verse_map;
} else
{return and__3396__auto__;
}
})()))
{return bible_plan.reference.compound__GT_str.call(null,reference);
} else
{return bible_plan.reference.single__GT_str.call(null,reference);
}
});
/**
* @param {...*} var_args
*/
bible_plan.reference.contiguous_ascending_ints_QMARK_ = (function() { 
var contiguous_ascending_ints_QMARK___delegate = function (int_1,ints){if(typeof int_1 === 'number')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"int-1","int-1",-1540171892,null))))].join('')));
}
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,ints))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"ints","ints",-1637294051,null))))].join('')));
}
var G__5791 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [int_1], null),ints);var vec__5792 = G__5791;var this_int = cljs.core.nth.call(null,vec__5792,0,null);var next_ints = cljs.core.nthnext.call(null,vec__5792,1);var G__5791__$1 = G__5791;while(true){
var vec__5793 = G__5791__$1;var this_int__$1 = cljs.core.nth.call(null,vec__5793,0,null);var next_ints__$1 = cljs.core.nthnext.call(null,vec__5793,1);if(cljs.core.not.call(null,cljs.core.first.call(null,next_ints__$1)))
{return true;
} else
{if(cljs.core._EQ_.call(null,(1 + this_int__$1),cljs.core.first.call(null,next_ints__$1)))
{{
var G__5794 = next_ints__$1;
G__5791__$1 = G__5794;
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
contiguous_ascending_ints_QMARK_.cljs$lang$applyTo = (function (arglist__5795){
var int_1 = cljs.core.first(arglist__5795);
var ints = cljs.core.rest(arglist__5795);
return contiguous_ascending_ints_QMARK___delegate(int_1,ints);
});
contiguous_ascending_ints_QMARK_.cljs$core$IFn$_invoke$arity$variadic = contiguous_ascending_ints_QMARK___delegate;
return contiguous_ascending_ints_QMARK_;
})()
;
bible_plan.reference.join_points = (function join_points(references){return cljs.core.reduce.call(null,(function (start_segments,reference_part){if(cljs.core.truth_(cljs.core.get.call(null,reference_part,new cljs.core.Keyword(null,"end","end",1014004813))))
{return cljs.core.conj.call(null,start_segments,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,reference_part,new cljs.core.Keyword(null,"end","end",1014004813))], null));
} else
{return cljs.core.update_in.call(null,start_segments,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,start_segments) - 1)], null),cljs.core.conj,cljs.core.get.call(null,reference_part,new cljs.core.Keyword(null,"start","start",1123661780)));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),cljs.core.reduce.call(null,(function (start_and_ends,reference){if(cljs.core.truth_(cljs.core.get.call(null,reference,new cljs.core.Keyword(null,"end","end",1014004813))))
{return cljs.core.conj.call(null,cljs.core.conj.call(null,start_and_ends,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",1123661780),cljs.core.get.call(null,reference,new cljs.core.Keyword(null,"start","start",1123661780))], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.get.call(null,reference,new cljs.core.Keyword(null,"end","end",1014004813))], null));
} else
{return cljs.core.conj.call(null,start_and_ends,reference);
}
}),cljs.core.PersistentVector.EMPTY,references));
});
/**
* @param {...*} var_args
*/
bible_plan.reference.contiguous_QMARK_ = (function() { 
var contiguous_QMARK___delegate = function (references){if(cljs.core.truth_(cljs.core.apply.call(null,bible_plan.reference._LT_,references)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1547502297,null),new cljs.core.Symbol(null,"<","<",-1640531467,null),new cljs.core.Symbol(null,"references","references",-255581119,null))))].join('')));
}
if(cljs.core.truth_(references))
{var join_points = bible_plan.reference.join_points.call(null,references);return (cljs.core.every_QMARK_.call(null,(function (join_point){var specificity = cljs.core.apply.call(null,bible_plan.verse_map.highest_common_verse_map_specificity,join_point);return bible_plan.verse_map.lower_specificities_equal_QMARK_.call(null,specificity,join_point);
}),join_points)) && (cljs.core.every_QMARK_.call(null,(function (join_point){var specificity = cljs.core.apply.call(null,bible_plan.verse_map.highest_common_verse_map_specificity,join_point);return cljs.core.apply.call(null,bible_plan.reference.contiguous_ascending_ints_QMARK_,cljs.core.map.call(null,specificity,join_point));
}),join_points));
} else
{return null;
}
};
var contiguous_QMARK_ = function (var_args){
var references = null;if (arguments.length > 0) {
  references = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return contiguous_QMARK___delegate.call(this,references);};
contiguous_QMARK_.cljs$lang$maxFixedArity = 0;
contiguous_QMARK_.cljs$lang$applyTo = (function (arglist__5796){
var references = cljs.core.seq(arglist__5796);
return contiguous_QMARK___delegate(references);
});
contiguous_QMARK_.cljs$core$IFn$_invoke$arity$variadic = contiguous_QMARK___delegate;
return contiguous_QMARK_;
})()
;
bible_plan.reference.reference_verse_map_range = (function reference_verse_map_range(p__5797){var map__5799 = p__5797;var map__5799__$1 = ((cljs.core.seq_QMARK_.call(null,map__5799))?cljs.core.apply.call(null,cljs.core.hash_map,map__5799):map__5799);var reference = map__5799__$1;var end = cljs.core.get.call(null,map__5799__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__5799__$1,new cljs.core.Keyword(null,"start","start",1123661780));if(cljs.core.truth_(bible_plan.reference.reference_QMARK_.call(null,reference)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reference?","reference?",-255581171,null),new cljs.core.Symbol(null,"reference","reference",1729280260,null))))].join('')));
}
if(cljs.core.truth_(end))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"end","end",-1640430956,null)))].join('')));
}
return bible_plan.verse_map.verse_map_range.call(null,start,end);
});
bible_plan.reference.overlapping_QMARK_ = (function overlapping_QMARK_(reference_1,reference_2){var reference_1_range = bible_plan.reference.reference_verse_map_range.call(null,reference_1);var reference_2_range = bible_plan.reference.reference_verse_map_range.call(null,reference_2);return !(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,reference_1_range),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,reference_2_range))));
});
bible_plan.reference.none_overlap_QMARK_ = (function none_overlap_QMARK_(references,reference){return cljs.core.some.call(null,(function (other_reference){return bible_plan.reference.overlapping_QMARK_.call(null,other_reference,reference);
}),references);
});
/**
* @param {...*} var_args
*/
bible_plan.reference.disjoint_refs_QMARK_ = (function() { 
var disjoint_refs_QMARK___delegate = function (references){if(cljs.core.truth_(references))
{return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,bible_plan.reference.none_overlap_QMARK_,references),references);
} else
{return null;
}
};
var disjoint_refs_QMARK_ = function (var_args){
var references = null;if (arguments.length > 0) {
  references = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return disjoint_refs_QMARK___delegate.call(this,references);};
disjoint_refs_QMARK_.cljs$lang$maxFixedArity = 0;
disjoint_refs_QMARK_.cljs$lang$applyTo = (function (arglist__5800){
var references = cljs.core.seq(arglist__5800);
return disjoint_refs_QMARK___delegate(references);
});
disjoint_refs_QMARK_.cljs$core$IFn$_invoke$arity$variadic = disjoint_refs_QMARK___delegate;
return disjoint_refs_QMARK_;
})()
;
bible_plan.reference.merge_refs = (function merge_refs(start_ref,end_ref){if(cljs.core.truth_(bible_plan.reference._LT_.call(null,start_ref,end_ref)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),new cljs.core.Symbol(null,"start-ref","start-ref",523987553,null),new cljs.core.Symbol(null,"end-ref","end-ref",1046039130,null))))].join('')));
}
if(cljs.core.truth_(bible_plan.reference.contiguous_QMARK_.call(null,start_ref,end_ref)))
{var sorted_verse_maps = cljs.core.sort.call(null,bible_plan.verse_map._LT_,cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,bible_plan.reference.__GT_verse_maps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_ref,end_ref], null))));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),cljs.core.first.call(null,sorted_verse_maps),new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.last.call(null,sorted_verse_maps)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_ref,end_ref], null);
}
});
