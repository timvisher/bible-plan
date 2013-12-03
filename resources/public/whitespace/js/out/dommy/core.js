// Compiled by ClojureScript 0.0-2075
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3291__auto__ = elem.textContent;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__9106 = dommy.template.__GT_node_like.call(null,parent);G__9106.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__9106;
});
var append_BANG___3 = (function() { 
var G__9111__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__9107_9112 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__9108_9113 = null;var count__9109_9114 = 0;var i__9110_9115 = 0;while(true){
if((i__9110_9115 < count__9109_9114))
{var c_9116 = cljs.core._nth.call(null,chunk__9108_9113,i__9110_9115);append_BANG_.call(null,parent__$1,c_9116);
{
var G__9117 = seq__9107_9112;
var G__9118 = chunk__9108_9113;
var G__9119 = count__9109_9114;
var G__9120 = (i__9110_9115 + 1);
seq__9107_9112 = G__9117;
chunk__9108_9113 = G__9118;
count__9109_9114 = G__9119;
i__9110_9115 = G__9120;
continue;
}
} else
{var temp__4092__auto___9121 = cljs.core.seq.call(null,seq__9107_9112);if(cljs.core.truth_(temp__4092__auto___9121))
{var seq__9107_9122__$1 = temp__4092__auto___9121;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9107_9122__$1))
{var c__4010__auto___9123 = cljs.core.chunk_first.call(null,seq__9107_9122__$1);{
var G__9124 = cljs.core.chunk_rest.call(null,seq__9107_9122__$1);
var G__9125 = c__4010__auto___9123;
var G__9126 = cljs.core.count.call(null,c__4010__auto___9123);
var G__9127 = 0;
seq__9107_9112 = G__9124;
chunk__9108_9113 = G__9125;
count__9109_9114 = G__9126;
i__9110_9115 = G__9127;
continue;
}
} else
{var c_9128 = cljs.core.first.call(null,seq__9107_9122__$1);append_BANG_.call(null,parent__$1,c_9128);
{
var G__9129 = cljs.core.next.call(null,seq__9107_9122__$1);
var G__9130 = null;
var G__9131 = 0;
var G__9132 = 0;
seq__9107_9112 = G__9129;
chunk__9108_9113 = G__9130;
count__9109_9114 = G__9131;
i__9110_9115 = G__9132;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__9111 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9111__delegate.call(this,parent,child,more_children);};
G__9111.cljs$lang$maxFixedArity = 2;
G__9111.cljs$lang$applyTo = (function (arglist__9133){
var parent = cljs.core.first(arglist__9133);
arglist__9133 = cljs.core.next(arglist__9133);
var child = cljs.core.first(arglist__9133);
var more_children = cljs.core.rest(arglist__9133);
return G__9111__delegate(parent,child,more_children);
});
G__9111.cljs$core$IFn$_invoke$arity$variadic = G__9111__delegate;
return G__9111;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__9142__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__9138_9143 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__9139_9144 = null;var count__9140_9145 = 0;var i__9141_9146 = 0;while(true){
if((i__9141_9146 < count__9140_9145))
{var c_9147 = cljs.core._nth.call(null,chunk__9139_9144,i__9141_9146);prepend_BANG_.call(null,parent__$1,c_9147);
{
var G__9148 = seq__9138_9143;
var G__9149 = chunk__9139_9144;
var G__9150 = count__9140_9145;
var G__9151 = (i__9141_9146 + 1);
seq__9138_9143 = G__9148;
chunk__9139_9144 = G__9149;
count__9140_9145 = G__9150;
i__9141_9146 = G__9151;
continue;
}
} else
{var temp__4092__auto___9152 = cljs.core.seq.call(null,seq__9138_9143);if(cljs.core.truth_(temp__4092__auto___9152))
{var seq__9138_9153__$1 = temp__4092__auto___9152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9138_9153__$1))
{var c__4010__auto___9154 = cljs.core.chunk_first.call(null,seq__9138_9153__$1);{
var G__9155 = cljs.core.chunk_rest.call(null,seq__9138_9153__$1);
var G__9156 = c__4010__auto___9154;
var G__9157 = cljs.core.count.call(null,c__4010__auto___9154);
var G__9158 = 0;
seq__9138_9143 = G__9155;
chunk__9139_9144 = G__9156;
count__9140_9145 = G__9157;
i__9141_9146 = G__9158;
continue;
}
} else
{var c_9159 = cljs.core.first.call(null,seq__9138_9153__$1);prepend_BANG_.call(null,parent__$1,c_9159);
{
var G__9160 = cljs.core.next.call(null,seq__9138_9153__$1);
var G__9161 = null;
var G__9162 = 0;
var G__9163 = 0;
seq__9138_9143 = G__9160;
chunk__9139_9144 = G__9161;
count__9140_9145 = G__9162;
i__9141_9146 = G__9163;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__9142 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9142__delegate.call(this,parent,child,more_children);};
G__9142.cljs$lang$maxFixedArity = 2;
G__9142.cljs$lang$applyTo = (function (arglist__9164){
var parent = cljs.core.first(arglist__9164);
arglist__9164 = cljs.core.next(arglist__9164);
var child = cljs.core.first(arglist__9164);
var more_children = cljs.core.rest(arglist__9164);
return G__9142__delegate(parent,child,more_children);
});
G__9142.cljs$core$IFn$_invoke$arity$variadic = G__9142__delegate;
return G__9142;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___9165 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___9165))
{var next_9166 = temp__4090__auto___9165;parent.insertBefore(actual_node,next_9166);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__9168 = dommy.template.__GT_node_like.call(null,parent);G__9168.innerHTML = "";
dommy.core.append_BANG_.call(null,G__9168,node_like);
return G__9168;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__9170 = elem__$1.parentNode;G__9170.removeChild(elem__$1);
return G__9170;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,data)))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9176){var vec__9177 = p__9176;var k = cljs.core.nth.call(null,vec__9177,0,null);var v = cljs.core.nth.call(null,vec__9177,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t9178 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t9178 = (function (v,k,vec__9177,p__9176,container,key_selectors_map,template,selector_map,meta9179){
this.v = v;
this.k = k;
this.vec__9177 = vec__9177;
this.p__9176 = p__9176;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta9179 = meta9179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t9178.cljs$lang$type = true;
dommy.core.t9178.cljs$lang$ctorStr = "dommy.core/t9178";
dommy.core.t9178.cljs$lang$ctorPrWriter = (function (this__3830__auto__,writer__3831__auto__,opt__3832__auto__){return cljs.core._write.call(null,writer__3831__auto__,"dommy.core/t9178");
});
dommy.core.t9178.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t9178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9180){var self__ = this;
var _9180__$1 = this;return self__.meta9179;
});
dommy.core.t9178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9180,meta9179__$1){var self__ = this;
var _9180__$1 = this;return (new dommy.core.t9178(self__.v,self__.k,self__.vec__9177,self__.p__9176,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta9179__$1));
});
dommy.core.__GT_t9178 = (function __GT_t9178(v__$1,k__$1,vec__9177__$1,p__9176__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta9179){return (new dommy.core.t9178(v__$1,k__$1,vec__9177__$1,p__9176__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta9179));
});
}
return (new dommy.core.t9178(v,k,vec__9177,p__9176,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__9181_SHARP_){return p1__9181_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__9182_SHARP_){return !((p1__9182_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9183){var vec__9184 = p__9183;var special_mouse_event = cljs.core.nth.call(null,vec__9184,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__9184,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3291__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3279__auto__ = related_target;if(cljs.core.truth_(and__3279__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3279__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3279__auto__ = selected_target;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3279__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3291__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__9185){
var elem = cljs.core.first(arglist__9185);
arglist__9185 = cljs.core.next(arglist__9185);
var f = cljs.core.first(arglist__9185);
var args = cljs.core.rest(arglist__9185);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,elem_sel)))
{return cljs.core.juxt.call(null,(function (p1__9186_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__9186_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__9210_9233 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9234 = cljs.core.nth.call(null,vec__9210_9233,0,null);var selector_9235 = cljs.core.nth.call(null,vec__9210_9233,1,null);var seq__9211_9236 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9218_9237 = null;var count__9219_9238 = 0;var i__9220_9239 = 0;while(true){
if((i__9220_9239 < count__9219_9238))
{var vec__9227_9240 = cljs.core._nth.call(null,chunk__9218_9237,i__9220_9239);var orig_type_9241 = cljs.core.nth.call(null,vec__9227_9240,0,null);var f_9242 = cljs.core.nth.call(null,vec__9227_9240,1,null);var seq__9221_9243 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9241,new cljs.core.PersistentArrayMap.fromArray([orig_type_9241,cljs.core.identity], true, false)));var chunk__9223_9244 = null;var count__9224_9245 = 0;var i__9225_9246 = 0;while(true){
if((i__9225_9246 < count__9224_9245))
{var vec__9228_9247 = cljs.core._nth.call(null,chunk__9223_9244,i__9225_9246);var actual_type_9248 = cljs.core.nth.call(null,vec__9228_9247,0,null);var factory_9249 = cljs.core.nth.call(null,vec__9228_9247,1,null);var canonical_f_9250 = (cljs.core.truth_(selector_9235)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9234,selector_9235):cljs.core.identity).call(null,factory_9249.call(null,f_9242));dommy.core.update_event_listeners_BANG_.call(null,elem_9234,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9235,actual_type_9248,f_9242], null),canonical_f_9250);
if(cljs.core.truth_(elem_9234.addEventListener))
{elem_9234.addEventListener(cljs.core.name.call(null,actual_type_9248),canonical_f_9250);
} else
{elem_9234.attachEvent(cljs.core.name.call(null,actual_type_9248),canonical_f_9250);
}
{
var G__9251 = seq__9221_9243;
var G__9252 = chunk__9223_9244;
var G__9253 = count__9224_9245;
var G__9254 = (i__9225_9246 + 1);
seq__9221_9243 = G__9251;
chunk__9223_9244 = G__9252;
count__9224_9245 = G__9253;
i__9225_9246 = G__9254;
continue;
}
} else
{var temp__4092__auto___9255 = cljs.core.seq.call(null,seq__9221_9243);if(cljs.core.truth_(temp__4092__auto___9255))
{var seq__9221_9256__$1 = temp__4092__auto___9255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9221_9256__$1))
{var c__4010__auto___9257 = cljs.core.chunk_first.call(null,seq__9221_9256__$1);{
var G__9258 = cljs.core.chunk_rest.call(null,seq__9221_9256__$1);
var G__9259 = c__4010__auto___9257;
var G__9260 = cljs.core.count.call(null,c__4010__auto___9257);
var G__9261 = 0;
seq__9221_9243 = G__9258;
chunk__9223_9244 = G__9259;
count__9224_9245 = G__9260;
i__9225_9246 = G__9261;
continue;
}
} else
{var vec__9229_9262 = cljs.core.first.call(null,seq__9221_9256__$1);var actual_type_9263 = cljs.core.nth.call(null,vec__9229_9262,0,null);var factory_9264 = cljs.core.nth.call(null,vec__9229_9262,1,null);var canonical_f_9265 = (cljs.core.truth_(selector_9235)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9234,selector_9235):cljs.core.identity).call(null,factory_9264.call(null,f_9242));dommy.core.update_event_listeners_BANG_.call(null,elem_9234,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9235,actual_type_9263,f_9242], null),canonical_f_9265);
if(cljs.core.truth_(elem_9234.addEventListener))
{elem_9234.addEventListener(cljs.core.name.call(null,actual_type_9263),canonical_f_9265);
} else
{elem_9234.attachEvent(cljs.core.name.call(null,actual_type_9263),canonical_f_9265);
}
{
var G__9266 = cljs.core.next.call(null,seq__9221_9256__$1);
var G__9267 = null;
var G__9268 = 0;
var G__9269 = 0;
seq__9221_9243 = G__9266;
chunk__9223_9244 = G__9267;
count__9224_9245 = G__9268;
i__9225_9246 = G__9269;
continue;
}
}
} else
{}
}
break;
}
{
var G__9270 = seq__9211_9236;
var G__9271 = chunk__9218_9237;
var G__9272 = count__9219_9238;
var G__9273 = (i__9220_9239 + 1);
seq__9211_9236 = G__9270;
chunk__9218_9237 = G__9271;
count__9219_9238 = G__9272;
i__9220_9239 = G__9273;
continue;
}
} else
{var temp__4092__auto___9274 = cljs.core.seq.call(null,seq__9211_9236);if(cljs.core.truth_(temp__4092__auto___9274))
{var seq__9211_9275__$1 = temp__4092__auto___9274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9211_9275__$1))
{var c__4010__auto___9276 = cljs.core.chunk_first.call(null,seq__9211_9275__$1);{
var G__9277 = cljs.core.chunk_rest.call(null,seq__9211_9275__$1);
var G__9278 = c__4010__auto___9276;
var G__9279 = cljs.core.count.call(null,c__4010__auto___9276);
var G__9280 = 0;
seq__9211_9236 = G__9277;
chunk__9218_9237 = G__9278;
count__9219_9238 = G__9279;
i__9220_9239 = G__9280;
continue;
}
} else
{var vec__9230_9281 = cljs.core.first.call(null,seq__9211_9275__$1);var orig_type_9282 = cljs.core.nth.call(null,vec__9230_9281,0,null);var f_9283 = cljs.core.nth.call(null,vec__9230_9281,1,null);var seq__9212_9284 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9282,new cljs.core.PersistentArrayMap.fromArray([orig_type_9282,cljs.core.identity], true, false)));var chunk__9214_9285 = null;var count__9215_9286 = 0;var i__9216_9287 = 0;while(true){
if((i__9216_9287 < count__9215_9286))
{var vec__9231_9288 = cljs.core._nth.call(null,chunk__9214_9285,i__9216_9287);var actual_type_9289 = cljs.core.nth.call(null,vec__9231_9288,0,null);var factory_9290 = cljs.core.nth.call(null,vec__9231_9288,1,null);var canonical_f_9291 = (cljs.core.truth_(selector_9235)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9234,selector_9235):cljs.core.identity).call(null,factory_9290.call(null,f_9283));dommy.core.update_event_listeners_BANG_.call(null,elem_9234,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9235,actual_type_9289,f_9283], null),canonical_f_9291);
if(cljs.core.truth_(elem_9234.addEventListener))
{elem_9234.addEventListener(cljs.core.name.call(null,actual_type_9289),canonical_f_9291);
} else
{elem_9234.attachEvent(cljs.core.name.call(null,actual_type_9289),canonical_f_9291);
}
{
var G__9292 = seq__9212_9284;
var G__9293 = chunk__9214_9285;
var G__9294 = count__9215_9286;
var G__9295 = (i__9216_9287 + 1);
seq__9212_9284 = G__9292;
chunk__9214_9285 = G__9293;
count__9215_9286 = G__9294;
i__9216_9287 = G__9295;
continue;
}
} else
{var temp__4092__auto___9296__$1 = cljs.core.seq.call(null,seq__9212_9284);if(cljs.core.truth_(temp__4092__auto___9296__$1))
{var seq__9212_9297__$1 = temp__4092__auto___9296__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9212_9297__$1))
{var c__4010__auto___9298 = cljs.core.chunk_first.call(null,seq__9212_9297__$1);{
var G__9299 = cljs.core.chunk_rest.call(null,seq__9212_9297__$1);
var G__9300 = c__4010__auto___9298;
var G__9301 = cljs.core.count.call(null,c__4010__auto___9298);
var G__9302 = 0;
seq__9212_9284 = G__9299;
chunk__9214_9285 = G__9300;
count__9215_9286 = G__9301;
i__9216_9287 = G__9302;
continue;
}
} else
{var vec__9232_9303 = cljs.core.first.call(null,seq__9212_9297__$1);var actual_type_9304 = cljs.core.nth.call(null,vec__9232_9303,0,null);var factory_9305 = cljs.core.nth.call(null,vec__9232_9303,1,null);var canonical_f_9306 = (cljs.core.truth_(selector_9235)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9234,selector_9235):cljs.core.identity).call(null,factory_9305.call(null,f_9283));dommy.core.update_event_listeners_BANG_.call(null,elem_9234,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9235,actual_type_9304,f_9283], null),canonical_f_9306);
if(cljs.core.truth_(elem_9234.addEventListener))
{elem_9234.addEventListener(cljs.core.name.call(null,actual_type_9304),canonical_f_9306);
} else
{elem_9234.attachEvent(cljs.core.name.call(null,actual_type_9304),canonical_f_9306);
}
{
var G__9307 = cljs.core.next.call(null,seq__9212_9297__$1);
var G__9308 = null;
var G__9309 = 0;
var G__9310 = 0;
seq__9212_9284 = G__9307;
chunk__9214_9285 = G__9308;
count__9215_9286 = G__9309;
i__9216_9287 = G__9310;
continue;
}
}
} else
{}
}
break;
}
{
var G__9311 = cljs.core.next.call(null,seq__9211_9275__$1);
var G__9312 = null;
var G__9313 = 0;
var G__9314 = 0;
seq__9211_9236 = G__9311;
chunk__9218_9237 = G__9312;
count__9219_9238 = G__9313;
i__9220_9239 = G__9314;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__9315){
var elem_sel = cljs.core.first(arglist__9315);
var type_fs = cljs.core.rest(arglist__9315);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__9339_9362 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9363 = cljs.core.nth.call(null,vec__9339_9362,0,null);var selector_9364 = cljs.core.nth.call(null,vec__9339_9362,1,null);var seq__9340_9365 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9347_9366 = null;var count__9348_9367 = 0;var i__9349_9368 = 0;while(true){
if((i__9349_9368 < count__9348_9367))
{var vec__9356_9369 = cljs.core._nth.call(null,chunk__9347_9366,i__9349_9368);var orig_type_9370 = cljs.core.nth.call(null,vec__9356_9369,0,null);var f_9371 = cljs.core.nth.call(null,vec__9356_9369,1,null);var seq__9350_9372 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9370,new cljs.core.PersistentArrayMap.fromArray([orig_type_9370,cljs.core.identity], true, false)));var chunk__9352_9373 = null;var count__9353_9374 = 0;var i__9354_9375 = 0;while(true){
if((i__9354_9375 < count__9353_9374))
{var vec__9357_9376 = cljs.core._nth.call(null,chunk__9352_9373,i__9354_9375);var actual_type_9377 = cljs.core.nth.call(null,vec__9357_9376,0,null);var __9378 = cljs.core.nth.call(null,vec__9357_9376,1,null);var keys_9379 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9364,actual_type_9377,f_9371], null);var canonical_f_9380 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9363),keys_9379);dommy.core.update_event_listeners_BANG_.call(null,elem_9363,dommy.utils.dissoc_in,keys_9379);
if(cljs.core.truth_(elem_9363.removeEventListener))
{elem_9363.removeEventListener(cljs.core.name.call(null,actual_type_9377),canonical_f_9380);
} else
{elem_9363.detachEvent(cljs.core.name.call(null,actual_type_9377),canonical_f_9380);
}
{
var G__9381 = seq__9350_9372;
var G__9382 = chunk__9352_9373;
var G__9383 = count__9353_9374;
var G__9384 = (i__9354_9375 + 1);
seq__9350_9372 = G__9381;
chunk__9352_9373 = G__9382;
count__9353_9374 = G__9383;
i__9354_9375 = G__9384;
continue;
}
} else
{var temp__4092__auto___9385 = cljs.core.seq.call(null,seq__9350_9372);if(cljs.core.truth_(temp__4092__auto___9385))
{var seq__9350_9386__$1 = temp__4092__auto___9385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9350_9386__$1))
{var c__4010__auto___9387 = cljs.core.chunk_first.call(null,seq__9350_9386__$1);{
var G__9388 = cljs.core.chunk_rest.call(null,seq__9350_9386__$1);
var G__9389 = c__4010__auto___9387;
var G__9390 = cljs.core.count.call(null,c__4010__auto___9387);
var G__9391 = 0;
seq__9350_9372 = G__9388;
chunk__9352_9373 = G__9389;
count__9353_9374 = G__9390;
i__9354_9375 = G__9391;
continue;
}
} else
{var vec__9358_9392 = cljs.core.first.call(null,seq__9350_9386__$1);var actual_type_9393 = cljs.core.nth.call(null,vec__9358_9392,0,null);var __9394 = cljs.core.nth.call(null,vec__9358_9392,1,null);var keys_9395 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9364,actual_type_9393,f_9371], null);var canonical_f_9396 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9363),keys_9395);dommy.core.update_event_listeners_BANG_.call(null,elem_9363,dommy.utils.dissoc_in,keys_9395);
if(cljs.core.truth_(elem_9363.removeEventListener))
{elem_9363.removeEventListener(cljs.core.name.call(null,actual_type_9393),canonical_f_9396);
} else
{elem_9363.detachEvent(cljs.core.name.call(null,actual_type_9393),canonical_f_9396);
}
{
var G__9397 = cljs.core.next.call(null,seq__9350_9386__$1);
var G__9398 = null;
var G__9399 = 0;
var G__9400 = 0;
seq__9350_9372 = G__9397;
chunk__9352_9373 = G__9398;
count__9353_9374 = G__9399;
i__9354_9375 = G__9400;
continue;
}
}
} else
{}
}
break;
}
{
var G__9401 = seq__9340_9365;
var G__9402 = chunk__9347_9366;
var G__9403 = count__9348_9367;
var G__9404 = (i__9349_9368 + 1);
seq__9340_9365 = G__9401;
chunk__9347_9366 = G__9402;
count__9348_9367 = G__9403;
i__9349_9368 = G__9404;
continue;
}
} else
{var temp__4092__auto___9405 = cljs.core.seq.call(null,seq__9340_9365);if(cljs.core.truth_(temp__4092__auto___9405))
{var seq__9340_9406__$1 = temp__4092__auto___9405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9340_9406__$1))
{var c__4010__auto___9407 = cljs.core.chunk_first.call(null,seq__9340_9406__$1);{
var G__9408 = cljs.core.chunk_rest.call(null,seq__9340_9406__$1);
var G__9409 = c__4010__auto___9407;
var G__9410 = cljs.core.count.call(null,c__4010__auto___9407);
var G__9411 = 0;
seq__9340_9365 = G__9408;
chunk__9347_9366 = G__9409;
count__9348_9367 = G__9410;
i__9349_9368 = G__9411;
continue;
}
} else
{var vec__9359_9412 = cljs.core.first.call(null,seq__9340_9406__$1);var orig_type_9413 = cljs.core.nth.call(null,vec__9359_9412,0,null);var f_9414 = cljs.core.nth.call(null,vec__9359_9412,1,null);var seq__9341_9415 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9413,new cljs.core.PersistentArrayMap.fromArray([orig_type_9413,cljs.core.identity], true, false)));var chunk__9343_9416 = null;var count__9344_9417 = 0;var i__9345_9418 = 0;while(true){
if((i__9345_9418 < count__9344_9417))
{var vec__9360_9419 = cljs.core._nth.call(null,chunk__9343_9416,i__9345_9418);var actual_type_9420 = cljs.core.nth.call(null,vec__9360_9419,0,null);var __9421 = cljs.core.nth.call(null,vec__9360_9419,1,null);var keys_9422 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9364,actual_type_9420,f_9414], null);var canonical_f_9423 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9363),keys_9422);dommy.core.update_event_listeners_BANG_.call(null,elem_9363,dommy.utils.dissoc_in,keys_9422);
if(cljs.core.truth_(elem_9363.removeEventListener))
{elem_9363.removeEventListener(cljs.core.name.call(null,actual_type_9420),canonical_f_9423);
} else
{elem_9363.detachEvent(cljs.core.name.call(null,actual_type_9420),canonical_f_9423);
}
{
var G__9424 = seq__9341_9415;
var G__9425 = chunk__9343_9416;
var G__9426 = count__9344_9417;
var G__9427 = (i__9345_9418 + 1);
seq__9341_9415 = G__9424;
chunk__9343_9416 = G__9425;
count__9344_9417 = G__9426;
i__9345_9418 = G__9427;
continue;
}
} else
{var temp__4092__auto___9428__$1 = cljs.core.seq.call(null,seq__9341_9415);if(cljs.core.truth_(temp__4092__auto___9428__$1))
{var seq__9341_9429__$1 = temp__4092__auto___9428__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9341_9429__$1))
{var c__4010__auto___9430 = cljs.core.chunk_first.call(null,seq__9341_9429__$1);{
var G__9431 = cljs.core.chunk_rest.call(null,seq__9341_9429__$1);
var G__9432 = c__4010__auto___9430;
var G__9433 = cljs.core.count.call(null,c__4010__auto___9430);
var G__9434 = 0;
seq__9341_9415 = G__9431;
chunk__9343_9416 = G__9432;
count__9344_9417 = G__9433;
i__9345_9418 = G__9434;
continue;
}
} else
{var vec__9361_9435 = cljs.core.first.call(null,seq__9341_9429__$1);var actual_type_9436 = cljs.core.nth.call(null,vec__9361_9435,0,null);var __9437 = cljs.core.nth.call(null,vec__9361_9435,1,null);var keys_9438 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9364,actual_type_9436,f_9414], null);var canonical_f_9439 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9363),keys_9438);dommy.core.update_event_listeners_BANG_.call(null,elem_9363,dommy.utils.dissoc_in,keys_9438);
if(cljs.core.truth_(elem_9363.removeEventListener))
{elem_9363.removeEventListener(cljs.core.name.call(null,actual_type_9436),canonical_f_9439);
} else
{elem_9363.detachEvent(cljs.core.name.call(null,actual_type_9436),canonical_f_9439);
}
{
var G__9440 = cljs.core.next.call(null,seq__9341_9429__$1);
var G__9441 = null;
var G__9442 = 0;
var G__9443 = 0;
seq__9341_9415 = G__9440;
chunk__9343_9416 = G__9441;
count__9344_9417 = G__9442;
i__9345_9418 = G__9443;
continue;
}
}
} else
{}
}
break;
}
{
var G__9444 = cljs.core.next.call(null,seq__9340_9406__$1);
var G__9445 = null;
var G__9446 = 0;
var G__9447 = 0;
seq__9340_9365 = G__9444;
chunk__9347_9366 = G__9445;
count__9348_9367 = G__9446;
i__9349_9368 = G__9447;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9448){
var elem_sel = cljs.core.first(arglist__9448);
var type_fs = cljs.core.rest(arglist__9448);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__9456_9463 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9464 = cljs.core.nth.call(null,vec__9456_9463,0,null);var selector_9465 = cljs.core.nth.call(null,vec__9456_9463,1,null);var seq__9457_9466 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9458_9467 = null;var count__9459_9468 = 0;var i__9460_9469 = 0;while(true){
if((i__9460_9469 < count__9459_9468))
{var vec__9461_9470 = cljs.core._nth.call(null,chunk__9458_9467,i__9460_9469);var type_9471 = cljs.core.nth.call(null,vec__9461_9470,0,null);var f_9472 = cljs.core.nth.call(null,vec__9461_9470,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9471,((function (seq__9457_9466,chunk__9458_9467,count__9459_9468,i__9460_9469,vec__9461_9470,type_9471,f_9472){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9471,this_fn);
return f_9472.call(null,e);
});})(seq__9457_9466,chunk__9458_9467,count__9459_9468,i__9460_9469,vec__9461_9470,type_9471,f_9472))
);
{
var G__9473 = seq__9457_9466;
var G__9474 = chunk__9458_9467;
var G__9475 = count__9459_9468;
var G__9476 = (i__9460_9469 + 1);
seq__9457_9466 = G__9473;
chunk__9458_9467 = G__9474;
count__9459_9468 = G__9475;
i__9460_9469 = G__9476;
continue;
}
} else
{var temp__4092__auto___9477 = cljs.core.seq.call(null,seq__9457_9466);if(cljs.core.truth_(temp__4092__auto___9477))
{var seq__9457_9478__$1 = temp__4092__auto___9477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9457_9478__$1))
{var c__4010__auto___9479 = cljs.core.chunk_first.call(null,seq__9457_9478__$1);{
var G__9480 = cljs.core.chunk_rest.call(null,seq__9457_9478__$1);
var G__9481 = c__4010__auto___9479;
var G__9482 = cljs.core.count.call(null,c__4010__auto___9479);
var G__9483 = 0;
seq__9457_9466 = G__9480;
chunk__9458_9467 = G__9481;
count__9459_9468 = G__9482;
i__9460_9469 = G__9483;
continue;
}
} else
{var vec__9462_9484 = cljs.core.first.call(null,seq__9457_9478__$1);var type_9485 = cljs.core.nth.call(null,vec__9462_9484,0,null);var f_9486 = cljs.core.nth.call(null,vec__9462_9484,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9485,((function (seq__9457_9466,chunk__9458_9467,count__9459_9468,i__9460_9469,vec__9462_9484,type_9485,f_9486,seq__9457_9478__$1,temp__4092__auto___9477){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9485,this_fn);
return f_9486.call(null,e);
});})(seq__9457_9466,chunk__9458_9467,count__9459_9468,i__9460_9469,vec__9462_9484,type_9485,f_9486,seq__9457_9478__$1,temp__4092__auto___9477))
);
{
var G__9487 = cljs.core.next.call(null,seq__9457_9478__$1);
var G__9488 = null;
var G__9489 = 0;
var G__9490 = 0;
seq__9457_9466 = G__9487;
chunk__9458_9467 = G__9488;
count__9459_9468 = G__9489;
i__9460_9469 = G__9490;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9491){
var elem_sel = cljs.core.first(arglist__9491);
var type_fs = cljs.core.rest(arglist__9491);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__9492){var vec__9494 = p__9492;var update_event_BANG_ = cljs.core.nth.call(null,vec__9494,0,null);if(cljs.core.truth_(dommy.core.descendant_QMARK_.call(null,node,document.documentElement)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3291__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__9492 = null;if (arguments.length > 2) {
  p__9492 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__9492);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__9495){
var node = cljs.core.first(arglist__9495);
arglist__9495 = cljs.core.next(arglist__9495);
var event_type = cljs.core.first(arglist__9495);
var p__9492 = cljs.core.rest(arglist__9495);
return fire_BANG___delegate(node,event_type,p__9492);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
