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
bible_plan.plan.load_plans = (function load_plans(){return ajax.core.ajax_request.call(null,"/edn/plans/plans.edn",new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function load_available_plans(p__7600){var vec__7610 = p__7600;var ok = cljs.core.nth.call(null,vec__7610,0,null);var plan_names = cljs.core.nth.call(null,vec__7610,1,null);if(cljs.core.truth_(ok))
{var seq__7611 = cljs.core.seq.call(null,plan_names);var chunk__7612 = null;var count__7613 = 0;var i__7614 = 0;while(true){
if((i__7614 < count__7613))
{var plan_name = cljs.core._nth.call(null,chunk__7612,i__7614);shodan.console.log.call(null,[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name.call(null,plan_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__7611,chunk__7612,count__7613,i__7614,plan_name){
return (function (p__7615){var vec__7616 = p__7615;var ok__$1 = cljs.core.nth.call(null,vec__7616,0,null);var plan_data = cljs.core.nth.call(null,vec__7616,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan.call(null,plan_name,plan_data);
} else
{return null;
}
});})(seq__7611,chunk__7612,count__7613,i__7614,plan_name))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__7619 = seq__7611;
var G__7620 = chunk__7612;
var G__7621 = count__7613;
var G__7622 = (i__7614 + 1);
seq__7611 = G__7619;
chunk__7612 = G__7620;
count__7613 = G__7621;
i__7614 = G__7622;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7611);if(cljs.core.truth_(temp__4092__auto__))
{var seq__7611__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7611__$1))
{var c__4010__auto__ = cljs.core.chunk_first.call(null,seq__7611__$1);{
var G__7623 = cljs.core.chunk_rest.call(null,seq__7611__$1);
var G__7624 = c__4010__auto__;
var G__7625 = cljs.core.count.call(null,c__4010__auto__);
var G__7626 = 0;
seq__7611 = G__7623;
chunk__7612 = G__7624;
count__7613 = G__7625;
i__7614 = G__7626;
continue;
}
} else
{var plan_name = cljs.core.first.call(null,seq__7611__$1);shodan.console.log.call(null,[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name.call(null,plan_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__7611,chunk__7612,count__7613,i__7614,plan_name,seq__7611__$1,temp__4092__auto__){
return (function (p__7617){var vec__7618 = p__7617;var ok__$1 = cljs.core.nth.call(null,vec__7618,0,null);var plan_data = cljs.core.nth.call(null,vec__7618,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan.call(null,plan_name,plan_data);
} else
{return null;
}
});})(seq__7611,chunk__7612,count__7613,i__7614,plan_name,seq__7611__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__7627 = cljs.core.next.call(null,seq__7611__$1);
var G__7628 = null;
var G__7629 = 0;
var G__7630 = 0;
seq__7611 = G__7627;
chunk__7612 = G__7628;
count__7613 = G__7629;
i__7614 = G__7630;
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
bible_plan.plan.reading_book_QMARK_ = (function reading_book_QMARK_(book,reading_day){return cljs.core.some.call(null,(function start_or_end_in_book_QMARK_(p__7638){var map__7642 = p__7638;var map__7642__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7642))?cljs.core.apply.call(null,cljs.core.hash_map,map__7642):map__7642);var map__7643 = cljs.core.get.call(null,map__7642__$1,new cljs.core.Keyword(null,"start","start",1123661780));var map__7643__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7643))?cljs.core.apply.call(null,cljs.core.hash_map,map__7643):map__7643);var s_book = cljs.core.get.call(null,map__7643__$1,new cljs.core.Keyword(null,"book","book",1016933979));var map__7644 = cljs.core.get.call(null,map__7642__$1,new cljs.core.Keyword(null,"end","end",1014004813));var map__7644__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7644))?cljs.core.apply.call(null,cljs.core.hash_map,map__7644):map__7644);var e_book = cljs.core.get.call(null,map__7644__$1,new cljs.core.Keyword(null,"book","book",1016933979));return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null));
}),reading_day);
});
bible_plan.plan.readings_for_book_in_reading_day = (function readings_for_book_in_reading_day(book,reading_day){return cljs.core.some.call(null,(function start_or_end_in_book_QMARK_(p__7652){var map__7656 = p__7652;var map__7656__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7656))?cljs.core.apply.call(null,cljs.core.hash_map,map__7656):map__7656);var reading = map__7656__$1;var map__7657 = cljs.core.get.call(null,map__7656__$1,new cljs.core.Keyword(null,"start","start",1123661780));var map__7657__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7657))?cljs.core.apply.call(null,cljs.core.hash_map,map__7657):map__7657);var s_book = cljs.core.get.call(null,map__7657__$1,new cljs.core.Keyword(null,"book","book",1016933979));var map__7658 = cljs.core.get.call(null,map__7656__$1,new cljs.core.Keyword(null,"end","end",1014004813));var map__7658__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7658))?cljs.core.apply.call(null,cljs.core.hash_map,map__7658):map__7658);var e_book = cljs.core.get.call(null,map__7658__$1,new cljs.core.Keyword(null,"book","book",1016933979));if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null))))
{return reading;
} else
{return null;
}
}),reading_day);
});
bible_plan.plan.contiguous_readings_from = (function contiguous_readings_from(annotated_plan,annotated_reading){var available_reading_days = cljs.core.drop_while.call(null,cljs.core.partial.call(null,bible_plan.plan.reading_day__GT_,annotated_reading),annotated_plan);var annotated_reading_book = cljs.core.get_in.call(null,annotated_reading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"book","book",1016933979)], null));var contiguous_book_reading_days = cljs.core.take_while.call(null,cljs.core.partial.call(null,bible_plan.plan.reading_book_QMARK_,annotated_reading_book),available_reading_days);var readings_for_book = cljs.core.map.call(null,cljs.core.partial.call(null,bible_plan.plan.readings_for_book_in_reading_day,annotated_reading_book),contiguous_book_reading_days);return readings_for_book;
});
bible_plan.plan.book_order = (function book_order(plan){var annotated_plan = cljs.core.map.call(null,(function (reading_day){return cljs.core.map.call(null,(function (p1__7659_SHARP_){return cljs.core.select_keys.call(null,p1__7659_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"day","day",1014003470)], null));
}),reading_day);
}),bible_plan.plan.annotate_plan_readings_with_days.call(null,plan));var annotated_readings = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,annotated_plan);var G__7665 = annotated_readings;var vec__7666 = G__7665;var annotated_reading = cljs.core.nth.call(null,vec__7666,0,null);var next_annotated_readings = cljs.core.nthnext.call(null,vec__7666,1);var processed_readings = cljs.core.PersistentHashSet.EMPTY;var book_order__$1 = cljs.core.PersistentVector.EMPTY;var G__7665__$1 = G__7665;var processed_readings__$1 = processed_readings;var book_order__$2 = book_order__$1;while(true){
var vec__7667 = G__7665__$1;var annotated_reading__$1 = cljs.core.nth.call(null,vec__7667,0,null);var next_annotated_readings__$1 = cljs.core.nthnext.call(null,vec__7667,1);var processed_readings__$2 = processed_readings__$1;var book_order__$3 = book_order__$2;if(cljs.core.not.call(null,annotated_reading__$1))
{return book_order__$3;
} else
{if(cljs.core.truth_(processed_readings__$2.call(null,annotated_reading__$1)))
{{
var G__7668 = next_annotated_readings__$1;
var G__7669 = processed_readings__$2;
var G__7670 = book_order__$3;
G__7665__$1 = G__7668;
processed_readings__$1 = G__7669;
book_order__$2 = G__7670;
continue;
}
} else
{var contiguous_readings = bible_plan.plan.contiguous_readings_from.call(null,annotated_plan,annotated_reading__$1);{
var G__7671 = next_annotated_readings__$1;
var G__7672 = cljs.core.into.call(null,processed_readings__$2,contiguous_readings);
var G__7673 = cljs.core.conj.call(null,book_order__$3,cljs.core.get_in.call(null,annotated_reading__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"book","book",1016933979)], null)));
G__7665__$1 = G__7671;
processed_readings__$1 = G__7672;
book_order__$2 = G__7673;
continue;
}
}
}
break;
}
});
bible_plan.plan.update_vals = (function update_vals(the_map,update_fn){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__3979__auto__ = (function iter__7682(s__7683){return (new cljs.core.LazySeq(null,(function (){var s__7683__$1 = s__7683;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7683__$1);if(cljs.core.truth_(temp__4092__auto__))
{var s__7683__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7683__$2))
{var c__3977__auto__ = cljs.core.chunk_first.call(null,s__7683__$2);var size__3978__auto__ = cljs.core.count.call(null,c__3977__auto__);var b__7685 = cljs.core.chunk_buffer.call(null,size__3978__auto__);if((function (){var i__7684 = 0;while(true){
if((i__7684 < size__3978__auto__))
{var vec__7688 = cljs.core._nth.call(null,c__3977__auto__,i__7684);var k = cljs.core.nth.call(null,vec__7688,0,null);var v = cljs.core.nth.call(null,vec__7688,1,null);cljs.core.chunk_append.call(null,b__7685,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,update_fn.call(null,v)], null));
{
var G__7690 = (i__7684 + 1);
i__7684 = G__7690;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7685),iter__7682.call(null,cljs.core.chunk_rest.call(null,s__7683__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7685),null);
}
} else
{var vec__7689 = cljs.core.first.call(null,s__7683__$2);var k = cljs.core.nth.call(null,vec__7689,0,null);var v = cljs.core.nth.call(null,vec__7689,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,update_fn.call(null,v)], null),iter__7682.call(null,cljs.core.rest.call(null,s__7683__$2)));
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
bible_plan.plan.group_into_ascending_readings = (function group_into_ascending_readings(readings){return cljs.core.reduce.call(null,(function (ascending_readings,reference){if(cljs.core.truth_(bible_plan.reference._LT_.call(null,cljs.core.last.call(null,cljs.core.nth.call(null,ascending_readings,(cljs.core.count.call(null,ascending_readings) - 1))),reference)))
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
bible_plan.plan.coalesce_reading_day = (function coalesce_reading_day(p__7691){var map__7693 = p__7691;var map__7693__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7693))?cljs.core.apply.call(null,cljs.core.hash_map,map__7693):map__7693);var grouped_reading_day = map__7693__$1;var book_readings = cljs.core.get.call(null,map__7693__$1,new cljs.core.Keyword(null,"book-readings","book-readings",1725265213));var book_order = cljs.core.get.call(null,map__7693__$1,new cljs.core.Keyword(null,"book-order","book-order",2217817820));return cljs.core.map.call(null,(function merge_reading_book_group(reading_book_group){return cljs.core.reduce.call(null,bible_plan.reference.merge_refs,cljs.core.get.call(null,book_readings,reading_book_group));
}),book_order);
});
bible_plan.plan.raw_plan_by_book = (function raw_plan_by_book(book_readings,book_order){var raw_plan = cljs.core.PersistentVector.EMPTY;var book_readings__$1 = book_readings;var G__7699 = book_order;var vec__7700 = G__7699;var book = cljs.core.nth.call(null,vec__7700,0,null);var next_books = cljs.core.nthnext.call(null,vec__7700,1);var raw_plan__$1 = raw_plan;var book_readings__$2 = book_readings__$1;var G__7699__$1 = G__7699;while(true){
var raw_plan__$2 = raw_plan__$1;var book_readings__$3 = book_readings__$2;var vec__7701 = G__7699__$1;var book__$1 = cljs.core.nth.call(null,vec__7701,0,null);var next_books__$1 = cljs.core.nthnext.call(null,vec__7701,1);if(cljs.core.truth_(book__$1))
{var current_book_readings = cljs.core.first.call(null,cljs.core.get.call(null,book_readings__$3,book__$1));var next_book_readings = cljs.core.update_in.call(null,book_readings__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book__$1], null),cljs.core.rest);{
var G__7702 = cljs.core.into.call(null,raw_plan__$2,current_book_readings);
var G__7703 = next_book_readings;
var G__7704 = next_books__$1;
raw_plan__$1 = G__7702;
book_readings__$2 = G__7703;
G__7699__$1 = G__7704;
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
var G__7705 = cljs.core.drop.call(null,(step_size + Math.floor(make_up)),rest_coll_items);
var G__7706 = cljs.core.conj.call(null,partitioned_coll,cljs.core.take.call(null,(step_size + Math.floor(make_up)),rest_coll_items));
var G__7707 = step_size;
var G__7708 = sub_1_part;
var G__7709 = (sub_1_part + cljs.core.rem.call(null,make_up,1));
rest_coll_items = G__7705;
partitioned_coll = G__7706;
step_size = G__7707;
sub_1_part = G__7708;
make_up = G__7709;
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
bible_plan.plan.calculate_plan = (function calculate_plan(p__7710){var map__7712 = p__7710;var map__7712__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7712))?cljs.core.apply.call(null,cljs.core.hash_map,map__7712):map__7712);var plan_options = map__7712__$1;var books_at_a_time_QMARK_ = cljs.core.get.call(null,map__7712__$1,new cljs.core.Keyword(null,"books-at-a-time?","books-at-a-time?",761096577));var skip_days = cljs.core.get.call(null,map__7712__$1,new cljs.core.Keyword(null,"skip-days","skip-days",3061888855));var end_date = cljs.core.get.call(null,map__7712__$1,new cljs.core.Keyword(null,"end-date","end-date",2692795602));var start_date = cljs.core.get.call(null,map__7712__$1,new cljs.core.Keyword(null,"start-date","start-date",3689065899));var base_plan = cljs.core.get.call(null,map__7712__$1,new cljs.core.Keyword(null,"base-plan","base-plan",3446158359));if(cljs.core.truth_(base_plan))
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
