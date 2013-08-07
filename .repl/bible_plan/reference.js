goog.provide('bible_plan.reference');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('bible_plan.bible');
goog.require('bible_plan.mcheyne');
goog.require('dommy.core');
bible_plan.reference.__GT_li = (function __GT_li(reference){
var dom6128 = document.createElement("li");
dom6128.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str(cljs.core.get_in.call(null,reference,cljs.core.PersistentVector.fromArray(["\uFDD0:start","\uFDD0:book"], true))),cljs.core.str(" "),cljs.core.str(cljs.core.get_in.call(null,reference,cljs.core.PersistentVector.fromArray(["\uFDD0:start","\uFDD0:chapter"], true)))].join('')));
return dom6128;
});
/**
* @param {...*} var_args
*/
bible_plan.reference.reference_LT_ = (function() { 
var reference_LT___delegate = function (reference,references){
if(cljs.core.truth_((function (){
return cljs.core.every_QMARK_.call(null,"\uFDD0:book",cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([reference], true),references));
})))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),"\uFDD0:book",cljs.core.list(new cljs.core.Symbol(null,"into","into",-1637294055,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"reference","reference",1729280260,null)], true),new cljs.core.Symbol(null,"references","references",-255581119,null))))))].join('')));
}
var references__$1 = cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([reference], true),references);
var vec__6130 = cljs.core.juxt.call(null,cljs.core.partial.call(null,cljs.core.map,"\uFDD0:book"),cljs.core.partial.call(null,cljs.core.map,"\uFDD0:chapter"),cljs.core.partial.call(null,cljs.core.map,"\uFDD0:verse")).call(null,references__$1);
var books = cljs.core.nth.call(null,vec__6130,0,null);
var chapters = cljs.core.nth.call(null,vec__6130,1,null);
var verses = cljs.core.nth.call(null,vec__6130,2,null);
var or__3943__auto__ = cljs.core.apply.call(null,cljs.core._LT_,books);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (function (){var and__3941__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,books);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = cljs.core.every_QMARK_.call(null,cljs.core.identity,chapters);
if(and__3941__auto____$1)
{return cljs.core.apply.call(null,cljs.core._LT_,chapters);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var and__3941__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,books);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = cljs.core.every_QMARK_.call(null,cljs.core.identity,chapters);
if(and__3941__auto____$1)
{var and__3941__auto____$2 = cljs.core.apply.call(null,cljs.core._EQ_,chapters);
if(cljs.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = cljs.core.every_QMARK_.call(null,cljs.core.identity,verses);
if(and__3941__auto____$3)
{return cljs.core.apply.call(null,cljs.core._LT_,verses);
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}
}
};
var reference_LT_ = function (reference,var_args){
var references = null;
if (arguments.length > 1) {
  references = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reference_LT___delegate.call(this, reference, references);
};
reference_LT_.cljs$lang$maxFixedArity = 1;
reference_LT_.cljs$lang$applyTo = (function (arglist__6131){
var reference = cljs.core.first(arglist__6131);
var references = cljs.core.rest(arglist__6131);
return reference_LT___delegate(reference, references);
});
reference_LT_.cljs$core$IFn$_invoke$arity$variadic = reference_LT___delegate;
return reference_LT_;
})()
;
bible_plan.reference.__GT_book_str = (function __GT_book_str(p__6132){
var map__6134 = p__6132;
var map__6134__$1 = ((cljs.core.seq_QMARK_.call(null,map__6134))?cljs.core.apply.call(null,cljs.core.hash_map,map__6134):map__6134);
var reference = map__6134__$1;
var chapter = cljs.core.get.call(null,map__6134__$1,"\uFDD0:chapter");
var book = cljs.core.get.call(null,map__6134__$1,"\uFDD0:book");
if(cljs.core.truth_(book))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"book","book",-1637501790,null)))].join('')));
}
if(cljs.core.not.call(null,chapter))
{return cljs.core.get_in.call(null,bible_plan.bible.bible,cljs.core.PersistentVector.fromArray([book,"\uFDD0:name"], true));
} else
{return cljs.core.get_in.call(null,bible_plan.bible.bible,cljs.core.PersistentVector.fromArray([book,"\uFDD0:abbreviation"], true));
}
});
bible_plan.reference.__GT_chapter_str = (function __GT_chapter_str(p__6135){
var map__6137 = p__6135;
var map__6137__$1 = ((cljs.core.seq_QMARK_.call(null,map__6137))?cljs.core.apply.call(null,cljs.core.hash_map,map__6137):map__6137);
var reference = map__6137__$1;
var chapter = cljs.core.get.call(null,map__6137__$1,"\uFDD0:chapter");
return chapter;
});
bible_plan.reference.__GT_verse_str = (function __GT_verse_str(p__6138){
var map__6140 = p__6138;
var map__6140__$1 = ((cljs.core.seq_QMARK_.call(null,map__6140))?cljs.core.apply.call(null,cljs.core.hash_map,map__6140):map__6140);
var reference = map__6140__$1;
var verse = cljs.core.get.call(null,map__6140__$1,"\uFDD0:verse");
return verse;
});
bible_plan.reference.single__GT_str = (function single__GT_str(p__6141){
var map__6143 = p__6141;
var map__6143__$1 = ((cljs.core.seq_QMARK_.call(null,map__6143))?cljs.core.apply.call(null,cljs.core.hash_map,map__6143):map__6143);
var reference = map__6143__$1;
var verse = cljs.core.get.call(null,map__6143__$1,"\uFDD0:verse");
var chapter = cljs.core.get.call(null,map__6143__$1,"\uFDD0:chapter");
var book = cljs.core.get.call(null,map__6143__$1,"\uFDD0:book");
if(cljs.core.truth_((function (){var or__3943__auto__ = (function (){var and__3941__auto__ = book;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = chapter;
if(cljs.core.truth_(and__3941__auto____$1))
{return verse;
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (function (){var and__3941__auto__ = book;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = chapter;
if(cljs.core.truth_(and__3941__auto____$1))
{return cljs.core.not.call(null,verse);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var and__3941__auto__ = book;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not.call(null,chapter,verse);
} else
{return and__3941__auto__;
}
}
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"book","book",-1637501790,null),new cljs.core.Symbol(null,"chapter","chapter",-901515770,null),new cljs.core.Symbol(null,"verse","verse",-1528433938,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"book","book",-1637501790,null),new cljs.core.Symbol(null,"chapter","chapter",-901515770,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"verse","verse",-1528433938,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),new cljs.core.Symbol(null,"book","book",-1637501790,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),new cljs.core.Symbol(null,"chapter","chapter",-901515770,null),new cljs.core.Symbol(null,"verse","verse",-1528433938,null))))))].join('')));
}
bible_plan.reference._STAR_charnock_STAR_ = cljs.core.PersistentVector.fromArray([book,chapter,verse,reference], true);
if(cljs.core.truth_((function (){var and__3941__auto__ = book;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = chapter;
if(cljs.core.truth_(and__3941__auto____$1))
{return verse;
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return [cljs.core.str(clojure.string.capitalize.call(null,bible_plan.reference.__GT_book_str.call(null,reference))),cljs.core.str(". "),cljs.core.str(bible_plan.reference.__GT_chapter_str.call(null,reference)),cljs.core.str("."),cljs.core.str(bible_plan.reference.__GT_verse_str.call(null,reference))].join('');
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = book;
if(cljs.core.truth_(and__3941__auto__))
{return chapter;
} else
{return and__3941__auto__;
}
})()))
{return [cljs.core.str(clojure.string.capitalize.call(null,bible_plan.reference.__GT_book_str.call(null,reference))),cljs.core.str(". "),cljs.core.str(bible_plan.reference.__GT_chapter_str.call(null,reference))].join('');
} else
{if(cljs.core.truth_(book))
{return clojure.string.capitalize.call(null,bible_plan.reference.__GT_book_str.call(null,reference));
} else
{return null;
}
}
}
});
bible_plan.reference.compound__GT_str = (function compound__GT_str(start,end){
if(cljs.core.truth_(bible_plan.reference.reference_LT_.call(null,start,end)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reference<","reference<",-255581174,null),new cljs.core.Symbol(null,"start","start",-1530773989,null),new cljs.core.Symbol(null,"end","end",-1640430956,null))))].join('')));
}
var map__6146 = start;
var map__6146__$1 = ((cljs.core.seq_QMARK_.call(null,map__6146))?cljs.core.apply.call(null,cljs.core.hash_map,map__6146):map__6146);
var s_book = cljs.core.get.call(null,map__6146__$1,"\uFDD0:book");
var s_chapter = cljs.core.get.call(null,map__6146__$1,"\uFDD0:chapter",1);
var s_verse = cljs.core.get.call(null,map__6146__$1,"\uFDD0:verse",1);
var map__6147 = end;
var map__6147__$1 = ((cljs.core.seq_QMARK_.call(null,map__6147))?cljs.core.apply.call(null,cljs.core.hash_map,map__6147):map__6147);
var e_book = cljs.core.get.call(null,map__6147__$1,"\uFDD0:book");
var e_chapter = cljs.core.get.call(null,map__6147__$1,"\uFDD0:chapter",1);
var e_verse = cljs.core.get.call(null,map__6147__$1,"\uFDD0:verse",1);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,s_book,e_book);
if(and__3941__auto__)
{var and__3941__auto____$1 = cljs.core._EQ_.call(null,s_chapter,e_chapter);
if(and__3941__auto____$1)
{return cljs.core.not_EQ_.call(null,s_verse,e_verse);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{return [cljs.core.str(clojure.string.capitalize.call(null,bible_plan.reference.__GT_book_str.call(null,start))),cljs.core.str(". "),cljs.core.str(bible_plan.reference.__GT_chapter_str.call(null,start)),cljs.core.str("."),cljs.core.str(s_verse),cljs.core.str("-"),cljs.core.str(e_verse)].join('');
} else
{if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,s_book,e_book);
if(and__3941__auto__)
{var and__3941__auto____$1 = cljs.core.not_EQ_.call(null,s_chapter,e_chapter);
if(and__3941__auto____$1)
{return cljs.core.not_EQ_.call(null,s_verse,e_verse);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{return [cljs.core.str(clojure.string.capitalize.call(null,bible_plan.reference.__GT_book_str.call(null,start))),cljs.core.str(". "),cljs.core.str(bible_plan.reference.__GT_chapter_str.call(null,start)),cljs.core.str("."),cljs.core.str(s_verse),cljs.core.str("-"),cljs.core.str(bible_plan.reference.__GT_chapter_str.call(null,end)),cljs.core.str("."),cljs.core.str(e_verse)].join('');
} else
{if("\uFDD0:default")
{return [cljs.core.str(bible_plan.reference.single__GT_str.call(null,start)),cljs.core.str("-"),cljs.core.str(bible_plan.reference.single__GT_str.call(null,end))].join('');
} else
{return null;
}
}
}
});
bible_plan.reference.__GT_str = (function __GT_str(p__6148){
var map__6150 = p__6148;
var map__6150__$1 = ((cljs.core.seq_QMARK_.call(null,map__6150))?cljs.core.apply.call(null,cljs.core.hash_map,map__6150):map__6150);
var reference = map__6150__$1;
var end = cljs.core.get.call(null,map__6150__$1,"\uFDD0:end");
var start = cljs.core.get.call(null,map__6150__$1,"\uFDD0:start");
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:book")).call(null,start)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list("\uFDD0:book",new cljs.core.Symbol(null,"start","start",-1530773989,null))))].join('')));
}
if(cljs.core.truth_((function (){var and__3941__auto__ = start;
if(cljs.core.truth_(and__3941__auto__))
{return end;
} else
{return and__3941__auto__;
}
})()))
{return bible_plan.reference.compound__GT_str.call(null,start,end);
} else
{return bible_plan.reference.single__GT_str.call(null,start);
}
});
