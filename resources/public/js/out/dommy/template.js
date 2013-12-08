// Compiled by ClojureScript 0.0-2075
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj15231 = {};return obj15231;
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
{var str_15234 = node_str.substring(base_idx);while(true){
var next_idx_15235 = dommy.template.next_css_index(str_15234,1);var frag_15236 = (((next_idx_15235 >= 0))?str_15234.substring(0,next_idx_15235):str_15234);var G__15233_15237 = frag_15236.charAt(0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__15233_15237))
{node.setAttribute("id",frag_15236.substring(1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__15233_15237))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_15236.substring(1));
} else
{if(cljs.core.constant$keyword$105)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_15236.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_15235 >= 0))
{{
var G__15238 = str_15234.substring(next_idx_15235);
str_15234 = G__15238;
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
var __GT_document_fragment__2 = (function (result_frag,data){if(cljs.core.truth_((function (){var G__15244 = data;if(G__15244)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15244.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15244.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15244);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15244);
}
})()))
{result_frag.appendChild(dommy.template._elem(data));
return result_frag;
} else
{if(cljs.core.truth_(cljs.core.seq_QMARK_(data)))
{var seq__15245_15249 = cljs.core.seq(data);var chunk__15246_15250 = null;var count__15247_15251 = 0;var i__15248_15252 = 0;while(true){
if((i__15248_15252 < count__15247_15251))
{var child_15253 = chunk__15246_15250.cljs$core$IIndexed$_nth$arity$2(null,i__15248_15252);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_15253);
{
var G__15254 = seq__15245_15249;
var G__15255 = chunk__15246_15250;
var G__15256 = count__15247_15251;
var G__15257 = (i__15248_15252 + 1);
seq__15245_15249 = G__15254;
chunk__15246_15250 = G__15255;
count__15247_15251 = G__15256;
i__15248_15252 = G__15257;
continue;
}
} else
{var temp__4092__auto___15258 = cljs.core.seq(seq__15245_15249);if(cljs.core.truth_(temp__4092__auto___15258))
{var seq__15245_15259__$1 = temp__4092__auto___15258;if(cljs.core.chunked_seq_QMARK_(seq__15245_15259__$1))
{var c__4010__auto___15260 = cljs.core.chunk_first(seq__15245_15259__$1);{
var G__15261 = cljs.core.chunk_rest(seq__15245_15259__$1);
var G__15262 = c__4010__auto___15260;
var G__15263 = cljs.core.count(c__4010__auto___15260);
var G__15264 = 0;
seq__15245_15249 = G__15261;
chunk__15246_15250 = G__15262;
count__15247_15251 = G__15263;
i__15248_15252 = G__15264;
continue;
}
} else
{var child_15265 = cljs.core.first(seq__15245_15259__$1);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_15265);
{
var G__15266 = cljs.core.next(seq__15245_15259__$1);
var G__15267 = null;
var G__15268 = 0;
var G__15269 = 0;
seq__15245_15249 = G__15266;
chunk__15246_15250 = G__15267;
count__15247_15251 = G__15268;
i__15248_15252 = G__15269;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if(cljs.core.truth_((function (){var G__15271 = data;if(G__15271)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15271.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15271.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15271);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15271);
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
dommy.template.compound_element = (function compound_element(p__15272){var vec__15291 = p__15272;var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15291,0,null);var maybe_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15291,1,null);var children = cljs.core.nthnext(vec__15291,2);var n = dommy.template.base_element(tag_name);var attrs = (cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.map_QMARK_(maybe_attrs);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not((function (){var G__15292 = maybe_attrs;if(G__15292)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15292.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15292.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15292);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15292);
}
})());
} else
{return and__3279__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));var seq__15293_15309 = cljs.core.seq(attrs);var chunk__15294_15310 = null;var count__15295_15311 = 0;var i__15296_15312 = 0;while(true){
if((i__15296_15312 < count__15295_15311))
{var vec__15297_15313 = chunk__15294_15310.cljs$core$IIndexed$_nth$arity$2(null,i__15296_15312);var k_15314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15297_15313,0,null);var v_15315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15297_15313,1,null);var G__15298_15316 = k_15314;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$169,G__15298_15316))
{var seq__15299_15317 = cljs.core.seq(v_15315);var chunk__15300_15318 = null;var count__15301_15319 = 0;var i__15302_15320 = 0;while(true){
if((i__15302_15320 < count__15301_15319))
{var c_15321 = chunk__15300_15318.cljs$core$IIndexed$_nth$arity$2(null,i__15302_15320);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_15321);
{
var G__15322 = seq__15299_15317;
var G__15323 = chunk__15300_15318;
var G__15324 = count__15301_15319;
var G__15325 = (i__15302_15320 + 1);
seq__15299_15317 = G__15322;
chunk__15300_15318 = G__15323;
count__15301_15319 = G__15324;
i__15302_15320 = G__15325;
continue;
}
} else
{var temp__4092__auto___15326 = cljs.core.seq(seq__15299_15317);if(cljs.core.truth_(temp__4092__auto___15326))
{var seq__15299_15327__$1 = temp__4092__auto___15326;if(cljs.core.chunked_seq_QMARK_(seq__15299_15327__$1))
{var c__4010__auto___15328 = cljs.core.chunk_first(seq__15299_15327__$1);{
var G__15329 = cljs.core.chunk_rest(seq__15299_15327__$1);
var G__15330 = c__4010__auto___15328;
var G__15331 = cljs.core.count(c__4010__auto___15328);
var G__15332 = 0;
seq__15299_15317 = G__15329;
chunk__15300_15318 = G__15330;
count__15301_15319 = G__15331;
i__15302_15320 = G__15332;
continue;
}
} else
{var c_15333 = cljs.core.first(seq__15299_15327__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_15333);
{
var G__15334 = cljs.core.next(seq__15299_15327__$1);
var G__15335 = null;
var G__15336 = 0;
var G__15337 = 0;
seq__15299_15317 = G__15334;
chunk__15300_15318 = G__15335;
count__15301_15319 = G__15336;
i__15302_15320 = G__15337;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$168,G__15298_15316))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_15315);
} else
{if(cljs.core.constant$keyword$105)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_15314,v_15315);
} else
{}
}
}
{
var G__15338 = seq__15293_15309;
var G__15339 = chunk__15294_15310;
var G__15340 = count__15295_15311;
var G__15341 = (i__15296_15312 + 1);
seq__15293_15309 = G__15338;
chunk__15294_15310 = G__15339;
count__15295_15311 = G__15340;
i__15296_15312 = G__15341;
continue;
}
} else
{var temp__4092__auto___15342 = cljs.core.seq(seq__15293_15309);if(cljs.core.truth_(temp__4092__auto___15342))
{var seq__15293_15343__$1 = temp__4092__auto___15342;if(cljs.core.chunked_seq_QMARK_(seq__15293_15343__$1))
{var c__4010__auto___15344 = cljs.core.chunk_first(seq__15293_15343__$1);{
var G__15345 = cljs.core.chunk_rest(seq__15293_15343__$1);
var G__15346 = c__4010__auto___15344;
var G__15347 = cljs.core.count(c__4010__auto___15344);
var G__15348 = 0;
seq__15293_15309 = G__15345;
chunk__15294_15310 = G__15346;
count__15295_15311 = G__15347;
i__15296_15312 = G__15348;
continue;
}
} else
{var vec__15303_15349 = cljs.core.first(seq__15293_15343__$1);var k_15350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15303_15349,0,null);var v_15351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15303_15349,1,null);var G__15304_15352 = k_15350;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$169,G__15304_15352))
{var seq__15305_15353 = cljs.core.seq(v_15351);var chunk__15306_15354 = null;var count__15307_15355 = 0;var i__15308_15356 = 0;while(true){
if((i__15308_15356 < count__15307_15355))
{var c_15357 = chunk__15306_15354.cljs$core$IIndexed$_nth$arity$2(null,i__15308_15356);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_15357);
{
var G__15358 = seq__15305_15353;
var G__15359 = chunk__15306_15354;
var G__15360 = count__15307_15355;
var G__15361 = (i__15308_15356 + 1);
seq__15305_15353 = G__15358;
chunk__15306_15354 = G__15359;
count__15307_15355 = G__15360;
i__15308_15356 = G__15361;
continue;
}
} else
{var temp__4092__auto___15362__$1 = cljs.core.seq(seq__15305_15353);if(cljs.core.truth_(temp__4092__auto___15362__$1))
{var seq__15305_15363__$1 = temp__4092__auto___15362__$1;if(cljs.core.chunked_seq_QMARK_(seq__15305_15363__$1))
{var c__4010__auto___15364 = cljs.core.chunk_first(seq__15305_15363__$1);{
var G__15365 = cljs.core.chunk_rest(seq__15305_15363__$1);
var G__15366 = c__4010__auto___15364;
var G__15367 = cljs.core.count(c__4010__auto___15364);
var G__15368 = 0;
seq__15305_15353 = G__15365;
chunk__15306_15354 = G__15366;
count__15307_15355 = G__15367;
i__15308_15356 = G__15368;
continue;
}
} else
{var c_15369 = cljs.core.first(seq__15305_15363__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_15369);
{
var G__15370 = cljs.core.next(seq__15305_15363__$1);
var G__15371 = null;
var G__15372 = 0;
var G__15373 = 0;
seq__15305_15353 = G__15370;
chunk__15306_15354 = G__15371;
count__15307_15355 = G__15372;
i__15308_15356 = G__15373;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$168,G__15304_15352))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_15351);
} else
{if(cljs.core.constant$keyword$105)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_15350,v_15351);
} else
{}
}
}
{
var G__15374 = cljs.core.next(seq__15293_15343__$1);
var G__15375 = null;
var G__15376 = 0;
var G__15377 = 0;
seq__15293_15309 = G__15374;
chunk__15294_15310 = G__15375;
count__15295_15311 = G__15376;
i__15296_15312 = G__15377;
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
}catch (e15378){if((e15378 instanceof ReferenceError))
{var __15379 = e15378;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(cljs.core.constant$keyword$105)
{throw e15378;
} else
{}
}
}dommy.template.node = (function node(data){if(cljs.core.truth_((function (){var G__15381 = data;if(G__15381)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15381.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15381.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15381);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15381);
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
