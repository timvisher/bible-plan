// Compiled by ClojureScript 0.0-2138
goog.provide('bible_plan.bible');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('shodan.console');
goog.require('shodan.console');
bible_plan.bible.bibles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
bible_plan.bible.assoc_bible = (function assoc_bible(name,bible_data){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bible_plan.bible.bibles,cljs.core.assoc,name,bible_data);
});
bible_plan.bible.load_bibles = (function load_bibles(){return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3("/edn/bibles/bibles.edn",cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,(function load_available_bibles(p__8556){var vec__8566 = p__8556;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8566,0,null);var bible_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8566,1,null);if(cljs.core.truth_(ok))
{var seq__8567 = cljs.core.seq(bible_names);var chunk__8568 = null;var count__8569 = 0;var i__8570 = 0;while(true){
if((i__8570 < count__8569))
{var bible_name = chunk__8568.cljs$core$IIndexed$_nth$arity$2(null,i__8570);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name(bible_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,((function (seq__8567,chunk__8568,count__8569,i__8570,bible_name){
return (function (p__8571){var vec__8572 = p__8571;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8572,0,null);var bible_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8572,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible(bible_name,bible_data);
} else
{return null;
}
});})(seq__8567,chunk__8568,count__8569,i__8570,bible_name))
,cljs.core.constant$keyword$131,ajax.core.edn_format()], null));
{
var G__8575 = seq__8567;
var G__8576 = chunk__8568;
var G__8577 = count__8569;
var G__8578 = (i__8570 + 1);
seq__8567 = G__8575;
chunk__8568 = G__8576;
count__8569 = G__8577;
i__8570 = G__8578;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__8567);if(temp__4092__auto__)
{var seq__8567__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__8567__$1))
{var c__4150__auto__ = cljs.core.chunk_first(seq__8567__$1);{
var G__8579 = cljs.core.chunk_rest(seq__8567__$1);
var G__8580 = c__4150__auto__;
var G__8581 = cljs.core.count(c__4150__auto__);
var G__8582 = 0;
seq__8567 = G__8579;
chunk__8568 = G__8580;
count__8569 = G__8581;
i__8570 = G__8582;
continue;
}
} else
{var bible_name = cljs.core.first(seq__8567__$1);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name(bible_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,((function (seq__8567,chunk__8568,count__8569,i__8570,bible_name,seq__8567__$1,temp__4092__auto__){
return (function (p__8573){var vec__8574 = p__8573;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8574,0,null);var bible_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8574,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible(bible_name,bible_data);
} else
{return null;
}
});})(seq__8567,chunk__8568,count__8569,i__8570,bible_name,seq__8567__$1,temp__4092__auto__))
,cljs.core.constant$keyword$131,ajax.core.edn_format()], null));
{
var G__8583 = cljs.core.next(seq__8567__$1);
var G__8584 = null;
var G__8585 = 0;
var G__8586 = 0;
seq__8567 = G__8583;
chunk__8568 = G__8584;
count__8569 = G__8585;
i__8570 = G__8586;
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
bible_plan.bible.load_bibles();
