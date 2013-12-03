// Compiled by ClojureScript 0.0-2075
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
bible_plan.bible.load_bibles = (function load_bibles(){return ajax.core.ajax_request.call(null,"/edn/bibles/bibles.edn",new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function load_available_bibles(p__5639){var vec__5649 = p__5639;var ok = cljs.core.nth.call(null,vec__5649,0,null);var bible_names = cljs.core.nth.call(null,vec__5649,1,null);if(cljs.core.truth_(ok))
{var seq__5650 = cljs.core.seq.call(null,bible_names);var chunk__5651 = null;var count__5652 = 0;var i__5653 = 0;while(true){
if((i__5653 < count__5652))
{var bible_name = cljs.core._nth.call(null,chunk__5651,i__5653);shodan.console.log.call(null,[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name.call(null,bible_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__5650,chunk__5651,count__5652,i__5653,bible_name){
return (function (p__5654){var vec__5655 = p__5654;var ok__$1 = cljs.core.nth.call(null,vec__5655,0,null);var bible_data = cljs.core.nth.call(null,vec__5655,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible.call(null,bible_name,bible_data);
} else
{return null;
}
});})(seq__5650,chunk__5651,count__5652,i__5653,bible_name))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__5658 = seq__5650;
var G__5659 = chunk__5651;
var G__5660 = count__5652;
var G__5661 = (i__5653 + 1);
seq__5650 = G__5658;
chunk__5651 = G__5659;
count__5652 = G__5660;
i__5653 = G__5661;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5650);if(cljs.core.truth_(temp__4092__auto__))
{var seq__5650__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5650__$1))
{var c__4010__auto__ = cljs.core.chunk_first.call(null,seq__5650__$1);{
var G__5662 = cljs.core.chunk_rest.call(null,seq__5650__$1);
var G__5663 = c__4010__auto__;
var G__5664 = cljs.core.count.call(null,c__4010__auto__);
var G__5665 = 0;
seq__5650 = G__5662;
chunk__5651 = G__5663;
count__5652 = G__5664;
i__5653 = G__5665;
continue;
}
} else
{var bible_name = cljs.core.first.call(null,seq__5650__$1);shodan.console.log.call(null,[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name.call(null,bible_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__5650,chunk__5651,count__5652,i__5653,bible_name,seq__5650__$1,temp__4092__auto__){
return (function (p__5656){var vec__5657 = p__5656;var ok__$1 = cljs.core.nth.call(null,vec__5657,0,null);var bible_data = cljs.core.nth.call(null,vec__5657,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible.call(null,bible_name,bible_data);
} else
{return null;
}
});})(seq__5650,chunk__5651,count__5652,i__5653,bible_name,seq__5650__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__5666 = cljs.core.next.call(null,seq__5650__$1);
var G__5667 = null;
var G__5668 = 0;
var G__5669 = 0;
seq__5650 = G__5666;
chunk__5651 = G__5667;
count__5652 = G__5668;
i__5653 = G__5669;
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
