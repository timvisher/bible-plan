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
var append_BANG___2 = (function (parent,child){var G__9644 = dommy.template.__GT_node_like.call(null,parent);G__9644.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__9644;
});
var append_BANG___3 = (function() { 
var G__9649__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__9645_9650 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__9646_9651 = null;var count__9647_9652 = 0;var i__9648_9653 = 0;while(true){
if((i__9648_9653 < count__9647_9652))
{var c_9654 = cljs.core._nth.call(null,chunk__9646_9651,i__9648_9653);append_BANG_.call(null,parent__$1,c_9654);
{
var G__9655 = seq__9645_9650;
var G__9656 = chunk__9646_9651;
var G__9657 = count__9647_9652;
var G__9658 = (i__9648_9653 + 1);
seq__9645_9650 = G__9655;
chunk__9646_9651 = G__9656;
count__9647_9652 = G__9657;
i__9648_9653 = G__9658;
continue;
}
} else
{var temp__4092__auto___9659 = cljs.core.seq.call(null,seq__9645_9650);if(cljs.core.truth_(temp__4092__auto___9659))
{var seq__9645_9660__$1 = temp__4092__auto___9659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9645_9660__$1))
{var c__4010__auto___9661 = cljs.core.chunk_first.call(null,seq__9645_9660__$1);{
var G__9662 = cljs.core.chunk_rest.call(null,seq__9645_9660__$1);
var G__9663 = c__4010__auto___9661;
var G__9664 = cljs.core.count.call(null,c__4010__auto___9661);
var G__9665 = 0;
seq__9645_9650 = G__9662;
chunk__9646_9651 = G__9663;
count__9647_9652 = G__9664;
i__9648_9653 = G__9665;
continue;
}
} else
{var c_9666 = cljs.core.first.call(null,seq__9645_9660__$1);append_BANG_.call(null,parent__$1,c_9666);
{
var G__9667 = cljs.core.next.call(null,seq__9645_9660__$1);
var G__9668 = null;
var G__9669 = 0;
var G__9670 = 0;
seq__9645_9650 = G__9667;
chunk__9646_9651 = G__9668;
count__9647_9652 = G__9669;
i__9648_9653 = G__9670;
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
var G__9649 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9649__delegate.call(this,parent,child,more_children);};
G__9649.cljs$lang$maxFixedArity = 2;
G__9649.cljs$lang$applyTo = (function (arglist__9671){
var parent = cljs.core.first(arglist__9671);
arglist__9671 = cljs.core.next(arglist__9671);
var child = cljs.core.first(arglist__9671);
var more_children = cljs.core.rest(arglist__9671);
return G__9649__delegate(parent,child,more_children);
});
G__9649.cljs$core$IFn$_invoke$arity$variadic = G__9649__delegate;
return G__9649;
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
var G__9680__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__9676_9681 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__9677_9682 = null;var count__9678_9683 = 0;var i__9679_9684 = 0;while(true){
if((i__9679_9684 < count__9678_9683))
{var c_9685 = cljs.core._nth.call(null,chunk__9677_9682,i__9679_9684);prepend_BANG_.call(null,parent__$1,c_9685);
{
var G__9686 = seq__9676_9681;
var G__9687 = chunk__9677_9682;
var G__9688 = count__9678_9683;
var G__9689 = (i__9679_9684 + 1);
seq__9676_9681 = G__9686;
chunk__9677_9682 = G__9687;
count__9678_9683 = G__9688;
i__9679_9684 = G__9689;
continue;
}
} else
{var temp__4092__auto___9690 = cljs.core.seq.call(null,seq__9676_9681);if(cljs.core.truth_(temp__4092__auto___9690))
{var seq__9676_9691__$1 = temp__4092__auto___9690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9676_9691__$1))
{var c__4010__auto___9692 = cljs.core.chunk_first.call(null,seq__9676_9691__$1);{
var G__9693 = cljs.core.chunk_rest.call(null,seq__9676_9691__$1);
var G__9694 = c__4010__auto___9692;
var G__9695 = cljs.core.count.call(null,c__4010__auto___9692);
var G__9696 = 0;
seq__9676_9681 = G__9693;
chunk__9677_9682 = G__9694;
count__9678_9683 = G__9695;
i__9679_9684 = G__9696;
continue;
}
} else
{var c_9697 = cljs.core.first.call(null,seq__9676_9691__$1);prepend_BANG_.call(null,parent__$1,c_9697);
{
var G__9698 = cljs.core.next.call(null,seq__9676_9691__$1);
var G__9699 = null;
var G__9700 = 0;
var G__9701 = 0;
seq__9676_9681 = G__9698;
chunk__9677_9682 = G__9699;
count__9678_9683 = G__9700;
i__9679_9684 = G__9701;
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
var G__9680 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9680__delegate.call(this,parent,child,more_children);};
G__9680.cljs$lang$maxFixedArity = 2;
G__9680.cljs$lang$applyTo = (function (arglist__9702){
var parent = cljs.core.first(arglist__9702);
arglist__9702 = cljs.core.next(arglist__9702);
var child = cljs.core.first(arglist__9702);
var more_children = cljs.core.rest(arglist__9702);
return G__9680__delegate(parent,child,more_children);
});
G__9680.cljs$core$IFn$_invoke$arity$variadic = G__9680__delegate;
return G__9680;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___9703 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___9703))
{var next_9704 = temp__4090__auto___9703;parent.insertBefore(actual_node,next_9704);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__9706 = dommy.template.__GT_node_like.call(null,parent);G__9706.innerHTML = "";
dommy.core.append_BANG_.call(null,G__9706,node_like);
return G__9706;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__9708 = elem__$1.parentNode;G__9708.removeChild(elem__$1);
return G__9708;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9714){var vec__9715 = p__9714;var k = cljs.core.nth.call(null,vec__9715,0,null);var v = cljs.core.nth.call(null,vec__9715,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t9716 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t9716 = (function (v,k,vec__9715,p__9714,container,key_selectors_map,template,selector_map,meta9717){
this.v = v;
this.k = k;
this.vec__9715 = vec__9715;
this.p__9714 = p__9714;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta9717 = meta9717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t9716.cljs$lang$type = true;
dommy.core.t9716.cljs$lang$ctorStr = "dommy.core/t9716";
dommy.core.t9716.cljs$lang$ctorPrWriter = (function (this__3830__auto__,writer__3831__auto__,opt__3832__auto__){return cljs.core._write.call(null,writer__3831__auto__,"dommy.core/t9716");
});
dommy.core.t9716.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t9716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9718){var self__ = this;
var _9718__$1 = this;return self__.meta9717;
});
dommy.core.t9716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9718,meta9717__$1){var self__ = this;
var _9718__$1 = this;return (new dommy.core.t9716(self__.v,self__.k,self__.vec__9715,self__.p__9714,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta9717__$1));
});
dommy.core.__GT_t9716 = (function __GT_t9716(v__$1,k__$1,vec__9715__$1,p__9714__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta9717){return (new dommy.core.t9716(v__$1,k__$1,vec__9715__$1,p__9714__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta9717));
});
}
return (new dommy.core.t9716(v,k,vec__9715,p__9714,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__9719_SHARP_){return p1__9719_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__9720_SHARP_){return !((p1__9720_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9721){var vec__9722 = p__9721;var special_mouse_event = cljs.core.nth.call(null,vec__9722,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__9722,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3291__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3291__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__9723){
var elem = cljs.core.first(arglist__9723);
arglist__9723 = cljs.core.next(arglist__9723);
var f = cljs.core.first(arglist__9723);
var args = cljs.core.rest(arglist__9723);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,elem_sel)))
{return cljs.core.juxt.call(null,(function (p1__9724_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__9724_SHARP_));
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
var vec__9748_9771 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9772 = cljs.core.nth.call(null,vec__9748_9771,0,null);var selector_9773 = cljs.core.nth.call(null,vec__9748_9771,1,null);var seq__9749_9774 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9756_9775 = null;var count__9757_9776 = 0;var i__9758_9777 = 0;while(true){
if((i__9758_9777 < count__9757_9776))
{var vec__9765_9778 = cljs.core._nth.call(null,chunk__9756_9775,i__9758_9777);var orig_type_9779 = cljs.core.nth.call(null,vec__9765_9778,0,null);var f_9780 = cljs.core.nth.call(null,vec__9765_9778,1,null);var seq__9759_9781 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9779,new cljs.core.PersistentArrayMap.fromArray([orig_type_9779,cljs.core.identity], true, false)));var chunk__9761_9782 = null;var count__9762_9783 = 0;var i__9763_9784 = 0;while(true){
if((i__9763_9784 < count__9762_9783))
{var vec__9766_9785 = cljs.core._nth.call(null,chunk__9761_9782,i__9763_9784);var actual_type_9786 = cljs.core.nth.call(null,vec__9766_9785,0,null);var factory_9787 = cljs.core.nth.call(null,vec__9766_9785,1,null);var canonical_f_9788 = (cljs.core.truth_(selector_9773)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9772,selector_9773):cljs.core.identity).call(null,factory_9787.call(null,f_9780));dommy.core.update_event_listeners_BANG_.call(null,elem_9772,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9773,actual_type_9786,f_9780], null),canonical_f_9788);
if(cljs.core.truth_(elem_9772.addEventListener))
{elem_9772.addEventListener(cljs.core.name.call(null,actual_type_9786),canonical_f_9788);
} else
{elem_9772.attachEvent(cljs.core.name.call(null,actual_type_9786),canonical_f_9788);
}
{
var G__9789 = seq__9759_9781;
var G__9790 = chunk__9761_9782;
var G__9791 = count__9762_9783;
var G__9792 = (i__9763_9784 + 1);
seq__9759_9781 = G__9789;
chunk__9761_9782 = G__9790;
count__9762_9783 = G__9791;
i__9763_9784 = G__9792;
continue;
}
} else
{var temp__4092__auto___9793 = cljs.core.seq.call(null,seq__9759_9781);if(cljs.core.truth_(temp__4092__auto___9793))
{var seq__9759_9794__$1 = temp__4092__auto___9793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9759_9794__$1))
{var c__4010__auto___9795 = cljs.core.chunk_first.call(null,seq__9759_9794__$1);{
var G__9796 = cljs.core.chunk_rest.call(null,seq__9759_9794__$1);
var G__9797 = c__4010__auto___9795;
var G__9798 = cljs.core.count.call(null,c__4010__auto___9795);
var G__9799 = 0;
seq__9759_9781 = G__9796;
chunk__9761_9782 = G__9797;
count__9762_9783 = G__9798;
i__9763_9784 = G__9799;
continue;
}
} else
{var vec__9767_9800 = cljs.core.first.call(null,seq__9759_9794__$1);var actual_type_9801 = cljs.core.nth.call(null,vec__9767_9800,0,null);var factory_9802 = cljs.core.nth.call(null,vec__9767_9800,1,null);var canonical_f_9803 = (cljs.core.truth_(selector_9773)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9772,selector_9773):cljs.core.identity).call(null,factory_9802.call(null,f_9780));dommy.core.update_event_listeners_BANG_.call(null,elem_9772,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9773,actual_type_9801,f_9780], null),canonical_f_9803);
if(cljs.core.truth_(elem_9772.addEventListener))
{elem_9772.addEventListener(cljs.core.name.call(null,actual_type_9801),canonical_f_9803);
} else
{elem_9772.attachEvent(cljs.core.name.call(null,actual_type_9801),canonical_f_9803);
}
{
var G__9804 = cljs.core.next.call(null,seq__9759_9794__$1);
var G__9805 = null;
var G__9806 = 0;
var G__9807 = 0;
seq__9759_9781 = G__9804;
chunk__9761_9782 = G__9805;
count__9762_9783 = G__9806;
i__9763_9784 = G__9807;
continue;
}
}
} else
{}
}
break;
}
{
var G__9808 = seq__9749_9774;
var G__9809 = chunk__9756_9775;
var G__9810 = count__9757_9776;
var G__9811 = (i__9758_9777 + 1);
seq__9749_9774 = G__9808;
chunk__9756_9775 = G__9809;
count__9757_9776 = G__9810;
i__9758_9777 = G__9811;
continue;
}
} else
{var temp__4092__auto___9812 = cljs.core.seq.call(null,seq__9749_9774);if(cljs.core.truth_(temp__4092__auto___9812))
{var seq__9749_9813__$1 = temp__4092__auto___9812;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9749_9813__$1))
{var c__4010__auto___9814 = cljs.core.chunk_first.call(null,seq__9749_9813__$1);{
var G__9815 = cljs.core.chunk_rest.call(null,seq__9749_9813__$1);
var G__9816 = c__4010__auto___9814;
var G__9817 = cljs.core.count.call(null,c__4010__auto___9814);
var G__9818 = 0;
seq__9749_9774 = G__9815;
chunk__9756_9775 = G__9816;
count__9757_9776 = G__9817;
i__9758_9777 = G__9818;
continue;
}
} else
{var vec__9768_9819 = cljs.core.first.call(null,seq__9749_9813__$1);var orig_type_9820 = cljs.core.nth.call(null,vec__9768_9819,0,null);var f_9821 = cljs.core.nth.call(null,vec__9768_9819,1,null);var seq__9750_9822 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9820,new cljs.core.PersistentArrayMap.fromArray([orig_type_9820,cljs.core.identity], true, false)));var chunk__9752_9823 = null;var count__9753_9824 = 0;var i__9754_9825 = 0;while(true){
if((i__9754_9825 < count__9753_9824))
{var vec__9769_9826 = cljs.core._nth.call(null,chunk__9752_9823,i__9754_9825);var actual_type_9827 = cljs.core.nth.call(null,vec__9769_9826,0,null);var factory_9828 = cljs.core.nth.call(null,vec__9769_9826,1,null);var canonical_f_9829 = (cljs.core.truth_(selector_9773)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9772,selector_9773):cljs.core.identity).call(null,factory_9828.call(null,f_9821));dommy.core.update_event_listeners_BANG_.call(null,elem_9772,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9773,actual_type_9827,f_9821], null),canonical_f_9829);
if(cljs.core.truth_(elem_9772.addEventListener))
{elem_9772.addEventListener(cljs.core.name.call(null,actual_type_9827),canonical_f_9829);
} else
{elem_9772.attachEvent(cljs.core.name.call(null,actual_type_9827),canonical_f_9829);
}
{
var G__9830 = seq__9750_9822;
var G__9831 = chunk__9752_9823;
var G__9832 = count__9753_9824;
var G__9833 = (i__9754_9825 + 1);
seq__9750_9822 = G__9830;
chunk__9752_9823 = G__9831;
count__9753_9824 = G__9832;
i__9754_9825 = G__9833;
continue;
}
} else
{var temp__4092__auto___9834__$1 = cljs.core.seq.call(null,seq__9750_9822);if(cljs.core.truth_(temp__4092__auto___9834__$1))
{var seq__9750_9835__$1 = temp__4092__auto___9834__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9750_9835__$1))
{var c__4010__auto___9836 = cljs.core.chunk_first.call(null,seq__9750_9835__$1);{
var G__9837 = cljs.core.chunk_rest.call(null,seq__9750_9835__$1);
var G__9838 = c__4010__auto___9836;
var G__9839 = cljs.core.count.call(null,c__4010__auto___9836);
var G__9840 = 0;
seq__9750_9822 = G__9837;
chunk__9752_9823 = G__9838;
count__9753_9824 = G__9839;
i__9754_9825 = G__9840;
continue;
}
} else
{var vec__9770_9841 = cljs.core.first.call(null,seq__9750_9835__$1);var actual_type_9842 = cljs.core.nth.call(null,vec__9770_9841,0,null);var factory_9843 = cljs.core.nth.call(null,vec__9770_9841,1,null);var canonical_f_9844 = (cljs.core.truth_(selector_9773)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9772,selector_9773):cljs.core.identity).call(null,factory_9843.call(null,f_9821));dommy.core.update_event_listeners_BANG_.call(null,elem_9772,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9773,actual_type_9842,f_9821], null),canonical_f_9844);
if(cljs.core.truth_(elem_9772.addEventListener))
{elem_9772.addEventListener(cljs.core.name.call(null,actual_type_9842),canonical_f_9844);
} else
{elem_9772.attachEvent(cljs.core.name.call(null,actual_type_9842),canonical_f_9844);
}
{
var G__9845 = cljs.core.next.call(null,seq__9750_9835__$1);
var G__9846 = null;
var G__9847 = 0;
var G__9848 = 0;
seq__9750_9822 = G__9845;
chunk__9752_9823 = G__9846;
count__9753_9824 = G__9847;
i__9754_9825 = G__9848;
continue;
}
}
} else
{}
}
break;
}
{
var G__9849 = cljs.core.next.call(null,seq__9749_9813__$1);
var G__9850 = null;
var G__9851 = 0;
var G__9852 = 0;
seq__9749_9774 = G__9849;
chunk__9756_9775 = G__9850;
count__9757_9776 = G__9851;
i__9758_9777 = G__9852;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__9853){
var elem_sel = cljs.core.first(arglist__9853);
var type_fs = cljs.core.rest(arglist__9853);
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
var vec__9877_9900 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9901 = cljs.core.nth.call(null,vec__9877_9900,0,null);var selector_9902 = cljs.core.nth.call(null,vec__9877_9900,1,null);var seq__9878_9903 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9885_9904 = null;var count__9886_9905 = 0;var i__9887_9906 = 0;while(true){
if((i__9887_9906 < count__9886_9905))
{var vec__9894_9907 = cljs.core._nth.call(null,chunk__9885_9904,i__9887_9906);var orig_type_9908 = cljs.core.nth.call(null,vec__9894_9907,0,null);var f_9909 = cljs.core.nth.call(null,vec__9894_9907,1,null);var seq__9888_9910 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9908,new cljs.core.PersistentArrayMap.fromArray([orig_type_9908,cljs.core.identity], true, false)));var chunk__9890_9911 = null;var count__9891_9912 = 0;var i__9892_9913 = 0;while(true){
if((i__9892_9913 < count__9891_9912))
{var vec__9895_9914 = cljs.core._nth.call(null,chunk__9890_9911,i__9892_9913);var actual_type_9915 = cljs.core.nth.call(null,vec__9895_9914,0,null);var __9916 = cljs.core.nth.call(null,vec__9895_9914,1,null);var keys_9917 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9902,actual_type_9915,f_9909], null);var canonical_f_9918 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9901),keys_9917);dommy.core.update_event_listeners_BANG_.call(null,elem_9901,dommy.utils.dissoc_in,keys_9917);
if(cljs.core.truth_(elem_9901.removeEventListener))
{elem_9901.removeEventListener(cljs.core.name.call(null,actual_type_9915),canonical_f_9918);
} else
{elem_9901.detachEvent(cljs.core.name.call(null,actual_type_9915),canonical_f_9918);
}
{
var G__9919 = seq__9888_9910;
var G__9920 = chunk__9890_9911;
var G__9921 = count__9891_9912;
var G__9922 = (i__9892_9913 + 1);
seq__9888_9910 = G__9919;
chunk__9890_9911 = G__9920;
count__9891_9912 = G__9921;
i__9892_9913 = G__9922;
continue;
}
} else
{var temp__4092__auto___9923 = cljs.core.seq.call(null,seq__9888_9910);if(cljs.core.truth_(temp__4092__auto___9923))
{var seq__9888_9924__$1 = temp__4092__auto___9923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9888_9924__$1))
{var c__4010__auto___9925 = cljs.core.chunk_first.call(null,seq__9888_9924__$1);{
var G__9926 = cljs.core.chunk_rest.call(null,seq__9888_9924__$1);
var G__9927 = c__4010__auto___9925;
var G__9928 = cljs.core.count.call(null,c__4010__auto___9925);
var G__9929 = 0;
seq__9888_9910 = G__9926;
chunk__9890_9911 = G__9927;
count__9891_9912 = G__9928;
i__9892_9913 = G__9929;
continue;
}
} else
{var vec__9896_9930 = cljs.core.first.call(null,seq__9888_9924__$1);var actual_type_9931 = cljs.core.nth.call(null,vec__9896_9930,0,null);var __9932 = cljs.core.nth.call(null,vec__9896_9930,1,null);var keys_9933 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9902,actual_type_9931,f_9909], null);var canonical_f_9934 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9901),keys_9933);dommy.core.update_event_listeners_BANG_.call(null,elem_9901,dommy.utils.dissoc_in,keys_9933);
if(cljs.core.truth_(elem_9901.removeEventListener))
{elem_9901.removeEventListener(cljs.core.name.call(null,actual_type_9931),canonical_f_9934);
} else
{elem_9901.detachEvent(cljs.core.name.call(null,actual_type_9931),canonical_f_9934);
}
{
var G__9935 = cljs.core.next.call(null,seq__9888_9924__$1);
var G__9936 = null;
var G__9937 = 0;
var G__9938 = 0;
seq__9888_9910 = G__9935;
chunk__9890_9911 = G__9936;
count__9891_9912 = G__9937;
i__9892_9913 = G__9938;
continue;
}
}
} else
{}
}
break;
}
{
var G__9939 = seq__9878_9903;
var G__9940 = chunk__9885_9904;
var G__9941 = count__9886_9905;
var G__9942 = (i__9887_9906 + 1);
seq__9878_9903 = G__9939;
chunk__9885_9904 = G__9940;
count__9886_9905 = G__9941;
i__9887_9906 = G__9942;
continue;
}
} else
{var temp__4092__auto___9943 = cljs.core.seq.call(null,seq__9878_9903);if(cljs.core.truth_(temp__4092__auto___9943))
{var seq__9878_9944__$1 = temp__4092__auto___9943;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9878_9944__$1))
{var c__4010__auto___9945 = cljs.core.chunk_first.call(null,seq__9878_9944__$1);{
var G__9946 = cljs.core.chunk_rest.call(null,seq__9878_9944__$1);
var G__9947 = c__4010__auto___9945;
var G__9948 = cljs.core.count.call(null,c__4010__auto___9945);
var G__9949 = 0;
seq__9878_9903 = G__9946;
chunk__9885_9904 = G__9947;
count__9886_9905 = G__9948;
i__9887_9906 = G__9949;
continue;
}
} else
{var vec__9897_9950 = cljs.core.first.call(null,seq__9878_9944__$1);var orig_type_9951 = cljs.core.nth.call(null,vec__9897_9950,0,null);var f_9952 = cljs.core.nth.call(null,vec__9897_9950,1,null);var seq__9879_9953 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9951,new cljs.core.PersistentArrayMap.fromArray([orig_type_9951,cljs.core.identity], true, false)));var chunk__9881_9954 = null;var count__9882_9955 = 0;var i__9883_9956 = 0;while(true){
if((i__9883_9956 < count__9882_9955))
{var vec__9898_9957 = cljs.core._nth.call(null,chunk__9881_9954,i__9883_9956);var actual_type_9958 = cljs.core.nth.call(null,vec__9898_9957,0,null);var __9959 = cljs.core.nth.call(null,vec__9898_9957,1,null);var keys_9960 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9902,actual_type_9958,f_9952], null);var canonical_f_9961 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9901),keys_9960);dommy.core.update_event_listeners_BANG_.call(null,elem_9901,dommy.utils.dissoc_in,keys_9960);
if(cljs.core.truth_(elem_9901.removeEventListener))
{elem_9901.removeEventListener(cljs.core.name.call(null,actual_type_9958),canonical_f_9961);
} else
{elem_9901.detachEvent(cljs.core.name.call(null,actual_type_9958),canonical_f_9961);
}
{
var G__9962 = seq__9879_9953;
var G__9963 = chunk__9881_9954;
var G__9964 = count__9882_9955;
var G__9965 = (i__9883_9956 + 1);
seq__9879_9953 = G__9962;
chunk__9881_9954 = G__9963;
count__9882_9955 = G__9964;
i__9883_9956 = G__9965;
continue;
}
} else
{var temp__4092__auto___9966__$1 = cljs.core.seq.call(null,seq__9879_9953);if(cljs.core.truth_(temp__4092__auto___9966__$1))
{var seq__9879_9967__$1 = temp__4092__auto___9966__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9879_9967__$1))
{var c__4010__auto___9968 = cljs.core.chunk_first.call(null,seq__9879_9967__$1);{
var G__9969 = cljs.core.chunk_rest.call(null,seq__9879_9967__$1);
var G__9970 = c__4010__auto___9968;
var G__9971 = cljs.core.count.call(null,c__4010__auto___9968);
var G__9972 = 0;
seq__9879_9953 = G__9969;
chunk__9881_9954 = G__9970;
count__9882_9955 = G__9971;
i__9883_9956 = G__9972;
continue;
}
} else
{var vec__9899_9973 = cljs.core.first.call(null,seq__9879_9967__$1);var actual_type_9974 = cljs.core.nth.call(null,vec__9899_9973,0,null);var __9975 = cljs.core.nth.call(null,vec__9899_9973,1,null);var keys_9976 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9902,actual_type_9974,f_9952], null);var canonical_f_9977 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9901),keys_9976);dommy.core.update_event_listeners_BANG_.call(null,elem_9901,dommy.utils.dissoc_in,keys_9976);
if(cljs.core.truth_(elem_9901.removeEventListener))
{elem_9901.removeEventListener(cljs.core.name.call(null,actual_type_9974),canonical_f_9977);
} else
{elem_9901.detachEvent(cljs.core.name.call(null,actual_type_9974),canonical_f_9977);
}
{
var G__9978 = cljs.core.next.call(null,seq__9879_9967__$1);
var G__9979 = null;
var G__9980 = 0;
var G__9981 = 0;
seq__9879_9953 = G__9978;
chunk__9881_9954 = G__9979;
count__9882_9955 = G__9980;
i__9883_9956 = G__9981;
continue;
}
}
} else
{}
}
break;
}
{
var G__9982 = cljs.core.next.call(null,seq__9878_9944__$1);
var G__9983 = null;
var G__9984 = 0;
var G__9985 = 0;
seq__9878_9903 = G__9982;
chunk__9885_9904 = G__9983;
count__9886_9905 = G__9984;
i__9887_9906 = G__9985;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9986){
var elem_sel = cljs.core.first(arglist__9986);
var type_fs = cljs.core.rest(arglist__9986);
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
var vec__9994_10001 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_10002 = cljs.core.nth.call(null,vec__9994_10001,0,null);var selector_10003 = cljs.core.nth.call(null,vec__9994_10001,1,null);var seq__9995_10004 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9996_10005 = null;var count__9997_10006 = 0;var i__9998_10007 = 0;while(true){
if((i__9998_10007 < count__9997_10006))
{var vec__9999_10008 = cljs.core._nth.call(null,chunk__9996_10005,i__9998_10007);var type_10009 = cljs.core.nth.call(null,vec__9999_10008,0,null);var f_10010 = cljs.core.nth.call(null,vec__9999_10008,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_10009,((function (seq__9995_10004,chunk__9996_10005,count__9997_10006,i__9998_10007,vec__9999_10008,type_10009,f_10010){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_10009,this_fn);
return f_10010.call(null,e);
});})(seq__9995_10004,chunk__9996_10005,count__9997_10006,i__9998_10007,vec__9999_10008,type_10009,f_10010))
);
{
var G__10011 = seq__9995_10004;
var G__10012 = chunk__9996_10005;
var G__10013 = count__9997_10006;
var G__10014 = (i__9998_10007 + 1);
seq__9995_10004 = G__10011;
chunk__9996_10005 = G__10012;
count__9997_10006 = G__10013;
i__9998_10007 = G__10014;
continue;
}
} else
{var temp__4092__auto___10015 = cljs.core.seq.call(null,seq__9995_10004);if(cljs.core.truth_(temp__4092__auto___10015))
{var seq__9995_10016__$1 = temp__4092__auto___10015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9995_10016__$1))
{var c__4010__auto___10017 = cljs.core.chunk_first.call(null,seq__9995_10016__$1);{
var G__10018 = cljs.core.chunk_rest.call(null,seq__9995_10016__$1);
var G__10019 = c__4010__auto___10017;
var G__10020 = cljs.core.count.call(null,c__4010__auto___10017);
var G__10021 = 0;
seq__9995_10004 = G__10018;
chunk__9996_10005 = G__10019;
count__9997_10006 = G__10020;
i__9998_10007 = G__10021;
continue;
}
} else
{var vec__10000_10022 = cljs.core.first.call(null,seq__9995_10016__$1);var type_10023 = cljs.core.nth.call(null,vec__10000_10022,0,null);var f_10024 = cljs.core.nth.call(null,vec__10000_10022,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_10023,((function (seq__9995_10004,chunk__9996_10005,count__9997_10006,i__9998_10007,vec__10000_10022,type_10023,f_10024,seq__9995_10016__$1,temp__4092__auto___10015){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_10023,this_fn);
return f_10024.call(null,e);
});})(seq__9995_10004,chunk__9996_10005,count__9997_10006,i__9998_10007,vec__10000_10022,type_10023,f_10024,seq__9995_10016__$1,temp__4092__auto___10015))
);
{
var G__10025 = cljs.core.next.call(null,seq__9995_10016__$1);
var G__10026 = null;
var G__10027 = 0;
var G__10028 = 0;
seq__9995_10004 = G__10025;
chunk__9996_10005 = G__10026;
count__9997_10006 = G__10027;
i__9998_10007 = G__10028;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__10029){
var elem_sel = cljs.core.first(arglist__10029);
var type_fs = cljs.core.rest(arglist__10029);
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
var fire_BANG___delegate = function (node,event_type,p__10030){var vec__10032 = p__10030;var update_event_BANG_ = cljs.core.nth.call(null,vec__10032,0,null);if(cljs.core.truth_(dommy.core.descendant_QMARK_.call(null,node,document.documentElement)))
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
var p__10030 = null;if (arguments.length > 2) {
  p__10030 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__10030);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__10033){
var node = cljs.core.first(arglist__10033);
arglist__10033 = cljs.core.next(arglist__10033);
var event_type = cljs.core.first(arglist__10033);
var p__10030 = cljs.core.rest(arglist__10033);
return fire_BANG___delegate(node,event_type,p__10030);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
