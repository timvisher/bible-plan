// Compiled by ClojureScript 0.0-2202
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj7863 = {};return obj7863;
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
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
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
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_7866 = node_str.substring(base_idx);while(true){
var next_idx_7867 = dommy.template.next_css_index.call(null,str_7866,1);var frag_7868 = (((next_idx_7867 >= 0))?str_7866.substring(0,next_idx_7867):str_7866);var G__7865_7869 = frag_7868.charAt(0);if(cljs.core._EQ_.call(null,"#",G__7865_7869))
{node.setAttribute("id",frag_7868.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__7865_7869))
{dommy.attrs.add_class_BANG_.call(null,node,frag_7868.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_7868.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_7867 >= 0))
{{
var G__7870 = str_7866.substring(next_idx_7867);
str_7866 = G__7870;
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
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__7876 = data;if(G__7876)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__7876.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7876.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7876);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7876);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__7877_7881 = cljs.core.seq.call(null,data);var chunk__7878_7882 = null;var count__7879_7883 = 0;var i__7880_7884 = 0;while(true){
if((i__7880_7884 < count__7879_7883))
{var child_7885 = cljs.core._nth.call(null,chunk__7878_7882,i__7880_7884);__GT_document_fragment.call(null,result_frag,child_7885);
{
var G__7886 = seq__7877_7881;
var G__7887 = chunk__7878_7882;
var G__7888 = count__7879_7883;
var G__7889 = (i__7880_7884 + 1);
seq__7877_7881 = G__7886;
chunk__7878_7882 = G__7887;
count__7879_7883 = G__7888;
i__7880_7884 = G__7889;
continue;
}
} else
{var temp__4126__auto___7890 = cljs.core.seq.call(null,seq__7877_7881);if(temp__4126__auto___7890)
{var seq__7877_7891__$1 = temp__4126__auto___7890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7877_7891__$1))
{var c__4229__auto___7892 = cljs.core.chunk_first.call(null,seq__7877_7891__$1);{
var G__7893 = cljs.core.chunk_rest.call(null,seq__7877_7891__$1);
var G__7894 = c__4229__auto___7892;
var G__7895 = cljs.core.count.call(null,c__4229__auto___7892);
var G__7896 = 0;
seq__7877_7881 = G__7893;
chunk__7878_7882 = G__7894;
count__7879_7883 = G__7895;
i__7880_7884 = G__7896;
continue;
}
} else
{var child_7897 = cljs.core.first.call(null,seq__7877_7891__$1);__GT_document_fragment.call(null,result_frag,child_7897);
{
var G__7898 = cljs.core.next.call(null,seq__7877_7891__$1);
var G__7899 = null;
var G__7900 = 0;
var G__7901 = 0;
seq__7877_7881 = G__7898;
chunk__7878_7882 = G__7899;
count__7879_7883 = G__7900;
i__7880_7884 = G__7901;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__7903 = data;if(G__7903)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__7903.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7903.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7903);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7903);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__7904){var vec__7924 = p__7904;var tag_name = cljs.core.nth.call(null,vec__7924,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__7924,1,null);var children = cljs.core.nthnext.call(null,vec__7924,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__7926 = maybe_attrs;if(G__7926)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__7926.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7926.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7926);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7926);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__7927_7943 = cljs.core.seq.call(null,attrs);var chunk__7928_7944 = null;var count__7929_7945 = 0;var i__7930_7946 = 0;while(true){
if((i__7930_7946 < count__7929_7945))
{var vec__7931_7947 = cljs.core._nth.call(null,chunk__7928_7944,i__7930_7946);var k_7948 = cljs.core.nth.call(null,vec__7931_7947,0,null);var v_7949 = cljs.core.nth.call(null,vec__7931_7947,1,null);var G__7932_7950 = k_7948;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__7932_7950))
{var seq__7933_7951 = cljs.core.seq.call(null,v_7949);var chunk__7934_7952 = null;var count__7935_7953 = 0;var i__7936_7954 = 0;while(true){
if((i__7936_7954 < count__7935_7953))
{var c_7955 = cljs.core._nth.call(null,chunk__7934_7952,i__7936_7954);dommy.attrs.add_class_BANG_.call(null,n,c_7955);
{
var G__7956 = seq__7933_7951;
var G__7957 = chunk__7934_7952;
var G__7958 = count__7935_7953;
var G__7959 = (i__7936_7954 + 1);
seq__7933_7951 = G__7956;
chunk__7934_7952 = G__7957;
count__7935_7953 = G__7958;
i__7936_7954 = G__7959;
continue;
}
} else
{var temp__4126__auto___7960 = cljs.core.seq.call(null,seq__7933_7951);if(temp__4126__auto___7960)
{var seq__7933_7961__$1 = temp__4126__auto___7960;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7933_7961__$1))
{var c__4229__auto___7962 = cljs.core.chunk_first.call(null,seq__7933_7961__$1);{
var G__7963 = cljs.core.chunk_rest.call(null,seq__7933_7961__$1);
var G__7964 = c__4229__auto___7962;
var G__7965 = cljs.core.count.call(null,c__4229__auto___7962);
var G__7966 = 0;
seq__7933_7951 = G__7963;
chunk__7934_7952 = G__7964;
count__7935_7953 = G__7965;
i__7936_7954 = G__7966;
continue;
}
} else
{var c_7967 = cljs.core.first.call(null,seq__7933_7961__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7967);
{
var G__7968 = cljs.core.next.call(null,seq__7933_7961__$1);
var G__7969 = null;
var G__7970 = 0;
var G__7971 = 0;
seq__7933_7951 = G__7968;
chunk__7934_7952 = G__7969;
count__7935_7953 = G__7970;
i__7936_7954 = G__7971;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__7932_7950))
{dommy.attrs.add_class_BANG_.call(null,n,v_7949);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_7948,v_7949);
} else
{}
}
}
{
var G__7972 = seq__7927_7943;
var G__7973 = chunk__7928_7944;
var G__7974 = count__7929_7945;
var G__7975 = (i__7930_7946 + 1);
seq__7927_7943 = G__7972;
chunk__7928_7944 = G__7973;
count__7929_7945 = G__7974;
i__7930_7946 = G__7975;
continue;
}
} else
{var temp__4126__auto___7976 = cljs.core.seq.call(null,seq__7927_7943);if(temp__4126__auto___7976)
{var seq__7927_7977__$1 = temp__4126__auto___7976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7927_7977__$1))
{var c__4229__auto___7978 = cljs.core.chunk_first.call(null,seq__7927_7977__$1);{
var G__7979 = cljs.core.chunk_rest.call(null,seq__7927_7977__$1);
var G__7980 = c__4229__auto___7978;
var G__7981 = cljs.core.count.call(null,c__4229__auto___7978);
var G__7982 = 0;
seq__7927_7943 = G__7979;
chunk__7928_7944 = G__7980;
count__7929_7945 = G__7981;
i__7930_7946 = G__7982;
continue;
}
} else
{var vec__7937_7983 = cljs.core.first.call(null,seq__7927_7977__$1);var k_7984 = cljs.core.nth.call(null,vec__7937_7983,0,null);var v_7985 = cljs.core.nth.call(null,vec__7937_7983,1,null);var G__7938_7986 = k_7984;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__7938_7986))
{var seq__7939_7987 = cljs.core.seq.call(null,v_7985);var chunk__7940_7988 = null;var count__7941_7989 = 0;var i__7942_7990 = 0;while(true){
if((i__7942_7990 < count__7941_7989))
{var c_7991 = cljs.core._nth.call(null,chunk__7940_7988,i__7942_7990);dommy.attrs.add_class_BANG_.call(null,n,c_7991);
{
var G__7992 = seq__7939_7987;
var G__7993 = chunk__7940_7988;
var G__7994 = count__7941_7989;
var G__7995 = (i__7942_7990 + 1);
seq__7939_7987 = G__7992;
chunk__7940_7988 = G__7993;
count__7941_7989 = G__7994;
i__7942_7990 = G__7995;
continue;
}
} else
{var temp__4126__auto___7996__$1 = cljs.core.seq.call(null,seq__7939_7987);if(temp__4126__auto___7996__$1)
{var seq__7939_7997__$1 = temp__4126__auto___7996__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7939_7997__$1))
{var c__4229__auto___7998 = cljs.core.chunk_first.call(null,seq__7939_7997__$1);{
var G__7999 = cljs.core.chunk_rest.call(null,seq__7939_7997__$1);
var G__8000 = c__4229__auto___7998;
var G__8001 = cljs.core.count.call(null,c__4229__auto___7998);
var G__8002 = 0;
seq__7939_7987 = G__7999;
chunk__7940_7988 = G__8000;
count__7941_7989 = G__8001;
i__7942_7990 = G__8002;
continue;
}
} else
{var c_8003 = cljs.core.first.call(null,seq__7939_7997__$1);dommy.attrs.add_class_BANG_.call(null,n,c_8003);
{
var G__8004 = cljs.core.next.call(null,seq__7939_7997__$1);
var G__8005 = null;
var G__8006 = 0;
var G__8007 = 0;
seq__7939_7987 = G__8004;
chunk__7940_7988 = G__8005;
count__7941_7989 = G__8006;
i__7942_7990 = G__8007;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__7938_7986))
{dommy.attrs.add_class_BANG_.call(null,n,v_7985);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_7984,v_7985);
} else
{}
}
}
{
var G__8008 = cljs.core.next.call(null,seq__7927_7977__$1);
var G__8009 = null;
var G__8010 = 0;
var G__8011 = 0;
seq__7927_7943 = G__8008;
chunk__7928_7944 = G__8009;
count__7929_7945 = G__8010;
i__7930_7946 = G__8011;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
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
}catch (e8012){if((e8012 instanceof ReferenceError))
{var __8013 = e8012;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8012;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__8015 = data;if(G__8015)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__8015.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8015.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8015);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8015);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
