// Compiled by ClojureScript 0.0-2202
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj11452 = {};return obj11452;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3469__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (dommy.template._elem[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (dommy.template._elem["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
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
{var str_11455 = node_str.substring(base_idx);while(true){
var next_idx_11456 = dommy.template.next_css_index(str_11455,1);var frag_11457 = (((next_idx_11456 >= 0))?str_11455.substring(0,next_idx_11456):str_11455);var G__11454_11458 = frag_11457.charAt(0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__11454_11458))
{node.setAttribute("id",frag_11457.substring(1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__11454_11458))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_11457.substring(1));
} else
{if(cljs.core.constant$keyword$105)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_11457.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_11456 >= 0))
{{
var G__11459 = str_11455.substring(next_idx_11456);
str_11455 = G__11459;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__11465 = data;if(G__11465)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__11465.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11465.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11465);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11465);
}
})())
{result_frag.appendChild(dommy.template._elem(data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_(data))
{var seq__11466_11470 = cljs.core.seq(data);var chunk__11467_11471 = null;var count__11468_11472 = 0;var i__11469_11473 = 0;while(true){
if((i__11469_11473 < count__11468_11472))
{var child_11474 = chunk__11467_11471.cljs$core$IIndexed$_nth$arity$2(null,i__11469_11473);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_11474);
{
var G__11475 = seq__11466_11470;
var G__11476 = chunk__11467_11471;
var G__11477 = count__11468_11472;
var G__11478 = (i__11469_11473 + 1);
seq__11466_11470 = G__11475;
chunk__11467_11471 = G__11476;
count__11468_11472 = G__11477;
i__11469_11473 = G__11478;
continue;
}
} else
{var temp__4126__auto___11479 = cljs.core.seq(seq__11466_11470);if(temp__4126__auto___11479)
{var seq__11466_11480__$1 = temp__4126__auto___11479;if(cljs.core.chunked_seq_QMARK_(seq__11466_11480__$1))
{var c__4229__auto___11481 = cljs.core.chunk_first(seq__11466_11480__$1);{
var G__11482 = cljs.core.chunk_rest(seq__11466_11480__$1);
var G__11483 = c__4229__auto___11481;
var G__11484 = cljs.core.count(c__4229__auto___11481);
var G__11485 = 0;
seq__11466_11470 = G__11482;
chunk__11467_11471 = G__11483;
count__11468_11472 = G__11484;
i__11469_11473 = G__11485;
continue;
}
} else
{var child_11486 = cljs.core.first(seq__11466_11480__$1);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_11486);
{
var G__11487 = cljs.core.next(seq__11466_11480__$1);
var G__11488 = null;
var G__11489 = 0;
var G__11490 = 0;
seq__11466_11470 = G__11487;
chunk__11467_11471 = G__11488;
count__11468_11472 = G__11489;
i__11469_11473 = G__11490;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__11492 = data;if(G__11492)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__11492.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11492.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11492);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11492);
}
})())
{return dommy.template._elem(data);
} else
{return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1(data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__11493){var vec__11513 = p__11493;var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11513,0,null);var maybe_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11513,1,null);var children = cljs.core.nthnext(vec__11513,2);var n = dommy.template.base_element(tag_name);var attrs = (((cljs.core.map_QMARK_(maybe_attrs)) && (!((function (){var G__11515 = maybe_attrs;if(G__11515)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__11515.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11515.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11515);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11515);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));var seq__11516_11532 = cljs.core.seq(attrs);var chunk__11517_11533 = null;var count__11518_11534 = 0;var i__11519_11535 = 0;while(true){
if((i__11519_11535 < count__11518_11534))
{var vec__11520_11536 = chunk__11517_11533.cljs$core$IIndexed$_nth$arity$2(null,i__11519_11535);var k_11537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11520_11536,0,null);var v_11538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11520_11536,1,null);var G__11521_11539 = k_11537;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$147,G__11521_11539))
{var seq__11522_11540 = cljs.core.seq(v_11538);var chunk__11523_11541 = null;var count__11524_11542 = 0;var i__11525_11543 = 0;while(true){
if((i__11525_11543 < count__11524_11542))
{var c_11544 = chunk__11523_11541.cljs$core$IIndexed$_nth$arity$2(null,i__11525_11543);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_11544);
{
var G__11545 = seq__11522_11540;
var G__11546 = chunk__11523_11541;
var G__11547 = count__11524_11542;
var G__11548 = (i__11525_11543 + 1);
seq__11522_11540 = G__11545;
chunk__11523_11541 = G__11546;
count__11524_11542 = G__11547;
i__11525_11543 = G__11548;
continue;
}
} else
{var temp__4126__auto___11549 = cljs.core.seq(seq__11522_11540);if(temp__4126__auto___11549)
{var seq__11522_11550__$1 = temp__4126__auto___11549;if(cljs.core.chunked_seq_QMARK_(seq__11522_11550__$1))
{var c__4229__auto___11551 = cljs.core.chunk_first(seq__11522_11550__$1);{
var G__11552 = cljs.core.chunk_rest(seq__11522_11550__$1);
var G__11553 = c__4229__auto___11551;
var G__11554 = cljs.core.count(c__4229__auto___11551);
var G__11555 = 0;
seq__11522_11540 = G__11552;
chunk__11523_11541 = G__11553;
count__11524_11542 = G__11554;
i__11525_11543 = G__11555;
continue;
}
} else
{var c_11556 = cljs.core.first(seq__11522_11550__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_11556);
{
var G__11557 = cljs.core.next(seq__11522_11550__$1);
var G__11558 = null;
var G__11559 = 0;
var G__11560 = 0;
seq__11522_11540 = G__11557;
chunk__11523_11541 = G__11558;
count__11524_11542 = G__11559;
i__11525_11543 = G__11560;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$146,G__11521_11539))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_11538);
} else
{if(cljs.core.constant$keyword$105)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_11537,v_11538);
} else
{}
}
}
{
var G__11561 = seq__11516_11532;
var G__11562 = chunk__11517_11533;
var G__11563 = count__11518_11534;
var G__11564 = (i__11519_11535 + 1);
seq__11516_11532 = G__11561;
chunk__11517_11533 = G__11562;
count__11518_11534 = G__11563;
i__11519_11535 = G__11564;
continue;
}
} else
{var temp__4126__auto___11565 = cljs.core.seq(seq__11516_11532);if(temp__4126__auto___11565)
{var seq__11516_11566__$1 = temp__4126__auto___11565;if(cljs.core.chunked_seq_QMARK_(seq__11516_11566__$1))
{var c__4229__auto___11567 = cljs.core.chunk_first(seq__11516_11566__$1);{
var G__11568 = cljs.core.chunk_rest(seq__11516_11566__$1);
var G__11569 = c__4229__auto___11567;
var G__11570 = cljs.core.count(c__4229__auto___11567);
var G__11571 = 0;
seq__11516_11532 = G__11568;
chunk__11517_11533 = G__11569;
count__11518_11534 = G__11570;
i__11519_11535 = G__11571;
continue;
}
} else
{var vec__11526_11572 = cljs.core.first(seq__11516_11566__$1);var k_11573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11526_11572,0,null);var v_11574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11526_11572,1,null);var G__11527_11575 = k_11573;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$147,G__11527_11575))
{var seq__11528_11576 = cljs.core.seq(v_11574);var chunk__11529_11577 = null;var count__11530_11578 = 0;var i__11531_11579 = 0;while(true){
if((i__11531_11579 < count__11530_11578))
{var c_11580 = chunk__11529_11577.cljs$core$IIndexed$_nth$arity$2(null,i__11531_11579);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_11580);
{
var G__11581 = seq__11528_11576;
var G__11582 = chunk__11529_11577;
var G__11583 = count__11530_11578;
var G__11584 = (i__11531_11579 + 1);
seq__11528_11576 = G__11581;
chunk__11529_11577 = G__11582;
count__11530_11578 = G__11583;
i__11531_11579 = G__11584;
continue;
}
} else
{var temp__4126__auto___11585__$1 = cljs.core.seq(seq__11528_11576);if(temp__4126__auto___11585__$1)
{var seq__11528_11586__$1 = temp__4126__auto___11585__$1;if(cljs.core.chunked_seq_QMARK_(seq__11528_11586__$1))
{var c__4229__auto___11587 = cljs.core.chunk_first(seq__11528_11586__$1);{
var G__11588 = cljs.core.chunk_rest(seq__11528_11586__$1);
var G__11589 = c__4229__auto___11587;
var G__11590 = cljs.core.count(c__4229__auto___11587);
var G__11591 = 0;
seq__11528_11576 = G__11588;
chunk__11529_11577 = G__11589;
count__11530_11578 = G__11590;
i__11531_11579 = G__11591;
continue;
}
} else
{var c_11592 = cljs.core.first(seq__11528_11586__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_11592);
{
var G__11593 = cljs.core.next(seq__11528_11586__$1);
var G__11594 = null;
var G__11595 = 0;
var G__11596 = 0;
seq__11528_11576 = G__11593;
chunk__11529_11577 = G__11594;
count__11530_11578 = G__11595;
i__11531_11579 = G__11596;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$146,G__11527_11575))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_11574);
} else
{if(cljs.core.constant$keyword$105)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_11573,v_11574);
} else
{}
}
}
{
var G__11597 = cljs.core.next(seq__11516_11566__$1);
var G__11598 = null;
var G__11599 = 0;
var G__11600 = 0;
seq__11516_11532 = G__11597;
chunk__11517_11533 = G__11598;
count__11518_11534 = G__11599;
i__11519_11535 = G__11600;
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
}catch (e11601){if((e11601 instanceof ReferenceError))
{var __11602 = e11601;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(cljs.core.constant$keyword$105)
{throw e11601;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__11604 = data;if(G__11604)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__11604.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11604.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11604);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11604);
}
})())
{return dommy.template._elem(data);
} else
{return dommy.template.throw_unable_to_make_node(data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq(Array.prototype.slice.call(parent.childNodes));
});
