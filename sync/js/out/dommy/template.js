// Compiled by ClojureScript 0.0-2075
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj15515 = {};return obj15515;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3279__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__3889__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (dommy.template._elem[goog.typeOf(x__3889__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (dommy.template._elem["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name(node_key);var base_idx = dommy.template.next_css_index(node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((cljs.core.constant$keyword$105)?node_str:null)));var node = (cljs.core.truth_((dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1 ? dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1(tag) : dommy.template._PLUS_svg_tags_PLUS_.call(null,tag)))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_15518 = node_str.substring(base_idx);while(true){
var next_idx_15519 = dommy.template.next_css_index(str_15518,1);var frag_15520 = (((next_idx_15519 >= 0))?str_15518.substring(0,next_idx_15519):str_15518);var G__15517_15521 = frag_15520.charAt(0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__15517_15521))
{node.setAttribute("id",frag_15520.substring(1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__15517_15521))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_15520.substring(1));
} else
{if(cljs.core.constant$keyword$105)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_15520.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_15519 >= 0))
{{
var G__15522 = str_15518.substring(next_idx_15519);
str_15518 = G__15522;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([node_data], 0)))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.cljs$core$IFn$_invoke$arity$2(document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if(cljs.core.truth_((function (){var G__15528 = data;if(G__15528)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15528.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15528.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15528);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15528);
}
})()))
{result_frag.appendChild(dommy.template._elem(data));
return result_frag;
} else
{if(cljs.core.truth_(cljs.core.seq_QMARK_(data)))
{var seq__15529_15533 = cljs.core.seq(data);var chunk__15530_15534 = null;var count__15531_15535 = 0;var i__15532_15536 = 0;while(true){
if((i__15532_15536 < count__15531_15535))
{var child_15537 = chunk__15530_15534.cljs$core$IIndexed$_nth$arity$2(null,i__15532_15536);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_15537);
{
var G__15538 = seq__15529_15533;
var G__15539 = chunk__15530_15534;
var G__15540 = count__15531_15535;
var G__15541 = (i__15532_15536 + 1);
seq__15529_15533 = G__15538;
chunk__15530_15534 = G__15539;
count__15531_15535 = G__15540;
i__15532_15536 = G__15541;
continue;
}
} else
{var temp__4092__auto___15542 = cljs.core.seq(seq__15529_15533);if(cljs.core.truth_(temp__4092__auto___15542))
{var seq__15529_15543__$1 = temp__4092__auto___15542;if(cljs.core.chunked_seq_QMARK_(seq__15529_15543__$1))
{var c__4010__auto___15544 = cljs.core.chunk_first(seq__15529_15543__$1);{
var G__15545 = cljs.core.chunk_rest(seq__15529_15543__$1);
var G__15546 = c__4010__auto___15544;
var G__15547 = cljs.core.count(c__4010__auto___15544);
var G__15548 = 0;
seq__15529_15533 = G__15545;
chunk__15530_15534 = G__15546;
count__15531_15535 = G__15547;
i__15532_15536 = G__15548;
continue;
}
} else
{var child_15549 = cljs.core.first(seq__15529_15543__$1);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_15549);
{
var G__15550 = cljs.core.next(seq__15529_15543__$1);
var G__15551 = null;
var G__15552 = 0;
var G__15553 = 0;
seq__15529_15533 = G__15550;
chunk__15530_15534 = G__15551;
count__15531_15535 = G__15552;
i__15532_15536 = G__15553;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(cljs.core.constant$keyword$105)
{return dommy.template.throw_unable_to_make_node(data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if(cljs.core.truth_((function (){var G__15555 = data;if(G__15555)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15555.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15555.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15555);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15555);
}
})()))
{return dommy.template._elem(data);
} else
{return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1(data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__15556){var vec__15575 = p__15556;var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15575,0,null);var maybe_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15575,1,null);var children = cljs.core.nthnext(vec__15575,2);var n = dommy.template.base_element(tag_name);var attrs = (cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.map_QMARK_(maybe_attrs);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not((function (){var G__15576 = maybe_attrs;if(G__15576)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15576.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15576.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15576);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15576);
}
})());
} else
{return and__3279__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));var seq__15577_15593 = cljs.core.seq(attrs);var chunk__15578_15594 = null;var count__15579_15595 = 0;var i__15580_15596 = 0;while(true){
if((i__15580_15596 < count__15579_15595))
{var vec__15581_15597 = chunk__15578_15594.cljs$core$IIndexed$_nth$arity$2(null,i__15580_15596);var k_15598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15581_15597,0,null);var v_15599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15581_15597,1,null);var G__15582_15600 = k_15598;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$169,G__15582_15600))
{var seq__15583_15601 = cljs.core.seq(v_15599);var chunk__15584_15602 = null;var count__15585_15603 = 0;var i__15586_15604 = 0;while(true){
if((i__15586_15604 < count__15585_15603))
{var c_15605 = chunk__15584_15602.cljs$core$IIndexed$_nth$arity$2(null,i__15586_15604);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_15605);
{
var G__15606 = seq__15583_15601;
var G__15607 = chunk__15584_15602;
var G__15608 = count__15585_15603;
var G__15609 = (i__15586_15604 + 1);
seq__15583_15601 = G__15606;
chunk__15584_15602 = G__15607;
count__15585_15603 = G__15608;
i__15586_15604 = G__15609;
continue;
}
} else
{var temp__4092__auto___15610 = cljs.core.seq(seq__15583_15601);if(cljs.core.truth_(temp__4092__auto___15610))
{var seq__15583_15611__$1 = temp__4092__auto___15610;if(cljs.core.chunked_seq_QMARK_(seq__15583_15611__$1))
{var c__4010__auto___15612 = cljs.core.chunk_first(seq__15583_15611__$1);{
var G__15613 = cljs.core.chunk_rest(seq__15583_15611__$1);
var G__15614 = c__4010__auto___15612;
var G__15615 = cljs.core.count(c__4010__auto___15612);
var G__15616 = 0;
seq__15583_15601 = G__15613;
chunk__15584_15602 = G__15614;
count__15585_15603 = G__15615;
i__15586_15604 = G__15616;
continue;
}
} else
{var c_15617 = cljs.core.first(seq__15583_15611__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_15617);
{
var G__15618 = cljs.core.next(seq__15583_15611__$1);
var G__15619 = null;
var G__15620 = 0;
var G__15621 = 0;
seq__15583_15601 = G__15618;
chunk__15584_15602 = G__15619;
count__15585_15603 = G__15620;
i__15586_15604 = G__15621;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$168,G__15582_15600))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_15599);
} else
{if(cljs.core.constant$keyword$105)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_15598,v_15599);
} else
{}
}
}
{
var G__15622 = seq__15577_15593;
var G__15623 = chunk__15578_15594;
var G__15624 = count__15579_15595;
var G__15625 = (i__15580_15596 + 1);
seq__15577_15593 = G__15622;
chunk__15578_15594 = G__15623;
count__15579_15595 = G__15624;
i__15580_15596 = G__15625;
continue;
}
} else
{var temp__4092__auto___15626 = cljs.core.seq(seq__15577_15593);if(cljs.core.truth_(temp__4092__auto___15626))
{var seq__15577_15627__$1 = temp__4092__auto___15626;if(cljs.core.chunked_seq_QMARK_(seq__15577_15627__$1))
{var c__4010__auto___15628 = cljs.core.chunk_first(seq__15577_15627__$1);{
var G__15629 = cljs.core.chunk_rest(seq__15577_15627__$1);
var G__15630 = c__4010__auto___15628;
var G__15631 = cljs.core.count(c__4010__auto___15628);
var G__15632 = 0;
seq__15577_15593 = G__15629;
chunk__15578_15594 = G__15630;
count__15579_15595 = G__15631;
i__15580_15596 = G__15632;
continue;
}
} else
{var vec__15587_15633 = cljs.core.first(seq__15577_15627__$1);var k_15634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15587_15633,0,null);var v_15635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15587_15633,1,null);var G__15588_15636 = k_15634;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$169,G__15588_15636))
{var seq__15589_15637 = cljs.core.seq(v_15635);var chunk__15590_15638 = null;var count__15591_15639 = 0;var i__15592_15640 = 0;while(true){
if((i__15592_15640 < count__15591_15639))
{var c_15641 = chunk__15590_15638.cljs$core$IIndexed$_nth$arity$2(null,i__15592_15640);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_15641);
{
var G__15642 = seq__15589_15637;
var G__15643 = chunk__15590_15638;
var G__15644 = count__15591_15639;
var G__15645 = (i__15592_15640 + 1);
seq__15589_15637 = G__15642;
chunk__15590_15638 = G__15643;
count__15591_15639 = G__15644;
i__15592_15640 = G__15645;
continue;
}
} else
{var temp__4092__auto___15646__$1 = cljs.core.seq(seq__15589_15637);if(cljs.core.truth_(temp__4092__auto___15646__$1))
{var seq__15589_15647__$1 = temp__4092__auto___15646__$1;if(cljs.core.chunked_seq_QMARK_(seq__15589_15647__$1))
{var c__4010__auto___15648 = cljs.core.chunk_first(seq__15589_15647__$1);{
var G__15649 = cljs.core.chunk_rest(seq__15589_15647__$1);
var G__15650 = c__4010__auto___15648;
var G__15651 = cljs.core.count(c__4010__auto___15648);
var G__15652 = 0;
seq__15589_15637 = G__15649;
chunk__15590_15638 = G__15650;
count__15591_15639 = G__15651;
i__15592_15640 = G__15652;
continue;
}
} else
{var c_15653 = cljs.core.first(seq__15589_15647__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_15653);
{
var G__15654 = cljs.core.next(seq__15589_15647__$1);
var G__15655 = null;
var G__15656 = 0;
var G__15657 = 0;
seq__15589_15637 = G__15654;
chunk__15590_15638 = G__15655;
count__15591_15639 = G__15656;
i__15592_15640 = G__15657;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$168,G__15588_15636))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_15635);
} else
{if(cljs.core.constant$keyword$105)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_15634,v_15635);
} else
{}
}
}
{
var G__15658 = cljs.core.next(seq__15577_15627__$1);
var G__15659 = null;
var G__15660 = 0;
var G__15661 = 0;
seq__15577_15593 = G__15658;
chunk__15578_15594 = G__15659;
count__15579_15595 = G__15660;
i__15580_15596 = G__15661;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like(children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element(this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element(this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e15662){if((e15662 instanceof ReferenceError))
{var __15663 = e15662;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(cljs.core.constant$keyword$105)
{throw e15662;
} else
{}
}
}dommy.template.node = (function node(data){if(cljs.core.truth_((function (){var G__15665 = data;if(G__15665)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15665.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15665.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15665);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15665);
}
})()))
{return dommy.template._elem(data);
} else
{return dommy.template.throw_unable_to_make_node(data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq(Array.prototype.slice.call(parent.childNodes));
});
