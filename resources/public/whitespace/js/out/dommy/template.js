// Compiled by ClojureScript 0.0-2075
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj10038 = {};return obj10038;
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
{var str_10041 = node_str.substring(base_idx);while(true){
var next_idx_10042 = dommy.template.next_css_index.call(null,str_10041,1);var frag_10043 = (((next_idx_10042 >= 0))?str_10041.substring(0,next_idx_10042):str_10041);var G__10040_10044 = frag_10043.charAt(0);if(cljs.core._EQ_.call(null,"#",G__10040_10044))
{node.setAttribute("id",frag_10043.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__10040_10044))
{dommy.attrs.add_class_BANG_.call(null,node,frag_10043.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_10043.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_10042 >= 0))
{{
var G__10045 = str_10041.substring(next_idx_10042);
str_10041 = G__10045;
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
var __GT_document_fragment__2 = (function (result_frag,data){if(cljs.core.truth_((function (){var G__10051 = data;if(G__10051)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__10051.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10051.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10051);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10051);
}
})()))
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,data)))
{var seq__10052_10056 = cljs.core.seq.call(null,data);var chunk__10053_10057 = null;var count__10054_10058 = 0;var i__10055_10059 = 0;while(true){
if((i__10055_10059 < count__10054_10058))
{var child_10060 = cljs.core._nth.call(null,chunk__10053_10057,i__10055_10059);__GT_document_fragment.call(null,result_frag,child_10060);
{
var G__10061 = seq__10052_10056;
var G__10062 = chunk__10053_10057;
var G__10063 = count__10054_10058;
var G__10064 = (i__10055_10059 + 1);
seq__10052_10056 = G__10061;
chunk__10053_10057 = G__10062;
count__10054_10058 = G__10063;
i__10055_10059 = G__10064;
continue;
}
} else
{var temp__4092__auto___10065 = cljs.core.seq.call(null,seq__10052_10056);if(cljs.core.truth_(temp__4092__auto___10065))
{var seq__10052_10066__$1 = temp__4092__auto___10065;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10052_10066__$1))
{var c__4010__auto___10067 = cljs.core.chunk_first.call(null,seq__10052_10066__$1);{
var G__10068 = cljs.core.chunk_rest.call(null,seq__10052_10066__$1);
var G__10069 = c__4010__auto___10067;
var G__10070 = cljs.core.count.call(null,c__4010__auto___10067);
var G__10071 = 0;
seq__10052_10056 = G__10068;
chunk__10053_10057 = G__10069;
count__10054_10058 = G__10070;
i__10055_10059 = G__10071;
continue;
}
} else
{var child_10072 = cljs.core.first.call(null,seq__10052_10066__$1);__GT_document_fragment.call(null,result_frag,child_10072);
{
var G__10073 = cljs.core.next.call(null,seq__10052_10066__$1);
var G__10074 = null;
var G__10075 = 0;
var G__10076 = 0;
seq__10052_10056 = G__10073;
chunk__10053_10057 = G__10074;
count__10054_10058 = G__10075;
i__10055_10059 = G__10076;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if(cljs.core.truth_((function (){var G__10078 = data;if(G__10078)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__10078.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10078.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10078);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10078);
}
})()))
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__10079){var vec__10098 = p__10079;var tag_name = cljs.core.nth.call(null,vec__10098,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__10098,1,null);var children = cljs.core.nthnext.call(null,vec__10098,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not.call(null,(function (){var G__10099 = maybe_attrs;if(G__10099)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__10099.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10099.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10099);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10099);
}
})());
} else
{return and__3279__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__10100_10116 = cljs.core.seq.call(null,attrs);var chunk__10101_10117 = null;var count__10102_10118 = 0;var i__10103_10119 = 0;while(true){
if((i__10103_10119 < count__10102_10118))
{var vec__10104_10120 = cljs.core._nth.call(null,chunk__10101_10117,i__10103_10119);var k_10121 = cljs.core.nth.call(null,vec__10104_10120,0,null);var v_10122 = cljs.core.nth.call(null,vec__10104_10120,1,null);var G__10105_10123 = k_10121;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__10105_10123))
{var seq__10106_10124 = cljs.core.seq.call(null,v_10122);var chunk__10107_10125 = null;var count__10108_10126 = 0;var i__10109_10127 = 0;while(true){
if((i__10109_10127 < count__10108_10126))
{var c_10128 = cljs.core._nth.call(null,chunk__10107_10125,i__10109_10127);dommy.attrs.add_class_BANG_.call(null,n,c_10128);
{
var G__10129 = seq__10106_10124;
var G__10130 = chunk__10107_10125;
var G__10131 = count__10108_10126;
var G__10132 = (i__10109_10127 + 1);
seq__10106_10124 = G__10129;
chunk__10107_10125 = G__10130;
count__10108_10126 = G__10131;
i__10109_10127 = G__10132;
continue;
}
} else
{var temp__4092__auto___10133 = cljs.core.seq.call(null,seq__10106_10124);if(cljs.core.truth_(temp__4092__auto___10133))
{var seq__10106_10134__$1 = temp__4092__auto___10133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10106_10134__$1))
{var c__4010__auto___10135 = cljs.core.chunk_first.call(null,seq__10106_10134__$1);{
var G__10136 = cljs.core.chunk_rest.call(null,seq__10106_10134__$1);
var G__10137 = c__4010__auto___10135;
var G__10138 = cljs.core.count.call(null,c__4010__auto___10135);
var G__10139 = 0;
seq__10106_10124 = G__10136;
chunk__10107_10125 = G__10137;
count__10108_10126 = G__10138;
i__10109_10127 = G__10139;
continue;
}
} else
{var c_10140 = cljs.core.first.call(null,seq__10106_10134__$1);dommy.attrs.add_class_BANG_.call(null,n,c_10140);
{
var G__10141 = cljs.core.next.call(null,seq__10106_10134__$1);
var G__10142 = null;
var G__10143 = 0;
var G__10144 = 0;
seq__10106_10124 = G__10141;
chunk__10107_10125 = G__10142;
count__10108_10126 = G__10143;
i__10109_10127 = G__10144;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__10105_10123))
{dommy.attrs.add_class_BANG_.call(null,n,v_10122);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_10121,v_10122);
} else
{}
}
}
{
var G__10145 = seq__10100_10116;
var G__10146 = chunk__10101_10117;
var G__10147 = count__10102_10118;
var G__10148 = (i__10103_10119 + 1);
seq__10100_10116 = G__10145;
chunk__10101_10117 = G__10146;
count__10102_10118 = G__10147;
i__10103_10119 = G__10148;
continue;
}
} else
{var temp__4092__auto___10149 = cljs.core.seq.call(null,seq__10100_10116);if(cljs.core.truth_(temp__4092__auto___10149))
{var seq__10100_10150__$1 = temp__4092__auto___10149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10100_10150__$1))
{var c__4010__auto___10151 = cljs.core.chunk_first.call(null,seq__10100_10150__$1);{
var G__10152 = cljs.core.chunk_rest.call(null,seq__10100_10150__$1);
var G__10153 = c__4010__auto___10151;
var G__10154 = cljs.core.count.call(null,c__4010__auto___10151);
var G__10155 = 0;
seq__10100_10116 = G__10152;
chunk__10101_10117 = G__10153;
count__10102_10118 = G__10154;
i__10103_10119 = G__10155;
continue;
}
} else
{var vec__10110_10156 = cljs.core.first.call(null,seq__10100_10150__$1);var k_10157 = cljs.core.nth.call(null,vec__10110_10156,0,null);var v_10158 = cljs.core.nth.call(null,vec__10110_10156,1,null);var G__10111_10159 = k_10157;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__10111_10159))
{var seq__10112_10160 = cljs.core.seq.call(null,v_10158);var chunk__10113_10161 = null;var count__10114_10162 = 0;var i__10115_10163 = 0;while(true){
if((i__10115_10163 < count__10114_10162))
{var c_10164 = cljs.core._nth.call(null,chunk__10113_10161,i__10115_10163);dommy.attrs.add_class_BANG_.call(null,n,c_10164);
{
var G__10165 = seq__10112_10160;
var G__10166 = chunk__10113_10161;
var G__10167 = count__10114_10162;
var G__10168 = (i__10115_10163 + 1);
seq__10112_10160 = G__10165;
chunk__10113_10161 = G__10166;
count__10114_10162 = G__10167;
i__10115_10163 = G__10168;
continue;
}
} else
{var temp__4092__auto___10169__$1 = cljs.core.seq.call(null,seq__10112_10160);if(cljs.core.truth_(temp__4092__auto___10169__$1))
{var seq__10112_10170__$1 = temp__4092__auto___10169__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10112_10170__$1))
{var c__4010__auto___10171 = cljs.core.chunk_first.call(null,seq__10112_10170__$1);{
var G__10172 = cljs.core.chunk_rest.call(null,seq__10112_10170__$1);
var G__10173 = c__4010__auto___10171;
var G__10174 = cljs.core.count.call(null,c__4010__auto___10171);
var G__10175 = 0;
seq__10112_10160 = G__10172;
chunk__10113_10161 = G__10173;
count__10114_10162 = G__10174;
i__10115_10163 = G__10175;
continue;
}
} else
{var c_10176 = cljs.core.first.call(null,seq__10112_10170__$1);dommy.attrs.add_class_BANG_.call(null,n,c_10176);
{
var G__10177 = cljs.core.next.call(null,seq__10112_10170__$1);
var G__10178 = null;
var G__10179 = 0;
var G__10180 = 0;
seq__10112_10160 = G__10177;
chunk__10113_10161 = G__10178;
count__10114_10162 = G__10179;
i__10115_10163 = G__10180;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__10111_10159))
{dommy.attrs.add_class_BANG_.call(null,n,v_10158);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_10157,v_10158);
} else
{}
}
}
{
var G__10181 = cljs.core.next.call(null,seq__10100_10150__$1);
var G__10182 = null;
var G__10183 = 0;
var G__10184 = 0;
seq__10100_10116 = G__10181;
chunk__10101_10117 = G__10182;
count__10102_10118 = G__10183;
i__10103_10119 = G__10184;
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
}catch (e10185){if((e10185 instanceof ReferenceError))
{var __10186 = e10185;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10185;
} else
{}
}
}dommy.template.node = (function node(data){if(cljs.core.truth_((function (){var G__10188 = data;if(G__10188)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__10188.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10188.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10188);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10188);
}
})()))
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
