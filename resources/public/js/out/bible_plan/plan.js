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
bible_plan.plan.plans = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
bible_plan.plan.assoc_plan = (function assoc_plan(name,plan_data){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bible_plan.plan.plans,cljs.core.assoc,name,plan_data);
});
bible_plan.plan.load_plans = (function load_plans(){return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3("/edn/plans/plans.edn",cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,(function load_available_plans(p__20990){var vec__21000 = p__20990;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21000,0,null);var plan_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21000,1,null);if(cljs.core.truth_(ok))
{var seq__21001 = cljs.core.seq(plan_names);var chunk__21002 = null;var count__21003 = 0;var i__21004 = 0;while(true){
if((i__21004 < count__21003))
{var plan_name = chunk__21002.cljs$core$IIndexed$_nth$arity$2(null,i__21004);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name(plan_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__21001,chunk__21002,count__21003,i__21004,plan_name){
return (function (p__21005){var vec__21006 = p__21005;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21006,0,null);var plan_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21006,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan(plan_name,plan_data);
} else
{return null;
}
});})(seq__21001,chunk__21002,count__21003,i__21004,plan_name))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__21009 = seq__21001;
var G__21010 = chunk__21002;
var G__21011 = count__21003;
var G__21012 = (i__21004 + 1);
seq__21001 = G__21009;
chunk__21002 = G__21010;
count__21003 = G__21011;
i__21004 = G__21012;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21001);if(cljs.core.truth_(temp__4092__auto__))
{var seq__21001__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21001__$1))
{var c__4010__auto__ = cljs.core.chunk_first(seq__21001__$1);{
var G__21013 = cljs.core.chunk_rest(seq__21001__$1);
var G__21014 = c__4010__auto__;
var G__21015 = cljs.core.count(c__4010__auto__);
var G__21016 = 0;
seq__21001 = G__21013;
chunk__21002 = G__21014;
count__21003 = G__21015;
i__21004 = G__21016;
continue;
}
} else
{var plan_name = cljs.core.first(seq__21001__$1);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name(plan_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__21001,chunk__21002,count__21003,i__21004,plan_name,seq__21001__$1,temp__4092__auto__){
return (function (p__21007){var vec__21008 = p__21007;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21008,0,null);var plan_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21008,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan(plan_name,plan_data);
} else
{return null;
}
});})(seq__21001,chunk__21002,count__21003,i__21004,plan_name,seq__21001__$1,temp__4092__auto__))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__21017 = cljs.core.next(seq__21001__$1);
var G__21018 = null;
var G__21019 = 0;
var G__21020 = 0;
seq__21001 = G__21017;
chunk__21002 = G__21018;
count__21003 = G__21019;
i__21004 = G__21020;
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
bible_plan.plan.load_plans();
bible_plan.plan.annotate_plan_readings_with_days = (function annotate_plan_readings_with_days(plan){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (day_number,readings){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (reading){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reading,cljs.core.constant$keyword$157,day_number);
}),readings);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),plan);
});
bible_plan.plan.reading_day__GT_ = (function reading_day__GT_(annotated_reading,annotated_reading_day){var reading_day_day_number = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$157,cljs.core.first).call(null,annotated_reading_day);var reading_day_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(annotated_reading,cljs.core.constant$keyword$157);return (reading_day_number > reading_day_day_number);
});
bible_plan.plan.reading_book_QMARK_ = (function reading_book_QMARK_(book,reading_day){return cljs.core.some((function start_or_end_in_book_QMARK_(p__21028){var map__21032 = p__21028;var map__21032__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21032))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21032):map__21032);var map__21033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21032__$1,cljs.core.constant$keyword$145);var map__21033__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21033))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21033):map__21033);var s_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21033__$1,cljs.core.constant$keyword$146);var map__21034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21032__$1,cljs.core.constant$keyword$144);var map__21034__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21034))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21034):map__21034);var e_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21034__$1,cljs.core.constant$keyword$146);return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null));
}),reading_day);
});
bible_plan.plan.readings_for_book_in_reading_day = (function readings_for_book_in_reading_day(book,reading_day){return cljs.core.some((function start_or_end_in_book_QMARK_(p__21042){var map__21046 = p__21042;var map__21046__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21046))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21046):map__21046);var reading = map__21046__$1;var map__21047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,cljs.core.constant$keyword$145);var map__21047__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21047))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21047):map__21047);var s_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047__$1,cljs.core.constant$keyword$146);var map__21048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,cljs.core.constant$keyword$144);var map__21048__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21048))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21048):map__21048);var e_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21048__$1,cljs.core.constant$keyword$146);if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null))))
{return reading;
} else
{return null;
}
}),reading_day);
});
bible_plan.plan.contiguous_readings_from = (function contiguous_readings_from(annotated_plan,annotated_reading){var available_reading_days = cljs.core.drop_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.reading_day__GT_,annotated_reading),annotated_plan);var annotated_reading_book = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(annotated_reading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$146], null));var contiguous_book_reading_days = cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.reading_book_QMARK_,annotated_reading_book),available_reading_days);var readings_for_book = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.readings_for_book_in_reading_day,annotated_reading_book),contiguous_book_reading_days);return readings_for_book;
});
bible_plan.plan.book_order = (function book_order(plan){var annotated_plan = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (reading_day){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21049_SHARP_){return cljs.core.select_keys(p1__21049_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$144,cljs.core.constant$keyword$157], null));
}),reading_day);
}),bible_plan.plan.annotate_plan_readings_with_days(plan));var annotated_readings = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,annotated_plan);var G__21055 = annotated_readings;var vec__21056 = G__21055;var annotated_reading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21056,0,null);var next_annotated_readings = cljs.core.nthnext(vec__21056,1);var processed_readings = cljs.core.PersistentHashSet.EMPTY;var book_order__$1 = cljs.core.PersistentVector.EMPTY;var G__21055__$1 = G__21055;var processed_readings__$1 = processed_readings;var book_order__$2 = book_order__$1;while(true){
var vec__21057 = G__21055__$1;var annotated_reading__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21057,0,null);var next_annotated_readings__$1 = cljs.core.nthnext(vec__21057,1);var processed_readings__$2 = processed_readings__$1;var book_order__$3 = book_order__$2;if(cljs.core.not(annotated_reading__$1))
{return book_order__$3;
} else
{if(cljs.core.truth_((processed_readings__$2.cljs$core$IFn$_invoke$arity$1 ? processed_readings__$2.cljs$core$IFn$_invoke$arity$1(annotated_reading__$1) : processed_readings__$2.call(null,annotated_reading__$1))))
{{
var G__21058 = next_annotated_readings__$1;
var G__21059 = processed_readings__$2;
var G__21060 = book_order__$3;
G__21055__$1 = G__21058;
processed_readings__$1 = G__21059;
book_order__$2 = G__21060;
continue;
}
} else
{var contiguous_readings = bible_plan.plan.contiguous_readings_from(annotated_plan,annotated_reading__$1);{
var G__21061 = next_annotated_readings__$1;
var G__21062 = cljs.core.into(processed_readings__$2,contiguous_readings);
var G__21063 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(book_order__$3,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(annotated_reading__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$146], null)));
G__21055__$1 = G__21061;
processed_readings__$1 = G__21062;
book_order__$2 = G__21063;
continue;
}
}
}
break;
}
});
bible_plan.plan.update_vals = (function update_vals(the_map,update_fn){return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__3979__auto__ = (function iter__21072(s__21073){return (new cljs.core.LazySeq(null,(function (){var s__21073__$1 = s__21073;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21073__$1);if(cljs.core.truth_(temp__4092__auto__))
{var s__21073__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21073__$2))
{var c__3977__auto__ = cljs.core.chunk_first(s__21073__$2);var size__3978__auto__ = cljs.core.count(c__3977__auto__);var b__21075 = cljs.core.chunk_buffer(size__3978__auto__);if((function (){var i__21074 = 0;while(true){
if((i__21074 < size__3978__auto__))
{var vec__21078 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3977__auto__,i__21074);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21078,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21078,1,null);cljs.core.chunk_append(b__21075,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(v) : update_fn.call(null,v))], null));
{
var G__21080 = (i__21074 + 1);
i__21074 = G__21080;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21075),iter__21072(cljs.core.chunk_rest(s__21073__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21075),null);
}
} else
{var vec__21079 = cljs.core.first(s__21073__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21079,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21079,1,null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(v) : update_fn.call(null,v))], null),iter__21072(cljs.core.rest(s__21073__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3979__auto__(the_map);
})());
});
bible_plan.plan.group_into_ascending_readings = (function group_into_ascending_readings(readings){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ascending_readings,reference){if(cljs.core.truth_(bible_plan.reference.reference_LT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.last(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ascending_readings,(cljs.core.count(ascending_readings) - 1))),cljs.core.array_seq([reference], 0))))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ascending_readings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(ascending_readings) - 1)], null),cljs.core.conj,reference);
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ascending_readings,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reference], null));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(readings)], null)], null),cljs.core.rest(readings));
});
bible_plan.plan.book_readings = (function book_readings(plan){var _PERCENT_ = (function (){var readings = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,plan);var raw_book_readings = cljs.core.group_by(((function (readings){
return (function reading_start_book(reading){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$146], null));
});})(readings))
,readings);return bible_plan.plan.update_vals(raw_book_readings,bible_plan.plan.group_into_ascending_readings);
})();return _PERCENT_;
});
bible_plan.plan.group_reading_day = (function group_reading_day(raw_reading_day){var original_order = cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$146,cljs.core.constant$keyword$145),raw_reading_day));var grouped_readings = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$146,cljs.core.constant$keyword$145),raw_reading_day);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,original_order,cljs.core.constant$keyword$159,grouped_readings], null);
});
bible_plan.plan.coalesce_reading_day = (function coalesce_reading_day(p__21081){var map__21083 = p__21081;var map__21083__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21083))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21083):map__21083);var grouped_reading_day = map__21083__$1;var book_readings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21083__$1,cljs.core.constant$keyword$159);var book_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21083__$1,cljs.core.constant$keyword$158);return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function merge_reading_book_group(reading_book_group){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bible_plan.reference.merge_refs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(book_readings,reading_book_group));
}),book_order);
});
bible_plan.plan.raw_plan_by_book = (function raw_plan_by_book(book_readings,book_order){var raw_plan = cljs.core.PersistentVector.EMPTY;var book_readings__$1 = book_readings;var G__21089 = book_order;var vec__21090 = G__21089;var book = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21090,0,null);var next_books = cljs.core.nthnext(vec__21090,1);var raw_plan__$1 = raw_plan;var book_readings__$2 = book_readings__$1;var G__21089__$1 = G__21089;while(true){
var raw_plan__$2 = raw_plan__$1;var book_readings__$3 = book_readings__$2;var vec__21091 = G__21089__$1;var book__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21091,0,null);var next_books__$1 = cljs.core.nthnext(vec__21091,1);if(cljs.core.truth_(book__$1))
{var current_book_readings = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(book_readings__$3,book__$1));var next_book_readings = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(book_readings__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book__$1], null),cljs.core.rest);{
var G__21092 = cljs.core.into(raw_plan__$2,current_book_readings);
var G__21093 = next_book_readings;
var G__21094 = next_books__$1;
raw_plan__$1 = G__21092;
book_readings__$2 = G__21093;
G__21089__$1 = G__21094;
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
if(cljs.core.truth_(cljs.core.seq(rest_coll_items)))
{{
var G__21095 = cljs.core.drop((step_size + Math.floor(make_up)),rest_coll_items);
var G__21096 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(partitioned_coll,cljs.core.take((step_size + Math.floor(make_up)),rest_coll_items));
var G__21097 = step_size;
var G__21098 = sub_1_part;
var G__21099 = (sub_1_part + cljs.core.rem(make_up,1));
rest_coll_items = G__21095;
partitioned_coll = G__21096;
step_size = G__21097;
sub_1_part = G__21098;
make_up = G__21099;
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
bible_plan.plan.order_by_book = (function order_by_book(number_of_reading_days,plan){shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Ordering by book"], 0));
var book_order = bible_plan.plan.book_order(plan);var book_readings = bible_plan.plan.book_readings(plan);var raw_plan_by_book = bible_plan.plan.raw_plan_by_book(book_readings,book_order);var raw_reading_days = bible_plan.plan.partition_all_balanced((cljs.core.count(raw_plan_by_book) / number_of_reading_days),raw_plan_by_book);var fixed_raw_reading_days = (((cljs.core.count(raw_reading_days) > number_of_reading_days))?bible_plan.plan.combine_last_two_items(raw_reading_days):raw_reading_days);var grouped_reading_days = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.group_reading_day,fixed_raw_reading_days);var coalesced_reading_days = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.coalesce_reading_day,grouped_reading_days);return coalesced_reading_days;
});
bible_plan.plan.order_by_plan = (function order_by_plan(number_of_reading_days,plan){var raw_reading_days = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (reading_days){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,reading_days);
}),bible_plan.plan.partition_all_balanced((cljs.core.count(plan) / number_of_reading_days),plan));var fixed_raw_reading_days = (((cljs.core.count(plan) > number_of_reading_days))?bible_plan.plan.combine_last_two_items(raw_reading_days):raw_reading_days);var grouped_reading_days = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.group_reading_day,fixed_raw_reading_days);var coalesced_reading_days = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.coalesce_reading_day,grouped_reading_days);return coalesced_reading_days;
});
bible_plan.plan.calculate_plan = (function calculate_plan(p__21100){var map__21102 = p__21100;var map__21102__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21102))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21102):map__21102);var plan_options = map__21102__$1;var books_at_a_time_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102__$1,cljs.core.constant$keyword$160);var skip_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102__$1,cljs.core.constant$keyword$161);var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102__$1,cljs.core.constant$keyword$162);var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102__$1,cljs.core.constant$keyword$163);var base_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102__$1,cljs.core.constant$keyword$164);if(cljs.core.truth_(base_plan))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"base-plan","base-plan",791722590,null)], 0)))].join('')));
}
if(cljs.core.truth_((base_plan.cljs$core$IFn$_invoke$arity$1 ? base_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bible_plan.plan.plans)) : base_plan.call(null,cljs.core.deref(bible_plan.plan.plans)))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"base-plan","base-plan",791722590,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",-564909588,null),new cljs.core.Symbol(null,"plans","plans",-1533783005,null)))], 0)))].join('')));
}
var the_plan = (base_plan.cljs$core$IFn$_invoke$arity$1 ? base_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bible_plan.plan.plans)) : base_plan.call(null,cljs.core.deref(bible_plan.plan.plans)));var start_date__$1 = (cljs.core.truth_(start_date)?start_date:clj_time.core.now());var end_date__$1 = (cljs.core.truth_(end_date)?end_date:clj_time.core.plus.cljs$core$IFn$_invoke$arity$2(start_date__$1,clj_time.core.years(1)));var dates = cljs.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.complement((function (){var or__3291__auto__ = skip_days;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})()),clj_time.core.day_of_week),cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clj_time.core.after_QMARK_,end_date__$1),clj_time.periodic.periodic_seq(start_date__$1,clj_time.core.days(1))));var _ = shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.count(dates)], 0));var the_plan__$1 = (cljs.core.truth_(books_at_a_time_QMARK_)?bible_plan.plan.order_by_book(cljs.core.count(dates),the_plan):bible_plan.plan.order_by_plan(cljs.core.count(dates),the_plan));var ___$1 = shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.count(the_plan__$1)], 0));return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (readings,date){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$165,readings,cljs.core.constant$keyword$166,date], null);
}),the_plan__$1,dates);
});
