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
bible_plan.plan.load_plans = (function load_plans(){return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3("/edn/plans/plans.edn",cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,(function load_available_plans(p__13077){var vec__13087 = p__13077;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087,0,null);var plan_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087,1,null);if(cljs.core.truth_(ok))
{var seq__13088 = cljs.core.seq(plan_names);var chunk__13089 = null;var count__13090 = 0;var i__13091 = 0;while(true){
if((i__13091 < count__13090))
{var plan_name = chunk__13089.cljs$core$IIndexed$_nth$arity$2(null,i__13091);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name(plan_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__13088,chunk__13089,count__13090,i__13091,plan_name){
return (function (p__13092){var vec__13093 = p__13092;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,0,null);var plan_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan(plan_name,plan_data);
} else
{return null;
}
});})(seq__13088,chunk__13089,count__13090,i__13091,plan_name))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__13096 = seq__13088;
var G__13097 = chunk__13089;
var G__13098 = count__13090;
var G__13099 = (i__13091 + 1);
seq__13088 = G__13096;
chunk__13089 = G__13097;
count__13090 = G__13098;
i__13091 = G__13099;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13088);if(cljs.core.truth_(temp__4092__auto__))
{var seq__13088__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13088__$1))
{var c__4010__auto__ = cljs.core.chunk_first(seq__13088__$1);{
var G__13100 = cljs.core.chunk_rest(seq__13088__$1);
var G__13101 = c__4010__auto__;
var G__13102 = cljs.core.count(c__4010__auto__);
var G__13103 = 0;
seq__13088 = G__13100;
chunk__13089 = G__13101;
count__13090 = G__13102;
i__13091 = G__13103;
continue;
}
} else
{var plan_name = cljs.core.first(seq__13088__$1);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name(plan_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__13088,chunk__13089,count__13090,i__13091,plan_name,seq__13088__$1,temp__4092__auto__){
return (function (p__13094){var vec__13095 = p__13094;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13095,0,null);var plan_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13095,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan(plan_name,plan_data);
} else
{return null;
}
});})(seq__13088,chunk__13089,count__13090,i__13091,plan_name,seq__13088__$1,temp__4092__auto__))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__13104 = cljs.core.next(seq__13088__$1);
var G__13105 = null;
var G__13106 = 0;
var G__13107 = 0;
seq__13088 = G__13104;
chunk__13089 = G__13105;
count__13090 = G__13106;
i__13091 = G__13107;
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
bible_plan.plan.reading_book_QMARK_ = (function reading_book_QMARK_(book,reading_day){return cljs.core.some((function start_or_end_in_book_QMARK_(p__13115){var map__13119 = p__13115;var map__13119__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13119))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13119):map__13119);var map__13120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13119__$1,cljs.core.constant$keyword$145);var map__13120__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13120))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13120):map__13120);var s_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13120__$1,cljs.core.constant$keyword$146);var map__13121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13119__$1,cljs.core.constant$keyword$144);var map__13121__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13121))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13121):map__13121);var e_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13121__$1,cljs.core.constant$keyword$146);return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null));
}),reading_day);
});
bible_plan.plan.readings_for_book_in_reading_day = (function readings_for_book_in_reading_day(book,reading_day){return cljs.core.some((function start_or_end_in_book_QMARK_(p__13129){var map__13133 = p__13129;var map__13133__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13133))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13133):map__13133);var reading = map__13133__$1;var map__13134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13133__$1,cljs.core.constant$keyword$145);var map__13134__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13134))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13134):map__13134);var s_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13134__$1,cljs.core.constant$keyword$146);var map__13135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13133__$1,cljs.core.constant$keyword$144);var map__13135__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13135))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13135):map__13135);var e_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13135__$1,cljs.core.constant$keyword$146);if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null))))
{return reading;
} else
{return null;
}
}),reading_day);
});
bible_plan.plan.contiguous_readings_from = (function contiguous_readings_from(annotated_plan,annotated_reading){var available_reading_days = cljs.core.drop_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.reading_day__GT_,annotated_reading),annotated_plan);var annotated_reading_book = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(annotated_reading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$146], null));var contiguous_book_reading_days = cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.reading_book_QMARK_,annotated_reading_book),available_reading_days);var readings_for_book = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.readings_for_book_in_reading_day,annotated_reading_book),contiguous_book_reading_days);return readings_for_book;
});
bible_plan.plan.book_order = (function book_order(plan){var annotated_plan = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (reading_day){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13136_SHARP_){return cljs.core.select_keys(p1__13136_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$144,cljs.core.constant$keyword$150], null));
}),reading_day);
}),bible_plan.plan.annotate_plan_readings_with_days(plan));var annotated_readings = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,annotated_plan);var G__13142 = annotated_readings;var vec__13143 = G__13142;var annotated_reading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13143,0,null);var next_annotated_readings = cljs.core.nthnext(vec__13143,1);var processed_readings = cljs.core.PersistentHashSet.EMPTY;var book_order__$1 = cljs.core.PersistentVector.EMPTY;var G__13142__$1 = G__13142;var processed_readings__$1 = processed_readings;var book_order__$2 = book_order__$1;while(true){
var vec__13144 = G__13142__$1;var annotated_reading__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13144,0,null);var next_annotated_readings__$1 = cljs.core.nthnext(vec__13144,1);var processed_readings__$2 = processed_readings__$1;var book_order__$3 = book_order__$2;if(cljs.core.not(annotated_reading__$1))
{return book_order__$3;
} else
{if(cljs.core.truth_((processed_readings__$2.cljs$core$IFn$_invoke$arity$1 ? processed_readings__$2.cljs$core$IFn$_invoke$arity$1(annotated_reading__$1) : processed_readings__$2.call(null,annotated_reading__$1))))
{{
var G__13145 = next_annotated_readings__$1;
var G__13146 = processed_readings__$2;
var G__13147 = book_order__$3;
G__13142__$1 = G__13145;
processed_readings__$1 = G__13146;
book_order__$2 = G__13147;
continue;
}
} else
{var contiguous_readings = bible_plan.plan.contiguous_readings_from(annotated_plan,annotated_reading__$1);{
var G__13148 = next_annotated_readings__$1;
var G__13149 = cljs.core.into(processed_readings__$2,contiguous_readings);
var G__13150 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(book_order__$3,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(annotated_reading__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,cljs.core.constant$keyword$146], null)));
G__13142__$1 = G__13148;
processed_readings__$1 = G__13149;
book_order__$2 = G__13150;
continue;
}
}
}
break;
}
});
bible_plan.plan.update_vals = (function update_vals(the_map,update_fn){return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__3979__auto__ = (function iter__13159(s__13160){return (new cljs.core.LazySeq(null,(function (){var s__13160__$1 = s__13160;while(true){
var temp__4092__auto__ = cljs.core.seq(s__13160__$1);if(cljs.core.truth_(temp__4092__auto__))
{var s__13160__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__13160__$2))
{var c__3977__auto__ = cljs.core.chunk_first(s__13160__$2);var size__3978__auto__ = cljs.core.count(c__3977__auto__);var b__13162 = cljs.core.chunk_buffer(size__3978__auto__);if((function (){var i__13161 = 0;while(true){
if((i__13161 < size__3978__auto__))
{var vec__13165 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3977__auto__,i__13161);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13165,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13165,1,null);cljs.core.chunk_append(b__13162,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(v) : update_fn.call(null,v))], null));
{
var G__13167 = (i__13161 + 1);
i__13161 = G__13167;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__13162),iter__13159(cljs.core.chunk_rest(s__13160__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__13162),null);
}
} else
{var vec__13166 = cljs.core.first(s__13160__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13166,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13166,1,null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(v) : update_fn.call(null,v))], null),iter__13159(cljs.core.rest(s__13160__$2)));
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
bible_plan.plan.coalesce_reading_day = (function coalesce_reading_day(p__13168){var map__13170 = p__13168;var map__13170__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13170))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13170):map__13170);var grouped_reading_day = map__13170__$1;var book_readings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13170__$1,cljs.core.constant$keyword$152);var book_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13170__$1,cljs.core.constant$keyword$151);return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function merge_reading_book_group(reading_book_group){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bible_plan.reference.merge_refs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(book_readings,reading_book_group));
}),book_order);
});
bible_plan.plan.raw_plan_by_book = (function raw_plan_by_book(book_readings,book_order){var raw_plan = cljs.core.PersistentVector.EMPTY;var book_readings__$1 = book_readings;var G__13176 = book_order;var vec__13177 = G__13176;var book = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13177,0,null);var next_books = cljs.core.nthnext(vec__13177,1);var raw_plan__$1 = raw_plan;var book_readings__$2 = book_readings__$1;var G__13176__$1 = G__13176;while(true){
var raw_plan__$2 = raw_plan__$1;var book_readings__$3 = book_readings__$2;var vec__13178 = G__13176__$1;var book__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13178,0,null);var next_books__$1 = cljs.core.nthnext(vec__13178,1);if(cljs.core.truth_(book__$1))
{var current_book_readings = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(book_readings__$3,book__$1));var next_book_readings = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(book_readings__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book__$1], null),cljs.core.rest);{
var G__13179 = cljs.core.into(raw_plan__$2,current_book_readings);
var G__13180 = next_book_readings;
var G__13181 = next_books__$1;
raw_plan__$1 = G__13179;
book_readings__$2 = G__13180;
G__13176__$1 = G__13181;
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
var G__13182 = cljs.core.drop((step_size + Math.floor(make_up)),rest_coll_items);
var G__13183 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(partitioned_coll,cljs.core.take((step_size + Math.floor(make_up)),rest_coll_items));
var G__13184 = step_size;
var G__13185 = sub_1_part;
var G__13186 = (sub_1_part + cljs.core.rem(make_up,1));
rest_coll_items = G__13182;
partitioned_coll = G__13183;
step_size = G__13184;
sub_1_part = G__13185;
make_up = G__13186;
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
bible_plan.plan.calculate_plan = (function calculate_plan(p__13187){var map__13189 = p__13187;var map__13189__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__13189))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13189):map__13189);var plan_options = map__13189__$1;var books_at_a_time_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13189__$1,cljs.core.constant$keyword$153);var skip_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13189__$1,cljs.core.constant$keyword$154);var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13189__$1,cljs.core.constant$keyword$155);var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13189__$1,cljs.core.constant$keyword$156);var base_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13189__$1,cljs.core.constant$keyword$157);if(cljs.core.truth_(base_plan))
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
