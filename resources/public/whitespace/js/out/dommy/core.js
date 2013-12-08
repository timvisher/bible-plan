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
var append_BANG___2 = (function (parent,child){var G__9132 = dommy.template.__GT_node_like.call(null,parent);G__9132.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__9132;
});
var append_BANG___3 = (function() { 
var G__9137__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__9133_9138 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__9134_9139 = null;var count__9135_9140 = 0;var i__9136_9141 = 0;while(true){
if((i__9136_9141 < count__9135_9140))
{var c_9142 = cljs.core._nth.call(null,chunk__9134_9139,i__9136_9141);append_BANG_.call(null,parent__$1,c_9142);
{
var G__9143 = seq__9133_9138;
var G__9144 = chunk__9134_9139;
var G__9145 = count__9135_9140;
var G__9146 = (i__9136_9141 + 1);
seq__9133_9138 = G__9143;
chunk__9134_9139 = G__9144;
count__9135_9140 = G__9145;
i__9136_9141 = G__9146;
continue;
}
} else
{var temp__4092__auto___9147 = cljs.core.seq.call(null,seq__9133_9138);if(cljs.core.truth_(temp__4092__auto___9147))
{var seq__9133_9148__$1 = temp__4092__auto___9147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9133_9148__$1))
{var c__4010__auto___9149 = cljs.core.chunk_first.call(null,seq__9133_9148__$1);{
var G__9150 = cljs.core.chunk_rest.call(null,seq__9133_9148__$1);
var G__9151 = c__4010__auto___9149;
var G__9152 = cljs.core.count.call(null,c__4010__auto___9149);
var G__9153 = 0;
seq__9133_9138 = G__9150;
chunk__9134_9139 = G__9151;
count__9135_9140 = G__9152;
i__9136_9141 = G__9153;
continue;
}
} else
{var c_9154 = cljs.core.first.call(null,seq__9133_9148__$1);append_BANG_.call(null,parent__$1,c_9154);
{
var G__9155 = cljs.core.next.call(null,seq__9133_9148__$1);
var G__9156 = null;
var G__9157 = 0;
var G__9158 = 0;
seq__9133_9138 = G__9155;
chunk__9134_9139 = G__9156;
count__9135_9140 = G__9157;
i__9136_9141 = G__9158;
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
var G__9137 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9137__delegate.call(this,parent,child,more_children);};
G__9137.cljs$lang$maxFixedArity = 2;
G__9137.cljs$lang$applyTo = (function (arglist__9159){
var parent = cljs.core.first(arglist__9159);
arglist__9159 = cljs.core.next(arglist__9159);
var child = cljs.core.first(arglist__9159);
var more_children = cljs.core.rest(arglist__9159);
return G__9137__delegate(parent,child,more_children);
});
G__9137.cljs$core$IFn$_invoke$arity$variadic = G__9137__delegate;
return G__9137;
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
var G__9168__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__9164_9169 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__9165_9170 = null;var count__9166_9171 = 0;var i__9167_9172 = 0;while(true){
if((i__9167_9172 < count__9166_9171))
{var c_9173 = cljs.core._nth.call(null,chunk__9165_9170,i__9167_9172);prepend_BANG_.call(null,parent__$1,c_9173);
{
var G__9174 = seq__9164_9169;
var G__9175 = chunk__9165_9170;
var G__9176 = count__9166_9171;
var G__9177 = (i__9167_9172 + 1);
seq__9164_9169 = G__9174;
chunk__9165_9170 = G__9175;
count__9166_9171 = G__9176;
i__9167_9172 = G__9177;
continue;
}
} else
{var temp__4092__auto___9178 = cljs.core.seq.call(null,seq__9164_9169);if(cljs.core.truth_(temp__4092__auto___9178))
{var seq__9164_9179__$1 = temp__4092__auto___9178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9164_9179__$1))
{var c__4010__auto___9180 = cljs.core.chunk_first.call(null,seq__9164_9179__$1);{
var G__9181 = cljs.core.chunk_rest.call(null,seq__9164_9179__$1);
var G__9182 = c__4010__auto___9180;
var G__9183 = cljs.core.count.call(null,c__4010__auto___9180);
var G__9184 = 0;
seq__9164_9169 = G__9181;
chunk__9165_9170 = G__9182;
count__9166_9171 = G__9183;
i__9167_9172 = G__9184;
continue;
}
} else
{var c_9185 = cljs.core.first.call(null,seq__9164_9179__$1);prepend_BANG_.call(null,parent__$1,c_9185);
{
var G__9186 = cljs.core.next.call(null,seq__9164_9179__$1);
var G__9187 = null;
var G__9188 = 0;
var G__9189 = 0;
seq__9164_9169 = G__9186;
chunk__9165_9170 = G__9187;
count__9166_9171 = G__9188;
i__9167_9172 = G__9189;
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
var G__9168 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9168__delegate.call(this,parent,child,more_children);};
G__9168.cljs$lang$maxFixedArity = 2;
G__9168.cljs$lang$applyTo = (function (arglist__9190){
var parent = cljs.core.first(arglist__9190);
arglist__9190 = cljs.core.next(arglist__9190);
var child = cljs.core.first(arglist__9190);
var more_children = cljs.core.rest(arglist__9190);
return G__9168__delegate(parent,child,more_children);
});
G__9168.cljs$core$IFn$_invoke$arity$variadic = G__9168__delegate;
return G__9168;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___9191 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___9191))
{var next_9192 = temp__4090__auto___9191;parent.insertBefore(actual_node,next_9192);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__9194 = dommy.template.__GT_node_like.call(null,parent);G__9194.innerHTML = "";
dommy.core.append_BANG_.call(null,G__9194,node_like);
return G__9194;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__9196 = elem__$1.parentNode;G__9196.removeChild(elem__$1);
return G__9196;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9202){var vec__9203 = p__9202;var k = cljs.core.nth.call(null,vec__9203,0,null);var v = cljs.core.nth.call(null,vec__9203,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t9204 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t9204 = (function (v,k,vec__9203,p__9202,container,key_selectors_map,template,selector_map,meta9205){
this.v = v;
this.k = k;
this.vec__9203 = vec__9203;
this.p__9202 = p__9202;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta9205 = meta9205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t9204.cljs$lang$type = true;
dommy.core.t9204.cljs$lang$ctorStr = "dommy.core/t9204";
dommy.core.t9204.cljs$lang$ctorPrWriter = (function (this__3830__auto__,writer__3831__auto__,opt__3832__auto__){return cljs.core._write.call(null,writer__3831__auto__,"dommy.core/t9204");
});
dommy.core.t9204.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t9204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9206){var self__ = this;
var _9206__$1 = this;return self__.meta9205;
});
dommy.core.t9204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9206,meta9205__$1){var self__ = this;
var _9206__$1 = this;return (new dommy.core.t9204(self__.v,self__.k,self__.vec__9203,self__.p__9202,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta9205__$1));
});
dommy.core.__GT_t9204 = (function __GT_t9204(v__$1,k__$1,vec__9203__$1,p__9202__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta9205){return (new dommy.core.t9204(v__$1,k__$1,vec__9203__$1,p__9202__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta9205));
});
}
return (new dommy.core.t9204(v,k,vec__9203,p__9202,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__9207_SHARP_){return p1__9207_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__9208_SHARP_){return !((p1__9208_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9209){var vec__9210 = p__9209;var special_mouse_event = cljs.core.nth.call(null,vec__9210,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__9210,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3291__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3291__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__9211){
var elem = cljs.core.first(arglist__9211);
arglist__9211 = cljs.core.next(arglist__9211);
var f = cljs.core.first(arglist__9211);
var args = cljs.core.rest(arglist__9211);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,elem_sel)))
{return cljs.core.juxt.call(null,(function (p1__9212_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__9212_SHARP_));
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
var vec__9236_9259 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9260 = cljs.core.nth.call(null,vec__9236_9259,0,null);var selector_9261 = cljs.core.nth.call(null,vec__9236_9259,1,null);var seq__9237_9262 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9244_9263 = null;var count__9245_9264 = 0;var i__9246_9265 = 0;while(true){
if((i__9246_9265 < count__9245_9264))
{var vec__9253_9266 = cljs.core._nth.call(null,chunk__9244_9263,i__9246_9265);var orig_type_9267 = cljs.core.nth.call(null,vec__9253_9266,0,null);var f_9268 = cljs.core.nth.call(null,vec__9253_9266,1,null);var seq__9247_9269 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9267,new cljs.core.PersistentArrayMap.fromArray([orig_type_9267,cljs.core.identity], true, false)));var chunk__9249_9270 = null;var count__9250_9271 = 0;var i__9251_9272 = 0;while(true){
if((i__9251_9272 < count__9250_9271))
{var vec__9254_9273 = cljs.core._nth.call(null,chunk__9249_9270,i__9251_9272);var actual_type_9274 = cljs.core.nth.call(null,vec__9254_9273,0,null);var factory_9275 = cljs.core.nth.call(null,vec__9254_9273,1,null);var canonical_f_9276 = (cljs.core.truth_(selector_9261)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9260,selector_9261):cljs.core.identity).call(null,factory_9275.call(null,f_9268));dommy.core.update_event_listeners_BANG_.call(null,elem_9260,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9261,actual_type_9274,f_9268], null),canonical_f_9276);
if(cljs.core.truth_(elem_9260.addEventListener))
{elem_9260.addEventListener(cljs.core.name.call(null,actual_type_9274),canonical_f_9276);
} else
{elem_9260.attachEvent(cljs.core.name.call(null,actual_type_9274),canonical_f_9276);
}
{
var G__9277 = seq__9247_9269;
var G__9278 = chunk__9249_9270;
var G__9279 = count__9250_9271;
var G__9280 = (i__9251_9272 + 1);
seq__9247_9269 = G__9277;
chunk__9249_9270 = G__9278;
count__9250_9271 = G__9279;
i__9251_9272 = G__9280;
continue;
}
} else
{var temp__4092__auto___9281 = cljs.core.seq.call(null,seq__9247_9269);if(cljs.core.truth_(temp__4092__auto___9281))
{var seq__9247_9282__$1 = temp__4092__auto___9281;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9247_9282__$1))
{var c__4010__auto___9283 = cljs.core.chunk_first.call(null,seq__9247_9282__$1);{
var G__9284 = cljs.core.chunk_rest.call(null,seq__9247_9282__$1);
var G__9285 = c__4010__auto___9283;
var G__9286 = cljs.core.count.call(null,c__4010__auto___9283);
var G__9287 = 0;
seq__9247_9269 = G__9284;
chunk__9249_9270 = G__9285;
count__9250_9271 = G__9286;
i__9251_9272 = G__9287;
continue;
}
} else
{var vec__9255_9288 = cljs.core.first.call(null,seq__9247_9282__$1);var actual_type_9289 = cljs.core.nth.call(null,vec__9255_9288,0,null);var factory_9290 = cljs.core.nth.call(null,vec__9255_9288,1,null);var canonical_f_9291 = (cljs.core.truth_(selector_9261)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9260,selector_9261):cljs.core.identity).call(null,factory_9290.call(null,f_9268));dommy.core.update_event_listeners_BANG_.call(null,elem_9260,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9261,actual_type_9289,f_9268], null),canonical_f_9291);
if(cljs.core.truth_(elem_9260.addEventListener))
{elem_9260.addEventListener(cljs.core.name.call(null,actual_type_9289),canonical_f_9291);
} else
{elem_9260.attachEvent(cljs.core.name.call(null,actual_type_9289),canonical_f_9291);
}
{
var G__9292 = cljs.core.next.call(null,seq__9247_9282__$1);
var G__9293 = null;
var G__9294 = 0;
var G__9295 = 0;
seq__9247_9269 = G__9292;
chunk__9249_9270 = G__9293;
count__9250_9271 = G__9294;
i__9251_9272 = G__9295;
continue;
}
}
} else
{}
}
break;
}
{
var G__9296 = seq__9237_9262;
var G__9297 = chunk__9244_9263;
var G__9298 = count__9245_9264;
var G__9299 = (i__9246_9265 + 1);
seq__9237_9262 = G__9296;
chunk__9244_9263 = G__9297;
count__9245_9264 = G__9298;
i__9246_9265 = G__9299;
continue;
}
} else
{var temp__4092__auto___9300 = cljs.core.seq.call(null,seq__9237_9262);if(cljs.core.truth_(temp__4092__auto___9300))
{var seq__9237_9301__$1 = temp__4092__auto___9300;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9237_9301__$1))
{var c__4010__auto___9302 = cljs.core.chunk_first.call(null,seq__9237_9301__$1);{
var G__9303 = cljs.core.chunk_rest.call(null,seq__9237_9301__$1);
var G__9304 = c__4010__auto___9302;
var G__9305 = cljs.core.count.call(null,c__4010__auto___9302);
var G__9306 = 0;
seq__9237_9262 = G__9303;
chunk__9244_9263 = G__9304;
count__9245_9264 = G__9305;
i__9246_9265 = G__9306;
continue;
}
} else
{var vec__9256_9307 = cljs.core.first.call(null,seq__9237_9301__$1);var orig_type_9308 = cljs.core.nth.call(null,vec__9256_9307,0,null);var f_9309 = cljs.core.nth.call(null,vec__9256_9307,1,null);var seq__9238_9310 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9308,new cljs.core.PersistentArrayMap.fromArray([orig_type_9308,cljs.core.identity], true, false)));var chunk__9240_9311 = null;var count__9241_9312 = 0;var i__9242_9313 = 0;while(true){
if((i__9242_9313 < count__9241_9312))
{var vec__9257_9314 = cljs.core._nth.call(null,chunk__9240_9311,i__9242_9313);var actual_type_9315 = cljs.core.nth.call(null,vec__9257_9314,0,null);var factory_9316 = cljs.core.nth.call(null,vec__9257_9314,1,null);var canonical_f_9317 = (cljs.core.truth_(selector_9261)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9260,selector_9261):cljs.core.identity).call(null,factory_9316.call(null,f_9309));dommy.core.update_event_listeners_BANG_.call(null,elem_9260,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9261,actual_type_9315,f_9309], null),canonical_f_9317);
if(cljs.core.truth_(elem_9260.addEventListener))
{elem_9260.addEventListener(cljs.core.name.call(null,actual_type_9315),canonical_f_9317);
} else
{elem_9260.attachEvent(cljs.core.name.call(null,actual_type_9315),canonical_f_9317);
}
{
var G__9318 = seq__9238_9310;
var G__9319 = chunk__9240_9311;
var G__9320 = count__9241_9312;
var G__9321 = (i__9242_9313 + 1);
seq__9238_9310 = G__9318;
chunk__9240_9311 = G__9319;
count__9241_9312 = G__9320;
i__9242_9313 = G__9321;
continue;
}
} else
{var temp__4092__auto___9322__$1 = cljs.core.seq.call(null,seq__9238_9310);if(cljs.core.truth_(temp__4092__auto___9322__$1))
{var seq__9238_9323__$1 = temp__4092__auto___9322__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9238_9323__$1))
{var c__4010__auto___9324 = cljs.core.chunk_first.call(null,seq__9238_9323__$1);{
var G__9325 = cljs.core.chunk_rest.call(null,seq__9238_9323__$1);
var G__9326 = c__4010__auto___9324;
var G__9327 = cljs.core.count.call(null,c__4010__auto___9324);
var G__9328 = 0;
seq__9238_9310 = G__9325;
chunk__9240_9311 = G__9326;
count__9241_9312 = G__9327;
i__9242_9313 = G__9328;
continue;
}
} else
{var vec__9258_9329 = cljs.core.first.call(null,seq__9238_9323__$1);var actual_type_9330 = cljs.core.nth.call(null,vec__9258_9329,0,null);var factory_9331 = cljs.core.nth.call(null,vec__9258_9329,1,null);var canonical_f_9332 = (cljs.core.truth_(selector_9261)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9260,selector_9261):cljs.core.identity).call(null,factory_9331.call(null,f_9309));dommy.core.update_event_listeners_BANG_.call(null,elem_9260,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9261,actual_type_9330,f_9309], null),canonical_f_9332);
if(cljs.core.truth_(elem_9260.addEventListener))
{elem_9260.addEventListener(cljs.core.name.call(null,actual_type_9330),canonical_f_9332);
} else
{elem_9260.attachEvent(cljs.core.name.call(null,actual_type_9330),canonical_f_9332);
}
{
var G__9333 = cljs.core.next.call(null,seq__9238_9323__$1);
var G__9334 = null;
var G__9335 = 0;
var G__9336 = 0;
seq__9238_9310 = G__9333;
chunk__9240_9311 = G__9334;
count__9241_9312 = G__9335;
i__9242_9313 = G__9336;
continue;
}
}
} else
{}
}
break;
}
{
var G__9337 = cljs.core.next.call(null,seq__9237_9301__$1);
var G__9338 = null;
var G__9339 = 0;
var G__9340 = 0;
seq__9237_9262 = G__9337;
chunk__9244_9263 = G__9338;
count__9245_9264 = G__9339;
i__9246_9265 = G__9340;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__9341){
var elem_sel = cljs.core.first(arglist__9341);
var type_fs = cljs.core.rest(arglist__9341);
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
var vec__9365_9388 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9389 = cljs.core.nth.call(null,vec__9365_9388,0,null);var selector_9390 = cljs.core.nth.call(null,vec__9365_9388,1,null);var seq__9366_9391 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9373_9392 = null;var count__9374_9393 = 0;var i__9375_9394 = 0;while(true){
if((i__9375_9394 < count__9374_9393))
{var vec__9382_9395 = cljs.core._nth.call(null,chunk__9373_9392,i__9375_9394);var orig_type_9396 = cljs.core.nth.call(null,vec__9382_9395,0,null);var f_9397 = cljs.core.nth.call(null,vec__9382_9395,1,null);var seq__9376_9398 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9396,new cljs.core.PersistentArrayMap.fromArray([orig_type_9396,cljs.core.identity], true, false)));var chunk__9378_9399 = null;var count__9379_9400 = 0;var i__9380_9401 = 0;while(true){
if((i__9380_9401 < count__9379_9400))
{var vec__9383_9402 = cljs.core._nth.call(null,chunk__9378_9399,i__9380_9401);var actual_type_9403 = cljs.core.nth.call(null,vec__9383_9402,0,null);var __9404 = cljs.core.nth.call(null,vec__9383_9402,1,null);var keys_9405 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9390,actual_type_9403,f_9397], null);var canonical_f_9406 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9389),keys_9405);dommy.core.update_event_listeners_BANG_.call(null,elem_9389,dommy.utils.dissoc_in,keys_9405);
if(cljs.core.truth_(elem_9389.removeEventListener))
{elem_9389.removeEventListener(cljs.core.name.call(null,actual_type_9403),canonical_f_9406);
} else
{elem_9389.detachEvent(cljs.core.name.call(null,actual_type_9403),canonical_f_9406);
}
{
var G__9407 = seq__9376_9398;
var G__9408 = chunk__9378_9399;
var G__9409 = count__9379_9400;
var G__9410 = (i__9380_9401 + 1);
seq__9376_9398 = G__9407;
chunk__9378_9399 = G__9408;
count__9379_9400 = G__9409;
i__9380_9401 = G__9410;
continue;
}
} else
{var temp__4092__auto___9411 = cljs.core.seq.call(null,seq__9376_9398);if(cljs.core.truth_(temp__4092__auto___9411))
{var seq__9376_9412__$1 = temp__4092__auto___9411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9376_9412__$1))
{var c__4010__auto___9413 = cljs.core.chunk_first.call(null,seq__9376_9412__$1);{
var G__9414 = cljs.core.chunk_rest.call(null,seq__9376_9412__$1);
var G__9415 = c__4010__auto___9413;
var G__9416 = cljs.core.count.call(null,c__4010__auto___9413);
var G__9417 = 0;
seq__9376_9398 = G__9414;
chunk__9378_9399 = G__9415;
count__9379_9400 = G__9416;
i__9380_9401 = G__9417;
continue;
}
} else
{var vec__9384_9418 = cljs.core.first.call(null,seq__9376_9412__$1);var actual_type_9419 = cljs.core.nth.call(null,vec__9384_9418,0,null);var __9420 = cljs.core.nth.call(null,vec__9384_9418,1,null);var keys_9421 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9390,actual_type_9419,f_9397], null);var canonical_f_9422 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9389),keys_9421);dommy.core.update_event_listeners_BANG_.call(null,elem_9389,dommy.utils.dissoc_in,keys_9421);
if(cljs.core.truth_(elem_9389.removeEventListener))
{elem_9389.removeEventListener(cljs.core.name.call(null,actual_type_9419),canonical_f_9422);
} else
{elem_9389.detachEvent(cljs.core.name.call(null,actual_type_9419),canonical_f_9422);
}
{
var G__9423 = cljs.core.next.call(null,seq__9376_9412__$1);
var G__9424 = null;
var G__9425 = 0;
var G__9426 = 0;
seq__9376_9398 = G__9423;
chunk__9378_9399 = G__9424;
count__9379_9400 = G__9425;
i__9380_9401 = G__9426;
continue;
}
}
} else
{}
}
break;
}
{
var G__9427 = seq__9366_9391;
var G__9428 = chunk__9373_9392;
var G__9429 = count__9374_9393;
var G__9430 = (i__9375_9394 + 1);
seq__9366_9391 = G__9427;
chunk__9373_9392 = G__9428;
count__9374_9393 = G__9429;
i__9375_9394 = G__9430;
continue;
}
} else
{var temp__4092__auto___9431 = cljs.core.seq.call(null,seq__9366_9391);if(cljs.core.truth_(temp__4092__auto___9431))
{var seq__9366_9432__$1 = temp__4092__auto___9431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9366_9432__$1))
{var c__4010__auto___9433 = cljs.core.chunk_first.call(null,seq__9366_9432__$1);{
var G__9434 = cljs.core.chunk_rest.call(null,seq__9366_9432__$1);
var G__9435 = c__4010__auto___9433;
var G__9436 = cljs.core.count.call(null,c__4010__auto___9433);
var G__9437 = 0;
seq__9366_9391 = G__9434;
chunk__9373_9392 = G__9435;
count__9374_9393 = G__9436;
i__9375_9394 = G__9437;
continue;
}
} else
{var vec__9385_9438 = cljs.core.first.call(null,seq__9366_9432__$1);var orig_type_9439 = cljs.core.nth.call(null,vec__9385_9438,0,null);var f_9440 = cljs.core.nth.call(null,vec__9385_9438,1,null);var seq__9367_9441 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9439,new cljs.core.PersistentArrayMap.fromArray([orig_type_9439,cljs.core.identity], true, false)));var chunk__9369_9442 = null;var count__9370_9443 = 0;var i__9371_9444 = 0;while(true){
if((i__9371_9444 < count__9370_9443))
{var vec__9386_9445 = cljs.core._nth.call(null,chunk__9369_9442,i__9371_9444);var actual_type_9446 = cljs.core.nth.call(null,vec__9386_9445,0,null);var __9447 = cljs.core.nth.call(null,vec__9386_9445,1,null);var keys_9448 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9390,actual_type_9446,f_9440], null);var canonical_f_9449 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9389),keys_9448);dommy.core.update_event_listeners_BANG_.call(null,elem_9389,dommy.utils.dissoc_in,keys_9448);
if(cljs.core.truth_(elem_9389.removeEventListener))
{elem_9389.removeEventListener(cljs.core.name.call(null,actual_type_9446),canonical_f_9449);
} else
{elem_9389.detachEvent(cljs.core.name.call(null,actual_type_9446),canonical_f_9449);
}
{
var G__9450 = seq__9367_9441;
var G__9451 = chunk__9369_9442;
var G__9452 = count__9370_9443;
var G__9453 = (i__9371_9444 + 1);
seq__9367_9441 = G__9450;
chunk__9369_9442 = G__9451;
count__9370_9443 = G__9452;
i__9371_9444 = G__9453;
continue;
}
} else
{var temp__4092__auto___9454__$1 = cljs.core.seq.call(null,seq__9367_9441);if(cljs.core.truth_(temp__4092__auto___9454__$1))
{var seq__9367_9455__$1 = temp__4092__auto___9454__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9367_9455__$1))
{var c__4010__auto___9456 = cljs.core.chunk_first.call(null,seq__9367_9455__$1);{
var G__9457 = cljs.core.chunk_rest.call(null,seq__9367_9455__$1);
var G__9458 = c__4010__auto___9456;
var G__9459 = cljs.core.count.call(null,c__4010__auto___9456);
var G__9460 = 0;
seq__9367_9441 = G__9457;
chunk__9369_9442 = G__9458;
count__9370_9443 = G__9459;
i__9371_9444 = G__9460;
continue;
}
} else
{var vec__9387_9461 = cljs.core.first.call(null,seq__9367_9455__$1);var actual_type_9462 = cljs.core.nth.call(null,vec__9387_9461,0,null);var __9463 = cljs.core.nth.call(null,vec__9387_9461,1,null);var keys_9464 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9390,actual_type_9462,f_9440], null);var canonical_f_9465 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9389),keys_9464);dommy.core.update_event_listeners_BANG_.call(null,elem_9389,dommy.utils.dissoc_in,keys_9464);
if(cljs.core.truth_(elem_9389.removeEventListener))
{elem_9389.removeEventListener(cljs.core.name.call(null,actual_type_9462),canonical_f_9465);
} else
{elem_9389.detachEvent(cljs.core.name.call(null,actual_type_9462),canonical_f_9465);
}
{
var G__9466 = cljs.core.next.call(null,seq__9367_9455__$1);
var G__9467 = null;
var G__9468 = 0;
var G__9469 = 0;
seq__9367_9441 = G__9466;
chunk__9369_9442 = G__9467;
count__9370_9443 = G__9468;
i__9371_9444 = G__9469;
continue;
}
}
} else
{}
}
break;
}
{
var G__9470 = cljs.core.next.call(null,seq__9366_9432__$1);
var G__9471 = null;
var G__9472 = 0;
var G__9473 = 0;
seq__9366_9391 = G__9470;
chunk__9373_9392 = G__9471;
count__9374_9393 = G__9472;
i__9375_9394 = G__9473;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9474){
var elem_sel = cljs.core.first(arglist__9474);
var type_fs = cljs.core.rest(arglist__9474);
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
var vec__9482_9489 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9490 = cljs.core.nth.call(null,vec__9482_9489,0,null);var selector_9491 = cljs.core.nth.call(null,vec__9482_9489,1,null);var seq__9483_9492 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__9484_9493 = null;var count__9485_9494 = 0;var i__9486_9495 = 0;while(true){
if((i__9486_9495 < count__9485_9494))
{var vec__9487_9496 = cljs.core._nth.call(null,chunk__9484_9493,i__9486_9495);var type_9497 = cljs.core.nth.call(null,vec__9487_9496,0,null);var f_9498 = cljs.core.nth.call(null,vec__9487_9496,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9497,((function (seq__9483_9492,chunk__9484_9493,count__9485_9494,i__9486_9495,vec__9487_9496,type_9497,f_9498){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9497,this_fn);
return f_9498.call(null,e);
});})(seq__9483_9492,chunk__9484_9493,count__9485_9494,i__9486_9495,vec__9487_9496,type_9497,f_9498))
);
{
var G__9499 = seq__9483_9492;
var G__9500 = chunk__9484_9493;
var G__9501 = count__9485_9494;
var G__9502 = (i__9486_9495 + 1);
seq__9483_9492 = G__9499;
chunk__9484_9493 = G__9500;
count__9485_9494 = G__9501;
i__9486_9495 = G__9502;
continue;
}
} else
{var temp__4092__auto___9503 = cljs.core.seq.call(null,seq__9483_9492);if(cljs.core.truth_(temp__4092__auto___9503))
{var seq__9483_9504__$1 = temp__4092__auto___9503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9483_9504__$1))
{var c__4010__auto___9505 = cljs.core.chunk_first.call(null,seq__9483_9504__$1);{
var G__9506 = cljs.core.chunk_rest.call(null,seq__9483_9504__$1);
var G__9507 = c__4010__auto___9505;
var G__9508 = cljs.core.count.call(null,c__4010__auto___9505);
var G__9509 = 0;
seq__9483_9492 = G__9506;
chunk__9484_9493 = G__9507;
count__9485_9494 = G__9508;
i__9486_9495 = G__9509;
continue;
}
} else
{var vec__9488_9510 = cljs.core.first.call(null,seq__9483_9504__$1);var type_9511 = cljs.core.nth.call(null,vec__9488_9510,0,null);var f_9512 = cljs.core.nth.call(null,vec__9488_9510,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_9511,((function (seq__9483_9492,chunk__9484_9493,count__9485_9494,i__9486_9495,vec__9488_9510,type_9511,f_9512,seq__9483_9504__$1,temp__4092__auto___9503){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9511,this_fn);
return f_9512.call(null,e);
});})(seq__9483_9492,chunk__9484_9493,count__9485_9494,i__9486_9495,vec__9488_9510,type_9511,f_9512,seq__9483_9504__$1,temp__4092__auto___9503))
);
{
var G__9513 = cljs.core.next.call(null,seq__9483_9504__$1);
var G__9514 = null;
var G__9515 = 0;
var G__9516 = 0;
seq__9483_9492 = G__9513;
chunk__9484_9493 = G__9514;
count__9485_9494 = G__9515;
i__9486_9495 = G__9516;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9517){
var elem_sel = cljs.core.first(arglist__9517);
var type_fs = cljs.core.rest(arglist__9517);
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
var fire_BANG___delegate = function (node,event_type,p__9518){var vec__9520 = p__9518;var update_event_BANG_ = cljs.core.nth.call(null,vec__9520,0,null);if(cljs.core.truth_(dommy.core.descendant_QMARK_.call(null,node,document.documentElement)))
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
var p__9518 = null;if (arguments.length > 2) {
  p__9518 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__9518);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__9521){
var node = cljs.core.first(arglist__9521);
arglist__9521 = cljs.core.next(arglist__9521);
var event_type = cljs.core.first(arglist__9521);
var p__9518 = cljs.core.rest(arglist__9521);
return fire_BANG___delegate(node,event_type,p__9518);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
