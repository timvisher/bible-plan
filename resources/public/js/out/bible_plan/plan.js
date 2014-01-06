// Compiled by ClojureScript 0.0-2138
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
bible_plan.plan.plans = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
bible_plan.plan.assoc_plan = (function assoc_plan(name,plan_data){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bible_plan.plan.plans,cljs.core.assoc,name,plan_data);
});
bible_plan.plan.load_plans = (function load_plans(){return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3("/edn/plans/plans.edn",cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,(function load_available_plans(p__9190){var vec__9200 = p__9190;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9200,0,null);var plan_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9200,1,null);if(cljs.core.truth_(ok))
{var seq__9201 = cljs.core.seq(plan_names);var chunk__9202 = null;var count__9203 = 0;var i__9204 = 0;while(true){
if((i__9204 < count__9203))
{var plan_name = chunk__9202.cljs$core$IIndexed$_nth$arity$2(null,i__9204);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name(plan_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,((function (seq__9201,chunk__9202,count__9203,i__9204,plan_name){
return (function (p__9205){var vec__9206 = p__9205;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9206,0,null);var plan_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9206,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan(plan_name,plan_data);
} else
{return null;
}
});})(seq__9201,chunk__9202,count__9203,i__9204,plan_name))
,cljs.core.constant$keyword$131,ajax.core.edn_format()], null));
{
var G__9209 = seq__9201;
var G__9210 = chunk__9202;
var G__9211 = count__9203;
var G__9212 = (i__9204 + 1);
seq__9201 = G__9209;
chunk__9202 = G__9210;
count__9203 = G__9211;
i__9204 = G__9212;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9201);if(temp__4092__auto__)
{var seq__9201__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9201__$1))
{var c__4150__auto__ = cljs.core.chunk_first(seq__9201__$1);{
var G__9213 = cljs.core.chunk_rest(seq__9201__$1);
var G__9214 = c__4150__auto__;
var G__9215 = cljs.core.count(c__4150__auto__);
var G__9216 = 0;
seq__9201 = G__9213;
chunk__9202 = G__9214;
count__9203 = G__9215;
i__9204 = G__9216;
continue;
}
} else
{var plan_name = cljs.core.first(seq__9201__$1);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name(plan_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,((function (seq__9201,chunk__9202,count__9203,i__9204,plan_name,seq__9201__$1,temp__4092__auto__){
return (function (p__9207){var vec__9208 = p__9207;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9208,0,null);var plan_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9208,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan(plan_name,plan_data);
} else
{return null;
}
});})(seq__9201,chunk__9202,count__9203,i__9204,plan_name,seq__9201__$1,temp__4092__auto__))
,cljs.core.constant$keyword$131,ajax.core.edn_format()], null));
{
var G__9217 = cljs.core.next(seq__9201__$1);
var G__9218 = null;
var G__9219 = 0;
var G__9220 = 0;
seq__9201 = G__9217;
chunk__9202 = G__9218;
count__9203 = G__9219;
i__9204 = G__9220;
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
}),cljs.core.constant$keyword$131,ajax.core.edn_format()], null));
});
bible_plan.plan.load_plans();
bible_plan.plan.annotate_plan_readings_with_days = (function annotate_plan_readings_with_days(plan){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (day_number,readings){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (reading){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reading,cljs.core.constant$keyword$163,day_number);
}),readings);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),plan);
});
bible_plan.plan.reading_day__GT_ = (function reading_day__GT_(annotated_reading,annotated_reading_day){var reading_day_day_number = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$163,cljs.core.first).call(null,annotated_reading_day);var reading_day_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(annotated_reading,cljs.core.constant$keyword$163);return (reading_day_number > reading_day_day_number);
});
bible_plan.plan.reading_book_QMARK_ = (function reading_book_QMARK_(book,reading_day){return cljs.core.some((function start_or_end_in_book_QMARK_(p__9228){var map__9232 = p__9228;var map__9232__$1 = ((cljs.core.seq_QMARK_(map__9232))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9232):map__9232);var map__9233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9232__$1,cljs.core.constant$keyword$143);var map__9233__$1 = ((cljs.core.seq_QMARK_(map__9233))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9233):map__9233);var s_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9233__$1,cljs.core.constant$keyword$141);var map__9234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9232__$1,cljs.core.constant$keyword$142);var map__9234__$1 = ((cljs.core.seq_QMARK_(map__9234))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9234):map__9234);var e_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9234__$1,cljs.core.constant$keyword$141);return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null));
}),reading_day);
});
bible_plan.plan.readings_for_book_in_reading_day = (function readings_for_book_in_reading_day(book,reading_day){return cljs.core.some((function start_or_end_in_book_QMARK_(p__9242){var map__9246 = p__9242;var map__9246__$1 = ((cljs.core.seq_QMARK_(map__9246))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9246):map__9246);var reading = map__9246__$1;var map__9247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9246__$1,cljs.core.constant$keyword$143);var map__9247__$1 = ((cljs.core.seq_QMARK_(map__9247))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9247):map__9247);var s_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9247__$1,cljs.core.constant$keyword$141);var map__9248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9246__$1,cljs.core.constant$keyword$142);var map__9248__$1 = ((cljs.core.seq_QMARK_(map__9248))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9248):map__9248);var e_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9248__$1,cljs.core.constant$keyword$141);if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null))))
{return reading;
} else
{return null;
}
}),reading_day);
});
bible_plan.plan.contiguous_readings_from = (function contiguous_readings_from(annotated_plan,annotated_reading){var available_reading_days = cljs.core.drop_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.reading_day__GT_,annotated_reading),annotated_plan);var annotated_reading_book = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(annotated_reading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,cljs.core.constant$keyword$141], null));var contiguous_book_reading_days = cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.reading_book_QMARK_,annotated_reading_book),available_reading_days);var readings_for_book = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.readings_for_book_in_reading_day,annotated_reading_book),contiguous_book_reading_days);return readings_for_book;
});
bible_plan.plan.book_order = (function book_order(plan){var annotated_plan = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (reading_day){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9249_SHARP_){return cljs.core.select_keys(p1__9249_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,cljs.core.constant$keyword$142,cljs.core.constant$keyword$163], null));
}),reading_day);
}),bible_plan.plan.annotate_plan_readings_with_days(plan));var annotated_readings = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,annotated_plan);var G__9255 = annotated_readings;var vec__9256 = G__9255;var annotated_reading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9256,0,null);var next_annotated_readings = cljs.core.nthnext(vec__9256,1);var processed_readings = cljs.core.PersistentHashSet.EMPTY;var book_order__$1 = cljs.core.PersistentVector.EMPTY;var G__9255__$1 = G__9255;var processed_readings__$1 = processed_readings;var book_order__$2 = book_order__$1;while(true){
var vec__9257 = G__9255__$1;var annotated_reading__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9257,0,null);var next_annotated_readings__$1 = cljs.core.nthnext(vec__9257,1);var processed_readings__$2 = processed_readings__$1;var book_order__$3 = book_order__$2;if(cljs.core.not(annotated_reading__$1))
{return book_order__$3;
} else
{if(cljs.core.truth_((processed_readings__$2.cljs$core$IFn$_invoke$arity$1 ? processed_readings__$2.cljs$core$IFn$_invoke$arity$1(annotated_reading__$1) : processed_readings__$2.call(null,annotated_reading__$1))))
{{
var G__9258 = next_annotated_readings__$1;
var G__9259 = processed_readings__$2;
var G__9260 = book_order__$3;
G__9255__$1 = G__9258;
processed_readings__$1 = G__9259;
book_order__$2 = G__9260;
continue;
}
} else
{var contiguous_readings = bible_plan.plan.contiguous_readings_from(annotated_plan,annotated_reading__$1);{
var G__9261 = next_annotated_readings__$1;
var G__9262 = cljs.core.into(processed_readings__$2,contiguous_readings);
var G__9263 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(book_order__$3,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(annotated_reading__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,cljs.core.constant$keyword$141], null)));
G__9255__$1 = G__9261;
processed_readings__$1 = G__9262;
book_order__$2 = G__9263;
continue;
}
}
}
break;
}
});
bible_plan.plan.update_vals = (function update_vals(the_map,update_fn){return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4119__auto__ = (function iter__9272(s__9273){return (new cljs.core.LazySeq(null,(function (){var s__9273__$1 = s__9273;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9273__$1);if(temp__4092__auto__)
{var s__9273__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9273__$2))
{var c__4117__auto__ = cljs.core.chunk_first(s__9273__$2);var size__4118__auto__ = cljs.core.count(c__4117__auto__);var b__9275 = cljs.core.chunk_buffer(size__4118__auto__);if((function (){var i__9274 = 0;while(true){
if((i__9274 < size__4118__auto__))
{var vec__9278 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4117__auto__,i__9274);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9278,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9278,1,null);cljs.core.chunk_append(b__9275,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(v) : update_fn.call(null,v))], null));
{
var G__9280 = (i__9274 + 1);
i__9274 = G__9280;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9275),iter__9272(cljs.core.chunk_rest(s__9273__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9275),null);
}
} else
{var vec__9279 = cljs.core.first(s__9273__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9279,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9279,1,null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(v) : update_fn.call(null,v))], null),iter__9272(cljs.core.rest(s__9273__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__(the_map);
})());
});
bible_plan.plan.group_into_ascending_readings = (function group_into_ascending_readings(readings){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ascending_readings,reference){if(cljs.core.truth_(bible_plan.reference._LT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.last(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ascending_readings,(cljs.core.count(ascending_readings) - 1))),cljs.core.array_seq([reference], 0))))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ascending_readings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(ascending_readings) - 1)], null),cljs.core.conj,reference);
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ascending_readings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reference], null));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(readings)], null)], null),cljs.core.rest(readings));
});
bible_plan.plan.book_readings = (function book_readings(plan){var _PERCENT_ = (function (){var readings = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,plan);var raw_book_readings = cljs.core.group_by(((function (readings){
return (function reading_start_book(reading){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,cljs.core.constant$keyword$141], null));
});})(readings))
,readings);return bible_plan.plan.update_vals(raw_book_readings,bible_plan.plan.group_into_ascending_readings);
})();return _PERCENT_;
});
bible_plan.plan.group_reading_day = (function group_reading_day(raw_reading_day){var original_order = cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$141,cljs.core.constant$keyword$143),raw_reading_day));var grouped_readings = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$141,cljs.core.constant$keyword$143),raw_reading_day);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$164,original_order,cljs.core.constant$keyword$165,grouped_readings], null);
});
bible_plan.plan.coalesce_reading_day = (function coalesce_reading_day(p__9281){var map__9283 = p__9281;var map__9283__$1 = ((cljs.core.seq_QMARK_(map__9283))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9283):map__9283);var grouped_reading_day = map__9283__$1;var book_readings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9283__$1,cljs.core.constant$keyword$165);var book_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9283__$1,cljs.core.constant$keyword$164);return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function merge_reading_book_group(reading_book_group){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bible_plan.reference.merge_refs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(book_readings,reading_book_group));
}),book_order);
});
bible_plan.plan.raw_plan_by_book = (function raw_plan_by_book(book_readings,book_order){var raw_plan = cljs.core.PersistentVector.EMPTY;var book_readings__$1 = book_readings;var G__9289 = book_order;var vec__9290 = G__9289;var book = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9290,0,null);var next_books = cljs.core.nthnext(vec__9290,1);var raw_plan__$1 = raw_plan;var book_readings__$2 = book_readings__$1;var G__9289__$1 = G__9289;while(true){
var raw_plan__$2 = raw_plan__$1;var book_readings__$3 = book_readings__$2;var vec__9291 = G__9289__$1;var book__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9291,0,null);var next_books__$1 = cljs.core.nthnext(vec__9291,1);if(cljs.core.truth_(book__$1))
{var current_book_readings = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(book_readings__$3,book__$1));var next_book_readings = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(book_readings__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book__$1], null),cljs.core.rest);{
var G__9292 = cljs.core.into(raw_plan__$2,current_book_readings);
var G__9293 = next_book_readings;
var G__9294 = next_books__$1;
raw_plan__$1 = G__9292;
book_readings__$2 = G__9293;
G__9289__$1 = G__9294;
continue;
}
} else
{return raw_plan__$2;
}
break;
}
});
bible_plan.plan.partition_all_balanced = (function partition_all_balanced(n,coll){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Math.floor(n),n))
{return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(n,coll);
} else
{var rest_coll_items = coll;var partitioned_coll = cljs.core.PersistentVector.EMPTY;var step_size = Math.floor(n);var sub_1_part = cljs.core.rem(n,1);var make_up = sub_1_part;while(true){
if(cljs.core.seq(rest_coll_items))
{{
var G__9295 = cljs.core.drop((step_size + Math.floor(make_up)),rest_coll_items);
var G__9296 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(partitioned_coll,cljs.core.take((step_size + Math.floor(make_up)),rest_coll_items));
var G__9297 = step_size;
var G__9298 = sub_1_part;
var G__9299 = (sub_1_part + cljs.core.rem(make_up,1));
rest_coll_items = G__9295;
partitioned_coll = G__9296;
step_size = G__9297;
sub_1_part = G__9298;
make_up = G__9299;
continue;
}
} else
{return partitioned_coll;
}
break;
}
}
});
bible_plan.plan.combine_last_two_items = (function combine_last_two_items(coll){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.take((cljs.core.count(coll) - 2),coll)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.drop((cljs.core.count(coll) - 2),coll)));
});
bible_plan.plan.raw_readings__GT_plan = (function raw_readings__GT_plan(number_of_reading_days,raw_readings){shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Converting raw readings to plan."], 0));
var raw_reading_days = bible_plan.plan.partition_all_balanced((cljs.core.count(raw_readings) / number_of_reading_days),raw_readings);var fixed_raw_reading_days = (((cljs.core.count(raw_reading_days) > number_of_reading_days))?bible_plan.plan.combine_last_two_items(raw_reading_days):raw_reading_days);var grouped_reading_days = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.group_reading_day,fixed_raw_reading_days);var coalesced_reading_days = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.coalesce_reading_day,grouped_reading_days);return coalesced_reading_days;
});
bible_plan.plan.order_by_book = (function order_by_book(number_of_reading_days,plan){shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Ordering by book"], 0));
var book_order = bible_plan.plan.book_order(plan);var book_readings = bible_plan.plan.book_readings(plan);var raw_plan_by_book = bible_plan.plan.raw_plan_by_book(book_readings,book_order);return bible_plan.plan.raw_readings__GT_plan(number_of_reading_days,raw_plan_by_book);
});
bible_plan.plan.order_by_plan = (function order_by_plan(number_of_reading_days,plan){shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Ordering by plan"], 0));
if((number_of_reading_days > cljs.core.count(plan)))
{return bible_plan.plan.raw_readings__GT_plan(number_of_reading_days,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,plan));
} else
{var raw_reading_days = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (reading_days){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,reading_days);
}),bible_plan.plan.partition_all_balanced((cljs.core.count(plan) / number_of_reading_days),plan));var fixed_raw_reading_days = (((cljs.core.count(plan) > number_of_reading_days))?bible_plan.plan.combine_last_two_items(raw_reading_days):raw_reading_days);var grouped_reading_days = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.group_reading_day,fixed_raw_reading_days);var coalesced_reading_days = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.coalesce_reading_day,grouped_reading_days);return coalesced_reading_days;
}
});
bible_plan.plan.calculate_plan = (function calculate_plan(p__9300){var map__9302 = p__9300;var map__9302__$1 = ((cljs.core.seq_QMARK_(map__9302))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9302):map__9302);var plan_options = map__9302__$1;var books_at_a_time_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9302__$1,cljs.core.constant$keyword$166);var skip_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9302__$1,cljs.core.constant$keyword$167);var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9302__$1,cljs.core.constant$keyword$168);var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9302__$1,cljs.core.constant$keyword$169);var base_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9302__$1,cljs.core.constant$keyword$170);if(cljs.core.truth_(base_plan))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"base-plan","base-plan",791722590,null)], 0)))].join('')));
}
if(cljs.core.truth_((base_plan.cljs$core$IFn$_invoke$arity$1 ? base_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bible_plan.plan.plans)) : base_plan.call(null,cljs.core.deref(bible_plan.plan.plans)))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"base-plan","base-plan",791722590,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",-564909588,null),new cljs.core.Symbol(null,"plans","plans",-1533783005,null)))], 0)))].join('')));
}
var the_plan = (base_plan.cljs$core$IFn$_invoke$arity$1 ? base_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bible_plan.plan.plans)) : base_plan.call(null,cljs.core.deref(bible_plan.plan.plans)));var start_date__$1 = (cljs.core.truth_(start_date)?start_date:clj_time.core.now());var end_date__$1 = (cljs.core.truth_(end_date)?end_date:clj_time.core.plus.cljs$core$IFn$_invoke$arity$2(start_date__$1,clj_time.core.years(1)));var dates = cljs.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.complement((function (){var or__3408__auto__ = skip_days;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})()),clj_time.core.day_of_week),cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clj_time.core.after_QMARK_,end_date__$1),clj_time.periodic.periodic_seq(start_date__$1,clj_time.core.days(1))));var _ = shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.count(dates)], 0));var the_plan__$1 = (cljs.core.truth_(books_at_a_time_QMARK_)?bible_plan.plan.order_by_book(cljs.core.count(dates),the_plan):bible_plan.plan.order_by_plan(cljs.core.count(dates),the_plan));var ___$1 = shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.count(the_plan__$1)], 0));return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (readings,date){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$160,readings,cljs.core.constant$keyword$159,date], null);
}),the_plan__$1,dates);
});
