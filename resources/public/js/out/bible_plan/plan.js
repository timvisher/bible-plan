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
bible_plan.plan.load_plans = (function load_plans(){return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3("/edn/plans/plans.edn",cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,(function load_available_plans(p__21926){var vec__21936 = p__21926;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21936,0,null);var plan_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21936,1,null);if(cljs.core.truth_(ok))
{var seq__21937 = cljs.core.seq(plan_names);var chunk__21938 = null;var count__21939 = 0;var i__21940 = 0;while(true){
if((i__21940 < count__21939))
{var plan_name = chunk__21938.cljs$core$IIndexed$_nth$arity$2(null,i__21940);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name(plan_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__21937,chunk__21938,count__21939,i__21940,plan_name){
return (function (p__21941){var vec__21942 = p__21941;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21942,0,null);var plan_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21942,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan(plan_name,plan_data);
} else
{return null;
}
});})(seq__21937,chunk__21938,count__21939,i__21940,plan_name))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__21945 = seq__21937;
var G__21946 = chunk__21938;
var G__21947 = count__21939;
var G__21948 = (i__21940 + 1);
seq__21937 = G__21945;
chunk__21938 = G__21946;
count__21939 = G__21947;
i__21940 = G__21948;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21937);if(cljs.core.truth_(temp__4092__auto__))
{var seq__21937__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21937__$1))
{var c__4010__auto__ = cljs.core.chunk_first(seq__21937__$1);{
var G__21949 = cljs.core.chunk_rest(seq__21937__$1);
var G__21950 = c__4010__auto__;
var G__21951 = cljs.core.count(c__4010__auto__);
var G__21952 = 0;
seq__21937 = G__21949;
chunk__21938 = G__21950;
count__21939 = G__21951;
i__21940 = G__21952;
continue;
}
} else
{var plan_name = cljs.core.first(seq__21937__$1);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name(plan_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__21937,chunk__21938,count__21939,i__21940,plan_name,seq__21937__$1,temp__4092__auto__){
return (function (p__21943){var vec__21944 = p__21943;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21944,0,null);var plan_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21944,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan(plan_name,plan_data);
} else
{return null;
}
});})(seq__21937,chunk__21938,count__21939,i__21940,plan_name,seq__21937__$1,temp__4092__auto__))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__21953 = cljs.core.next(seq__21937__$1);
var G__21954 = null;
var G__21955 = 0;
var G__21956 = 0;
seq__21937 = G__21953;
chunk__21938 = G__21954;
count__21939 = G__21955;
i__21940 = G__21956;
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
bible_plan.plan.annotate_plan_readings_with_days = (function annotate_plan_readings_with_days(plan){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (day_number,readings){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (reading){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reading,cljs.core.constant$keyword$150,day_number);
}),readings);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),plan);
});
bible_plan.plan.reading_day__GT_ = (function reading_day__GT_(annotated_reading,annotated_reading_day){var reading_day_day_number = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$150,cljs.core.first).call(null,annotated_reading_day);var reading_day_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(annotated_reading,cljs.core.constant$keyword$150);return (reading_day_number > reading_day_day_number);
});
bible_plan.plan.reading_book_QMARK_ = (function reading_book_QMARK_(book,reading_day){return cljs.core.some((function start_or_end_in_book_QMARK_(p__21964){var map__21968 = p__21964;var map__21968__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21968))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21968):map__21968);var map__21969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21968__$1,cljs.core.constant$keyword$145);var map__21969__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21969))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21969):map__21969);var s_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21969__$1,cljs.core.constant$keyword$146);var map__21970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21968__$1,cljs.core.constant$keyword$144);var map__21970__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21970))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21970):map__21970);var e_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21970__$1,cljs.core.constant$keyword$146);return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null));
}),reading_day);
});
bible_plan.plan.readings_for_book_in_reading_day = (function readings_for_book_in_reading_day(book,reading_day){return cljs.core.some((function start_or_end_in_book_QMARK_(p__21978){var map__21982 = p__21978;var map__21982__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21982))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21982):map__21982);var reading = map__21982__$1;var map__21983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21982__$1,cljs.core.constant$keyword$145);var map__21983__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21983))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21983):map__21983);var s_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21983__$1,cljs.core.constant$keyword$146);var map__21984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21982__$1,cljs.core.constant$keyword$144);var map__21984__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__21984))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21984):map__21984);var e_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21984__$1,cljs.core.constant$keyword$146);if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null))))
{return reading;
} else
{return null;
}
}),reading_day);
});
bible_plan.plan.contiguous_readings_from = (function contiguous_readings_from(annotated_plan,annotated_reading){var available_reading_days = cljs.core.drop_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.reading_day__GT_,annotated_reading),annotated_plan);var annotated_reading_book = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(annotated_reading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$146], null));var contiguous_book_reading_days = cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.reading_book_QMARK_,annotated_reading_book),available_reading_days);var readings_for_book = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.readings_for_book_in_reading_day,annotated_reading_book),contiguous_book_reading_days);return readings_for_book;
});
bible_plan.plan.book_order = (function book_order(plan){var annotated_plan = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (reading_day){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21985_SHARP_){return cljs.core.select_keys(p1__21985_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$144,cljs.core.constant$keyword$150], null));
}),reading_day);
}),bible_plan.plan.annotate_plan_readings_with_days(plan));var annotated_readings = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,annotated_plan);var G__21991 = annotated_readings;var vec__21992 = G__21991;var annotated_reading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21992,0,null);var next_annotated_readings = cljs.core.nthnext(vec__21992,1);var processed_readings = cljs.core.PersistentHashSet.EMPTY;var book_order__$1 = cljs.core.PersistentVector.EMPTY;var G__21991__$1 = G__21991;var processed_readings__$1 = processed_readings;var book_order__$2 = book_order__$1;while(true){
var vec__21993 = G__21991__$1;var annotated_reading__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21993,0,null);var next_annotated_readings__$1 = cljs.core.nthnext(vec__21993,1);var processed_readings__$2 = processed_readings__$1;var book_order__$3 = book_order__$2;if(cljs.core.not(annotated_reading__$1))
{return book_order__$3;
} else
{if(cljs.core.truth_((processed_readings__$2.cljs$core$IFn$_invoke$arity$1 ? processed_readings__$2.cljs$core$IFn$_invoke$arity$1(annotated_reading__$1) : processed_readings__$2.call(null,annotated_reading__$1))))
{{
var G__21994 = next_annotated_readings__$1;
var G__21995 = processed_readings__$2;
var G__21996 = book_order__$3;
G__21991__$1 = G__21994;
processed_readings__$1 = G__21995;
book_order__$2 = G__21996;
continue;
}
} else
{var contiguous_readings = bible_plan.plan.contiguous_readings_from(annotated_plan,annotated_reading__$1);{
var G__21997 = next_annotated_readings__$1;
var G__21998 = cljs.core.into(processed_readings__$2,contiguous_readings);
var G__21999 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(book_order__$3,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(annotated_reading__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$146], null)));
G__21991__$1 = G__21997;
processed_readings__$1 = G__21998;
book_order__$2 = G__21999;
continue;
}
}
}
break;
}
});
bible_plan.plan.update_vals = (function update_vals(the_map,update_fn){return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__3979__auto__ = (function iter__22008(s__22009){return (new cljs.core.LazySeq(null,(function (){var s__22009__$1 = s__22009;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22009__$1);if(cljs.core.truth_(temp__4092__auto__))
{var s__22009__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22009__$2))
{var c__3977__auto__ = cljs.core.chunk_first(s__22009__$2);var size__3978__auto__ = cljs.core.count(c__3977__auto__);var b__22011 = cljs.core.chunk_buffer(size__3978__auto__);if((function (){var i__22010 = 0;while(true){
if((i__22010 < size__3978__auto__))
{var vec__22014 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3977__auto__,i__22010);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22014,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22014,1,null);cljs.core.chunk_append(b__22011,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(v) : update_fn.call(null,v))], null));
{
var G__22016 = (i__22010 + 1);
i__22010 = G__22016;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22011),iter__22008(cljs.core.chunk_rest(s__22009__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22011),null);
}
} else
{var vec__22015 = cljs.core.first(s__22009__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22015,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22015,1,null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(v) : update_fn.call(null,v))], null),iter__22008(cljs.core.rest(s__22009__$2)));
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
bible_plan.plan.group_reading_day = (function group_reading_day(raw_reading_day){var original_order = cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$146,cljs.core.constant$keyword$145),raw_reading_day));var grouped_readings = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$146,cljs.core.constant$keyword$145),raw_reading_day);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,original_order,cljs.core.constant$keyword$152,grouped_readings], null);
});
bible_plan.plan.coalesce_reading_day = (function coalesce_reading_day(p__22017){var map__22019 = p__22017;var map__22019__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__22019))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22019):map__22019);var grouped_reading_day = map__22019__$1;var book_readings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22019__$1,cljs.core.constant$keyword$152);var book_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22019__$1,cljs.core.constant$keyword$151);return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function merge_reading_book_group(reading_book_group){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bible_plan.reference.merge_refs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(book_readings,reading_book_group));
}),book_order);
});
bible_plan.plan.raw_plan_by_book = (function raw_plan_by_book(book_readings,book_order){var raw_plan = cljs.core.PersistentVector.EMPTY;var book_readings__$1 = book_readings;var G__22025 = book_order;var vec__22026 = G__22025;var book = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22026,0,null);var next_books = cljs.core.nthnext(vec__22026,1);var raw_plan__$1 = raw_plan;var book_readings__$2 = book_readings__$1;var G__22025__$1 = G__22025;while(true){
var raw_plan__$2 = raw_plan__$1;var book_readings__$3 = book_readings__$2;var vec__22027 = G__22025__$1;var book__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22027,0,null);var next_books__$1 = cljs.core.nthnext(vec__22027,1);if(cljs.core.truth_(book__$1))
{var current_book_readings = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(book_readings__$3,book__$1));var next_book_readings = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(book_readings__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book__$1], null),cljs.core.rest);{
var G__22028 = cljs.core.into(raw_plan__$2,current_book_readings);
var G__22029 = next_book_readings;
var G__22030 = next_books__$1;
raw_plan__$1 = G__22028;
book_readings__$2 = G__22029;
G__22025__$1 = G__22030;
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
var G__22031 = cljs.core.drop((step_size + Math.floor(make_up)),rest_coll_items);
var G__22032 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(partitioned_coll,cljs.core.take((step_size + Math.floor(make_up)),rest_coll_items));
var G__22033 = step_size;
var G__22034 = sub_1_part;
var G__22035 = (sub_1_part + cljs.core.rem(make_up,1));
rest_coll_items = G__22031;
partitioned_coll = G__22032;
step_size = G__22033;
sub_1_part = G__22034;
make_up = G__22035;
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
bible_plan.plan.calculate_plan = (function calculate_plan(p__22036){var map__22038 = p__22036;var map__22038__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__22038))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22038):map__22038);var plan_options = map__22038__$1;var books_at_a_time_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22038__$1,cljs.core.constant$keyword$153);var skip_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22038__$1,cljs.core.constant$keyword$154);var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22038__$1,cljs.core.constant$keyword$155);var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22038__$1,cljs.core.constant$keyword$156);var base_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22038__$1,cljs.core.constant$keyword$157);if(cljs.core.truth_(base_plan))
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
})()),clj_time.core.day_of_week),cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clj_time.core.after_QMARK_,end_date__$1),clj_time.periodic.periodic_seq(start_date__$1,clj_time.core.days(1))));var _ = shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.count(dates)], 0));var the_plan__$1 = (cljs.core.truth_(books_at_a_time_QMARK_)?bible_plan.plan.order_by_book(cljs.core.count(dates),the_plan):bible_plan.plan.order_by_plan(cljs.core.count(dates),the_plan));var ___$1 = shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.count(the_plan__$1)], 0));return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (readings,date){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,readings,cljs.core.constant$keyword$159,date], null);
}),the_plan__$1,dates);
});
