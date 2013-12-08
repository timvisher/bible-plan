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
var append_BANG___2 = (function (parent,child){var G__9416 = dommy.template.__GT_node_like.call(null,parent);G__9416.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__9416;
});
var append_BANG___3 = (function() { 
var G__9421__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__9417_9422 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__9418_9423 = null;var count__9419_9424 = 0;var i__9420_9425 = 0;while(true){
if((i__9420_9425 < count__9419_9424))
{var c_9426 = cljs.core._nth.call(null,chunk__9418_9423,i__9420_9425);append_BANG_.call(null,parent__$1,c_9426);
{
var G__9427 = seq__9417_9422;
var G__9428 = chunk__9418_9423;
var G__9429 = count__9419_9424;
var G__9430 = (i__9420_9425 + 1);
seq__9417_9422 = G__9427;
chunk__9418_9423 = G__9428;
count__9419_9424 = G__9429;
i__9420_9425 = G__9430;
continue;
}
} else
{var temp__4092__auto___9431 = cljs.core.seq.call(null,seq__9417_9422);if(cljs.core.truth_(temp__4092__auto___9431))
{var seq__9417_9432__$1 = temp__4092__auto___9431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9417_9432__$1))
{var c__4010__auto___9433 = cljs.core.chunk_first.call(null,seq__9417_9432__$1);{
var G__9434 = cljs.core.chunk_rest.call(null,seq__9417_9432__$1);
var G__9435 = c__4010__auto___9433;
var G__9436 = cljs.core.count.call(null,c__4010__auto___9433);
var G__9437 = 0;
seq__9417_9422 = G__9434;
chunk__9418_9423 = G__9435;
count__9419_9424 = G__9436;
i__9420_9425 = G__9437;
continue;
}
} else
{var c_9438 = cljs.core.first.call(null,seq__9417_9432__$1);append_BANG_.call(null,parent__$1,c_9438);
{
var G__9439 = cljs.core.next.call(null,seq__9417_9432__$1);
var G__9440 = null;
var G__9441 = 0;
var G__9442 = 0;
seq__9417_9422 = G__9439;
chunk__9418_9423 = G__9440;
count__9419_9424 = G__9441;
i__9420_9425 = G__9442;
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
var G__9421 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9421__delegate.call(this,parent,child,more_children);};
G__9421.cljs$lang$maxFixedArity = 2;
G__9421.cljs$lang$applyTo = (function (arglist__9443){
var parent = cljs.core.first(arglist__9443);
arglist__9443 = cljs.core.next(arglist__9443);
var child = cljs.core.first(arglist__9443);
var more_children = cljs.core.rest(arglist__9443);
return G__9421__delegate(parent,child,more_children);
});
G__9421.cljs$core$IFn$_invoke$arity$variadic = G__9421__delegate;
return G__9421;
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
var G__9452__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__9448_9453 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__9449_9454 = null;var count__9450_9455 = 0;var i__9451_9456 = 0;while(true){
if((i__9451_9456 < count__9450_9455))
{var c_9457 = cljs.core._nth.call(null,chunk__9449_9454,i__9451_9456);prepend_BANG_.call(null,parent__$1,c_9457);
{
var G__9458 = seq__9448_9453;
var G__9459 = chunk__9449_9454;
var G__9460 = count__9450_9455;
var G__9461 = (i__9451_9456 + 1);
seq__9448_9453 = G__9458;
chunk__9449_9454 = G__9459;
count__9450_9455 = G__9460;
i__9451_9456 = G__9461;
continue;
}
} else
{var temp__4092__auto___9462 = cljs.core.seq.call(null,seq__9448_9453);if(cljs.core.truth_(temp__4092__auto___9462))
{var seq__9448_9463__$1 = temp__4092__auto___9462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9448_9463__$1))
{var c__4010__auto___9464 = cljs.core.chunk_first.call(null,seq__9448_9463__$1);{
var G__9465 = cljs.core.chunk_rest.call(null,seq__9448_9463__$1);
var G__9466 = c__4010__auto___9464;
var G__9467 = cljs.core.count.call(null,c__4010__auto___9464);
var G__9468 = 0;
seq__9448_9453 = G__9465;
chunk__9449_9454 = G__9466;
count__9450_9455 = G__9467;
i__9451_9456 = G__9468;
continue;
}
} else
{var c_9469 = cljs.core.first.call(null,seq__9448_9463__$1);prepend_BANG_.call(null,parent__$1,c_9469);
{
var G__9470 = cljs.core.next.call(null,seq__9448_9463__$1);
var G__9471 = null;
var G__9472 = 0;
var G__9473 = 0;
seq__9448_9453 = G__9470;
chunk__9449_9454 = G__9471;
count__9450_9455 = G__9472;
i__9451_9456 = G__9473;
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
var G__9452 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9452__delegate.call(this,parent,child,more_children);};
G__9452.cljs$lang$maxFixedArity = 2;
G__9452.cljs$lang$applyTo = (function (arglist__9474){
var parent = cljs.core.first(arglist__9474);
arglist__9474 = cljs.core.next(arglist__9474);
var child = cljs.core.first(arglist__9474);
var more_children = cljs.core.rest(arglist__9474);
return G__9452__delegate(parent,child,more_children);
});
G__9452.cljs$core$IFn$_invoke$arity$variadic = G__9452__delegate;
return G__9452;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___9475 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___9475))
{var next_9476 = temp__4090__auto___9475;parent.insertBefore(actual_node,next_9476);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__9478 = dommy.template.__GT_node_like.call(null,parent);G__9478.innerHTML = "";
dommy.core.append_BANG_.call(null,G__9478,node_like);
return G__9478;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__9480 = elem__$1.parentNode;G__9480.removeChild(elem__$1);
return G__9480;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9486){var vec__9487 = p__9486;var k = cljs.core.nth.call(null,vec__9487,0,null);var v = cljs.core.nth.call(null,vec__9487,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t9488 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t9488 = (function (v,k,vec__9487,p__9486,container,key_selectors_map,template,selector_map,meta9489){
this.v = v;
this.k = k;
this.vec__9487 = vec__9487;
this.p__9486 = p__9486;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta9489 = meta9489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t9488.cljs$lang$type = true;
dommy.core.t9488.cljs$lang$ctorStr = "dommy.core/t9488";
dommy.core.t9488.cljs$lang$ctorPrWriter = (function (this__3830__auto__,writer__3831__auto__,opt__3832__auto__){return cljs.core._write.call(null,writer__3831__auto__,"dommy.core/t9488");
});
dommy.core.t9488.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t9488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9490){var self__ = this;
var _9490__$1 = this;return self__.meta9489;
});
dommy.core.t9488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9490,meta9489__$1){var self__ = this;
var _9490__$1 = this;return (new dommy.core.t9488(self__.v,self__.k,self__.vec__9487,self__.p__9486,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta9489__$1));
});
dommy.core.__GT_t9488 = (function __GT_t9488(v__$1,k__$1,vec__9487__$1,p__9486__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta9489){return (new dommy.core.t9488(v__$1,k__$1,vec__9487__$1,p__9486__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta9489));
});
}
return (new dommy.core.t9488(v,k,vec__9487,p__9486,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__9491_SHARP_){return p1__9491_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__9492_SHARP_){return !((p1__9492_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9493){var vec__9494 = p__9493;var special_mouse_event = cljs.core.nth.call(null,vec__9494,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__9494,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3291__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3291__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__9495){
var elem = cljs.core.first(arglist__9495);
arglist__9495 = cljs.core.next(arglist__9495);
var f = cljs.core.first(arglist__9495);
var args = cljs.core.rest(arglist__9495);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,elem_sel)))
{return cljs.core.juxt.call(null,(function (p1__9496_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__9496_SHARP_));
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
var vec__9520_9543 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9544 = cljs.core.nth.call(null,vec__9520_9543,0,null);var selector_9545 = cljs.core.nth.call(null,vec__9520_9543,1,null);var seq__9521_9546 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9528_9547 = null;var count__9529_9548 = 0;var i__9530_9549 = 0;while(true){
if((i__9530_9549 < count__9529_9548))
{var vec__9537_9550 = cljs.core._nth.call(null,chunk__9528_9547,i__9530_9549);var orig_type_9551 = cljs.core.nth.call(null,vec__9537_9550,0,null);var f_9552 = cljs.core.nth.call(null,vec__9537_9550,1,null);var seq__9531_9553 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9551,new cljs.core.PersistentArrayMap.fromArray([orig_type_9551,cljs.core.identity], true, false)));var chunk__9533_9554 = null;var count__9534_9555 = 0;var i__9535_9556 = 0;while(true){
if((i__9535_9556 < count__9534_9555))
{var vec__9538_9557 = cljs.core._nth.call(null,chunk__9533_9554,i__9535_9556);var actual_type_9558 = cljs.core.nth.call(null,vec__9538_9557,0,null);var factory_9559 = cljs.core.nth.call(null,vec__9538_9557,1,null);var canonical_f_9560 = (cljs.core.truth_(selector_9545)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9544,selector_9545):cljs.core.identity).call(null,factory_9559.call(null,f_9552));dommy.core.update_event_listeners_BANG_.call(null,elem_9544,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9545,actual_type_9558,f_9552], null),canonical_f_9560);
if(cljs.core.truth_(elem_9544.addEventListener))
{elem_9544.addEventListener(cljs.core.name.call(null,actual_type_9558),canonical_f_9560);
} else
{elem_9544.attachEvent(cljs.core.name.call(null,actual_type_9558),canonical_f_9560);
}
{
var G__9561 = seq__9531_9553;
var G__9562 = chunk__9533_9554;
var G__9563 = count__9534_9555;
var G__9564 = (i__9535_9556 + 1);
seq__9531_9553 = G__9561;
chunk__9533_9554 = G__9562;
count__9534_9555 = G__9563;
i__9535_9556 = G__9564;
continue;
}
} else
{var temp__4092__auto___9565 = cljs.core.seq.call(null,seq__9531_9553);if(cljs.core.truth_(temp__4092__auto___9565))
{var seq__9531_9566__$1 = temp__4092__auto___9565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9531_9566__$1))
{var c__4010__auto___9567 = cljs.core.chunk_first.call(null,seq__9531_9566__$1);{
var G__9568 = cljs.core.chunk_rest.call(null,seq__9531_9566__$1);
var G__9569 = c__4010__auto___9567;
var G__9570 = cljs.core.count.call(null,c__4010__auto___9567);
var G__9571 = 0;
seq__9531_9553 = G__9568;
chunk__9533_9554 = G__9569;
count__9534_9555 = G__9570;
i__9535_9556 = G__9571;
continue;
}
} else
{var vec__9539_9572 = cljs.core.first.call(null,seq__9531_9566__$1);var actual_type_9573 = cljs.core.nth.call(null,vec__9539_9572,0,null);var factory_9574 = cljs.core.nth.call(null,vec__9539_9572,1,null);var canonical_f_9575 = (cljs.core.truth_(selector_9545)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9544,selector_9545):cljs.core.identity).call(null,factory_9574.call(null,f_9552));dommy.core.update_event_listeners_BANG_.call(null,elem_9544,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9545,actual_type_9573,f_9552], null),canonical_f_9575);
if(cljs.core.truth_(elem_9544.addEventListener))
{elem_9544.addEventListener(cljs.core.name.call(null,actual_type_9573),canonical_f_9575);
} else
{elem_9544.attachEvent(cljs.core.name.call(null,actual_type_9573),canonical_f_9575);
}
{
var G__9576 = cljs.core.next.call(null,seq__9531_9566__$1);
var G__9577 = null;
var G__9578 = 0;
var G__9579 = 0;
seq__9531_9553 = G__9576;
chunk__9533_9554 = G__9577;
count__9534_9555 = G__9578;
i__9535_9556 = G__9579;
continue;
}
}
} else
{}
}
break;
}
{
var G__9580 = seq__9521_9546;
var G__9581 = chunk__9528_9547;
var G__9582 = count__9529_9548;
var G__9583 = (i__9530_9549 + 1);
seq__9521_9546 = G__9580;
chunk__9528_9547 = G__9581;
count__9529_9548 = G__9582;
i__9530_9549 = G__9583;
continue;
}
} else
{var temp__4092__auto___9584 = cljs.core.seq.call(null,seq__9521_9546);if(cljs.core.truth_(temp__4092__auto___9584))
{var seq__9521_9585__$1 = temp__4092__auto___9584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9521_9585__$1))
{var c__4010__auto___9586 = cljs.core.chunk_first.call(null,seq__9521_9585__$1);{
var G__9587 = cljs.core.chunk_rest.call(null,seq__9521_9585__$1);
var G__9588 = c__4010__auto___9586;
var G__9589 = cljs.core.count.call(null,c__4010__auto___9586);
var G__9590 = 0;
seq__9521_9546 = G__9587;
chunk__9528_9547 = G__9588;
count__9529_9548 = G__9589;
i__9530_9549 = G__9590;
continue;
}
} else
{var vec__9540_9591 = cljs.core.first.call(null,seq__9521_9585__$1);var orig_type_9592 = cljs.core.nth.call(null,vec__9540_9591,0,null);var f_9593 = cljs.core.nth.call(null,vec__9540_9591,1,null);var seq__9522_9594 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9592,new cljs.core.PersistentArrayMap.fromArray([orig_type_9592,cljs.core.identity], true, false)));var chunk__9524_9595 = null;var count__9525_9596 = 0;var i__9526_9597 = 0;while(true){
if((i__9526_9597 < count__9525_9596))
{var vec__9541_9598 = cljs.core._nth.call(null,chunk__9524_9595,i__9526_9597);var actual_type_9599 = cljs.core.nth.call(null,vec__9541_9598,0,null);var factory_9600 = cljs.core.nth.call(null,vec__9541_9598,1,null);var canonical_f_9601 = (cljs.core.truth_(selector_9545)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9544,selector_9545):cljs.core.identity).call(null,factory_9600.call(null,f_9593));dommy.core.update_event_listeners_BANG_.call(null,elem_9544,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9545,actual_type_9599,f_9593], null),canonical_f_9601);
if(cljs.core.truth_(elem_9544.addEventListener))
{elem_9544.addEventListener(cljs.core.name.call(null,actual_type_9599),canonical_f_9601);
} else
{elem_9544.attachEvent(cljs.core.name.call(null,actual_type_9599),canonical_f_9601);
}
{
var G__9602 = seq__9522_9594;
var G__9603 = chunk__9524_9595;
var G__9604 = count__9525_9596;
var G__9605 = (i__9526_9597 + 1);
seq__9522_9594 = G__9602;
chunk__9524_9595 = G__9603;
count__9525_9596 = G__9604;
i__9526_9597 = G__9605;
continue;
}
} else
{var temp__4092__auto___9606__$1 = cljs.core.seq.call(null,seq__9522_9594);if(cljs.core.truth_(temp__4092__auto___9606__$1))
{var seq__9522_9607__$1 = temp__4092__auto___9606__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9522_9607__$1))
{var c__4010__auto___9608 = cljs.core.chunk_first.call(null,seq__9522_9607__$1);{
var G__9609 = cljs.core.chunk_rest.call(null,seq__9522_9607__$1);
var G__9610 = c__4010__auto___9608;
var G__9611 = cljs.core.count.call(null,c__4010__auto___9608);
var G__9612 = 0;
seq__9522_9594 = G__9609;
chunk__9524_9595 = G__9610;
count__9525_9596 = G__9611;
i__9526_9597 = G__9612;
continue;
}
} else
{var vec__9542_9613 = cljs.core.first.call(null,seq__9522_9607__$1);var actual_type_9614 = cljs.core.nth.call(null,vec__9542_9613,0,null);var factory_9615 = cljs.core.nth.call(null,vec__9542_9613,1,null);var canonical_f_9616 = (cljs.core.truth_(selector_9545)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9544,selector_9545):cljs.core.identity).call(null,factory_9615.call(null,f_9593));dommy.core.update_event_listeners_BANG_.call(null,elem_9544,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9545,actual_type_9614,f_9593], null),canonical_f_9616);
if(cljs.core.truth_(elem_9544.addEventListener))
{elem_9544.addEventListener(cljs.core.name.call(null,actual_type_9614),canonical_f_9616);
} else
{elem_9544.attachEvent(cljs.core.name.call(null,actual_type_9614),canonical_f_9616);
}
{
var G__9617 = cljs.core.next.call(null,seq__9522_9607__$1);
var G__9618 = null;
var G__9619 = 0;
var G__9620 = 0;
seq__9522_9594 = G__9617;
chunk__9524_9595 = G__9618;
count__9525_9596 = G__9619;
i__9526_9597 = G__9620;
continue;
}
}
} else
{}
}
break;
}
{
var G__9621 = cljs.core.next.call(null,seq__9521_9585__$1);
var G__9622 = null;
var G__9623 = 0;
var G__9624 = 0;
seq__9521_9546 = G__9621;
chunk__9528_9547 = G__9622;
count__9529_9548 = G__9623;
i__9530_9549 = G__9624;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__9625){
var elem_sel = cljs.core.first(arglist__9625);
var type_fs = cljs.core.rest(arglist__9625);
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
var vec__9649_9672 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9673 = cljs.core.nth.call(null,vec__9649_9672,0,null);var selector_9674 = cljs.core.nth.call(null,vec__9649_9672,1,null);var seq__9650_9675 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9657_9676 = null;var count__9658_9677 = 0;var i__9659_9678 = 0;while(true){
if((i__9659_9678 < count__9658_9677))
{var vec__9666_9679 = cljs.core._nth.call(null,chunk__9657_9676,i__9659_9678);var orig_type_9680 = cljs.core.nth.call(null,vec__9666_9679,0,null);var f_9681 = cljs.core.nth.call(null,vec__9666_9679,1,null);var seq__9660_9682 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9680,new cljs.core.PersistentArrayMap.fromArray([orig_type_9680,cljs.core.identity], true, false)));var chunk__9662_9683 = null;var count__9663_9684 = 0;var i__9664_9685 = 0;while(true){
if((i__9664_9685 < count__9663_9684))
{var vec__9667_9686 = cljs.core._nth.call(null,chunk__9662_9683,i__9664_9685);var actual_type_9687 = cljs.core.nth.call(null,vec__9667_9686,0,null);var __9688 = cljs.core.nth.call(null,vec__9667_9686,1,null);var keys_9689 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9674,actual_type_9687,f_9681], null);var canonical_f_9690 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9673),keys_9689);dommy.core.update_event_listeners_BANG_.call(null,elem_9673,dommy.utils.dissoc_in,keys_9689);
if(cljs.core.truth_(elem_9673.removeEventListener))
{elem_9673.removeEventListener(cljs.core.name.call(null,actual_type_9687),canonical_f_9690);
} else
{elem_9673.detachEvent(cljs.core.name.call(null,actual_type_9687),canonical_f_9690);
}
{
var G__9691 = seq__9660_9682;
var G__9692 = chunk__9662_9683;
var G__9693 = count__9663_9684;
var G__9694 = (i__9664_9685 + 1);
seq__9660_9682 = G__9691;
chunk__9662_9683 = G__9692;
count__9663_9684 = G__9693;
i__9664_9685 = G__9694;
continue;
}
} else
{var temp__4092__auto___9695 = cljs.core.seq.call(null,seq__9660_9682);if(cljs.core.truth_(temp__4092__auto___9695))
{var seq__9660_9696__$1 = temp__4092__auto___9695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9660_9696__$1))
{var c__4010__auto___9697 = cljs.core.chunk_first.call(null,seq__9660_9696__$1);{
var G__9698 = cljs.core.chunk_rest.call(null,seq__9660_9696__$1);
var G__9699 = c__4010__auto___9697;
var G__9700 = cljs.core.count.call(null,c__4010__auto___9697);
var G__9701 = 0;
seq__9660_9682 = G__9698;
chunk__9662_9683 = G__9699;
count__9663_9684 = G__9700;
i__9664_9685 = G__9701;
continue;
}
} else
{var vec__9668_9702 = cljs.core.first.call(null,seq__9660_9696__$1);var actual_type_9703 = cljs.core.nth.call(null,vec__9668_9702,0,null);var __9704 = cljs.core.nth.call(null,vec__9668_9702,1,null);var keys_9705 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9674,actual_type_9703,f_9681], null);var canonical_f_9706 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9673),keys_9705);dommy.core.update_event_listeners_BANG_.call(null,elem_9673,dommy.utils.dissoc_in,keys_9705);
if(cljs.core.truth_(elem_9673.removeEventListener))
{elem_9673.removeEventListener(cljs.core.name.call(null,actual_type_9703),canonical_f_9706);
} else
{elem_9673.detachEvent(cljs.core.name.call(null,actual_type_9703),canonical_f_9706);
}
{
var G__9707 = cljs.core.next.call(null,seq__9660_9696__$1);
var G__9708 = null;
var G__9709 = 0;
var G__9710 = 0;
seq__9660_9682 = G__9707;
chunk__9662_9683 = G__9708;
count__9663_9684 = G__9709;
i__9664_9685 = G__9710;
continue;
}
}
} else
{}
}
break;
}
{
var G__9711 = seq__9650_9675;
var G__9712 = chunk__9657_9676;
var G__9713 = count__9658_9677;
var G__9714 = (i__9659_9678 + 1);
seq__9650_9675 = G__9711;
chunk__9657_9676 = G__9712;
count__9658_9677 = G__9713;
i__9659_9678 = G__9714;
continue;
}
} else
{var temp__4092__auto___9715 = cljs.core.seq.call(null,seq__9650_9675);if(cljs.core.truth_(temp__4092__auto___9715))
{var seq__9650_9716__$1 = temp__4092__auto___9715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9650_9716__$1))
{var c__4010__auto___9717 = cljs.core.chunk_first.call(null,seq__9650_9716__$1);{
var G__9718 = cljs.core.chunk_rest.call(null,seq__9650_9716__$1);
var G__9719 = c__4010__auto___9717;
var G__9720 = cljs.core.count.call(null,c__4010__auto___9717);
var G__9721 = 0;
seq__9650_9675 = G__9718;
chunk__9657_9676 = G__9719;
count__9658_9677 = G__9720;
i__9659_9678 = G__9721;
continue;
}
} else
{var vec__9669_9722 = cljs.core.first.call(null,seq__9650_9716__$1);var orig_type_9723 = cljs.core.nth.call(null,vec__9669_9722,0,null);var f_9724 = cljs.core.nth.call(null,vec__9669_9722,1,null);var seq__9651_9725 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9723,new cljs.core.PersistentArrayMap.fromArray([orig_type_9723,cljs.core.identity], true, false)));var chunk__9653_9726 = null;var count__9654_9727 = 0;var i__9655_9728 = 0;while(true){
if((i__9655_9728 < count__9654_9727))
{var vec__9670_9729 = cljs.core._nth.call(null,chunk__9653_9726,i__9655_9728);var actual_type_9730 = cljs.core.nth.call(null,vec__9670_9729,0,null);var __9731 = cljs.core.nth.call(null,vec__9670_9729,1,null);var keys_9732 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9674,actual_type_9730,f_9724], null);var canonical_f_9733 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9673),keys_9732);dommy.core.update_event_listeners_BANG_.call(null,elem_9673,dommy.utils.dissoc_in,keys_9732);
if(cljs.core.truth_(elem_9673.removeEventListener))
{elem_9673.removeEventListener(cljs.core.name.call(null,actual_type_9730),canonical_f_9733);
} else
{elem_9673.detachEvent(cljs.core.name.call(null,actual_type_9730),canonical_f_9733);
}
{
var G__9734 = seq__9651_9725;
var G__9735 = chunk__9653_9726;
var G__9736 = count__9654_9727;
var G__9737 = (i__9655_9728 + 1);
seq__9651_9725 = G__9734;
chunk__9653_9726 = G__9735;
count__9654_9727 = G__9736;
i__9655_9728 = G__9737;
continue;
}
} else
{var temp__4092__auto___9738__$1 = cljs.core.seq.call(null,seq__9651_9725);if(cljs.core.truth_(temp__4092__auto___9738__$1))
{var seq__9651_9739__$1 = temp__4092__auto___9738__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9651_9739__$1))
{var c__4010__auto___9740 = cljs.core.chunk_first.call(null,seq__9651_9739__$1);{
var G__9741 = cljs.core.chunk_rest.call(null,seq__9651_9739__$1);
var G__9742 = c__4010__auto___9740;
var G__9743 = cljs.core.count.call(null,c__4010__auto___9740);
var G__9744 = 0;
seq__9651_9725 = G__9741;
chunk__9653_9726 = G__9742;
count__9654_9727 = G__9743;
i__9655_9728 = G__9744;
continue;
}
} else
{var vec__9671_9745 = cljs.core.first.call(null,seq__9651_9739__$1);var actual_type_9746 = cljs.core.nth.call(null,vec__9671_9745,0,null);var __9747 = cljs.core.nth.call(null,vec__9671_9745,1,null);var keys_9748 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9674,actual_type_9746,f_9724], null);var canonical_f_9749 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9673),keys_9748);dommy.core.update_event_listeners_BANG_.call(null,elem_9673,dommy.utils.dissoc_in,keys_9748);
if(cljs.core.truth_(elem_9673.removeEventListener))
{elem_9673.removeEventListener(cljs.core.name.call(null,actual_type_9746),canonical_f_9749);
} else
{elem_9673.detachEvent(cljs.core.name.call(null,actual_type_9746),canonical_f_9749);
}
{
var G__9750 = cljs.core.next.call(null,seq__9651_9739__$1);
var G__9751 = null;
var G__9752 = 0;
var G__9753 = 0;
seq__9651_9725 = G__9750;
chunk__9653_9726 = G__9751;
count__9654_9727 = G__9752;
i__9655_9728 = G__9753;
continue;
}
}
} else
{}
}
break;
}
{
var G__9754 = cljs.core.next.call(null,seq__9650_9716__$1);
var G__9755 = null;
var G__9756 = 0;
var G__9757 = 0;
seq__9650_9675 = G__9754;
chunk__9657_9676 = G__9755;
count__9658_9677 = G__9756;
i__9659_9678 = G__9757;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9758){
var elem_sel = cljs.core.first(arglist__9758);
var type_fs = cljs.core.rest(arglist__9758);
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
var vec__9766_9773 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9774 = cljs.core.nth.call(null,vec__9766_9773,0,null);var selector_9775 = cljs.core.nth.call(null,vec__9766_9773,1,null);var seq__9767_9776 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9768_9777 = null;var count__9769_9778 = 0;var i__9770_9779 = 0;while(true){
if((i__9770_9779 < count__9769_9778))
{var vec__9771_9780 = cljs.core._nth.call(null,chunk__9768_9777,i__9770_9779);var type_9781 = cljs.core.nth.call(null,vec__9771_9780,0,null);var f_9782 = cljs.core.nth.call(null,vec__9771_9780,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9781,((function (seq__9767_9776,chunk__9768_9777,count__9769_9778,i__9770_9779,vec__9771_9780,type_9781,f_9782){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9781,this_fn);
return f_9782.call(null,e);
});})(seq__9767_9776,chunk__9768_9777,count__9769_9778,i__9770_9779,vec__9771_9780,type_9781,f_9782))
);
{
var G__9783 = seq__9767_9776;
var G__9784 = chunk__9768_9777;
var G__9785 = count__9769_9778;
var G__9786 = (i__9770_9779 + 1);
seq__9767_9776 = G__9783;
chunk__9768_9777 = G__9784;
count__9769_9778 = G__9785;
i__9770_9779 = G__9786;
continue;
}
} else
{var temp__4092__auto___9787 = cljs.core.seq.call(null,seq__9767_9776);if(cljs.core.truth_(temp__4092__auto___9787))
{var seq__9767_9788__$1 = temp__4092__auto___9787;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9767_9788__$1))
{var c__4010__auto___9789 = cljs.core.chunk_first.call(null,seq__9767_9788__$1);{
var G__9790 = cljs.core.chunk_rest.call(null,seq__9767_9788__$1);
var G__9791 = c__4010__auto___9789;
var G__9792 = cljs.core.count.call(null,c__4010__auto___9789);
var G__9793 = 0;
seq__9767_9776 = G__9790;
chunk__9768_9777 = G__9791;
count__9769_9778 = G__9792;
i__9770_9779 = G__9793;
continue;
}
} else
{var vec__9772_9794 = cljs.core.first.call(null,seq__9767_9788__$1);var type_9795 = cljs.core.nth.call(null,vec__9772_9794,0,null);var f_9796 = cljs.core.nth.call(null,vec__9772_9794,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9795,((function (seq__9767_9776,chunk__9768_9777,count__9769_9778,i__9770_9779,vec__9772_9794,type_9795,f_9796,seq__9767_9788__$1,temp__4092__auto___9787){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9795,this_fn);
return f_9796.call(null,e);
});})(seq__9767_9776,chunk__9768_9777,count__9769_9778,i__9770_9779,vec__9772_9794,type_9795,f_9796,seq__9767_9788__$1,temp__4092__auto___9787))
);
{
var G__9797 = cljs.core.next.call(null,seq__9767_9788__$1);
var G__9798 = null;
var G__9799 = 0;
var G__9800 = 0;
seq__9767_9776 = G__9797;
chunk__9768_9777 = G__9798;
count__9769_9778 = G__9799;
i__9770_9779 = G__9800;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9801){
var elem_sel = cljs.core.first(arglist__9801);
var type_fs = cljs.core.rest(arglist__9801);
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
var fire_BANG___delegate = function (node,event_type,p__9802){var vec__9804 = p__9802;var update_event_BANG_ = cljs.core.nth.call(null,vec__9804,0,null);if(cljs.core.truth_(dommy.core.descendant_QMARK_.call(null,node,document.documentElement)))
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
var p__9802 = null;if (arguments.length > 2) {
  p__9802 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__9802);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__9805){
var node = cljs.core.first(arglist__9805);
arglist__9805 = cljs.core.next(arglist__9805);
var event_type = cljs.core.first(arglist__9805);
var p__9802 = cljs.core.rest(arglist__9805);
return fire_BANG___delegate(node,event_type,p__9802);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
