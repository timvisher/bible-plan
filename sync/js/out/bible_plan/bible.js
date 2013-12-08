// Compiled by ClojureScript 0.0-2075
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
bible_plan.bible.load_bibles = (function load_bibles(){return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3("/edn/bibles/bibles.edn",cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,(function load_available_bibles(p__11503){var vec__11513 = p__11503;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11513,0,null);var bible_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11513,1,null);if(cljs.core.truth_(ok))
{var seq__11514 = cljs.core.seq(bible_names);var chunk__11515 = null;var count__11516 = 0;var i__11517 = 0;while(true){
if((i__11517 < count__11516))
{var bible_name = chunk__11515.cljs$core$IIndexed$_nth$arity$2(null,i__11517);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name(bible_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__11514,chunk__11515,count__11516,i__11517,bible_name){
return (function (p__11518){var vec__11519 = p__11518;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11519,0,null);var bible_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11519,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible(bible_name,bible_data);
} else
{return null;
}
});})(seq__11514,chunk__11515,count__11516,i__11517,bible_name))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__11522 = seq__11514;
var G__11523 = chunk__11515;
var G__11524 = count__11516;
var G__11525 = (i__11517 + 1);
seq__11514 = G__11522;
chunk__11515 = G__11523;
count__11516 = G__11524;
i__11517 = G__11525;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11514);if(cljs.core.truth_(temp__4092__auto__))
{var seq__11514__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11514__$1))
{var c__4010__auto__ = cljs.core.chunk_first(seq__11514__$1);{
var G__11526 = cljs.core.chunk_rest(seq__11514__$1);
var G__11527 = c__4010__auto__;
var G__11528 = cljs.core.count(c__4010__auto__);
var G__11529 = 0;
seq__11514 = G__11526;
chunk__11515 = G__11527;
count__11516 = G__11528;
i__11517 = G__11529;
continue;
}
} else
{var bible_name = cljs.core.first(seq__11514__$1);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name(bible_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__11514,chunk__11515,count__11516,i__11517,bible_name,seq__11514__$1,temp__4092__auto__){
return (function (p__11520){var vec__11521 = p__11520;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11521,0,null);var bible_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11521,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible(bible_name,bible_data);
} else
{return null;
}
});})(seq__11514,chunk__11515,count__11516,i__11517,bible_name,seq__11514__$1,temp__4092__auto__))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__11530 = cljs.core.next(seq__11514__$1);
var G__11531 = null;
var G__11532 = 0;
var G__11533 = 0;
seq__11514 = G__11530;
chunk__11515 = G__11531;
count__11516 = G__11532;
i__11517 = G__11533;
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
bible_plan.bible.load_bibles();
