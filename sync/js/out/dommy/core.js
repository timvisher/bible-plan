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
var append_BANG___2 = (function (parent,child){var G__15121 = dommy.template.__GT_node_like(parent);G__15121.appendChild(dommy.template.__GT_node_like(child));
return G__15121;
});
var append_BANG___3 = (function() { 
var G__15126__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__15122_15127 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__15123_15128 = null;var count__15124_15129 = 0;var i__15125_15130 = 0;while(true){
if((i__15125_15130 < count__15124_15129))
{var c_15131 = chunk__15123_15128.cljs$core$IIndexed$_nth$arity$2(null,i__15125_15130);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_15131);
{
var G__15132 = seq__15122_15127;
var G__15133 = chunk__15123_15128;
var G__15134 = count__15124_15129;
var G__15135 = (i__15125_15130 + 1);
seq__15122_15127 = G__15132;
chunk__15123_15128 = G__15133;
count__15124_15129 = G__15134;
i__15125_15130 = G__15135;
continue;
}
} else
{var temp__4092__auto___15136 = cljs.core.seq(seq__15122_15127);if(cljs.core.truth_(temp__4092__auto___15136))
{var seq__15122_15137__$1 = temp__4092__auto___15136;if(cljs.core.chunked_seq_QMARK_(seq__15122_15137__$1))
{var c__4010__auto___15138 = cljs.core.chunk_first(seq__15122_15137__$1);{
var G__15139 = cljs.core.chunk_rest(seq__15122_15137__$1);
var G__15140 = c__4010__auto___15138;
var G__15141 = cljs.core.count(c__4010__auto___15138);
var G__15142 = 0;
seq__15122_15127 = G__15139;
chunk__15123_15128 = G__15140;
count__15124_15129 = G__15141;
i__15125_15130 = G__15142;
continue;
}
} else
{var c_15143 = cljs.core.first(seq__15122_15137__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_15143);
{
var G__15144 = cljs.core.next(seq__15122_15137__$1);
var G__15145 = null;
var G__15146 = 0;
var G__15147 = 0;
seq__15122_15127 = G__15144;
chunk__15123_15128 = G__15145;
count__15124_15129 = G__15146;
i__15125_15130 = G__15147;
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
var G__15126 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15126__delegate.call(this,parent,child,more_children);};
G__15126.cljs$lang$maxFixedArity = 2;
G__15126.cljs$lang$applyTo = (function (arglist__15148){
var parent = cljs.core.first(arglist__15148);
arglist__15148 = cljs.core.next(arglist__15148);
var child = cljs.core.first(arglist__15148);
var more_children = cljs.core.rest(arglist__15148);
return G__15126__delegate(parent,child,more_children);
});
G__15126.cljs$core$IFn$_invoke$arity$variadic = G__15126__delegate;
return G__15126;
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
var G__15157__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__15153_15158 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__15154_15159 = null;var count__15155_15160 = 0;var i__15156_15161 = 0;while(true){
if((i__15156_15161 < count__15155_15160))
{var c_15162 = chunk__15154_15159.cljs$core$IIndexed$_nth$arity$2(null,i__15156_15161);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_15162);
{
var G__15163 = seq__15153_15158;
var G__15164 = chunk__15154_15159;
var G__15165 = count__15155_15160;
var G__15166 = (i__15156_15161 + 1);
seq__15153_15158 = G__15163;
chunk__15154_15159 = G__15164;
count__15155_15160 = G__15165;
i__15156_15161 = G__15166;
continue;
}
} else
{var temp__4092__auto___15167 = cljs.core.seq(seq__15153_15158);if(cljs.core.truth_(temp__4092__auto___15167))
{var seq__15153_15168__$1 = temp__4092__auto___15167;if(cljs.core.chunked_seq_QMARK_(seq__15153_15168__$1))
{var c__4010__auto___15169 = cljs.core.chunk_first(seq__15153_15168__$1);{
var G__15170 = cljs.core.chunk_rest(seq__15153_15168__$1);
var G__15171 = c__4010__auto___15169;
var G__15172 = cljs.core.count(c__4010__auto___15169);
var G__15173 = 0;
seq__15153_15158 = G__15170;
chunk__15154_15159 = G__15171;
count__15155_15160 = G__15172;
i__15156_15161 = G__15173;
continue;
}
} else
{var c_15174 = cljs.core.first(seq__15153_15168__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_15174);
{
var G__15175 = cljs.core.next(seq__15153_15168__$1);
var G__15176 = null;
var G__15177 = 0;
var G__15178 = 0;
seq__15153_15158 = G__15175;
chunk__15154_15159 = G__15176;
count__15155_15160 = G__15177;
i__15156_15161 = G__15178;
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
var G__15157 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15157__delegate.call(this,parent,child,more_children);};
G__15157.cljs$lang$maxFixedArity = 2;
G__15157.cljs$lang$applyTo = (function (arglist__15179){
var parent = cljs.core.first(arglist__15179);
arglist__15179 = cljs.core.next(arglist__15179);
var child = cljs.core.first(arglist__15179);
var more_children = cljs.core.rest(arglist__15179);
return G__15157__delegate(parent,child,more_children);
});
G__15157.cljs$core$IFn$_invoke$arity$variadic = G__15157__delegate;
return G__15157;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);var parent = other__$1.parentNode;var temp__4090__auto___15180 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___15180))
{var next_15181 = temp__4090__auto___15180;parent.insertBefore(actual_node,next_15181);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__15183 = dommy.template.__GT_node_like(parent);G__15183.innerHTML = "";
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(G__15183,node_like);
return G__15183;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like(elem);var G__15185 = elem__$1.parentNode;G__15185.removeChild(elem__$1);
return G__15185;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$171,container], null),cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15191){var vec__15192 = p__15191;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15192,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15192,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(cljs.core.constant$keyword$172.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))?(function (){if(typeof dommy.core.t15193 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t15193 = (function (v,k,vec__15192,p__15191,container,key_selectors_map,template,selector_map,meta15194){
this.v = v;
this.k = k;
this.vec__15192 = vec__15192;
this.p__15191 = p__15191;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta15194 = meta15194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t15193.cljs$lang$type = true;
dommy.core.t15193.cljs$lang$ctorStr = "dommy.core/t15193";
dommy.core.t15193.cljs$lang$ctorPrWriter = (function (this__3830__auto__,writer__3831__auto__,opt__3832__auto__){return cljs.core._write(writer__3831__auto__,"dommy.core/t15193");
});
dommy.core.t15193.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array(dommy.template.__GT_node_like(self__.container).querySelectorAll(dommy.core.selector(self__.v)));
});
dommy.core.t15193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15195){var self__ = this;
var _15195__$1 = this;return self__.meta15194;
});
dommy.core.t15193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15195,meta15194__$1){var self__ = this;
var _15195__$1 = this;return (new dommy.core.t15193(self__.v,self__.k,self__.vec__15192,self__.p__15191,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta15194__$1));
});
dommy.core.__GT_t15193 = (function __GT_t15193(v__$1,k__$1,vec__15192__$1,p__15191__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta15194){return (new dommy.core.t15193(v__$1,k__$1,vec__15192__$1,p__15191__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta15194));
});
}
return (new dommy.core.t15193(v,k,vec__15192,p__15191,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like(container).querySelector(dommy.core.selector(v)))], null);
}),key_selectors_map))], 0));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while(cljs.core.identity,cljs.core.iterate((function (p1__15196_SHARP_){return p1__15196_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like(base);var elem__$1 = dommy.template.__GT_node_like(elem);return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base__$1,selector),cljs.core.take_while((function (p1__15197_SHARP_){return !((p1__15197_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15198){var vec__15199 = p__15198;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15199,0,null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15199,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3291__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3291__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15200){
var elem = cljs.core.first(arglist__15200);
arglist__15200 = cljs.core.next(arglist__15200);
var f = cljs.core.first(arglist__15200);
var args = cljs.core.rest(arglist__15200);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.truth_(cljs.core.sequential_QMARK_(elem_sel)))
{return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__15201_SHARP_){return dommy.template.__GT_node_like(cljs.core.first(p1__15201_SHARP_));
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
var vec__15225_15248 = dommy.core.elem_and_selector(elem_sel);var elem_15249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15225_15248,0,null);var selector_15250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15225_15248,1,null);var seq__15226_15251 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__15233_15252 = null;var count__15234_15253 = 0;var i__15235_15254 = 0;while(true){
if((i__15235_15254 < count__15234_15253))
{var vec__15242_15255 = chunk__15233_15252.cljs$core$IIndexed$_nth$arity$2(null,i__15235_15254);var orig_type_15256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15242_15255,0,null);var f_15257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15242_15255,1,null);var seq__15236_15258 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15256,new cljs.core.PersistentArrayMap.fromArray([orig_type_15256,cljs.core.identity], true, false)));var chunk__15238_15259 = null;var count__15239_15260 = 0;var i__15240_15261 = 0;while(true){
if((i__15240_15261 < count__15239_15260))
{var vec__15243_15262 = chunk__15238_15259.cljs$core$IIndexed$_nth$arity$2(null,i__15240_15261);var actual_type_15263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15243_15262,0,null);var factory_15264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15243_15262,1,null);var canonical_f_15265 = (cljs.core.truth_(selector_15250)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15249,selector_15250):cljs.core.identity).call(null,(factory_15264.cljs$core$IFn$_invoke$arity$1 ? factory_15264.cljs$core$IFn$_invoke$arity$1(f_15257) : factory_15264.call(null,f_15257)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15249,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15250,actual_type_15263,f_15257], null),canonical_f_15265], 0));
if(cljs.core.truth_(elem_15249.addEventListener))
{elem_15249.addEventListener(cljs.core.name(actual_type_15263),canonical_f_15265);
} else
{elem_15249.attachEvent(cljs.core.name(actual_type_15263),canonical_f_15265);
}
{
var G__15266 = seq__15236_15258;
var G__15267 = chunk__15238_15259;
var G__15268 = count__15239_15260;
var G__15269 = (i__15240_15261 + 1);
seq__15236_15258 = G__15266;
chunk__15238_15259 = G__15267;
count__15239_15260 = G__15268;
i__15240_15261 = G__15269;
continue;
}
} else
{var temp__4092__auto___15270 = cljs.core.seq(seq__15236_15258);if(cljs.core.truth_(temp__4092__auto___15270))
{var seq__15236_15271__$1 = temp__4092__auto___15270;if(cljs.core.chunked_seq_QMARK_(seq__15236_15271__$1))
{var c__4010__auto___15272 = cljs.core.chunk_first(seq__15236_15271__$1);{
var G__15273 = cljs.core.chunk_rest(seq__15236_15271__$1);
var G__15274 = c__4010__auto___15272;
var G__15275 = cljs.core.count(c__4010__auto___15272);
var G__15276 = 0;
seq__15236_15258 = G__15273;
chunk__15238_15259 = G__15274;
count__15239_15260 = G__15275;
i__15240_15261 = G__15276;
continue;
}
} else
{var vec__15244_15277 = cljs.core.first(seq__15236_15271__$1);var actual_type_15278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15244_15277,0,null);var factory_15279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15244_15277,1,null);var canonical_f_15280 = (cljs.core.truth_(selector_15250)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15249,selector_15250):cljs.core.identity).call(null,(factory_15279.cljs$core$IFn$_invoke$arity$1 ? factory_15279.cljs$core$IFn$_invoke$arity$1(f_15257) : factory_15279.call(null,f_15257)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15249,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15250,actual_type_15278,f_15257], null),canonical_f_15280], 0));
if(cljs.core.truth_(elem_15249.addEventListener))
{elem_15249.addEventListener(cljs.core.name(actual_type_15278),canonical_f_15280);
} else
{elem_15249.attachEvent(cljs.core.name(actual_type_15278),canonical_f_15280);
}
{
var G__15281 = cljs.core.next(seq__15236_15271__$1);
var G__15282 = null;
var G__15283 = 0;
var G__15284 = 0;
seq__15236_15258 = G__15281;
chunk__15238_15259 = G__15282;
count__15239_15260 = G__15283;
i__15240_15261 = G__15284;
continue;
}
}
} else
{}
}
break;
}
{
var G__15285 = seq__15226_15251;
var G__15286 = chunk__15233_15252;
var G__15287 = count__15234_15253;
var G__15288 = (i__15235_15254 + 1);
seq__15226_15251 = G__15285;
chunk__15233_15252 = G__15286;
count__15234_15253 = G__15287;
i__15235_15254 = G__15288;
continue;
}
} else
{var temp__4092__auto___15289 = cljs.core.seq(seq__15226_15251);if(cljs.core.truth_(temp__4092__auto___15289))
{var seq__15226_15290__$1 = temp__4092__auto___15289;if(cljs.core.chunked_seq_QMARK_(seq__15226_15290__$1))
{var c__4010__auto___15291 = cljs.core.chunk_first(seq__15226_15290__$1);{
var G__15292 = cljs.core.chunk_rest(seq__15226_15290__$1);
var G__15293 = c__4010__auto___15291;
var G__15294 = cljs.core.count(c__4010__auto___15291);
var G__15295 = 0;
seq__15226_15251 = G__15292;
chunk__15233_15252 = G__15293;
count__15234_15253 = G__15294;
i__15235_15254 = G__15295;
continue;
}
} else
{var vec__15245_15296 = cljs.core.first(seq__15226_15290__$1);var orig_type_15297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15245_15296,0,null);var f_15298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15245_15296,1,null);var seq__15227_15299 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15297,new cljs.core.PersistentArrayMap.fromArray([orig_type_15297,cljs.core.identity], true, false)));var chunk__15229_15300 = null;var count__15230_15301 = 0;var i__15231_15302 = 0;while(true){
if((i__15231_15302 < count__15230_15301))
{var vec__15246_15303 = chunk__15229_15300.cljs$core$IIndexed$_nth$arity$2(null,i__15231_15302);var actual_type_15304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15246_15303,0,null);var factory_15305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15246_15303,1,null);var canonical_f_15306 = (cljs.core.truth_(selector_15250)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15249,selector_15250):cljs.core.identity).call(null,(factory_15305.cljs$core$IFn$_invoke$arity$1 ? factory_15305.cljs$core$IFn$_invoke$arity$1(f_15298) : factory_15305.call(null,f_15298)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15249,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15250,actual_type_15304,f_15298], null),canonical_f_15306], 0));
if(cljs.core.truth_(elem_15249.addEventListener))
{elem_15249.addEventListener(cljs.core.name(actual_type_15304),canonical_f_15306);
} else
{elem_15249.attachEvent(cljs.core.name(actual_type_15304),canonical_f_15306);
}
{
var G__15307 = seq__15227_15299;
var G__15308 = chunk__15229_15300;
var G__15309 = count__15230_15301;
var G__15310 = (i__15231_15302 + 1);
seq__15227_15299 = G__15307;
chunk__15229_15300 = G__15308;
count__15230_15301 = G__15309;
i__15231_15302 = G__15310;
continue;
}
} else
{var temp__4092__auto___15311__$1 = cljs.core.seq(seq__15227_15299);if(cljs.core.truth_(temp__4092__auto___15311__$1))
{var seq__15227_15312__$1 = temp__4092__auto___15311__$1;if(cljs.core.chunked_seq_QMARK_(seq__15227_15312__$1))
{var c__4010__auto___15313 = cljs.core.chunk_first(seq__15227_15312__$1);{
var G__15314 = cljs.core.chunk_rest(seq__15227_15312__$1);
var G__15315 = c__4010__auto___15313;
var G__15316 = cljs.core.count(c__4010__auto___15313);
var G__15317 = 0;
seq__15227_15299 = G__15314;
chunk__15229_15300 = G__15315;
count__15230_15301 = G__15316;
i__15231_15302 = G__15317;
continue;
}
} else
{var vec__15247_15318 = cljs.core.first(seq__15227_15312__$1);var actual_type_15319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15247_15318,0,null);var factory_15320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15247_15318,1,null);var canonical_f_15321 = (cljs.core.truth_(selector_15250)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15249,selector_15250):cljs.core.identity).call(null,(factory_15320.cljs$core$IFn$_invoke$arity$1 ? factory_15320.cljs$core$IFn$_invoke$arity$1(f_15298) : factory_15320.call(null,f_15298)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15249,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15250,actual_type_15319,f_15298], null),canonical_f_15321], 0));
if(cljs.core.truth_(elem_15249.addEventListener))
{elem_15249.addEventListener(cljs.core.name(actual_type_15319),canonical_f_15321);
} else
{elem_15249.attachEvent(cljs.core.name(actual_type_15319),canonical_f_15321);
}
{
var G__15322 = cljs.core.next(seq__15227_15312__$1);
var G__15323 = null;
var G__15324 = 0;
var G__15325 = 0;
seq__15227_15299 = G__15322;
chunk__15229_15300 = G__15323;
count__15230_15301 = G__15324;
i__15231_15302 = G__15325;
continue;
}
}
} else
{}
}
break;
}
{
var G__15326 = cljs.core.next(seq__15226_15290__$1);
var G__15327 = null;
var G__15328 = 0;
var G__15329 = 0;
seq__15226_15251 = G__15326;
chunk__15233_15252 = G__15327;
count__15234_15253 = G__15328;
i__15235_15254 = G__15329;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__15330){
var elem_sel = cljs.core.first(arglist__15330);
var type_fs = cljs.core.rest(arglist__15330);
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
var vec__15354_15377 = dommy.core.elem_and_selector(elem_sel);var elem_15378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15354_15377,0,null);var selector_15379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15354_15377,1,null);var seq__15355_15380 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__15362_15381 = null;var count__15363_15382 = 0;var i__15364_15383 = 0;while(true){
if((i__15364_15383 < count__15363_15382))
{var vec__15371_15384 = chunk__15362_15381.cljs$core$IIndexed$_nth$arity$2(null,i__15364_15383);var orig_type_15385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15371_15384,0,null);var f_15386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15371_15384,1,null);var seq__15365_15387 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15385,new cljs.core.PersistentArrayMap.fromArray([orig_type_15385,cljs.core.identity], true, false)));var chunk__15367_15388 = null;var count__15368_15389 = 0;var i__15369_15390 = 0;while(true){
if((i__15369_15390 < count__15368_15389))
{var vec__15372_15391 = chunk__15367_15388.cljs$core$IIndexed$_nth$arity$2(null,i__15369_15390);var actual_type_15392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15372_15391,0,null);var __15393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15372_15391,1,null);var keys_15394 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15379,actual_type_15392,f_15386], null);var canonical_f_15395 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15378),keys_15394);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15378,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15394], 0));
if(cljs.core.truth_(elem_15378.removeEventListener))
{elem_15378.removeEventListener(cljs.core.name(actual_type_15392),canonical_f_15395);
} else
{elem_15378.detachEvent(cljs.core.name(actual_type_15392),canonical_f_15395);
}
{
var G__15396 = seq__15365_15387;
var G__15397 = chunk__15367_15388;
var G__15398 = count__15368_15389;
var G__15399 = (i__15369_15390 + 1);
seq__15365_15387 = G__15396;
chunk__15367_15388 = G__15397;
count__15368_15389 = G__15398;
i__15369_15390 = G__15399;
continue;
}
} else
{var temp__4092__auto___15400 = cljs.core.seq(seq__15365_15387);if(cljs.core.truth_(temp__4092__auto___15400))
{var seq__15365_15401__$1 = temp__4092__auto___15400;if(cljs.core.chunked_seq_QMARK_(seq__15365_15401__$1))
{var c__4010__auto___15402 = cljs.core.chunk_first(seq__15365_15401__$1);{
var G__15403 = cljs.core.chunk_rest(seq__15365_15401__$1);
var G__15404 = c__4010__auto___15402;
var G__15405 = cljs.core.count(c__4010__auto___15402);
var G__15406 = 0;
seq__15365_15387 = G__15403;
chunk__15367_15388 = G__15404;
count__15368_15389 = G__15405;
i__15369_15390 = G__15406;
continue;
}
} else
{var vec__15373_15407 = cljs.core.first(seq__15365_15401__$1);var actual_type_15408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15373_15407,0,null);var __15409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15373_15407,1,null);var keys_15410 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15379,actual_type_15408,f_15386], null);var canonical_f_15411 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15378),keys_15410);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15378,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15410], 0));
if(cljs.core.truth_(elem_15378.removeEventListener))
{elem_15378.removeEventListener(cljs.core.name(actual_type_15408),canonical_f_15411);
} else
{elem_15378.detachEvent(cljs.core.name(actual_type_15408),canonical_f_15411);
}
{
var G__15412 = cljs.core.next(seq__15365_15401__$1);
var G__15413 = null;
var G__15414 = 0;
var G__15415 = 0;
seq__15365_15387 = G__15412;
chunk__15367_15388 = G__15413;
count__15368_15389 = G__15414;
i__15369_15390 = G__15415;
continue;
}
}
} else
{}
}
break;
}
{
var G__15416 = seq__15355_15380;
var G__15417 = chunk__15362_15381;
var G__15418 = count__15363_15382;
var G__15419 = (i__15364_15383 + 1);
seq__15355_15380 = G__15416;
chunk__15362_15381 = G__15417;
count__15363_15382 = G__15418;
i__15364_15383 = G__15419;
continue;
}
} else
{var temp__4092__auto___15420 = cljs.core.seq(seq__15355_15380);if(cljs.core.truth_(temp__4092__auto___15420))
{var seq__15355_15421__$1 = temp__4092__auto___15420;if(cljs.core.chunked_seq_QMARK_(seq__15355_15421__$1))
{var c__4010__auto___15422 = cljs.core.chunk_first(seq__15355_15421__$1);{
var G__15423 = cljs.core.chunk_rest(seq__15355_15421__$1);
var G__15424 = c__4010__auto___15422;
var G__15425 = cljs.core.count(c__4010__auto___15422);
var G__15426 = 0;
seq__15355_15380 = G__15423;
chunk__15362_15381 = G__15424;
count__15363_15382 = G__15425;
i__15364_15383 = G__15426;
continue;
}
} else
{var vec__15374_15427 = cljs.core.first(seq__15355_15421__$1);var orig_type_15428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15374_15427,0,null);var f_15429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15374_15427,1,null);var seq__15356_15430 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15428,new cljs.core.PersistentArrayMap.fromArray([orig_type_15428,cljs.core.identity], true, false)));var chunk__15358_15431 = null;var count__15359_15432 = 0;var i__15360_15433 = 0;while(true){
if((i__15360_15433 < count__15359_15432))
{var vec__15375_15434 = chunk__15358_15431.cljs$core$IIndexed$_nth$arity$2(null,i__15360_15433);var actual_type_15435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15375_15434,0,null);var __15436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15375_15434,1,null);var keys_15437 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15379,actual_type_15435,f_15429], null);var canonical_f_15438 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15378),keys_15437);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15378,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15437], 0));
if(cljs.core.truth_(elem_15378.removeEventListener))
{elem_15378.removeEventListener(cljs.core.name(actual_type_15435),canonical_f_15438);
} else
{elem_15378.detachEvent(cljs.core.name(actual_type_15435),canonical_f_15438);
}
{
var G__15439 = seq__15356_15430;
var G__15440 = chunk__15358_15431;
var G__15441 = count__15359_15432;
var G__15442 = (i__15360_15433 + 1);
seq__15356_15430 = G__15439;
chunk__15358_15431 = G__15440;
count__15359_15432 = G__15441;
i__15360_15433 = G__15442;
continue;
}
} else
{var temp__4092__auto___15443__$1 = cljs.core.seq(seq__15356_15430);if(cljs.core.truth_(temp__4092__auto___15443__$1))
{var seq__15356_15444__$1 = temp__4092__auto___15443__$1;if(cljs.core.chunked_seq_QMARK_(seq__15356_15444__$1))
{var c__4010__auto___15445 = cljs.core.chunk_first(seq__15356_15444__$1);{
var G__15446 = cljs.core.chunk_rest(seq__15356_15444__$1);
var G__15447 = c__4010__auto___15445;
var G__15448 = cljs.core.count(c__4010__auto___15445);
var G__15449 = 0;
seq__15356_15430 = G__15446;
chunk__15358_15431 = G__15447;
count__15359_15432 = G__15448;
i__15360_15433 = G__15449;
continue;
}
} else
{var vec__15376_15450 = cljs.core.first(seq__15356_15444__$1);var actual_type_15451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15376_15450,0,null);var __15452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15376_15450,1,null);var keys_15453 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15379,actual_type_15451,f_15429], null);var canonical_f_15454 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15378),keys_15453);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15378,dommy.utils.dissoc_in,cljs.core.array_seq([keys_15453], 0));
if(cljs.core.truth_(elem_15378.removeEventListener))
{elem_15378.removeEventListener(cljs.core.name(actual_type_15451),canonical_f_15454);
} else
{elem_15378.detachEvent(cljs.core.name(actual_type_15451),canonical_f_15454);
}
{
var G__15455 = cljs.core.next(seq__15356_15444__$1);
var G__15456 = null;
var G__15457 = 0;
var G__15458 = 0;
seq__15356_15430 = G__15455;
chunk__15358_15431 = G__15456;
count__15359_15432 = G__15457;
i__15360_15433 = G__15458;
continue;
}
}
} else
{}
}
break;
}
{
var G__15459 = cljs.core.next(seq__15355_15421__$1);
var G__15460 = null;
var G__15461 = 0;
var G__15462 = 0;
seq__15355_15380 = G__15459;
chunk__15362_15381 = G__15460;
count__15363_15382 = G__15461;
i__15364_15383 = G__15462;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__15463){
var elem_sel = cljs.core.first(arglist__15463);
var type_fs = cljs.core.rest(arglist__15463);
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
var vec__15471_15478 = dommy.core.elem_and_selector(elem_sel);var elem_15479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15471_15478,0,null);var selector_15480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15471_15478,1,null);var seq__15472_15481 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__15473_15482 = null;var count__15474_15483 = 0;var i__15475_15484 = 0;while(true){
if((i__15475_15484 < count__15474_15483))
{var vec__15476_15485 = chunk__15473_15482.cljs$core$IIndexed$_nth$arity$2(null,i__15475_15484);var type_15486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15476_15485,0,null);var f_15487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15476_15485,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15486,((function (seq__15472_15481,chunk__15473_15482,count__15474_15483,i__15475_15484,vec__15476_15485,type_15486,f_15487){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15486,this_fn], 0));
return (f_15487.cljs$core$IFn$_invoke$arity$1 ? f_15487.cljs$core$IFn$_invoke$arity$1(e) : f_15487.call(null,e));
});})(seq__15472_15481,chunk__15473_15482,count__15474_15483,i__15475_15484,vec__15476_15485,type_15486,f_15487))
], 0));
{
var G__15488 = seq__15472_15481;
var G__15489 = chunk__15473_15482;
var G__15490 = count__15474_15483;
var G__15491 = (i__15475_15484 + 1);
seq__15472_15481 = G__15488;
chunk__15473_15482 = G__15489;
count__15474_15483 = G__15490;
i__15475_15484 = G__15491;
continue;
}
} else
{var temp__4092__auto___15492 = cljs.core.seq(seq__15472_15481);if(cljs.core.truth_(temp__4092__auto___15492))
{var seq__15472_15493__$1 = temp__4092__auto___15492;if(cljs.core.chunked_seq_QMARK_(seq__15472_15493__$1))
{var c__4010__auto___15494 = cljs.core.chunk_first(seq__15472_15493__$1);{
var G__15495 = cljs.core.chunk_rest(seq__15472_15493__$1);
var G__15496 = c__4010__auto___15494;
var G__15497 = cljs.core.count(c__4010__auto___15494);
var G__15498 = 0;
seq__15472_15481 = G__15495;
chunk__15473_15482 = G__15496;
count__15474_15483 = G__15497;
i__15475_15484 = G__15498;
continue;
}
} else
{var vec__15477_15499 = cljs.core.first(seq__15472_15493__$1);var type_15500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15477_15499,0,null);var f_15501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15477_15499,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15500,((function (seq__15472_15481,chunk__15473_15482,count__15474_15483,i__15475_15484,vec__15477_15499,type_15500,f_15501,seq__15472_15493__$1,temp__4092__auto___15492){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_15500,this_fn], 0));
return (f_15501.cljs$core$IFn$_invoke$arity$1 ? f_15501.cljs$core$IFn$_invoke$arity$1(e) : f_15501.call(null,e));
});})(seq__15472_15481,chunk__15473_15482,count__15474_15483,i__15475_15484,vec__15477_15499,type_15500,f_15501,seq__15472_15493__$1,temp__4092__auto___15492))
], 0));
{
var G__15502 = cljs.core.next(seq__15472_15493__$1);
var G__15503 = null;
var G__15504 = 0;
var G__15505 = 0;
seq__15472_15481 = G__15502;
chunk__15473_15482 = G__15503;
count__15474_15483 = G__15504;
i__15475_15484 = G__15505;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__15506){
var elem_sel = cljs.core.first(arglist__15506);
var type_fs = cljs.core.rest(arglist__15506);
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
var fire_BANG___delegate = function (node,event_type,p__15507){var vec__15509 = p__15507;var update_event_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15509,0,null);if(cljs.core.truth_(dommy.core.descendant_QMARK_(node,document.documentElement)))
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
var p__15507 = null;if (arguments.length > 2) {
  p__15507 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__15507);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__15510){
var node = cljs.core.first(arglist__15510);
arglist__15510 = cljs.core.next(arglist__15510);
var event_type = cljs.core.first(arglist__15510);
var p__15507 = cljs.core.rest(arglist__15510);
return fire_BANG___delegate(node,event_type,p__15507);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
