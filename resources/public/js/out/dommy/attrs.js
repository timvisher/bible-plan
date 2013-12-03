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
{if(cljs.core.truth_(dommy.attrs.class_match_QMARK_(class_name,class$,i)))
{return i;
} else
{{
var G__15330 = (i + class$.length);
start_from = G__15330;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index(class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
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
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var classes__$1 = clojure.string.trim(cljs.core.name(classes));if(cljs.core.truth_(cljs.core.seq(classes__$1)))
{var temp__4090__auto___15355 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15355))
{var class_list_15356 = temp__4090__auto___15355;var seq__15343_15357 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__15344_15358 = null;var count__15345_15359 = 0;var i__15346_15360 = 0;while(true){
if((i__15346_15360 < count__15345_15359))
{var class_15361 = chunk__15344_15358.cljs$core$IIndexed$_nth$arity$2(null,i__15346_15360);class_list_15356.add(class_15361);
{
var G__15362 = seq__15343_15357;
var G__15363 = chunk__15344_15358;
var G__15364 = count__15345_15359;
var G__15365 = (i__15346_15360 + 1);
seq__15343_15357 = G__15362;
chunk__15344_15358 = G__15363;
count__15345_15359 = G__15364;
i__15346_15360 = G__15365;
continue;
}
} else
{var temp__4092__auto___15366 = cljs.core.seq(seq__15343_15357);if(cljs.core.truth_(temp__4092__auto___15366))
{var seq__15343_15367__$1 = temp__4092__auto___15366;if(cljs.core.chunked_seq_QMARK_(seq__15343_15367__$1))
{var c__4010__auto___15368 = cljs.core.chunk_first(seq__15343_15367__$1);{
var G__15369 = cljs.core.chunk_rest(seq__15343_15367__$1);
var G__15370 = c__4010__auto___15368;
var G__15371 = cljs.core.count(c__4010__auto___15368);
var G__15372 = 0;
seq__15343_15357 = G__15369;
chunk__15344_15358 = G__15370;
count__15345_15359 = G__15371;
i__15346_15360 = G__15372;
continue;
}
} else
{var class_15373 = cljs.core.first(seq__15343_15367__$1);class_list_15356.add(class_15373);
{
var G__15374 = cljs.core.next(seq__15343_15367__$1);
var G__15375 = null;
var G__15376 = 0;
var G__15377 = 0;
seq__15343_15357 = G__15374;
chunk__15344_15358 = G__15375;
count__15345_15359 = G__15376;
i__15346_15360 = G__15377;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_15378 = elem__$1.className;var seq__15347_15379 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__15348_15380 = null;var count__15349_15381 = 0;var i__15350_15382 = 0;while(true){
if((i__15350_15382 < count__15349_15381))
{var class_15383 = chunk__15348_15380.cljs$core$IIndexed$_nth$arity$2(null,i__15350_15382);if(cljs.core.truth_(dommy.attrs.class_index(class_name_15378,class_15383)))
{} else
{elem__$1.className = (((class_name_15378 === ""))?class_15383:[cljs.core.str(class_name_15378),cljs.core.str(" "),cljs.core.str(class_15383)].join(''));
}
{
var G__15384 = seq__15347_15379;
var G__15385 = chunk__15348_15380;
var G__15386 = count__15349_15381;
var G__15387 = (i__15350_15382 + 1);
seq__15347_15379 = G__15384;
chunk__15348_15380 = G__15385;
count__15349_15381 = G__15386;
i__15350_15382 = G__15387;
continue;
}
} else
{var temp__4092__auto___15388 = cljs.core.seq(seq__15347_15379);if(cljs.core.truth_(temp__4092__auto___15388))
{var seq__15347_15389__$1 = temp__4092__auto___15388;if(cljs.core.chunked_seq_QMARK_(seq__15347_15389__$1))
{var c__4010__auto___15390 = cljs.core.chunk_first(seq__15347_15389__$1);{
var G__15391 = cljs.core.chunk_rest(seq__15347_15389__$1);
var G__15392 = c__4010__auto___15390;
var G__15393 = cljs.core.count(c__4010__auto___15390);
var G__15394 = 0;
seq__15347_15379 = G__15391;
chunk__15348_15380 = G__15392;
count__15349_15381 = G__15393;
i__15350_15382 = G__15394;
continue;
}
} else
{var class_15395 = cljs.core.first(seq__15347_15389__$1);if(cljs.core.truth_(dommy.attrs.class_index(class_name_15378,class_15395)))
{} else
{elem__$1.className = (((class_name_15378 === ""))?class_15395:[cljs.core.str(class_name_15378),cljs.core.str(" "),cljs.core.str(class_15395)].join(''));
}
{
var G__15396 = cljs.core.next(seq__15347_15389__$1);
var G__15397 = null;
var G__15398 = 0;
var G__15399 = 0;
seq__15347_15379 = G__15396;
chunk__15348_15380 = G__15397;
count__15349_15381 = G__15398;
i__15350_15382 = G__15399;
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
var G__15400__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15351_15401 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__15352_15402 = null;var count__15353_15403 = 0;var i__15354_15404 = 0;while(true){
if((i__15354_15404 < count__15353_15403))
{var c_15405 = chunk__15352_15402.cljs$core$IIndexed$_nth$arity$2(null,i__15354_15404);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_15405);
{
var G__15406 = seq__15351_15401;
var G__15407 = chunk__15352_15402;
var G__15408 = count__15353_15403;
var G__15409 = (i__15354_15404 + 1);
seq__15351_15401 = G__15406;
chunk__15352_15402 = G__15407;
count__15353_15403 = G__15408;
i__15354_15404 = G__15409;
continue;
}
} else
{var temp__4092__auto___15410 = cljs.core.seq(seq__15351_15401);if(cljs.core.truth_(temp__4092__auto___15410))
{var seq__15351_15411__$1 = temp__4092__auto___15410;if(cljs.core.chunked_seq_QMARK_(seq__15351_15411__$1))
{var c__4010__auto___15412 = cljs.core.chunk_first(seq__15351_15411__$1);{
var G__15413 = cljs.core.chunk_rest(seq__15351_15411__$1);
var G__15414 = c__4010__auto___15412;
var G__15415 = cljs.core.count(c__4010__auto___15412);
var G__15416 = 0;
seq__15351_15401 = G__15413;
chunk__15352_15402 = G__15414;
count__15353_15403 = G__15415;
i__15354_15404 = G__15416;
continue;
}
} else
{var c_15417 = cljs.core.first(seq__15351_15411__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_15417);
{
var G__15418 = cljs.core.next(seq__15351_15411__$1);
var G__15419 = null;
var G__15420 = 0;
var G__15421 = 0;
seq__15351_15401 = G__15418;
chunk__15352_15402 = G__15419;
count__15353_15403 = G__15420;
i__15354_15404 = G__15421;
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
var G__15400 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15400__delegate.call(this,elem,classes,more_classes);};
G__15400.cljs$lang$maxFixedArity = 2;
G__15400.cljs$lang$applyTo = (function (arglist__15422){
var elem = cljs.core.first(arglist__15422);
arglist__15422 = cljs.core.next(arglist__15422);
var classes = cljs.core.first(arglist__15422);
var more_classes = cljs.core.rest(arglist__15422);
return G__15400__delegate(elem,classes,more_classes);
});
G__15400.cljs$core$IFn$_invoke$arity$variadic = G__15400__delegate;
return G__15400;
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
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index(class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__15423 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__15423;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___15432 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15432))
{var class_list_15433 = temp__4090__auto___15432;class_list_15433.remove(class$__$1);
} else
{var class_name_15434 = elem__$1.className;var new_class_name_15435 = dommy.attrs.remove_class_str(class_name_15434,class$__$1);if((class_name_15434 === new_class_name_15435))
{} else
{elem__$1.className = new_class_name_15435;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__15436__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15428 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__15429 = null;var count__15430 = 0;var i__15431 = 0;while(true){
if((i__15431 < count__15430))
{var c = chunk__15429.cljs$core$IIndexed$_nth$arity$2(null,i__15431);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__15437 = seq__15428;
var G__15438 = chunk__15429;
var G__15439 = count__15430;
var G__15440 = (i__15431 + 1);
seq__15428 = G__15437;
chunk__15429 = G__15438;
count__15430 = G__15439;
i__15431 = G__15440;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__15428);if(cljs.core.truth_(temp__4092__auto__))
{var seq__15428__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15428__$1))
{var c__4010__auto__ = cljs.core.chunk_first(seq__15428__$1);{
var G__15441 = cljs.core.chunk_rest(seq__15428__$1);
var G__15442 = c__4010__auto__;
var G__15443 = cljs.core.count(c__4010__auto__);
var G__15444 = 0;
seq__15428 = G__15441;
chunk__15429 = G__15442;
count__15430 = G__15443;
i__15431 = G__15444;
continue;
}
} else
{var c = cljs.core.first(seq__15428__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__15445 = cljs.core.next(seq__15428__$1);
var G__15446 = null;
var G__15447 = 0;
var G__15448 = 0;
seq__15428 = G__15445;
chunk__15429 = G__15446;
count__15430 = G__15447;
i__15431 = G__15448;
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
var G__15436 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15436__delegate.call(this,elem,class$,classes);};
G__15436.cljs$lang$maxFixedArity = 2;
G__15436.cljs$lang$applyTo = (function (arglist__15449){
var elem = cljs.core.first(arglist__15449);
arglist__15449 = cljs.core.next(arglist__15449);
var class$ = cljs.core.first(arglist__15449);
var classes = cljs.core.rest(arglist__15449);
return G__15436__delegate(elem,class$,classes);
});
G__15436.cljs$core$IFn$_invoke$arity$variadic = G__15436__delegate;
return G__15436;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___15450 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15450))
{var class_list_15451 = temp__4090__auto___15450;class_list_15451.toggle(class$__$1);
} else
{toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,class$__$1,cljs.core.not(dommy.attrs.has_class_QMARK_(elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
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
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15454){var vec__15455 = p__15454;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15455,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15455,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str(":"),cljs.core.str(cljs.core.name(v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var style = elem__$1.style;var seq__15462_15468 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__15463_15469 = null;var count__15464_15470 = 0;var i__15465_15471 = 0;while(true){
if((i__15465_15471 < count__15464_15470))
{var vec__15466_15472 = chunk__15463_15469.cljs$core$IIndexed$_nth$arity$2(null,i__15465_15471);var k_15473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15466_15472,0,null);var v_15474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15466_15472,1,null);(style[cljs.core.name(k_15473)] = v_15474);
{
var G__15475 = seq__15462_15468;
var G__15476 = chunk__15463_15469;
var G__15477 = count__15464_15470;
var G__15478 = (i__15465_15471 + 1);
seq__15462_15468 = G__15475;
chunk__15463_15469 = G__15476;
count__15464_15470 = G__15477;
i__15465_15471 = G__15478;
continue;
}
} else
{var temp__4092__auto___15479 = cljs.core.seq(seq__15462_15468);if(cljs.core.truth_(temp__4092__auto___15479))
{var seq__15462_15480__$1 = temp__4092__auto___15479;if(cljs.core.chunked_seq_QMARK_(seq__15462_15480__$1))
{var c__4010__auto___15481 = cljs.core.chunk_first(seq__15462_15480__$1);{
var G__15482 = cljs.core.chunk_rest(seq__15462_15480__$1);
var G__15483 = c__4010__auto___15481;
var G__15484 = cljs.core.count(c__4010__auto___15481);
var G__15485 = 0;
seq__15462_15468 = G__15482;
chunk__15463_15469 = G__15483;
count__15464_15470 = G__15484;
i__15465_15471 = G__15485;
continue;
}
} else
{var vec__15467_15486 = cljs.core.first(seq__15462_15480__$1);var k_15487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15467_15486,0,null);var v_15488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15467_15486,1,null);(style[cljs.core.name(k_15487)] = v_15488);
{
var G__15489 = cljs.core.next(seq__15462_15480__$1);
var G__15490 = null;
var G__15491 = 0;
var G__15492 = 0;
seq__15462_15468 = G__15489;
chunk__15463_15469 = G__15490;
count__15464_15470 = G__15491;
i__15465_15471 = G__15492;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15493){
var elem = cljs.core.first(arglist__15493);
var kvs = cljs.core.rest(arglist__15493);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"k","k",-1640531420,null)], 0)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like(elem))[cljs.core.name(k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15500_15506 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__15501_15507 = null;var count__15502_15508 = 0;var i__15503_15509 = 0;while(true){
if((i__15503_15509 < count__15502_15508))
{var vec__15504_15510 = chunk__15501_15507.cljs$core$IIndexed$_nth$arity$2(null,i__15503_15509);var k_15511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15504_15510,0,null);var v_15512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15504_15510,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_15511,[cljs.core.str(v_15512),cljs.core.str("px")].join('')], 0));
{
var G__15513 = seq__15500_15506;
var G__15514 = chunk__15501_15507;
var G__15515 = count__15502_15508;
var G__15516 = (i__15503_15509 + 1);
seq__15500_15506 = G__15513;
chunk__15501_15507 = G__15514;
count__15502_15508 = G__15515;
i__15503_15509 = G__15516;
continue;
}
} else
{var temp__4092__auto___15517 = cljs.core.seq(seq__15500_15506);if(cljs.core.truth_(temp__4092__auto___15517))
{var seq__15500_15518__$1 = temp__4092__auto___15517;if(cljs.core.chunked_seq_QMARK_(seq__15500_15518__$1))
{var c__4010__auto___15519 = cljs.core.chunk_first(seq__15500_15518__$1);{
var G__15520 = cljs.core.chunk_rest(seq__15500_15518__$1);
var G__15521 = c__4010__auto___15519;
var G__15522 = cljs.core.count(c__4010__auto___15519);
var G__15523 = 0;
seq__15500_15506 = G__15520;
chunk__15501_15507 = G__15521;
count__15502_15508 = G__15522;
i__15503_15509 = G__15523;
continue;
}
} else
{var vec__15505_15524 = cljs.core.first(seq__15500_15518__$1);var k_15525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15505_15524,0,null);var v_15526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15505_15524,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_15525,[cljs.core.str(v_15526),cljs.core.str("px")].join('')], 0));
{
var G__15527 = cljs.core.next(seq__15500_15518__$1);
var G__15528 = null;
var G__15529 = 0;
var G__15530 = 0;
seq__15500_15506 = G__15527;
chunk__15501_15507 = G__15528;
count__15502_15508 = G__15529;
i__15503_15509 = G__15530;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__15531){
var elem = cljs.core.first(arglist__15531);
var kvs = cljs.core.rest(arglist__15531);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style(dommy.template.__GT_node_like(elem),k);if(cljs.core.truth_(cljs.core.seq(pixels)))
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
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.truth_(cljs.core.fn_QMARK_(v)))
{var G__15540 = dommy.template.__GT_node_like(elem);(G__15540[cljs.core.name(k)] = v);
return G__15540;
} else
{var G__15541 = dommy.template.__GT_node_like(elem);G__15541.setAttribute(cljs.core.name(k),(((k === cljs.core.constant$keyword$167))?dommy.attrs.style_str(v):v));
return G__15541;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__15548__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15542_15549 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs)));var chunk__15543_15550 = null;var count__15544_15551 = 0;var i__15545_15552 = 0;while(true){
if((i__15545_15552 < count__15544_15551))
{var vec__15546_15553 = chunk__15543_15550.cljs$core$IIndexed$_nth$arity$2(null,i__15545_15552);var k_15554__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546_15553,0,null);var v_15555__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546_15553,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_15554__$1,v_15555__$1);
{
var G__15556 = seq__15542_15549;
var G__15557 = chunk__15543_15550;
var G__15558 = count__15544_15551;
var G__15559 = (i__15545_15552 + 1);
seq__15542_15549 = G__15556;
chunk__15543_15550 = G__15557;
count__15544_15551 = G__15558;
i__15545_15552 = G__15559;
continue;
}
} else
{var temp__4092__auto___15560 = cljs.core.seq(seq__15542_15549);if(cljs.core.truth_(temp__4092__auto___15560))
{var seq__15542_15561__$1 = temp__4092__auto___15560;if(cljs.core.chunked_seq_QMARK_(seq__15542_15561__$1))
{var c__4010__auto___15562 = cljs.core.chunk_first(seq__15542_15561__$1);{
var G__15563 = cljs.core.chunk_rest(seq__15542_15561__$1);
var G__15564 = c__4010__auto___15562;
var G__15565 = cljs.core.count(c__4010__auto___15562);
var G__15566 = 0;
seq__15542_15549 = G__15563;
chunk__15543_15550 = G__15564;
count__15544_15551 = G__15565;
i__15545_15552 = G__15566;
continue;
}
} else
{var vec__15547_15567 = cljs.core.first(seq__15542_15561__$1);var k_15568__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15547_15567,0,null);var v_15569__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15547_15567,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_15568__$1,v_15569__$1);
{
var G__15570 = cljs.core.next(seq__15542_15561__$1);
var G__15571 = null;
var G__15572 = 0;
var G__15573 = 0;
seq__15542_15549 = G__15570;
chunk__15543_15550 = G__15571;
count__15544_15551 = G__15572;
i__15545_15552 = G__15573;
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
var G__15548 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15548__delegate.call(this,elem,k,v,kvs);};
G__15548.cljs$lang$maxFixedArity = 3;
G__15548.cljs$lang$applyTo = (function (arglist__15574){
var elem = cljs.core.first(arglist__15574);
arglist__15574 = cljs.core.next(arglist__15574);
var k = cljs.core.first(arglist__15574);
arglist__15574 = cljs.core.next(arglist__15574);
var v = cljs.core.first(arglist__15574);
var kvs = cljs.core.rest(arglist__15574);
return G__15548__delegate(elem,k,v,kvs);
});
G__15548.cljs$core$IFn$_invoke$arity$variadic = G__15548__delegate;
return G__15548;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$168,null,cljs.core.constant$keyword$169,null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name(k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__15583__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15579_15584 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__15580_15585 = null;var count__15581_15586 = 0;var i__15582_15587 = 0;while(true){
if((i__15582_15587 < count__15581_15586))
{var k_15588__$1 = chunk__15580_15585.cljs$core$IIndexed$_nth$arity$2(null,i__15582_15587);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_15588__$1);
{
var G__15589 = seq__15579_15584;
var G__15590 = chunk__15580_15585;
var G__15591 = count__15581_15586;
var G__15592 = (i__15582_15587 + 1);
seq__15579_15584 = G__15589;
chunk__15580_15585 = G__15590;
count__15581_15586 = G__15591;
i__15582_15587 = G__15592;
continue;
}
} else
{var temp__4092__auto___15593 = cljs.core.seq(seq__15579_15584);if(cljs.core.truth_(temp__4092__auto___15593))
{var seq__15579_15594__$1 = temp__4092__auto___15593;if(cljs.core.chunked_seq_QMARK_(seq__15579_15594__$1))
{var c__4010__auto___15595 = cljs.core.chunk_first(seq__15579_15594__$1);{
var G__15596 = cljs.core.chunk_rest(seq__15579_15594__$1);
var G__15597 = c__4010__auto___15595;
var G__15598 = cljs.core.count(c__4010__auto___15595);
var G__15599 = 0;
seq__15579_15584 = G__15596;
chunk__15580_15585 = G__15597;
count__15581_15586 = G__15598;
i__15582_15587 = G__15599;
continue;
}
} else
{var k_15600__$1 = cljs.core.first(seq__15579_15594__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_15600__$1);
{
var G__15601 = cljs.core.next(seq__15579_15594__$1);
var G__15602 = null;
var G__15603 = 0;
var G__15604 = 0;
seq__15579_15584 = G__15601;
chunk__15580_15585 = G__15602;
count__15581_15586 = G__15603;
i__15582_15587 = G__15604;
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
var G__15583 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15583__delegate.call(this,elem,k,ks);};
G__15583.cljs$lang$maxFixedArity = 2;
G__15583.cljs$lang$applyTo = (function (arglist__15605){
var elem = cljs.core.first(arglist__15605);
arglist__15605 = cljs.core.next(arglist__15605);
var k = cljs.core.first(arglist__15605);
var ks = cljs.core.rest(arglist__15605);
return G__15583__delegate(elem,k,ks);
});
G__15583.cljs$core$IFn$_invoke$arity$variadic = G__15583__delegate;
return G__15583;
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
{return dommy.template.__GT_node_like(elem).getAttribute(cljs.core.name(k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.attrs.attr(elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k);
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
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like(elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like(elem);toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,dommy.attrs.hidden_QMARK_(elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__15607 = dommy.template.__GT_node_like(elem);G__15607.style.display = ((show_QMARK_)?"":"none");
return G__15607;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__15609 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__15609,false);
return G__15609;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__15611 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__15611,true);
return G__15611;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__15613 = dommy.template.__GT_node_like(elem).getBoundingClientRect();(G__15613["constructor"] = Object);
return G__15613;
})(),cljs.core.array_seq([cljs.core.constant$keyword$111,true], 0));
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);var top = cljs.core.constant$keyword$170.cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect(elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
