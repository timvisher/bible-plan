// Compiled by ClojureScript 0.0-2075
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj9526 = {};return obj9526;
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
{var str_9529 = node_str.substring(base_idx);while(true){
var next_idx_9530 = dommy.template.next_css_index.call(null,str_9529,1);var frag_9531 = (((next_idx_9530 >= 0))?str_9529.substring(0,next_idx_9530):str_9529);var G__9528_9532 = frag_9531.charAt(0);if(cljs.core._EQ_.call(null,"#",G__9528_9532))
{node.setAttribute("id",frag_9531.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__9528_9532))
{dommy.attrs.add_class_BANG_.call(null,node,frag_9531.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_9531.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_9530 >= 0))
{{
var G__9533 = str_9529.substring(next_idx_9530);
str_9529 = G__9533;
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
var __GT_document_fragment__2 = (function (result_frag,data){if(cljs.core.truth_((function (){var G__9539 = data;if(G__9539)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__9539.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9539.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9539);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9539);
}
})()))
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,data)))
{var seq__9540_9544 = cljs.core.seq.call(null,data);var chunk__9541_9545 = null;var count__9542_9546 = 0;var i__9543_9547 = 0;while(true){
if((i__9543_9547 < count__9542_9546))
{var child_9548 = cljs.core._nth.call(null,chunk__9541_9545,i__9543_9547);__GT_document_fragment.call(null,result_frag,child_9548);
{
var G__9549 = seq__9540_9544;
var G__9550 = chunk__9541_9545;
var G__9551 = count__9542_9546;
var G__9552 = (i__9543_9547 + 1);
seq__9540_9544 = G__9549;
chunk__9541_9545 = G__9550;
count__9542_9546 = G__9551;
i__9543_9547 = G__9552;
continue;
}
} else
{var temp__4092__auto___9553 = cljs.core.seq.call(null,seq__9540_9544);if(cljs.core.truth_(temp__4092__auto___9553))
{var seq__9540_9554__$1 = temp__4092__auto___9553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9540_9554__$1))
{var c__4010__auto___9555 = cljs.core.chunk_first.call(null,seq__9540_9554__$1);{
var G__9556 = cljs.core.chunk_rest.call(null,seq__9540_9554__$1);
var G__9557 = c__4010__auto___9555;
var G__9558 = cljs.core.count.call(null,c__4010__auto___9555);
var G__9559 = 0;
seq__9540_9544 = G__9556;
chunk__9541_9545 = G__9557;
count__9542_9546 = G__9558;
i__9543_9547 = G__9559;
continue;
}
} else
{var child_9560 = cljs.core.first.call(null,seq__9540_9554__$1);__GT_document_fragment.call(null,result_frag,child_9560);
{
var G__9561 = cljs.core.next.call(null,seq__9540_9554__$1);
var G__9562 = null;
var G__9563 = 0;
var G__9564 = 0;
seq__9540_9544 = G__9561;
chunk__9541_9545 = G__9562;
count__9542_9546 = G__9563;
i__9543_9547 = G__9564;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if(cljs.core.truth_((function (){var G__9566 = data;if(G__9566)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__9566.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9566.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9566);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9566);
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
dommy.template.compound_element = (function compound_element(p__9567){var vec__9586 = p__9567;var tag_name = cljs.core.nth.call(null,vec__9586,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__9586,1,null);var children = cljs.core.nthnext.call(null,vec__9586,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not.call(null,(function (){var G__9587 = maybe_attrs;if(G__9587)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__9587.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9587.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9587);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9587);
}
})());
} else
{return and__3279__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__9588_9604 = cljs.core.seq.call(null,attrs);var chunk__9589_9605 = null;var count__9590_9606 = 0;var i__9591_9607 = 0;while(true){
if((i__9591_9607 < count__9590_9606))
{var vec__9592_9608 = cljs.core._nth.call(null,chunk__9589_9605,i__9591_9607);var k_9609 = cljs.core.nth.call(null,vec__9592_9608,0,null);var v_9610 = cljs.core.nth.call(null,vec__9592_9608,1,null);var G__9593_9611 = k_9609;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9593_9611))
{var seq__9594_9612 = cljs.core.seq.call(null,v_9610);var chunk__9595_9613 = null;var count__9596_9614 = 0;var i__9597_9615 = 0;while(true){
if((i__9597_9615 < count__9596_9614))
{var c_9616 = cljs.core._nth.call(null,chunk__9595_9613,i__9597_9615);dommy.attrs.add_class_BANG_.call(null,n,c_9616);
{
var G__9617 = seq__9594_9612;
var G__9618 = chunk__9595_9613;
var G__9619 = count__9596_9614;
var G__9620 = (i__9597_9615 + 1);
seq__9594_9612 = G__9617;
chunk__9595_9613 = G__9618;
count__9596_9614 = G__9619;
i__9597_9615 = G__9620;
continue;
}
} else
{var temp__4092__auto___9621 = cljs.core.seq.call(null,seq__9594_9612);if(cljs.core.truth_(temp__4092__auto___9621))
{var seq__9594_9622__$1 = temp__4092__auto___9621;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9594_9622__$1))
{var c__4010__auto___9623 = cljs.core.chunk_first.call(null,seq__9594_9622__$1);{
var G__9624 = cljs.core.chunk_rest.call(null,seq__9594_9622__$1);
var G__9625 = c__4010__auto___9623;
var G__9626 = cljs.core.count.call(null,c__4010__auto___9623);
var G__9627 = 0;
seq__9594_9612 = G__9624;
chunk__9595_9613 = G__9625;
count__9596_9614 = G__9626;
i__9597_9615 = G__9627;
continue;
}
} else
{var c_9628 = cljs.core.first.call(null,seq__9594_9622__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9628);
{
var G__9629 = cljs.core.next.call(null,seq__9594_9622__$1);
var G__9630 = null;
var G__9631 = 0;
var G__9632 = 0;
seq__9594_9612 = G__9629;
chunk__9595_9613 = G__9630;
count__9596_9614 = G__9631;
i__9597_9615 = G__9632;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9593_9611))
{dommy.attrs.add_class_BANG_.call(null,n,v_9610);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9609,v_9610);
} else
{}
}
}
{
var G__9633 = seq__9588_9604;
var G__9634 = chunk__9589_9605;
var G__9635 = count__9590_9606;
var G__9636 = (i__9591_9607 + 1);
seq__9588_9604 = G__9633;
chunk__9589_9605 = G__9634;
count__9590_9606 = G__9635;
i__9591_9607 = G__9636;
continue;
}
} else
{var temp__4092__auto___9637 = cljs.core.seq.call(null,seq__9588_9604);if(cljs.core.truth_(temp__4092__auto___9637))
{var seq__9588_9638__$1 = temp__4092__auto___9637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9588_9638__$1))
{var c__4010__auto___9639 = cljs.core.chunk_first.call(null,seq__9588_9638__$1);{
var G__9640 = cljs.core.chunk_rest.call(null,seq__9588_9638__$1);
var G__9641 = c__4010__auto___9639;
var G__9642 = cljs.core.count.call(null,c__4010__auto___9639);
var G__9643 = 0;
seq__9588_9604 = G__9640;
chunk__9589_9605 = G__9641;
count__9590_9606 = G__9642;
i__9591_9607 = G__9643;
continue;
}
} else
{var vec__9598_9644 = cljs.core.first.call(null,seq__9588_9638__$1);var k_9645 = cljs.core.nth.call(null,vec__9598_9644,0,null);var v_9646 = cljs.core.nth.call(null,vec__9598_9644,1,null);var G__9599_9647 = k_9645;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9599_9647))
{var seq__9600_9648 = cljs.core.seq.call(null,v_9646);var chunk__9601_9649 = null;var count__9602_9650 = 0;var i__9603_9651 = 0;while(true){
if((i__9603_9651 < count__9602_9650))
{var c_9652 = cljs.core._nth.call(null,chunk__9601_9649,i__9603_9651);dommy.attrs.add_class_BANG_.call(null,n,c_9652);
{
var G__9653 = seq__9600_9648;
var G__9654 = chunk__9601_9649;
var G__9655 = count__9602_9650;
var G__9656 = (i__9603_9651 + 1);
seq__9600_9648 = G__9653;
chunk__9601_9649 = G__9654;
count__9602_9650 = G__9655;
i__9603_9651 = G__9656;
continue;
}
} else
{var temp__4092__auto___9657__$1 = cljs.core.seq.call(null,seq__9600_9648);if(cljs.core.truth_(temp__4092__auto___9657__$1))
{var seq__9600_9658__$1 = temp__4092__auto___9657__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9600_9658__$1))
{var c__4010__auto___9659 = cljs.core.chunk_first.call(null,seq__9600_9658__$1);{
var G__9660 = cljs.core.chunk_rest.call(null,seq__9600_9658__$1);
var G__9661 = c__4010__auto___9659;
var G__9662 = cljs.core.count.call(null,c__4010__auto___9659);
var G__9663 = 0;
seq__9600_9648 = G__9660;
chunk__9601_9649 = G__9661;
count__9602_9650 = G__9662;
i__9603_9651 = G__9663;
continue;
}
} else
{var c_9664 = cljs.core.first.call(null,seq__9600_9658__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9664);
{
var G__9665 = cljs.core.next.call(null,seq__9600_9658__$1);
var G__9666 = null;
var G__9667 = 0;
var G__9668 = 0;
seq__9600_9648 = G__9665;
chunk__9601_9649 = G__9666;
count__9602_9650 = G__9667;
i__9603_9651 = G__9668;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9599_9647))
{dommy.attrs.add_class_BANG_.call(null,n,v_9646);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9645,v_9646);
} else
{}
}
}
{
var G__9669 = cljs.core.next.call(null,seq__9588_9638__$1);
var G__9670 = null;
var G__9671 = 0;
var G__9672 = 0;
seq__9588_9604 = G__9669;
chunk__9589_9605 = G__9670;
count__9590_9606 = G__9671;
i__9591_9607 = G__9672;
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
}catch (e9673){if((e9673 instanceof ReferenceError))
{var __9674 = e9673;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9673;
} else
{}
}
}dommy.template.node = (function node(data){if(cljs.core.truth_((function (){var G__9676 = data;if(G__9676)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__9676.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9676.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9676);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9676);
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
