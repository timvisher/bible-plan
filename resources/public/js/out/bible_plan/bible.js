// Compiled by ClojureScript 0.0-2202
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
bible_plan.bible.load_bibles = (function load_bibles(){return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3("/edn/bibles/bibles.edn",cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,(function load_available_bibles(p__8719){var vec__8729 = p__8719;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8729,0,null);var bible_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8729,1,null);if(cljs.core.truth_(ok))
{var seq__8730 = cljs.core.seq(bible_names);var chunk__8731 = null;var count__8732 = 0;var i__8733 = 0;while(true){
if((i__8733 < count__8732))
{var bible_name = chunk__8731.cljs$core$IIndexed$_nth$arity$2(null,i__8733);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name(bible_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__8730,chunk__8731,count__8732,i__8733,bible_name,vec__8729,ok,bible_names){
return (function (p__8734){var vec__8735 = p__8734;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8735,0,null);var bible_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8735,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible(bible_name,bible_data);
} else
{return null;
}
});})(seq__8730,chunk__8731,count__8732,i__8733,bible_name,vec__8729,ok,bible_names))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__8738 = seq__8730;
var G__8739 = chunk__8731;
var G__8740 = count__8732;
var G__8741 = (i__8733 + 1);
seq__8730 = G__8738;
chunk__8731 = G__8739;
count__8732 = G__8740;
i__8733 = G__8741;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__8730);if(temp__4126__auto__)
{var seq__8730__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__8730__$1))
{var c__4229__auto__ = cljs.core.chunk_first(seq__8730__$1);{
var G__8742 = cljs.core.chunk_rest(seq__8730__$1);
var G__8743 = c__4229__auto__;
var G__8744 = cljs.core.count(c__4229__auto__);
var G__8745 = 0;
seq__8730 = G__8742;
chunk__8731 = G__8743;
count__8732 = G__8744;
i__8733 = G__8745;
continue;
}
} else
{var bible_name = cljs.core.first(seq__8730__$1);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name(bible_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__8730,chunk__8731,count__8732,i__8733,bible_name,seq__8730__$1,temp__4126__auto__,vec__8729,ok,bible_names){
return (function (p__8736){var vec__8737 = p__8736;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8737,0,null);var bible_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8737,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible(bible_name,bible_data);
} else
{return null;
}
});})(seq__8730,chunk__8731,count__8732,i__8733,bible_name,seq__8730__$1,temp__4126__auto__,vec__8729,ok,bible_names))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__8746 = cljs.core.next(seq__8730__$1);
var G__8747 = null;
var G__8748 = 0;
var G__8749 = 0;
seq__8730 = G__8746;
chunk__8731 = G__8747;
count__8732 = G__8748;
i__8733 = G__8749;
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
