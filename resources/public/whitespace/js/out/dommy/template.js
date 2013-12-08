// Compiled by ClojureScript 0.0-2075
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj9810 = {};return obj9810;
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
{var str_9813 = node_str.substring(base_idx);while(true){
var next_idx_9814 = dommy.template.next_css_index.call(null,str_9813,1);var frag_9815 = (((next_idx_9814 >= 0))?str_9813.substring(0,next_idx_9814):str_9813);var G__9812_9816 = frag_9815.charAt(0);if(cljs.core._EQ_.call(null,"#",G__9812_9816))
{node.setAttribute("id",frag_9815.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__9812_9816))
{dommy.attrs.add_class_BANG_.call(null,node,frag_9815.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_9815.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_9814 >= 0))
{{
var G__9817 = str_9813.substring(next_idx_9814);
str_9813 = G__9817;
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
var __GT_document_fragment__2 = (function (result_frag,data){if(cljs.core.truth_((function (){var G__9823 = data;if(G__9823)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__9823.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9823.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9823);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9823);
}
})()))
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,data)))
{var seq__9824_9828 = cljs.core.seq.call(null,data);var chunk__9825_9829 = null;var count__9826_9830 = 0;var i__9827_9831 = 0;while(true){
if((i__9827_9831 < count__9826_9830))
{var child_9832 = cljs.core._nth.call(null,chunk__9825_9829,i__9827_9831);__GT_document_fragment.call(null,result_frag,child_9832);
{
var G__9833 = seq__9824_9828;
var G__9834 = chunk__9825_9829;
var G__9835 = count__9826_9830;
var G__9836 = (i__9827_9831 + 1);
seq__9824_9828 = G__9833;
chunk__9825_9829 = G__9834;
count__9826_9830 = G__9835;
i__9827_9831 = G__9836;
continue;
}
} else
{var temp__4092__auto___9837 = cljs.core.seq.call(null,seq__9824_9828);if(cljs.core.truth_(temp__4092__auto___9837))
{var seq__9824_9838__$1 = temp__4092__auto___9837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9824_9838__$1))
{var c__4010__auto___9839 = cljs.core.chunk_first.call(null,seq__9824_9838__$1);{
var G__9840 = cljs.core.chunk_rest.call(null,seq__9824_9838__$1);
var G__9841 = c__4010__auto___9839;
var G__9842 = cljs.core.count.call(null,c__4010__auto___9839);
var G__9843 = 0;
seq__9824_9828 = G__9840;
chunk__9825_9829 = G__9841;
count__9826_9830 = G__9842;
i__9827_9831 = G__9843;
continue;
}
} else
{var child_9844 = cljs.core.first.call(null,seq__9824_9838__$1);__GT_document_fragment.call(null,result_frag,child_9844);
{
var G__9845 = cljs.core.next.call(null,seq__9824_9838__$1);
var G__9846 = null;
var G__9847 = 0;
var G__9848 = 0;
seq__9824_9828 = G__9845;
chunk__9825_9829 = G__9846;
count__9826_9830 = G__9847;
i__9827_9831 = G__9848;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if(cljs.core.truth_((function (){var G__9850 = data;if(G__9850)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__9850.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9850.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9850);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9850);
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
dommy.template.compound_element = (function compound_element(p__9851){var vec__9870 = p__9851;var tag_name = cljs.core.nth.call(null,vec__9870,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__9870,1,null);var children = cljs.core.nthnext.call(null,vec__9870,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not.call(null,(function (){var G__9871 = maybe_attrs;if(G__9871)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__9871.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9871.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9871);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9871);
}
})());
} else
{return and__3279__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__9872_9888 = cljs.core.seq.call(null,attrs);var chunk__9873_9889 = null;var count__9874_9890 = 0;var i__9875_9891 = 0;while(true){
if((i__9875_9891 < count__9874_9890))
{var vec__9876_9892 = cljs.core._nth.call(null,chunk__9873_9889,i__9875_9891);var k_9893 = cljs.core.nth.call(null,vec__9876_9892,0,null);var v_9894 = cljs.core.nth.call(null,vec__9876_9892,1,null);var G__9877_9895 = k_9893;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9877_9895))
{var seq__9878_9896 = cljs.core.seq.call(null,v_9894);var chunk__9879_9897 = null;var count__9880_9898 = 0;var i__9881_9899 = 0;while(true){
if((i__9881_9899 < count__9880_9898))
{var c_9900 = cljs.core._nth.call(null,chunk__9879_9897,i__9881_9899);dommy.attrs.add_class_BANG_.call(null,n,c_9900);
{
var G__9901 = seq__9878_9896;
var G__9902 = chunk__9879_9897;
var G__9903 = count__9880_9898;
var G__9904 = (i__9881_9899 + 1);
seq__9878_9896 = G__9901;
chunk__9879_9897 = G__9902;
count__9880_9898 = G__9903;
i__9881_9899 = G__9904;
continue;
}
} else
{var temp__4092__auto___9905 = cljs.core.seq.call(null,seq__9878_9896);if(cljs.core.truth_(temp__4092__auto___9905))
{var seq__9878_9906__$1 = temp__4092__auto___9905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9878_9906__$1))
{var c__4010__auto___9907 = cljs.core.chunk_first.call(null,seq__9878_9906__$1);{
var G__9908 = cljs.core.chunk_rest.call(null,seq__9878_9906__$1);
var G__9909 = c__4010__auto___9907;
var G__9910 = cljs.core.count.call(null,c__4010__auto___9907);
var G__9911 = 0;
seq__9878_9896 = G__9908;
chunk__9879_9897 = G__9909;
count__9880_9898 = G__9910;
i__9881_9899 = G__9911;
continue;
}
} else
{var c_9912 = cljs.core.first.call(null,seq__9878_9906__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9912);
{
var G__9913 = cljs.core.next.call(null,seq__9878_9906__$1);
var G__9914 = null;
var G__9915 = 0;
var G__9916 = 0;
seq__9878_9896 = G__9913;
chunk__9879_9897 = G__9914;
count__9880_9898 = G__9915;
i__9881_9899 = G__9916;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9877_9895))
{dommy.attrs.add_class_BANG_.call(null,n,v_9894);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9893,v_9894);
} else
{}
}
}
{
var G__9917 = seq__9872_9888;
var G__9918 = chunk__9873_9889;
var G__9919 = count__9874_9890;
var G__9920 = (i__9875_9891 + 1);
seq__9872_9888 = G__9917;
chunk__9873_9889 = G__9918;
count__9874_9890 = G__9919;
i__9875_9891 = G__9920;
continue;
}
} else
{var temp__4092__auto___9921 = cljs.core.seq.call(null,seq__9872_9888);if(cljs.core.truth_(temp__4092__auto___9921))
{var seq__9872_9922__$1 = temp__4092__auto___9921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9872_9922__$1))
{var c__4010__auto___9923 = cljs.core.chunk_first.call(null,seq__9872_9922__$1);{
var G__9924 = cljs.core.chunk_rest.call(null,seq__9872_9922__$1);
var G__9925 = c__4010__auto___9923;
var G__9926 = cljs.core.count.call(null,c__4010__auto___9923);
var G__9927 = 0;
seq__9872_9888 = G__9924;
chunk__9873_9889 = G__9925;
count__9874_9890 = G__9926;
i__9875_9891 = G__9927;
continue;
}
} else
{var vec__9882_9928 = cljs.core.first.call(null,seq__9872_9922__$1);var k_9929 = cljs.core.nth.call(null,vec__9882_9928,0,null);var v_9930 = cljs.core.nth.call(null,vec__9882_9928,1,null);var G__9883_9931 = k_9929;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9883_9931))
{var seq__9884_9932 = cljs.core.seq.call(null,v_9930);var chunk__9885_9933 = null;var count__9886_9934 = 0;var i__9887_9935 = 0;while(true){
if((i__9887_9935 < count__9886_9934))
{var c_9936 = cljs.core._nth.call(null,chunk__9885_9933,i__9887_9935);dommy.attrs.add_class_BANG_.call(null,n,c_9936);
{
var G__9937 = seq__9884_9932;
var G__9938 = chunk__9885_9933;
var G__9939 = count__9886_9934;
var G__9940 = (i__9887_9935 + 1);
seq__9884_9932 = G__9937;
chunk__9885_9933 = G__9938;
count__9886_9934 = G__9939;
i__9887_9935 = G__9940;
continue;
}
} else
{var temp__4092__auto___9941__$1 = cljs.core.seq.call(null,seq__9884_9932);if(cljs.core.truth_(temp__4092__auto___9941__$1))
{var seq__9884_9942__$1 = temp__4092__auto___9941__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9884_9942__$1))
{var c__4010__auto___9943 = cljs.core.chunk_first.call(null,seq__9884_9942__$1);{
var G__9944 = cljs.core.chunk_rest.call(null,seq__9884_9942__$1);
var G__9945 = c__4010__auto___9943;
var G__9946 = cljs.core.count.call(null,c__4010__auto___9943);
var G__9947 = 0;
seq__9884_9932 = G__9944;
chunk__9885_9933 = G__9945;
count__9886_9934 = G__9946;
i__9887_9935 = G__9947;
continue;
}
} else
{var c_9948 = cljs.core.first.call(null,seq__9884_9942__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9948);
{
var G__9949 = cljs.core.next.call(null,seq__9884_9942__$1);
var G__9950 = null;
var G__9951 = 0;
var G__9952 = 0;
seq__9884_9932 = G__9949;
chunk__9885_9933 = G__9950;
count__9886_9934 = G__9951;
i__9887_9935 = G__9952;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9883_9931))
{dommy.attrs.add_class_BANG_.call(null,n,v_9930);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9929,v_9930);
} else
{}
}
}
{
var G__9953 = cljs.core.next.call(null,seq__9872_9922__$1);
var G__9954 = null;
var G__9955 = 0;
var G__9956 = 0;
seq__9872_9888 = G__9953;
chunk__9873_9889 = G__9954;
count__9874_9890 = G__9955;
i__9875_9891 = G__9956;
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
}catch (e9957){if((e9957 instanceof ReferenceError))
{var __9958 = e9957;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9957;
} else
{}
}
}dommy.template.node = (function node(data){if(cljs.core.truth_((function (){var G__9960 = data;if(G__9960)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__9960.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9960.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9960);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9960);
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
