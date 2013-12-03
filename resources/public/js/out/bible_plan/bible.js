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
bible_plan.bible.load_bibles = (function load_bibles(){return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3("/edn/bibles/bibles.edn",cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,(function load_available_bibles(p__11477){var vec__11487 = p__11477;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11487,0,null);var bible_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11487,1,null);if(cljs.core.truth_(ok))
{var seq__11488 = cljs.core.seq(bible_names);var chunk__11489 = null;var count__11490 = 0;var i__11491 = 0;while(true){
if((i__11491 < count__11490))
{var bible_name = chunk__11489.cljs$core$IIndexed$_nth$arity$2(null,i__11491);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name(bible_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__11488,chunk__11489,count__11490,i__11491,bible_name){
return (function (p__11492){var vec__11493 = p__11492;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11493,0,null);var bible_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11493,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible(bible_name,bible_data);
} else
{return null;
}
});})(seq__11488,chunk__11489,count__11490,i__11491,bible_name))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__11496 = seq__11488;
var G__11497 = chunk__11489;
var G__11498 = count__11490;
var G__11499 = (i__11491 + 1);
seq__11488 = G__11496;
chunk__11489 = G__11497;
count__11490 = G__11498;
i__11491 = G__11499;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11488);if(cljs.core.truth_(temp__4092__auto__))
{var seq__11488__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11488__$1))
{var c__4010__auto__ = cljs.core.chunk_first(seq__11488__$1);{
var G__11500 = cljs.core.chunk_rest(seq__11488__$1);
var G__11501 = c__4010__auto__;
var G__11502 = cljs.core.count(c__4010__auto__);
var G__11503 = 0;
seq__11488 = G__11500;
chunk__11489 = G__11501;
count__11490 = G__11502;
i__11491 = G__11503;
continue;
}
} else
{var bible_name = cljs.core.first(seq__11488__$1);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name(bible_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__11488,chunk__11489,count__11490,i__11491,bible_name,seq__11488__$1,temp__4092__auto__){
return (function (p__11494){var vec__11495 = p__11494;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11495,0,null);var bible_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11495,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible(bible_name,bible_data);
} else
{return null;
}
});})(seq__11488,chunk__11489,count__11490,i__11491,bible_name,seq__11488__$1,temp__4092__auto__))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__11504 = cljs.core.next(seq__11488__$1);
var G__11505 = null;
var G__11506 = 0;
var G__11507 = 0;
seq__11488 = G__11504;
chunk__11489 = G__11505;
count__11490 = G__11506;
i__11491 = G__11507;
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
