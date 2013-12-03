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
var append_BANG___2 = (function (parent,child){var G__14785 = dommy.template.__GT_node_like(parent);G__14785.appendChild(dommy.template.__GT_node_like(child));
return G__14785;
});
var append_BANG___3 = (function() { 
var G__14790__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__14786_14791 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__14787_14792 = null;var count__14788_14793 = 0;var i__14789_14794 = 0;while(true){
if((i__14789_14794 < count__14788_14793))
{var c_14795 = chunk__14787_14792.cljs$core$IIndexed$_nth$arity$2(null,i__14789_14794);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_14795);
{
var G__14796 = seq__14786_14791;
var G__14797 = chunk__14787_14792;
var G__14798 = count__14788_14793;
var G__14799 = (i__14789_14794 + 1);
seq__14786_14791 = G__14796;
chunk__14787_14792 = G__14797;
count__14788_14793 = G__14798;
i__14789_14794 = G__14799;
continue;
}
} else
{var temp__4092__auto___14800 = cljs.core.seq(seq__14786_14791);if(cljs.core.truth_(temp__4092__auto___14800))
{var seq__14786_14801__$1 = temp__4092__auto___14800;if(cljs.core.chunked_seq_QMARK_(seq__14786_14801__$1))
{var c__4010__auto___14802 = cljs.core.chunk_first(seq__14786_14801__$1);{
var G__14803 = cljs.core.chunk_rest(seq__14786_14801__$1);
var G__14804 = c__4010__auto___14802;
var G__14805 = cljs.core.count(c__4010__auto___14802);
var G__14806 = 0;
seq__14786_14791 = G__14803;
chunk__14787_14792 = G__14804;
count__14788_14793 = G__14805;
i__14789_14794 = G__14806;
continue;
}
} else
{var c_14807 = cljs.core.first(seq__14786_14801__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_14807);
{
var G__14808 = cljs.core.next(seq__14786_14801__$1);
var G__14809 = null;
var G__14810 = 0;
var G__14811 = 0;
seq__14786_14791 = G__14808;
chunk__14787_14792 = G__14809;
count__14788_14793 = G__14810;
i__14789_14794 = G__14811;
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
var G__14790 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14790__delegate.call(this,parent,child,more_children);};
G__14790.cljs$lang$maxFixedArity = 2;
G__14790.cljs$lang$applyTo = (function (arglist__14812){
var parent = cljs.core.first(arglist__14812);
arglist__14812 = cljs.core.next(arglist__14812);
var child = cljs.core.first(arglist__14812);
var more_children = cljs.core.rest(arglist__14812);
return G__14790__delegate(parent,child,more_children);
});
G__14790.cljs$core$IFn$_invoke$arity$variadic = G__14790__delegate;
return G__14790;
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
var G__14821__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__14817_14822 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__14818_14823 = null;var count__14819_14824 = 0;var i__14820_14825 = 0;while(true){
if((i__14820_14825 < count__14819_14824))
{var c_14826 = chunk__14818_14823.cljs$core$IIndexed$_nth$arity$2(null,i__14820_14825);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_14826);
{
var G__14827 = seq__14817_14822;
var G__14828 = chunk__14818_14823;
var G__14829 = count__14819_14824;
var G__14830 = (i__14820_14825 + 1);
seq__14817_14822 = G__14827;
chunk__14818_14823 = G__14828;
count__14819_14824 = G__14829;
i__14820_14825 = G__14830;
continue;
}
} else
{var temp__4092__auto___14831 = cljs.core.seq(seq__14817_14822);if(cljs.core.truth_(temp__4092__auto___14831))
{var seq__14817_14832__$1 = temp__4092__auto___14831;if(cljs.core.chunked_seq_QMARK_(seq__14817_14832__$1))
{var c__4010__auto___14833 = cljs.core.chunk_first(seq__14817_14832__$1);{
var G__14834 = cljs.core.chunk_rest(seq__14817_14832__$1);
var G__14835 = c__4010__auto___14833;
var G__14836 = cljs.core.count(c__4010__auto___14833);
var G__14837 = 0;
seq__14817_14822 = G__14834;
chunk__14818_14823 = G__14835;
count__14819_14824 = G__14836;
i__14820_14825 = G__14837;
continue;
}
} else
{var c_14838 = cljs.core.first(seq__14817_14832__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_14838);
{
var G__14839 = cljs.core.next(seq__14817_14832__$1);
var G__14840 = null;
var G__14841 = 0;
var G__14842 = 0;
seq__14817_14822 = G__14839;
chunk__14818_14823 = G__14840;
count__14819_14824 = G__14841;
i__14820_14825 = G__14842;
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
var G__14821 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14821__delegate.call(this,parent,child,more_children);};
G__14821.cljs$lang$maxFixedArity = 2;
G__14821.cljs$lang$applyTo = (function (arglist__14843){
var parent = cljs.core.first(arglist__14843);
arglist__14843 = cljs.core.next(arglist__14843);
var child = cljs.core.first(arglist__14843);
var more_children = cljs.core.rest(arglist__14843);
return G__14821__delegate(parent,child,more_children);
});
G__14821.cljs$core$IFn$_invoke$arity$variadic = G__14821__delegate;
return G__14821;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);var parent = other__$1.parentNode;var temp__4090__auto___14844 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___14844))
{var next_14845 = temp__4090__auto___14844;parent.insertBefore(actual_node,next_14845);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__14847 = dommy.template.__GT_node_like(parent);G__14847.innerHTML = "";
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(G__14847,node_like);
return G__14847;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like(elem);var G__14849 = elem__$1.parentNode;G__14849.removeChild(elem__$1);
return G__14849;
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
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like(template);if(!(cljs.core.contains_QMARK_(key_selectors_map,cljs.core.constant$keyword$171)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),cljs.core.constant$keyword$171))], 0)))].join('')));
}
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$171,container], null),cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14855){var vec__14856 = p__14855;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14856,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14856,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(cljs.core.constant$keyword$172.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))?(function (){if(typeof dommy.core.t14857 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t14857 = (function (v,k,vec__14856,p__14855,container,key_selectors_map,template,selector_map,meta14858){
this.v = v;
this.k = k;
this.vec__14856 = vec__14856;
this.p__14855 = p__14855;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta14858 = meta14858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t14857.cljs$lang$type = true;
dommy.core.t14857.cljs$lang$ctorStr = "dommy.core/t14857";
dommy.core.t14857.cljs$lang$ctorPrWriter = (function (this__3830__auto__,writer__3831__auto__,opt__3832__auto__){return cljs.core._write(writer__3831__auto__,"dommy.core/t14857");
});
dommy.core.t14857.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array(dommy.template.__GT_node_like(self__.container).querySelectorAll(dommy.core.selector(self__.v)));
});
dommy.core.t14857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14859){var self__ = this;
var _14859__$1 = this;return self__.meta14858;
});
dommy.core.t14857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14859,meta14858__$1){var self__ = this;
var _14859__$1 = this;return (new dommy.core.t14857(self__.v,self__.k,self__.vec__14856,self__.p__14855,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta14858__$1));
});
dommy.core.__GT_t14857 = (function __GT_t14857(v__$1,k__$1,vec__14856__$1,p__14855__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta14858){return (new dommy.core.t14857(v__$1,k__$1,vec__14856__$1,p__14855__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta14858));
});
}
return (new dommy.core.t14857(v,k,vec__14856,p__14855,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like(container).querySelector(dommy.core.selector(v)))], null);
}),key_selectors_map))], 0));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while(cljs.core.identity,cljs.core.iterate((function (p1__14860_SHARP_){return p1__14860_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like(base);var elem__$1 = dommy.template.__GT_node_like(elem);return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base__$1,selector),cljs.core.take_while((function (p1__14861_SHARP_){return !((p1__14861_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14862){var vec__14863 = p__14862;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14863,0,null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14863,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3291__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3291__auto__))
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
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$173,cljs.core.constant$keyword$175,cljs.core.constant$keyword$174,cljs.core.constant$keyword$176], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),event.target,selector);if(cljs.core.truth_((function (){var and__3279__auto__ = selected_target;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not((dommy.core.attr.cljs$core$IFn$_invoke$arity$2 ? dommy.core.attr.cljs$core$IFn$_invoke$arity$2(selected_target,cljs.core.constant$keyword$177) : dommy.core.attr.call(null,selected_target,cljs.core.constant$keyword$177)));
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14864){
var elem = cljs.core.first(arglist__14864);
arglist__14864 = cljs.core.next(arglist__14864);
var f = cljs.core.first(arglist__14864);
var args = cljs.core.rest(arglist__14864);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.truth_(cljs.core.sequential_QMARK_(elem_sel)))
{return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__14865_SHARP_){return dommy.template.__GT_node_like(cljs.core.first(p1__14865_SHARP_));
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
var vec__14889_14912 = dommy.core.elem_and_selector(elem_sel);var elem_14913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14889_14912,0,null);var selector_14914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14889_14912,1,null);var seq__14890_14915 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__14897_14916 = null;var count__14898_14917 = 0;var i__14899_14918 = 0;while(true){
if((i__14899_14918 < count__14898_14917))
{var vec__14906_14919 = chunk__14897_14916.cljs$core$IIndexed$_nth$arity$2(null,i__14899_14918);var orig_type_14920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14906_14919,0,null);var f_14921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14906_14919,1,null);var seq__14900_14922 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_14920,new cljs.core.PersistentArrayMap.fromArray([orig_type_14920,cljs.core.identity], true, false)));var chunk__14902_14923 = null;var count__14903_14924 = 0;var i__14904_14925 = 0;while(true){
if((i__14904_14925 < count__14903_14924))
{var vec__14907_14926 = chunk__14902_14923.cljs$core$IIndexed$_nth$arity$2(null,i__14904_14925);var actual_type_14927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14907_14926,0,null);var factory_14928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14907_14926,1,null);var canonical_f_14929 = (cljs.core.truth_(selector_14914)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_14913,selector_14914):cljs.core.identity).call(null,(factory_14928.cljs$core$IFn$_invoke$arity$1 ? factory_14928.cljs$core$IFn$_invoke$arity$1(f_14921) : factory_14928.call(null,f_14921)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14913,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14914,actual_type_14927,f_14921], null),canonical_f_14929], 0));
if(cljs.core.truth_(elem_14913.addEventListener))
{elem_14913.addEventListener(cljs.core.name(actual_type_14927),canonical_f_14929);
} else
{elem_14913.attachEvent(cljs.core.name(actual_type_14927),canonical_f_14929);
}
{
var G__14930 = seq__14900_14922;
var G__14931 = chunk__14902_14923;
var G__14932 = count__14903_14924;
var G__14933 = (i__14904_14925 + 1);
seq__14900_14922 = G__14930;
chunk__14902_14923 = G__14931;
count__14903_14924 = G__14932;
i__14904_14925 = G__14933;
continue;
}
} else
{var temp__4092__auto___14934 = cljs.core.seq(seq__14900_14922);if(cljs.core.truth_(temp__4092__auto___14934))
{var seq__14900_14935__$1 = temp__4092__auto___14934;if(cljs.core.chunked_seq_QMARK_(seq__14900_14935__$1))
{var c__4010__auto___14936 = cljs.core.chunk_first(seq__14900_14935__$1);{
var G__14937 = cljs.core.chunk_rest(seq__14900_14935__$1);
var G__14938 = c__4010__auto___14936;
var G__14939 = cljs.core.count(c__4010__auto___14936);
var G__14940 = 0;
seq__14900_14922 = G__14937;
chunk__14902_14923 = G__14938;
count__14903_14924 = G__14939;
i__14904_14925 = G__14940;
continue;
}
} else
{var vec__14908_14941 = cljs.core.first(seq__14900_14935__$1);var actual_type_14942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908_14941,0,null);var factory_14943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908_14941,1,null);var canonical_f_14944 = (cljs.core.truth_(selector_14914)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_14913,selector_14914):cljs.core.identity).call(null,(factory_14943.cljs$core$IFn$_invoke$arity$1 ? factory_14943.cljs$core$IFn$_invoke$arity$1(f_14921) : factory_14943.call(null,f_14921)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14913,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14914,actual_type_14942,f_14921], null),canonical_f_14944], 0));
if(cljs.core.truth_(elem_14913.addEventListener))
{elem_14913.addEventListener(cljs.core.name(actual_type_14942),canonical_f_14944);
} else
{elem_14913.attachEvent(cljs.core.name(actual_type_14942),canonical_f_14944);
}
{
var G__14945 = cljs.core.next(seq__14900_14935__$1);
var G__14946 = null;
var G__14947 = 0;
var G__14948 = 0;
seq__14900_14922 = G__14945;
chunk__14902_14923 = G__14946;
count__14903_14924 = G__14947;
i__14904_14925 = G__14948;
continue;
}
}
} else
{}
}
break;
}
{
var G__14949 = seq__14890_14915;
var G__14950 = chunk__14897_14916;
var G__14951 = count__14898_14917;
var G__14952 = (i__14899_14918 + 1);
seq__14890_14915 = G__14949;
chunk__14897_14916 = G__14950;
count__14898_14917 = G__14951;
i__14899_14918 = G__14952;
continue;
}
} else
{var temp__4092__auto___14953 = cljs.core.seq(seq__14890_14915);if(cljs.core.truth_(temp__4092__auto___14953))
{var seq__14890_14954__$1 = temp__4092__auto___14953;if(cljs.core.chunked_seq_QMARK_(seq__14890_14954__$1))
{var c__4010__auto___14955 = cljs.core.chunk_first(seq__14890_14954__$1);{
var G__14956 = cljs.core.chunk_rest(seq__14890_14954__$1);
var G__14957 = c__4010__auto___14955;
var G__14958 = cljs.core.count(c__4010__auto___14955);
var G__14959 = 0;
seq__14890_14915 = G__14956;
chunk__14897_14916 = G__14957;
count__14898_14917 = G__14958;
i__14899_14918 = G__14959;
continue;
}
} else
{var vec__14909_14960 = cljs.core.first(seq__14890_14954__$1);var orig_type_14961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909_14960,0,null);var f_14962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909_14960,1,null);var seq__14891_14963 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_14961,new cljs.core.PersistentArrayMap.fromArray([orig_type_14961,cljs.core.identity], true, false)));var chunk__14893_14964 = null;var count__14894_14965 = 0;var i__14895_14966 = 0;while(true){
if((i__14895_14966 < count__14894_14965))
{var vec__14910_14967 = chunk__14893_14964.cljs$core$IIndexed$_nth$arity$2(null,i__14895_14966);var actual_type_14968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910_14967,0,null);var factory_14969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910_14967,1,null);var canonical_f_14970 = (cljs.core.truth_(selector_14914)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_14913,selector_14914):cljs.core.identity).call(null,(factory_14969.cljs$core$IFn$_invoke$arity$1 ? factory_14969.cljs$core$IFn$_invoke$arity$1(f_14962) : factory_14969.call(null,f_14962)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14913,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14914,actual_type_14968,f_14962], null),canonical_f_14970], 0));
if(cljs.core.truth_(elem_14913.addEventListener))
{elem_14913.addEventListener(cljs.core.name(actual_type_14968),canonical_f_14970);
} else
{elem_14913.attachEvent(cljs.core.name(actual_type_14968),canonical_f_14970);
}
{
var G__14971 = seq__14891_14963;
var G__14972 = chunk__14893_14964;
var G__14973 = count__14894_14965;
var G__14974 = (i__14895_14966 + 1);
seq__14891_14963 = G__14971;
chunk__14893_14964 = G__14972;
count__14894_14965 = G__14973;
i__14895_14966 = G__14974;
continue;
}
} else
{var temp__4092__auto___14975__$1 = cljs.core.seq(seq__14891_14963);if(cljs.core.truth_(temp__4092__auto___14975__$1))
{var seq__14891_14976__$1 = temp__4092__auto___14975__$1;if(cljs.core.chunked_seq_QMARK_(seq__14891_14976__$1))
{var c__4010__auto___14977 = cljs.core.chunk_first(seq__14891_14976__$1);{
var G__14978 = cljs.core.chunk_rest(seq__14891_14976__$1);
var G__14979 = c__4010__auto___14977;
var G__14980 = cljs.core.count(c__4010__auto___14977);
var G__14981 = 0;
seq__14891_14963 = G__14978;
chunk__14893_14964 = G__14979;
count__14894_14965 = G__14980;
i__14895_14966 = G__14981;
continue;
}
} else
{var vec__14911_14982 = cljs.core.first(seq__14891_14976__$1);var actual_type_14983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14911_14982,0,null);var factory_14984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14911_14982,1,null);var canonical_f_14985 = (cljs.core.truth_(selector_14914)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_14913,selector_14914):cljs.core.identity).call(null,(factory_14984.cljs$core$IFn$_invoke$arity$1 ? factory_14984.cljs$core$IFn$_invoke$arity$1(f_14962) : factory_14984.call(null,f_14962)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14913,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14914,actual_type_14983,f_14962], null),canonical_f_14985], 0));
if(cljs.core.truth_(elem_14913.addEventListener))
{elem_14913.addEventListener(cljs.core.name(actual_type_14983),canonical_f_14985);
} else
{elem_14913.attachEvent(cljs.core.name(actual_type_14983),canonical_f_14985);
}
{
var G__14986 = cljs.core.next(seq__14891_14976__$1);
var G__14987 = null;
var G__14988 = 0;
var G__14989 = 0;
seq__14891_14963 = G__14986;
chunk__14893_14964 = G__14987;
count__14894_14965 = G__14988;
i__14895_14966 = G__14989;
continue;
}
}
} else
{}
}
break;
}
{
var G__14990 = cljs.core.next(seq__14890_14954__$1);
var G__14991 = null;
var G__14992 = 0;
var G__14993 = 0;
seq__14890_14915 = G__14990;
chunk__14897_14916 = G__14991;
count__14898_14917 = G__14992;
i__14899_14918 = G__14993;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__14994){
var elem_sel = cljs.core.first(arglist__14994);
var type_fs = cljs.core.rest(arglist__14994);
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
var vec__15018_15041 = dommy.core.elem_and_selector(elem_sel);var elem_15042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15018_15041,0,null);var selector_15043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15018_15041,1,null);var seq__15019_15044 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__15026_15045 = null;var count__15027_15046 = 0;var i__15028_15047 = 0;while(true){
if((i__15028_15047 < count__15027_15046))
{var vec__15035_15048 = chunk__15026_15045.cljs$core$IIndexed$_nth$arity$2(null,i__15028_15047);var orig_type_15049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15035_15048,0,null);var f_15050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15035_15048,1,null);var seq__15029_15051 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15049,new cljs.core.PersistentArrayMap.fromArray([orig_type_15049,cljs.core.identity], true, false)));var chunk__15031_15052 = null;var count__15032_15053 = 0;var i__15033_15054 = 0;while(true){
if((i__15033_15054 < count__15032_15053))
{var vec__15036_15055 = chunk__15031_15052.cljs$core$IIndexed$_nth$arity$2(null,i__15033_15054);var actual_type_15056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15036_15055,0,null);var __15057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15036_15055,1,null);var keys_15058 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15043,actual_type_15056,f_15050], null);var canonical_f_15059 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15042),keys_15058);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15042,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15058], 0));
if(cljs.core.truth_(elem_15042.removeEventListener))
{elem_15042.removeEventListener(cljs.core.name(actual_type_15056),canonical_f_15059);
} else
{elem_15042.detachEvent(cljs.core.name(actual_type_15056),canonical_f_15059);
}
{
var G__15060 = seq__15029_15051;
var G__15061 = chunk__15031_15052;
var G__15062 = count__15032_15053;
var G__15063 = (i__15033_15054 + 1);
seq__15029_15051 = G__15060;
chunk__15031_15052 = G__15061;
count__15032_15053 = G__15062;
i__15033_15054 = G__15063;
continue;
}
} else
{var temp__4092__auto___15064 = cljs.core.seq(seq__15029_15051);if(cljs.core.truth_(temp__4092__auto___15064))
{var seq__15029_15065__$1 = temp__4092__auto___15064;if(cljs.core.chunked_seq_QMARK_(seq__15029_15065__$1))
{var c__4010__auto___15066 = cljs.core.chunk_first(seq__15029_15065__$1);{
var G__15067 = cljs.core.chunk_rest(seq__15029_15065__$1);
var G__15068 = c__4010__auto___15066;
var G__15069 = cljs.core.count(c__4010__auto___15066);
var G__15070 = 0;
seq__15029_15051 = G__15067;
chunk__15031_15052 = G__15068;
count__15032_15053 = G__15069;
i__15033_15054 = G__15070;
continue;
}
} else
{var vec__15037_15071 = cljs.core.first(seq__15029_15065__$1);var actual_type_15072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15037_15071,0,null);var __15073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15037_15071,1,null);var keys_15074 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15043,actual_type_15072,f_15050], null);var canonical_f_15075 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15042),keys_15074);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15042,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15074], 0));
if(cljs.core.truth_(elem_15042.removeEventListener))
{elem_15042.removeEventListener(cljs.core.name(actual_type_15072),canonical_f_15075);
} else
{elem_15042.detachEvent(cljs.core.name(actual_type_15072),canonical_f_15075);
}
{
var G__15076 = cljs.core.next(seq__15029_15065__$1);
var G__15077 = null;
var G__15078 = 0;
var G__15079 = 0;
seq__15029_15051 = G__15076;
chunk__15031_15052 = G__15077;
count__15032_15053 = G__15078;
i__15033_15054 = G__15079;
continue;
}
}
} else
{}
}
break;
}
{
var G__15080 = seq__15019_15044;
var G__15081 = chunk__15026_15045;
var G__15082 = count__15027_15046;
var G__15083 = (i__15028_15047 + 1);
seq__15019_15044 = G__15080;
chunk__15026_15045 = G__15081;
count__15027_15046 = G__15082;
i__15028_15047 = G__15083;
continue;
}
} else
{var temp__4092__auto___15084 = cljs.core.seq(seq__15019_15044);if(cljs.core.truth_(temp__4092__auto___15084))
{var seq__15019_15085__$1 = temp__4092__auto___15084;if(cljs.core.chunked_seq_QMARK_(seq__15019_15085__$1))
{var c__4010__auto___15086 = cljs.core.chunk_first(seq__15019_15085__$1);{
var G__15087 = cljs.core.chunk_rest(seq__15019_15085__$1);
var G__15088 = c__4010__auto___15086;
var G__15089 = cljs.core.count(c__4010__auto___15086);
var G__15090 = 0;
seq__15019_15044 = G__15087;
chunk__15026_15045 = G__15088;
count__15027_15046 = G__15089;
i__15028_15047 = G__15090;
continue;
}
} else
{var vec__15038_15091 = cljs.core.first(seq__15019_15085__$1);var orig_type_15092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15038_15091,0,null);var f_15093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15038_15091,1,null);var seq__15020_15094 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15092,new cljs.core.PersistentArrayMap.fromArray([orig_type_15092,cljs.core.identity], true, false)));var chunk__15022_15095 = null;var count__15023_15096 = 0;var i__15024_15097 = 0;while(true){
if((i__15024_15097 < count__15023_15096))
{var vec__15039_15098 = chunk__15022_15095.cljs$core$IIndexed$_nth$arity$2(null,i__15024_15097);var actual_type_15099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15039_15098,0,null);var __15100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15039_15098,1,null);var keys_15101 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15043,actual_type_15099,f_15093], null);var canonical_f_15102 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15042),keys_15101);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15042,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15101], 0));
if(cljs.core.truth_(elem_15042.removeEventListener))
{elem_15042.removeEventListener(cljs.core.name(actual_type_15099),canonical_f_15102);
} else
{elem_15042.detachEvent(cljs.core.name(actual_type_15099),canonical_f_15102);
}
{
var G__15103 = seq__15020_15094;
var G__15104 = chunk__15022_15095;
var G__15105 = count__15023_15096;
var G__15106 = (i__15024_15097 + 1);
seq__15020_15094 = G__15103;
chunk__15022_15095 = G__15104;
count__15023_15096 = G__15105;
i__15024_15097 = G__15106;
continue;
}
} else
{var temp__4092__auto___15107__$1 = cljs.core.seq(seq__15020_15094);if(cljs.core.truth_(temp__4092__auto___15107__$1))
{var seq__15020_15108__$1 = temp__4092__auto___15107__$1;if(cljs.core.chunked_seq_QMARK_(seq__15020_15108__$1))
{var c__4010__auto___15109 = cljs.core.chunk_first(seq__15020_15108__$1);{
var G__15110 = cljs.core.chunk_rest(seq__15020_15108__$1);
var G__15111 = c__4010__auto___15109;
var G__15112 = cljs.core.count(c__4010__auto___15109);
var G__15113 = 0;
seq__15020_15094 = G__15110;
chunk__15022_15095 = G__15111;
count__15023_15096 = G__15112;
i__15024_15097 = G__15113;
continue;
}
} else
{var vec__15040_15114 = cljs.core.first(seq__15020_15108__$1);var actual_type_15115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15040_15114,0,null);var __15116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15040_15114,1,null);var keys_15117 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15043,actual_type_15115,f_15093], null);var canonical_f_15118 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15042),keys_15117);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15042,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15117], 0));
if(cljs.core.truth_(elem_15042.removeEventListener))
{elem_15042.removeEventListener(cljs.core.name(actual_type_15115),canonical_f_15118);
} else
{elem_15042.detachEvent(cljs.core.name(actual_type_15115),canonical_f_15118);
}
{
var G__15119 = cljs.core.next(seq__15020_15108__$1);
var G__15120 = null;
var G__15121 = 0;
var G__15122 = 0;
seq__15020_15094 = G__15119;
chunk__15022_15095 = G__15120;
count__15023_15096 = G__15121;
i__15024_15097 = G__15122;
continue;
}
}
} else
{}
}
break;
}
{
var G__15123 = cljs.core.next(seq__15019_15085__$1);
var G__15124 = null;
var G__15125 = 0;
var G__15126 = 0;
seq__15019_15044 = G__15123;
chunk__15026_15045 = G__15124;
count__15027_15046 = G__15125;
i__15028_15047 = G__15126;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__15127){
var elem_sel = cljs.core.first(arglist__15127);
var type_fs = cljs.core.rest(arglist__15127);
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
var vec__15135_15142 = dommy.core.elem_and_selector(elem_sel);var elem_15143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15135_15142,0,null);var selector_15144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15135_15142,1,null);var seq__15136_15145 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__15137_15146 = null;var count__15138_15147 = 0;var i__15139_15148 = 0;while(true){
if((i__15139_15148 < count__15138_15147))
{var vec__15140_15149 = chunk__15137_15146.cljs$core$IIndexed$_nth$arity$2(null,i__15139_15148);var type_15150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15140_15149,0,null);var f_15151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15140_15149,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15150,((function (seq__15136_15145,chunk__15137_15146,count__15138_15147,i__15139_15148,vec__15140_15149,type_15150,f_15151){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15150,this_fn], 0));
return (f_15151.cljs$core$IFn$_invoke$arity$1 ? f_15151.cljs$core$IFn$_invoke$arity$1(e) : f_15151.call(null,e));
});})(seq__15136_15145,chunk__15137_15146,count__15138_15147,i__15139_15148,vec__15140_15149,type_15150,f_15151))
], 0));
{
var G__15152 = seq__15136_15145;
var G__15153 = chunk__15137_15146;
var G__15154 = count__15138_15147;
var G__15155 = (i__15139_15148 + 1);
seq__15136_15145 = G__15152;
chunk__15137_15146 = G__15153;
count__15138_15147 = G__15154;
i__15139_15148 = G__15155;
continue;
}
} else
{var temp__4092__auto___15156 = cljs.core.seq(seq__15136_15145);if(cljs.core.truth_(temp__4092__auto___15156))
{var seq__15136_15157__$1 = temp__4092__auto___15156;if(cljs.core.chunked_seq_QMARK_(seq__15136_15157__$1))
{var c__4010__auto___15158 = cljs.core.chunk_first(seq__15136_15157__$1);{
var G__15159 = cljs.core.chunk_rest(seq__15136_15157__$1);
var G__15160 = c__4010__auto___15158;
var G__15161 = cljs.core.count(c__4010__auto___15158);
var G__15162 = 0;
seq__15136_15145 = G__15159;
chunk__15137_15146 = G__15160;
count__15138_15147 = G__15161;
i__15139_15148 = G__15162;
continue;
}
} else
{var vec__15141_15163 = cljs.core.first(seq__15136_15157__$1);var type_15164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15141_15163,0,null);var f_15165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15141_15163,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15164,((function (seq__15136_15145,chunk__15137_15146,count__15138_15147,i__15139_15148,vec__15141_15163,type_15164,f_15165,seq__15136_15157__$1,temp__4092__auto___15156){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15164,this_fn], 0));
return (f_15165.cljs$core$IFn$_invoke$arity$1 ? f_15165.cljs$core$IFn$_invoke$arity$1(e) : f_15165.call(null,e));
});})(seq__15136_15145,chunk__15137_15146,count__15138_15147,i__15139_15148,vec__15141_15163,type_15164,f_15165,seq__15136_15157__$1,temp__4092__auto___15156))
], 0));
{
var G__15166 = cljs.core.next(seq__15136_15157__$1);
var G__15167 = null;
var G__15168 = 0;
var G__15169 = 0;
seq__15136_15145 = G__15166;
chunk__15137_15146 = G__15167;
count__15138_15147 = G__15168;
i__15139_15148 = G__15169;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__15170){
var elem_sel = cljs.core.first(arglist__15170);
var type_fs = cljs.core.rest(arglist__15170);
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
var fire_BANG___delegate = function (node,event_type,p__15171){var vec__15173 = p__15171;var update_event_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15173,0,null);if(cljs.core.truth_(dommy.core.descendant_QMARK_(node,document.documentElement)))
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
var p__15171 = null;if (arguments.length > 2) {
  p__15171 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__15171);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__15174){
var node = cljs.core.first(arglist__15174);
arglist__15174 = cljs.core.next(arglist__15174);
var event_type = cljs.core.first(arglist__15174);
var p__15171 = cljs.core.rest(arglist__15174);
return fire_BANG___delegate(node,event_type,p__15171);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
