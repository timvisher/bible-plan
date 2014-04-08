// Compiled by ClojureScript 0.0-2202
goog.provide('bible_plan.bible');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('shodan.console');
goog.require('shodan.console');
bible_plan.bible.bibles = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
bible_plan.bible.assoc_bible = (function assoc_bible(name,bible_data){return cljs.core.swap_BANG_.call(null,bible_plan.bible.bibles,cljs.core.assoc,name,bible_data);
});
bible_plan.bible.load_bibles = (function load_bibles(){return ajax.core.ajax_request.call(null,"/edn/bibles/bibles.edn",new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function load_available_bibles(p__4971){var vec__4981 = p__4971;var ok = cljs.core.nth.call(null,vec__4981,0,null);var bible_names = cljs.core.nth.call(null,vec__4981,1,null);if(cljs.core.truth_(ok))
{var seq__4982 = cljs.core.seq.call(null,bible_names);var chunk__4983 = null;var count__4984 = 0;var i__4985 = 0;while(true){
if((i__4985 < count__4984))
{var bible_name = cljs.core._nth.call(null,chunk__4983,i__4985);shodan.console.log.call(null,[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name.call(null,bible_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__4982,chunk__4983,count__4984,i__4985,bible_name,vec__4981,ok,bible_names){
return (function (p__4986){var vec__4987 = p__4986;var ok__$1 = cljs.core.nth.call(null,vec__4987,0,null);var bible_data = cljs.core.nth.call(null,vec__4987,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible.call(null,bible_name,bible_data);
} else
{return null;
}
});})(seq__4982,chunk__4983,count__4984,i__4985,bible_name,vec__4981,ok,bible_names))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__4990 = seq__4982;
var G__4991 = chunk__4983;
var G__4992 = count__4984;
var G__4993 = (i__4985 + 1);
seq__4982 = G__4990;
chunk__4983 = G__4991;
count__4984 = G__4992;
i__4985 = G__4993;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__4982);if(temp__4126__auto__)
{var seq__4982__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4982__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__4982__$1);{
var G__4994 = cljs.core.chunk_rest.call(null,seq__4982__$1);
var G__4995 = c__4229__auto__;
var G__4996 = cljs.core.count.call(null,c__4229__auto__);
var G__4997 = 0;
seq__4982 = G__4994;
chunk__4983 = G__4995;
count__4984 = G__4996;
i__4985 = G__4997;
continue;
}
} else
{var bible_name = cljs.core.first.call(null,seq__4982__$1);shodan.console.log.call(null,[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name.call(null,bible_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__4982,chunk__4983,count__4984,i__4985,bible_name,seq__4982__$1,temp__4126__auto__,vec__4981,ok,bible_names){
return (function (p__4988){var vec__4989 = p__4988;var ok__$1 = cljs.core.nth.call(null,vec__4989,0,null);var bible_data = cljs.core.nth.call(null,vec__4989,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible.call(null,bible_name,bible_data);
} else
{return null;
}
});})(seq__4982,chunk__4983,count__4984,i__4985,bible_name,seq__4982__$1,temp__4126__auto__,vec__4981,ok,bible_names))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__4998 = cljs.core.next.call(null,seq__4982__$1);
var G__4999 = null;
var G__5000 = 0;
var G__5001 = 0;
seq__4982 = G__4998;
chunk__4983 = G__4999;
count__4984 = G__5000;
i__4985 = G__5001;
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
}),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
});
bible_plan.bible.load_bibles.call(null);
