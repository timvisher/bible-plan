// Compiled by ClojureScript 0.0-2138
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
bible_plan.bible.load_bibles = (function load_bibles(){return ajax.core.ajax_request.call(null,"/edn/bibles/bibles.edn",new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function load_available_bibles(p__4860){var vec__4870 = p__4860;var ok = cljs.core.nth.call(null,vec__4870,0,null);var bible_names = cljs.core.nth.call(null,vec__4870,1,null);if(cljs.core.truth_(ok))
{var seq__4871 = cljs.core.seq.call(null,bible_names);var chunk__4872 = null;var count__4873 = 0;var i__4874 = 0;while(true){
if((i__4874 < count__4873))
{var bible_name = cljs.core._nth.call(null,chunk__4872,i__4874);shodan.console.log.call(null,[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name.call(null,bible_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__4871,chunk__4872,count__4873,i__4874,bible_name){
return (function (p__4875){var vec__4876 = p__4875;var ok__$1 = cljs.core.nth.call(null,vec__4876,0,null);var bible_data = cljs.core.nth.call(null,vec__4876,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible.call(null,bible_name,bible_data);
} else
{return null;
}
});})(seq__4871,chunk__4872,count__4873,i__4874,bible_name))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__4879 = seq__4871;
var G__4880 = chunk__4872;
var G__4881 = count__4873;
var G__4882 = (i__4874 + 1);
seq__4871 = G__4879;
chunk__4872 = G__4880;
count__4873 = G__4881;
i__4874 = G__4882;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4871);if(temp__4092__auto__)
{var seq__4871__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4871__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__4871__$1);{
var G__4883 = cljs.core.chunk_rest.call(null,seq__4871__$1);
var G__4884 = c__4150__auto__;
var G__4885 = cljs.core.count.call(null,c__4150__auto__);
var G__4886 = 0;
seq__4871 = G__4883;
chunk__4872 = G__4884;
count__4873 = G__4885;
i__4874 = G__4886;
continue;
}
} else
{var bible_name = cljs.core.first.call(null,seq__4871__$1);shodan.console.log.call(null,[cljs.core.str("Loading bible: "),cljs.core.str(bible_name)].join(''));
ajax.core.ajax_request.call(null,[cljs.core.str("/edn/bibles/"),cljs.core.str(cljs.core.name.call(null,bible_name)),cljs.core.str(".edn")].join(''),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__4871,chunk__4872,count__4873,i__4874,bible_name,seq__4871__$1,temp__4092__auto__){
return (function (p__4877){var vec__4878 = p__4877;var ok__$1 = cljs.core.nth.call(null,vec__4878,0,null);var bible_data = cljs.core.nth.call(null,vec__4878,1,null);if(cljs.core.truth_(ok__$1))
{return bible_plan.bible.assoc_bible.call(null,bible_name,bible_data);
} else
{return null;
}
});})(seq__4871,chunk__4872,count__4873,i__4874,bible_name,seq__4871__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.edn_format.call(null)], null));
{
var G__4887 = cljs.core.next.call(null,seq__4871__$1);
var G__4888 = null;
var G__4889 = 0;
var G__4890 = 0;
seq__4871 = G__4887;
chunk__4872 = G__4888;
count__4873 = G__4889;
i__4874 = G__4890;
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
