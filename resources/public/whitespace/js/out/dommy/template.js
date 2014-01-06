// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj7711 = {};return obj7711;
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
{var str_7714 = node_str.substring(base_idx);while(true){
var next_idx_7715 = dommy.template.next_css_index.call(null,str_7714,1);var frag_7716 = (((next_idx_7715 >= 0))?str_7714.substring(0,next_idx_7715):str_7714);var G__7713_7717 = frag_7716.charAt(0);if(cljs.core._EQ_.call(null,"#",G__7713_7717))
{node.setAttribute("id",frag_7716.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__7713_7717))
{dommy.attrs.add_class_BANG_.call(null,node,frag_7716.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_7716.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_7715 >= 0))
{{
var G__7718 = str_7714.substring(next_idx_7715);
str_7714 = G__7718;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__7724 = data;if(G__7724)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__7724.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7724.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7724);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7724);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__7725_7729 = cljs.core.seq.call(null,data);var chunk__7726_7730 = null;var count__7727_7731 = 0;var i__7728_7732 = 0;while(true){
if((i__7728_7732 < count__7727_7731))
{var child_7733 = cljs.core._nth.call(null,chunk__7726_7730,i__7728_7732);__GT_document_fragment.call(null,result_frag,child_7733);
{
var G__7734 = seq__7725_7729;
var G__7735 = chunk__7726_7730;
var G__7736 = count__7727_7731;
var G__7737 = (i__7728_7732 + 1);
seq__7725_7729 = G__7734;
chunk__7726_7730 = G__7735;
count__7727_7731 = G__7736;
i__7728_7732 = G__7737;
continue;
}
} else
{var temp__4092__auto___7738 = cljs.core.seq.call(null,seq__7725_7729);if(temp__4092__auto___7738)
{var seq__7725_7739__$1 = temp__4092__auto___7738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7725_7739__$1))
{var c__4150__auto___7740 = cljs.core.chunk_first.call(null,seq__7725_7739__$1);{
var G__7741 = cljs.core.chunk_rest.call(null,seq__7725_7739__$1);
var G__7742 = c__4150__auto___7740;
var G__7743 = cljs.core.count.call(null,c__4150__auto___7740);
var G__7744 = 0;
seq__7725_7729 = G__7741;
chunk__7726_7730 = G__7742;
count__7727_7731 = G__7743;
i__7728_7732 = G__7744;
continue;
}
} else
{var child_7745 = cljs.core.first.call(null,seq__7725_7739__$1);__GT_document_fragment.call(null,result_frag,child_7745);
{
var G__7746 = cljs.core.next.call(null,seq__7725_7739__$1);
var G__7747 = null;
var G__7748 = 0;
var G__7749 = 0;
seq__7725_7729 = G__7746;
chunk__7726_7730 = G__7747;
count__7727_7731 = G__7748;
i__7728_7732 = G__7749;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__7751 = data;if(G__7751)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__7751.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7751.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7751);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7751);
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
dommy.template.compound_element = (function compound_element(p__7752){var vec__7772 = p__7752;var tag_name = cljs.core.nth.call(null,vec__7772,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__7772,1,null);var children = cljs.core.nthnext.call(null,vec__7772,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__7774 = maybe_attrs;if(G__7774)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__7774.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7774.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7774);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7774);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__7775_7791 = cljs.core.seq.call(null,attrs);var chunk__7776_7792 = null;var count__7777_7793 = 0;var i__7778_7794 = 0;while(true){
if((i__7778_7794 < count__7777_7793))
{var vec__7779_7795 = cljs.core._nth.call(null,chunk__7776_7792,i__7778_7794);var k_7796 = cljs.core.nth.call(null,vec__7779_7795,0,null);var v_7797 = cljs.core.nth.call(null,vec__7779_7795,1,null);var G__7780_7798 = k_7796;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__7780_7798))
{var seq__7781_7799 = cljs.core.seq.call(null,v_7797);var chunk__7782_7800 = null;var count__7783_7801 = 0;var i__7784_7802 = 0;while(true){
if((i__7784_7802 < count__7783_7801))
{var c_7803 = cljs.core._nth.call(null,chunk__7782_7800,i__7784_7802);dommy.attrs.add_class_BANG_.call(null,n,c_7803);
{
var G__7804 = seq__7781_7799;
var G__7805 = chunk__7782_7800;
var G__7806 = count__7783_7801;
var G__7807 = (i__7784_7802 + 1);
seq__7781_7799 = G__7804;
chunk__7782_7800 = G__7805;
count__7783_7801 = G__7806;
i__7784_7802 = G__7807;
continue;
}
} else
{var temp__4092__auto___7808 = cljs.core.seq.call(null,seq__7781_7799);if(temp__4092__auto___7808)
{var seq__7781_7809__$1 = temp__4092__auto___7808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7781_7809__$1))
{var c__4150__auto___7810 = cljs.core.chunk_first.call(null,seq__7781_7809__$1);{
var G__7811 = cljs.core.chunk_rest.call(null,seq__7781_7809__$1);
var G__7812 = c__4150__auto___7810;
var G__7813 = cljs.core.count.call(null,c__4150__auto___7810);
var G__7814 = 0;
seq__7781_7799 = G__7811;
chunk__7782_7800 = G__7812;
count__7783_7801 = G__7813;
i__7784_7802 = G__7814;
continue;
}
} else
{var c_7815 = cljs.core.first.call(null,seq__7781_7809__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7815);
{
var G__7816 = cljs.core.next.call(null,seq__7781_7809__$1);
var G__7817 = null;
var G__7818 = 0;
var G__7819 = 0;
seq__7781_7799 = G__7816;
chunk__7782_7800 = G__7817;
count__7783_7801 = G__7818;
i__7784_7802 = G__7819;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__7780_7798))
{dommy.attrs.add_class_BANG_.call(null,n,v_7797);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_7796,v_7797);
} else
{}
}
}
{
var G__7820 = seq__7775_7791;
var G__7821 = chunk__7776_7792;
var G__7822 = count__7777_7793;
var G__7823 = (i__7778_7794 + 1);
seq__7775_7791 = G__7820;
chunk__7776_7792 = G__7821;
count__7777_7793 = G__7822;
i__7778_7794 = G__7823;
continue;
}
} else
{var temp__4092__auto___7824 = cljs.core.seq.call(null,seq__7775_7791);if(temp__4092__auto___7824)
{var seq__7775_7825__$1 = temp__4092__auto___7824;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7775_7825__$1))
{var c__4150__auto___7826 = cljs.core.chunk_first.call(null,seq__7775_7825__$1);{
var G__7827 = cljs.core.chunk_rest.call(null,seq__7775_7825__$1);
var G__7828 = c__4150__auto___7826;
var G__7829 = cljs.core.count.call(null,c__4150__auto___7826);
var G__7830 = 0;
seq__7775_7791 = G__7827;
chunk__7776_7792 = G__7828;
count__7777_7793 = G__7829;
i__7778_7794 = G__7830;
continue;
}
} else
{var vec__7785_7831 = cljs.core.first.call(null,seq__7775_7825__$1);var k_7832 = cljs.core.nth.call(null,vec__7785_7831,0,null);var v_7833 = cljs.core.nth.call(null,vec__7785_7831,1,null);var G__7786_7834 = k_7832;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__7786_7834))
{var seq__7787_7835 = cljs.core.seq.call(null,v_7833);var chunk__7788_7836 = null;var count__7789_7837 = 0;var i__7790_7838 = 0;while(true){
if((i__7790_7838 < count__7789_7837))
{var c_7839 = cljs.core._nth.call(null,chunk__7788_7836,i__7790_7838);dommy.attrs.add_class_BANG_.call(null,n,c_7839);
{
var G__7840 = seq__7787_7835;
var G__7841 = chunk__7788_7836;
var G__7842 = count__7789_7837;
var G__7843 = (i__7790_7838 + 1);
seq__7787_7835 = G__7840;
chunk__7788_7836 = G__7841;
count__7789_7837 = G__7842;
i__7790_7838 = G__7843;
continue;
}
} else
{var temp__4092__auto___7844__$1 = cljs.core.seq.call(null,seq__7787_7835);if(temp__4092__auto___7844__$1)
{var seq__7787_7845__$1 = temp__4092__auto___7844__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7787_7845__$1))
{var c__4150__auto___7846 = cljs.core.chunk_first.call(null,seq__7787_7845__$1);{
var G__7847 = cljs.core.chunk_rest.call(null,seq__7787_7845__$1);
var G__7848 = c__4150__auto___7846;
var G__7849 = cljs.core.count.call(null,c__4150__auto___7846);
var G__7850 = 0;
seq__7787_7835 = G__7847;
chunk__7788_7836 = G__7848;
count__7789_7837 = G__7849;
i__7790_7838 = G__7850;
continue;
}
} else
{var c_7851 = cljs.core.first.call(null,seq__7787_7845__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7851);
{
var G__7852 = cljs.core.next.call(null,seq__7787_7845__$1);
var G__7853 = null;
var G__7854 = 0;
var G__7855 = 0;
seq__7787_7835 = G__7852;
chunk__7788_7836 = G__7853;
count__7789_7837 = G__7854;
i__7790_7838 = G__7855;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__7786_7834))
{dommy.attrs.add_class_BANG_.call(null,n,v_7833);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_7832,v_7833);
} else
{}
}
}
{
var G__7856 = cljs.core.next.call(null,seq__7775_7825__$1);
var G__7857 = null;
var G__7858 = 0;
var G__7859 = 0;
seq__7775_7791 = G__7856;
chunk__7776_7792 = G__7857;
count__7777_7793 = G__7858;
i__7778_7794 = G__7859;
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
}catch (e7860){if((e7860 instanceof ReferenceError))
{var __7861 = e7860;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7860;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__7863 = data;if(G__7863)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__7863.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7863.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7863);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7863);
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
