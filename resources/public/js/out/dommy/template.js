// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj11248 = {};return obj11248;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (dommy.template._elem[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (dommy.template._elem["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
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
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name(node_key);var base_idx = dommy.template.next_css_index(node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((cljs.core.constant$keyword$100)?node_str:null)));var node = (cljs.core.truth_((dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1 ? dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1(tag) : dommy.template._PLUS_svg_tags_PLUS_.call(null,tag)))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_11251 = node_str.substring(base_idx);while(true){
var next_idx_11252 = dommy.template.next_css_index(str_11251,1);var frag_11253 = (((next_idx_11252 >= 0))?str_11251.substring(0,next_idx_11252):str_11251);var G__11250_11254 = frag_11253.charAt(0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__11250_11254))
{node.setAttribute("id",frag_11253.substring(1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__11250_11254))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_11253.substring(1));
} else
{if(cljs.core.constant$keyword$100)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_11253.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_11252 >= 0))
{{
var G__11255 = str_11251.substring(next_idx_11252);
str_11251 = G__11255;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__11261 = data;if(G__11261)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__11261.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11261.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11261);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11261);
}
})())
{result_frag.appendChild(dommy.template._elem(data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_(data))
{var seq__11262_11266 = cljs.core.seq(data);var chunk__11263_11267 = null;var count__11264_11268 = 0;var i__11265_11269 = 0;while(true){
if((i__11265_11269 < count__11264_11268))
{var child_11270 = chunk__11263_11267.cljs$core$IIndexed$_nth$arity$2(null,i__11265_11269);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_11270);
{
var G__11271 = seq__11262_11266;
var G__11272 = chunk__11263_11267;
var G__11273 = count__11264_11268;
var G__11274 = (i__11265_11269 + 1);
seq__11262_11266 = G__11271;
chunk__11263_11267 = G__11272;
count__11264_11268 = G__11273;
i__11265_11269 = G__11274;
continue;
}
} else
{var temp__4092__auto___11275 = cljs.core.seq(seq__11262_11266);if(temp__4092__auto___11275)
{var seq__11262_11276__$1 = temp__4092__auto___11275;if(cljs.core.chunked_seq_QMARK_(seq__11262_11276__$1))
{var c__4150__auto___11277 = cljs.core.chunk_first(seq__11262_11276__$1);{
var G__11278 = cljs.core.chunk_rest(seq__11262_11276__$1);
var G__11279 = c__4150__auto___11277;
var G__11280 = cljs.core.count(c__4150__auto___11277);
var G__11281 = 0;
seq__11262_11266 = G__11278;
chunk__11263_11267 = G__11279;
count__11264_11268 = G__11280;
i__11265_11269 = G__11281;
continue;
}
} else
{var child_11282 = cljs.core.first(seq__11262_11276__$1);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_11282);
{
var G__11283 = cljs.core.next(seq__11262_11276__$1);
var G__11284 = null;
var G__11285 = 0;
var G__11286 = 0;
seq__11262_11266 = G__11283;
chunk__11263_11267 = G__11284;
count__11264_11268 = G__11285;
i__11265_11269 = G__11286;
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
{if(cljs.core.constant$keyword$100)
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__11288 = data;if(G__11288)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__11288.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11288.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11288);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11288);
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
dommy.template.compound_element = (function compound_element(p__11289){var vec__11309 = p__11289;var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11309,0,null);var maybe_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11309,1,null);var children = cljs.core.nthnext(vec__11309,2);var n = dommy.template.base_element(tag_name);var attrs = (((cljs.core.map_QMARK_(maybe_attrs)) && (!((function (){var G__11311 = maybe_attrs;if(G__11311)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__11311.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11311.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11311);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11311);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));var seq__11312_11328 = cljs.core.seq(attrs);var chunk__11313_11329 = null;var count__11314_11330 = 0;var i__11315_11331 = 0;while(true){
if((i__11315_11331 < count__11314_11330))
{var vec__11316_11332 = chunk__11313_11329.cljs$core$IIndexed$_nth$arity$2(null,i__11315_11331);var k_11333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11316_11332,0,null);var v_11334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11316_11332,1,null);var G__11317_11335 = k_11333;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$150,G__11317_11335))
{var seq__11318_11336 = cljs.core.seq(v_11334);var chunk__11319_11337 = null;var count__11320_11338 = 0;var i__11321_11339 = 0;while(true){
if((i__11321_11339 < count__11320_11338))
{var c_11340 = chunk__11319_11337.cljs$core$IIndexed$_nth$arity$2(null,i__11321_11339);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_11340);
{
var G__11341 = seq__11318_11336;
var G__11342 = chunk__11319_11337;
var G__11343 = count__11320_11338;
var G__11344 = (i__11321_11339 + 1);
seq__11318_11336 = G__11341;
chunk__11319_11337 = G__11342;
count__11320_11338 = G__11343;
i__11321_11339 = G__11344;
continue;
}
} else
{var temp__4092__auto___11345 = cljs.core.seq(seq__11318_11336);if(temp__4092__auto___11345)
{var seq__11318_11346__$1 = temp__4092__auto___11345;if(cljs.core.chunked_seq_QMARK_(seq__11318_11346__$1))
{var c__4150__auto___11347 = cljs.core.chunk_first(seq__11318_11346__$1);{
var G__11348 = cljs.core.chunk_rest(seq__11318_11346__$1);
var G__11349 = c__4150__auto___11347;
var G__11350 = cljs.core.count(c__4150__auto___11347);
var G__11351 = 0;
seq__11318_11336 = G__11348;
chunk__11319_11337 = G__11349;
count__11320_11338 = G__11350;
i__11321_11339 = G__11351;
continue;
}
} else
{var c_11352 = cljs.core.first(seq__11318_11346__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_11352);
{
var G__11353 = cljs.core.next(seq__11318_11346__$1);
var G__11354 = null;
var G__11355 = 0;
var G__11356 = 0;
seq__11318_11336 = G__11353;
chunk__11319_11337 = G__11354;
count__11320_11338 = G__11355;
i__11321_11339 = G__11356;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$149,G__11317_11335))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_11334);
} else
{if(cljs.core.constant$keyword$100)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_11333,v_11334);
} else
{}
}
}
{
var G__11357 = seq__11312_11328;
var G__11358 = chunk__11313_11329;
var G__11359 = count__11314_11330;
var G__11360 = (i__11315_11331 + 1);
seq__11312_11328 = G__11357;
chunk__11313_11329 = G__11358;
count__11314_11330 = G__11359;
i__11315_11331 = G__11360;
continue;
}
} else
{var temp__4092__auto___11361 = cljs.core.seq(seq__11312_11328);if(temp__4092__auto___11361)
{var seq__11312_11362__$1 = temp__4092__auto___11361;if(cljs.core.chunked_seq_QMARK_(seq__11312_11362__$1))
{var c__4150__auto___11363 = cljs.core.chunk_first(seq__11312_11362__$1);{
var G__11364 = cljs.core.chunk_rest(seq__11312_11362__$1);
var G__11365 = c__4150__auto___11363;
var G__11366 = cljs.core.count(c__4150__auto___11363);
var G__11367 = 0;
seq__11312_11328 = G__11364;
chunk__11313_11329 = G__11365;
count__11314_11330 = G__11366;
i__11315_11331 = G__11367;
continue;
}
} else
{var vec__11322_11368 = cljs.core.first(seq__11312_11362__$1);var k_11369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11322_11368,0,null);var v_11370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11322_11368,1,null);var G__11323_11371 = k_11369;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$150,G__11323_11371))
{var seq__11324_11372 = cljs.core.seq(v_11370);var chunk__11325_11373 = null;var count__11326_11374 = 0;var i__11327_11375 = 0;while(true){
if((i__11327_11375 < count__11326_11374))
{var c_11376 = chunk__11325_11373.cljs$core$IIndexed$_nth$arity$2(null,i__11327_11375);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_11376);
{
var G__11377 = seq__11324_11372;
var G__11378 = chunk__11325_11373;
var G__11379 = count__11326_11374;
var G__11380 = (i__11327_11375 + 1);
seq__11324_11372 = G__11377;
chunk__11325_11373 = G__11378;
count__11326_11374 = G__11379;
i__11327_11375 = G__11380;
continue;
}
} else
{var temp__4092__auto___11381__$1 = cljs.core.seq(seq__11324_11372);if(temp__4092__auto___11381__$1)
{var seq__11324_11382__$1 = temp__4092__auto___11381__$1;if(cljs.core.chunked_seq_QMARK_(seq__11324_11382__$1))
{var c__4150__auto___11383 = cljs.core.chunk_first(seq__11324_11382__$1);{
var G__11384 = cljs.core.chunk_rest(seq__11324_11382__$1);
var G__11385 = c__4150__auto___11383;
var G__11386 = cljs.core.count(c__4150__auto___11383);
var G__11387 = 0;
seq__11324_11372 = G__11384;
chunk__11325_11373 = G__11385;
count__11326_11374 = G__11386;
i__11327_11375 = G__11387;
continue;
}
} else
{var c_11388 = cljs.core.first(seq__11324_11382__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_11388);
{
var G__11389 = cljs.core.next(seq__11324_11382__$1);
var G__11390 = null;
var G__11391 = 0;
var G__11392 = 0;
seq__11324_11372 = G__11389;
chunk__11325_11373 = G__11390;
count__11326_11374 = G__11391;
i__11327_11375 = G__11392;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$149,G__11323_11371))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_11370);
} else
{if(cljs.core.constant$keyword$100)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_11369,v_11370);
} else
{}
}
}
{
var G__11393 = cljs.core.next(seq__11312_11362__$1);
var G__11394 = null;
var G__11395 = 0;
var G__11396 = 0;
seq__11312_11328 = G__11393;
chunk__11313_11329 = G__11394;
count__11314_11330 = G__11395;
i__11315_11331 = G__11396;
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
}catch (e11397){if((e11397 instanceof ReferenceError))
{var __11398 = e11397;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(cljs.core.constant$keyword$100)
{throw e11397;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__11400 = data;if(G__11400)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__11400.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__11400.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11400);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__11400);
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
