goog.provide('bible_plan.reference');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('bible_plan.bible');
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
var vec__5697 = cljs.core.juxt.call(null,cljs.core.partial.call(null,cljs.core.map,"\uFDD0:book"),cljs.core.partial.call(null,cljs.core.map,"\uFDD0:chapter"),cljs.core.partial.call(null,cljs.core.map,"\uFDD0:verse")).call(null,references__$1);
var books = cljs.core.nth.call(null,vec__5697,0,null);
var chapters = cljs.core.nth.call(null,vec__5697,1,null);
var verses = cljs.core.nth.call(null,vec__5697,2,null);
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
reference_LT_.cljs$lang$applyTo = (function (arglist__5698){
var reference = cljs.core.first(arglist__5698);
var references = cljs.core.rest(arglist__5698);
return reference_LT___delegate(reference, references);
});
reference_LT_.cljs$core$IFn$_invoke$arity$variadic = reference_LT___delegate;
return reference_LT_;
})()
;
bible_plan.reference.__GT_book_str = (function __GT_book_str(p__5699){
var map__5701 = p__5699;
var map__5701__$1 = ((cljs.core.seq_QMARK_.call(null,map__5701))?cljs.core.apply.call(null,cljs.core.hash_map,map__5701):map__5701);
var reference = map__5701__$1;
var chapter = cljs.core.get.call(null,map__5701__$1,"\uFDD0:chapter");
var book = cljs.core.get.call(null,map__5701__$1,"\uFDD0:book");
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
bible_plan.reference.__GT_chapter_str = (function __GT_chapter_str(p__5702){
var map__5704 = p__5702;
var map__5704__$1 = ((cljs.core.seq_QMARK_.call(null,map__5704))?cljs.core.apply.call(null,cljs.core.hash_map,map__5704):map__5704);
var reference = map__5704__$1;
var chapter = cljs.core.get.call(null,map__5704__$1,"\uFDD0:chapter");
if(cljs.core.truth_(chapter))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chapter","chapter",-901515770,null)))].join('')));
}
return chapter;
});
bible_plan.reference.__GT_verse_str = (function __GT_verse_str(p__5705){
var map__5707 = p__5705;
var map__5707__$1 = ((cljs.core.seq_QMARK_.call(null,map__5707))?cljs.core.apply.call(null,cljs.core.hash_map,map__5707):map__5707);
var reference = map__5707__$1;
var verse = cljs.core.get.call(null,map__5707__$1,"\uFDD0:verse");
if(cljs.core.truth_(verse))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"verse","verse",-1528433938,null)))].join('')));
}
return verse;
});
bible_plan.reference.single__GT_str = (function single__GT_str(p__5708){
var map__5710 = p__5708;
var map__5710__$1 = ((cljs.core.seq_QMARK_.call(null,map__5710))?cljs.core.apply.call(null,cljs.core.hash_map,map__5710):map__5710);
var reference = map__5710__$1;
var verse = cljs.core.get.call(null,map__5710__$1,"\uFDD0:verse");
var chapter = cljs.core.get.call(null,map__5710__$1,"\uFDD0:chapter");
var book = cljs.core.get.call(null,map__5710__$1,"\uFDD0:book");
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
var map__5713 = start;
var map__5713__$1 = ((cljs.core.seq_QMARK_.call(null,map__5713))?cljs.core.apply.call(null,cljs.core.hash_map,map__5713):map__5713);
var s_book = cljs.core.get.call(null,map__5713__$1,"\uFDD0:book");
var s_chapter = cljs.core.get.call(null,map__5713__$1,"\uFDD0:chapter");
var s_verse = cljs.core.get.call(null,map__5713__$1,"\uFDD0:verse");
var map__5714 = end;
var map__5714__$1 = ((cljs.core.seq_QMARK_.call(null,map__5714))?cljs.core.apply.call(null,cljs.core.hash_map,map__5714):map__5714);
var e_book = cljs.core.get.call(null,map__5714__$1,"\uFDD0:book");
var e_chapter = cljs.core.get.call(null,map__5714__$1,"\uFDD0:chapter");
var e_verse = cljs.core.get.call(null,map__5714__$1,"\uFDD0:verse");
bible_plan.reference._STAR_charnock_STAR_ = cljs.core.PersistentVector.fromArray([s_book,e_book,s_chapter,e_chapter,s_verse,e_verse], true);
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
{if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,s_book,e_book);
if(and__3941__auto__)
{var and__3941__auto____$1 = cljs.core.not_EQ_.call(null,s_chapter,e_chapter);
if(and__3941__auto____$1)
{var and__3941__auto____$2 = (s_verse == null);
if(and__3941__auto____$2)
{return (e_verse == null);
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{return [cljs.core.str(clojure.string.capitalize.call(null,bible_plan.reference.__GT_book_str.call(null,start))),cljs.core.str(". "),cljs.core.str(bible_plan.reference.__GT_chapter_str.call(null,start)),cljs.core.str("-"),cljs.core.str(bible_plan.reference.__GT_chapter_str.call(null,end))].join('');
} else
{if("\uFDD0:default")
{return [cljs.core.str(bible_plan.reference.single__GT_str.call(null,start)),cljs.core.str("-"),cljs.core.str(bible_plan.reference.single__GT_str.call(null,end))].join('');
} else
{return null;
}
}
}
}
});
bible_plan.reference.__GT_str = (function __GT_str(p__5715){
var map__5717 = p__5715;
var map__5717__$1 = ((cljs.core.seq_QMARK_.call(null,map__5717))?cljs.core.apply.call(null,cljs.core.hash_map,map__5717):map__5717);
var reference = map__5717__$1;
var end = cljs.core.get.call(null,map__5717__$1,"\uFDD0:end");
var start = cljs.core.get.call(null,map__5717__$1,"\uFDD0:start");
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
