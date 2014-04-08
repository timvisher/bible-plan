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
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like(elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like(elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like(elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3481__auto__ = elem.textContent;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
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
var append_BANG___2 = (function (parent,child){var G__11058 = dommy.template.__GT_node_like(parent);G__11058.appendChild(dommy.template.__GT_node_like(child));
return G__11058;
});
var append_BANG___3 = (function() { 
var G__11063__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__11059_11064 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__11060_11065 = null;var count__11061_11066 = 0;var i__11062_11067 = 0;while(true){
if((i__11062_11067 < count__11061_11066))
{var c_11068 = chunk__11060_11065.cljs$core$IIndexed$_nth$arity$2(null,i__11062_11067);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_11068);
{
var G__11069 = seq__11059_11064;
var G__11070 = chunk__11060_11065;
var G__11071 = count__11061_11066;
var G__11072 = (i__11062_11067 + 1);
seq__11059_11064 = G__11069;
chunk__11060_11065 = G__11070;
count__11061_11066 = G__11071;
i__11062_11067 = G__11072;
continue;
}
} else
{var temp__4126__auto___11073 = cljs.core.seq(seq__11059_11064);if(temp__4126__auto___11073)
{var seq__11059_11074__$1 = temp__4126__auto___11073;if(cljs.core.chunked_seq_QMARK_(seq__11059_11074__$1))
{var c__4229__auto___11075 = cljs.core.chunk_first(seq__11059_11074__$1);{
var G__11076 = cljs.core.chunk_rest(seq__11059_11074__$1);
var G__11077 = c__4229__auto___11075;
var G__11078 = cljs.core.count(c__4229__auto___11075);
var G__11079 = 0;
seq__11059_11064 = G__11076;
chunk__11060_11065 = G__11077;
count__11061_11066 = G__11078;
i__11062_11067 = G__11079;
continue;
}
} else
{var c_11080 = cljs.core.first(seq__11059_11074__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_11080);
{
var G__11081 = cljs.core.next(seq__11059_11074__$1);
var G__11082 = null;
var G__11083 = 0;
var G__11084 = 0;
seq__11059_11064 = G__11081;
chunk__11060_11065 = G__11082;
count__11061_11066 = G__11083;
i__11062_11067 = G__11084;
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
var G__11063 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11063__delegate.call(this,parent,child,more_children);};
G__11063.cljs$lang$maxFixedArity = 2;
G__11063.cljs$lang$applyTo = (function (arglist__11085){
var parent = cljs.core.first(arglist__11085);
arglist__11085 = cljs.core.next(arglist__11085);
var child = cljs.core.first(arglist__11085);
var more_children = cljs.core.rest(arglist__11085);
return G__11063__delegate(parent,child,more_children);
});
G__11063.cljs$core$IFn$_invoke$arity$variadic = G__11063__delegate;
return G__11063;
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
var G__11094__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__11090_11095 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__11091_11096 = null;var count__11092_11097 = 0;var i__11093_11098 = 0;while(true){
if((i__11093_11098 < count__11092_11097))
{var c_11099 = chunk__11091_11096.cljs$core$IIndexed$_nth$arity$2(null,i__11093_11098);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_11099);
{
var G__11100 = seq__11090_11095;
var G__11101 = chunk__11091_11096;
var G__11102 = count__11092_11097;
var G__11103 = (i__11093_11098 + 1);
seq__11090_11095 = G__11100;
chunk__11091_11096 = G__11101;
count__11092_11097 = G__11102;
i__11093_11098 = G__11103;
continue;
}
} else
{var temp__4126__auto___11104 = cljs.core.seq(seq__11090_11095);if(temp__4126__auto___11104)
{var seq__11090_11105__$1 = temp__4126__auto___11104;if(cljs.core.chunked_seq_QMARK_(seq__11090_11105__$1))
{var c__4229__auto___11106 = cljs.core.chunk_first(seq__11090_11105__$1);{
var G__11107 = cljs.core.chunk_rest(seq__11090_11105__$1);
var G__11108 = c__4229__auto___11106;
var G__11109 = cljs.core.count(c__4229__auto___11106);
var G__11110 = 0;
seq__11090_11095 = G__11107;
chunk__11091_11096 = G__11108;
count__11092_11097 = G__11109;
i__11093_11098 = G__11110;
continue;
}
} else
{var c_11111 = cljs.core.first(seq__11090_11105__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_11111);
{
var G__11112 = cljs.core.next(seq__11090_11105__$1);
var G__11113 = null;
var G__11114 = 0;
var G__11115 = 0;
seq__11090_11095 = G__11112;
chunk__11091_11096 = G__11113;
count__11092_11097 = G__11114;
i__11093_11098 = G__11115;
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
var G__11094 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11094__delegate.call(this,parent,child,more_children);};
G__11094.cljs$lang$maxFixedArity = 2;
G__11094.cljs$lang$applyTo = (function (arglist__11116){
var parent = cljs.core.first(arglist__11116);
arglist__11116 = cljs.core.next(arglist__11116);
var child = cljs.core.first(arglist__11116);
var more_children = cljs.core.rest(arglist__11116);
return G__11094__delegate(parent,child,more_children);
});
G__11094.cljs$core$IFn$_invoke$arity$variadic = G__11094__delegate;
return G__11094;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);var parent = other__$1.parentNode;var temp__4124__auto___11117 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___11117))
{var next_11118 = temp__4124__auto___11117;parent.insertBefore(actual_node,next_11118);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__11120 = dommy.template.__GT_node_like(parent);G__11120.innerHTML = "";
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(G__11120,node_like);
return G__11120;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like(elem);var G__11122 = elem__$1.parentNode;G__11122.removeChild(elem__$1);
return G__11122;
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
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like(template);if(!(cljs.core.contains_QMARK_(key_selectors_map,cljs.core.constant$keyword$149)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),cljs.core.constant$keyword$149))], 0)))].join('')));
}
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$149,container], null),cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (container){
return (function (p__11128){var vec__11129 = p__11128;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11129,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11129,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))?(function (){if(typeof dommy.core.t11130 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t11130 = (function (v,k,vec__11129,p__11128,container,key_selectors_map,template,selector_map,meta11131){
this.v = v;
this.k = k;
this.vec__11129 = vec__11129;
this.p__11128 = p__11128;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta11131 = meta11131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t11130.cljs$lang$type = true;
dommy.core.t11130.cljs$lang$ctorStr = "dommy.core/t11130";
dommy.core.t11130.cljs$lang$ctorPrWriter = ((function (vec__11129,k,v,container){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write(writer__4049__auto__,"dommy.core/t11130");
});})(vec__11129,k,v,container))
;
dommy.core.t11130.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__11129,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array(dommy.template.__GT_node_like(self__.container).querySelectorAll(dommy.core.selector(self__.v)));
});})(vec__11129,k,v,container))
;
dommy.core.t11130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11129,k,v,container){
return (function (_11132){var self__ = this;
var _11132__$1 = this;return self__.meta11131;
});})(vec__11129,k,v,container))
;
dommy.core.t11130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11129,k,v,container){
return (function (_11132,meta11131__$1){var self__ = this;
var _11132__$1 = this;return (new dommy.core.t11130(self__.v,self__.k,self__.vec__11129,self__.p__11128,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta11131__$1));
});})(vec__11129,k,v,container))
;
dommy.core.__GT_t11130 = ((function (vec__11129,k,v,container){
return (function __GT_t11130(v__$1,k__$1,vec__11129__$1,p__11128__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11131){return (new dommy.core.t11130(v__$1,k__$1,vec__11129__$1,p__11128__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11131));
});})(vec__11129,k,v,container))
;
}
return (new dommy.core.t11130(v,k,vec__11129,p__11128,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like(container).querySelector(dommy.core.selector(v)))], null);
});})(container))
,key_selectors_map))], 0));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while(cljs.core.identity,cljs.core.iterate((function (p1__11133_SHARP_){return p1__11133_SHARP_.parentNode;
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
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array(dommy.template.__GT_node_like(dommy.template.__GT_node_like(base)).querySelectorAll(dommy.core.selector(selector)));return ((function (matches){
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
var closest__2 = (function (elem,selector){return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1(selector),dommy.core.ancestor_nodes(dommy.template.__GT_node_like(elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like(base);var elem__$1 = dommy.template.__GT_node_like(elem);return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base__$1,selector),cljs.core.take_while(((function (base__$1,elem__$1){
return (function (p1__11134_SHARP_){return !((p1__11134_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes(elem__$1))));
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
dommy.core.special_listener_makers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11135){var vec__11136 = p__11135;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,0,null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11136,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__11136,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__11136,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3481__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3469__auto__ = related_target;if(cljs.core.truth_(and__3469__auto__))
{return dommy.core.descendant_QMARK_(related_target,listener_target);
} else
{return and__3469__auto__;
}
})()))
{return null;
} else
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
;})(vec__11136,special_mouse_event,real_mouse_event))
});})(vec__11136,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,cljs.core.constant$keyword$153,cljs.core.constant$keyword$152,cljs.core.constant$keyword$154], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),event.target,selector);if(cljs.core.truth_((function (){var and__3469__auto__ = selected_target;if(cljs.core.truth_(and__3469__auto__))
{return cljs.core.not((dommy.core.attr.cljs$core$IFn$_invoke$arity$2 ? dommy.core.attr.cljs$core$IFn$_invoke$arity$2(selected_target,cljs.core.constant$keyword$155) : dommy.core.attr.call(null,selected_target,cljs.core.constant$keyword$155)));
} else
{return and__3469__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__3481__auto__ = dommy.template.__GT_node_like(elem).dommyEventListeners;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__11137){
var elem = cljs.core.first(arglist__11137);
arglist__11137 = cljs.core.next(arglist__11137);
var f = cljs.core.first(arglist__11137);
var args = cljs.core.rest(arglist__11137);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_(elem_sel))
{return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__11138_SHARP_){return dommy.template.__GT_node_like(cljs.core.first(p1__11138_SHARP_));
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
var vec__11162_11185 = dommy.core.elem_and_selector(elem_sel);var elem_11186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11162_11185,0,null);var selector_11187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11162_11185,1,null);var seq__11163_11188 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__11170_11189 = null;var count__11171_11190 = 0;var i__11172_11191 = 0;while(true){
if((i__11172_11191 < count__11171_11190))
{var vec__11179_11192 = chunk__11170_11189.cljs$core$IIndexed$_nth$arity$2(null,i__11172_11191);var orig_type_11193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11179_11192,0,null);var f_11194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11179_11192,1,null);var seq__11173_11195 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_11193,new cljs.core.PersistentArrayMap.fromArray([orig_type_11193,cljs.core.identity], true, false)));var chunk__11175_11196 = null;var count__11176_11197 = 0;var i__11177_11198 = 0;while(true){
if((i__11177_11198 < count__11176_11197))
{var vec__11180_11199 = chunk__11175_11196.cljs$core$IIndexed$_nth$arity$2(null,i__11177_11198);var actual_type_11200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11180_11199,0,null);var factory_11201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11180_11199,1,null);var canonical_f_11202 = (cljs.core.truth_(selector_11187)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_11186,selector_11187):cljs.core.identity).call(null,(factory_11201.cljs$core$IFn$_invoke$arity$1 ? factory_11201.cljs$core$IFn$_invoke$arity$1(f_11194) : factory_11201.call(null,f_11194)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_11186,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11187,actual_type_11200,f_11194], null),canonical_f_11202], 0));
if(cljs.core.truth_(elem_11186.addEventListener))
{elem_11186.addEventListener(cljs.core.name(actual_type_11200),canonical_f_11202);
} else
{elem_11186.attachEvent(cljs.core.name(actual_type_11200),canonical_f_11202);
}
{
var G__11203 = seq__11173_11195;
var G__11204 = chunk__11175_11196;
var G__11205 = count__11176_11197;
var G__11206 = (i__11177_11198 + 1);
seq__11173_11195 = G__11203;
chunk__11175_11196 = G__11204;
count__11176_11197 = G__11205;
i__11177_11198 = G__11206;
continue;
}
} else
{var temp__4126__auto___11207 = cljs.core.seq(seq__11173_11195);if(temp__4126__auto___11207)
{var seq__11173_11208__$1 = temp__4126__auto___11207;if(cljs.core.chunked_seq_QMARK_(seq__11173_11208__$1))
{var c__4229__auto___11209 = cljs.core.chunk_first(seq__11173_11208__$1);{
var G__11210 = cljs.core.chunk_rest(seq__11173_11208__$1);
var G__11211 = c__4229__auto___11209;
var G__11212 = cljs.core.count(c__4229__auto___11209);
var G__11213 = 0;
seq__11173_11195 = G__11210;
chunk__11175_11196 = G__11211;
count__11176_11197 = G__11212;
i__11177_11198 = G__11213;
continue;
}
} else
{var vec__11181_11214 = cljs.core.first(seq__11173_11208__$1);var actual_type_11215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11181_11214,0,null);var factory_11216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11181_11214,1,null);var canonical_f_11217 = (cljs.core.truth_(selector_11187)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_11186,selector_11187):cljs.core.identity).call(null,(factory_11216.cljs$core$IFn$_invoke$arity$1 ? factory_11216.cljs$core$IFn$_invoke$arity$1(f_11194) : factory_11216.call(null,f_11194)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_11186,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11187,actual_type_11215,f_11194], null),canonical_f_11217], 0));
if(cljs.core.truth_(elem_11186.addEventListener))
{elem_11186.addEventListener(cljs.core.name(actual_type_11215),canonical_f_11217);
} else
{elem_11186.attachEvent(cljs.core.name(actual_type_11215),canonical_f_11217);
}
{
var G__11218 = cljs.core.next(seq__11173_11208__$1);
var G__11219 = null;
var G__11220 = 0;
var G__11221 = 0;
seq__11173_11195 = G__11218;
chunk__11175_11196 = G__11219;
count__11176_11197 = G__11220;
i__11177_11198 = G__11221;
continue;
}
}
} else
{}
}
break;
}
{
var G__11222 = seq__11163_11188;
var G__11223 = chunk__11170_11189;
var G__11224 = count__11171_11190;
var G__11225 = (i__11172_11191 + 1);
seq__11163_11188 = G__11222;
chunk__11170_11189 = G__11223;
count__11171_11190 = G__11224;
i__11172_11191 = G__11225;
continue;
}
} else
{var temp__4126__auto___11226 = cljs.core.seq(seq__11163_11188);if(temp__4126__auto___11226)
{var seq__11163_11227__$1 = temp__4126__auto___11226;if(cljs.core.chunked_seq_QMARK_(seq__11163_11227__$1))
{var c__4229__auto___11228 = cljs.core.chunk_first(seq__11163_11227__$1);{
var G__11229 = cljs.core.chunk_rest(seq__11163_11227__$1);
var G__11230 = c__4229__auto___11228;
var G__11231 = cljs.core.count(c__4229__auto___11228);
var G__11232 = 0;
seq__11163_11188 = G__11229;
chunk__11170_11189 = G__11230;
count__11171_11190 = G__11231;
i__11172_11191 = G__11232;
continue;
}
} else
{var vec__11182_11233 = cljs.core.first(seq__11163_11227__$1);var orig_type_11234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11182_11233,0,null);var f_11235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11182_11233,1,null);var seq__11164_11236 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_11234,new cljs.core.PersistentArrayMap.fromArray([orig_type_11234,cljs.core.identity], true, false)));var chunk__11166_11237 = null;var count__11167_11238 = 0;var i__11168_11239 = 0;while(true){
if((i__11168_11239 < count__11167_11238))
{var vec__11183_11240 = chunk__11166_11237.cljs$core$IIndexed$_nth$arity$2(null,i__11168_11239);var actual_type_11241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11183_11240,0,null);var factory_11242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11183_11240,1,null);var canonical_f_11243 = (cljs.core.truth_(selector_11187)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_11186,selector_11187):cljs.core.identity).call(null,(factory_11242.cljs$core$IFn$_invoke$arity$1 ? factory_11242.cljs$core$IFn$_invoke$arity$1(f_11235) : factory_11242.call(null,f_11235)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_11186,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11187,actual_type_11241,f_11235], null),canonical_f_11243], 0));
if(cljs.core.truth_(elem_11186.addEventListener))
{elem_11186.addEventListener(cljs.core.name(actual_type_11241),canonical_f_11243);
} else
{elem_11186.attachEvent(cljs.core.name(actual_type_11241),canonical_f_11243);
}
{
var G__11244 = seq__11164_11236;
var G__11245 = chunk__11166_11237;
var G__11246 = count__11167_11238;
var G__11247 = (i__11168_11239 + 1);
seq__11164_11236 = G__11244;
chunk__11166_11237 = G__11245;
count__11167_11238 = G__11246;
i__11168_11239 = G__11247;
continue;
}
} else
{var temp__4126__auto___11248__$1 = cljs.core.seq(seq__11164_11236);if(temp__4126__auto___11248__$1)
{var seq__11164_11249__$1 = temp__4126__auto___11248__$1;if(cljs.core.chunked_seq_QMARK_(seq__11164_11249__$1))
{var c__4229__auto___11250 = cljs.core.chunk_first(seq__11164_11249__$1);{
var G__11251 = cljs.core.chunk_rest(seq__11164_11249__$1);
var G__11252 = c__4229__auto___11250;
var G__11253 = cljs.core.count(c__4229__auto___11250);
var G__11254 = 0;
seq__11164_11236 = G__11251;
chunk__11166_11237 = G__11252;
count__11167_11238 = G__11253;
i__11168_11239 = G__11254;
continue;
}
} else
{var vec__11184_11255 = cljs.core.first(seq__11164_11249__$1);var actual_type_11256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11184_11255,0,null);var factory_11257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11184_11255,1,null);var canonical_f_11258 = (cljs.core.truth_(selector_11187)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_11186,selector_11187):cljs.core.identity).call(null,(factory_11257.cljs$core$IFn$_invoke$arity$1 ? factory_11257.cljs$core$IFn$_invoke$arity$1(f_11235) : factory_11257.call(null,f_11235)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_11186,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11187,actual_type_11256,f_11235], null),canonical_f_11258], 0));
if(cljs.core.truth_(elem_11186.addEventListener))
{elem_11186.addEventListener(cljs.core.name(actual_type_11256),canonical_f_11258);
} else
{elem_11186.attachEvent(cljs.core.name(actual_type_11256),canonical_f_11258);
}
{
var G__11259 = cljs.core.next(seq__11164_11249__$1);
var G__11260 = null;
var G__11261 = 0;
var G__11262 = 0;
seq__11164_11236 = G__11259;
chunk__11166_11237 = G__11260;
count__11167_11238 = G__11261;
i__11168_11239 = G__11262;
continue;
}
}
} else
{}
}
break;
}
{
var G__11263 = cljs.core.next(seq__11163_11227__$1);
var G__11264 = null;
var G__11265 = 0;
var G__11266 = 0;
seq__11163_11188 = G__11263;
chunk__11170_11189 = G__11264;
count__11171_11190 = G__11265;
i__11172_11191 = G__11266;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__11267){
var elem_sel = cljs.core.first(arglist__11267);
var type_fs = cljs.core.rest(arglist__11267);
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
var vec__11291_11314 = dommy.core.elem_and_selector(elem_sel);var elem_11315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11291_11314,0,null);var selector_11316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11291_11314,1,null);var seq__11292_11317 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__11299_11318 = null;var count__11300_11319 = 0;var i__11301_11320 = 0;while(true){
if((i__11301_11320 < count__11300_11319))
{var vec__11308_11321 = chunk__11299_11318.cljs$core$IIndexed$_nth$arity$2(null,i__11301_11320);var orig_type_11322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11308_11321,0,null);var f_11323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11308_11321,1,null);var seq__11302_11324 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_11322,new cljs.core.PersistentArrayMap.fromArray([orig_type_11322,cljs.core.identity], true, false)));var chunk__11304_11325 = null;var count__11305_11326 = 0;var i__11306_11327 = 0;while(true){
if((i__11306_11327 < count__11305_11326))
{var vec__11309_11328 = chunk__11304_11325.cljs$core$IIndexed$_nth$arity$2(null,i__11306_11327);var actual_type_11329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11309_11328,0,null);var __11330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11309_11328,1,null);var keys_11331 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11316,actual_type_11329,f_11323], null);var canonical_f_11332 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_11315),keys_11331);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_11315,dommy.utils.dissoc_in,cljs.core.array_seq([keys_11331], 0));
if(cljs.core.truth_(elem_11315.removeEventListener))
{elem_11315.removeEventListener(cljs.core.name(actual_type_11329),canonical_f_11332);
} else
{elem_11315.detachEvent(cljs.core.name(actual_type_11329),canonical_f_11332);
}
{
var G__11333 = seq__11302_11324;
var G__11334 = chunk__11304_11325;
var G__11335 = count__11305_11326;
var G__11336 = (i__11306_11327 + 1);
seq__11302_11324 = G__11333;
chunk__11304_11325 = G__11334;
count__11305_11326 = G__11335;
i__11306_11327 = G__11336;
continue;
}
} else
{var temp__4126__auto___11337 = cljs.core.seq(seq__11302_11324);if(temp__4126__auto___11337)
{var seq__11302_11338__$1 = temp__4126__auto___11337;if(cljs.core.chunked_seq_QMARK_(seq__11302_11338__$1))
{var c__4229__auto___11339 = cljs.core.chunk_first(seq__11302_11338__$1);{
var G__11340 = cljs.core.chunk_rest(seq__11302_11338__$1);
var G__11341 = c__4229__auto___11339;
var G__11342 = cljs.core.count(c__4229__auto___11339);
var G__11343 = 0;
seq__11302_11324 = G__11340;
chunk__11304_11325 = G__11341;
count__11305_11326 = G__11342;
i__11306_11327 = G__11343;
continue;
}
} else
{var vec__11310_11344 = cljs.core.first(seq__11302_11338__$1);var actual_type_11345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11310_11344,0,null);var __11346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11310_11344,1,null);var keys_11347 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11316,actual_type_11345,f_11323], null);var canonical_f_11348 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_11315),keys_11347);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_11315,dommy.utils.dissoc_in,cljs.core.array_seq([keys_11347], 0));
if(cljs.core.truth_(elem_11315.removeEventListener))
{elem_11315.removeEventListener(cljs.core.name(actual_type_11345),canonical_f_11348);
} else
{elem_11315.detachEvent(cljs.core.name(actual_type_11345),canonical_f_11348);
}
{
var G__11349 = cljs.core.next(seq__11302_11338__$1);
var G__11350 = null;
var G__11351 = 0;
var G__11352 = 0;
seq__11302_11324 = G__11349;
chunk__11304_11325 = G__11350;
count__11305_11326 = G__11351;
i__11306_11327 = G__11352;
continue;
}
}
} else
{}
}
break;
}
{
var G__11353 = seq__11292_11317;
var G__11354 = chunk__11299_11318;
var G__11355 = count__11300_11319;
var G__11356 = (i__11301_11320 + 1);
seq__11292_11317 = G__11353;
chunk__11299_11318 = G__11354;
count__11300_11319 = G__11355;
i__11301_11320 = G__11356;
continue;
}
} else
{var temp__4126__auto___11357 = cljs.core.seq(seq__11292_11317);if(temp__4126__auto___11357)
{var seq__11292_11358__$1 = temp__4126__auto___11357;if(cljs.core.chunked_seq_QMARK_(seq__11292_11358__$1))
{var c__4229__auto___11359 = cljs.core.chunk_first(seq__11292_11358__$1);{
var G__11360 = cljs.core.chunk_rest(seq__11292_11358__$1);
var G__11361 = c__4229__auto___11359;
var G__11362 = cljs.core.count(c__4229__auto___11359);
var G__11363 = 0;
seq__11292_11317 = G__11360;
chunk__11299_11318 = G__11361;
count__11300_11319 = G__11362;
i__11301_11320 = G__11363;
continue;
}
} else
{var vec__11311_11364 = cljs.core.first(seq__11292_11358__$1);var orig_type_11365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11311_11364,0,null);var f_11366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11311_11364,1,null);var seq__11293_11367 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_11365,new cljs.core.PersistentArrayMap.fromArray([orig_type_11365,cljs.core.identity], true, false)));var chunk__11295_11368 = null;var count__11296_11369 = 0;var i__11297_11370 = 0;while(true){
if((i__11297_11370 < count__11296_11369))
{var vec__11312_11371 = chunk__11295_11368.cljs$core$IIndexed$_nth$arity$2(null,i__11297_11370);var actual_type_11372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11312_11371,0,null);var __11373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11312_11371,1,null);var keys_11374 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11316,actual_type_11372,f_11366], null);var canonical_f_11375 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_11315),keys_11374);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_11315,dommy.utils.dissoc_in,cljs.core.array_seq([keys_11374], 0));
if(cljs.core.truth_(elem_11315.removeEventListener))
{elem_11315.removeEventListener(cljs.core.name(actual_type_11372),canonical_f_11375);
} else
{elem_11315.detachEvent(cljs.core.name(actual_type_11372),canonical_f_11375);
}
{
var G__11376 = seq__11293_11367;
var G__11377 = chunk__11295_11368;
var G__11378 = count__11296_11369;
var G__11379 = (i__11297_11370 + 1);
seq__11293_11367 = G__11376;
chunk__11295_11368 = G__11377;
count__11296_11369 = G__11378;
i__11297_11370 = G__11379;
continue;
}
} else
{var temp__4126__auto___11380__$1 = cljs.core.seq(seq__11293_11367);if(temp__4126__auto___11380__$1)
{var seq__11293_11381__$1 = temp__4126__auto___11380__$1;if(cljs.core.chunked_seq_QMARK_(seq__11293_11381__$1))
{var c__4229__auto___11382 = cljs.core.chunk_first(seq__11293_11381__$1);{
var G__11383 = cljs.core.chunk_rest(seq__11293_11381__$1);
var G__11384 = c__4229__auto___11382;
var G__11385 = cljs.core.count(c__4229__auto___11382);
var G__11386 = 0;
seq__11293_11367 = G__11383;
chunk__11295_11368 = G__11384;
count__11296_11369 = G__11385;
i__11297_11370 = G__11386;
continue;
}
} else
{var vec__11313_11387 = cljs.core.first(seq__11293_11381__$1);var actual_type_11388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11313_11387,0,null);var __11389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11313_11387,1,null);var keys_11390 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11316,actual_type_11388,f_11366], null);var canonical_f_11391 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_11315),keys_11390);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_11315,dommy.utils.dissoc_in,cljs.core.array_seq([keys_11390], 0));
if(cljs.core.truth_(elem_11315.removeEventListener))
{elem_11315.removeEventListener(cljs.core.name(actual_type_11388),canonical_f_11391);
} else
{elem_11315.detachEvent(cljs.core.name(actual_type_11388),canonical_f_11391);
}
{
var G__11392 = cljs.core.next(seq__11293_11381__$1);
var G__11393 = null;
var G__11394 = 0;
var G__11395 = 0;
seq__11293_11367 = G__11392;
chunk__11295_11368 = G__11393;
count__11296_11369 = G__11394;
i__11297_11370 = G__11395;
continue;
}
}
} else
{}
}
break;
}
{
var G__11396 = cljs.core.next(seq__11292_11358__$1);
var G__11397 = null;
var G__11398 = 0;
var G__11399 = 0;
seq__11292_11317 = G__11396;
chunk__11299_11318 = G__11397;
count__11300_11319 = G__11398;
i__11301_11320 = G__11399;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11400){
var elem_sel = cljs.core.first(arglist__11400);
var type_fs = cljs.core.rest(arglist__11400);
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
var vec__11408_11415 = dommy.core.elem_and_selector(elem_sel);var elem_11416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11408_11415,0,null);var selector_11417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11408_11415,1,null);var seq__11409_11418 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__11410_11419 = null;var count__11411_11420 = 0;var i__11412_11421 = 0;while(true){
if((i__11412_11421 < count__11411_11420))
{var vec__11413_11422 = chunk__11410_11419.cljs$core$IIndexed$_nth$arity$2(null,i__11412_11421);var type_11423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11413_11422,0,null);var f_11424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11413_11422,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_11423,((function (seq__11409_11418,chunk__11410_11419,count__11411_11420,i__11412_11421,vec__11413_11422,type_11423,f_11424,vec__11408_11415,elem_11416,selector_11417){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_11423,this_fn], 0));
return (f_11424.cljs$core$IFn$_invoke$arity$1 ? f_11424.cljs$core$IFn$_invoke$arity$1(e) : f_11424.call(null,e));
});})(seq__11409_11418,chunk__11410_11419,count__11411_11420,i__11412_11421,vec__11413_11422,type_11423,f_11424,vec__11408_11415,elem_11416,selector_11417))
], 0));
{
var G__11425 = seq__11409_11418;
var G__11426 = chunk__11410_11419;
var G__11427 = count__11411_11420;
var G__11428 = (i__11412_11421 + 1);
seq__11409_11418 = G__11425;
chunk__11410_11419 = G__11426;
count__11411_11420 = G__11427;
i__11412_11421 = G__11428;
continue;
}
} else
{var temp__4126__auto___11429 = cljs.core.seq(seq__11409_11418);if(temp__4126__auto___11429)
{var seq__11409_11430__$1 = temp__4126__auto___11429;if(cljs.core.chunked_seq_QMARK_(seq__11409_11430__$1))
{var c__4229__auto___11431 = cljs.core.chunk_first(seq__11409_11430__$1);{
var G__11432 = cljs.core.chunk_rest(seq__11409_11430__$1);
var G__11433 = c__4229__auto___11431;
var G__11434 = cljs.core.count(c__4229__auto___11431);
var G__11435 = 0;
seq__11409_11418 = G__11432;
chunk__11410_11419 = G__11433;
count__11411_11420 = G__11434;
i__11412_11421 = G__11435;
continue;
}
} else
{var vec__11414_11436 = cljs.core.first(seq__11409_11430__$1);var type_11437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11414_11436,0,null);var f_11438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11414_11436,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_11437,((function (seq__11409_11418,chunk__11410_11419,count__11411_11420,i__11412_11421,vec__11414_11436,type_11437,f_11438,seq__11409_11430__$1,temp__4126__auto___11429,vec__11408_11415,elem_11416,selector_11417){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_11437,this_fn], 0));
return (f_11438.cljs$core$IFn$_invoke$arity$1 ? f_11438.cljs$core$IFn$_invoke$arity$1(e) : f_11438.call(null,e));
});})(seq__11409_11418,chunk__11410_11419,count__11411_11420,i__11412_11421,vec__11414_11436,type_11437,f_11438,seq__11409_11430__$1,temp__4126__auto___11429,vec__11408_11415,elem_11416,selector_11417))
], 0));
{
var G__11439 = cljs.core.next(seq__11409_11430__$1);
var G__11440 = null;
var G__11441 = 0;
var G__11442 = 0;
seq__11409_11418 = G__11439;
chunk__11410_11419 = G__11440;
count__11411_11420 = G__11441;
i__11412_11421 = G__11442;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11443){
var elem_sel = cljs.core.first(arglist__11443);
var type_fs = cljs.core.rest(arglist__11443);
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
var fire_BANG___delegate = function (node,event_type,p__11444){var vec__11446 = p__11444;var update_event_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11446,0,null);if(dommy.core.descendant_QMARK_(node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))], 0)))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3481__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
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
var p__11444 = null;if (arguments.length > 2) {
  p__11444 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__11444);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__11447){
var node = cljs.core.first(arglist__11447);
arglist__11447 = cljs.core.next(arglist__11447);
var event_type = cljs.core.first(arglist__11447);
var p__11444 = cljs.core.rest(arglist__11447);
return fire_BANG___delegate(node,event_type,p__11444);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
