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
bible_plan.plan.load_plans = (function load_plans(){return ajax.core.ajax_request.call(null,"/edn/plans/plans.edn",new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function load_available_plans(p__22365){var vec__22375 = p__22365;var ok = cljs.core.nth.call(null,vec__22375,0,null);var plan_names = cljs.core.nth.call(null,vec__22375,1,null);if(cljs.core.truth_(ok))
{var seq__22376 = cljs.core.seq.call(null,plan_names);var chunk__22377 = null;var count__22378 = 0;var i__22379 = 0;while(true){
if((i__22379 < count__22378))
{var plan_name = cljs.core._nth.call(null,chunk__22377,i__22379);shodan.console.log.call(null,[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name.call(null,plan_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__22376,chunk__22377,count__22378,i__22379,plan_name){
return (function (p__22380){var vec__22381 = p__22380;var ok__$1 = cljs.core.nth.call(null,vec__22381,0,null);var plan_data = cljs.core.nth.call(null,vec__22381,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan.call(null,plan_name,plan_data);
} else
{return null;
}
});})(seq__22376,chunk__22377,count__22378,i__22379,plan_name))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__22384 = seq__22376;
var G__22385 = chunk__22377;
var G__22386 = count__22378;
var G__22387 = (i__22379 + 1);
seq__22376 = G__22384;
chunk__22377 = G__22385;
count__22378 = G__22386;
i__22379 = G__22387;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__22376);if(cljs.core.truth_(temp__4092__auto__))
{var seq__22376__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22376__$1))
{var c__4010__auto__ = cljs.core.chunk_first.call(null,seq__22376__$1);{
var G__22388 = cljs.core.chunk_rest.call(null,seq__22376__$1);
var G__22389 = c__4010__auto__;
var G__22390 = cljs.core.count.call(null,c__4010__auto__);
var G__22391 = 0;
seq__22376 = G__22388;
chunk__22377 = G__22389;
count__22378 = G__22390;
i__22379 = G__22391;
continue;
}
} else
{var plan_name = cljs.core.first.call(null,seq__22376__$1);shodan.console.log.call(null,[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name.call(null,plan_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__22376,chunk__22377,count__22378,i__22379,plan_name,seq__22376__$1,temp__4092__auto__){
return (function (p__22382){var vec__22383 = p__22382;var ok__$1 = cljs.core.nth.call(null,vec__22383,0,null);var plan_data = cljs.core.nth.call(null,vec__22383,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan.call(null,plan_name,plan_data);
} else
{return null;
}
});})(seq__22376,chunk__22377,count__22378,i__22379,plan_name,seq__22376__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__22392 = cljs.core.next.call(null,seq__22376__$1);
var G__22393 = null;
var G__22394 = 0;
var G__22395 = 0;
seq__22376 = G__22392;
chunk__22377 = G__22393;
count__22378 = G__22394;
i__22379 = G__22395;
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
bible_plan.plan.reading_book_QMARK_ = (function reading_book_QMARK_(book,reading_day){return cljs.core.some.call(null,(function start_or_end_in_book_QMARK_(p__22403){var map__22407 = p__22403;var map__22407__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__22407))?cljs.core.apply.call(null,cljs.core.hash_map,map__22407):map__22407);var map__22408 = cljs.core.get.call(null,map__22407__$1,new cljs.core.Keyword(null,"start","start",1123661780));var map__22408__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__22408))?cljs.core.apply.call(null,cljs.core.hash_map,map__22408):map__22408);var s_book = cljs.core.get.call(null,map__22408__$1,new cljs.core.Keyword(null,"book","book",1016933979));var map__22409 = cljs.core.get.call(null,map__22407__$1,new cljs.core.Keyword(null,"end","end",1014004813));var map__22409__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__22409))?cljs.core.apply.call(null,cljs.core.hash_map,map__22409):map__22409);var e_book = cljs.core.get.call(null,map__22409__$1,new cljs.core.Keyword(null,"book","book",1016933979));return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null));
}),reading_day);
});
bible_plan.plan.readings_for_book_in_reading_day = (function readings_for_book_in_reading_day(book,reading_day){return cljs.core.some.call(null,(function start_or_end_in_book_QMARK_(p__22417){var map__22421 = p__22417;var map__22421__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__22421))?cljs.core.apply.call(null,cljs.core.hash_map,map__22421):map__22421);var reading = map__22421__$1;var map__22422 = cljs.core.get.call(null,map__22421__$1,new cljs.core.Keyword(null,"start","start",1123661780));var map__22422__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__22422))?cljs.core.apply.call(null,cljs.core.hash_map,map__22422):map__22422);var s_book = cljs.core.get.call(null,map__22422__$1,new cljs.core.Keyword(null,"book","book",1016933979));var map__22423 = cljs.core.get.call(null,map__22421__$1,new cljs.core.Keyword(null,"end","end",1014004813));var map__22423__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__22423))?cljs.core.apply.call(null,cljs.core.hash_map,map__22423):map__22423);var e_book = cljs.core.get.call(null,map__22423__$1,new cljs.core.Keyword(null,"book","book",1016933979));if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null))))
{return reading;
} else
{return null;
}
}),reading_day);
});
bible_plan.plan.contiguous_readings_from = (function contiguous_readings_from(annotated_plan,annotated_reading){var available_reading_days = cljs.core.drop_while.call(null,cljs.core.partial.call(null,bible_plan.plan.reading_day__GT_,annotated_reading),annotated_plan);var annotated_reading_book = cljs.core.get_in.call(null,annotated_reading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"book","book",1016933979)], null));var contiguous_book_reading_days = cljs.core.take_while.call(null,cljs.core.partial.call(null,bible_plan.plan.reading_book_QMARK_,annotated_reading_book),available_reading_days);var readings_for_book = cljs.core.map.call(null,cljs.core.partial.call(null,bible_plan.plan.readings_for_book_in_reading_day,annotated_reading_book),contiguous_book_reading_days);return readings_for_book;
});
bible_plan.plan.book_order = (function book_order(plan){var annotated_plan = cljs.core.map.call(null,(function (reading_day){return cljs.core.map.call(null,(function (p1__22424_SHARP_){return cljs.core.select_keys.call(null,p1__22424_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"day","day",1014003470)], null));
}),reading_day);
}),bible_plan.plan.annotate_plan_readings_with_days.call(null,plan));var annotated_readings = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,annotated_plan);var G__22430 = annotated_readings;var vec__22431 = G__22430;var annotated_reading = cljs.core.nth.call(null,vec__22431,0,null);var next_annotated_readings = cljs.core.nthnext.call(null,vec__22431,1);var processed_readings = cljs.core.PersistentHashSet.EMPTY;var book_order__$1 = cljs.core.PersistentVector.EMPTY;var G__22430__$1 = G__22430;var processed_readings__$1 = processed_readings;var book_order__$2 = book_order__$1;while(true){
var vec__22432 = G__22430__$1;var annotated_reading__$1 = cljs.core.nth.call(null,vec__22432,0,null);var next_annotated_readings__$1 = cljs.core.nthnext.call(null,vec__22432,1);var processed_readings__$2 = processed_readings__$1;var book_order__$3 = book_order__$2;if(cljs.core.not.call(null,annotated_reading__$1))
{return book_order__$3;
} else
{if(cljs.core.truth_(processed_readings__$2.call(null,annotated_reading__$1)))
{{
var G__22433 = next_annotated_readings__$1;
var G__22434 = processed_readings__$2;
var G__22435 = book_order__$3;
G__22430__$1 = G__22433;
processed_readings__$1 = G__22434;
book_order__$2 = G__22435;
continue;
}
} else
{var contiguous_readings = bible_plan.plan.contiguous_readings_from.call(null,annotated_plan,annotated_reading__$1);{
var G__22436 = next_annotated_readings__$1;
var G__22437 = cljs.core.into.call(null,processed_readings__$2,contiguous_readings);
var G__22438 = cljs.core.conj.call(null,book_order__$3,cljs.core.get_in.call(null,annotated_reading__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"book","book",1016933979)], null)));
G__22430__$1 = G__22436;
processed_readings__$1 = G__22437;
book_order__$2 = G__22438;
continue;
}
}
}
break;
}
});
bible_plan.plan.update_vals = (function update_vals(the_map,update_fn){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__3979__auto__ = (function iter__22447(s__22448){return (new cljs.core.LazySeq(null,(function (){var s__22448__$1 = s__22448;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__22448__$1);if(cljs.core.truth_(temp__4092__auto__))
{var s__22448__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22448__$2))
{var c__3977__auto__ = cljs.core.chunk_first.call(null,s__22448__$2);var size__3978__auto__ = cljs.core.count.call(null,c__3977__auto__);var b__22450 = cljs.core.chunk_buffer.call(null,size__3978__auto__);if((function (){var i__22449 = 0;while(true){
if((i__22449 < size__3978__auto__))
{var vec__22453 = cljs.core._nth.call(null,c__3977__auto__,i__22449);var k = cljs.core.nth.call(null,vec__22453,0,null);var v = cljs.core.nth.call(null,vec__22453,1,null);cljs.core.chunk_append.call(null,b__22450,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,update_fn.call(null,v)], null));
{
var G__22455 = (i__22449 + 1);
i__22449 = G__22455;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22450),iter__22447.call(null,cljs.core.chunk_rest.call(null,s__22448__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22450),null);
}
} else
{var vec__22454 = cljs.core.first.call(null,s__22448__$2);var k = cljs.core.nth.call(null,vec__22454,0,null);var v = cljs.core.nth.call(null,vec__22454,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,update_fn.call(null,v)], null),iter__22447.call(null,cljs.core.rest.call(null,s__22448__$2)));
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
bible_plan.plan.coalesce_reading_day = (function coalesce_reading_day(p__22456){var map__22458 = p__22456;var map__22458__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__22458))?cljs.core.apply.call(null,cljs.core.hash_map,map__22458):map__22458);var grouped_reading_day = map__22458__$1;var book_readings = cljs.core.get.call(null,map__22458__$1,new cljs.core.Keyword(null,"book-readings","book-readings",1725265213));var book_order = cljs.core.get.call(null,map__22458__$1,new cljs.core.Keyword(null,"book-order","book-order",2217817820));return cljs.core.map.call(null,(function merge_reading_book_group(reading_book_group){return cljs.core.reduce.call(null,bible_plan.reference.merge_refs,cljs.core.get.call(null,book_readings,reading_book_group));
}),book_order);
});
bible_plan.plan.raw_plan_by_book = (function raw_plan_by_book(book_readings,book_order){var raw_plan = cljs.core.PersistentVector.EMPTY;var book_readings__$1 = book_readings;var G__22464 = book_order;var vec__22465 = G__22464;var book = cljs.core.nth.call(null,vec__22465,0,null);var next_books = cljs.core.nthnext.call(null,vec__22465,1);var raw_plan__$1 = raw_plan;var book_readings__$2 = book_readings__$1;var G__22464__$1 = G__22464;while(true){
var raw_plan__$2 = raw_plan__$1;var book_readings__$3 = book_readings__$2;var vec__22466 = G__22464__$1;var book__$1 = cljs.core.nth.call(null,vec__22466,0,null);var next_books__$1 = cljs.core.nthnext.call(null,vec__22466,1);if(cljs.core.truth_(book__$1))
{var current_book_readings = cljs.core.first.call(null,cljs.core.get.call(null,book_readings__$3,book__$1));var next_book_readings = cljs.core.update_in.call(null,book_readings__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book__$1], null),cljs.core.rest);{
var G__22467 = cljs.core.into.call(null,raw_plan__$2,current_book_readings);
var G__22468 = next_book_readings;
var G__22469 = next_books__$1;
raw_plan__$1 = G__22467;
book_readings__$2 = G__22468;
G__22464__$1 = G__22469;
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
var G__22470 = cljs.core.drop.call(null,(step_size + Math.floor(make_up)),rest_coll_items);
var G__22471 = cljs.core.conj.call(null,partitioned_coll,cljs.core.take.call(null,(step_size + Math.floor(make_up)),rest_coll_items));
var G__22472 = step_size;
var G__22473 = sub_1_part;
var G__22474 = (sub_1_part + cljs.core.rem.call(null,make_up,1));
rest_coll_items = G__22470;
partitioned_coll = G__22471;
step_size = G__22472;
sub_1_part = G__22473;
make_up = G__22474;
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
bible_plan.plan.calculate_plan = (function calculate_plan(p__22475){var map__22477 = p__22475;var map__22477__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__22477))?cljs.core.apply.call(null,cljs.core.hash_map,map__22477):map__22477);var plan_options = map__22477__$1;var books_at_a_time_QMARK_ = cljs.core.get.call(null,map__22477__$1,new cljs.core.Keyword(null,"books-at-a-time?","books-at-a-time?",761096577));var skip_days = cljs.core.get.call(null,map__22477__$1,new cljs.core.Keyword(null,"skip-days","skip-days",3061888855));var end_date = cljs.core.get.call(null,map__22477__$1,new cljs.core.Keyword(null,"end-date","end-date",2692795602));var start_date = cljs.core.get.call(null,map__22477__$1,new cljs.core.Keyword(null,"start-date","start-date",3689065899));var base_plan = cljs.core.get.call(null,map__22477__$1,new cljs.core.Keyword(null,"base-plan","base-plan",3446158359));if(cljs.core.truth_(base_plan))
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
