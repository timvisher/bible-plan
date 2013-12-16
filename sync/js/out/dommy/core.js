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
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like(elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like(elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like(elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3291__auto__ = elem.textContent;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like(elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like(elem);elem__$1.value = value;
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
var append_BANG___2 = (function (parent,child){var G__15577 = dommy.template.__GT_node_like(parent);G__15577.appendChild(dommy.template.__GT_node_like(child));
return G__15577;
});
var append_BANG___3 = (function() { 
var G__15582__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__15578_15583 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__15579_15584 = null;var count__15580_15585 = 0;var i__15581_15586 = 0;while(true){
if((i__15581_15586 < count__15580_15585))
{var c_15587 = chunk__15579_15584.cljs$core$IIndexed$_nth$arity$2(null,i__15581_15586);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_15587);
{
var G__15588 = seq__15578_15583;
var G__15589 = chunk__15579_15584;
var G__15590 = count__15580_15585;
var G__15591 = (i__15581_15586 + 1);
seq__15578_15583 = G__15588;
chunk__15579_15584 = G__15589;
count__15580_15585 = G__15590;
i__15581_15586 = G__15591;
continue;
}
} else
{var temp__4092__auto___15592 = cljs.core.seq(seq__15578_15583);if(cljs.core.truth_(temp__4092__auto___15592))
{var seq__15578_15593__$1 = temp__4092__auto___15592;if(cljs.core.chunked_seq_QMARK_(seq__15578_15593__$1))
{var c__4010__auto___15594 = cljs.core.chunk_first(seq__15578_15593__$1);{
var G__15595 = cljs.core.chunk_rest(seq__15578_15593__$1);
var G__15596 = c__4010__auto___15594;
var G__15597 = cljs.core.count(c__4010__auto___15594);
var G__15598 = 0;
seq__15578_15583 = G__15595;
chunk__15579_15584 = G__15596;
count__15580_15585 = G__15597;
i__15581_15586 = G__15598;
continue;
}
} else
{var c_15599 = cljs.core.first(seq__15578_15593__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_15599);
{
var G__15600 = cljs.core.next(seq__15578_15593__$1);
var G__15601 = null;
var G__15602 = 0;
var G__15603 = 0;
seq__15578_15583 = G__15600;
chunk__15579_15584 = G__15601;
count__15580_15585 = G__15602;
i__15581_15586 = G__15603;
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
var G__15582 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15582__delegate.call(this,parent,child,more_children);};
G__15582.cljs$lang$maxFixedArity = 2;
G__15582.cljs$lang$applyTo = (function (arglist__15604){
var parent = cljs.core.first(arglist__15604);
arglist__15604 = cljs.core.next(arglist__15604);
var child = cljs.core.first(arglist__15604);
var more_children = cljs.core.rest(arglist__15604);
return G__15582__delegate(parent,child,more_children);
});
G__15582.cljs$core$IFn$_invoke$arity$variadic = G__15582__delegate;
return G__15582;
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
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like(parent);return parent__$1.insertBefore(dommy.template.__GT_node_like(child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__15613__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__15609_15614 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__15610_15615 = null;var count__15611_15616 = 0;var i__15612_15617 = 0;while(true){
if((i__15612_15617 < count__15611_15616))
{var c_15618 = chunk__15610_15615.cljs$core$IIndexed$_nth$arity$2(null,i__15612_15617);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_15618);
{
var G__15619 = seq__15609_15614;
var G__15620 = chunk__15610_15615;
var G__15621 = count__15611_15616;
var G__15622 = (i__15612_15617 + 1);
seq__15609_15614 = G__15619;
chunk__15610_15615 = G__15620;
count__15611_15616 = G__15621;
i__15612_15617 = G__15622;
continue;
}
} else
{var temp__4092__auto___15623 = cljs.core.seq(seq__15609_15614);if(cljs.core.truth_(temp__4092__auto___15623))
{var seq__15609_15624__$1 = temp__4092__auto___15623;if(cljs.core.chunked_seq_QMARK_(seq__15609_15624__$1))
{var c__4010__auto___15625 = cljs.core.chunk_first(seq__15609_15624__$1);{
var G__15626 = cljs.core.chunk_rest(seq__15609_15624__$1);
var G__15627 = c__4010__auto___15625;
var G__15628 = cljs.core.count(c__4010__auto___15625);
var G__15629 = 0;
seq__15609_15614 = G__15626;
chunk__15610_15615 = G__15627;
count__15611_15616 = G__15628;
i__15612_15617 = G__15629;
continue;
}
} else
{var c_15630 = cljs.core.first(seq__15609_15624__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_15630);
{
var G__15631 = cljs.core.next(seq__15609_15624__$1);
var G__15632 = null;
var G__15633 = 0;
var G__15634 = 0;
seq__15609_15614 = G__15631;
chunk__15610_15615 = G__15632;
count__15611_15616 = G__15633;
i__15612_15617 = G__15634;
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
var G__15613 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15613__delegate.call(this,parent,child,more_children);};
G__15613.cljs$lang$maxFixedArity = 2;
G__15613.cljs$lang$applyTo = (function (arglist__15635){
var parent = cljs.core.first(arglist__15635);
arglist__15635 = cljs.core.next(arglist__15635);
var child = cljs.core.first(arglist__15635);
var more_children = cljs.core.rest(arglist__15635);
return G__15613__delegate(parent,child,more_children);
});
G__15613.cljs$core$IFn$_invoke$arity$variadic = G__15613__delegate;
return G__15613;
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
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))], 0)))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);var parent = other__$1.parentNode;var temp__4090__auto___15636 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___15636))
{var next_15637 = temp__4090__auto___15636;parent.insertBefore(actual_node,next_15637);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like(new$);var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))], 0)))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__15639 = dommy.template.__GT_node_like(parent);G__15639.innerHTML = "";
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(G__15639,node_like);
return G__15639;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like(elem);var G__15641 = elem__$1.parentNode;G__15641.removeChild(elem__$1);
return G__15641;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like(elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.truth_(cljs.core.coll_QMARK_(data)))
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name(data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like(template);if(!(cljs.core.contains_QMARK_(key_selectors_map,cljs.core.constant$keyword$174)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),cljs.core.constant$keyword$174))], 0)))].join('')));
}
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,container], null),cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15647){var vec__15648 = p__15647;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15648,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15648,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))?(function (){if(typeof dommy.core.t15649 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t15649 = (function (v,k,vec__15648,p__15647,container,key_selectors_map,template,selector_map,meta15650){
this.v = v;
this.k = k;
this.vec__15648 = vec__15648;
this.p__15647 = p__15647;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta15650 = meta15650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t15649.cljs$lang$type = true;
dommy.core.t15649.cljs$lang$ctorStr = "dommy.core/t15649";
dommy.core.t15649.cljs$lang$ctorPrWriter = (function (this__3830__auto__,writer__3831__auto__,opt__3832__auto__){return cljs.core._write(writer__3831__auto__,"dommy.core/t15649");
});
dommy.core.t15649.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array(dommy.template.__GT_node_like(self__.container).querySelectorAll(dommy.core.selector(self__.v)));
});
dommy.core.t15649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15651){var self__ = this;
var _15651__$1 = this;return self__.meta15650;
});
dommy.core.t15649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15651,meta15650__$1){var self__ = this;
var _15651__$1 = this;return (new dommy.core.t15649(self__.v,self__.k,self__.vec__15648,self__.p__15647,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta15650__$1));
});
dommy.core.__GT_t15649 = (function __GT_t15649(v__$1,k__$1,vec__15648__$1,p__15647__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta15650){return (new dommy.core.t15649(v__$1,k__$1,vec__15648__$1,p__15647__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta15650));
});
}
return (new dommy.core.t15649(v,k,vec__15648,p__15647,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like(container).querySelector(dommy.core.selector(v)))], null);
}),key_selectors_map))], 0));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while(cljs.core.identity,cljs.core.iterate((function (p1__15652_SHARP_){return p1__15652_SHARP_.parentNode;
}),dommy.template.__GT_node_like(elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array(dommy.template.__GT_node_like(dommy.template.__GT_node_like(base)).querySelectorAll(dommy.core.selector(selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
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
var closest__2 = (function (elem,selector){return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1(selector),dommy.core.ancestor_nodes(dommy.template.__GT_node_like(elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like(base);var elem__$1 = dommy.template.__GT_node_like(elem);return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base__$1,selector),cljs.core.take_while((function (p1__15653_SHARP_){return !((p1__15653_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes(elem__$1))));
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
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like(descendant);var ancestor__$1 = dommy.template.__GT_node_like(ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15654){var vec__15655 = p__15654;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15655,0,null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15655,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3291__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3279__auto__ = related_target;if(cljs.core.truth_(and__3279__auto__))
{return dommy.core.descendant_QMARK_(related_target,listener_target);
} else
{return and__3279__auto__;
}
})()))
{return null;
} else
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$176,cljs.core.constant$keyword$178,cljs.core.constant$keyword$177,cljs.core.constant$keyword$179], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),event.target,selector);if(cljs.core.truth_((function (){var and__3279__auto__ = selected_target;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not((dommy.core.attr.cljs$core$IFn$_invoke$arity$2 ? dommy.core.attr.cljs$core$IFn$_invoke$arity$2(selected_target,cljs.core.constant$keyword$180) : dommy.core.attr.call(null,selected_target,cljs.core.constant$keyword$180)));
} else
{return and__3279__auto__;
}
})()))
{event.selectedTarget = selected_target;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3291__auto__ = dommy.template.__GT_node_like(elem).dommyEventListeners;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like(elem);return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15656){
var elem = cljs.core.first(arglist__15656);
arglist__15656 = cljs.core.next(arglist__15656);
var f = cljs.core.first(arglist__15656);
var args = cljs.core.rest(arglist__15656);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.truth_(cljs.core.sequential_QMARK_(elem_sel)))
{return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__15657_SHARP_){return dommy.template.__GT_node_like(cljs.core.first(p1__15657_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like(elem_sel),null], null);
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
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))], 0)))].join('')));
}
var vec__15681_15704 = dommy.core.elem_and_selector(elem_sel);var elem_15705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15681_15704,0,null);var selector_15706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15681_15704,1,null);var seq__15682_15707 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__15689_15708 = null;var count__15690_15709 = 0;var i__15691_15710 = 0;while(true){
if((i__15691_15710 < count__15690_15709))
{var vec__15698_15711 = chunk__15689_15708.cljs$core$IIndexed$_nth$arity$2(null,i__15691_15710);var orig_type_15712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15698_15711,0,null);var f_15713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15698_15711,1,null);var seq__15692_15714 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15712,new cljs.core.PersistentArrayMap.fromArray([orig_type_15712,cljs.core.identity], true, false)));var chunk__15694_15715 = null;var count__15695_15716 = 0;var i__15696_15717 = 0;while(true){
if((i__15696_15717 < count__15695_15716))
{var vec__15699_15718 = chunk__15694_15715.cljs$core$IIndexed$_nth$arity$2(null,i__15696_15717);var actual_type_15719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15699_15718,0,null);var factory_15720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15699_15718,1,null);var canonical_f_15721 = (cljs.core.truth_(selector_15706)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15705,selector_15706):cljs.core.identity).call(null,(factory_15720.cljs$core$IFn$_invoke$arity$1 ? factory_15720.cljs$core$IFn$_invoke$arity$1(f_15713) : factory_15720.call(null,f_15713)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15705,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15706,actual_type_15719,f_15713], null),canonical_f_15721], 0));
if(cljs.core.truth_(elem_15705.addEventListener))
{elem_15705.addEventListener(cljs.core.name(actual_type_15719),canonical_f_15721);
} else
{elem_15705.attachEvent(cljs.core.name(actual_type_15719),canonical_f_15721);
}
{
var G__15722 = seq__15692_15714;
var G__15723 = chunk__15694_15715;
var G__15724 = count__15695_15716;
var G__15725 = (i__15696_15717 + 1);
seq__15692_15714 = G__15722;
chunk__15694_15715 = G__15723;
count__15695_15716 = G__15724;
i__15696_15717 = G__15725;
continue;
}
} else
{var temp__4092__auto___15726 = cljs.core.seq(seq__15692_15714);if(cljs.core.truth_(temp__4092__auto___15726))
{var seq__15692_15727__$1 = temp__4092__auto___15726;if(cljs.core.chunked_seq_QMARK_(seq__15692_15727__$1))
{var c__4010__auto___15728 = cljs.core.chunk_first(seq__15692_15727__$1);{
var G__15729 = cljs.core.chunk_rest(seq__15692_15727__$1);
var G__15730 = c__4010__auto___15728;
var G__15731 = cljs.core.count(c__4010__auto___15728);
var G__15732 = 0;
seq__15692_15714 = G__15729;
chunk__15694_15715 = G__15730;
count__15695_15716 = G__15731;
i__15696_15717 = G__15732;
continue;
}
} else
{var vec__15700_15733 = cljs.core.first(seq__15692_15727__$1);var actual_type_15734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15700_15733,0,null);var factory_15735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15700_15733,1,null);var canonical_f_15736 = (cljs.core.truth_(selector_15706)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15705,selector_15706):cljs.core.identity).call(null,(factory_15735.cljs$core$IFn$_invoke$arity$1 ? factory_15735.cljs$core$IFn$_invoke$arity$1(f_15713) : factory_15735.call(null,f_15713)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15705,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15706,actual_type_15734,f_15713], null),canonical_f_15736], 0));
if(cljs.core.truth_(elem_15705.addEventListener))
{elem_15705.addEventListener(cljs.core.name(actual_type_15734),canonical_f_15736);
} else
{elem_15705.attachEvent(cljs.core.name(actual_type_15734),canonical_f_15736);
}
{
var G__15737 = cljs.core.next(seq__15692_15727__$1);
var G__15738 = null;
var G__15739 = 0;
var G__15740 = 0;
seq__15692_15714 = G__15737;
chunk__15694_15715 = G__15738;
count__15695_15716 = G__15739;
i__15696_15717 = G__15740;
continue;
}
}
} else
{}
}
break;
}
{
var G__15741 = seq__15682_15707;
var G__15742 = chunk__15689_15708;
var G__15743 = count__15690_15709;
var G__15744 = (i__15691_15710 + 1);
seq__15682_15707 = G__15741;
chunk__15689_15708 = G__15742;
count__15690_15709 = G__15743;
i__15691_15710 = G__15744;
continue;
}
} else
{var temp__4092__auto___15745 = cljs.core.seq(seq__15682_15707);if(cljs.core.truth_(temp__4092__auto___15745))
{var seq__15682_15746__$1 = temp__4092__auto___15745;if(cljs.core.chunked_seq_QMARK_(seq__15682_15746__$1))
{var c__4010__auto___15747 = cljs.core.chunk_first(seq__15682_15746__$1);{
var G__15748 = cljs.core.chunk_rest(seq__15682_15746__$1);
var G__15749 = c__4010__auto___15747;
var G__15750 = cljs.core.count(c__4010__auto___15747);
var G__15751 = 0;
seq__15682_15707 = G__15748;
chunk__15689_15708 = G__15749;
count__15690_15709 = G__15750;
i__15691_15710 = G__15751;
continue;
}
} else
{var vec__15701_15752 = cljs.core.first(seq__15682_15746__$1);var orig_type_15753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15701_15752,0,null);var f_15754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15701_15752,1,null);var seq__15683_15755 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15753,new cljs.core.PersistentArrayMap.fromArray([orig_type_15753,cljs.core.identity], true, false)));var chunk__15685_15756 = null;var count__15686_15757 = 0;var i__15687_15758 = 0;while(true){
if((i__15687_15758 < count__15686_15757))
{var vec__15702_15759 = chunk__15685_15756.cljs$core$IIndexed$_nth$arity$2(null,i__15687_15758);var actual_type_15760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15702_15759,0,null);var factory_15761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15702_15759,1,null);var canonical_f_15762 = (cljs.core.truth_(selector_15706)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15705,selector_15706):cljs.core.identity).call(null,(factory_15761.cljs$core$IFn$_invoke$arity$1 ? factory_15761.cljs$core$IFn$_invoke$arity$1(f_15754) : factory_15761.call(null,f_15754)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15705,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15706,actual_type_15760,f_15754], null),canonical_f_15762], 0));
if(cljs.core.truth_(elem_15705.addEventListener))
{elem_15705.addEventListener(cljs.core.name(actual_type_15760),canonical_f_15762);
} else
{elem_15705.attachEvent(cljs.core.name(actual_type_15760),canonical_f_15762);
}
{
var G__15763 = seq__15683_15755;
var G__15764 = chunk__15685_15756;
var G__15765 = count__15686_15757;
var G__15766 = (i__15687_15758 + 1);
seq__15683_15755 = G__15763;
chunk__15685_15756 = G__15764;
count__15686_15757 = G__15765;
i__15687_15758 = G__15766;
continue;
}
} else
{var temp__4092__auto___15767__$1 = cljs.core.seq(seq__15683_15755);if(cljs.core.truth_(temp__4092__auto___15767__$1))
{var seq__15683_15768__$1 = temp__4092__auto___15767__$1;if(cljs.core.chunked_seq_QMARK_(seq__15683_15768__$1))
{var c__4010__auto___15769 = cljs.core.chunk_first(seq__15683_15768__$1);{
var G__15770 = cljs.core.chunk_rest(seq__15683_15768__$1);
var G__15771 = c__4010__auto___15769;
var G__15772 = cljs.core.count(c__4010__auto___15769);
var G__15773 = 0;
seq__15683_15755 = G__15770;
chunk__15685_15756 = G__15771;
count__15686_15757 = G__15772;
i__15687_15758 = G__15773;
continue;
}
} else
{var vec__15703_15774 = cljs.core.first(seq__15683_15768__$1);var actual_type_15775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15703_15774,0,null);var factory_15776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15703_15774,1,null);var canonical_f_15777 = (cljs.core.truth_(selector_15706)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15705,selector_15706):cljs.core.identity).call(null,(factory_15776.cljs$core$IFn$_invoke$arity$1 ? factory_15776.cljs$core$IFn$_invoke$arity$1(f_15754) : factory_15776.call(null,f_15754)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15705,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15706,actual_type_15775,f_15754], null),canonical_f_15777], 0));
if(cljs.core.truth_(elem_15705.addEventListener))
{elem_15705.addEventListener(cljs.core.name(actual_type_15775),canonical_f_15777);
} else
{elem_15705.attachEvent(cljs.core.name(actual_type_15775),canonical_f_15777);
}
{
var G__15778 = cljs.core.next(seq__15683_15768__$1);
var G__15779 = null;
var G__15780 = 0;
var G__15781 = 0;
seq__15683_15755 = G__15778;
chunk__15685_15756 = G__15779;
count__15686_15757 = G__15780;
i__15687_15758 = G__15781;
continue;
}
}
} else
{}
}
break;
}
{
var G__15782 = cljs.core.next(seq__15682_15746__$1);
var G__15783 = null;
var G__15784 = 0;
var G__15785 = 0;
seq__15682_15707 = G__15782;
chunk__15689_15708 = G__15783;
count__15690_15709 = G__15784;
i__15691_15710 = G__15785;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__15786){
var elem_sel = cljs.core.first(arglist__15786);
var type_fs = cljs.core.rest(arglist__15786);
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
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))], 0)))].join('')));
}
var vec__15810_15833 = dommy.core.elem_and_selector(elem_sel);var elem_15834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15810_15833,0,null);var selector_15835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15810_15833,1,null);var seq__15811_15836 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__15818_15837 = null;var count__15819_15838 = 0;var i__15820_15839 = 0;while(true){
if((i__15820_15839 < count__15819_15838))
{var vec__15827_15840 = chunk__15818_15837.cljs$core$IIndexed$_nth$arity$2(null,i__15820_15839);var orig_type_15841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15827_15840,0,null);var f_15842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15827_15840,1,null);var seq__15821_15843 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15841,new cljs.core.PersistentArrayMap.fromArray([orig_type_15841,cljs.core.identity], true, false)));var chunk__15823_15844 = null;var count__15824_15845 = 0;var i__15825_15846 = 0;while(true){
if((i__15825_15846 < count__15824_15845))
{var vec__15828_15847 = chunk__15823_15844.cljs$core$IIndexed$_nth$arity$2(null,i__15825_15846);var actual_type_15848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15828_15847,0,null);var __15849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15828_15847,1,null);var keys_15850 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15835,actual_type_15848,f_15842], null);var canonical_f_15851 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15834),keys_15850);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15834,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15850], 0));
if(cljs.core.truth_(elem_15834.removeEventListener))
{elem_15834.removeEventListener(cljs.core.name(actual_type_15848),canonical_f_15851);
} else
{elem_15834.detachEvent(cljs.core.name(actual_type_15848),canonical_f_15851);
}
{
var G__15852 = seq__15821_15843;
var G__15853 = chunk__15823_15844;
var G__15854 = count__15824_15845;
var G__15855 = (i__15825_15846 + 1);
seq__15821_15843 = G__15852;
chunk__15823_15844 = G__15853;
count__15824_15845 = G__15854;
i__15825_15846 = G__15855;
continue;
}
} else
{var temp__4092__auto___15856 = cljs.core.seq(seq__15821_15843);if(cljs.core.truth_(temp__4092__auto___15856))
{var seq__15821_15857__$1 = temp__4092__auto___15856;if(cljs.core.chunked_seq_QMARK_(seq__15821_15857__$1))
{var c__4010__auto___15858 = cljs.core.chunk_first(seq__15821_15857__$1);{
var G__15859 = cljs.core.chunk_rest(seq__15821_15857__$1);
var G__15860 = c__4010__auto___15858;
var G__15861 = cljs.core.count(c__4010__auto___15858);
var G__15862 = 0;
seq__15821_15843 = G__15859;
chunk__15823_15844 = G__15860;
count__15824_15845 = G__15861;
i__15825_15846 = G__15862;
continue;
}
} else
{var vec__15829_15863 = cljs.core.first(seq__15821_15857__$1);var actual_type_15864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15829_15863,0,null);var __15865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15829_15863,1,null);var keys_15866 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15835,actual_type_15864,f_15842], null);var canonical_f_15867 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15834),keys_15866);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15834,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15866], 0));
if(cljs.core.truth_(elem_15834.removeEventListener))
{elem_15834.removeEventListener(cljs.core.name(actual_type_15864),canonical_f_15867);
} else
{elem_15834.detachEvent(cljs.core.name(actual_type_15864),canonical_f_15867);
}
{
var G__15868 = cljs.core.next(seq__15821_15857__$1);
var G__15869 = null;
var G__15870 = 0;
var G__15871 = 0;
seq__15821_15843 = G__15868;
chunk__15823_15844 = G__15869;
count__15824_15845 = G__15870;
i__15825_15846 = G__15871;
continue;
}
}
} else
{}
}
break;
}
{
var G__15872 = seq__15811_15836;
var G__15873 = chunk__15818_15837;
var G__15874 = count__15819_15838;
var G__15875 = (i__15820_15839 + 1);
seq__15811_15836 = G__15872;
chunk__15818_15837 = G__15873;
count__15819_15838 = G__15874;
i__15820_15839 = G__15875;
continue;
}
} else
{var temp__4092__auto___15876 = cljs.core.seq(seq__15811_15836);if(cljs.core.truth_(temp__4092__auto___15876))
{var seq__15811_15877__$1 = temp__4092__auto___15876;if(cljs.core.chunked_seq_QMARK_(seq__15811_15877__$1))
{var c__4010__auto___15878 = cljs.core.chunk_first(seq__15811_15877__$1);{
var G__15879 = cljs.core.chunk_rest(seq__15811_15877__$1);
var G__15880 = c__4010__auto___15878;
var G__15881 = cljs.core.count(c__4010__auto___15878);
var G__15882 = 0;
seq__15811_15836 = G__15879;
chunk__15818_15837 = G__15880;
count__15819_15838 = G__15881;
i__15820_15839 = G__15882;
continue;
}
} else
{var vec__15830_15883 = cljs.core.first(seq__15811_15877__$1);var orig_type_15884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15830_15883,0,null);var f_15885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15830_15883,1,null);var seq__15812_15886 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15884,new cljs.core.PersistentArrayMap.fromArray([orig_type_15884,cljs.core.identity], true, false)));var chunk__15814_15887 = null;var count__15815_15888 = 0;var i__15816_15889 = 0;while(true){
if((i__15816_15889 < count__15815_15888))
{var vec__15831_15890 = chunk__15814_15887.cljs$core$IIndexed$_nth$arity$2(null,i__15816_15889);var actual_type_15891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15831_15890,0,null);var __15892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15831_15890,1,null);var keys_15893 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15835,actual_type_15891,f_15885], null);var canonical_f_15894 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15834),keys_15893);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15834,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15893], 0));
if(cljs.core.truth_(elem_15834.removeEventListener))
{elem_15834.removeEventListener(cljs.core.name(actual_type_15891),canonical_f_15894);
} else
{elem_15834.detachEvent(cljs.core.name(actual_type_15891),canonical_f_15894);
}
{
var G__15895 = seq__15812_15886;
var G__15896 = chunk__15814_15887;
var G__15897 = count__15815_15888;
var G__15898 = (i__15816_15889 + 1);
seq__15812_15886 = G__15895;
chunk__15814_15887 = G__15896;
count__15815_15888 = G__15897;
i__15816_15889 = G__15898;
continue;
}
} else
{var temp__4092__auto___15899__$1 = cljs.core.seq(seq__15812_15886);if(cljs.core.truth_(temp__4092__auto___15899__$1))
{var seq__15812_15900__$1 = temp__4092__auto___15899__$1;if(cljs.core.chunked_seq_QMARK_(seq__15812_15900__$1))
{var c__4010__auto___15901 = cljs.core.chunk_first(seq__15812_15900__$1);{
var G__15902 = cljs.core.chunk_rest(seq__15812_15900__$1);
var G__15903 = c__4010__auto___15901;
var G__15904 = cljs.core.count(c__4010__auto___15901);
var G__15905 = 0;
seq__15812_15886 = G__15902;
chunk__15814_15887 = G__15903;
count__15815_15888 = G__15904;
i__15816_15889 = G__15905;
continue;
}
} else
{var vec__15832_15906 = cljs.core.first(seq__15812_15900__$1);var actual_type_15907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15832_15906,0,null);var __15908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15832_15906,1,null);var keys_15909 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15835,actual_type_15907,f_15885], null);var canonical_f_15910 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15834),keys_15909);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15834,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15909], 0));
if(cljs.core.truth_(elem_15834.removeEventListener))
{elem_15834.removeEventListener(cljs.core.name(actual_type_15907),canonical_f_15910);
} else
{elem_15834.detachEvent(cljs.core.name(actual_type_15907),canonical_f_15910);
}
{
var G__15911 = cljs.core.next(seq__15812_15900__$1);
var G__15912 = null;
var G__15913 = 0;
var G__15914 = 0;
seq__15812_15886 = G__15911;
chunk__15814_15887 = G__15912;
count__15815_15888 = G__15913;
i__15816_15889 = G__15914;
continue;
}
}
} else
{}
}
break;
}
{
var G__15915 = cljs.core.next(seq__15811_15877__$1);
var G__15916 = null;
var G__15917 = 0;
var G__15918 = 0;
seq__15811_15836 = G__15915;
chunk__15818_15837 = G__15916;
count__15819_15838 = G__15917;
i__15820_15839 = G__15918;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__15919){
var elem_sel = cljs.core.first(arglist__15919);
var type_fs = cljs.core.rest(arglist__15919);
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
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))], 0)))].join('')));
}
var vec__15927_15934 = dommy.core.elem_and_selector(elem_sel);var elem_15935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15927_15934,0,null);var selector_15936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15927_15934,1,null);var seq__15928_15937 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__15929_15938 = null;var count__15930_15939 = 0;var i__15931_15940 = 0;while(true){
if((i__15931_15940 < count__15930_15939))
{var vec__15932_15941 = chunk__15929_15938.cljs$core$IIndexed$_nth$arity$2(null,i__15931_15940);var type_15942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15932_15941,0,null);var f_15943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15932_15941,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15942,((function (seq__15928_15937,chunk__15929_15938,count__15930_15939,i__15931_15940,vec__15932_15941,type_15942,f_15943){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15942,this_fn], 0));
return (f_15943.cljs$core$IFn$_invoke$arity$1 ? f_15943.cljs$core$IFn$_invoke$arity$1(e) : f_15943.call(null,e));
});})(seq__15928_15937,chunk__15929_15938,count__15930_15939,i__15931_15940,vec__15932_15941,type_15942,f_15943))
], 0));
{
var G__15944 = seq__15928_15937;
var G__15945 = chunk__15929_15938;
var G__15946 = count__15930_15939;
var G__15947 = (i__15931_15940 + 1);
seq__15928_15937 = G__15944;
chunk__15929_15938 = G__15945;
count__15930_15939 = G__15946;
i__15931_15940 = G__15947;
continue;
}
} else
{var temp__4092__auto___15948 = cljs.core.seq(seq__15928_15937);if(cljs.core.truth_(temp__4092__auto___15948))
{var seq__15928_15949__$1 = temp__4092__auto___15948;if(cljs.core.chunked_seq_QMARK_(seq__15928_15949__$1))
{var c__4010__auto___15950 = cljs.core.chunk_first(seq__15928_15949__$1);{
var G__15951 = cljs.core.chunk_rest(seq__15928_15949__$1);
var G__15952 = c__4010__auto___15950;
var G__15953 = cljs.core.count(c__4010__auto___15950);
var G__15954 = 0;
seq__15928_15937 = G__15951;
chunk__15929_15938 = G__15952;
count__15930_15939 = G__15953;
i__15931_15940 = G__15954;
continue;
}
} else
{var vec__15933_15955 = cljs.core.first(seq__15928_15949__$1);var type_15956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15933_15955,0,null);var f_15957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15933_15955,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15956,((function (seq__15928_15937,chunk__15929_15938,count__15930_15939,i__15931_15940,vec__15933_15955,type_15956,f_15957,seq__15928_15949__$1,temp__4092__auto___15948){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15956,this_fn], 0));
return (f_15957.cljs$core$IFn$_invoke$arity$1 ? f_15957.cljs$core$IFn$_invoke$arity$1(e) : f_15957.call(null,e));
});})(seq__15928_15937,chunk__15929_15938,count__15930_15939,i__15931_15940,vec__15933_15955,type_15956,f_15957,seq__15928_15949__$1,temp__4092__auto___15948))
], 0));
{
var G__15958 = cljs.core.next(seq__15928_15949__$1);
var G__15959 = null;
var G__15960 = 0;
var G__15961 = 0;
seq__15928_15937 = G__15958;
chunk__15929_15938 = G__15959;
count__15930_15939 = G__15960;
i__15931_15940 = G__15961;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__15962){
var elem_sel = cljs.core.first(arglist__15962);
var type_fs = cljs.core.rest(arglist__15962);
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
var fire_BANG___delegate = function (node,event_type,p__15963){var vec__15965 = p__15963;var update_event_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965,0,null);if(cljs.core.truth_(dommy.core.descendant_QMARK_(node,document.documentElement)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))], 0)))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3291__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name(event_type),true,true);
return node.dispatchEvent((update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1 ? update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1(event) : update_event_BANG___$1.call(null,event)));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name(event_type))].join(''),(update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1 ? update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1(document.createEventObject()) : update_event_BANG___$1.call(null,document.createEventObject())));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__15963 = null;if (arguments.length > 2) {
  p__15963 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__15963);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__15966){
var node = cljs.core.first(arglist__15966);
arglist__15966 = cljs.core.next(arglist__15966);
var event_type = cljs.core.first(arglist__15966);
var p__15963 = cljs.core.rest(arglist__15966);
return fire_BANG___delegate(node,event_type,p__15963);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
