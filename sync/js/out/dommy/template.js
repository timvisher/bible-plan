// Compiled by ClojureScript 0.0-2075
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj15971 = {};return obj15971;
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
{var str_15974 = node_str.substring(base_idx);while(true){
var next_idx_15975 = dommy.template.next_css_index(str_15974,1);var frag_15976 = (((next_idx_15975 >= 0))?str_15974.substring(0,next_idx_15975):str_15974);var G__15973_15977 = frag_15976.charAt(0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__15973_15977))
{node.setAttribute("id",frag_15976.substring(1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__15973_15977))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_15976.substring(1));
} else
{if(cljs.core.constant$keyword$105)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_15976.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_15975 >= 0))
{{
var G__15978 = str_15974.substring(next_idx_15975);
str_15974 = G__15978;
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
var __GT_document_fragment__2 = (function (result_frag,data){if(cljs.core.truth_((function (){var G__15984 = data;if(G__15984)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15984.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15984.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15984);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__15984);
}
})()))
{result_frag.appendChild(dommy.template._elem(data));
return result_frag;
} else
{if(cljs.core.truth_(cljs.core.seq_QMARK_(data)))
{var seq__15985_15989 = cljs.core.seq(data);var chunk__15986_15990 = null;var count__15987_15991 = 0;var i__15988_15992 = 0;while(true){
if((i__15988_15992 < count__15987_15991))
{var child_15993 = chunk__15986_15990.cljs$core$IIndexed$_nth$arity$2(null,i__15988_15992);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_15993);
{
var G__15994 = seq__15985_15989;
var G__15995 = chunk__15986_15990;
var G__15996 = count__15987_15991;
var G__15997 = (i__15988_15992 + 1);
seq__15985_15989 = G__15994;
chunk__15986_15990 = G__15995;
count__15987_15991 = G__15996;
i__15988_15992 = G__15997;
continue;
}
} else
{var temp__4092__auto___15998 = cljs.core.seq(seq__15985_15989);if(cljs.core.truth_(temp__4092__auto___15998))
{var seq__15985_15999__$1 = temp__4092__auto___15998;if(cljs.core.chunked_seq_QMARK_(seq__15985_15999__$1))
{var c__4010__auto___16000 = cljs.core.chunk_first(seq__15985_15999__$1);{
var G__16001 = cljs.core.chunk_rest(seq__15985_15999__$1);
var G__16002 = c__4010__auto___16000;
var G__16003 = cljs.core.count(c__4010__auto___16000);
var G__16004 = 0;
seq__15985_15989 = G__16001;
chunk__15986_15990 = G__16002;
count__15987_15991 = G__16003;
i__15988_15992 = G__16004;
continue;
}
} else
{var child_16005 = cljs.core.first(seq__15985_15999__$1);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_16005);
{
var G__16006 = cljs.core.next(seq__15985_15999__$1);
var G__16007 = null;
var G__16008 = 0;
var G__16009 = 0;
seq__15985_15989 = G__16006;
chunk__15986_15990 = G__16007;
count__15987_15991 = G__16008;
i__15988_15992 = G__16009;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if(cljs.core.truth_((function (){var G__16011 = data;if(G__16011)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__16011.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16011.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__16011);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__16011);
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
dommy.template.compound_element = (function compound_element(p__16012){var vec__16031 = p__16012;var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16031,0,null);var maybe_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16031,1,null);var children = cljs.core.nthnext(vec__16031,2);var n = dommy.template.base_element(tag_name);var attrs = (cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.map_QMARK_(maybe_attrs);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not((function (){var G__16032 = maybe_attrs;if(G__16032)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__16032.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16032.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__16032);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__16032);
}
})());
} else
{return and__3279__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));var seq__16033_16049 = cljs.core.seq(attrs);var chunk__16034_16050 = null;var count__16035_16051 = 0;var i__16036_16052 = 0;while(true){
if((i__16036_16052 < count__16035_16051))
{var vec__16037_16053 = chunk__16034_16050.cljs$core$IIndexed$_nth$arity$2(null,i__16036_16052);var k_16054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16037_16053,0,null);var v_16055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16037_16053,1,null);var G__16038_16056 = k_16054;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$172,G__16038_16056))
{var seq__16039_16057 = cljs.core.seq(v_16055);var chunk__16040_16058 = null;var count__16041_16059 = 0;var i__16042_16060 = 0;while(true){
if((i__16042_16060 < count__16041_16059))
{var c_16061 = chunk__16040_16058.cljs$core$IIndexed$_nth$arity$2(null,i__16042_16060);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_16061);
{
var G__16062 = seq__16039_16057;
var G__16063 = chunk__16040_16058;
var G__16064 = count__16041_16059;
var G__16065 = (i__16042_16060 + 1);
seq__16039_16057 = G__16062;
chunk__16040_16058 = G__16063;
count__16041_16059 = G__16064;
i__16042_16060 = G__16065;
continue;
}
} else
{var temp__4092__auto___16066 = cljs.core.seq(seq__16039_16057);if(cljs.core.truth_(temp__4092__auto___16066))
{var seq__16039_16067__$1 = temp__4092__auto___16066;if(cljs.core.chunked_seq_QMARK_(seq__16039_16067__$1))
{var c__4010__auto___16068 = cljs.core.chunk_first(seq__16039_16067__$1);{
var G__16069 = cljs.core.chunk_rest(seq__16039_16067__$1);
var G__16070 = c__4010__auto___16068;
var G__16071 = cljs.core.count(c__4010__auto___16068);
var G__16072 = 0;
seq__16039_16057 = G__16069;
chunk__16040_16058 = G__16070;
count__16041_16059 = G__16071;
i__16042_16060 = G__16072;
continue;
}
} else
{var c_16073 = cljs.core.first(seq__16039_16067__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_16073);
{
var G__16074 = cljs.core.next(seq__16039_16067__$1);
var G__16075 = null;
var G__16076 = 0;
var G__16077 = 0;
seq__16039_16057 = G__16074;
chunk__16040_16058 = G__16075;
count__16041_16059 = G__16076;
i__16042_16060 = G__16077;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$171,G__16038_16056))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_16055);
} else
{if(cljs.core.constant$keyword$105)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_16054,v_16055);
} else
{}
}
}
{
var G__16078 = seq__16033_16049;
var G__16079 = chunk__16034_16050;
var G__16080 = count__16035_16051;
var G__16081 = (i__16036_16052 + 1);
seq__16033_16049 = G__16078;
chunk__16034_16050 = G__16079;
count__16035_16051 = G__16080;
i__16036_16052 = G__16081;
continue;
}
} else
{var temp__4092__auto___16082 = cljs.core.seq(seq__16033_16049);if(cljs.core.truth_(temp__4092__auto___16082))
{var seq__16033_16083__$1 = temp__4092__auto___16082;if(cljs.core.chunked_seq_QMARK_(seq__16033_16083__$1))
{var c__4010__auto___16084 = cljs.core.chunk_first(seq__16033_16083__$1);{
var G__16085 = cljs.core.chunk_rest(seq__16033_16083__$1);
var G__16086 = c__4010__auto___16084;
var G__16087 = cljs.core.count(c__4010__auto___16084);
var G__16088 = 0;
seq__16033_16049 = G__16085;
chunk__16034_16050 = G__16086;
count__16035_16051 = G__16087;
i__16036_16052 = G__16088;
continue;
}
} else
{var vec__16043_16089 = cljs.core.first(seq__16033_16083__$1);var k_16090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16043_16089,0,null);var v_16091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16043_16089,1,null);var G__16044_16092 = k_16090;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$172,G__16044_16092))
{var seq__16045_16093 = cljs.core.seq(v_16091);var chunk__16046_16094 = null;var count__16047_16095 = 0;var i__16048_16096 = 0;while(true){
if((i__16048_16096 < count__16047_16095))
{var c_16097 = chunk__16046_16094.cljs$core$IIndexed$_nth$arity$2(null,i__16048_16096);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_16097);
{
var G__16098 = seq__16045_16093;
var G__16099 = chunk__16046_16094;
var G__16100 = count__16047_16095;
var G__16101 = (i__16048_16096 + 1);
seq__16045_16093 = G__16098;
chunk__16046_16094 = G__16099;
count__16047_16095 = G__16100;
i__16048_16096 = G__16101;
continue;
}
} else
{var temp__4092__auto___16102__$1 = cljs.core.seq(seq__16045_16093);if(cljs.core.truth_(temp__4092__auto___16102__$1))
{var seq__16045_16103__$1 = temp__4092__auto___16102__$1;if(cljs.core.chunked_seq_QMARK_(seq__16045_16103__$1))
{var c__4010__auto___16104 = cljs.core.chunk_first(seq__16045_16103__$1);{
var G__16105 = cljs.core.chunk_rest(seq__16045_16103__$1);
var G__16106 = c__4010__auto___16104;
var G__16107 = cljs.core.count(c__4010__auto___16104);
var G__16108 = 0;
seq__16045_16093 = G__16105;
chunk__16046_16094 = G__16106;
count__16047_16095 = G__16107;
i__16048_16096 = G__16108;
continue;
}
} else
{var c_16109 = cljs.core.first(seq__16045_16103__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_16109);
{
var G__16110 = cljs.core.next(seq__16045_16103__$1);
var G__16111 = null;
var G__16112 = 0;
var G__16113 = 0;
seq__16045_16093 = G__16110;
chunk__16046_16094 = G__16111;
count__16047_16095 = G__16112;
i__16048_16096 = G__16113;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$171,G__16044_16092))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_16091);
} else
{if(cljs.core.constant$keyword$105)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_16090,v_16091);
} else
{}
}
}
{
var G__16114 = cljs.core.next(seq__16033_16083__$1);
var G__16115 = null;
var G__16116 = 0;
var G__16117 = 0;
seq__16033_16049 = G__16114;
chunk__16034_16050 = G__16115;
count__16035_16051 = G__16116;
i__16036_16052 = G__16117;
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
}catch (e16118){if((e16118 instanceof ReferenceError))
{var __16119 = e16118;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(cljs.core.constant$keyword$105)
{throw e16118;
} else
{}
}
}dommy.template.node = (function node(data){if(cljs.core.truth_((function (){var G__16121 = data;if(G__16121)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__16121.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16121.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__16121);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__16121);
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
