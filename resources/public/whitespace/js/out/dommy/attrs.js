// Compiled by ClojureScript 0.0-2075
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3279__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3279__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3279__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(cljs.core.truth_(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i)))
{return i;
} else
{{
var G__9327 = (i + class$.length);
start_from = G__9327;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.truth_(cljs.core.seq.call(null,classes__$1)))
{var temp__4090__auto___9352 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9352))
{var class_list_9353 = temp__4090__auto___9352;var seq__9340_9354 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9341_9355 = null;var count__9342_9356 = 0;var i__9343_9357 = 0;while(true){
if((i__9343_9357 < count__9342_9356))
{var class_9358 = cljs.core._nth.call(null,chunk__9341_9355,i__9343_9357);class_list_9353.add(class_9358);
{
var G__9359 = seq__9340_9354;
var G__9360 = chunk__9341_9355;
var G__9361 = count__9342_9356;
var G__9362 = (i__9343_9357 + 1);
seq__9340_9354 = G__9359;
chunk__9341_9355 = G__9360;
count__9342_9356 = G__9361;
i__9343_9357 = G__9362;
continue;
}
} else
{var temp__4092__auto___9363 = cljs.core.seq.call(null,seq__9340_9354);if(cljs.core.truth_(temp__4092__auto___9363))
{var seq__9340_9364__$1 = temp__4092__auto___9363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9340_9364__$1))
{var c__4010__auto___9365 = cljs.core.chunk_first.call(null,seq__9340_9364__$1);{
var G__9366 = cljs.core.chunk_rest.call(null,seq__9340_9364__$1);
var G__9367 = c__4010__auto___9365;
var G__9368 = cljs.core.count.call(null,c__4010__auto___9365);
var G__9369 = 0;
seq__9340_9354 = G__9366;
chunk__9341_9355 = G__9367;
count__9342_9356 = G__9368;
i__9343_9357 = G__9369;
continue;
}
} else
{var class_9370 = cljs.core.first.call(null,seq__9340_9364__$1);class_list_9353.add(class_9370);
{
var G__9371 = cljs.core.next.call(null,seq__9340_9364__$1);
var G__9372 = null;
var G__9373 = 0;
var G__9374 = 0;
seq__9340_9354 = G__9371;
chunk__9341_9355 = G__9372;
count__9342_9356 = G__9373;
i__9343_9357 = G__9374;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_9375 = elem__$1.className;var seq__9344_9376 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9345_9377 = null;var count__9346_9378 = 0;var i__9347_9379 = 0;while(true){
if((i__9347_9379 < count__9346_9378))
{var class_9380 = cljs.core._nth.call(null,chunk__9345_9377,i__9347_9379);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9375,class_9380)))
{} else
{elem__$1.className = (((class_name_9375 === ""))?class_9380:[cljs.core.str(class_name_9375),cljs.core.str(" "),cljs.core.str(class_9380)].join(''));
}
{
var G__9381 = seq__9344_9376;
var G__9382 = chunk__9345_9377;
var G__9383 = count__9346_9378;
var G__9384 = (i__9347_9379 + 1);
seq__9344_9376 = G__9381;
chunk__9345_9377 = G__9382;
count__9346_9378 = G__9383;
i__9347_9379 = G__9384;
continue;
}
} else
{var temp__4092__auto___9385 = cljs.core.seq.call(null,seq__9344_9376);if(cljs.core.truth_(temp__4092__auto___9385))
{var seq__9344_9386__$1 = temp__4092__auto___9385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9344_9386__$1))
{var c__4010__auto___9387 = cljs.core.chunk_first.call(null,seq__9344_9386__$1);{
var G__9388 = cljs.core.chunk_rest.call(null,seq__9344_9386__$1);
var G__9389 = c__4010__auto___9387;
var G__9390 = cljs.core.count.call(null,c__4010__auto___9387);
var G__9391 = 0;
seq__9344_9376 = G__9388;
chunk__9345_9377 = G__9389;
count__9346_9378 = G__9390;
i__9347_9379 = G__9391;
continue;
}
} else
{var class_9392 = cljs.core.first.call(null,seq__9344_9386__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9375,class_9392)))
{} else
{elem__$1.className = (((class_name_9375 === ""))?class_9392:[cljs.core.str(class_name_9375),cljs.core.str(" "),cljs.core.str(class_9392)].join(''));
}
{
var G__9393 = cljs.core.next.call(null,seq__9344_9386__$1);
var G__9394 = null;
var G__9395 = 0;
var G__9396 = 0;
seq__9344_9376 = G__9393;
chunk__9345_9377 = G__9394;
count__9346_9378 = G__9395;
i__9347_9379 = G__9396;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__9397__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9348_9398 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__9349_9399 = null;var count__9350_9400 = 0;var i__9351_9401 = 0;while(true){
if((i__9351_9401 < count__9350_9400))
{var c_9402 = cljs.core._nth.call(null,chunk__9349_9399,i__9351_9401);add_class_BANG_.call(null,elem__$1,c_9402);
{
var G__9403 = seq__9348_9398;
var G__9404 = chunk__9349_9399;
var G__9405 = count__9350_9400;
var G__9406 = (i__9351_9401 + 1);
seq__9348_9398 = G__9403;
chunk__9349_9399 = G__9404;
count__9350_9400 = G__9405;
i__9351_9401 = G__9406;
continue;
}
} else
{var temp__4092__auto___9407 = cljs.core.seq.call(null,seq__9348_9398);if(cljs.core.truth_(temp__4092__auto___9407))
{var seq__9348_9408__$1 = temp__4092__auto___9407;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9348_9408__$1))
{var c__4010__auto___9409 = cljs.core.chunk_first.call(null,seq__9348_9408__$1);{
var G__9410 = cljs.core.chunk_rest.call(null,seq__9348_9408__$1);
var G__9411 = c__4010__auto___9409;
var G__9412 = cljs.core.count.call(null,c__4010__auto___9409);
var G__9413 = 0;
seq__9348_9398 = G__9410;
chunk__9349_9399 = G__9411;
count__9350_9400 = G__9412;
i__9351_9401 = G__9413;
continue;
}
} else
{var c_9414 = cljs.core.first.call(null,seq__9348_9408__$1);add_class_BANG_.call(null,elem__$1,c_9414);
{
var G__9415 = cljs.core.next.call(null,seq__9348_9408__$1);
var G__9416 = null;
var G__9417 = 0;
var G__9418 = 0;
seq__9348_9398 = G__9415;
chunk__9349_9399 = G__9416;
count__9350_9400 = G__9417;
i__9351_9401 = G__9418;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__9397 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9397__delegate.call(this,elem,classes,more_classes);};
G__9397.cljs$lang$maxFixedArity = 2;
G__9397.cljs$lang$applyTo = (function (arglist__9419){
var elem = cljs.core.first(arglist__9419);
arglist__9419 = cljs.core.next(arglist__9419);
var classes = cljs.core.first(arglist__9419);
var more_classes = cljs.core.rest(arglist__9419);
return G__9397__delegate(elem,classes,more_classes);
});
G__9397.cljs$core$IFn$_invoke$arity$variadic = G__9397__delegate;
return G__9397;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__9420 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__9420;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9429 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9429))
{var class_list_9430 = temp__4090__auto___9429;class_list_9430.remove(class$__$1);
} else
{var class_name_9431 = elem__$1.className;var new_class_name_9432 = dommy.attrs.remove_class_str.call(null,class_name_9431,class$__$1);if((class_name_9431 === new_class_name_9432))
{} else
{elem__$1.className = new_class_name_9432;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__9433__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9425 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__9426 = null;var count__9427 = 0;var i__9428 = 0;while(true){
if((i__9428 < count__9427))
{var c = cljs.core._nth.call(null,chunk__9426,i__9428);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9434 = seq__9425;
var G__9435 = chunk__9426;
var G__9436 = count__9427;
var G__9437 = (i__9428 + 1);
seq__9425 = G__9434;
chunk__9426 = G__9435;
count__9427 = G__9436;
i__9428 = G__9437;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9425);if(cljs.core.truth_(temp__4092__auto__))
{var seq__9425__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9425__$1))
{var c__4010__auto__ = cljs.core.chunk_first.call(null,seq__9425__$1);{
var G__9438 = cljs.core.chunk_rest.call(null,seq__9425__$1);
var G__9439 = c__4010__auto__;
var G__9440 = cljs.core.count.call(null,c__4010__auto__);
var G__9441 = 0;
seq__9425 = G__9438;
chunk__9426 = G__9439;
count__9427 = G__9440;
i__9428 = G__9441;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__9425__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9442 = cljs.core.next.call(null,seq__9425__$1);
var G__9443 = null;
var G__9444 = 0;
var G__9445 = 0;
seq__9425 = G__9442;
chunk__9426 = G__9443;
count__9427 = G__9444;
i__9428 = G__9445;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__9433 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9433__delegate.call(this,elem,class$,classes);};
G__9433.cljs$lang$maxFixedArity = 2;
G__9433.cljs$lang$applyTo = (function (arglist__9446){
var elem = cljs.core.first(arglist__9446);
arglist__9446 = cljs.core.next(arglist__9446);
var class$ = cljs.core.first(arglist__9446);
var classes = cljs.core.rest(arglist__9446);
return G__9433__delegate(elem,class$,classes);
});
G__9433.cljs$core$IFn$_invoke$arity$variadic = G__9433__delegate;
return G__9433;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9447 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9447))
{var class_list_9448 = temp__4090__auto___9447;class_list_9448.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,cljs.core.not.call(null,dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__9451){var vec__9452 = p__9451;var k = cljs.core.nth.call(null,vec__9452,0,null);var v = cljs.core.nth.call(null,vec__9452,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__9459_9465 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9460_9466 = null;var count__9461_9467 = 0;var i__9462_9468 = 0;while(true){
if((i__9462_9468 < count__9461_9467))
{var vec__9463_9469 = cljs.core._nth.call(null,chunk__9460_9466,i__9462_9468);var k_9470 = cljs.core.nth.call(null,vec__9463_9469,0,null);var v_9471 = cljs.core.nth.call(null,vec__9463_9469,1,null);(style[cljs.core.name.call(null,k_9470)] = v_9471);
{
var G__9472 = seq__9459_9465;
var G__9473 = chunk__9460_9466;
var G__9474 = count__9461_9467;
var G__9475 = (i__9462_9468 + 1);
seq__9459_9465 = G__9472;
chunk__9460_9466 = G__9473;
count__9461_9467 = G__9474;
i__9462_9468 = G__9475;
continue;
}
} else
{var temp__4092__auto___9476 = cljs.core.seq.call(null,seq__9459_9465);if(cljs.core.truth_(temp__4092__auto___9476))
{var seq__9459_9477__$1 = temp__4092__auto___9476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9459_9477__$1))
{var c__4010__auto___9478 = cljs.core.chunk_first.call(null,seq__9459_9477__$1);{
var G__9479 = cljs.core.chunk_rest.call(null,seq__9459_9477__$1);
var G__9480 = c__4010__auto___9478;
var G__9481 = cljs.core.count.call(null,c__4010__auto___9478);
var G__9482 = 0;
seq__9459_9465 = G__9479;
chunk__9460_9466 = G__9480;
count__9461_9467 = G__9481;
i__9462_9468 = G__9482;
continue;
}
} else
{var vec__9464_9483 = cljs.core.first.call(null,seq__9459_9477__$1);var k_9484 = cljs.core.nth.call(null,vec__9464_9483,0,null);var v_9485 = cljs.core.nth.call(null,vec__9464_9483,1,null);(style[cljs.core.name.call(null,k_9484)] = v_9485);
{
var G__9486 = cljs.core.next.call(null,seq__9459_9477__$1);
var G__9487 = null;
var G__9488 = 0;
var G__9489 = 0;
seq__9459_9465 = G__9486;
chunk__9460_9466 = G__9487;
count__9461_9467 = G__9488;
i__9462_9468 = G__9489;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__9490){
var elem = cljs.core.first(arglist__9490);
var kvs = cljs.core.rest(arglist__9490);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9497_9503 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9498_9504 = null;var count__9499_9505 = 0;var i__9500_9506 = 0;while(true){
if((i__9500_9506 < count__9499_9505))
{var vec__9501_9507 = cljs.core._nth.call(null,chunk__9498_9504,i__9500_9506);var k_9508 = cljs.core.nth.call(null,vec__9501_9507,0,null);var v_9509 = cljs.core.nth.call(null,vec__9501_9507,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9508,[cljs.core.str(v_9509),cljs.core.str("px")].join(''));
{
var G__9510 = seq__9497_9503;
var G__9511 = chunk__9498_9504;
var G__9512 = count__9499_9505;
var G__9513 = (i__9500_9506 + 1);
seq__9497_9503 = G__9510;
chunk__9498_9504 = G__9511;
count__9499_9505 = G__9512;
i__9500_9506 = G__9513;
continue;
}
} else
{var temp__4092__auto___9514 = cljs.core.seq.call(null,seq__9497_9503);if(cljs.core.truth_(temp__4092__auto___9514))
{var seq__9497_9515__$1 = temp__4092__auto___9514;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9497_9515__$1))
{var c__4010__auto___9516 = cljs.core.chunk_first.call(null,seq__9497_9515__$1);{
var G__9517 = cljs.core.chunk_rest.call(null,seq__9497_9515__$1);
var G__9518 = c__4010__auto___9516;
var G__9519 = cljs.core.count.call(null,c__4010__auto___9516);
var G__9520 = 0;
seq__9497_9503 = G__9517;
chunk__9498_9504 = G__9518;
count__9499_9505 = G__9519;
i__9500_9506 = G__9520;
continue;
}
} else
{var vec__9502_9521 = cljs.core.first.call(null,seq__9497_9515__$1);var k_9522 = cljs.core.nth.call(null,vec__9502_9521,0,null);var v_9523 = cljs.core.nth.call(null,vec__9502_9521,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9522,[cljs.core.str(v_9523),cljs.core.str("px")].join(''));
{
var G__9524 = cljs.core.next.call(null,seq__9497_9515__$1);
var G__9525 = null;
var G__9526 = 0;
var G__9527 = 0;
seq__9497_9503 = G__9524;
chunk__9498_9504 = G__9525;
count__9499_9505 = G__9526;
i__9500_9506 = G__9527;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__9528){
var elem = cljs.core.first(arglist__9528);
var kvs = cljs.core.rest(arglist__9528);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.truth_(cljs.core.seq.call(null,pixels)))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,v)))
{var G__9537 = dommy.template.__GT_node_like.call(null,elem);(G__9537[cljs.core.name.call(null,k)] = v);
return G__9537;
} else
{var G__9538 = dommy.template.__GT_node_like.call(null,elem);G__9538.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__9538;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__9545__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9539_9546 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__9540_9547 = null;var count__9541_9548 = 0;var i__9542_9549 = 0;while(true){
if((i__9542_9549 < count__9541_9548))
{var vec__9543_9550 = cljs.core._nth.call(null,chunk__9540_9547,i__9542_9549);var k_9551__$1 = cljs.core.nth.call(null,vec__9543_9550,0,null);var v_9552__$1 = cljs.core.nth.call(null,vec__9543_9550,1,null);set_attr_BANG_.call(null,elem__$1,k_9551__$1,v_9552__$1);
{
var G__9553 = seq__9539_9546;
var G__9554 = chunk__9540_9547;
var G__9555 = count__9541_9548;
var G__9556 = (i__9542_9549 + 1);
seq__9539_9546 = G__9553;
chunk__9540_9547 = G__9554;
count__9541_9548 = G__9555;
i__9542_9549 = G__9556;
continue;
}
} else
{var temp__4092__auto___9557 = cljs.core.seq.call(null,seq__9539_9546);if(cljs.core.truth_(temp__4092__auto___9557))
{var seq__9539_9558__$1 = temp__4092__auto___9557;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9539_9558__$1))
{var c__4010__auto___9559 = cljs.core.chunk_first.call(null,seq__9539_9558__$1);{
var G__9560 = cljs.core.chunk_rest.call(null,seq__9539_9558__$1);
var G__9561 = c__4010__auto___9559;
var G__9562 = cljs.core.count.call(null,c__4010__auto___9559);
var G__9563 = 0;
seq__9539_9546 = G__9560;
chunk__9540_9547 = G__9561;
count__9541_9548 = G__9562;
i__9542_9549 = G__9563;
continue;
}
} else
{var vec__9544_9564 = cljs.core.first.call(null,seq__9539_9558__$1);var k_9565__$1 = cljs.core.nth.call(null,vec__9544_9564,0,null);var v_9566__$1 = cljs.core.nth.call(null,vec__9544_9564,1,null);set_attr_BANG_.call(null,elem__$1,k_9565__$1,v_9566__$1);
{
var G__9567 = cljs.core.next.call(null,seq__9539_9558__$1);
var G__9568 = null;
var G__9569 = 0;
var G__9570 = 0;
seq__9539_9546 = G__9567;
chunk__9540_9547 = G__9568;
count__9541_9548 = G__9569;
i__9542_9549 = G__9570;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__9545 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__9545__delegate.call(this,elem,k,v,kvs);};
G__9545.cljs$lang$maxFixedArity = 3;
G__9545.cljs$lang$applyTo = (function (arglist__9571){
var elem = cljs.core.first(arglist__9571);
arglist__9571 = cljs.core.next(arglist__9571);
var k = cljs.core.first(arglist__9571);
arglist__9571 = cljs.core.next(arglist__9571);
var v = cljs.core.first(arglist__9571);
var kvs = cljs.core.rest(arglist__9571);
return G__9545__delegate(elem,k,v,kvs);
});
G__9545.cljs$core$IFn$_invoke$arity$variadic = G__9545__delegate;
return G__9545;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__9580__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9576_9581 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__9577_9582 = null;var count__9578_9583 = 0;var i__9579_9584 = 0;while(true){
if((i__9579_9584 < count__9578_9583))
{var k_9585__$1 = cljs.core._nth.call(null,chunk__9577_9582,i__9579_9584);remove_attr_BANG_.call(null,elem__$1,k_9585__$1);
{
var G__9586 = seq__9576_9581;
var G__9587 = chunk__9577_9582;
var G__9588 = count__9578_9583;
var G__9589 = (i__9579_9584 + 1);
seq__9576_9581 = G__9586;
chunk__9577_9582 = G__9587;
count__9578_9583 = G__9588;
i__9579_9584 = G__9589;
continue;
}
} else
{var temp__4092__auto___9590 = cljs.core.seq.call(null,seq__9576_9581);if(cljs.core.truth_(temp__4092__auto___9590))
{var seq__9576_9591__$1 = temp__4092__auto___9590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9576_9591__$1))
{var c__4010__auto___9592 = cljs.core.chunk_first.call(null,seq__9576_9591__$1);{
var G__9593 = cljs.core.chunk_rest.call(null,seq__9576_9591__$1);
var G__9594 = c__4010__auto___9592;
var G__9595 = cljs.core.count.call(null,c__4010__auto___9592);
var G__9596 = 0;
seq__9576_9581 = G__9593;
chunk__9577_9582 = G__9594;
count__9578_9583 = G__9595;
i__9579_9584 = G__9596;
continue;
}
} else
{var k_9597__$1 = cljs.core.first.call(null,seq__9576_9591__$1);remove_attr_BANG_.call(null,elem__$1,k_9597__$1);
{
var G__9598 = cljs.core.next.call(null,seq__9576_9591__$1);
var G__9599 = null;
var G__9600 = 0;
var G__9601 = 0;
seq__9576_9581 = G__9598;
chunk__9577_9582 = G__9599;
count__9578_9583 = G__9600;
i__9579_9584 = G__9601;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__9580 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9580__delegate.call(this,elem,k,ks);};
G__9580.cljs$lang$maxFixedArity = 2;
G__9580.cljs$lang$applyTo = (function (arglist__9602){
var elem = cljs.core.first(arglist__9602);
arglist__9602 = cljs.core.next(arglist__9602);
var k = cljs.core.first(arglist__9602);
var ks = cljs.core.rest(arglist__9602);
return G__9580__delegate(elem,k,ks);
});
G__9580.cljs$core$IFn$_invoke$arity$variadic = G__9580__delegate;
return G__9580;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__9604 = dommy.template.__GT_node_like.call(null,elem);G__9604.style.display = ((show_QMARK_)?"":"none");
return G__9604;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__9606 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9606,false);
return G__9606;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__9608 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9608,true);
return G__9608;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__9610 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__9610["constructor"] = Object);
return G__9610;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
