// Compiled by ClojureScript 0.0-2075
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj15179 = {};return obj15179;
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
{var str_15182 = node_str.substring(base_idx);while(true){
var next_idx_15183 = dommy.template.next_css_index(str_15182,1);var frag_15184 = (((next_idx_15183 >= 0))?str_15182.substring(0,next_idx_15183):str_15182);var G__15181_15185 = frag_15184.charAt(0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__15181_15185))
{node.setAttribute("id",frag_15184.substring(1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__15181_15185))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_15184.substring(1));
} else
{if(cljs.core.constant$keyword$105)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_15184.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_15183 >= 0))
{{
var G__15186 = str_15182.substring(next_idx_15183);
str_15182 = G__15186;
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
var __GT_document_fragment__2 = (function (result_frag,data){if(cljs.core.truth_((function (){var G__15192 = data;if(G__15192)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15192.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15192.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15192);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15192);
}
})()))
{result_frag.appendChild(dommy.template._elem(data));
return result_frag;
} else
{if(cljs.core.truth_(cljs.core.seq_QMARK_(data)))
{var seq__15193_15197 = cljs.core.seq(data);var chunk__15194_15198 = null;var count__15195_15199 = 0;var i__15196_15200 = 0;while(true){
if((i__15196_15200 < count__15195_15199))
{var child_15201 = chunk__15194_15198.cljs$core$IIndexed$_nth$arity$2(null,i__15196_15200);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_15201);
{
var G__15202 = seq__15193_15197;
var G__15203 = chunk__15194_15198;
var G__15204 = count__15195_15199;
var G__15205 = (i__15196_15200 + 1);
seq__15193_15197 = G__15202;
chunk__15194_15198 = G__15203;
count__15195_15199 = G__15204;
i__15196_15200 = G__15205;
continue;
}
} else
{var temp__4092__auto___15206 = cljs.core.seq(seq__15193_15197);if(cljs.core.truth_(temp__4092__auto___15206))
{var seq__15193_15207__$1 = temp__4092__auto___15206;if(cljs.core.chunked_seq_QMARK_(seq__15193_15207__$1))
{var c__4010__auto___15208 = cljs.core.chunk_first(seq__15193_15207__$1);{
var G__15209 = cljs.core.chunk_rest(seq__15193_15207__$1);
var G__15210 = c__4010__auto___15208;
var G__15211 = cljs.core.count(c__4010__auto___15208);
var G__15212 = 0;
seq__15193_15197 = G__15209;
chunk__15194_15198 = G__15210;
count__15195_15199 = G__15211;
i__15196_15200 = G__15212;
continue;
}
} else
{var child_15213 = cljs.core.first(seq__15193_15207__$1);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_15213);
{
var G__15214 = cljs.core.next(seq__15193_15207__$1);
var G__15215 = null;
var G__15216 = 0;
var G__15217 = 0;
seq__15193_15197 = G__15214;
chunk__15194_15198 = G__15215;
count__15195_15199 = G__15216;
i__15196_15200 = G__15217;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if(cljs.core.truth_((function (){var G__15219 = data;if(G__15219)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15219.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15219.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15219);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15219);
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
dommy.template.compound_element = (function compound_element(p__15220){var vec__15239 = p__15220;var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15239,0,null);var maybe_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15239,1,null);var children = cljs.core.nthnext(vec__15239,2);var n = dommy.template.base_element(tag_name);var attrs = (cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.map_QMARK_(maybe_attrs);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not((function (){var G__15240 = maybe_attrs;if(G__15240)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15240.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15240.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15240);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15240);
}
})());
} else
{return and__3279__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));var seq__15241_15257 = cljs.core.seq(attrs);var chunk__15242_15258 = null;var count__15243_15259 = 0;var i__15244_15260 = 0;while(true){
if((i__15244_15260 < count__15243_15259))
{var vec__15245_15261 = chunk__15242_15258.cljs$core$IIndexed$_nth$arity$2(null,i__15244_15260);var k_15262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15245_15261,0,null);var v_15263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15245_15261,1,null);var G__15246_15264 = k_15262;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$169,G__15246_15264))
{var seq__15247_15265 = cljs.core.seq(v_15263);var chunk__15248_15266 = null;var count__15249_15267 = 0;var i__15250_15268 = 0;while(true){
if((i__15250_15268 < count__15249_15267))
{var c_15269 = chunk__15248_15266.cljs$core$IIndexed$_nth$arity$2(null,i__15250_15268);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_15269);
{
var G__15270 = seq__15247_15265;
var G__15271 = chunk__15248_15266;
var G__15272 = count__15249_15267;
var G__15273 = (i__15250_15268 + 1);
seq__15247_15265 = G__15270;
chunk__15248_15266 = G__15271;
count__15249_15267 = G__15272;
i__15250_15268 = G__15273;
continue;
}
} else
{var temp__4092__auto___15274 = cljs.core.seq(seq__15247_15265);if(cljs.core.truth_(temp__4092__auto___15274))
{var seq__15247_15275__$1 = temp__4092__auto___15274;if(cljs.core.chunked_seq_QMARK_(seq__15247_15275__$1))
{var c__4010__auto___15276 = cljs.core.chunk_first(seq__15247_15275__$1);{
var G__15277 = cljs.core.chunk_rest(seq__15247_15275__$1);
var G__15278 = c__4010__auto___15276;
var G__15279 = cljs.core.count(c__4010__auto___15276);
var G__15280 = 0;
seq__15247_15265 = G__15277;
chunk__15248_15266 = G__15278;
count__15249_15267 = G__15279;
i__15250_15268 = G__15280;
continue;
}
} else
{var c_15281 = cljs.core.first(seq__15247_15275__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_15281);
{
var G__15282 = cljs.core.next(seq__15247_15275__$1);
var G__15283 = null;
var G__15284 = 0;
var G__15285 = 0;
seq__15247_15265 = G__15282;
chunk__15248_15266 = G__15283;
count__15249_15267 = G__15284;
i__15250_15268 = G__15285;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$168,G__15246_15264))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_15263);
} else
{if(cljs.core.constant$keyword$105)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_15262,v_15263);
} else
{}
}
}
{
var G__15286 = seq__15241_15257;
var G__15287 = chunk__15242_15258;
var G__15288 = count__15243_15259;
var G__15289 = (i__15244_15260 + 1);
seq__15241_15257 = G__15286;
chunk__15242_15258 = G__15287;
count__15243_15259 = G__15288;
i__15244_15260 = G__15289;
continue;
}
} else
{var temp__4092__auto___15290 = cljs.core.seq(seq__15241_15257);if(cljs.core.truth_(temp__4092__auto___15290))
{var seq__15241_15291__$1 = temp__4092__auto___15290;if(cljs.core.chunked_seq_QMARK_(seq__15241_15291__$1))
{var c__4010__auto___15292 = cljs.core.chunk_first(seq__15241_15291__$1);{
var G__15293 = cljs.core.chunk_rest(seq__15241_15291__$1);
var G__15294 = c__4010__auto___15292;
var G__15295 = cljs.core.count(c__4010__auto___15292);
var G__15296 = 0;
seq__15241_15257 = G__15293;
chunk__15242_15258 = G__15294;
count__15243_15259 = G__15295;
i__15244_15260 = G__15296;
continue;
}
} else
{var vec__15251_15297 = cljs.core.first(seq__15241_15291__$1);var k_15298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15251_15297,0,null);var v_15299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15251_15297,1,null);var G__15252_15300 = k_15298;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$169,G__15252_15300))
{var seq__15253_15301 = cljs.core.seq(v_15299);var chunk__15254_15302 = null;var count__15255_15303 = 0;var i__15256_15304 = 0;while(true){
if((i__15256_15304 < count__15255_15303))
{var c_15305 = chunk__15254_15302.cljs$core$IIndexed$_nth$arity$2(null,i__15256_15304);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_15305);
{
var G__15306 = seq__15253_15301;
var G__15307 = chunk__15254_15302;
var G__15308 = count__15255_15303;
var G__15309 = (i__15256_15304 + 1);
seq__15253_15301 = G__15306;
chunk__15254_15302 = G__15307;
count__15255_15303 = G__15308;
i__15256_15304 = G__15309;
continue;
}
} else
{var temp__4092__auto___15310__$1 = cljs.core.seq(seq__15253_15301);if(cljs.core.truth_(temp__4092__auto___15310__$1))
{var seq__15253_15311__$1 = temp__4092__auto___15310__$1;if(cljs.core.chunked_seq_QMARK_(seq__15253_15311__$1))
{var c__4010__auto___15312 = cljs.core.chunk_first(seq__15253_15311__$1);{
var G__15313 = cljs.core.chunk_rest(seq__15253_15311__$1);
var G__15314 = c__4010__auto___15312;
var G__15315 = cljs.core.count(c__4010__auto___15312);
var G__15316 = 0;
seq__15253_15301 = G__15313;
chunk__15254_15302 = G__15314;
count__15255_15303 = G__15315;
i__15256_15304 = G__15316;
continue;
}
} else
{var c_15317 = cljs.core.first(seq__15253_15311__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_15317);
{
var G__15318 = cljs.core.next(seq__15253_15311__$1);
var G__15319 = null;
var G__15320 = 0;
var G__15321 = 0;
seq__15253_15301 = G__15318;
chunk__15254_15302 = G__15319;
count__15255_15303 = G__15320;
i__15256_15304 = G__15321;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$168,G__15252_15300))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_15299);
} else
{if(cljs.core.constant$keyword$105)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_15298,v_15299);
} else
{}
}
}
{
var G__15322 = cljs.core.next(seq__15241_15291__$1);
var G__15323 = null;
var G__15324 = 0;
var G__15325 = 0;
seq__15241_15257 = G__15322;
chunk__15242_15258 = G__15323;
count__15243_15259 = G__15324;
i__15244_15260 = G__15325;
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
}catch (e15326){if((e15326 instanceof ReferenceError))
{var __15327 = e15326;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(cljs.core.constant$keyword$105)
{throw e15326;
} else
{}
}
}dommy.template.node = (function node(data){if(cljs.core.truth_((function (){var G__15329 = data;if(G__15329)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15329.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15329.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15329);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15329);
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
