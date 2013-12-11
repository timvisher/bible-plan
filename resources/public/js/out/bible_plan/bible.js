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
bible_plan.bible.load_bibles = (function load_bibles(){return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3("/edn/bibles/bibles.edn",cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,(function load_available_bibles(p__11731){var vec__11741 = p__11731;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11741,0,null);var bible_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11741,1,null);if(cljs.core.truth_(ok))
{var seq__11742 = cljs.core.seq(bible_names);var chunk__11743 = null;var count__11744 = 0;var i__11745 = 0;while(true){
if((i__11745 < count__11744))
{var bible_name = chunk__11743.cljs$core$IIndexed$_nth$arity$2(null,i__11745);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name(bible_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__11742,chunk__11743,count__11744,i__11745,bible_name){
return (function (p__11746){var vec__11747 = p__11746;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11747,0,null);var bible_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11747,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible(bible_name,bible_data);
} else
{return null;
}
});})(seq__11742,chunk__11743,count__11744,i__11745,bible_name))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__11750 = seq__11742;
var G__11751 = chunk__11743;
var G__11752 = count__11744;
var G__11753 = (i__11745 + 1);
seq__11742 = G__11750;
chunk__11743 = G__11751;
count__11744 = G__11752;
i__11745 = G__11753;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11742);if(cljs.core.truth_(temp__4092__auto__))
{var seq__11742__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11742__$1))
{var c__4010__auto__ = cljs.core.chunk_first(seq__11742__$1);{
var G__11754 = cljs.core.chunk_rest(seq__11742__$1);
var G__11755 = c__4010__auto__;
var G__11756 = cljs.core.count(c__4010__auto__);
var G__11757 = 0;
seq__11742 = G__11754;
chunk__11743 = G__11755;
count__11744 = G__11756;
i__11745 = G__11757;
continue;
}
} else
{var bible_name = cljs.core.first(seq__11742__$1);shodan.console.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join('')], 0));
ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3([cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name(bible_name)),cljs.core.str(".edn")].join(''),cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,((function (seq__11742,chunk__11743,count__11744,i__11745,bible_name,seq__11742__$1,temp__4092__auto__){
return (function (p__11748){var vec__11749 = p__11748;var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11749,0,null);var bible_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11749,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible(bible_name,bible_data);
} else
{return null;
}
});})(seq__11742,chunk__11743,count__11744,i__11745,bible_name,seq__11742__$1,temp__4092__auto__))
,cljs.core.constant$keyword$136,ajax.core.edn_format()], null));
{
var G__11758 = cljs.core.next(seq__11742__$1);
var G__11759 = null;
var G__11760 = 0;
var G__11761 = 0;
seq__11742 = G__11758;
chunk__11743 = G__11759;
count__11744 = G__11760;
i__11745 = G__11761;
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
