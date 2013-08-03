goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.utils');
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
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");
(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var or__3943__auto__ = elem__$1.textContent;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return elem__$1.innerText;
}
});
dommy.core.value = (function value(elem){
return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.value = value;
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
var append_BANG___2 = (function (parent,child){
var G__5472 = dommy.template.__GT_node_like.call(null,parent);
G__5472.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__5472;
});
var append_BANG___3 = (function() { 
var G__5477__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__5473_5478 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__5474_5479 = null;
var count__5475_5480 = 0;
var i__5476_5481 = 0;
while(true){
if((i__5476_5481 < count__5475_5480))
{var c_5482 = cljs.core._nth.call(null,chunk__5474_5479,i__5476_5481);
append_BANG_.call(null,parent__$1,c_5482);
{
var G__5483 = seq__5473_5478;
var G__5484 = chunk__5474_5479;
var G__5485 = count__5475_5480;
var G__5486 = (i__5476_5481 + 1);
seq__5473_5478 = G__5483;
chunk__5474_5479 = G__5484;
count__5475_5480 = G__5485;
i__5476_5481 = G__5486;
continue;
}
} else
{var temp__4092__auto___5487 = cljs.core.seq.call(null,seq__5473_5478);
if(temp__4092__auto___5487)
{var seq__5473_5488__$1 = temp__4092__auto___5487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5473_5488__$1))
{var c__4479__auto___5489 = cljs.core.chunk_first.call(null,seq__5473_5488__$1);
{
var G__5490 = cljs.core.chunk_rest.call(null,seq__5473_5488__$1);
var G__5491 = c__4479__auto___5489;
var G__5492 = cljs.core.count.call(null,c__4479__auto___5489);
var G__5493 = 0;
seq__5473_5478 = G__5490;
chunk__5474_5479 = G__5491;
count__5475_5480 = G__5492;
i__5476_5481 = G__5493;
continue;
}
} else
{var c_5494 = cljs.core.first.call(null,seq__5473_5488__$1);
append_BANG_.call(null,parent__$1,c_5494);
{
var G__5495 = cljs.core.next.call(null,seq__5473_5488__$1);
var G__5496 = null;
var G__5497 = 0;
var G__5498 = 0;
seq__5473_5478 = G__5495;
chunk__5474_5479 = G__5496;
count__5475_5480 = G__5497;
i__5476_5481 = G__5498;
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
var G__5477 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5477__delegate.call(this, parent, child, more_children);
};
G__5477.cljs$lang$maxFixedArity = 2;
G__5477.cljs$lang$applyTo = (function (arglist__5499){
var parent = cljs.core.first(arglist__5499);
arglist__5499 = cljs.core.next(arglist__5499);
var child = cljs.core.first(arglist__5499);
var more_children = cljs.core.rest(arglist__5499);
return G__5477__delegate(parent, child, more_children);
});
G__5477.cljs$core$IFn$_invoke$arity$variadic = G__5477__delegate;
return G__5477;
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
var prepend_BANG___2 = (function (parent,child){
var G__5505 = dommy.template.__GT_node_like.call(null,parent);
G__5505.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__5505;
});
var prepend_BANG___3 = (function() { 
var G__5510__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__5506_5511 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__5507_5512 = null;
var count__5508_5513 = 0;
var i__5509_5514 = 0;
while(true){
if((i__5509_5514 < count__5508_5513))
{var c_5515 = cljs.core._nth.call(null,chunk__5507_5512,i__5509_5514);
prepend_BANG_.call(null,parent__$1,c_5515);
{
var G__5516 = seq__5506_5511;
var G__5517 = chunk__5507_5512;
var G__5518 = count__5508_5513;
var G__5519 = (i__5509_5514 + 1);
seq__5506_5511 = G__5516;
chunk__5507_5512 = G__5517;
count__5508_5513 = G__5518;
i__5509_5514 = G__5519;
continue;
}
} else
{var temp__4092__auto___5520 = cljs.core.seq.call(null,seq__5506_5511);
if(temp__4092__auto___5520)
{var seq__5506_5521__$1 = temp__4092__auto___5520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5506_5521__$1))
{var c__4479__auto___5522 = cljs.core.chunk_first.call(null,seq__5506_5521__$1);
{
var G__5523 = cljs.core.chunk_rest.call(null,seq__5506_5521__$1);
var G__5524 = c__4479__auto___5522;
var G__5525 = cljs.core.count.call(null,c__4479__auto___5522);
var G__5526 = 0;
seq__5506_5511 = G__5523;
chunk__5507_5512 = G__5524;
count__5508_5513 = G__5525;
i__5509_5514 = G__5526;
continue;
}
} else
{var c_5527 = cljs.core.first.call(null,seq__5506_5521__$1);
prepend_BANG_.call(null,parent__$1,c_5527);
{
var G__5528 = cljs.core.next.call(null,seq__5506_5521__$1);
var G__5529 = null;
var G__5530 = 0;
var G__5531 = 0;
seq__5506_5511 = G__5528;
chunk__5507_5512 = G__5529;
count__5508_5513 = G__5530;
i__5509_5514 = G__5531;
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
var G__5510 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5510__delegate.call(this, parent, child, more_children);
};
G__5510.cljs$lang$maxFixedArity = 2;
G__5510.cljs$lang$applyTo = (function (arglist__5532){
var parent = cljs.core.first(arglist__5532);
arglist__5532 = cljs.core.next(arglist__5532);
var child = cljs.core.first(arglist__5532);
var more_children = cljs.core.rest(arglist__5532);
return G__5510__delegate(parent, child, more_children);
});
G__5510.cljs$core$IFn$_invoke$arity$variadic = G__5510__delegate;
return G__5510;
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
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
if(cljs.core.truth_(other__$1.parentNode))
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
var parent = other__$1.parentNode;
var temp__4090__auto___5533 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4090__auto___5533))
{var next_5534 = temp__4090__auto___5533;
parent.insertBefore(actual_node,next_5534);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var new$__$1 = dommy.template.__GT_node_like.call(null,new$);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){
var G__5536 = dommy.template.__GT_node_like.call(null,parent);
G__5536.innerHTML = "";
dommy.core.append_BANG_.call(null,G__5536,node_like);
return G__5536;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__5538 = elem__$1.parentNode;
G__5538.removeChild(elem__$1);
return G__5538;
});
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((function (){var or__3943__auto__ = cljs.core.string_QMARK_.call(null,data);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,data);
}
})())
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__5539_SHARP_){
return p1__5539_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));
return (function (elem){
return (matches.indexOf(elem) >= 0);
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
var closest__2 = (function (elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){
var base__$1 = dommy.template.__GT_node_like.call(null,base);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__5540_SHARP_){
return !((p1__5540_SHARP_ === base__$1));
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
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);
var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);
if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5541){
var vec__5542 = p__5541;
var special_mouse_event = cljs.core.nth.call(null,vec__5542,0,null);
var real_mouse_event = cljs.core.nth.call(null,vec__5542,1,null);
return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3941__auto__ = related_target;
if(cljs.core.truth_(and__3941__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3941__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true)], true);
}),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:mouseenter","\uFDD0:mouseover","\uFDD0:mouseleave","\uFDD0:mouseout"], true)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var temp__4092__auto__ = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);
if(cljs.core.truth_(temp__4092__auto__))
{var selected_target = temp__4092__auto__;
event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__3943__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_event_listeners_BANG___delegate.call(this, elem, f, args);
};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__5543){
var elem = cljs.core.first(arglist__5543);
arglist__5543 = cljs.core.next(arglist__5543);
var f = cljs.core.first(arglist__5543);
var args = cljs.core.rest(arglist__5543);
return update_event_listeners_BANG___delegate(elem, f, args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__5544_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__5544_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return cljs.core.PersistentVector.fromArray([dommy.template.__GT_node_like.call(null,elem_sel),null], true);
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
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__5568_5591 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_5592 = cljs.core.nth.call(null,vec__5568_5591,0,null);
var selector_5593 = cljs.core.nth.call(null,vec__5568_5591,1,null);
var seq__5569_5594 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__5576_5595 = null;
var count__5577_5596 = 0;
var i__5578_5597 = 0;
while(true){
if((i__5578_5597 < count__5577_5596))
{var vec__5585_5598 = cljs.core._nth.call(null,chunk__5576_5595,i__5578_5597);
var orig_type_5599 = cljs.core.nth.call(null,vec__5585_5598,0,null);
var f_5600 = cljs.core.nth.call(null,vec__5585_5598,1,null);
var seq__5579_5601 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5599,cljs.core.PersistentArrayMap.fromArray([orig_type_5599,cljs.core.identity], true)));
var chunk__5581_5602 = null;
var count__5582_5603 = 0;
var i__5583_5604 = 0;
while(true){
if((i__5583_5604 < count__5582_5603))
{var vec__5586_5605 = cljs.core._nth.call(null,chunk__5581_5602,i__5583_5604);
var actual_type_5606 = cljs.core.nth.call(null,vec__5586_5605,0,null);
var factory_5607 = cljs.core.nth.call(null,vec__5586_5605,1,null);
var canonical_f_5608 = (cljs.core.truth_(selector_5593)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5592,selector_5593):cljs.core.identity).call(null,factory_5607.call(null,f_5600));
dommy.core.update_event_listeners_BANG_.call(null,elem_5592,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5593,actual_type_5606,f_5600], true),canonical_f_5608);
if(cljs.core.truth_(elem_5592.addEventListener))
{elem_5592.addEventListener(cljs.core.name.call(null,actual_type_5606),canonical_f_5608);
} else
{elem_5592.attachEvent(cljs.core.name.call(null,actual_type_5606),canonical_f_5608);
}
{
var G__5609 = seq__5579_5601;
var G__5610 = chunk__5581_5602;
var G__5611 = count__5582_5603;
var G__5612 = (i__5583_5604 + 1);
seq__5579_5601 = G__5609;
chunk__5581_5602 = G__5610;
count__5582_5603 = G__5611;
i__5583_5604 = G__5612;
continue;
}
} else
{var temp__4092__auto___5613 = cljs.core.seq.call(null,seq__5579_5601);
if(temp__4092__auto___5613)
{var seq__5579_5614__$1 = temp__4092__auto___5613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5579_5614__$1))
{var c__4479__auto___5615 = cljs.core.chunk_first.call(null,seq__5579_5614__$1);
{
var G__5616 = cljs.core.chunk_rest.call(null,seq__5579_5614__$1);
var G__5617 = c__4479__auto___5615;
var G__5618 = cljs.core.count.call(null,c__4479__auto___5615);
var G__5619 = 0;
seq__5579_5601 = G__5616;
chunk__5581_5602 = G__5617;
count__5582_5603 = G__5618;
i__5583_5604 = G__5619;
continue;
}
} else
{var vec__5587_5620 = cljs.core.first.call(null,seq__5579_5614__$1);
var actual_type_5621 = cljs.core.nth.call(null,vec__5587_5620,0,null);
var factory_5622 = cljs.core.nth.call(null,vec__5587_5620,1,null);
var canonical_f_5623 = (cljs.core.truth_(selector_5593)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5592,selector_5593):cljs.core.identity).call(null,factory_5622.call(null,f_5600));
dommy.core.update_event_listeners_BANG_.call(null,elem_5592,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5593,actual_type_5621,f_5600], true),canonical_f_5623);
if(cljs.core.truth_(elem_5592.addEventListener))
{elem_5592.addEventListener(cljs.core.name.call(null,actual_type_5621),canonical_f_5623);
} else
{elem_5592.attachEvent(cljs.core.name.call(null,actual_type_5621),canonical_f_5623);
}
{
var G__5624 = cljs.core.next.call(null,seq__5579_5614__$1);
var G__5625 = null;
var G__5626 = 0;
var G__5627 = 0;
seq__5579_5601 = G__5624;
chunk__5581_5602 = G__5625;
count__5582_5603 = G__5626;
i__5583_5604 = G__5627;
continue;
}
}
} else
{}
}
break;
}
{
var G__5628 = seq__5569_5594;
var G__5629 = chunk__5576_5595;
var G__5630 = count__5577_5596;
var G__5631 = (i__5578_5597 + 1);
seq__5569_5594 = G__5628;
chunk__5576_5595 = G__5629;
count__5577_5596 = G__5630;
i__5578_5597 = G__5631;
continue;
}
} else
{var temp__4092__auto___5632 = cljs.core.seq.call(null,seq__5569_5594);
if(temp__4092__auto___5632)
{var seq__5569_5633__$1 = temp__4092__auto___5632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5569_5633__$1))
{var c__4479__auto___5634 = cljs.core.chunk_first.call(null,seq__5569_5633__$1);
{
var G__5635 = cljs.core.chunk_rest.call(null,seq__5569_5633__$1);
var G__5636 = c__4479__auto___5634;
var G__5637 = cljs.core.count.call(null,c__4479__auto___5634);
var G__5638 = 0;
seq__5569_5594 = G__5635;
chunk__5576_5595 = G__5636;
count__5577_5596 = G__5637;
i__5578_5597 = G__5638;
continue;
}
} else
{var vec__5588_5639 = cljs.core.first.call(null,seq__5569_5633__$1);
var orig_type_5640 = cljs.core.nth.call(null,vec__5588_5639,0,null);
var f_5641 = cljs.core.nth.call(null,vec__5588_5639,1,null);
var seq__5570_5642 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5640,cljs.core.PersistentArrayMap.fromArray([orig_type_5640,cljs.core.identity], true)));
var chunk__5572_5643 = null;
var count__5573_5644 = 0;
var i__5574_5645 = 0;
while(true){
if((i__5574_5645 < count__5573_5644))
{var vec__5589_5646 = cljs.core._nth.call(null,chunk__5572_5643,i__5574_5645);
var actual_type_5647 = cljs.core.nth.call(null,vec__5589_5646,0,null);
var factory_5648 = cljs.core.nth.call(null,vec__5589_5646,1,null);
var canonical_f_5649 = (cljs.core.truth_(selector_5593)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5592,selector_5593):cljs.core.identity).call(null,factory_5648.call(null,f_5641));
dommy.core.update_event_listeners_BANG_.call(null,elem_5592,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5593,actual_type_5647,f_5641], true),canonical_f_5649);
if(cljs.core.truth_(elem_5592.addEventListener))
{elem_5592.addEventListener(cljs.core.name.call(null,actual_type_5647),canonical_f_5649);
} else
{elem_5592.attachEvent(cljs.core.name.call(null,actual_type_5647),canonical_f_5649);
}
{
var G__5650 = seq__5570_5642;
var G__5651 = chunk__5572_5643;
var G__5652 = count__5573_5644;
var G__5653 = (i__5574_5645 + 1);
seq__5570_5642 = G__5650;
chunk__5572_5643 = G__5651;
count__5573_5644 = G__5652;
i__5574_5645 = G__5653;
continue;
}
} else
{var temp__4092__auto___5654__$1 = cljs.core.seq.call(null,seq__5570_5642);
if(temp__4092__auto___5654__$1)
{var seq__5570_5655__$1 = temp__4092__auto___5654__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5570_5655__$1))
{var c__4479__auto___5656 = cljs.core.chunk_first.call(null,seq__5570_5655__$1);
{
var G__5657 = cljs.core.chunk_rest.call(null,seq__5570_5655__$1);
var G__5658 = c__4479__auto___5656;
var G__5659 = cljs.core.count.call(null,c__4479__auto___5656);
var G__5660 = 0;
seq__5570_5642 = G__5657;
chunk__5572_5643 = G__5658;
count__5573_5644 = G__5659;
i__5574_5645 = G__5660;
continue;
}
} else
{var vec__5590_5661 = cljs.core.first.call(null,seq__5570_5655__$1);
var actual_type_5662 = cljs.core.nth.call(null,vec__5590_5661,0,null);
var factory_5663 = cljs.core.nth.call(null,vec__5590_5661,1,null);
var canonical_f_5664 = (cljs.core.truth_(selector_5593)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5592,selector_5593):cljs.core.identity).call(null,factory_5663.call(null,f_5641));
dommy.core.update_event_listeners_BANG_.call(null,elem_5592,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5593,actual_type_5662,f_5641], true),canonical_f_5664);
if(cljs.core.truth_(elem_5592.addEventListener))
{elem_5592.addEventListener(cljs.core.name.call(null,actual_type_5662),canonical_f_5664);
} else
{elem_5592.attachEvent(cljs.core.name.call(null,actual_type_5662),canonical_f_5664);
}
{
var G__5665 = cljs.core.next.call(null,seq__5570_5655__$1);
var G__5666 = null;
var G__5667 = 0;
var G__5668 = 0;
seq__5570_5642 = G__5665;
chunk__5572_5643 = G__5666;
count__5573_5644 = G__5667;
i__5574_5645 = G__5668;
continue;
}
}
} else
{}
}
break;
}
{
var G__5669 = cljs.core.next.call(null,seq__5569_5633__$1);
var G__5670 = null;
var G__5671 = 0;
var G__5672 = 0;
seq__5569_5594 = G__5669;
chunk__5576_5595 = G__5670;
count__5577_5596 = G__5671;
i__5578_5597 = G__5672;
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
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_BANG___delegate.call(this, elem_sel, type_fs);
};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__5673){
var elem_sel = cljs.core.first(arglist__5673);
var type_fs = cljs.core.rest(arglist__5673);
return listen_BANG___delegate(elem_sel, type_fs);
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
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__5697_5720 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_5721 = cljs.core.nth.call(null,vec__5697_5720,0,null);
var selector_5722 = cljs.core.nth.call(null,vec__5697_5720,1,null);
var seq__5698_5723 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__5705_5724 = null;
var count__5706_5725 = 0;
var i__5707_5726 = 0;
while(true){
if((i__5707_5726 < count__5706_5725))
{var vec__5714_5727 = cljs.core._nth.call(null,chunk__5705_5724,i__5707_5726);
var orig_type_5728 = cljs.core.nth.call(null,vec__5714_5727,0,null);
var f_5729 = cljs.core.nth.call(null,vec__5714_5727,1,null);
var seq__5708_5730 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5728,cljs.core.PersistentArrayMap.fromArray([orig_type_5728,cljs.core.identity], true)));
var chunk__5710_5731 = null;
var count__5711_5732 = 0;
var i__5712_5733 = 0;
while(true){
if((i__5712_5733 < count__5711_5732))
{var vec__5715_5734 = cljs.core._nth.call(null,chunk__5710_5731,i__5712_5733);
var actual_type_5735 = cljs.core.nth.call(null,vec__5715_5734,0,null);
var __5736 = cljs.core.nth.call(null,vec__5715_5734,1,null);
var keys_5737 = cljs.core.PersistentVector.fromArray([selector_5722,actual_type_5735,f_5729], true);
var canonical_f_5738 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5721),keys_5737);
dommy.core.update_event_listeners_BANG_.call(null,elem_5721,dommy.utils.dissoc_in,keys_5737);
if(cljs.core.truth_(elem_5721.removeEventListener))
{elem_5721.removeEventListener(cljs.core.name.call(null,actual_type_5735),canonical_f_5738);
} else
{elem_5721.detachEvent(cljs.core.name.call(null,actual_type_5735),canonical_f_5738);
}
{
var G__5739 = seq__5708_5730;
var G__5740 = chunk__5710_5731;
var G__5741 = count__5711_5732;
var G__5742 = (i__5712_5733 + 1);
seq__5708_5730 = G__5739;
chunk__5710_5731 = G__5740;
count__5711_5732 = G__5741;
i__5712_5733 = G__5742;
continue;
}
} else
{var temp__4092__auto___5743 = cljs.core.seq.call(null,seq__5708_5730);
if(temp__4092__auto___5743)
{var seq__5708_5744__$1 = temp__4092__auto___5743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5708_5744__$1))
{var c__4479__auto___5745 = cljs.core.chunk_first.call(null,seq__5708_5744__$1);
{
var G__5746 = cljs.core.chunk_rest.call(null,seq__5708_5744__$1);
var G__5747 = c__4479__auto___5745;
var G__5748 = cljs.core.count.call(null,c__4479__auto___5745);
var G__5749 = 0;
seq__5708_5730 = G__5746;
chunk__5710_5731 = G__5747;
count__5711_5732 = G__5748;
i__5712_5733 = G__5749;
continue;
}
} else
{var vec__5716_5750 = cljs.core.first.call(null,seq__5708_5744__$1);
var actual_type_5751 = cljs.core.nth.call(null,vec__5716_5750,0,null);
var __5752 = cljs.core.nth.call(null,vec__5716_5750,1,null);
var keys_5753 = cljs.core.PersistentVector.fromArray([selector_5722,actual_type_5751,f_5729], true);
var canonical_f_5754 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5721),keys_5753);
dommy.core.update_event_listeners_BANG_.call(null,elem_5721,dommy.utils.dissoc_in,keys_5753);
if(cljs.core.truth_(elem_5721.removeEventListener))
{elem_5721.removeEventListener(cljs.core.name.call(null,actual_type_5751),canonical_f_5754);
} else
{elem_5721.detachEvent(cljs.core.name.call(null,actual_type_5751),canonical_f_5754);
}
{
var G__5755 = cljs.core.next.call(null,seq__5708_5744__$1);
var G__5756 = null;
var G__5757 = 0;
var G__5758 = 0;
seq__5708_5730 = G__5755;
chunk__5710_5731 = G__5756;
count__5711_5732 = G__5757;
i__5712_5733 = G__5758;
continue;
}
}
} else
{}
}
break;
}
{
var G__5759 = seq__5698_5723;
var G__5760 = chunk__5705_5724;
var G__5761 = count__5706_5725;
var G__5762 = (i__5707_5726 + 1);
seq__5698_5723 = G__5759;
chunk__5705_5724 = G__5760;
count__5706_5725 = G__5761;
i__5707_5726 = G__5762;
continue;
}
} else
{var temp__4092__auto___5763 = cljs.core.seq.call(null,seq__5698_5723);
if(temp__4092__auto___5763)
{var seq__5698_5764__$1 = temp__4092__auto___5763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5698_5764__$1))
{var c__4479__auto___5765 = cljs.core.chunk_first.call(null,seq__5698_5764__$1);
{
var G__5766 = cljs.core.chunk_rest.call(null,seq__5698_5764__$1);
var G__5767 = c__4479__auto___5765;
var G__5768 = cljs.core.count.call(null,c__4479__auto___5765);
var G__5769 = 0;
seq__5698_5723 = G__5766;
chunk__5705_5724 = G__5767;
count__5706_5725 = G__5768;
i__5707_5726 = G__5769;
continue;
}
} else
{var vec__5717_5770 = cljs.core.first.call(null,seq__5698_5764__$1);
var orig_type_5771 = cljs.core.nth.call(null,vec__5717_5770,0,null);
var f_5772 = cljs.core.nth.call(null,vec__5717_5770,1,null);
var seq__5699_5773 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5771,cljs.core.PersistentArrayMap.fromArray([orig_type_5771,cljs.core.identity], true)));
var chunk__5701_5774 = null;
var count__5702_5775 = 0;
var i__5703_5776 = 0;
while(true){
if((i__5703_5776 < count__5702_5775))
{var vec__5718_5777 = cljs.core._nth.call(null,chunk__5701_5774,i__5703_5776);
var actual_type_5778 = cljs.core.nth.call(null,vec__5718_5777,0,null);
var __5779 = cljs.core.nth.call(null,vec__5718_5777,1,null);
var keys_5780 = cljs.core.PersistentVector.fromArray([selector_5722,actual_type_5778,f_5772], true);
var canonical_f_5781 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5721),keys_5780);
dommy.core.update_event_listeners_BANG_.call(null,elem_5721,dommy.utils.dissoc_in,keys_5780);
if(cljs.core.truth_(elem_5721.removeEventListener))
{elem_5721.removeEventListener(cljs.core.name.call(null,actual_type_5778),canonical_f_5781);
} else
{elem_5721.detachEvent(cljs.core.name.call(null,actual_type_5778),canonical_f_5781);
}
{
var G__5782 = seq__5699_5773;
var G__5783 = chunk__5701_5774;
var G__5784 = count__5702_5775;
var G__5785 = (i__5703_5776 + 1);
seq__5699_5773 = G__5782;
chunk__5701_5774 = G__5783;
count__5702_5775 = G__5784;
i__5703_5776 = G__5785;
continue;
}
} else
{var temp__4092__auto___5786__$1 = cljs.core.seq.call(null,seq__5699_5773);
if(temp__4092__auto___5786__$1)
{var seq__5699_5787__$1 = temp__4092__auto___5786__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5699_5787__$1))
{var c__4479__auto___5788 = cljs.core.chunk_first.call(null,seq__5699_5787__$1);
{
var G__5789 = cljs.core.chunk_rest.call(null,seq__5699_5787__$1);
var G__5790 = c__4479__auto___5788;
var G__5791 = cljs.core.count.call(null,c__4479__auto___5788);
var G__5792 = 0;
seq__5699_5773 = G__5789;
chunk__5701_5774 = G__5790;
count__5702_5775 = G__5791;
i__5703_5776 = G__5792;
continue;
}
} else
{var vec__5719_5793 = cljs.core.first.call(null,seq__5699_5787__$1);
var actual_type_5794 = cljs.core.nth.call(null,vec__5719_5793,0,null);
var __5795 = cljs.core.nth.call(null,vec__5719_5793,1,null);
var keys_5796 = cljs.core.PersistentVector.fromArray([selector_5722,actual_type_5794,f_5772], true);
var canonical_f_5797 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5721),keys_5796);
dommy.core.update_event_listeners_BANG_.call(null,elem_5721,dommy.utils.dissoc_in,keys_5796);
if(cljs.core.truth_(elem_5721.removeEventListener))
{elem_5721.removeEventListener(cljs.core.name.call(null,actual_type_5794),canonical_f_5797);
} else
{elem_5721.detachEvent(cljs.core.name.call(null,actual_type_5794),canonical_f_5797);
}
{
var G__5798 = cljs.core.next.call(null,seq__5699_5787__$1);
var G__5799 = null;
var G__5800 = 0;
var G__5801 = 0;
seq__5699_5773 = G__5798;
chunk__5701_5774 = G__5799;
count__5702_5775 = G__5800;
i__5703_5776 = G__5801;
continue;
}
}
} else
{}
}
break;
}
{
var G__5802 = cljs.core.next.call(null,seq__5698_5764__$1);
var G__5803 = null;
var G__5804 = 0;
var G__5805 = 0;
seq__5698_5723 = G__5802;
chunk__5705_5724 = G__5803;
count__5706_5725 = G__5804;
i__5707_5726 = G__5805;
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
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return unlisten_BANG___delegate.call(this, elem_sel, type_fs);
};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__5806){
var elem_sel = cljs.core.first(arglist__5806);
var type_fs = cljs.core.rest(arglist__5806);
return unlisten_BANG___delegate(elem_sel, type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__5814_5821 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_5822 = cljs.core.nth.call(null,vec__5814_5821,0,null);
var selector_5823 = cljs.core.nth.call(null,vec__5814_5821,1,null);
var seq__5815_5824 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));
var chunk__5816_5825 = null;
var count__5817_5826 = 0;
var i__5818_5827 = 0;
while(true){
if((i__5818_5827 < count__5817_5826))
{var vec__5819_5828 = cljs.core._nth.call(null,chunk__5816_5825,i__5818_5827);
var type_5829 = cljs.core.nth.call(null,vec__5819_5828,0,null);
var f_5830 = cljs.core.nth.call(null,vec__5819_5828,1,null);
dommy.core.listen_BANG_.call(null,elem_sel,type_5829,((function (seq__5815_5824,chunk__5816_5825,count__5817_5826,i__5818_5827,vec__5819_5828,type_5829,f_5830){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_5829,this_fn);
return f_5830.call(null,e);
});})(seq__5815_5824,chunk__5816_5825,count__5817_5826,i__5818_5827,vec__5819_5828,type_5829,f_5830))
);
{
var G__5831 = seq__5815_5824;
var G__5832 = chunk__5816_5825;
var G__5833 = count__5817_5826;
var G__5834 = (i__5818_5827 + 1);
seq__5815_5824 = G__5831;
chunk__5816_5825 = G__5832;
count__5817_5826 = G__5833;
i__5818_5827 = G__5834;
continue;
}
} else
{var temp__4092__auto___5835 = cljs.core.seq.call(null,seq__5815_5824);
if(temp__4092__auto___5835)
{var seq__5815_5836__$1 = temp__4092__auto___5835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5815_5836__$1))
{var c__4479__auto___5837 = cljs.core.chunk_first.call(null,seq__5815_5836__$1);
{
var G__5838 = cljs.core.chunk_rest.call(null,seq__5815_5836__$1);
var G__5839 = c__4479__auto___5837;
var G__5840 = cljs.core.count.call(null,c__4479__auto___5837);
var G__5841 = 0;
seq__5815_5824 = G__5838;
chunk__5816_5825 = G__5839;
count__5817_5826 = G__5840;
i__5818_5827 = G__5841;
continue;
}
} else
{var vec__5820_5842 = cljs.core.first.call(null,seq__5815_5836__$1);
var type_5843 = cljs.core.nth.call(null,vec__5820_5842,0,null);
var f_5844 = cljs.core.nth.call(null,vec__5820_5842,1,null);
dommy.core.listen_BANG_.call(null,elem_sel,type_5843,((function (seq__5815_5824,chunk__5816_5825,count__5817_5826,i__5818_5827,vec__5820_5842,type_5843,f_5844,seq__5815_5836__$1,temp__4092__auto___5835){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_5843,this_fn);
return f_5844.call(null,e);
});})(seq__5815_5824,chunk__5816_5825,count__5817_5826,i__5818_5827,vec__5820_5842,type_5843,f_5844,seq__5815_5836__$1,temp__4092__auto___5835))
);
{
var G__5845 = cljs.core.next.call(null,seq__5815_5836__$1);
var G__5846 = null;
var G__5847 = 0;
var G__5848 = 0;
seq__5815_5824 = G__5845;
chunk__5816_5825 = G__5846;
count__5817_5826 = G__5847;
i__5818_5827 = G__5848;
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
var type_fs = null;
if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return listen_once_BANG___delegate.call(this, elem_sel, type_fs);
};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__5849){
var elem_sel = cljs.core.first(arglist__5849);
var type_fs = cljs.core.rest(arglist__5849);
return listen_once_BANG___delegate(elem_sel, type_fs);
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
var fire_BANG___delegate = function (node,event_type,p__5850){
var vec__5852 = p__5850;
var update_event_BANG_ = cljs.core.nth.call(null,vec__5852,0,null);
if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3943__auto__ = update_event_BANG_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.identity;
}
})();
if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");
event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__5850 = null;
if (arguments.length > 2) {
  p__5850 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fire_BANG___delegate.call(this, node, event_type, p__5850);
};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__5853){
var node = cljs.core.first(arglist__5853);
arglist__5853 = cljs.core.next(arglist__5853);
var event_type = cljs.core.first(arglist__5853);
var p__5850 = cljs.core.rest(arglist__5853);
return fire_BANG___delegate(node, event_type, p__5850);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
