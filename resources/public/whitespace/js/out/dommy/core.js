// Compiled by ClojureScript 0.0-2202
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
dommy.core.text = (function text(elem){var or__3481__auto__ = elem.textContent;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
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
var append_BANG___2 = (function (parent,child){var G__7469 = dommy.template.__GT_node_like.call(null,parent);G__7469.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__7469;
});
var append_BANG___3 = (function() { 
var G__7474__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__7470_7475 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__7471_7476 = null;var count__7472_7477 = 0;var i__7473_7478 = 0;while(true){
if((i__7473_7478 < count__7472_7477))
{var c_7479 = cljs.core._nth.call(null,chunk__7471_7476,i__7473_7478);append_BANG_.call(null,parent__$1,c_7479);
{
var G__7480 = seq__7470_7475;
var G__7481 = chunk__7471_7476;
var G__7482 = count__7472_7477;
var G__7483 = (i__7473_7478 + 1);
seq__7470_7475 = G__7480;
chunk__7471_7476 = G__7481;
count__7472_7477 = G__7482;
i__7473_7478 = G__7483;
continue;
}
} else
{var temp__4126__auto___7484 = cljs.core.seq.call(null,seq__7470_7475);if(temp__4126__auto___7484)
{var seq__7470_7485__$1 = temp__4126__auto___7484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7470_7485__$1))
{var c__4229__auto___7486 = cljs.core.chunk_first.call(null,seq__7470_7485__$1);{
var G__7487 = cljs.core.chunk_rest.call(null,seq__7470_7485__$1);
var G__7488 = c__4229__auto___7486;
var G__7489 = cljs.core.count.call(null,c__4229__auto___7486);
var G__7490 = 0;
seq__7470_7475 = G__7487;
chunk__7471_7476 = G__7488;
count__7472_7477 = G__7489;
i__7473_7478 = G__7490;
continue;
}
} else
{var c_7491 = cljs.core.first.call(null,seq__7470_7485__$1);append_BANG_.call(null,parent__$1,c_7491);
{
var G__7492 = cljs.core.next.call(null,seq__7470_7485__$1);
var G__7493 = null;
var G__7494 = 0;
var G__7495 = 0;
seq__7470_7475 = G__7492;
chunk__7471_7476 = G__7493;
count__7472_7477 = G__7494;
i__7473_7478 = G__7495;
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
var G__7474 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7474__delegate.call(this,parent,child,more_children);};
G__7474.cljs$lang$maxFixedArity = 2;
G__7474.cljs$lang$applyTo = (function (arglist__7496){
var parent = cljs.core.first(arglist__7496);
arglist__7496 = cljs.core.next(arglist__7496);
var child = cljs.core.first(arglist__7496);
var more_children = cljs.core.rest(arglist__7496);
return G__7474__delegate(parent,child,more_children);
});
G__7474.cljs$core$IFn$_invoke$arity$variadic = G__7474__delegate;
return G__7474;
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
var G__7505__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__7501_7506 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__7502_7507 = null;var count__7503_7508 = 0;var i__7504_7509 = 0;while(true){
if((i__7504_7509 < count__7503_7508))
{var c_7510 = cljs.core._nth.call(null,chunk__7502_7507,i__7504_7509);prepend_BANG_.call(null,parent__$1,c_7510);
{
var G__7511 = seq__7501_7506;
var G__7512 = chunk__7502_7507;
var G__7513 = count__7503_7508;
var G__7514 = (i__7504_7509 + 1);
seq__7501_7506 = G__7511;
chunk__7502_7507 = G__7512;
count__7503_7508 = G__7513;
i__7504_7509 = G__7514;
continue;
}
} else
{var temp__4126__auto___7515 = cljs.core.seq.call(null,seq__7501_7506);if(temp__4126__auto___7515)
{var seq__7501_7516__$1 = temp__4126__auto___7515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7501_7516__$1))
{var c__4229__auto___7517 = cljs.core.chunk_first.call(null,seq__7501_7516__$1);{
var G__7518 = cljs.core.chunk_rest.call(null,seq__7501_7516__$1);
var G__7519 = c__4229__auto___7517;
var G__7520 = cljs.core.count.call(null,c__4229__auto___7517);
var G__7521 = 0;
seq__7501_7506 = G__7518;
chunk__7502_7507 = G__7519;
count__7503_7508 = G__7520;
i__7504_7509 = G__7521;
continue;
}
} else
{var c_7522 = cljs.core.first.call(null,seq__7501_7516__$1);prepend_BANG_.call(null,parent__$1,c_7522);
{
var G__7523 = cljs.core.next.call(null,seq__7501_7516__$1);
var G__7524 = null;
var G__7525 = 0;
var G__7526 = 0;
seq__7501_7506 = G__7523;
chunk__7502_7507 = G__7524;
count__7503_7508 = G__7525;
i__7504_7509 = G__7526;
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
var G__7505 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7505__delegate.call(this,parent,child,more_children);};
G__7505.cljs$lang$maxFixedArity = 2;
G__7505.cljs$lang$applyTo = (function (arglist__7527){
var parent = cljs.core.first(arglist__7527);
arglist__7527 = cljs.core.next(arglist__7527);
var child = cljs.core.first(arglist__7527);
var more_children = cljs.core.rest(arglist__7527);
return G__7505__delegate(parent,child,more_children);
});
G__7505.cljs$core$IFn$_invoke$arity$variadic = G__7505__delegate;
return G__7505;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___7528 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___7528))
{var next_7529 = temp__4124__auto___7528;parent.insertBefore(actual_node,next_7529);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__7531 = dommy.template.__GT_node_like.call(null,parent);G__7531.innerHTML = "";
dommy.core.append_BANG_.call(null,G__7531,node_like);
return G__7531;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__7533 = elem__$1.parentNode;G__7533.removeChild(elem__$1);
return G__7533;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__7539){var vec__7540 = p__7539;var k = cljs.core.nth.call(null,vec__7540,0,null);var v = cljs.core.nth.call(null,vec__7540,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t7541 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t7541 = (function (v,k,vec__7540,p__7539,container,key_selectors_map,template,selector_map,meta7542){
this.v = v;
this.k = k;
this.vec__7540 = vec__7540;
this.p__7539 = p__7539;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta7542 = meta7542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t7541.cljs$lang$type = true;
dommy.core.t7541.cljs$lang$ctorStr = "dommy.core/t7541";
dommy.core.t7541.cljs$lang$ctorPrWriter = ((function (vec__7540,k,v,container){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"dommy.core/t7541");
});})(vec__7540,k,v,container))
;
dommy.core.t7541.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__7540,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__7540,k,v,container))
;
dommy.core.t7541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__7540,k,v,container){
return (function (_7543){var self__ = this;
var _7543__$1 = this;return self__.meta7542;
});})(vec__7540,k,v,container))
;
dommy.core.t7541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__7540,k,v,container){
return (function (_7543,meta7542__$1){var self__ = this;
var _7543__$1 = this;return (new dommy.core.t7541(self__.v,self__.k,self__.vec__7540,self__.p__7539,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta7542__$1));
});})(vec__7540,k,v,container))
;
dommy.core.__GT_t7541 = ((function (vec__7540,k,v,container){
return (function __GT_t7541(v__$1,k__$1,vec__7540__$1,p__7539__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta7542){return (new dommy.core.t7541(v__$1,k__$1,vec__7540__$1,p__7539__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta7542));
});})(vec__7540,k,v,container))
;
}
return (new dommy.core.t7541(v,k,vec__7540,p__7539,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__7544_SHARP_){return p1__7544_SHARP_.parentNode;
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
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= 0);
});
;})(matches))
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__7545_SHARP_){return !((p1__7545_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__7546){var vec__7547 = p__7546;var special_mouse_event = cljs.core.nth.call(null,vec__7547,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__7547,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__7547,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__7547,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3481__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3469__auto__ = related_target;if(cljs.core.truth_(and__3469__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3469__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__7547,special_mouse_event,real_mouse_event))
});})(vec__7547,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3469__auto__ = selected_target;if(cljs.core.truth_(and__3469__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3469__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__3481__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__7548){
var elem = cljs.core.first(arglist__7548);
arglist__7548 = cljs.core.next(arglist__7548);
var f = cljs.core.first(arglist__7548);
var args = cljs.core.rest(arglist__7548);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__7549_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__7549_SHARP_));
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
var vec__7573_7596 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7597 = cljs.core.nth.call(null,vec__7573_7596,0,null);var selector_7598 = cljs.core.nth.call(null,vec__7573_7596,1,null);var seq__7574_7599 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__7581_7600 = null;var count__7582_7601 = 0;var i__7583_7602 = 0;while(true){
if((i__7583_7602 < count__7582_7601))
{var vec__7590_7603 = cljs.core._nth.call(null,chunk__7581_7600,i__7583_7602);var orig_type_7604 = cljs.core.nth.call(null,vec__7590_7603,0,null);var f_7605 = cljs.core.nth.call(null,vec__7590_7603,1,null);var seq__7584_7606 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7604,new cljs.core.PersistentArrayMap.fromArray([orig_type_7604,cljs.core.identity], true, false)));var chunk__7586_7607 = null;var count__7587_7608 = 0;var i__7588_7609 = 0;while(true){
if((i__7588_7609 < count__7587_7608))
{var vec__7591_7610 = cljs.core._nth.call(null,chunk__7586_7607,i__7588_7609);var actual_type_7611 = cljs.core.nth.call(null,vec__7591_7610,0,null);var factory_7612 = cljs.core.nth.call(null,vec__7591_7610,1,null);var canonical_f_7613 = (cljs.core.truth_(selector_7598)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7597,selector_7598):cljs.core.identity).call(null,factory_7612.call(null,f_7605));dommy.core.update_event_listeners_BANG_.call(null,elem_7597,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7598,actual_type_7611,f_7605], null),canonical_f_7613);
if(cljs.core.truth_(elem_7597.addEventListener))
{elem_7597.addEventListener(cljs.core.name.call(null,actual_type_7611),canonical_f_7613);
} else
{elem_7597.attachEvent(cljs.core.name.call(null,actual_type_7611),canonical_f_7613);
}
{
var G__7614 = seq__7584_7606;
var G__7615 = chunk__7586_7607;
var G__7616 = count__7587_7608;
var G__7617 = (i__7588_7609 + 1);
seq__7584_7606 = G__7614;
chunk__7586_7607 = G__7615;
count__7587_7608 = G__7616;
i__7588_7609 = G__7617;
continue;
}
} else
{var temp__4126__auto___7618 = cljs.core.seq.call(null,seq__7584_7606);if(temp__4126__auto___7618)
{var seq__7584_7619__$1 = temp__4126__auto___7618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7584_7619__$1))
{var c__4229__auto___7620 = cljs.core.chunk_first.call(null,seq__7584_7619__$1);{
var G__7621 = cljs.core.chunk_rest.call(null,seq__7584_7619__$1);
var G__7622 = c__4229__auto___7620;
var G__7623 = cljs.core.count.call(null,c__4229__auto___7620);
var G__7624 = 0;
seq__7584_7606 = G__7621;
chunk__7586_7607 = G__7622;
count__7587_7608 = G__7623;
i__7588_7609 = G__7624;
continue;
}
} else
{var vec__7592_7625 = cljs.core.first.call(null,seq__7584_7619__$1);var actual_type_7626 = cljs.core.nth.call(null,vec__7592_7625,0,null);var factory_7627 = cljs.core.nth.call(null,vec__7592_7625,1,null);var canonical_f_7628 = (cljs.core.truth_(selector_7598)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7597,selector_7598):cljs.core.identity).call(null,factory_7627.call(null,f_7605));dommy.core.update_event_listeners_BANG_.call(null,elem_7597,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7598,actual_type_7626,f_7605], null),canonical_f_7628);
if(cljs.core.truth_(elem_7597.addEventListener))
{elem_7597.addEventListener(cljs.core.name.call(null,actual_type_7626),canonical_f_7628);
} else
{elem_7597.attachEvent(cljs.core.name.call(null,actual_type_7626),canonical_f_7628);
}
{
var G__7629 = cljs.core.next.call(null,seq__7584_7619__$1);
var G__7630 = null;
var G__7631 = 0;
var G__7632 = 0;
seq__7584_7606 = G__7629;
chunk__7586_7607 = G__7630;
count__7587_7608 = G__7631;
i__7588_7609 = G__7632;
continue;
}
}
} else
{}
}
break;
}
{
var G__7633 = seq__7574_7599;
var G__7634 = chunk__7581_7600;
var G__7635 = count__7582_7601;
var G__7636 = (i__7583_7602 + 1);
seq__7574_7599 = G__7633;
chunk__7581_7600 = G__7634;
count__7582_7601 = G__7635;
i__7583_7602 = G__7636;
continue;
}
} else
{var temp__4126__auto___7637 = cljs.core.seq.call(null,seq__7574_7599);if(temp__4126__auto___7637)
{var seq__7574_7638__$1 = temp__4126__auto___7637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7574_7638__$1))
{var c__4229__auto___7639 = cljs.core.chunk_first.call(null,seq__7574_7638__$1);{
var G__7640 = cljs.core.chunk_rest.call(null,seq__7574_7638__$1);
var G__7641 = c__4229__auto___7639;
var G__7642 = cljs.core.count.call(null,c__4229__auto___7639);
var G__7643 = 0;
seq__7574_7599 = G__7640;
chunk__7581_7600 = G__7641;
count__7582_7601 = G__7642;
i__7583_7602 = G__7643;
continue;
}
} else
{var vec__7593_7644 = cljs.core.first.call(null,seq__7574_7638__$1);var orig_type_7645 = cljs.core.nth.call(null,vec__7593_7644,0,null);var f_7646 = cljs.core.nth.call(null,vec__7593_7644,1,null);var seq__7575_7647 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7645,new cljs.core.PersistentArrayMap.fromArray([orig_type_7645,cljs.core.identity], true, false)));var chunk__7577_7648 = null;var count__7578_7649 = 0;var i__7579_7650 = 0;while(true){
if((i__7579_7650 < count__7578_7649))
{var vec__7594_7651 = cljs.core._nth.call(null,chunk__7577_7648,i__7579_7650);var actual_type_7652 = cljs.core.nth.call(null,vec__7594_7651,0,null);var factory_7653 = cljs.core.nth.call(null,vec__7594_7651,1,null);var canonical_f_7654 = (cljs.core.truth_(selector_7598)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7597,selector_7598):cljs.core.identity).call(null,factory_7653.call(null,f_7646));dommy.core.update_event_listeners_BANG_.call(null,elem_7597,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7598,actual_type_7652,f_7646], null),canonical_f_7654);
if(cljs.core.truth_(elem_7597.addEventListener))
{elem_7597.addEventListener(cljs.core.name.call(null,actual_type_7652),canonical_f_7654);
} else
{elem_7597.attachEvent(cljs.core.name.call(null,actual_type_7652),canonical_f_7654);
}
{
var G__7655 = seq__7575_7647;
var G__7656 = chunk__7577_7648;
var G__7657 = count__7578_7649;
var G__7658 = (i__7579_7650 + 1);
seq__7575_7647 = G__7655;
chunk__7577_7648 = G__7656;
count__7578_7649 = G__7657;
i__7579_7650 = G__7658;
continue;
}
} else
{var temp__4126__auto___7659__$1 = cljs.core.seq.call(null,seq__7575_7647);if(temp__4126__auto___7659__$1)
{var seq__7575_7660__$1 = temp__4126__auto___7659__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7575_7660__$1))
{var c__4229__auto___7661 = cljs.core.chunk_first.call(null,seq__7575_7660__$1);{
var G__7662 = cljs.core.chunk_rest.call(null,seq__7575_7660__$1);
var G__7663 = c__4229__auto___7661;
var G__7664 = cljs.core.count.call(null,c__4229__auto___7661);
var G__7665 = 0;
seq__7575_7647 = G__7662;
chunk__7577_7648 = G__7663;
count__7578_7649 = G__7664;
i__7579_7650 = G__7665;
continue;
}
} else
{var vec__7595_7666 = cljs.core.first.call(null,seq__7575_7660__$1);var actual_type_7667 = cljs.core.nth.call(null,vec__7595_7666,0,null);var factory_7668 = cljs.core.nth.call(null,vec__7595_7666,1,null);var canonical_f_7669 = (cljs.core.truth_(selector_7598)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7597,selector_7598):cljs.core.identity).call(null,factory_7668.call(null,f_7646));dommy.core.update_event_listeners_BANG_.call(null,elem_7597,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7598,actual_type_7667,f_7646], null),canonical_f_7669);
if(cljs.core.truth_(elem_7597.addEventListener))
{elem_7597.addEventListener(cljs.core.name.call(null,actual_type_7667),canonical_f_7669);
} else
{elem_7597.attachEvent(cljs.core.name.call(null,actual_type_7667),canonical_f_7669);
}
{
var G__7670 = cljs.core.next.call(null,seq__7575_7660__$1);
var G__7671 = null;
var G__7672 = 0;
var G__7673 = 0;
seq__7575_7647 = G__7670;
chunk__7577_7648 = G__7671;
count__7578_7649 = G__7672;
i__7579_7650 = G__7673;
continue;
}
}
} else
{}
}
break;
}
{
var G__7674 = cljs.core.next.call(null,seq__7574_7638__$1);
var G__7675 = null;
var G__7676 = 0;
var G__7677 = 0;
seq__7574_7599 = G__7674;
chunk__7581_7600 = G__7675;
count__7582_7601 = G__7676;
i__7583_7602 = G__7677;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__7678){
var elem_sel = cljs.core.first(arglist__7678);
var type_fs = cljs.core.rest(arglist__7678);
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
var vec__7702_7725 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7726 = cljs.core.nth.call(null,vec__7702_7725,0,null);var selector_7727 = cljs.core.nth.call(null,vec__7702_7725,1,null);var seq__7703_7728 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__7710_7729 = null;var count__7711_7730 = 0;var i__7712_7731 = 0;while(true){
if((i__7712_7731 < count__7711_7730))
{var vec__7719_7732 = cljs.core._nth.call(null,chunk__7710_7729,i__7712_7731);var orig_type_7733 = cljs.core.nth.call(null,vec__7719_7732,0,null);var f_7734 = cljs.core.nth.call(null,vec__7719_7732,1,null);var seq__7713_7735 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7733,new cljs.core.PersistentArrayMap.fromArray([orig_type_7733,cljs.core.identity], true, false)));var chunk__7715_7736 = null;var count__7716_7737 = 0;var i__7717_7738 = 0;while(true){
if((i__7717_7738 < count__7716_7737))
{var vec__7720_7739 = cljs.core._nth.call(null,chunk__7715_7736,i__7717_7738);var actual_type_7740 = cljs.core.nth.call(null,vec__7720_7739,0,null);var __7741 = cljs.core.nth.call(null,vec__7720_7739,1,null);var keys_7742 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7727,actual_type_7740,f_7734], null);var canonical_f_7743 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7726),keys_7742);dommy.core.update_event_listeners_BANG_.call(null,elem_7726,dommy.utils.dissoc_in,keys_7742);
if(cljs.core.truth_(elem_7726.removeEventListener))
{elem_7726.removeEventListener(cljs.core.name.call(null,actual_type_7740),canonical_f_7743);
} else
{elem_7726.detachEvent(cljs.core.name.call(null,actual_type_7740),canonical_f_7743);
}
{
var G__7744 = seq__7713_7735;
var G__7745 = chunk__7715_7736;
var G__7746 = count__7716_7737;
var G__7747 = (i__7717_7738 + 1);
seq__7713_7735 = G__7744;
chunk__7715_7736 = G__7745;
count__7716_7737 = G__7746;
i__7717_7738 = G__7747;
continue;
}
} else
{var temp__4126__auto___7748 = cljs.core.seq.call(null,seq__7713_7735);if(temp__4126__auto___7748)
{var seq__7713_7749__$1 = temp__4126__auto___7748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7713_7749__$1))
{var c__4229__auto___7750 = cljs.core.chunk_first.call(null,seq__7713_7749__$1);{
var G__7751 = cljs.core.chunk_rest.call(null,seq__7713_7749__$1);
var G__7752 = c__4229__auto___7750;
var G__7753 = cljs.core.count.call(null,c__4229__auto___7750);
var G__7754 = 0;
seq__7713_7735 = G__7751;
chunk__7715_7736 = G__7752;
count__7716_7737 = G__7753;
i__7717_7738 = G__7754;
continue;
}
} else
{var vec__7721_7755 = cljs.core.first.call(null,seq__7713_7749__$1);var actual_type_7756 = cljs.core.nth.call(null,vec__7721_7755,0,null);var __7757 = cljs.core.nth.call(null,vec__7721_7755,1,null);var keys_7758 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7727,actual_type_7756,f_7734], null);var canonical_f_7759 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7726),keys_7758);dommy.core.update_event_listeners_BANG_.call(null,elem_7726,dommy.utils.dissoc_in,keys_7758);
if(cljs.core.truth_(elem_7726.removeEventListener))
{elem_7726.removeEventListener(cljs.core.name.call(null,actual_type_7756),canonical_f_7759);
} else
{elem_7726.detachEvent(cljs.core.name.call(null,actual_type_7756),canonical_f_7759);
}
{
var G__7760 = cljs.core.next.call(null,seq__7713_7749__$1);
var G__7761 = null;
var G__7762 = 0;
var G__7763 = 0;
seq__7713_7735 = G__7760;
chunk__7715_7736 = G__7761;
count__7716_7737 = G__7762;
i__7717_7738 = G__7763;
continue;
}
}
} else
{}
}
break;
}
{
var G__7764 = seq__7703_7728;
var G__7765 = chunk__7710_7729;
var G__7766 = count__7711_7730;
var G__7767 = (i__7712_7731 + 1);
seq__7703_7728 = G__7764;
chunk__7710_7729 = G__7765;
count__7711_7730 = G__7766;
i__7712_7731 = G__7767;
continue;
}
} else
{var temp__4126__auto___7768 = cljs.core.seq.call(null,seq__7703_7728);if(temp__4126__auto___7768)
{var seq__7703_7769__$1 = temp__4126__auto___7768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7703_7769__$1))
{var c__4229__auto___7770 = cljs.core.chunk_first.call(null,seq__7703_7769__$1);{
var G__7771 = cljs.core.chunk_rest.call(null,seq__7703_7769__$1);
var G__7772 = c__4229__auto___7770;
var G__7773 = cljs.core.count.call(null,c__4229__auto___7770);
var G__7774 = 0;
seq__7703_7728 = G__7771;
chunk__7710_7729 = G__7772;
count__7711_7730 = G__7773;
i__7712_7731 = G__7774;
continue;
}
} else
{var vec__7722_7775 = cljs.core.first.call(null,seq__7703_7769__$1);var orig_type_7776 = cljs.core.nth.call(null,vec__7722_7775,0,null);var f_7777 = cljs.core.nth.call(null,vec__7722_7775,1,null);var seq__7704_7778 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7776,new cljs.core.PersistentArrayMap.fromArray([orig_type_7776,cljs.core.identity], true, false)));var chunk__7706_7779 = null;var count__7707_7780 = 0;var i__7708_7781 = 0;while(true){
if((i__7708_7781 < count__7707_7780))
{var vec__7723_7782 = cljs.core._nth.call(null,chunk__7706_7779,i__7708_7781);var actual_type_7783 = cljs.core.nth.call(null,vec__7723_7782,0,null);var __7784 = cljs.core.nth.call(null,vec__7723_7782,1,null);var keys_7785 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7727,actual_type_7783,f_7777], null);var canonical_f_7786 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7726),keys_7785);dommy.core.update_event_listeners_BANG_.call(null,elem_7726,dommy.utils.dissoc_in,keys_7785);
if(cljs.core.truth_(elem_7726.removeEventListener))
{elem_7726.removeEventListener(cljs.core.name.call(null,actual_type_7783),canonical_f_7786);
} else
{elem_7726.detachEvent(cljs.core.name.call(null,actual_type_7783),canonical_f_7786);
}
{
var G__7787 = seq__7704_7778;
var G__7788 = chunk__7706_7779;
var G__7789 = count__7707_7780;
var G__7790 = (i__7708_7781 + 1);
seq__7704_7778 = G__7787;
chunk__7706_7779 = G__7788;
count__7707_7780 = G__7789;
i__7708_7781 = G__7790;
continue;
}
} else
{var temp__4126__auto___7791__$1 = cljs.core.seq.call(null,seq__7704_7778);if(temp__4126__auto___7791__$1)
{var seq__7704_7792__$1 = temp__4126__auto___7791__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7704_7792__$1))
{var c__4229__auto___7793 = cljs.core.chunk_first.call(null,seq__7704_7792__$1);{
var G__7794 = cljs.core.chunk_rest.call(null,seq__7704_7792__$1);
var G__7795 = c__4229__auto___7793;
var G__7796 = cljs.core.count.call(null,c__4229__auto___7793);
var G__7797 = 0;
seq__7704_7778 = G__7794;
chunk__7706_7779 = G__7795;
count__7707_7780 = G__7796;
i__7708_7781 = G__7797;
continue;
}
} else
{var vec__7724_7798 = cljs.core.first.call(null,seq__7704_7792__$1);var actual_type_7799 = cljs.core.nth.call(null,vec__7724_7798,0,null);var __7800 = cljs.core.nth.call(null,vec__7724_7798,1,null);var keys_7801 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7727,actual_type_7799,f_7777], null);var canonical_f_7802 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7726),keys_7801);dommy.core.update_event_listeners_BANG_.call(null,elem_7726,dommy.utils.dissoc_in,keys_7801);
if(cljs.core.truth_(elem_7726.removeEventListener))
{elem_7726.removeEventListener(cljs.core.name.call(null,actual_type_7799),canonical_f_7802);
} else
{elem_7726.detachEvent(cljs.core.name.call(null,actual_type_7799),canonical_f_7802);
}
{
var G__7803 = cljs.core.next.call(null,seq__7704_7792__$1);
var G__7804 = null;
var G__7805 = 0;
var G__7806 = 0;
seq__7704_7778 = G__7803;
chunk__7706_7779 = G__7804;
count__7707_7780 = G__7805;
i__7708_7781 = G__7806;
continue;
}
}
} else
{}
}
break;
}
{
var G__7807 = cljs.core.next.call(null,seq__7703_7769__$1);
var G__7808 = null;
var G__7809 = 0;
var G__7810 = 0;
seq__7703_7728 = G__7807;
chunk__7710_7729 = G__7808;
count__7711_7730 = G__7809;
i__7712_7731 = G__7810;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__7811){
var elem_sel = cljs.core.first(arglist__7811);
var type_fs = cljs.core.rest(arglist__7811);
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
var vec__7819_7826 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7827 = cljs.core.nth.call(null,vec__7819_7826,0,null);var selector_7828 = cljs.core.nth.call(null,vec__7819_7826,1,null);var seq__7820_7829 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__7821_7830 = null;var count__7822_7831 = 0;var i__7823_7832 = 0;while(true){
if((i__7823_7832 < count__7822_7831))
{var vec__7824_7833 = cljs.core._nth.call(null,chunk__7821_7830,i__7823_7832);var type_7834 = cljs.core.nth.call(null,vec__7824_7833,0,null);var f_7835 = cljs.core.nth.call(null,vec__7824_7833,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_7834,((function (seq__7820_7829,chunk__7821_7830,count__7822_7831,i__7823_7832,vec__7824_7833,type_7834,f_7835,vec__7819_7826,elem_7827,selector_7828){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7834,this_fn);
return f_7835.call(null,e);
});})(seq__7820_7829,chunk__7821_7830,count__7822_7831,i__7823_7832,vec__7824_7833,type_7834,f_7835,vec__7819_7826,elem_7827,selector_7828))
);
{
var G__7836 = seq__7820_7829;
var G__7837 = chunk__7821_7830;
var G__7838 = count__7822_7831;
var G__7839 = (i__7823_7832 + 1);
seq__7820_7829 = G__7836;
chunk__7821_7830 = G__7837;
count__7822_7831 = G__7838;
i__7823_7832 = G__7839;
continue;
}
} else
{var temp__4126__auto___7840 = cljs.core.seq.call(null,seq__7820_7829);if(temp__4126__auto___7840)
{var seq__7820_7841__$1 = temp__4126__auto___7840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7820_7841__$1))
{var c__4229__auto___7842 = cljs.core.chunk_first.call(null,seq__7820_7841__$1);{
var G__7843 = cljs.core.chunk_rest.call(null,seq__7820_7841__$1);
var G__7844 = c__4229__auto___7842;
var G__7845 = cljs.core.count.call(null,c__4229__auto___7842);
var G__7846 = 0;
seq__7820_7829 = G__7843;
chunk__7821_7830 = G__7844;
count__7822_7831 = G__7845;
i__7823_7832 = G__7846;
continue;
}
} else
{var vec__7825_7847 = cljs.core.first.call(null,seq__7820_7841__$1);var type_7848 = cljs.core.nth.call(null,vec__7825_7847,0,null);var f_7849 = cljs.core.nth.call(null,vec__7825_7847,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_7848,((function (seq__7820_7829,chunk__7821_7830,count__7822_7831,i__7823_7832,vec__7825_7847,type_7848,f_7849,seq__7820_7841__$1,temp__4126__auto___7840,vec__7819_7826,elem_7827,selector_7828){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7848,this_fn);
return f_7849.call(null,e);
});})(seq__7820_7829,chunk__7821_7830,count__7822_7831,i__7823_7832,vec__7825_7847,type_7848,f_7849,seq__7820_7841__$1,temp__4126__auto___7840,vec__7819_7826,elem_7827,selector_7828))
);
{
var G__7850 = cljs.core.next.call(null,seq__7820_7841__$1);
var G__7851 = null;
var G__7852 = 0;
var G__7853 = 0;
seq__7820_7829 = G__7850;
chunk__7821_7830 = G__7851;
count__7822_7831 = G__7852;
i__7823_7832 = G__7853;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__7854){
var elem_sel = cljs.core.first(arglist__7854);
var type_fs = cljs.core.rest(arglist__7854);
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
var fire_BANG___delegate = function (node,event_type,p__7855){var vec__7857 = p__7855;var update_event_BANG_ = cljs.core.nth.call(null,vec__7857,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3481__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
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
var p__7855 = null;if (arguments.length > 2) {
  p__7855 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__7855);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__7858){
var node = cljs.core.first(arglist__7858);
arglist__7858 = cljs.core.next(arglist__7858);
var event_type = cljs.core.first(arglist__7858);
var p__7855 = cljs.core.rest(arglist__7858);
return fire_BANG___delegate(node,event_type,p__7855);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
