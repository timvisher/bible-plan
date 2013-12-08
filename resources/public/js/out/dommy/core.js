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
var append_BANG___2 = (function (parent,child){var G__14837 = dommy.template.__GT_node_like(parent);G__14837.appendChild(dommy.template.__GT_node_like(child));
return G__14837;
});
var append_BANG___3 = (function() { 
var G__14842__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__14838_14843 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__14839_14844 = null;var count__14840_14845 = 0;var i__14841_14846 = 0;while(true){
if((i__14841_14846 < count__14840_14845))
{var c_14847 = chunk__14839_14844.cljs$core$IIndexed$_nth$arity$2(null,i__14841_14846);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_14847);
{
var G__14848 = seq__14838_14843;
var G__14849 = chunk__14839_14844;
var G__14850 = count__14840_14845;
var G__14851 = (i__14841_14846 + 1);
seq__14838_14843 = G__14848;
chunk__14839_14844 = G__14849;
count__14840_14845 = G__14850;
i__14841_14846 = G__14851;
continue;
}
} else
{var temp__4092__auto___14852 = cljs.core.seq(seq__14838_14843);if(cljs.core.truth_(temp__4092__auto___14852))
{var seq__14838_14853__$1 = temp__4092__auto___14852;if(cljs.core.chunked_seq_QMARK_(seq__14838_14853__$1))
{var c__4010__auto___14854 = cljs.core.chunk_first(seq__14838_14853__$1);{
var G__14855 = cljs.core.chunk_rest(seq__14838_14853__$1);
var G__14856 = c__4010__auto___14854;
var G__14857 = cljs.core.count(c__4010__auto___14854);
var G__14858 = 0;
seq__14838_14843 = G__14855;
chunk__14839_14844 = G__14856;
count__14840_14845 = G__14857;
i__14841_14846 = G__14858;
continue;
}
} else
{var c_14859 = cljs.core.first(seq__14838_14853__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_14859);
{
var G__14860 = cljs.core.next(seq__14838_14853__$1);
var G__14861 = null;
var G__14862 = 0;
var G__14863 = 0;
seq__14838_14843 = G__14860;
chunk__14839_14844 = G__14861;
count__14840_14845 = G__14862;
i__14841_14846 = G__14863;
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
var G__14842 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14842__delegate.call(this,parent,child,more_children);};
G__14842.cljs$lang$maxFixedArity = 2;
G__14842.cljs$lang$applyTo = (function (arglist__14864){
var parent = cljs.core.first(arglist__14864);
arglist__14864 = cljs.core.next(arglist__14864);
var child = cljs.core.first(arglist__14864);
var more_children = cljs.core.rest(arglist__14864);
return G__14842__delegate(parent,child,more_children);
});
G__14842.cljs$core$IFn$_invoke$arity$variadic = G__14842__delegate;
return G__14842;
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
var G__14873__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__14869_14874 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__14870_14875 = null;var count__14871_14876 = 0;var i__14872_14877 = 0;while(true){
if((i__14872_14877 < count__14871_14876))
{var c_14878 = chunk__14870_14875.cljs$core$IIndexed$_nth$arity$2(null,i__14872_14877);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_14878);
{
var G__14879 = seq__14869_14874;
var G__14880 = chunk__14870_14875;
var G__14881 = count__14871_14876;
var G__14882 = (i__14872_14877 + 1);
seq__14869_14874 = G__14879;
chunk__14870_14875 = G__14880;
count__14871_14876 = G__14881;
i__14872_14877 = G__14882;
continue;
}
} else
{var temp__4092__auto___14883 = cljs.core.seq(seq__14869_14874);if(cljs.core.truth_(temp__4092__auto___14883))
{var seq__14869_14884__$1 = temp__4092__auto___14883;if(cljs.core.chunked_seq_QMARK_(seq__14869_14884__$1))
{var c__4010__auto___14885 = cljs.core.chunk_first(seq__14869_14884__$1);{
var G__14886 = cljs.core.chunk_rest(seq__14869_14884__$1);
var G__14887 = c__4010__auto___14885;
var G__14888 = cljs.core.count(c__4010__auto___14885);
var G__14889 = 0;
seq__14869_14874 = G__14886;
chunk__14870_14875 = G__14887;
count__14871_14876 = G__14888;
i__14872_14877 = G__14889;
continue;
}
} else
{var c_14890 = cljs.core.first(seq__14869_14884__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_14890);
{
var G__14891 = cljs.core.next(seq__14869_14884__$1);
var G__14892 = null;
var G__14893 = 0;
var G__14894 = 0;
seq__14869_14874 = G__14891;
chunk__14870_14875 = G__14892;
count__14871_14876 = G__14893;
i__14872_14877 = G__14894;
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
var G__14873 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14873__delegate.call(this,parent,child,more_children);};
G__14873.cljs$lang$maxFixedArity = 2;
G__14873.cljs$lang$applyTo = (function (arglist__14895){
var parent = cljs.core.first(arglist__14895);
arglist__14895 = cljs.core.next(arglist__14895);
var child = cljs.core.first(arglist__14895);
var more_children = cljs.core.rest(arglist__14895);
return G__14873__delegate(parent,child,more_children);
});
G__14873.cljs$core$IFn$_invoke$arity$variadic = G__14873__delegate;
return G__14873;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);var parent = other__$1.parentNode;var temp__4090__auto___14896 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___14896))
{var next_14897 = temp__4090__auto___14896;parent.insertBefore(actual_node,next_14897);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__14899 = dommy.template.__GT_node_like(parent);G__14899.innerHTML = "";
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(G__14899,node_like);
return G__14899;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like(elem);var G__14901 = elem__$1.parentNode;G__14901.removeChild(elem__$1);
return G__14901;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$171,container], null),cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14907){var vec__14908 = p__14907;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(cljs.core.constant$keyword$172.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))?(function (){if(typeof dommy.core.t14909 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t14909 = (function (v,k,vec__14908,p__14907,container,key_selectors_map,template,selector_map,meta14910){
this.v = v;
this.k = k;
this.vec__14908 = vec__14908;
this.p__14907 = p__14907;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta14910 = meta14910;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t14909.cljs$lang$type = true;
dommy.core.t14909.cljs$lang$ctorStr = "dommy.core/t14909";
dommy.core.t14909.cljs$lang$ctorPrWriter = (function (this__3830__auto__,writer__3831__auto__,opt__3832__auto__){return cljs.core._write(writer__3831__auto__,"dommy.core/t14909");
});
dommy.core.t14909.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array(dommy.template.__GT_node_like(self__.container).querySelectorAll(dommy.core.selector(self__.v)));
});
dommy.core.t14909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14911){var self__ = this;
var _14911__$1 = this;return self__.meta14910;
});
dommy.core.t14909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14911,meta14910__$1){var self__ = this;
var _14911__$1 = this;return (new dommy.core.t14909(self__.v,self__.k,self__.vec__14908,self__.p__14907,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta14910__$1));
});
dommy.core.__GT_t14909 = (function __GT_t14909(v__$1,k__$1,vec__14908__$1,p__14907__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta14910){return (new dommy.core.t14909(v__$1,k__$1,vec__14908__$1,p__14907__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta14910));
});
}
return (new dommy.core.t14909(v,k,vec__14908,p__14907,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like(container).querySelector(dommy.core.selector(v)))], null);
}),key_selectors_map))], 0));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while(cljs.core.identity,cljs.core.iterate((function (p1__14912_SHARP_){return p1__14912_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like(base);var elem__$1 = dommy.template.__GT_node_like(elem);return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base__$1,selector),cljs.core.take_while((function (p1__14913_SHARP_){return !((p1__14913_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14914){var vec__14915 = p__14914;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14915,0,null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14915,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3291__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3291__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14916){
var elem = cljs.core.first(arglist__14916);
arglist__14916 = cljs.core.next(arglist__14916);
var f = cljs.core.first(arglist__14916);
var args = cljs.core.rest(arglist__14916);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.truth_(cljs.core.sequential_QMARK_(elem_sel)))
{return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__14917_SHARP_){return dommy.template.__GT_node_like(cljs.core.first(p1__14917_SHARP_));
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
var vec__14941_14964 = dommy.core.elem_and_selector(elem_sel);var elem_14965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941_14964,0,null);var selector_14966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941_14964,1,null);var seq__14942_14967 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__14949_14968 = null;var count__14950_14969 = 0;var i__14951_14970 = 0;while(true){
if((i__14951_14970 < count__14950_14969))
{var vec__14958_14971 = chunk__14949_14968.cljs$core$IIndexed$_nth$arity$2(null,i__14951_14970);var orig_type_14972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14958_14971,0,null);var f_14973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14958_14971,1,null);var seq__14952_14974 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_14972,new cljs.core.PersistentArrayMap.fromArray([orig_type_14972,cljs.core.identity], true, false)));var chunk__14954_14975 = null;var count__14955_14976 = 0;var i__14956_14977 = 0;while(true){
if((i__14956_14977 < count__14955_14976))
{var vec__14959_14978 = chunk__14954_14975.cljs$core$IIndexed$_nth$arity$2(null,i__14956_14977);var actual_type_14979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14959_14978,0,null);var factory_14980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14959_14978,1,null);var canonical_f_14981 = (cljs.core.truth_(selector_14966)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_14965,selector_14966):cljs.core.identity).call(null,(factory_14980.cljs$core$IFn$_invoke$arity$1 ? factory_14980.cljs$core$IFn$_invoke$arity$1(f_14973) : factory_14980.call(null,f_14973)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14965,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14966,actual_type_14979,f_14973], null),canonical_f_14981], 0));
if(cljs.core.truth_(elem_14965.addEventListener))
{elem_14965.addEventListener(cljs.core.name(actual_type_14979),canonical_f_14981);
} else
{elem_14965.attachEvent(cljs.core.name(actual_type_14979),canonical_f_14981);
}
{
var G__14982 = seq__14952_14974;
var G__14983 = chunk__14954_14975;
var G__14984 = count__14955_14976;
var G__14985 = (i__14956_14977 + 1);
seq__14952_14974 = G__14982;
chunk__14954_14975 = G__14983;
count__14955_14976 = G__14984;
i__14956_14977 = G__14985;
continue;
}
} else
{var temp__4092__auto___14986 = cljs.core.seq(seq__14952_14974);if(cljs.core.truth_(temp__4092__auto___14986))
{var seq__14952_14987__$1 = temp__4092__auto___14986;if(cljs.core.chunked_seq_QMARK_(seq__14952_14987__$1))
{var c__4010__auto___14988 = cljs.core.chunk_first(seq__14952_14987__$1);{
var G__14989 = cljs.core.chunk_rest(seq__14952_14987__$1);
var G__14990 = c__4010__auto___14988;
var G__14991 = cljs.core.count(c__4010__auto___14988);
var G__14992 = 0;
seq__14952_14974 = G__14989;
chunk__14954_14975 = G__14990;
count__14955_14976 = G__14991;
i__14956_14977 = G__14992;
continue;
}
} else
{var vec__14960_14993 = cljs.core.first(seq__14952_14987__$1);var actual_type_14994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14960_14993,0,null);var factory_14995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14960_14993,1,null);var canonical_f_14996 = (cljs.core.truth_(selector_14966)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_14965,selector_14966):cljs.core.identity).call(null,(factory_14995.cljs$core$IFn$_invoke$arity$1 ? factory_14995.cljs$core$IFn$_invoke$arity$1(f_14973) : factory_14995.call(null,f_14973)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14965,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14966,actual_type_14994,f_14973], null),canonical_f_14996], 0));
if(cljs.core.truth_(elem_14965.addEventListener))
{elem_14965.addEventListener(cljs.core.name(actual_type_14994),canonical_f_14996);
} else
{elem_14965.attachEvent(cljs.core.name(actual_type_14994),canonical_f_14996);
}
{
var G__14997 = cljs.core.next(seq__14952_14987__$1);
var G__14998 = null;
var G__14999 = 0;
var G__15000 = 0;
seq__14952_14974 = G__14997;
chunk__14954_14975 = G__14998;
count__14955_14976 = G__14999;
i__14956_14977 = G__15000;
continue;
}
}
} else
{}
}
break;
}
{
var G__15001 = seq__14942_14967;
var G__15002 = chunk__14949_14968;
var G__15003 = count__14950_14969;
var G__15004 = (i__14951_14970 + 1);
seq__14942_14967 = G__15001;
chunk__14949_14968 = G__15002;
count__14950_14969 = G__15003;
i__14951_14970 = G__15004;
continue;
}
} else
{var temp__4092__auto___15005 = cljs.core.seq(seq__14942_14967);if(cljs.core.truth_(temp__4092__auto___15005))
{var seq__14942_15006__$1 = temp__4092__auto___15005;if(cljs.core.chunked_seq_QMARK_(seq__14942_15006__$1))
{var c__4010__auto___15007 = cljs.core.chunk_first(seq__14942_15006__$1);{
var G__15008 = cljs.core.chunk_rest(seq__14942_15006__$1);
var G__15009 = c__4010__auto___15007;
var G__15010 = cljs.core.count(c__4010__auto___15007);
var G__15011 = 0;
seq__14942_14967 = G__15008;
chunk__14949_14968 = G__15009;
count__14950_14969 = G__15010;
i__14951_14970 = G__15011;
continue;
}
} else
{var vec__14961_15012 = cljs.core.first(seq__14942_15006__$1);var orig_type_15013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14961_15012,0,null);var f_15014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14961_15012,1,null);var seq__14943_15015 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15013,new cljs.core.PersistentArrayMap.fromArray([orig_type_15013,cljs.core.identity], true, false)));var chunk__14945_15016 = null;var count__14946_15017 = 0;var i__14947_15018 = 0;while(true){
if((i__14947_15018 < count__14946_15017))
{var vec__14962_15019 = chunk__14945_15016.cljs$core$IIndexed$_nth$arity$2(null,i__14947_15018);var actual_type_15020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14962_15019,0,null);var factory_15021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14962_15019,1,null);var canonical_f_15022 = (cljs.core.truth_(selector_14966)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_14965,selector_14966):cljs.core.identity).call(null,(factory_15021.cljs$core$IFn$_invoke$arity$1 ? factory_15021.cljs$core$IFn$_invoke$arity$1(f_15014) : factory_15021.call(null,f_15014)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14965,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14966,actual_type_15020,f_15014], null),canonical_f_15022], 0));
if(cljs.core.truth_(elem_14965.addEventListener))
{elem_14965.addEventListener(cljs.core.name(actual_type_15020),canonical_f_15022);
} else
{elem_14965.attachEvent(cljs.core.name(actual_type_15020),canonical_f_15022);
}
{
var G__15023 = seq__14943_15015;
var G__15024 = chunk__14945_15016;
var G__15025 = count__14946_15017;
var G__15026 = (i__14947_15018 + 1);
seq__14943_15015 = G__15023;
chunk__14945_15016 = G__15024;
count__14946_15017 = G__15025;
i__14947_15018 = G__15026;
continue;
}
} else
{var temp__4092__auto___15027__$1 = cljs.core.seq(seq__14943_15015);if(cljs.core.truth_(temp__4092__auto___15027__$1))
{var seq__14943_15028__$1 = temp__4092__auto___15027__$1;if(cljs.core.chunked_seq_QMARK_(seq__14943_15028__$1))
{var c__4010__auto___15029 = cljs.core.chunk_first(seq__14943_15028__$1);{
var G__15030 = cljs.core.chunk_rest(seq__14943_15028__$1);
var G__15031 = c__4010__auto___15029;
var G__15032 = cljs.core.count(c__4010__auto___15029);
var G__15033 = 0;
seq__14943_15015 = G__15030;
chunk__14945_15016 = G__15031;
count__14946_15017 = G__15032;
i__14947_15018 = G__15033;
continue;
}
} else
{var vec__14963_15034 = cljs.core.first(seq__14943_15028__$1);var actual_type_15035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14963_15034,0,null);var factory_15036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14963_15034,1,null);var canonical_f_15037 = (cljs.core.truth_(selector_14966)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_14965,selector_14966):cljs.core.identity).call(null,(factory_15036.cljs$core$IFn$_invoke$arity$1 ? factory_15036.cljs$core$IFn$_invoke$arity$1(f_15014) : factory_15036.call(null,f_15014)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_14965,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14966,actual_type_15035,f_15014], null),canonical_f_15037], 0));
if(cljs.core.truth_(elem_14965.addEventListener))
{elem_14965.addEventListener(cljs.core.name(actual_type_15035),canonical_f_15037);
} else
{elem_14965.attachEvent(cljs.core.name(actual_type_15035),canonical_f_15037);
}
{
var G__15038 = cljs.core.next(seq__14943_15028__$1);
var G__15039 = null;
var G__15040 = 0;
var G__15041 = 0;
seq__14943_15015 = G__15038;
chunk__14945_15016 = G__15039;
count__14946_15017 = G__15040;
i__14947_15018 = G__15041;
continue;
}
}
} else
{}
}
break;
}
{
var G__15042 = cljs.core.next(seq__14942_15006__$1);
var G__15043 = null;
var G__15044 = 0;
var G__15045 = 0;
seq__14942_14967 = G__15042;
chunk__14949_14968 = G__15043;
count__14950_14969 = G__15044;
i__14951_14970 = G__15045;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__15046){
var elem_sel = cljs.core.first(arglist__15046);
var type_fs = cljs.core.rest(arglist__15046);
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
var vec__15070_15093 = dommy.core.elem_and_selector(elem_sel);var elem_15094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15070_15093,0,null);var selector_15095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15070_15093,1,null);var seq__15071_15096 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__15078_15097 = null;var count__15079_15098 = 0;var i__15080_15099 = 0;while(true){
if((i__15080_15099 < count__15079_15098))
{var vec__15087_15100 = chunk__15078_15097.cljs$core$IIndexed$_nth$arity$2(null,i__15080_15099);var orig_type_15101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15087_15100,0,null);var f_15102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15087_15100,1,null);var seq__15081_15103 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15101,new cljs.core.PersistentArrayMap.fromArray([orig_type_15101,cljs.core.identity], true, false)));var chunk__15083_15104 = null;var count__15084_15105 = 0;var i__15085_15106 = 0;while(true){
if((i__15085_15106 < count__15084_15105))
{var vec__15088_15107 = chunk__15083_15104.cljs$core$IIndexed$_nth$arity$2(null,i__15085_15106);var actual_type_15108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15088_15107,0,null);var __15109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15088_15107,1,null);var keys_15110 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15095,actual_type_15108,f_15102], null);var canonical_f_15111 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15094),keys_15110);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15094,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15110], 0));
if(cljs.core.truth_(elem_15094.removeEventListener))
{elem_15094.removeEventListener(cljs.core.name(actual_type_15108),canonical_f_15111);
} else
{elem_15094.detachEvent(cljs.core.name(actual_type_15108),canonical_f_15111);
}
{
var G__15112 = seq__15081_15103;
var G__15113 = chunk__15083_15104;
var G__15114 = count__15084_15105;
var G__15115 = (i__15085_15106 + 1);
seq__15081_15103 = G__15112;
chunk__15083_15104 = G__15113;
count__15084_15105 = G__15114;
i__15085_15106 = G__15115;
continue;
}
} else
{var temp__4092__auto___15116 = cljs.core.seq(seq__15081_15103);if(cljs.core.truth_(temp__4092__auto___15116))
{var seq__15081_15117__$1 = temp__4092__auto___15116;if(cljs.core.chunked_seq_QMARK_(seq__15081_15117__$1))
{var c__4010__auto___15118 = cljs.core.chunk_first(seq__15081_15117__$1);{
var G__15119 = cljs.core.chunk_rest(seq__15081_15117__$1);
var G__15120 = c__4010__auto___15118;
var G__15121 = cljs.core.count(c__4010__auto___15118);
var G__15122 = 0;
seq__15081_15103 = G__15119;
chunk__15083_15104 = G__15120;
count__15084_15105 = G__15121;
i__15085_15106 = G__15122;
continue;
}
} else
{var vec__15089_15123 = cljs.core.first(seq__15081_15117__$1);var actual_type_15124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15089_15123,0,null);var __15125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15089_15123,1,null);var keys_15126 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15095,actual_type_15124,f_15102], null);var canonical_f_15127 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15094),keys_15126);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15094,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15126], 0));
if(cljs.core.truth_(elem_15094.removeEventListener))
{elem_15094.removeEventListener(cljs.core.name(actual_type_15124),canonical_f_15127);
} else
{elem_15094.detachEvent(cljs.core.name(actual_type_15124),canonical_f_15127);
}
{
var G__15128 = cljs.core.next(seq__15081_15117__$1);
var G__15129 = null;
var G__15130 = 0;
var G__15131 = 0;
seq__15081_15103 = G__15128;
chunk__15083_15104 = G__15129;
count__15084_15105 = G__15130;
i__15085_15106 = G__15131;
continue;
}
}
} else
{}
}
break;
}
{
var G__15132 = seq__15071_15096;
var G__15133 = chunk__15078_15097;
var G__15134 = count__15079_15098;
var G__15135 = (i__15080_15099 + 1);
seq__15071_15096 = G__15132;
chunk__15078_15097 = G__15133;
count__15079_15098 = G__15134;
i__15080_15099 = G__15135;
continue;
}
} else
{var temp__4092__auto___15136 = cljs.core.seq(seq__15071_15096);if(cljs.core.truth_(temp__4092__auto___15136))
{var seq__15071_15137__$1 = temp__4092__auto___15136;if(cljs.core.chunked_seq_QMARK_(seq__15071_15137__$1))
{var c__4010__auto___15138 = cljs.core.chunk_first(seq__15071_15137__$1);{
var G__15139 = cljs.core.chunk_rest(seq__15071_15137__$1);
var G__15140 = c__4010__auto___15138;
var G__15141 = cljs.core.count(c__4010__auto___15138);
var G__15142 = 0;
seq__15071_15096 = G__15139;
chunk__15078_15097 = G__15140;
count__15079_15098 = G__15141;
i__15080_15099 = G__15142;
continue;
}
} else
{var vec__15090_15143 = cljs.core.first(seq__15071_15137__$1);var orig_type_15144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15090_15143,0,null);var f_15145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15090_15143,1,null);var seq__15072_15146 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15144,new cljs.core.PersistentArrayMap.fromArray([orig_type_15144,cljs.core.identity], true, false)));var chunk__15074_15147 = null;var count__15075_15148 = 0;var i__15076_15149 = 0;while(true){
if((i__15076_15149 < count__15075_15148))
{var vec__15091_15150 = chunk__15074_15147.cljs$core$IIndexed$_nth$arity$2(null,i__15076_15149);var actual_type_15151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15091_15150,0,null);var __15152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15091_15150,1,null);var keys_15153 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15095,actual_type_15151,f_15145], null);var canonical_f_15154 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15094),keys_15153);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15094,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15153], 0));
if(cljs.core.truth_(elem_15094.removeEventListener))
{elem_15094.removeEventListener(cljs.core.name(actual_type_15151),canonical_f_15154);
} else
{elem_15094.detachEvent(cljs.core.name(actual_type_15151),canonical_f_15154);
}
{
var G__15155 = seq__15072_15146;
var G__15156 = chunk__15074_15147;
var G__15157 = count__15075_15148;
var G__15158 = (i__15076_15149 + 1);
seq__15072_15146 = G__15155;
chunk__15074_15147 = G__15156;
count__15075_15148 = G__15157;
i__15076_15149 = G__15158;
continue;
}
} else
{var temp__4092__auto___15159__$1 = cljs.core.seq(seq__15072_15146);if(cljs.core.truth_(temp__4092__auto___15159__$1))
{var seq__15072_15160__$1 = temp__4092__auto___15159__$1;if(cljs.core.chunked_seq_QMARK_(seq__15072_15160__$1))
{var c__4010__auto___15161 = cljs.core.chunk_first(seq__15072_15160__$1);{
var G__15162 = cljs.core.chunk_rest(seq__15072_15160__$1);
var G__15163 = c__4010__auto___15161;
var G__15164 = cljs.core.count(c__4010__auto___15161);
var G__15165 = 0;
seq__15072_15146 = G__15162;
chunk__15074_15147 = G__15163;
count__15075_15148 = G__15164;
i__15076_15149 = G__15165;
continue;
}
} else
{var vec__15092_15166 = cljs.core.first(seq__15072_15160__$1);var actual_type_15167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15092_15166,0,null);var __15168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15092_15166,1,null);var keys_15169 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15095,actual_type_15167,f_15145], null);var canonical_f_15170 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15094),keys_15169);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15094,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15169], 0));
if(cljs.core.truth_(elem_15094.removeEventListener))
{elem_15094.removeEventListener(cljs.core.name(actual_type_15167),canonical_f_15170);
} else
{elem_15094.detachEvent(cljs.core.name(actual_type_15167),canonical_f_15170);
}
{
var G__15171 = cljs.core.next(seq__15072_15160__$1);
var G__15172 = null;
var G__15173 = 0;
var G__15174 = 0;
seq__15072_15146 = G__15171;
chunk__15074_15147 = G__15172;
count__15075_15148 = G__15173;
i__15076_15149 = G__15174;
continue;
}
}
} else
{}
}
break;
}
{
var G__15175 = cljs.core.next(seq__15071_15137__$1);
var G__15176 = null;
var G__15177 = 0;
var G__15178 = 0;
seq__15071_15096 = G__15175;
chunk__15078_15097 = G__15176;
count__15079_15098 = G__15177;
i__15080_15099 = G__15178;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__15179){
var elem_sel = cljs.core.first(arglist__15179);
var type_fs = cljs.core.rest(arglist__15179);
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
var vec__15187_15194 = dommy.core.elem_and_selector(elem_sel);var elem_15195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15187_15194,0,null);var selector_15196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15187_15194,1,null);var seq__15188_15197 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__15189_15198 = null;var count__15190_15199 = 0;var i__15191_15200 = 0;while(true){
if((i__15191_15200 < count__15190_15199))
{var vec__15192_15201 = chunk__15189_15198.cljs$core$IIndexed$_nth$arity$2(null,i__15191_15200);var type_15202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15192_15201,0,null);var f_15203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15192_15201,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15202,((function (seq__15188_15197,chunk__15189_15198,count__15190_15199,i__15191_15200,vec__15192_15201,type_15202,f_15203){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15202,this_fn], 0));
return (f_15203.cljs$core$IFn$_invoke$arity$1 ? f_15203.cljs$core$IFn$_invoke$arity$1(e) : f_15203.call(null,e));
});})(seq__15188_15197,chunk__15189_15198,count__15190_15199,i__15191_15200,vec__15192_15201,type_15202,f_15203))
], 0));
{
var G__15204 = seq__15188_15197;
var G__15205 = chunk__15189_15198;
var G__15206 = count__15190_15199;
var G__15207 = (i__15191_15200 + 1);
seq__15188_15197 = G__15204;
chunk__15189_15198 = G__15205;
count__15190_15199 = G__15206;
i__15191_15200 = G__15207;
continue;
}
} else
{var temp__4092__auto___15208 = cljs.core.seq(seq__15188_15197);if(cljs.core.truth_(temp__4092__auto___15208))
{var seq__15188_15209__$1 = temp__4092__auto___15208;if(cljs.core.chunked_seq_QMARK_(seq__15188_15209__$1))
{var c__4010__auto___15210 = cljs.core.chunk_first(seq__15188_15209__$1);{
var G__15211 = cljs.core.chunk_rest(seq__15188_15209__$1);
var G__15212 = c__4010__auto___15210;
var G__15213 = cljs.core.count(c__4010__auto___15210);
var G__15214 = 0;
seq__15188_15197 = G__15211;
chunk__15189_15198 = G__15212;
count__15190_15199 = G__15213;
i__15191_15200 = G__15214;
continue;
}
} else
{var vec__15193_15215 = cljs.core.first(seq__15188_15209__$1);var type_15216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15193_15215,0,null);var f_15217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15193_15215,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15216,((function (seq__15188_15197,chunk__15189_15198,count__15190_15199,i__15191_15200,vec__15193_15215,type_15216,f_15217,seq__15188_15209__$1,temp__4092__auto___15208){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15216,this_fn], 0));
return (f_15217.cljs$core$IFn$_invoke$arity$1 ? f_15217.cljs$core$IFn$_invoke$arity$1(e) : f_15217.call(null,e));
});})(seq__15188_15197,chunk__15189_15198,count__15190_15199,i__15191_15200,vec__15193_15215,type_15216,f_15217,seq__15188_15209__$1,temp__4092__auto___15208))
], 0));
{
var G__15218 = cljs.core.next(seq__15188_15209__$1);
var G__15219 = null;
var G__15220 = 0;
var G__15221 = 0;
seq__15188_15197 = G__15218;
chunk__15189_15198 = G__15219;
count__15190_15199 = G__15220;
i__15191_15200 = G__15221;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__15222){
var elem_sel = cljs.core.first(arglist__15222);
var type_fs = cljs.core.rest(arglist__15222);
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
var fire_BANG___delegate = function (node,event_type,p__15223){var vec__15225 = p__15223;var update_event_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15225,0,null);if(cljs.core.truth_(dommy.core.descendant_QMARK_(node,document.documentElement)))
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
var p__15223 = null;if (arguments.length > 2) {
  p__15223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__15223);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__15226){
var node = cljs.core.first(arglist__15226);
arglist__15226 = cljs.core.next(arglist__15226);
var event_type = cljs.core.first(arglist__15226);
var p__15223 = cljs.core.rest(arglist__15226);
return fire_BANG___delegate(node,event_type,p__15223);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
