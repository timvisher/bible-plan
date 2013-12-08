// Compiled by ClojureScript 0.0-2075
goog.provide('bible_plan.plan');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('clj_time.core');
goog.require('clj_time.core');
goog.require('clj_time.periodic');
goog.require('bible_plan.reference');
goog.require('ajax.core');
goog.require('bible_plan.reference');
goog.require('shodan.console');
goog.require('shodan.console');
goog.require('clj_time.periodic');
bible_plan.plan.plans = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
bible_plan.plan.assoc_plan = (function assoc_plan(name,plan_data){return cljs.core.swap_BANG_.call(null,bible_plan.plan.plans,cljs.core.assoc,name,plan_data);
});
bible_plan.plan.load_plans = (function load_plans(){return ajax.core.ajax_request.call(null,"/edn/plans/plans.edn",new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function load_available_plans(p__21794){var vec__21804 = p__21794;var ok = cljs.core.nth.call(null,vec__21804,0,null);var plan_names = cljs.core.nth.call(null,vec__21804,1,null);if(cljs.core.truth_(ok))
{var seq__21805 = cljs.core.seq.call(null,plan_names);var chunk__21806 = null;var count__21807 = 0;var i__21808 = 0;while(true){
if((i__21808 < count__21807))
{var plan_name = cljs.core._nth.call(null,chunk__21806,i__21808);shodan.console.log.call(null,[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name.call(null,plan_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__21805,chunk__21806,count__21807,i__21808,plan_name){
return (function (p__21809){var vec__21810 = p__21809;var ok__$1 = cljs.core.nth.call(null,vec__21810,0,null);var plan_data = cljs.core.nth.call(null,vec__21810,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan.call(null,plan_name,plan_data);
} else
{return null;
}
});})(seq__21805,chunk__21806,count__21807,i__21808,plan_name))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__21813 = seq__21805;
var G__21814 = chunk__21806;
var G__21815 = count__21807;
var G__21816 = (i__21808 + 1);
seq__21805 = G__21813;
chunk__21806 = G__21814;
count__21807 = G__21815;
i__21808 = G__21816;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21805);if(cljs.core.truth_(temp__4092__auto__))
{var seq__21805__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21805__$1))
{var c__4010__auto__ = cljs.core.chunk_first.call(null,seq__21805__$1);{
var G__21817 = cljs.core.chunk_rest.call(null,seq__21805__$1);
var G__21818 = c__4010__auto__;
var G__21819 = cljs.core.count.call(null,c__4010__auto__);
var G__21820 = 0;
seq__21805 = G__21817;
chunk__21806 = G__21818;
count__21807 = G__21819;
i__21808 = G__21820;
continue;
}
} else
{var plan_name = cljs.core.first.call(null,seq__21805__$1);shodan.console.log.call(null,[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name.call(null,plan_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__21805,chunk__21806,count__21807,i__21808,plan_name,seq__21805__$1,temp__4092__auto__){
return (function (p__21811){var vec__21812 = p__21811;var ok__$1 = cljs.core.nth.call(null,vec__21812,0,null);var plan_data = cljs.core.nth.call(null,vec__21812,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan.call(null,plan_name,plan_data);
} else
{return null;
}
});})(seq__21805,chunk__21806,count__21807,i__21808,plan_name,seq__21805__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__21821 = cljs.core.next.call(null,seq__21805__$1);
var G__21822 = null;
var G__21823 = 0;
var G__21824 = 0;
seq__21805 = G__21821;
chunk__21806 = G__21822;
count__21807 = G__21823;
i__21808 = G__21824;
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
bible_plan.plan.load_plans.call(null);
bible_plan.plan.annotate_plan_readings_with_days = (function annotate_plan_readings_with_days(plan){return cljs.core.map.call(null,(function (day_number,readings){return cljs.core.map.call(null,(function (reading){return cljs.core.assoc.call(null,reading,new cljs.core.Keyword(null,"day","day",1014003470),day_number);
}),readings);
}),cljs.core.range.call(null),plan);
});
bible_plan.plan.reading_day__GT_ = (function reading_day__GT_(annotated_reading,annotated_reading_day){var reading_day_day_number = cljs.core.comp.call(null,new cljs.core.Keyword(null,"day","day",1014003470),cljs.core.first).call(null,annotated_reading_day);var reading_day_number = cljs.core.get.call(null,annotated_reading,new cljs.core.Keyword(null,"day","day",1014003470));return (reading_day_number > reading_day_day_number);
});
bible_plan.plan.reading_book_QMARK_ = (function reading_book_QMARK_(book,reading_day){return cljs.core.some.call(null,(function start_or_end_in_book_QMARK_(p__21832){var map__21836 = p__21832;var map__21836__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__21836))?cljs.core.apply.call(null,cljs.core.hash_map,map__21836):map__21836);var map__21837 = cljs.core.get.call(null,map__21836__$1,new cljs.core.Keyword(null,"start","start",1123661780));var map__21837__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__21837))?cljs.core.apply.call(null,cljs.core.hash_map,map__21837):map__21837);var s_book = cljs.core.get.call(null,map__21837__$1,new cljs.core.Keyword(null,"book","book",1016933979));var map__21838 = cljs.core.get.call(null,map__21836__$1,new cljs.core.Keyword(null,"end","end",1014004813));var map__21838__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__21838))?cljs.core.apply.call(null,cljs.core.hash_map,map__21838):map__21838);var e_book = cljs.core.get.call(null,map__21838__$1,new cljs.core.Keyword(null,"book","book",1016933979));return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null));
}),reading_day);
});
bible_plan.plan.readings_for_book_in_reading_day = (function readings_for_book_in_reading_day(book,reading_day){return cljs.core.some.call(null,(function start_or_end_in_book_QMARK_(p__21846){var map__21850 = p__21846;var map__21850__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__21850))?cljs.core.apply.call(null,cljs.core.hash_map,map__21850):map__21850);var reading = map__21850__$1;var map__21851 = cljs.core.get.call(null,map__21850__$1,new cljs.core.Keyword(null,"start","start",1123661780));var map__21851__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__21851))?cljs.core.apply.call(null,cljs.core.hash_map,map__21851):map__21851);var s_book = cljs.core.get.call(null,map__21851__$1,new cljs.core.Keyword(null,"book","book",1016933979));var map__21852 = cljs.core.get.call(null,map__21850__$1,new cljs.core.Keyword(null,"end","end",1014004813));var map__21852__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__21852))?cljs.core.apply.call(null,cljs.core.hash_map,map__21852):map__21852);var e_book = cljs.core.get.call(null,map__21852__$1,new cljs.core.Keyword(null,"book","book",1016933979));if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null))))
{return reading;
} else
{return null;
}
}),reading_day);
});
bible_plan.plan.contiguous_readings_from = (function contiguous_readings_from(annotated_plan,annotated_reading){var available_reading_days = cljs.core.drop_while.call(null,cljs.core.partial.call(null,bible_plan.plan.reading_day__GT_,annotated_reading),annotated_plan);var annotated_reading_book = cljs.core.get_in.call(null,annotated_reading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"book","book",1016933979)], null));var contiguous_book_reading_days = cljs.core.take_while.call(null,cljs.core.partial.call(null,bible_plan.plan.reading_book_QMARK_,annotated_reading_book),available_reading_days);var readings_for_book = cljs.core.map.call(null,cljs.core.partial.call(null,bible_plan.plan.readings_for_book_in_reading_day,annotated_reading_book),contiguous_book_reading_days);return readings_for_book;
});
bible_plan.plan.book_order = (function book_order(plan){var annotated_plan = cljs.core.map.call(null,(function (reading_day){return cljs.core.map.call(null,(function (p1__21853_SHARP_){return cljs.core.select_keys.call(null,p1__21853_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"day","day",1014003470)], null));
}),reading_day);
}),bible_plan.plan.annotate_plan_readings_with_days.call(null,plan));var annotated_readings = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,annotated_plan);var G__21859 = annotated_readings;var vec__21860 = G__21859;var annotated_reading = cljs.core.nth.call(null,vec__21860,0,null);var next_annotated_readings = cljs.core.nthnext.call(null,vec__21860,1);var processed_readings = cljs.core.PersistentHashSet.EMPTY;var book_order__$1 = cljs.core.PersistentVector.EMPTY;var G__21859__$1 = G__21859;var processed_readings__$1 = processed_readings;var book_order__$2 = book_order__$1;while(true){
var vec__21861 = G__21859__$1;var annotated_reading__$1 = cljs.core.nth.call(null,vec__21861,0,null);var next_annotated_readings__$1 = cljs.core.nthnext.call(null,vec__21861,1);var processed_readings__$2 = processed_readings__$1;var book_order__$3 = book_order__$2;if(cljs.core.not.call(null,annotated_reading__$1))
{return book_order__$3;
} else
{if(cljs.core.truth_(processed_readings__$2.call(null,annotated_reading__$1)))
{{
var G__21862 = next_annotated_readings__$1;
var G__21863 = processed_readings__$2;
var G__21864 = book_order__$3;
G__21859__$1 = G__21862;
processed_readings__$1 = G__21863;
book_order__$2 = G__21864;
continue;
}
} else
{var contiguous_readings = bible_plan.plan.contiguous_readings_from.call(null,annotated_plan,annotated_reading__$1);{
var G__21865 = next_annotated_readings__$1;
var G__21866 = cljs.core.into.call(null,processed_readings__$2,contiguous_readings);
var G__21867 = cljs.core.conj.call(null,book_order__$3,cljs.core.get_in.call(null,annotated_reading__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"book","book",1016933979)], null)));
G__21859__$1 = G__21865;
processed_readings__$1 = G__21866;
book_order__$2 = G__21867;
continue;
}
}
}
break;
}
});
bible_plan.plan.update_vals = (function update_vals(the_map,update_fn){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__3979__auto__ = (function iter__21876(s__21877){return (new cljs.core.LazySeq(null,(function (){var s__21877__$1 = s__21877;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21877__$1);if(cljs.core.truth_(temp__4092__auto__))
{var s__21877__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21877__$2))
{var c__3977__auto__ = cljs.core.chunk_first.call(null,s__21877__$2);var size__3978__auto__ = cljs.core.count.call(null,c__3977__auto__);var b__21879 = cljs.core.chunk_buffer.call(null,size__3978__auto__);if((function (){var i__21878 = 0;while(true){
if((i__21878 < size__3978__auto__))
{var vec__21882 = cljs.core._nth.call(null,c__3977__auto__,i__21878);var k = cljs.core.nth.call(null,vec__21882,0,null);var v = cljs.core.nth.call(null,vec__21882,1,null);cljs.core.chunk_append.call(null,b__21879,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,update_fn.call(null,v)], null));
{
var G__21884 = (i__21878 + 1);
i__21878 = G__21884;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21879),iter__21876.call(null,cljs.core.chunk_rest.call(null,s__21877__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21879),null);
}
} else
{var vec__21883 = cljs.core.first.call(null,s__21877__$2);var k = cljs.core.nth.call(null,vec__21883,0,null);var v = cljs.core.nth.call(null,vec__21883,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,update_fn.call(null,v)], null),iter__21876.call(null,cljs.core.rest.call(null,s__21877__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3979__auto__.call(null,the_map);
})());
});
bible_plan.plan.group_into_ascending_readings = (function group_into_ascending_readings(readings){return cljs.core.reduce.call(null,(function (ascending_readings,reference){if(cljs.core.truth_(bible_plan.reference.reference_LT_.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,ascending_readings,(cljs.core.count.call(null,ascending_readings) - 1))),reference)))
{return cljs.core.update_in.call(null,ascending_readings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,ascending_readings) - 1)], null),cljs.core.conj,reference);
} else
{return cljs.core.conj.call(null,ascending_readings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reference], null));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,readings)], null)], null),cljs.core.rest.call(null,readings));
});
bible_plan.plan.book_readings = (function book_readings(plan){var _PERCENT_ = (function (){var readings = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,plan);var raw_book_readings = cljs.core.group_by.call(null,((function (readings){
return (function reading_start_book(reading){return cljs.core.get_in.call(null,reading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"book","book",1016933979)], null));
});})(readings))
,readings);return bible_plan.plan.update_vals.call(null,raw_book_readings,bible_plan.plan.group_into_ascending_readings);
})();return _PERCENT_;
});
bible_plan.plan.group_reading_day = (function group_reading_day(raw_reading_day){var original_order = cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"book","book",1016933979),new cljs.core.Keyword(null,"start","start",1123661780)),raw_reading_day));var grouped_readings = cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"book","book",1016933979),new cljs.core.Keyword(null,"start","start",1123661780)),raw_reading_day);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"book-order","book-order",2217817820),original_order,new cljs.core.Keyword(null,"book-readings","book-readings",1725265213),grouped_readings], null);
});
bible_plan.plan.coalesce_reading_day = (function coalesce_reading_day(p__21885){var map__21887 = p__21885;var map__21887__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__21887))?cljs.core.apply.call(null,cljs.core.hash_map,map__21887):map__21887);var grouped_reading_day = map__21887__$1;var book_readings = cljs.core.get.call(null,map__21887__$1,new cljs.core.Keyword(null,"book-readings","book-readings",1725265213));var book_order = cljs.core.get.call(null,map__21887__$1,new cljs.core.Keyword(null,"book-order","book-order",2217817820));return cljs.core.map.call(null,(function merge_reading_book_group(reading_book_group){return cljs.core.reduce.call(null,bible_plan.reference.merge_refs,cljs.core.get.call(null,book_readings,reading_book_group));
}),book_order);
});
bible_plan.plan.raw_plan_by_book = (function raw_plan_by_book(book_readings,book_order){var raw_plan = cljs.core.PersistentVector.EMPTY;var book_readings__$1 = book_readings;var G__21893 = book_order;var vec__21894 = G__21893;var book = cljs.core.nth.call(null,vec__21894,0,null);var next_books = cljs.core.nthnext.call(null,vec__21894,1);var raw_plan__$1 = raw_plan;var book_readings__$2 = book_readings__$1;var G__21893__$1 = G__21893;while(true){
var raw_plan__$2 = raw_plan__$1;var book_readings__$3 = book_readings__$2;var vec__21895 = G__21893__$1;var book__$1 = cljs.core.nth.call(null,vec__21895,0,null);var next_books__$1 = cljs.core.nthnext.call(null,vec__21895,1);if(cljs.core.truth_(book__$1))
{var current_book_readings = cljs.core.first.call(null,cljs.core.get.call(null,book_readings__$3,book__$1));var next_book_readings = cljs.core.update_in.call(null,book_readings__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book__$1], null),cljs.core.rest);{
var G__21896 = cljs.core.into.call(null,raw_plan__$2,current_book_readings);
var G__21897 = next_book_readings;
var G__21898 = next_books__$1;
raw_plan__$1 = G__21896;
book_readings__$2 = G__21897;
G__21893__$1 = G__21898;
continue;
}
} else
{return raw_plan__$2;
}
break;
}
});
bible_plan.plan.partition_all_balanced = (function partition_all_balanced(n,coll){if(cljs.core._EQ_.call(null,Math.floor(n),n))
{return cljs.core.partition_all.call(null,n,coll);
} else
{var rest_coll_items = coll;var partitioned_coll = cljs.core.PersistentVector.EMPTY;var step_size = Math.floor(n);var sub_1_part = cljs.core.rem.call(null,n,1);var make_up = sub_1_part;while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,rest_coll_items)))
{{
var G__21899 = cljs.core.drop.call(null,(step_size + Math.floor(make_up)),rest_coll_items);
var G__21900 = cljs.core.conj.call(null,partitioned_coll,cljs.core.take.call(null,(step_size + Math.floor(make_up)),rest_coll_items));
var G__21901 = step_size;
var G__21902 = sub_1_part;
var G__21903 = (sub_1_part + cljs.core.rem.call(null,make_up,1));
rest_coll_items = G__21899;
partitioned_coll = G__21900;
step_size = G__21901;
sub_1_part = G__21902;
make_up = G__21903;
continue;
}
} else
{return partitioned_coll;
}
break;
}
}
});
bible_plan.plan.combine_last_two_items = (function combine_last_two_items(coll){return cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,(cljs.core.count.call(null,coll) - 2),coll)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.drop.call(null,(cljs.core.count.call(null,coll) - 2),coll)));
});
bible_plan.plan.raw_readings__GT_plan = (function raw_readings__GT_plan(number_of_reading_days,raw_readings){shodan.console.log.call(null,"Converting raw readings to plan.");
var raw_reading_days = bible_plan.plan.partition_all_balanced.call(null,(cljs.core.count.call(null,raw_readings) / number_of_reading_days),raw_readings);var fixed_raw_reading_days = (((cljs.core.count.call(null,raw_reading_days) > number_of_reading_days))?bible_plan.plan.combine_last_two_items.call(null,raw_reading_days):raw_reading_days);var grouped_reading_days = cljs.core.map.call(null,bible_plan.plan.group_reading_day,fixed_raw_reading_days);var coalesced_reading_days = cljs.core.map.call(null,bible_plan.plan.coalesce_reading_day,grouped_reading_days);return coalesced_reading_days;
});
bible_plan.plan.order_by_book = (function order_by_book(number_of_reading_days,plan){shodan.console.log.call(null,"Ordering by book");
var book_order = bible_plan.plan.book_order.call(null,plan);var book_readings = bible_plan.plan.book_readings.call(null,plan);var raw_plan_by_book = bible_plan.plan.raw_plan_by_book.call(null,book_readings,book_order);return bible_plan.plan.raw_readings__GT_plan.call(null,number_of_reading_days,raw_plan_by_book);
});
bible_plan.plan.order_by_plan = (function order_by_plan(number_of_reading_days,plan){shodan.console.log.call(null,"Ordering by plan");
if((number_of_reading_days > cljs.core.count.call(null,plan)))
{return bible_plan.plan.raw_readings__GT_plan.call(null,number_of_reading_days,cljs.core.reduce.call(null,cljs.core.into,plan));
} else
{var raw_reading_days = cljs.core.map.call(null,(function (reading_days){return cljs.core.reduce.call(null,cljs.core.into,reading_days);
}),bible_plan.plan.partition_all_balanced.call(null,(cljs.core.count.call(null,plan) / number_of_reading_days),plan));var fixed_raw_reading_days = (((cljs.core.count.call(null,plan) > number_of_reading_days))?bible_plan.plan.combine_last_two_items.call(null,raw_reading_days):raw_reading_days);var grouped_reading_days = cljs.core.map.call(null,bible_plan.plan.group_reading_day,fixed_raw_reading_days);var coalesced_reading_days = cljs.core.map.call(null,bible_plan.plan.coalesce_reading_day,grouped_reading_days);return coalesced_reading_days;
}
});
bible_plan.plan.calculate_plan = (function calculate_plan(p__21904){var map__21906 = p__21904;var map__21906__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__21906))?cljs.core.apply.call(null,cljs.core.hash_map,map__21906):map__21906);var plan_options = map__21906__$1;var books_at_a_time_QMARK_ = cljs.core.get.call(null,map__21906__$1,new cljs.core.Keyword(null,"books-at-a-time?","books-at-a-time?",761096577));var skip_days = cljs.core.get.call(null,map__21906__$1,new cljs.core.Keyword(null,"skip-days","skip-days",3061888855));var end_date = cljs.core.get.call(null,map__21906__$1,new cljs.core.Keyword(null,"end-date","end-date",2692795602));var start_date = cljs.core.get.call(null,map__21906__$1,new cljs.core.Keyword(null,"start-date","start-date",3689065899));var base_plan = cljs.core.get.call(null,map__21906__$1,new cljs.core.Keyword(null,"base-plan","base-plan",3446158359));if(cljs.core.truth_(base_plan))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"base-plan","base-plan",791722590,null)))].join('')));
}
if(cljs.core.truth_(base_plan.call(null,cljs.core.deref.call(null,bible_plan.plan.plans))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"base-plan","base-plan",791722590,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",-564909588,null),new cljs.core.Symbol(null,"plans","plans",-1533783005,null)))))].join('')));
}
var the_plan = base_plan.call(null,cljs.core.deref.call(null,bible_plan.plan.plans));var start_date__$1 = (cljs.core.truth_(start_date)?start_date:clj_time.core.now.call(null));var end_date__$1 = (cljs.core.truth_(end_date)?end_date:clj_time.core.plus.call(null,start_date__$1,clj_time.core.years.call(null,1)));var dates = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.complement.call(null,(function (){var or__3291__auto__ = skip_days;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})()),clj_time.core.day_of_week),cljs.core.take_while.call(null,cljs.core.partial.call(null,clj_time.core.after_QMARK_,end_date__$1),clj_time.periodic.periodic_seq.call(null,start_date__$1,clj_time.core.days.call(null,1))));var _ = shodan.console.log.call(null,cljs.core.count.call(null,dates));var the_plan__$1 = (cljs.core.truth_(books_at_a_time_QMARK_)?bible_plan.plan.order_by_book.call(null,cljs.core.count.call(null,dates),the_plan):bible_plan.plan.order_by_plan.call(null,cljs.core.count.call(null,dates),the_plan));var ___$1 = shodan.console.log.call(null,cljs.core.count.call(null,the_plan__$1));return cljs.core.map.call(null,(function (readings,date){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readings","readings",4441962201),readings,new cljs.core.Keyword(null,"date","date",1016980256),date], null);
}),the_plan__$1,dates);
});
