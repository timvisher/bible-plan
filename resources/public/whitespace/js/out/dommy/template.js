// Compiled by ClojureScript 0.0-2075
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj9500 = {};return obj9500;
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
{var str_9503 = node_str.substring(base_idx);while(true){
var next_idx_9504 = dommy.template.next_css_index.call(null,str_9503,1);var frag_9505 = (((next_idx_9504 >= 0))?str_9503.substring(0,next_idx_9504):str_9503);var G__9502_9506 = frag_9505.charAt(0);if(cljs.core._EQ_.call(null,"#",G__9502_9506))
{node.setAttribute("id",frag_9505.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__9502_9506))
{dommy.attrs.add_class_BANG_.call(null,node,frag_9505.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_9505.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_9504 >= 0))
{{
var G__9507 = str_9503.substring(next_idx_9504);
str_9503 = G__9507;
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
var __GT_document_fragment__2 = (function (result_frag,data){if(cljs.core.truth_((function (){var G__9513 = data;if(G__9513)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__9513.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9513.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9513);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9513);
}
})()))
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,data)))
{var seq__9514_9518 = cljs.core.seq.call(null,data);var chunk__9515_9519 = null;var count__9516_9520 = 0;var i__9517_9521 = 0;while(true){
if((i__9517_9521 < count__9516_9520))
{var child_9522 = cljs.core._nth.call(null,chunk__9515_9519,i__9517_9521);__GT_document_fragment.call(null,result_frag,child_9522);
{
var G__9523 = seq__9514_9518;
var G__9524 = chunk__9515_9519;
var G__9525 = count__9516_9520;
var G__9526 = (i__9517_9521 + 1);
seq__9514_9518 = G__9523;
chunk__9515_9519 = G__9524;
count__9516_9520 = G__9525;
i__9517_9521 = G__9526;
continue;
}
} else
{var temp__4092__auto___9527 = cljs.core.seq.call(null,seq__9514_9518);if(cljs.core.truth_(temp__4092__auto___9527))
{var seq__9514_9528__$1 = temp__4092__auto___9527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9514_9528__$1))
{var c__4010__auto___9529 = cljs.core.chunk_first.call(null,seq__9514_9528__$1);{
var G__9530 = cljs.core.chunk_rest.call(null,seq__9514_9528__$1);
var G__9531 = c__4010__auto___9529;
var G__9532 = cljs.core.count.call(null,c__4010__auto___9529);
var G__9533 = 0;
seq__9514_9518 = G__9530;
chunk__9515_9519 = G__9531;
count__9516_9520 = G__9532;
i__9517_9521 = G__9533;
continue;
}
} else
{var child_9534 = cljs.core.first.call(null,seq__9514_9528__$1);__GT_document_fragment.call(null,result_frag,child_9534);
{
var G__9535 = cljs.core.next.call(null,seq__9514_9528__$1);
var G__9536 = null;
var G__9537 = 0;
var G__9538 = 0;
seq__9514_9518 = G__9535;
chunk__9515_9519 = G__9536;
count__9516_9520 = G__9537;
i__9517_9521 = G__9538;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if(cljs.core.truth_((function (){var G__9540 = data;if(G__9540)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__9540.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9540.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9540);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9540);
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
dommy.template.compound_element = (function compound_element(p__9541){var vec__9560 = p__9541;var tag_name = cljs.core.nth.call(null,vec__9560,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__9560,1,null);var children = cljs.core.nthnext.call(null,vec__9560,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not.call(null,(function (){var G__9561 = maybe_attrs;if(G__9561)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__9561.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9561.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9561);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9561);
}
})());
} else
{return and__3279__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__9562_9578 = cljs.core.seq.call(null,attrs);var chunk__9563_9579 = null;var count__9564_9580 = 0;var i__9565_9581 = 0;while(true){
if((i__9565_9581 < count__9564_9580))
{var vec__9566_9582 = cljs.core._nth.call(null,chunk__9563_9579,i__9565_9581);var k_9583 = cljs.core.nth.call(null,vec__9566_9582,0,null);var v_9584 = cljs.core.nth.call(null,vec__9566_9582,1,null);var G__9567_9585 = k_9583;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9567_9585))
{var seq__9568_9586 = cljs.core.seq.call(null,v_9584);var chunk__9569_9587 = null;var count__9570_9588 = 0;var i__9571_9589 = 0;while(true){
if((i__9571_9589 < count__9570_9588))
{var c_9590 = cljs.core._nth.call(null,chunk__9569_9587,i__9571_9589);dommy.attrs.add_class_BANG_.call(null,n,c_9590);
{
var G__9591 = seq__9568_9586;
var G__9592 = chunk__9569_9587;
var G__9593 = count__9570_9588;
var G__9594 = (i__9571_9589 + 1);
seq__9568_9586 = G__9591;
chunk__9569_9587 = G__9592;
count__9570_9588 = G__9593;
i__9571_9589 = G__9594;
continue;
}
} else
{var temp__4092__auto___9595 = cljs.core.seq.call(null,seq__9568_9586);if(cljs.core.truth_(temp__4092__auto___9595))
{var seq__9568_9596__$1 = temp__4092__auto___9595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9568_9596__$1))
{var c__4010__auto___9597 = cljs.core.chunk_first.call(null,seq__9568_9596__$1);{
var G__9598 = cljs.core.chunk_rest.call(null,seq__9568_9596__$1);
var G__9599 = c__4010__auto___9597;
var G__9600 = cljs.core.count.call(null,c__4010__auto___9597);
var G__9601 = 0;
seq__9568_9586 = G__9598;
chunk__9569_9587 = G__9599;
count__9570_9588 = G__9600;
i__9571_9589 = G__9601;
continue;
}
} else
{var c_9602 = cljs.core.first.call(null,seq__9568_9596__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9602);
{
var G__9603 = cljs.core.next.call(null,seq__9568_9596__$1);
var G__9604 = null;
var G__9605 = 0;
var G__9606 = 0;
seq__9568_9586 = G__9603;
chunk__9569_9587 = G__9604;
count__9570_9588 = G__9605;
i__9571_9589 = G__9606;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9567_9585))
{dommy.attrs.add_class_BANG_.call(null,n,v_9584);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9583,v_9584);
} else
{}
}
}
{
var G__9607 = seq__9562_9578;
var G__9608 = chunk__9563_9579;
var G__9609 = count__9564_9580;
var G__9610 = (i__9565_9581 + 1);
seq__9562_9578 = G__9607;
chunk__9563_9579 = G__9608;
count__9564_9580 = G__9609;
i__9565_9581 = G__9610;
continue;
}
} else
{var temp__4092__auto___9611 = cljs.core.seq.call(null,seq__9562_9578);if(cljs.core.truth_(temp__4092__auto___9611))
{var seq__9562_9612__$1 = temp__4092__auto___9611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9562_9612__$1))
{var c__4010__auto___9613 = cljs.core.chunk_first.call(null,seq__9562_9612__$1);{
var G__9614 = cljs.core.chunk_rest.call(null,seq__9562_9612__$1);
var G__9615 = c__4010__auto___9613;
var G__9616 = cljs.core.count.call(null,c__4010__auto___9613);
var G__9617 = 0;
seq__9562_9578 = G__9614;
chunk__9563_9579 = G__9615;
count__9564_9580 = G__9616;
i__9565_9581 = G__9617;
continue;
}
} else
{var vec__9572_9618 = cljs.core.first.call(null,seq__9562_9612__$1);var k_9619 = cljs.core.nth.call(null,vec__9572_9618,0,null);var v_9620 = cljs.core.nth.call(null,vec__9572_9618,1,null);var G__9573_9621 = k_9619;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__9573_9621))
{var seq__9574_9622 = cljs.core.seq.call(null,v_9620);var chunk__9575_9623 = null;var count__9576_9624 = 0;var i__9577_9625 = 0;while(true){
if((i__9577_9625 < count__9576_9624))
{var c_9626 = cljs.core._nth.call(null,chunk__9575_9623,i__9577_9625);dommy.attrs.add_class_BANG_.call(null,n,c_9626);
{
var G__9627 = seq__9574_9622;
var G__9628 = chunk__9575_9623;
var G__9629 = count__9576_9624;
var G__9630 = (i__9577_9625 + 1);
seq__9574_9622 = G__9627;
chunk__9575_9623 = G__9628;
count__9576_9624 = G__9629;
i__9577_9625 = G__9630;
continue;
}
} else
{var temp__4092__auto___9631__$1 = cljs.core.seq.call(null,seq__9574_9622);if(cljs.core.truth_(temp__4092__auto___9631__$1))
{var seq__9574_9632__$1 = temp__4092__auto___9631__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9574_9632__$1))
{var c__4010__auto___9633 = cljs.core.chunk_first.call(null,seq__9574_9632__$1);{
var G__9634 = cljs.core.chunk_rest.call(null,seq__9574_9632__$1);
var G__9635 = c__4010__auto___9633;
var G__9636 = cljs.core.count.call(null,c__4010__auto___9633);
var G__9637 = 0;
seq__9574_9622 = G__9634;
chunk__9575_9623 = G__9635;
count__9576_9624 = G__9636;
i__9577_9625 = G__9637;
continue;
}
} else
{var c_9638 = cljs.core.first.call(null,seq__9574_9632__$1);dommy.attrs.add_class_BANG_.call(null,n,c_9638);
{
var G__9639 = cljs.core.next.call(null,seq__9574_9632__$1);
var G__9640 = null;
var G__9641 = 0;
var G__9642 = 0;
seq__9574_9622 = G__9639;
chunk__9575_9623 = G__9640;
count__9576_9624 = G__9641;
i__9577_9625 = G__9642;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__9573_9621))
{dommy.attrs.add_class_BANG_.call(null,n,v_9620);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_9619,v_9620);
} else
{}
}
}
{
var G__9643 = cljs.core.next.call(null,seq__9562_9612__$1);
var G__9644 = null;
var G__9645 = 0;
var G__9646 = 0;
seq__9562_9578 = G__9643;
chunk__9563_9579 = G__9644;
count__9564_9580 = G__9645;
i__9565_9581 = G__9646;
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
}catch (e9647){if((e9647 instanceof ReferenceError))
{var __9648 = e9647;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9647;
} else
{}
}
}dommy.template.node = (function node(data){if(cljs.core.truth_((function (){var G__9650 = data;if(G__9650)
{var bit__3912__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3912__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__9650.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__9650.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9650);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__9650);
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
