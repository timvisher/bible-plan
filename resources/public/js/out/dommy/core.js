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
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like(elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like(elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like(elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3408__auto__ = elem.textContent;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
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
var append_BANG___2 = (function (parent,child){var G__10854 = dommy.template.__GT_node_like(parent);G__10854.appendChild(dommy.template.__GT_node_like(child));
return G__10854;
});
var append_BANG___3 = (function() { 
var G__10859__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__10855_10860 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__10856_10861 = null;var count__10857_10862 = 0;var i__10858_10863 = 0;while(true){
if((i__10858_10863 < count__10857_10862))
{var c_10864 = chunk__10856_10861.cljs$core$IIndexed$_nth$arity$2(null,i__10858_10863);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_10864);
{
var G__10865 = seq__10855_10860;
var G__10866 = chunk__10856_10861;
var G__10867 = count__10857_10862;
var G__10868 = (i__10858_10863 + 1);
seq__10855_10860 = G__10865;
chunk__10856_10861 = G__10866;
count__10857_10862 = G__10867;
i__10858_10863 = G__10868;
continue;
}
} else
{var temp__4092__auto___10869 = cljs.core.seq(seq__10855_10860);if(temp__4092__auto___10869)
{var seq__10855_10870__$1 = temp__4092__auto___10869;if(cljs.core.chunked_seq_QMARK_(seq__10855_10870__$1))
{var c__4150__auto___10871 = cljs.core.chunk_first(seq__10855_10870__$1);{
var G__10872 = cljs.core.chunk_rest(seq__10855_10870__$1);
var G__10873 = c__4150__auto___10871;
var G__10874 = cljs.core.count(c__4150__auto___10871);
var G__10875 = 0;
seq__10855_10860 = G__10872;
chunk__10856_10861 = G__10873;
count__10857_10862 = G__10874;
i__10858_10863 = G__10875;
continue;
}
} else
{var c_10876 = cljs.core.first(seq__10855_10870__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_10876);
{
var G__10877 = cljs.core.next(seq__10855_10870__$1);
var G__10878 = null;
var G__10879 = 0;
var G__10880 = 0;
seq__10855_10860 = G__10877;
chunk__10856_10861 = G__10878;
count__10857_10862 = G__10879;
i__10858_10863 = G__10880;
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
var G__10859 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10859__delegate.call(this,parent,child,more_children);};
G__10859.cljs$lang$maxFixedArity = 2;
G__10859.cljs$lang$applyTo = (function (arglist__10881){
var parent = cljs.core.first(arglist__10881);
arglist__10881 = cljs.core.next(arglist__10881);
var child = cljs.core.first(arglist__10881);
var more_children = cljs.core.rest(arglist__10881);
return G__10859__delegate(parent,child,more_children);
});
G__10859.cljs$core$IFn$_invoke$arity$variadic = G__10859__delegate;
return G__10859;
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
var G__10890__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__10886_10891 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__10887_10892 = null;var count__10888_10893 = 0;var i__10889_10894 = 0;while(true){
if((i__10889_10894 < count__10888_10893))
{var c_10895 = chunk__10887_10892.cljs$core$IIndexed$_nth$arity$2(null,i__10889_10894);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_10895);
{
var G__10896 = seq__10886_10891;
var G__10897 = chunk__10887_10892;
var G__10898 = count__10888_10893;
var G__10899 = (i__10889_10894 + 1);
seq__10886_10891 = G__10896;
chunk__10887_10892 = G__10897;
count__10888_10893 = G__10898;
i__10889_10894 = G__10899;
continue;
}
} else
{var temp__4092__auto___10900 = cljs.core.seq(seq__10886_10891);if(temp__4092__auto___10900)
{var seq__10886_10901__$1 = temp__4092__auto___10900;if(cljs.core.chunked_seq_QMARK_(seq__10886_10901__$1))
{var c__4150__auto___10902 = cljs.core.chunk_first(seq__10886_10901__$1);{
var G__10903 = cljs.core.chunk_rest(seq__10886_10901__$1);
var G__10904 = c__4150__auto___10902;
var G__10905 = cljs.core.count(c__4150__auto___10902);
var G__10906 = 0;
seq__10886_10891 = G__10903;
chunk__10887_10892 = G__10904;
count__10888_10893 = G__10905;
i__10889_10894 = G__10906;
continue;
}
} else
{var c_10907 = cljs.core.first(seq__10886_10901__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_10907);
{
var G__10908 = cljs.core.next(seq__10886_10901__$1);
var G__10909 = null;
var G__10910 = 0;
var G__10911 = 0;
seq__10886_10891 = G__10908;
chunk__10887_10892 = G__10909;
count__10888_10893 = G__10910;
i__10889_10894 = G__10911;
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
var G__10890 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10890__delegate.call(this,parent,child,more_children);};
G__10890.cljs$lang$maxFixedArity = 2;
G__10890.cljs$lang$applyTo = (function (arglist__10912){
var parent = cljs.core.first(arglist__10912);
arglist__10912 = cljs.core.next(arglist__10912);
var child = cljs.core.first(arglist__10912);
var more_children = cljs.core.rest(arglist__10912);
return G__10890__delegate(parent,child,more_children);
});
G__10890.cljs$core$IFn$_invoke$arity$variadic = G__10890__delegate;
return G__10890;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);var parent = other__$1.parentNode;var temp__4090__auto___10913 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___10913))
{var next_10914 = temp__4090__auto___10913;parent.insertBefore(actual_node,next_10914);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__10916 = dommy.template.__GT_node_like(parent);G__10916.innerHTML = "";
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(G__10916,node_like);
return G__10916;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like(elem);var G__10918 = elem__$1.parentNode;G__10918.removeChild(elem__$1);
return G__10918;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like(elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_(data))
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name(data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like(template);if(!(cljs.core.contains_QMARK_(key_selectors_map,cljs.core.constant$keyword$152)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),cljs.core.constant$keyword$152))], 0)))].join('')));
}
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$152,container], null),cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10924){var vec__10925 = p__10924;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10925,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10925,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))?(function (){if(typeof dommy.core.t10926 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t10926 = (function (v,k,vec__10925,p__10924,container,key_selectors_map,template,selector_map,meta10927){
this.v = v;
this.k = k;
this.vec__10925 = vec__10925;
this.p__10924 = p__10924;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta10927 = meta10927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t10926.cljs$lang$type = true;
dommy.core.t10926.cljs$lang$ctorStr = "dommy.core/t10926";
dommy.core.t10926.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"dommy.core/t10926");
});
dommy.core.t10926.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array(dommy.template.__GT_node_like(self__.container).querySelectorAll(dommy.core.selector(self__.v)));
});
dommy.core.t10926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10928){var self__ = this;
var _10928__$1 = this;return self__.meta10927;
});
dommy.core.t10926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10928,meta10927__$1){var self__ = this;
var _10928__$1 = this;return (new dommy.core.t10926(self__.v,self__.k,self__.vec__10925,self__.p__10924,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta10927__$1));
});
dommy.core.__GT_t10926 = (function __GT_t10926(v__$1,k__$1,vec__10925__$1,p__10924__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta10927){return (new dommy.core.t10926(v__$1,k__$1,vec__10925__$1,p__10924__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta10927));
});
}
return (new dommy.core.t10926(v,k,vec__10925,p__10924,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like(container).querySelector(dommy.core.selector(v)))], null);
}),key_selectors_map))], 0));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while(cljs.core.identity,cljs.core.iterate((function (p1__10929_SHARP_){return p1__10929_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like(base);var elem__$1 = dommy.template.__GT_node_like(elem);return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base__$1,selector),cljs.core.take_while((function (p1__10930_SHARP_){return !((p1__10930_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10931){var vec__10932 = p__10931;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10932,0,null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10932,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3408__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3396__auto__ = related_target;if(cljs.core.truth_(and__3396__auto__))
{return dommy.core.descendant_QMARK_(related_target,listener_target);
} else
{return and__3396__auto__;
}
})()))
{return null;
} else
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$154,cljs.core.constant$keyword$156,cljs.core.constant$keyword$155,cljs.core.constant$keyword$157], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),event.target,selector);if(cljs.core.truth_((function (){var and__3396__auto__ = selected_target;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not((dommy.core.attr.cljs$core$IFn$_invoke$arity$2 ? dommy.core.attr.cljs$core$IFn$_invoke$arity$2(selected_target,cljs.core.constant$keyword$158) : dommy.core.attr.call(null,selected_target,cljs.core.constant$keyword$158)));
} else
{return and__3396__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__3408__auto__ = dommy.template.__GT_node_like(elem).dommyEventListeners;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__10933){
var elem = cljs.core.first(arglist__10933);
arglist__10933 = cljs.core.next(arglist__10933);
var f = cljs.core.first(arglist__10933);
var args = cljs.core.rest(arglist__10933);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_(elem_sel))
{return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__10934_SHARP_){return dommy.template.__GT_node_like(cljs.core.first(p1__10934_SHARP_));
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
var vec__10958_10981 = dommy.core.elem_and_selector(elem_sel);var elem_10982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10958_10981,0,null);var selector_10983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10958_10981,1,null);var seq__10959_10984 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__10966_10985 = null;var count__10967_10986 = 0;var i__10968_10987 = 0;while(true){
if((i__10968_10987 < count__10967_10986))
{var vec__10975_10988 = chunk__10966_10985.cljs$core$IIndexed$_nth$arity$2(null,i__10968_10987);var orig_type_10989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10975_10988,0,null);var f_10990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10975_10988,1,null);var seq__10969_10991 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_10989,new cljs.core.PersistentArrayMap.fromArray([orig_type_10989,cljs.core.identity], true, false)));var chunk__10971_10992 = null;var count__10972_10993 = 0;var i__10973_10994 = 0;while(true){
if((i__10973_10994 < count__10972_10993))
{var vec__10976_10995 = chunk__10971_10992.cljs$core$IIndexed$_nth$arity$2(null,i__10973_10994);var actual_type_10996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10976_10995,0,null);var factory_10997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10976_10995,1,null);var canonical_f_10998 = (cljs.core.truth_(selector_10983)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_10982,selector_10983):cljs.core.identity).call(null,(factory_10997.cljs$core$IFn$_invoke$arity$1 ? factory_10997.cljs$core$IFn$_invoke$arity$1(f_10990) : factory_10997.call(null,f_10990)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_10982,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10983,actual_type_10996,f_10990], null),canonical_f_10998], 0));
if(cljs.core.truth_(elem_10982.addEventListener))
{elem_10982.addEventListener(cljs.core.name(actual_type_10996),canonical_f_10998);
} else
{elem_10982.attachEvent(cljs.core.name(actual_type_10996),canonical_f_10998);
}
{
var G__10999 = seq__10969_10991;
var G__11000 = chunk__10971_10992;
var G__11001 = count__10972_10993;
var G__11002 = (i__10973_10994 + 1);
seq__10969_10991 = G__10999;
chunk__10971_10992 = G__11000;
count__10972_10993 = G__11001;
i__10973_10994 = G__11002;
continue;
}
} else
{var temp__4092__auto___11003 = cljs.core.seq(seq__10969_10991);if(temp__4092__auto___11003)
{var seq__10969_11004__$1 = temp__4092__auto___11003;if(cljs.core.chunked_seq_QMARK_(seq__10969_11004__$1))
{var c__4150__auto___11005 = cljs.core.chunk_first(seq__10969_11004__$1);{
var G__11006 = cljs.core.chunk_rest(seq__10969_11004__$1);
var G__11007 = c__4150__auto___11005;
var G__11008 = cljs.core.count(c__4150__auto___11005);
var G__11009 = 0;
seq__10969_10991 = G__11006;
chunk__10971_10992 = G__11007;
count__10972_10993 = G__11008;
i__10973_10994 = G__11009;
continue;
}
} else
{var vec__10977_11010 = cljs.core.first(seq__10969_11004__$1);var actual_type_11011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10977_11010,0,null);var factory_11012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10977_11010,1,null);var canonical_f_11013 = (cljs.core.truth_(selector_10983)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_10982,selector_10983):cljs.core.identity).call(null,(factory_11012.cljs$core$IFn$_invoke$arity$1 ? factory_11012.cljs$core$IFn$_invoke$arity$1(f_10990) : factory_11012.call(null,f_10990)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_10982,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10983,actual_type_11011,f_10990], null),canonical_f_11013], 0));
if(cljs.core.truth_(elem_10982.addEventListener))
{elem_10982.addEventListener(cljs.core.name(actual_type_11011),canonical_f_11013);
} else
{elem_10982.attachEvent(cljs.core.name(actual_type_11011),canonical_f_11013);
}
{
var G__11014 = cljs.core.next(seq__10969_11004__$1);
var G__11015 = null;
var G__11016 = 0;
var G__11017 = 0;
seq__10969_10991 = G__11014;
chunk__10971_10992 = G__11015;
count__10972_10993 = G__11016;
i__10973_10994 = G__11017;
continue;
}
}
} else
{}
}
break;
}
{
var G__11018 = seq__10959_10984;
var G__11019 = chunk__10966_10985;
var G__11020 = count__10967_10986;
var G__11021 = (i__10968_10987 + 1);
seq__10959_10984 = G__11018;
chunk__10966_10985 = G__11019;
count__10967_10986 = G__11020;
i__10968_10987 = G__11021;
continue;
}
} else
{var temp__4092__auto___11022 = cljs.core.seq(seq__10959_10984);if(temp__4092__auto___11022)
{var seq__10959_11023__$1 = temp__4092__auto___11022;if(cljs.core.chunked_seq_QMARK_(seq__10959_11023__$1))
{var c__4150__auto___11024 = cljs.core.chunk_first(seq__10959_11023__$1);{
var G__11025 = cljs.core.chunk_rest(seq__10959_11023__$1);
var G__11026 = c__4150__auto___11024;
var G__11027 = cljs.core.count(c__4150__auto___11024);
var G__11028 = 0;
seq__10959_10984 = G__11025;
chunk__10966_10985 = G__11026;
count__10967_10986 = G__11027;
i__10968_10987 = G__11028;
continue;
}
} else
{var vec__10978_11029 = cljs.core.first(seq__10959_11023__$1);var orig_type_11030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10978_11029,0,null);var f_11031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10978_11029,1,null);var seq__10960_11032 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_11030,new cljs.core.PersistentArrayMap.fromArray([orig_type_11030,cljs.core.identity], true, false)));var chunk__10962_11033 = null;var count__10963_11034 = 0;var i__10964_11035 = 0;while(true){
if((i__10964_11035 < count__10963_11034))
{var vec__10979_11036 = chunk__10962_11033.cljs$core$IIndexed$_nth$arity$2(null,i__10964_11035);var actual_type_11037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10979_11036,0,null);var factory_11038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10979_11036,1,null);var canonical_f_11039 = (cljs.core.truth_(selector_10983)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_10982,selector_10983):cljs.core.identity).call(null,(factory_11038.cljs$core$IFn$_invoke$arity$1 ? factory_11038.cljs$core$IFn$_invoke$arity$1(f_11031) : factory_11038.call(null,f_11031)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_10982,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10983,actual_type_11037,f_11031], null),canonical_f_11039], 0));
if(cljs.core.truth_(elem_10982.addEventListener))
{elem_10982.addEventListener(cljs.core.name(actual_type_11037),canonical_f_11039);
} else
{elem_10982.attachEvent(cljs.core.name(actual_type_11037),canonical_f_11039);
}
{
var G__11040 = seq__10960_11032;
var G__11041 = chunk__10962_11033;
var G__11042 = count__10963_11034;
var G__11043 = (i__10964_11035 + 1);
seq__10960_11032 = G__11040;
chunk__10962_11033 = G__11041;
count__10963_11034 = G__11042;
i__10964_11035 = G__11043;
continue;
}
} else
{var temp__4092__auto___11044__$1 = cljs.core.seq(seq__10960_11032);if(temp__4092__auto___11044__$1)
{var seq__10960_11045__$1 = temp__4092__auto___11044__$1;if(cljs.core.chunked_seq_QMARK_(seq__10960_11045__$1))
{var c__4150__auto___11046 = cljs.core.chunk_first(seq__10960_11045__$1);{
var G__11047 = cljs.core.chunk_rest(seq__10960_11045__$1);
var G__11048 = c__4150__auto___11046;
var G__11049 = cljs.core.count(c__4150__auto___11046);
var G__11050 = 0;
seq__10960_11032 = G__11047;
chunk__10962_11033 = G__11048;
count__10963_11034 = G__11049;
i__10964_11035 = G__11050;
continue;
}
} else
{var vec__10980_11051 = cljs.core.first(seq__10960_11045__$1);var actual_type_11052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10980_11051,0,null);var factory_11053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10980_11051,1,null);var canonical_f_11054 = (cljs.core.truth_(selector_10983)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_10982,selector_10983):cljs.core.identity).call(null,(factory_11053.cljs$core$IFn$_invoke$arity$1 ? factory_11053.cljs$core$IFn$_invoke$arity$1(f_11031) : factory_11053.call(null,f_11031)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_10982,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10983,actual_type_11052,f_11031], null),canonical_f_11054], 0));
if(cljs.core.truth_(elem_10982.addEventListener))
{elem_10982.addEventListener(cljs.core.name(actual_type_11052),canonical_f_11054);
} else
{elem_10982.attachEvent(cljs.core.name(actual_type_11052),canonical_f_11054);
}
{
var G__11055 = cljs.core.next(seq__10960_11045__$1);
var G__11056 = null;
var G__11057 = 0;
var G__11058 = 0;
seq__10960_11032 = G__11055;
chunk__10962_11033 = G__11056;
count__10963_11034 = G__11057;
i__10964_11035 = G__11058;
continue;
}
}
} else
{}
}
break;
}
{
var G__11059 = cljs.core.next(seq__10959_11023__$1);
var G__11060 = null;
var G__11061 = 0;
var G__11062 = 0;
seq__10959_10984 = G__11059;
chunk__10966_10985 = G__11060;
count__10967_10986 = G__11061;
i__10968_10987 = G__11062;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__11063){
var elem_sel = cljs.core.first(arglist__11063);
var type_fs = cljs.core.rest(arglist__11063);
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
var vec__11087_11110 = dommy.core.elem_and_selector(elem_sel);var elem_11111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11087_11110,0,null);var selector_11112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11087_11110,1,null);var seq__11088_11113 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__11095_11114 = null;var count__11096_11115 = 0;var i__11097_11116 = 0;while(true){
if((i__11097_11116 < count__11096_11115))
{var vec__11104_11117 = chunk__11095_11114.cljs$core$IIndexed$_nth$arity$2(null,i__11097_11116);var orig_type_11118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11104_11117,0,null);var f_11119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11104_11117,1,null);var seq__11098_11120 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_11118,new cljs.core.PersistentArrayMap.fromArray([orig_type_11118,cljs.core.identity], true, false)));var chunk__11100_11121 = null;var count__11101_11122 = 0;var i__11102_11123 = 0;while(true){
if((i__11102_11123 < count__11101_11122))
{var vec__11105_11124 = chunk__11100_11121.cljs$core$IIndexed$_nth$arity$2(null,i__11102_11123);var actual_type_11125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11105_11124,0,null);var __11126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11105_11124,1,null);var keys_11127 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11112,actual_type_11125,f_11119], null);var canonical_f_11128 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_11111),keys_11127);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_11111,dommy.utils.dissoc_in,cljs.core.array_seq([keys_11127], 0));
if(cljs.core.truth_(elem_11111.removeEventListener))
{elem_11111.removeEventListener(cljs.core.name(actual_type_11125),canonical_f_11128);
} else
{elem_11111.detachEvent(cljs.core.name(actual_type_11125),canonical_f_11128);
}
{
var G__11129 = seq__11098_11120;
var G__11130 = chunk__11100_11121;
var G__11131 = count__11101_11122;
var G__11132 = (i__11102_11123 + 1);
seq__11098_11120 = G__11129;
chunk__11100_11121 = G__11130;
count__11101_11122 = G__11131;
i__11102_11123 = G__11132;
continue;
}
} else
{var temp__4092__auto___11133 = cljs.core.seq(seq__11098_11120);if(temp__4092__auto___11133)
{var seq__11098_11134__$1 = temp__4092__auto___11133;if(cljs.core.chunked_seq_QMARK_(seq__11098_11134__$1))
{var c__4150__auto___11135 = cljs.core.chunk_first(seq__11098_11134__$1);{
var G__11136 = cljs.core.chunk_rest(seq__11098_11134__$1);
var G__11137 = c__4150__auto___11135;
var G__11138 = cljs.core.count(c__4150__auto___11135);
var G__11139 = 0;
seq__11098_11120 = G__11136;
chunk__11100_11121 = G__11137;
count__11101_11122 = G__11138;
i__11102_11123 = G__11139;
continue;
}
} else
{var vec__11106_11140 = cljs.core.first(seq__11098_11134__$1);var actual_type_11141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11106_11140,0,null);var __11142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11106_11140,1,null);var keys_11143 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11112,actual_type_11141,f_11119], null);var canonical_f_11144 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_11111),keys_11143);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_11111,dommy.utils.dissoc_in,cljs.core.array_seq([keys_11143], 0));
if(cljs.core.truth_(elem_11111.removeEventListener))
{elem_11111.removeEventListener(cljs.core.name(actual_type_11141),canonical_f_11144);
} else
{elem_11111.detachEvent(cljs.core.name(actual_type_11141),canonical_f_11144);
}
{
var G__11145 = cljs.core.next(seq__11098_11134__$1);
var G__11146 = null;
var G__11147 = 0;
var G__11148 = 0;
seq__11098_11120 = G__11145;
chunk__11100_11121 = G__11146;
count__11101_11122 = G__11147;
i__11102_11123 = G__11148;
continue;
}
}
} else
{}
}
break;
}
{
var G__11149 = seq__11088_11113;
var G__11150 = chunk__11095_11114;
var G__11151 = count__11096_11115;
var G__11152 = (i__11097_11116 + 1);
seq__11088_11113 = G__11149;
chunk__11095_11114 = G__11150;
count__11096_11115 = G__11151;
i__11097_11116 = G__11152;
continue;
}
} else
{var temp__4092__auto___11153 = cljs.core.seq(seq__11088_11113);if(temp__4092__auto___11153)
{var seq__11088_11154__$1 = temp__4092__auto___11153;if(cljs.core.chunked_seq_QMARK_(seq__11088_11154__$1))
{var c__4150__auto___11155 = cljs.core.chunk_first(seq__11088_11154__$1);{
var G__11156 = cljs.core.chunk_rest(seq__11088_11154__$1);
var G__11157 = c__4150__auto___11155;
var G__11158 = cljs.core.count(c__4150__auto___11155);
var G__11159 = 0;
seq__11088_11113 = G__11156;
chunk__11095_11114 = G__11157;
count__11096_11115 = G__11158;
i__11097_11116 = G__11159;
continue;
}
} else
{var vec__11107_11160 = cljs.core.first(seq__11088_11154__$1);var orig_type_11161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11107_11160,0,null);var f_11162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11107_11160,1,null);var seq__11089_11163 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_11161,new cljs.core.PersistentArrayMap.fromArray([orig_type_11161,cljs.core.identity], true, false)));var chunk__11091_11164 = null;var count__11092_11165 = 0;var i__11093_11166 = 0;while(true){
if((i__11093_11166 < count__11092_11165))
{var vec__11108_11167 = chunk__11091_11164.cljs$core$IIndexed$_nth$arity$2(null,i__11093_11166);var actual_type_11168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11108_11167,0,null);var __11169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11108_11167,1,null);var keys_11170 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11112,actual_type_11168,f_11162], null);var canonical_f_11171 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_11111),keys_11170);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_11111,dommy.utils.dissoc_in,cljs.core.array_seq([keys_11170], 0));
if(cljs.core.truth_(elem_11111.removeEventListener))
{elem_11111.removeEventListener(cljs.core.name(actual_type_11168),canonical_f_11171);
} else
{elem_11111.detachEvent(cljs.core.name(actual_type_11168),canonical_f_11171);
}
{
var G__11172 = seq__11089_11163;
var G__11173 = chunk__11091_11164;
var G__11174 = count__11092_11165;
var G__11175 = (i__11093_11166 + 1);
seq__11089_11163 = G__11172;
chunk__11091_11164 = G__11173;
count__11092_11165 = G__11174;
i__11093_11166 = G__11175;
continue;
}
} else
{var temp__4092__auto___11176__$1 = cljs.core.seq(seq__11089_11163);if(temp__4092__auto___11176__$1)
{var seq__11089_11177__$1 = temp__4092__auto___11176__$1;if(cljs.core.chunked_seq_QMARK_(seq__11089_11177__$1))
{var c__4150__auto___11178 = cljs.core.chunk_first(seq__11089_11177__$1);{
var G__11179 = cljs.core.chunk_rest(seq__11089_11177__$1);
var G__11180 = c__4150__auto___11178;
var G__11181 = cljs.core.count(c__4150__auto___11178);
var G__11182 = 0;
seq__11089_11163 = G__11179;
chunk__11091_11164 = G__11180;
count__11092_11165 = G__11181;
i__11093_11166 = G__11182;
continue;
}
} else
{var vec__11109_11183 = cljs.core.first(seq__11089_11177__$1);var actual_type_11184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11109_11183,0,null);var __11185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11109_11183,1,null);var keys_11186 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11112,actual_type_11184,f_11162], null);var canonical_f_11187 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_11111),keys_11186);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_11111,dommy.utils.dissoc_in,cljs.core.array_seq([keys_11186], 0));
if(cljs.core.truth_(elem_11111.removeEventListener))
{elem_11111.removeEventListener(cljs.core.name(actual_type_11184),canonical_f_11187);
} else
{elem_11111.detachEvent(cljs.core.name(actual_type_11184),canonical_f_11187);
}
{
var G__11188 = cljs.core.next(seq__11089_11177__$1);
var G__11189 = null;
var G__11190 = 0;
var G__11191 = 0;
seq__11089_11163 = G__11188;
chunk__11091_11164 = G__11189;
count__11092_11165 = G__11190;
i__11093_11166 = G__11191;
continue;
}
}
} else
{}
}
break;
}
{
var G__11192 = cljs.core.next(seq__11088_11154__$1);
var G__11193 = null;
var G__11194 = 0;
var G__11195 = 0;
seq__11088_11113 = G__11192;
chunk__11095_11114 = G__11193;
count__11096_11115 = G__11194;
i__11097_11116 = G__11195;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11196){
var elem_sel = cljs.core.first(arglist__11196);
var type_fs = cljs.core.rest(arglist__11196);
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
var vec__11204_11211 = dommy.core.elem_and_selector(elem_sel);var elem_11212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11204_11211,0,null);var selector_11213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11204_11211,1,null);var seq__11205_11214 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__11206_11215 = null;var count__11207_11216 = 0;var i__11208_11217 = 0;while(true){
if((i__11208_11217 < count__11207_11216))
{var vec__11209_11218 = chunk__11206_11215.cljs$core$IIndexed$_nth$arity$2(null,i__11208_11217);var type_11219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11209_11218,0,null);var f_11220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11209_11218,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_11219,((function (seq__11205_11214,chunk__11206_11215,count__11207_11216,i__11208_11217,vec__11209_11218,type_11219,f_11220){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_11219,this_fn], 0));
return (f_11220.cljs$core$IFn$_invoke$arity$1 ? f_11220.cljs$core$IFn$_invoke$arity$1(e) : f_11220.call(null,e));
});})(seq__11205_11214,chunk__11206_11215,count__11207_11216,i__11208_11217,vec__11209_11218,type_11219,f_11220))
], 0));
{
var G__11221 = seq__11205_11214;
var G__11222 = chunk__11206_11215;
var G__11223 = count__11207_11216;
var G__11224 = (i__11208_11217 + 1);
seq__11205_11214 = G__11221;
chunk__11206_11215 = G__11222;
count__11207_11216 = G__11223;
i__11208_11217 = G__11224;
continue;
}
} else
{var temp__4092__auto___11225 = cljs.core.seq(seq__11205_11214);if(temp__4092__auto___11225)
{var seq__11205_11226__$1 = temp__4092__auto___11225;if(cljs.core.chunked_seq_QMARK_(seq__11205_11226__$1))
{var c__4150__auto___11227 = cljs.core.chunk_first(seq__11205_11226__$1);{
var G__11228 = cljs.core.chunk_rest(seq__11205_11226__$1);
var G__11229 = c__4150__auto___11227;
var G__11230 = cljs.core.count(c__4150__auto___11227);
var G__11231 = 0;
seq__11205_11214 = G__11228;
chunk__11206_11215 = G__11229;
count__11207_11216 = G__11230;
i__11208_11217 = G__11231;
continue;
}
} else
{var vec__11210_11232 = cljs.core.first(seq__11205_11226__$1);var type_11233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11210_11232,0,null);var f_11234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11210_11232,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_11233,((function (seq__11205_11214,chunk__11206_11215,count__11207_11216,i__11208_11217,vec__11210_11232,type_11233,f_11234,seq__11205_11226__$1,temp__4092__auto___11225){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_11233,this_fn], 0));
return (f_11234.cljs$core$IFn$_invoke$arity$1 ? f_11234.cljs$core$IFn$_invoke$arity$1(e) : f_11234.call(null,e));
});})(seq__11205_11214,chunk__11206_11215,count__11207_11216,i__11208_11217,vec__11210_11232,type_11233,f_11234,seq__11205_11226__$1,temp__4092__auto___11225))
], 0));
{
var G__11235 = cljs.core.next(seq__11205_11226__$1);
var G__11236 = null;
var G__11237 = 0;
var G__11238 = 0;
seq__11205_11214 = G__11235;
chunk__11206_11215 = G__11236;
count__11207_11216 = G__11237;
i__11208_11217 = G__11238;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11239){
var elem_sel = cljs.core.first(arglist__11239);
var type_fs = cljs.core.rest(arglist__11239);
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
var fire_BANG___delegate = function (node,event_type,p__11240){var vec__11242 = p__11240;var update_event_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11242,0,null);if(dommy.core.descendant_QMARK_(node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))], 0)))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3408__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
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
var p__11240 = null;if (arguments.length > 2) {
  p__11240 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__11240);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__11243){
var node = cljs.core.first(arglist__11243);
arglist__11243 = cljs.core.next(arglist__11243);
var event_type = cljs.core.first(arglist__11243);
var p__11240 = cljs.core.rest(arglist__11243);
return fire_BANG___delegate(node,event_type,p__11240);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
