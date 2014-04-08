// Compiled by ClojureScript 0.0-2202
goog.provide('bible_plan.plan');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('shodan.console');
goog.require('clj_time.periodic');
goog.require('ajax.core');
goog.require('clj_time.core');
goog.require('clj_time.core');
goog.require('shodan.console');
goog.require('bible_plan.reference');
goog.require('clj_time.periodic');
goog.require('ajax.core');
goog.require('bible_plan.reference');
bible_plan.plan.plans = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
bible_plan.plan.assoc_plan = (function assoc_plan(name,plan_data){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bible_plan.plan.plans,cljs.core.assoc,name,plan_data);
});
bible_plan.plan.load_plans = (function load_plans(){return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3("/edn/plans/plans.edn",cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,(function load_available_plans(p__9356){var vec__9366 = p__9356;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9366,0,null);var plan_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9366,1,null);if(cljs.core.truth_(ok))
{var seq__9367 = cljs.core.seq(plan_names);var chunk__9368 = null;var count__9369 = 0;var i__9370 = 0;while(true){
if((i__9370 < count__9369))
{var plan_name = chunk__9368.cljs$core$IIndexed$_nth$arity$2(null,i__9370);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name(plan_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__9367,chunk__9368,count__9369,i__9370,plan_name,vec__9366,ok,plan_names){
return (function (p__9371){var vec__9372 = p__9371;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9372,0,null);var plan_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9372,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan(plan_name,plan_data);
} else
{return null;
}
});})(seq__9367,chunk__9368,count__9369,i__9370,plan_name,vec__9366,ok,plan_names))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__9375 = seq__9367;
var G__9376 = chunk__9368;
var G__9377 = count__9369;
var G__9378 = (i__9370 + 1);
seq__9367 = G__9375;
chunk__9368 = G__9376;
count__9369 = G__9377;
i__9370 = G__9378;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__9367);if(temp__4126__auto__)
{var seq__9367__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9367__$1))
{var c__4229__auto__ = cljs.core.chunk_first(seq__9367__$1);{
var G__9379 = cljs.core.chunk_rest(seq__9367__$1);
var G__9380 = c__4229__auto__;
var G__9381 = cljs.core.count(c__4229__auto__);
var G__9382 = 0;
seq__9367 = G__9379;
chunk__9368 = G__9380;
count__9369 = G__9381;
i__9370 = G__9382;
continue;
}
} else
{var plan_name = cljs.core.first(seq__9367__$1);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading plan: "),cljs.core.str(plan_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/plans/"),cljs.core.str(cljs.core.name(plan_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__9367,chunk__9368,count__9369,i__9370,plan_name,seq__9367__$1,temp__4126__auto__,vec__9366,ok,plan_names){
return (function (p__9373){var vec__9374 = p__9373;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9374,0,null);var plan_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9374,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.plan.assoc_plan(plan_name,plan_data);
} else
{return null;
}
});})(seq__9367,chunk__9368,count__9369,i__9370,plan_name,seq__9367__$1,temp__4126__auto__,vec__9366,ok,plan_names))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__9383 = cljs.core.next(seq__9367__$1);
var G__9384 = null;
var G__9385 = 0;
var G__9386 = 0;
seq__9367 = G__9383;
chunk__9368 = G__9384;
count__9369 = G__9385;
i__9370 = G__9386;
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
bible_plan.plan.annotate_plan_readings_with_days = (function annotate_plan_readings_with_days(plan){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (day_number,readings){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (reading){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reading,cljs.core.constant$keyword$169,day_number);
}),readings);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),plan);
});
bible_plan.plan.reading_day__GT_ = (function reading_day__GT_(annotated_reading,annotated_reading_day){var reading_day_day_number = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$169,cljs.core.first).call(null,annotated_reading_day);var reading_day_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(annotated_reading,cljs.core.constant$keyword$169);return (reading_day_number > reading_day_day_number);
});
bible_plan.plan.reading_book_QMARK_ = (function reading_book_QMARK_(book,reading_day){return cljs.core.some((function start_or_end_in_book_QMARK_(p__9394){var map__9398 = p__9394;var map__9398__$1 = ((cljs.core.seq_QMARK_(map__9398))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9398):map__9398);var map__9399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9398__$1,cljs.core.constant$keyword$160);var map__9399__$1 = ((cljs.core.seq_QMARK_(map__9399))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9399):map__9399);var s_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9399__$1,cljs.core.constant$keyword$158);var map__9400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9398__$1,cljs.core.constant$keyword$159);var map__9400__$1 = ((cljs.core.seq_QMARK_(map__9400))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9400):map__9400);var e_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9400__$1,cljs.core.constant$keyword$158);return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null));
}),reading_day);
});
bible_plan.plan.readings_for_book_in_reading_day = (function readings_for_book_in_reading_day(book,reading_day){return cljs.core.some((function start_or_end_in_book_QMARK_(p__9408){var map__9412 = p__9408;var map__9412__$1 = ((cljs.core.seq_QMARK_(map__9412))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9412):map__9412);var reading = map__9412__$1;var map__9413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9412__$1,cljs.core.constant$keyword$160);var map__9413__$1 = ((cljs.core.seq_QMARK_(map__9413))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9413):map__9413);var s_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9413__$1,cljs.core.constant$keyword$158);var map__9414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9412__$1,cljs.core.constant$keyword$159);var map__9414__$1 = ((cljs.core.seq_QMARK_(map__9414))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9414):map__9414);var e_book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9414__$1,cljs.core.constant$keyword$158);if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,book),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_book,e_book], null))))
{return reading;
} else
{return null;
}
}),reading_day);
});
bible_plan.plan.contiguous_readings_from = (function contiguous_readings_from(annotated_plan,annotated_reading){var available_reading_days = cljs.core.drop_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.reading_day__GT_,annotated_reading),annotated_plan);var annotated_reading_book = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(annotated_reading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,cljs.core.constant$keyword$158], null));var contiguous_book_reading_days = cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.reading_book_QMARK_,annotated_reading_book),available_reading_days);var readings_for_book = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bible_plan.plan.readings_for_book_in_reading_day,annotated_reading_book),contiguous_book_reading_days);return readings_for_book;
});
bible_plan.plan.book_order = (function book_order(plan){var annotated_plan = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (reading_day){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9415_SHARP_){return cljs.core.select_keys(p1__9415_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,cljs.core.constant$keyword$159,cljs.core.constant$keyword$169], null));
}),reading_day);
}),bible_plan.plan.annotate_plan_readings_with_days(plan));var annotated_readings = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,annotated_plan);var G__9421 = annotated_readings;var vec__9422 = G__9421;var annotated_reading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9422,0,null);var next_annotated_readings = cljs.core.nthnext(vec__9422,1);var processed_readings = cljs.core.PersistentHashSet.EMPTY;var book_order__$1 = cljs.core.PersistentVector.EMPTY;var G__9421__$1 = G__9421;var processed_readings__$1 = processed_readings;var book_order__$2 = book_order__$1;while(true){
var vec__9423 = G__9421__$1;var annotated_reading__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9423,0,null);var next_annotated_readings__$1 = cljs.core.nthnext(vec__9423,1);var processed_readings__$2 = processed_readings__$1;var book_order__$3 = book_order__$2;if(cljs.core.not(annotated_reading__$1))
{return book_order__$3;
} else
{if(cljs.core.truth_((processed_readings__$2.cljs$core$IFn$_invoke$arity$1 ? processed_readings__$2.cljs$core$IFn$_invoke$arity$1(annotated_reading__$1) : processed_readings__$2.call(null,annotated_reading__$1))))
{{
var G__9424 = next_annotated_readings__$1;
var G__9425 = processed_readings__$2;
var G__9426 = book_order__$3;
G__9421__$1 = G__9424;
processed_readings__$1 = G__9425;
book_order__$2 = G__9426;
continue;
}
} else
{var contiguous_readings = bible_plan.plan.contiguous_readings_from(annotated_plan,annotated_reading__$1);{
var G__9427 = next_annotated_readings__$1;
var G__9428 = cljs.core.into(processed_readings__$2,contiguous_readings);
var G__9429 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(book_order__$3,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(annotated_reading__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,cljs.core.constant$keyword$158], null)));
G__9421__$1 = G__9427;
processed_readings__$1 = G__9428;
book_order__$2 = G__9429;
continue;
}
}
}
break;
}
});
bible_plan.plan.update_vals = (function update_vals(the_map,update_fn){return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4198__auto__ = (function iter__9438(s__9439){return (new cljs.core.LazySeq(null,(function (){var s__9439__$1 = s__9439;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9439__$1);if(temp__4126__auto__)
{var s__9439__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9439__$2))
{var c__4196__auto__ = cljs.core.chunk_first(s__9439__$2);var size__4197__auto__ = cljs.core.count(c__4196__auto__);var b__9441 = cljs.core.chunk_buffer(size__4197__auto__);if((function (){var i__9440 = 0;while(true){
if((i__9440 < size__4197__auto__))
{var vec__9444 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4196__auto__,i__9440);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9444,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9444,1,null);cljs.core.chunk_append(b__9441,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(v) : update_fn.call(null,v))], null));
{
var G__9446 = (i__9440 + 1);
i__9440 = G__9446;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9441),iter__9438(cljs.core.chunk_rest(s__9439__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9441),null);
}
} else
{var vec__9445 = cljs.core.first(s__9439__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9445,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9445,1,null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(v) : update_fn.call(null,v))], null),iter__9438(cljs.core.rest(s__9439__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__(the_map);
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
return (function reading_start_book(reading){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reading,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,cljs.core.constant$keyword$158], null));
});})(readings))
,readings);return bible_plan.plan.update_vals(raw_book_readings,bible_plan.plan.group_into_ascending_readings);
})();return _PERCENT_;
});
bible_plan.plan.group_reading_day = (function group_reading_day(raw_reading_day){var original_order = cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$158,cljs.core.constant$keyword$160),raw_reading_day));var grouped_readings = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$158,cljs.core.constant$keyword$160),raw_reading_day);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$170,original_order,cljs.core.constant$keyword$171,grouped_readings], null);
});
bible_plan.plan.coalesce_reading_day = (function coalesce_reading_day(p__9447){var map__9449 = p__9447;var map__9449__$1 = ((cljs.core.seq_QMARK_(map__9449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9449):map__9449);var grouped_reading_day = map__9449__$1;var book_readings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9449__$1,cljs.core.constant$keyword$171);var book_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9449__$1,cljs.core.constant$keyword$170);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__9449,map__9449__$1,grouped_reading_day,book_readings,book_order){
return (function merge_reading_book_group(reading_book_group){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bible_plan.reference.merge_refs,cljs.core.get.cljs$core$IFn$_invoke$arity$2(book_readings,reading_book_group));
});})(map__9449,map__9449__$1,grouped_reading_day,book_readings,book_order))
,book_order);
});
bible_plan.plan.raw_plan_by_book = (function raw_plan_by_book(book_readings,book_order){var raw_plan = cljs.core.PersistentVector.EMPTY;var book_readings__$1 = book_readings;var G__9455 = book_order;var vec__9456 = G__9455;var book = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9456,0,null);var next_books = cljs.core.nthnext(vec__9456,1);var raw_plan__$1 = raw_plan;var book_readings__$2 = book_readings__$1;var G__9455__$1 = G__9455;while(true){
var raw_plan__$2 = raw_plan__$1;var book_readings__$3 = book_readings__$2;var vec__9457 = G__9455__$1;var book__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9457,0,null);var next_books__$1 = cljs.core.nthnext(vec__9457,1);if(cljs.core.truth_(book__$1))
{var current_book_readings = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(book_readings__$3,book__$1));var next_book_readings = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(book_readings__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [book__$1], null),cljs.core.rest);{
var G__9458 = cljs.core.into(raw_plan__$2,current_book_readings);
var G__9459 = next_book_readings;
var G__9460 = next_books__$1;
raw_plan__$1 = G__9458;
book_readings__$2 = G__9459;
G__9455__$1 = G__9460;
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
var G__9461 = cljs.core.drop((step_size + Math.floor(make_up)),rest_coll_items);
var G__9462 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(partitioned_coll,cljs.core.take((step_size + Math.floor(make_up)),rest_coll_items));
var G__9463 = step_size;
var G__9464 = sub_1_part;
var G__9465 = (sub_1_part + cljs.core.rem(make_up,1));
rest_coll_items = G__9461;
partitioned_coll = G__9462;
step_size = G__9463;
sub_1_part = G__9464;
make_up = G__9465;
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
bible_plan.plan.calculate_plan = (function calculate_plan(p__9466){var map__9468 = p__9466;var map__9468__$1 = ((cljs.core.seq_QMARK_(map__9468))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9468):map__9468);var plan_options = map__9468__$1;var books_at_a_time_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9468__$1,cljs.core.constant$keyword$172);var skip_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9468__$1,cljs.core.constant$keyword$173);var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9468__$1,cljs.core.constant$keyword$174);var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9468__$1,cljs.core.constant$keyword$175);var base_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9468__$1,cljs.core.constant$keyword$176);if(cljs.core.truth_(base_plan))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"base-plan","base-plan",791722590,null)], 0)))].join('')));
}
if(cljs.core.truth_((base_plan.cljs$core$IFn$_invoke$arity$1 ? base_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bible_plan.plan.plans)) : base_plan.call(null,cljs.core.deref(bible_plan.plan.plans)))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"base-plan","base-plan",791722590,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",-564909588,null),new cljs.core.Symbol(null,"plans","plans",-1533783005,null)))], 0)))].join('')));
}
var the_plan = (base_plan.cljs$core$IFn$_invoke$arity$1 ? base_plan.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bible_plan.plan.plans)) : base_plan.call(null,cljs.core.deref(bible_plan.plan.plans)));var start_date__$1 = (cljs.core.truth_(start_date)?start_date:clj_time.core.now());var end_date__$1 = (cljs.core.truth_(end_date)?end_date:clj_time.core.plus.cljs$core$IFn$_invoke$arity$2(start_date__$1,clj_time.core.years(1)));var dates = cljs.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.complement((function (){var or__3481__auto__ = skip_days;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})()),clj_time.core.day_of_week),cljs.core.take_while(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clj_time.core.after_QMARK_,end_date__$1),clj_time.periodic.periodic_seq(start_date__$1,clj_time.core.days(1))));var _ = shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.count(dates)], 0));var the_plan__$1 = (cljs.core.truth_(books_at_a_time_QMARK_)?bible_plan.plan.order_by_book(cljs.core.count(dates),the_plan):bible_plan.plan.order_by_plan(cljs.core.count(dates),the_plan));var ___$1 = shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.count(the_plan__$1)], 0));return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (the_plan,start_date__$1,end_date__$1,dates,_,the_plan__$1,___$1,map__9468,map__9468__$1,plan_options,books_at_a_time_QMARK_,skip_days,end_date,start_date,base_plan){
return (function (readings,date){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$166,readings,cljs.core.constant$keyword$165,date], null);
});})(the_plan,start_date__$1,end_date__$1,dates,_,the_plan__$1,___$1,map__9468,map__9468__$1,plan_options,books_at_a_time_QMARK_,skip_days,end_date,start_date,base_plan))
,the_plan__$1,dates);
});
