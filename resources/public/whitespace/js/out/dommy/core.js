// Compiled by ClojureScript 0.0-2138
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
dommy.core.text = (function text(elem){var or__3408__auto__ = elem.textContent;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
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
var append_BANG___2 = (function (parent,child){var G__7317 = dommy.template.__GT_node_like.call(null,parent);G__7317.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__7317;
});
var append_BANG___3 = (function() { 
var G__7322__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__7318_7323 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__7319_7324 = null;var count__7320_7325 = 0;var i__7321_7326 = 0;while(true){
if((i__7321_7326 < count__7320_7325))
{var c_7327 = cljs.core._nth.call(null,chunk__7319_7324,i__7321_7326);append_BANG_.call(null,parent__$1,c_7327);
{
var G__7328 = seq__7318_7323;
var G__7329 = chunk__7319_7324;
var G__7330 = count__7320_7325;
var G__7331 = (i__7321_7326 + 1);
seq__7318_7323 = G__7328;
chunk__7319_7324 = G__7329;
count__7320_7325 = G__7330;
i__7321_7326 = G__7331;
continue;
}
} else
{var temp__4092__auto___7332 = cljs.core.seq.call(null,seq__7318_7323);if(temp__4092__auto___7332)
{var seq__7318_7333__$1 = temp__4092__auto___7332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7318_7333__$1))
{var c__4150__auto___7334 = cljs.core.chunk_first.call(null,seq__7318_7333__$1);{
var G__7335 = cljs.core.chunk_rest.call(null,seq__7318_7333__$1);
var G__7336 = c__4150__auto___7334;
var G__7337 = cljs.core.count.call(null,c__4150__auto___7334);
var G__7338 = 0;
seq__7318_7323 = G__7335;
chunk__7319_7324 = G__7336;
count__7320_7325 = G__7337;
i__7321_7326 = G__7338;
continue;
}
} else
{var c_7339 = cljs.core.first.call(null,seq__7318_7333__$1);append_BANG_.call(null,parent__$1,c_7339);
{
var G__7340 = cljs.core.next.call(null,seq__7318_7333__$1);
var G__7341 = null;
var G__7342 = 0;
var G__7343 = 0;
seq__7318_7323 = G__7340;
chunk__7319_7324 = G__7341;
count__7320_7325 = G__7342;
i__7321_7326 = G__7343;
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
var G__7322 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7322__delegate.call(this,parent,child,more_children);};
G__7322.cljs$lang$maxFixedArity = 2;
G__7322.cljs$lang$applyTo = (function (arglist__7344){
var parent = cljs.core.first(arglist__7344);
arglist__7344 = cljs.core.next(arglist__7344);
var child = cljs.core.first(arglist__7344);
var more_children = cljs.core.rest(arglist__7344);
return G__7322__delegate(parent,child,more_children);
});
G__7322.cljs$core$IFn$_invoke$arity$variadic = G__7322__delegate;
return G__7322;
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
var G__7353__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__7349_7354 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__7350_7355 = null;var count__7351_7356 = 0;var i__7352_7357 = 0;while(true){
if((i__7352_7357 < count__7351_7356))
{var c_7358 = cljs.core._nth.call(null,chunk__7350_7355,i__7352_7357);prepend_BANG_.call(null,parent__$1,c_7358);
{
var G__7359 = seq__7349_7354;
var G__7360 = chunk__7350_7355;
var G__7361 = count__7351_7356;
var G__7362 = (i__7352_7357 + 1);
seq__7349_7354 = G__7359;
chunk__7350_7355 = G__7360;
count__7351_7356 = G__7361;
i__7352_7357 = G__7362;
continue;
}
} else
{var temp__4092__auto___7363 = cljs.core.seq.call(null,seq__7349_7354);if(temp__4092__auto___7363)
{var seq__7349_7364__$1 = temp__4092__auto___7363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7349_7364__$1))
{var c__4150__auto___7365 = cljs.core.chunk_first.call(null,seq__7349_7364__$1);{
var G__7366 = cljs.core.chunk_rest.call(null,seq__7349_7364__$1);
var G__7367 = c__4150__auto___7365;
var G__7368 = cljs.core.count.call(null,c__4150__auto___7365);
var G__7369 = 0;
seq__7349_7354 = G__7366;
chunk__7350_7355 = G__7367;
count__7351_7356 = G__7368;
i__7352_7357 = G__7369;
continue;
}
} else
{var c_7370 = cljs.core.first.call(null,seq__7349_7364__$1);prepend_BANG_.call(null,parent__$1,c_7370);
{
var G__7371 = cljs.core.next.call(null,seq__7349_7364__$1);
var G__7372 = null;
var G__7373 = 0;
var G__7374 = 0;
seq__7349_7354 = G__7371;
chunk__7350_7355 = G__7372;
count__7351_7356 = G__7373;
i__7352_7357 = G__7374;
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
var G__7353 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7353__delegate.call(this,parent,child,more_children);};
G__7353.cljs$lang$maxFixedArity = 2;
G__7353.cljs$lang$applyTo = (function (arglist__7375){
var parent = cljs.core.first(arglist__7375);
arglist__7375 = cljs.core.next(arglist__7375);
var child = cljs.core.first(arglist__7375);
var more_children = cljs.core.rest(arglist__7375);
return G__7353__delegate(parent,child,more_children);
});
G__7353.cljs$core$IFn$_invoke$arity$variadic = G__7353__delegate;
return G__7353;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___7376 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___7376))
{var next_7377 = temp__4090__auto___7376;parent.insertBefore(actual_node,next_7377);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__7379 = dommy.template.__GT_node_like.call(null,parent);G__7379.innerHTML = "";
dommy.core.append_BANG_.call(null,G__7379,node_like);
return G__7379;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__7381 = elem__$1.parentNode;G__7381.removeChild(elem__$1);
return G__7381;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__7387){var vec__7388 = p__7387;var k = cljs.core.nth.call(null,vec__7388,0,null);var v = cljs.core.nth.call(null,vec__7388,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t7389 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t7389 = (function (v,k,vec__7388,p__7387,container,key_selectors_map,template,selector_map,meta7390){
this.v = v;
this.k = k;
this.vec__7388 = vec__7388;
this.p__7387 = p__7387;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta7390 = meta7390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t7389.cljs$lang$type = true;
dommy.core.t7389.cljs$lang$ctorStr = "dommy.core/t7389";
dommy.core.t7389.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"dommy.core/t7389");
});
dommy.core.t7389.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t7389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7391){var self__ = this;
var _7391__$1 = this;return self__.meta7390;
});
dommy.core.t7389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7391,meta7390__$1){var self__ = this;
var _7391__$1 = this;return (new dommy.core.t7389(self__.v,self__.k,self__.vec__7388,self__.p__7387,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta7390__$1));
});
dommy.core.__GT_t7389 = (function __GT_t7389(v__$1,k__$1,vec__7388__$1,p__7387__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta7390){return (new dommy.core.t7389(v__$1,k__$1,vec__7388__$1,p__7387__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta7390));
});
}
return (new dommy.core.t7389(v,k,vec__7388,p__7387,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__7392_SHARP_){return p1__7392_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__7393_SHARP_){return !((p1__7393_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__7394){var vec__7395 = p__7394;var special_mouse_event = cljs.core.nth.call(null,vec__7395,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__7395,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3408__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3396__auto__ = related_target;if(cljs.core.truth_(and__3396__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3396__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3396__auto__ = selected_target;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3396__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__3408__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__7396){
var elem = cljs.core.first(arglist__7396);
arglist__7396 = cljs.core.next(arglist__7396);
var f = cljs.core.first(arglist__7396);
var args = cljs.core.rest(arglist__7396);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__7397_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__7397_SHARP_));
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
var vec__7421_7444 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7445 = cljs.core.nth.call(null,vec__7421_7444,0,null);var selector_7446 = cljs.core.nth.call(null,vec__7421_7444,1,null);var seq__7422_7447 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__7429_7448 = null;var count__7430_7449 = 0;var i__7431_7450 = 0;while(true){
if((i__7431_7450 < count__7430_7449))
{var vec__7438_7451 = cljs.core._nth.call(null,chunk__7429_7448,i__7431_7450);var orig_type_7452 = cljs.core.nth.call(null,vec__7438_7451,0,null);var f_7453 = cljs.core.nth.call(null,vec__7438_7451,1,null);var seq__7432_7454 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7452,new cljs.core.PersistentArrayMap.fromArray([orig_type_7452,cljs.core.identity], true, false)));var chunk__7434_7455 = null;var count__7435_7456 = 0;var i__7436_7457 = 0;while(true){
if((i__7436_7457 < count__7435_7456))
{var vec__7439_7458 = cljs.core._nth.call(null,chunk__7434_7455,i__7436_7457);var actual_type_7459 = cljs.core.nth.call(null,vec__7439_7458,0,null);var factory_7460 = cljs.core.nth.call(null,vec__7439_7458,1,null);var canonical_f_7461 = (cljs.core.truth_(selector_7446)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7445,selector_7446):cljs.core.identity).call(null,factory_7460.call(null,f_7453));dommy.core.update_event_listeners_BANG_.call(null,elem_7445,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7446,actual_type_7459,f_7453], null),canonical_f_7461);
if(cljs.core.truth_(elem_7445.addEventListener))
{elem_7445.addEventListener(cljs.core.name.call(null,actual_type_7459),canonical_f_7461);
} else
{elem_7445.attachEvent(cljs.core.name.call(null,actual_type_7459),canonical_f_7461);
}
{
var G__7462 = seq__7432_7454;
var G__7463 = chunk__7434_7455;
var G__7464 = count__7435_7456;
var G__7465 = (i__7436_7457 + 1);
seq__7432_7454 = G__7462;
chunk__7434_7455 = G__7463;
count__7435_7456 = G__7464;
i__7436_7457 = G__7465;
continue;
}
} else
{var temp__4092__auto___7466 = cljs.core.seq.call(null,seq__7432_7454);if(temp__4092__auto___7466)
{var seq__7432_7467__$1 = temp__4092__auto___7466;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7432_7467__$1))
{var c__4150__auto___7468 = cljs.core.chunk_first.call(null,seq__7432_7467__$1);{
var G__7469 = cljs.core.chunk_rest.call(null,seq__7432_7467__$1);
var G__7470 = c__4150__auto___7468;
var G__7471 = cljs.core.count.call(null,c__4150__auto___7468);
var G__7472 = 0;
seq__7432_7454 = G__7469;
chunk__7434_7455 = G__7470;
count__7435_7456 = G__7471;
i__7436_7457 = G__7472;
continue;
}
} else
{var vec__7440_7473 = cljs.core.first.call(null,seq__7432_7467__$1);var actual_type_7474 = cljs.core.nth.call(null,vec__7440_7473,0,null);var factory_7475 = cljs.core.nth.call(null,vec__7440_7473,1,null);var canonical_f_7476 = (cljs.core.truth_(selector_7446)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7445,selector_7446):cljs.core.identity).call(null,factory_7475.call(null,f_7453));dommy.core.update_event_listeners_BANG_.call(null,elem_7445,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7446,actual_type_7474,f_7453], null),canonical_f_7476);
if(cljs.core.truth_(elem_7445.addEventListener))
{elem_7445.addEventListener(cljs.core.name.call(null,actual_type_7474),canonical_f_7476);
} else
{elem_7445.attachEvent(cljs.core.name.call(null,actual_type_7474),canonical_f_7476);
}
{
var G__7477 = cljs.core.next.call(null,seq__7432_7467__$1);
var G__7478 = null;
var G__7479 = 0;
var G__7480 = 0;
seq__7432_7454 = G__7477;
chunk__7434_7455 = G__7478;
count__7435_7456 = G__7479;
i__7436_7457 = G__7480;
continue;
}
}
} else
{}
}
break;
}
{
var G__7481 = seq__7422_7447;
var G__7482 = chunk__7429_7448;
var G__7483 = count__7430_7449;
var G__7484 = (i__7431_7450 + 1);
seq__7422_7447 = G__7481;
chunk__7429_7448 = G__7482;
count__7430_7449 = G__7483;
i__7431_7450 = G__7484;
continue;
}
} else
{var temp__4092__auto___7485 = cljs.core.seq.call(null,seq__7422_7447);if(temp__4092__auto___7485)
{var seq__7422_7486__$1 = temp__4092__auto___7485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7422_7486__$1))
{var c__4150__auto___7487 = cljs.core.chunk_first.call(null,seq__7422_7486__$1);{
var G__7488 = cljs.core.chunk_rest.call(null,seq__7422_7486__$1);
var G__7489 = c__4150__auto___7487;
var G__7490 = cljs.core.count.call(null,c__4150__auto___7487);
var G__7491 = 0;
seq__7422_7447 = G__7488;
chunk__7429_7448 = G__7489;
count__7430_7449 = G__7490;
i__7431_7450 = G__7491;
continue;
}
} else
{var vec__7441_7492 = cljs.core.first.call(null,seq__7422_7486__$1);var orig_type_7493 = cljs.core.nth.call(null,vec__7441_7492,0,null);var f_7494 = cljs.core.nth.call(null,vec__7441_7492,1,null);var seq__7423_7495 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7493,new cljs.core.PersistentArrayMap.fromArray([orig_type_7493,cljs.core.identity], true, false)));var chunk__7425_7496 = null;var count__7426_7497 = 0;var i__7427_7498 = 0;while(true){
if((i__7427_7498 < count__7426_7497))
{var vec__7442_7499 = cljs.core._nth.call(null,chunk__7425_7496,i__7427_7498);var actual_type_7500 = cljs.core.nth.call(null,vec__7442_7499,0,null);var factory_7501 = cljs.core.nth.call(null,vec__7442_7499,1,null);var canonical_f_7502 = (cljs.core.truth_(selector_7446)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7445,selector_7446):cljs.core.identity).call(null,factory_7501.call(null,f_7494));dommy.core.update_event_listeners_BANG_.call(null,elem_7445,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7446,actual_type_7500,f_7494], null),canonical_f_7502);
if(cljs.core.truth_(elem_7445.addEventListener))
{elem_7445.addEventListener(cljs.core.name.call(null,actual_type_7500),canonical_f_7502);
} else
{elem_7445.attachEvent(cljs.core.name.call(null,actual_type_7500),canonical_f_7502);
}
{
var G__7503 = seq__7423_7495;
var G__7504 = chunk__7425_7496;
var G__7505 = count__7426_7497;
var G__7506 = (i__7427_7498 + 1);
seq__7423_7495 = G__7503;
chunk__7425_7496 = G__7504;
count__7426_7497 = G__7505;
i__7427_7498 = G__7506;
continue;
}
} else
{var temp__4092__auto___7507__$1 = cljs.core.seq.call(null,seq__7423_7495);if(temp__4092__auto___7507__$1)
{var seq__7423_7508__$1 = temp__4092__auto___7507__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7423_7508__$1))
{var c__4150__auto___7509 = cljs.core.chunk_first.call(null,seq__7423_7508__$1);{
var G__7510 = cljs.core.chunk_rest.call(null,seq__7423_7508__$1);
var G__7511 = c__4150__auto___7509;
var G__7512 = cljs.core.count.call(null,c__4150__auto___7509);
var G__7513 = 0;
seq__7423_7495 = G__7510;
chunk__7425_7496 = G__7511;
count__7426_7497 = G__7512;
i__7427_7498 = G__7513;
continue;
}
} else
{var vec__7443_7514 = cljs.core.first.call(null,seq__7423_7508__$1);var actual_type_7515 = cljs.core.nth.call(null,vec__7443_7514,0,null);var factory_7516 = cljs.core.nth.call(null,vec__7443_7514,1,null);var canonical_f_7517 = (cljs.core.truth_(selector_7446)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7445,selector_7446):cljs.core.identity).call(null,factory_7516.call(null,f_7494));dommy.core.update_event_listeners_BANG_.call(null,elem_7445,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7446,actual_type_7515,f_7494], null),canonical_f_7517);
if(cljs.core.truth_(elem_7445.addEventListener))
{elem_7445.addEventListener(cljs.core.name.call(null,actual_type_7515),canonical_f_7517);
} else
{elem_7445.attachEvent(cljs.core.name.call(null,actual_type_7515),canonical_f_7517);
}
{
var G__7518 = cljs.core.next.call(null,seq__7423_7508__$1);
var G__7519 = null;
var G__7520 = 0;
var G__7521 = 0;
seq__7423_7495 = G__7518;
chunk__7425_7496 = G__7519;
count__7426_7497 = G__7520;
i__7427_7498 = G__7521;
continue;
}
}
} else
{}
}
break;
}
{
var G__7522 = cljs.core.next.call(null,seq__7422_7486__$1);
var G__7523 = null;
var G__7524 = 0;
var G__7525 = 0;
seq__7422_7447 = G__7522;
chunk__7429_7448 = G__7523;
count__7430_7449 = G__7524;
i__7431_7450 = G__7525;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__7526){
var elem_sel = cljs.core.first(arglist__7526);
var type_fs = cljs.core.rest(arglist__7526);
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
var vec__7550_7573 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7574 = cljs.core.nth.call(null,vec__7550_7573,0,null);var selector_7575 = cljs.core.nth.call(null,vec__7550_7573,1,null);var seq__7551_7576 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__7558_7577 = null;var count__7559_7578 = 0;var i__7560_7579 = 0;while(true){
if((i__7560_7579 < count__7559_7578))
{var vec__7567_7580 = cljs.core._nth.call(null,chunk__7558_7577,i__7560_7579);var orig_type_7581 = cljs.core.nth.call(null,vec__7567_7580,0,null);var f_7582 = cljs.core.nth.call(null,vec__7567_7580,1,null);var seq__7561_7583 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7581,new cljs.core.PersistentArrayMap.fromArray([orig_type_7581,cljs.core.identity], true, false)));var chunk__7563_7584 = null;var count__7564_7585 = 0;var i__7565_7586 = 0;while(true){
if((i__7565_7586 < count__7564_7585))
{var vec__7568_7587 = cljs.core._nth.call(null,chunk__7563_7584,i__7565_7586);var actual_type_7588 = cljs.core.nth.call(null,vec__7568_7587,0,null);var __7589 = cljs.core.nth.call(null,vec__7568_7587,1,null);var keys_7590 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7575,actual_type_7588,f_7582], null);var canonical_f_7591 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7574),keys_7590);dommy.core.update_event_listeners_BANG_.call(null,elem_7574,dommy.utils.dissoc_in,keys_7590);
if(cljs.core.truth_(elem_7574.removeEventListener))
{elem_7574.removeEventListener(cljs.core.name.call(null,actual_type_7588),canonical_f_7591);
} else
{elem_7574.detachEvent(cljs.core.name.call(null,actual_type_7588),canonical_f_7591);
}
{
var G__7592 = seq__7561_7583;
var G__7593 = chunk__7563_7584;
var G__7594 = count__7564_7585;
var G__7595 = (i__7565_7586 + 1);
seq__7561_7583 = G__7592;
chunk__7563_7584 = G__7593;
count__7564_7585 = G__7594;
i__7565_7586 = G__7595;
continue;
}
} else
{var temp__4092__auto___7596 = cljs.core.seq.call(null,seq__7561_7583);if(temp__4092__auto___7596)
{var seq__7561_7597__$1 = temp__4092__auto___7596;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7561_7597__$1))
{var c__4150__auto___7598 = cljs.core.chunk_first.call(null,seq__7561_7597__$1);{
var G__7599 = cljs.core.chunk_rest.call(null,seq__7561_7597__$1);
var G__7600 = c__4150__auto___7598;
var G__7601 = cljs.core.count.call(null,c__4150__auto___7598);
var G__7602 = 0;
seq__7561_7583 = G__7599;
chunk__7563_7584 = G__7600;
count__7564_7585 = G__7601;
i__7565_7586 = G__7602;
continue;
}
} else
{var vec__7569_7603 = cljs.core.first.call(null,seq__7561_7597__$1);var actual_type_7604 = cljs.core.nth.call(null,vec__7569_7603,0,null);var __7605 = cljs.core.nth.call(null,vec__7569_7603,1,null);var keys_7606 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7575,actual_type_7604,f_7582], null);var canonical_f_7607 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7574),keys_7606);dommy.core.update_event_listeners_BANG_.call(null,elem_7574,dommy.utils.dissoc_in,keys_7606);
if(cljs.core.truth_(elem_7574.removeEventListener))
{elem_7574.removeEventListener(cljs.core.name.call(null,actual_type_7604),canonical_f_7607);
} else
{elem_7574.detachEvent(cljs.core.name.call(null,actual_type_7604),canonical_f_7607);
}
{
var G__7608 = cljs.core.next.call(null,seq__7561_7597__$1);
var G__7609 = null;
var G__7610 = 0;
var G__7611 = 0;
seq__7561_7583 = G__7608;
chunk__7563_7584 = G__7609;
count__7564_7585 = G__7610;
i__7565_7586 = G__7611;
continue;
}
}
} else
{}
}
break;
}
{
var G__7612 = seq__7551_7576;
var G__7613 = chunk__7558_7577;
var G__7614 = count__7559_7578;
var G__7615 = (i__7560_7579 + 1);
seq__7551_7576 = G__7612;
chunk__7558_7577 = G__7613;
count__7559_7578 = G__7614;
i__7560_7579 = G__7615;
continue;
}
} else
{var temp__4092__auto___7616 = cljs.core.seq.call(null,seq__7551_7576);if(temp__4092__auto___7616)
{var seq__7551_7617__$1 = temp__4092__auto___7616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7551_7617__$1))
{var c__4150__auto___7618 = cljs.core.chunk_first.call(null,seq__7551_7617__$1);{
var G__7619 = cljs.core.chunk_rest.call(null,seq__7551_7617__$1);
var G__7620 = c__4150__auto___7618;
var G__7621 = cljs.core.count.call(null,c__4150__auto___7618);
var G__7622 = 0;
seq__7551_7576 = G__7619;
chunk__7558_7577 = G__7620;
count__7559_7578 = G__7621;
i__7560_7579 = G__7622;
continue;
}
} else
{var vec__7570_7623 = cljs.core.first.call(null,seq__7551_7617__$1);var orig_type_7624 = cljs.core.nth.call(null,vec__7570_7623,0,null);var f_7625 = cljs.core.nth.call(null,vec__7570_7623,1,null);var seq__7552_7626 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7624,new cljs.core.PersistentArrayMap.fromArray([orig_type_7624,cljs.core.identity], true, false)));var chunk__7554_7627 = null;var count__7555_7628 = 0;var i__7556_7629 = 0;while(true){
if((i__7556_7629 < count__7555_7628))
{var vec__7571_7630 = cljs.core._nth.call(null,chunk__7554_7627,i__7556_7629);var actual_type_7631 = cljs.core.nth.call(null,vec__7571_7630,0,null);var __7632 = cljs.core.nth.call(null,vec__7571_7630,1,null);var keys_7633 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7575,actual_type_7631,f_7625], null);var canonical_f_7634 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7574),keys_7633);dommy.core.update_event_listeners_BANG_.call(null,elem_7574,dommy.utils.dissoc_in,keys_7633);
if(cljs.core.truth_(elem_7574.removeEventListener))
{elem_7574.removeEventListener(cljs.core.name.call(null,actual_type_7631),canonical_f_7634);
} else
{elem_7574.detachEvent(cljs.core.name.call(null,actual_type_7631),canonical_f_7634);
}
{
var G__7635 = seq__7552_7626;
var G__7636 = chunk__7554_7627;
var G__7637 = count__7555_7628;
var G__7638 = (i__7556_7629 + 1);
seq__7552_7626 = G__7635;
chunk__7554_7627 = G__7636;
count__7555_7628 = G__7637;
i__7556_7629 = G__7638;
continue;
}
} else
{var temp__4092__auto___7639__$1 = cljs.core.seq.call(null,seq__7552_7626);if(temp__4092__auto___7639__$1)
{var seq__7552_7640__$1 = temp__4092__auto___7639__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7552_7640__$1))
{var c__4150__auto___7641 = cljs.core.chunk_first.call(null,seq__7552_7640__$1);{
var G__7642 = cljs.core.chunk_rest.call(null,seq__7552_7640__$1);
var G__7643 = c__4150__auto___7641;
var G__7644 = cljs.core.count.call(null,c__4150__auto___7641);
var G__7645 = 0;
seq__7552_7626 = G__7642;
chunk__7554_7627 = G__7643;
count__7555_7628 = G__7644;
i__7556_7629 = G__7645;
continue;
}
} else
{var vec__7572_7646 = cljs.core.first.call(null,seq__7552_7640__$1);var actual_type_7647 = cljs.core.nth.call(null,vec__7572_7646,0,null);var __7648 = cljs.core.nth.call(null,vec__7572_7646,1,null);var keys_7649 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7575,actual_type_7647,f_7625], null);var canonical_f_7650 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7574),keys_7649);dommy.core.update_event_listeners_BANG_.call(null,elem_7574,dommy.utils.dissoc_in,keys_7649);
if(cljs.core.truth_(elem_7574.removeEventListener))
{elem_7574.removeEventListener(cljs.core.name.call(null,actual_type_7647),canonical_f_7650);
} else
{elem_7574.detachEvent(cljs.core.name.call(null,actual_type_7647),canonical_f_7650);
}
{
var G__7651 = cljs.core.next.call(null,seq__7552_7640__$1);
var G__7652 = null;
var G__7653 = 0;
var G__7654 = 0;
seq__7552_7626 = G__7651;
chunk__7554_7627 = G__7652;
count__7555_7628 = G__7653;
i__7556_7629 = G__7654;
continue;
}
}
} else
{}
}
break;
}
{
var G__7655 = cljs.core.next.call(null,seq__7551_7617__$1);
var G__7656 = null;
var G__7657 = 0;
var G__7658 = 0;
seq__7551_7576 = G__7655;
chunk__7558_7577 = G__7656;
count__7559_7578 = G__7657;
i__7560_7579 = G__7658;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__7659){
var elem_sel = cljs.core.first(arglist__7659);
var type_fs = cljs.core.rest(arglist__7659);
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
var vec__7667_7674 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7675 = cljs.core.nth.call(null,vec__7667_7674,0,null);var selector_7676 = cljs.core.nth.call(null,vec__7667_7674,1,null);var seq__7668_7677 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__7669_7678 = null;var count__7670_7679 = 0;var i__7671_7680 = 0;while(true){
if((i__7671_7680 < count__7670_7679))
{var vec__7672_7681 = cljs.core._nth.call(null,chunk__7669_7678,i__7671_7680);var type_7682 = cljs.core.nth.call(null,vec__7672_7681,0,null);var f_7683 = cljs.core.nth.call(null,vec__7672_7681,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_7682,((function (seq__7668_7677,chunk__7669_7678,count__7670_7679,i__7671_7680,vec__7672_7681,type_7682,f_7683){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7682,this_fn);
return f_7683.call(null,e);
});})(seq__7668_7677,chunk__7669_7678,count__7670_7679,i__7671_7680,vec__7672_7681,type_7682,f_7683))
);
{
var G__7684 = seq__7668_7677;
var G__7685 = chunk__7669_7678;
var G__7686 = count__7670_7679;
var G__7687 = (i__7671_7680 + 1);
seq__7668_7677 = G__7684;
chunk__7669_7678 = G__7685;
count__7670_7679 = G__7686;
i__7671_7680 = G__7687;
continue;
}
} else
{var temp__4092__auto___7688 = cljs.core.seq.call(null,seq__7668_7677);if(temp__4092__auto___7688)
{var seq__7668_7689__$1 = temp__4092__auto___7688;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7668_7689__$1))
{var c__4150__auto___7690 = cljs.core.chunk_first.call(null,seq__7668_7689__$1);{
var G__7691 = cljs.core.chunk_rest.call(null,seq__7668_7689__$1);
var G__7692 = c__4150__auto___7690;
var G__7693 = cljs.core.count.call(null,c__4150__auto___7690);
var G__7694 = 0;
seq__7668_7677 = G__7691;
chunk__7669_7678 = G__7692;
count__7670_7679 = G__7693;
i__7671_7680 = G__7694;
continue;
}
} else
{var vec__7673_7695 = cljs.core.first.call(null,seq__7668_7689__$1);var type_7696 = cljs.core.nth.call(null,vec__7673_7695,0,null);var f_7697 = cljs.core.nth.call(null,vec__7673_7695,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_7696,((function (seq__7668_7677,chunk__7669_7678,count__7670_7679,i__7671_7680,vec__7673_7695,type_7696,f_7697,seq__7668_7689__$1,temp__4092__auto___7688){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7696,this_fn);
return f_7697.call(null,e);
});})(seq__7668_7677,chunk__7669_7678,count__7670_7679,i__7671_7680,vec__7673_7695,type_7696,f_7697,seq__7668_7689__$1,temp__4092__auto___7688))
);
{
var G__7698 = cljs.core.next.call(null,seq__7668_7689__$1);
var G__7699 = null;
var G__7700 = 0;
var G__7701 = 0;
seq__7668_7677 = G__7698;
chunk__7669_7678 = G__7699;
count__7670_7679 = G__7700;
i__7671_7680 = G__7701;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__7702){
var elem_sel = cljs.core.first(arglist__7702);
var type_fs = cljs.core.rest(arglist__7702);
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
var fire_BANG___delegate = function (node,event_type,p__7703){var vec__7705 = p__7703;var update_event_BANG_ = cljs.core.nth.call(null,vec__7705,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3408__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
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
var p__7703 = null;if (arguments.length > 2) {
  p__7703 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__7703);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__7706){
var node = cljs.core.first(arglist__7706);
arglist__7706 = cljs.core.next(arglist__7706);
var event_type = cljs.core.first(arglist__7706);
var p__7703 = cljs.core.rest(arglist__7706);
return fire_BANG___delegate(node,event_type,p__7703);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
