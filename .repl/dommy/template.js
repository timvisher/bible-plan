goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('clojure.string');
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4348__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__4348__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (dommy.template._elem["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
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
dommy.template.next_css_index = (function next_css_index(s,start_idx){
var id_idx = s.indexOf("#",start_idx);
var class_idx = s.indexOf(".",start_idx);
var idx = Math.min(id_idx,class_idx);
if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){
var node_str = cljs.core.name.call(null,node_key);
var base_idx = dommy.template.next_css_index.call(null,node_str,0);
var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":(("\uFDD0:else")?node_str:null)));
var node = document.createElement(tag);
if((base_idx >= 0))
{var str_5866 = node_str.substring(base_idx);
while(true){
var next_idx_5867 = dommy.template.next_css_index.call(null,str_5866,1);
var frag_5868 = (((next_idx_5867 >= 0))?str_5866.substring(0,next_idx_5867):str_5866);
var G__5865_5869 = frag_5868.charAt(0);
if(cljs.core._EQ_.call(null,"#",G__5865_5869))
{node.setAttribute("id",frag_5868.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__5865_5869))
{dommy.attrs.add_class_BANG_.call(null,node,frag_5868.substring(1));
} else
{if("\uFDD0:else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_5868.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_5867 >= 0))
{{
var G__5870 = str_5866.substring(next_idx_5867);
str_5866 = G__5870;
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
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){
throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){
return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){
if((function (){var G__5876 = data;
if(G__5876)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5876.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5876.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5876);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5876);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__5877_5881 = cljs.core.seq.call(null,data);
var chunk__5878_5882 = null;
var count__5879_5883 = 0;
var i__5880_5884 = 0;
while(true){
if((i__5880_5884 < count__5879_5883))
{var child_5885 = cljs.core._nth.call(null,chunk__5878_5882,i__5880_5884);
__GT_document_fragment.call(null,result_frag,child_5885);
{
var G__5886 = seq__5877_5881;
var G__5887 = chunk__5878_5882;
var G__5888 = count__5879_5883;
var G__5889 = (i__5880_5884 + 1);
seq__5877_5881 = G__5886;
chunk__5878_5882 = G__5887;
count__5879_5883 = G__5888;
i__5880_5884 = G__5889;
continue;
}
} else
{var temp__4092__auto___5890 = cljs.core.seq.call(null,seq__5877_5881);
if(temp__4092__auto___5890)
{var seq__5877_5891__$1 = temp__4092__auto___5890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5877_5891__$1))
{var c__4479__auto___5892 = cljs.core.chunk_first.call(null,seq__5877_5891__$1);
{
var G__5893 = cljs.core.chunk_rest.call(null,seq__5877_5891__$1);
var G__5894 = c__4479__auto___5892;
var G__5895 = cljs.core.count.call(null,c__4479__auto___5892);
var G__5896 = 0;
seq__5877_5881 = G__5893;
chunk__5878_5882 = G__5894;
count__5879_5883 = G__5895;
i__5880_5884 = G__5896;
continue;
}
} else
{var child_5897 = cljs.core.first.call(null,seq__5877_5891__$1);
__GT_document_fragment.call(null,result_frag,child_5897);
{
var G__5898 = cljs.core.next.call(null,seq__5877_5891__$1);
var G__5899 = null;
var G__5900 = 0;
var G__5901 = 0;
seq__5877_5881 = G__5898;
chunk__5878_5882 = G__5899;
count__5879_5883 = G__5900;
i__5880_5884 = G__5901;
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
{if("\uFDD0:else")
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
dommy.template.__GT_node_like = (function __GT_node_like(data){
if((function (){var G__5903 = data;
if(G__5903)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5903.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5903.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5903);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5903);
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
dommy.template.compound_element = (function compound_element(p__5904){
var vec__5923 = p__5904;
var tag_name = cljs.core.nth.call(null,vec__5923,0,null);
var maybe_attrs = cljs.core.nth.call(null,vec__5923,1,null);
var children = cljs.core.nthnext.call(null,vec__5923,2);
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);
if(and__3941__auto__)
{return !((function (){var G__5924 = maybe_attrs;
if(G__5924)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__5924.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5924.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5924);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__5924);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var seq__5925_5941 = cljs.core.seq.call(null,attrs);
var chunk__5926_5942 = null;
var count__5927_5943 = 0;
var i__5928_5944 = 0;
while(true){
if((i__5928_5944 < count__5927_5943))
{var vec__5929_5945 = cljs.core._nth.call(null,chunk__5926_5942,i__5928_5944);
var k_5946 = cljs.core.nth.call(null,vec__5929_5945,0,null);
var v_5947 = cljs.core.nth.call(null,vec__5929_5945,1,null);
var G__5930_5948 = k_5946;
if(cljs.core._EQ_.call(null,"\uFDD0:classes",G__5930_5948))
{var seq__5931_5949 = cljs.core.seq.call(null,v_5947);
var chunk__5932_5950 = null;
var count__5933_5951 = 0;
var i__5934_5952 = 0;
while(true){
if((i__5934_5952 < count__5933_5951))
{var c_5953 = cljs.core._nth.call(null,chunk__5932_5950,i__5934_5952);
dommy.attrs.add_class_BANG_.call(null,n,c_5953);
{
var G__5954 = seq__5931_5949;
var G__5955 = chunk__5932_5950;
var G__5956 = count__5933_5951;
var G__5957 = (i__5934_5952 + 1);
seq__5931_5949 = G__5954;
chunk__5932_5950 = G__5955;
count__5933_5951 = G__5956;
i__5934_5952 = G__5957;
continue;
}
} else
{var temp__4092__auto___5958 = cljs.core.seq.call(null,seq__5931_5949);
if(temp__4092__auto___5958)
{var seq__5931_5959__$1 = temp__4092__auto___5958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5931_5959__$1))
{var c__4479__auto___5960 = cljs.core.chunk_first.call(null,seq__5931_5959__$1);
{
var G__5961 = cljs.core.chunk_rest.call(null,seq__5931_5959__$1);
var G__5962 = c__4479__auto___5960;
var G__5963 = cljs.core.count.call(null,c__4479__auto___5960);
var G__5964 = 0;
seq__5931_5949 = G__5961;
chunk__5932_5950 = G__5962;
count__5933_5951 = G__5963;
i__5934_5952 = G__5964;
continue;
}
} else
{var c_5965 = cljs.core.first.call(null,seq__5931_5959__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_5965);
{
var G__5966 = cljs.core.next.call(null,seq__5931_5959__$1);
var G__5967 = null;
var G__5968 = 0;
var G__5969 = 0;
seq__5931_5949 = G__5966;
chunk__5932_5950 = G__5967;
count__5933_5951 = G__5968;
i__5934_5952 = G__5969;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:class",G__5930_5948))
{dommy.attrs.add_class_BANG_.call(null,n,v_5947);
} else
{if("\uFDD0:else")
{dommy.attrs.set_attr_BANG_.call(null,n,k_5946,v_5947);
} else
{}
}
}
{
var G__5970 = seq__5925_5941;
var G__5971 = chunk__5926_5942;
var G__5972 = count__5927_5943;
var G__5973 = (i__5928_5944 + 1);
seq__5925_5941 = G__5970;
chunk__5926_5942 = G__5971;
count__5927_5943 = G__5972;
i__5928_5944 = G__5973;
continue;
}
} else
{var temp__4092__auto___5974 = cljs.core.seq.call(null,seq__5925_5941);
if(temp__4092__auto___5974)
{var seq__5925_5975__$1 = temp__4092__auto___5974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5925_5975__$1))
{var c__4479__auto___5976 = cljs.core.chunk_first.call(null,seq__5925_5975__$1);
{
var G__5977 = cljs.core.chunk_rest.call(null,seq__5925_5975__$1);
var G__5978 = c__4479__auto___5976;
var G__5979 = cljs.core.count.call(null,c__4479__auto___5976);
var G__5980 = 0;
seq__5925_5941 = G__5977;
chunk__5926_5942 = G__5978;
count__5927_5943 = G__5979;
i__5928_5944 = G__5980;
continue;
}
} else
{var vec__5935_5981 = cljs.core.first.call(null,seq__5925_5975__$1);
var k_5982 = cljs.core.nth.call(null,vec__5935_5981,0,null);
var v_5983 = cljs.core.nth.call(null,vec__5935_5981,1,null);
var G__5936_5984 = k_5982;
if(cljs.core._EQ_.call(null,"\uFDD0:classes",G__5936_5984))
{var seq__5937_5985 = cljs.core.seq.call(null,v_5983);
var chunk__5938_5986 = null;
var count__5939_5987 = 0;
var i__5940_5988 = 0;
while(true){
if((i__5940_5988 < count__5939_5987))
{var c_5989 = cljs.core._nth.call(null,chunk__5938_5986,i__5940_5988);
dommy.attrs.add_class_BANG_.call(null,n,c_5989);
{
var G__5990 = seq__5937_5985;
var G__5991 = chunk__5938_5986;
var G__5992 = count__5939_5987;
var G__5993 = (i__5940_5988 + 1);
seq__5937_5985 = G__5990;
chunk__5938_5986 = G__5991;
count__5939_5987 = G__5992;
i__5940_5988 = G__5993;
continue;
}
} else
{var temp__4092__auto___5994__$1 = cljs.core.seq.call(null,seq__5937_5985);
if(temp__4092__auto___5994__$1)
{var seq__5937_5995__$1 = temp__4092__auto___5994__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5937_5995__$1))
{var c__4479__auto___5996 = cljs.core.chunk_first.call(null,seq__5937_5995__$1);
{
var G__5997 = cljs.core.chunk_rest.call(null,seq__5937_5995__$1);
var G__5998 = c__4479__auto___5996;
var G__5999 = cljs.core.count.call(null,c__4479__auto___5996);
var G__6000 = 0;
seq__5937_5985 = G__5997;
chunk__5938_5986 = G__5998;
count__5939_5987 = G__5999;
i__5940_5988 = G__6000;
continue;
}
} else
{var c_6001 = cljs.core.first.call(null,seq__5937_5995__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_6001);
{
var G__6002 = cljs.core.next.call(null,seq__5937_5995__$1);
var G__6003 = null;
var G__6004 = 0;
var G__6005 = 0;
seq__5937_5985 = G__6002;
chunk__5938_5986 = G__6003;
count__5939_5987 = G__6004;
i__5940_5988 = G__6005;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:class",G__5936_5984))
{dommy.attrs.add_class_BANG_.call(null,n,v_5983);
} else
{if("\uFDD0:else")
{dommy.attrs.set_attr_BANG_.call(null,n,k_5982,v_5983);
} else
{}
}
}
{
var G__6006 = cljs.core.next.call(null,seq__5925_5975__$1);
var G__6007 = null;
var G__6008 = 0;
var G__6009 = 0;
seq__5925_5941 = G__6006;
chunk__5926_5942 = G__6007;
count__5927_5943 = G__6008;
i__5928_5944 = G__6009;
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
(dommy.template._elem["string"] = (function (this$){
if(cljs.core.keyword_QMARK_.call(null,this$))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){
return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return dommy.template.compound_element.call(null,this$);
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
}catch (e6010){if((e6010 instanceof ReferenceError))
{var __6011 = e6010;
console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if("\uFDD0:else")
{throw e6010;
} else
{}
}
}dommy.template.node = (function node(data){
if((function (){var G__6013 = data;
if(G__6013)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__6013.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6013.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6013);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6013);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){
var parent = document.createElement("div");
parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
