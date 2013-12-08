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
var G__15382 = (i + class$.length);
start_from = G__15382;
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
{var temp__4090__auto___15407 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15407))
{var class_list_15408 = temp__4090__auto___15407;var seq__15395_15409 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__15396_15410 = null;var count__15397_15411 = 0;var i__15398_15412 = 0;while(true){
if((i__15398_15412 < count__15397_15411))
{var class_15413 = chunk__15396_15410.cljs$core$IIndexed$_nth$arity$2(null,i__15398_15412);class_list_15408.add(class_15413);
{
var G__15414 = seq__15395_15409;
var G__15415 = chunk__15396_15410;
var G__15416 = count__15397_15411;
var G__15417 = (i__15398_15412 + 1);
seq__15395_15409 = G__15414;
chunk__15396_15410 = G__15415;
count__15397_15411 = G__15416;
i__15398_15412 = G__15417;
continue;
}
} else
{var temp__4092__auto___15418 = cljs.core.seq(seq__15395_15409);if(cljs.core.truth_(temp__4092__auto___15418))
{var seq__15395_15419__$1 = temp__4092__auto___15418;if(cljs.core.chunked_seq_QMARK_(seq__15395_15419__$1))
{var c__4010__auto___15420 = cljs.core.chunk_first(seq__15395_15419__$1);{
var G__15421 = cljs.core.chunk_rest(seq__15395_15419__$1);
var G__15422 = c__4010__auto___15420;
var G__15423 = cljs.core.count(c__4010__auto___15420);
var G__15424 = 0;
seq__15395_15409 = G__15421;
chunk__15396_15410 = G__15422;
count__15397_15411 = G__15423;
i__15398_15412 = G__15424;
continue;
}
} else
{var class_15425 = cljs.core.first(seq__15395_15419__$1);class_list_15408.add(class_15425);
{
var G__15426 = cljs.core.next(seq__15395_15419__$1);
var G__15427 = null;
var G__15428 = 0;
var G__15429 = 0;
seq__15395_15409 = G__15426;
chunk__15396_15410 = G__15427;
count__15397_15411 = G__15428;
i__15398_15412 = G__15429;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_15430 = elem__$1.className;var seq__15399_15431 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__15400_15432 = null;var count__15401_15433 = 0;var i__15402_15434 = 0;while(true){
if((i__15402_15434 < count__15401_15433))
{var class_15435 = chunk__15400_15432.cljs$core$IIndexed$_nth$arity$2(null,i__15402_15434);if(cljs.core.truth_(dommy.attrs.class_index(class_name_15430,class_15435)))
{} else
{elem__$1.className = (((class_name_15430 === ""))?class_15435:[cljs.core.str(class_name_15430),cljs.core.str(" "),cljs.core.str(class_15435)].join(''));
}
{
var G__15436 = seq__15399_15431;
var G__15437 = chunk__15400_15432;
var G__15438 = count__15401_15433;
var G__15439 = (i__15402_15434 + 1);
seq__15399_15431 = G__15436;
chunk__15400_15432 = G__15437;
count__15401_15433 = G__15438;
i__15402_15434 = G__15439;
continue;
}
} else
{var temp__4092__auto___15440 = cljs.core.seq(seq__15399_15431);if(cljs.core.truth_(temp__4092__auto___15440))
{var seq__15399_15441__$1 = temp__4092__auto___15440;if(cljs.core.chunked_seq_QMARK_(seq__15399_15441__$1))
{var c__4010__auto___15442 = cljs.core.chunk_first(seq__15399_15441__$1);{
var G__15443 = cljs.core.chunk_rest(seq__15399_15441__$1);
var G__15444 = c__4010__auto___15442;
var G__15445 = cljs.core.count(c__4010__auto___15442);
var G__15446 = 0;
seq__15399_15431 = G__15443;
chunk__15400_15432 = G__15444;
count__15401_15433 = G__15445;
i__15402_15434 = G__15446;
continue;
}
} else
{var class_15447 = cljs.core.first(seq__15399_15441__$1);if(cljs.core.truth_(dommy.attrs.class_index(class_name_15430,class_15447)))
{} else
{elem__$1.className = (((class_name_15430 === ""))?class_15447:[cljs.core.str(class_name_15430),cljs.core.str(" "),cljs.core.str(class_15447)].join(''));
}
{
var G__15448 = cljs.core.next(seq__15399_15441__$1);
var G__15449 = null;
var G__15450 = 0;
var G__15451 = 0;
seq__15399_15431 = G__15448;
chunk__15400_15432 = G__15449;
count__15401_15433 = G__15450;
i__15402_15434 = G__15451;
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
var G__15452__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15403_15453 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__15404_15454 = null;var count__15405_15455 = 0;var i__15406_15456 = 0;while(true){
if((i__15406_15456 < count__15405_15455))
{var c_15457 = chunk__15404_15454.cljs$core$IIndexed$_nth$arity$2(null,i__15406_15456);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_15457);
{
var G__15458 = seq__15403_15453;
var G__15459 = chunk__15404_15454;
var G__15460 = count__15405_15455;
var G__15461 = (i__15406_15456 + 1);
seq__15403_15453 = G__15458;
chunk__15404_15454 = G__15459;
count__15405_15455 = G__15460;
i__15406_15456 = G__15461;
continue;
}
} else
{var temp__4092__auto___15462 = cljs.core.seq(seq__15403_15453);if(cljs.core.truth_(temp__4092__auto___15462))
{var seq__15403_15463__$1 = temp__4092__auto___15462;if(cljs.core.chunked_seq_QMARK_(seq__15403_15463__$1))
{var c__4010__auto___15464 = cljs.core.chunk_first(seq__15403_15463__$1);{
var G__15465 = cljs.core.chunk_rest(seq__15403_15463__$1);
var G__15466 = c__4010__auto___15464;
var G__15467 = cljs.core.count(c__4010__auto___15464);
var G__15468 = 0;
seq__15403_15453 = G__15465;
chunk__15404_15454 = G__15466;
count__15405_15455 = G__15467;
i__15406_15456 = G__15468;
continue;
}
} else
{var c_15469 = cljs.core.first(seq__15403_15463__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_15469);
{
var G__15470 = cljs.core.next(seq__15403_15463__$1);
var G__15471 = null;
var G__15472 = 0;
var G__15473 = 0;
seq__15403_15453 = G__15470;
chunk__15404_15454 = G__15471;
count__15405_15455 = G__15472;
i__15406_15456 = G__15473;
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
var G__15452 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15452__delegate.call(this,elem,classes,more_classes);};
G__15452.cljs$lang$maxFixedArity = 2;
G__15452.cljs$lang$applyTo = (function (arglist__15474){
var elem = cljs.core.first(arglist__15474);
arglist__15474 = cljs.core.next(arglist__15474);
var classes = cljs.core.first(arglist__15474);
var more_classes = cljs.core.rest(arglist__15474);
return G__15452__delegate(elem,classes,more_classes);
});
G__15452.cljs$core$IFn$_invoke$arity$variadic = G__15452__delegate;
return G__15452;
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
var G__15475 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__15475;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___15484 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15484))
{var class_list_15485 = temp__4090__auto___15484;class_list_15485.remove(class$__$1);
} else
{var class_name_15486 = elem__$1.className;var new_class_name_15487 = dommy.attrs.remove_class_str(class_name_15486,class$__$1);if((class_name_15486 === new_class_name_15487))
{} else
{elem__$1.className = new_class_name_15487;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__15488__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15480 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__15481 = null;var count__15482 = 0;var i__15483 = 0;while(true){
if((i__15483 < count__15482))
{var c = chunk__15481.cljs$core$IIndexed$_nth$arity$2(null,i__15483);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__15489 = seq__15480;
var G__15490 = chunk__15481;
var G__15491 = count__15482;
var G__15492 = (i__15483 + 1);
seq__15480 = G__15489;
chunk__15481 = G__15490;
count__15482 = G__15491;
i__15483 = G__15492;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__15480);if(cljs.core.truth_(temp__4092__auto__))
{var seq__15480__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15480__$1))
{var c__4010__auto__ = cljs.core.chunk_first(seq__15480__$1);{
var G__15493 = cljs.core.chunk_rest(seq__15480__$1);
var G__15494 = c__4010__auto__;
var G__15495 = cljs.core.count(c__4010__auto__);
var G__15496 = 0;
seq__15480 = G__15493;
chunk__15481 = G__15494;
count__15482 = G__15495;
i__15483 = G__15496;
continue;
}
} else
{var c = cljs.core.first(seq__15480__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__15497 = cljs.core.next(seq__15480__$1);
var G__15498 = null;
var G__15499 = 0;
var G__15500 = 0;
seq__15480 = G__15497;
chunk__15481 = G__15498;
count__15482 = G__15499;
i__15483 = G__15500;
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
var G__15488 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15488__delegate.call(this,elem,class$,classes);};
G__15488.cljs$lang$maxFixedArity = 2;
G__15488.cljs$lang$applyTo = (function (arglist__15501){
var elem = cljs.core.first(arglist__15501);
arglist__15501 = cljs.core.next(arglist__15501);
var class$ = cljs.core.first(arglist__15501);
var classes = cljs.core.rest(arglist__15501);
return G__15488__delegate(elem,class$,classes);
});
G__15488.cljs$core$IFn$_invoke$arity$variadic = G__15488__delegate;
return G__15488;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___15502 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15502))
{var class_list_15503 = temp__4090__auto___15502;class_list_15503.toggle(class$__$1);
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
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15506){var vec__15507 = p__15506;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15507,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15507,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str(":"),cljs.core.str(cljs.core.name(v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like(elem);var style = elem__$1.style;var seq__15514_15520 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__15515_15521 = null;var count__15516_15522 = 0;var i__15517_15523 = 0;while(true){
if((i__15517_15523 < count__15516_15522))
{var vec__15518_15524 = chunk__15515_15521.cljs$core$IIndexed$_nth$arity$2(null,i__15517_15523);var k_15525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15518_15524,0,null);var v_15526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15518_15524,1,null);(style[cljs.core.name(k_15525)] = v_15526);
{
var G__15527 = seq__15514_15520;
var G__15528 = chunk__15515_15521;
var G__15529 = count__15516_15522;
var G__15530 = (i__15517_15523 + 1);
seq__15514_15520 = G__15527;
chunk__15515_15521 = G__15528;
count__15516_15522 = G__15529;
i__15517_15523 = G__15530;
continue;
}
} else
{var temp__4092__auto___15531 = cljs.core.seq(seq__15514_15520);if(cljs.core.truth_(temp__4092__auto___15531))
{var seq__15514_15532__$1 = temp__4092__auto___15531;if(cljs.core.chunked_seq_QMARK_(seq__15514_15532__$1))
{var c__4010__auto___15533 = cljs.core.chunk_first(seq__15514_15532__$1);{
var G__15534 = cljs.core.chunk_rest(seq__15514_15532__$1);
var G__15535 = c__4010__auto___15533;
var G__15536 = cljs.core.count(c__4010__auto___15533);
var G__15537 = 0;
seq__15514_15520 = G__15534;
chunk__15515_15521 = G__15535;
count__15516_15522 = G__15536;
i__15517_15523 = G__15537;
continue;
}
} else
{var vec__15519_15538 = cljs.core.first(seq__15514_15532__$1);var k_15539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15519_15538,0,null);var v_15540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15519_15538,1,null);(style[cljs.core.name(k_15539)] = v_15540);
{
var G__15541 = cljs.core.next(seq__15514_15532__$1);
var G__15542 = null;
var G__15543 = 0;
var G__15544 = 0;
seq__15514_15520 = G__15541;
chunk__15515_15521 = G__15542;
count__15516_15522 = G__15543;
i__15517_15523 = G__15544;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15545){
var elem = cljs.core.first(arglist__15545);
var kvs = cljs.core.rest(arglist__15545);
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
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15552_15558 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__15553_15559 = null;var count__15554_15560 = 0;var i__15555_15561 = 0;while(true){
if((i__15555_15561 < count__15554_15560))
{var vec__15556_15562 = chunk__15553_15559.cljs$core$IIndexed$_nth$arity$2(null,i__15555_15561);var k_15563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15556_15562,0,null);var v_15564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15556_15562,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_15563,[cljs.core.str(v_15564),cljs.core.str("px")].join('')], 0));
{
var G__15565 = seq__15552_15558;
var G__15566 = chunk__15553_15559;
var G__15567 = count__15554_15560;
var G__15568 = (i__15555_15561 + 1);
seq__15552_15558 = G__15565;
chunk__15553_15559 = G__15566;
count__15554_15560 = G__15567;
i__15555_15561 = G__15568;
continue;
}
} else
{var temp__4092__auto___15569 = cljs.core.seq(seq__15552_15558);if(cljs.core.truth_(temp__4092__auto___15569))
{var seq__15552_15570__$1 = temp__4092__auto___15569;if(cljs.core.chunked_seq_QMARK_(seq__15552_15570__$1))
{var c__4010__auto___15571 = cljs.core.chunk_first(seq__15552_15570__$1);{
var G__15572 = cljs.core.chunk_rest(seq__15552_15570__$1);
var G__15573 = c__4010__auto___15571;
var G__15574 = cljs.core.count(c__4010__auto___15571);
var G__15575 = 0;
seq__15552_15558 = G__15572;
chunk__15553_15559 = G__15573;
count__15554_15560 = G__15574;
i__15555_15561 = G__15575;
continue;
}
} else
{var vec__15557_15576 = cljs.core.first(seq__15552_15570__$1);var k_15577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15557_15576,0,null);var v_15578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15557_15576,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_15577,[cljs.core.str(v_15578),cljs.core.str("px")].join('')], 0));
{
var G__15579 = cljs.core.next(seq__15552_15570__$1);
var G__15580 = null;
var G__15581 = 0;
var G__15582 = 0;
seq__15552_15558 = G__15579;
chunk__15553_15559 = G__15580;
count__15554_15560 = G__15581;
i__15555_15561 = G__15582;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__15583){
var elem = cljs.core.first(arglist__15583);
var kvs = cljs.core.rest(arglist__15583);
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
{var G__15592 = dommy.template.__GT_node_like(elem);(G__15592[cljs.core.name(k)] = v);
return G__15592;
} else
{var G__15593 = dommy.template.__GT_node_like(elem);G__15593.setAttribute(cljs.core.name(k),(((k === cljs.core.constant$keyword$167))?dommy.attrs.style_str(v):v));
return G__15593;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__15600__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15594_15601 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs)));var chunk__15595_15602 = null;var count__15596_15603 = 0;var i__15597_15604 = 0;while(true){
if((i__15597_15604 < count__15596_15603))
{var vec__15598_15605 = chunk__15595_15602.cljs$core$IIndexed$_nth$arity$2(null,i__15597_15604);var k_15606__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15598_15605,0,null);var v_15607__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15598_15605,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_15606__$1,v_15607__$1);
{
var G__15608 = seq__15594_15601;
var G__15609 = chunk__15595_15602;
var G__15610 = count__15596_15603;
var G__15611 = (i__15597_15604 + 1);
seq__15594_15601 = G__15608;
chunk__15595_15602 = G__15609;
count__15596_15603 = G__15610;
i__15597_15604 = G__15611;
continue;
}
} else
{var temp__4092__auto___15612 = cljs.core.seq(seq__15594_15601);if(cljs.core.truth_(temp__4092__auto___15612))
{var seq__15594_15613__$1 = temp__4092__auto___15612;if(cljs.core.chunked_seq_QMARK_(seq__15594_15613__$1))
{var c__4010__auto___15614 = cljs.core.chunk_first(seq__15594_15613__$1);{
var G__15615 = cljs.core.chunk_rest(seq__15594_15613__$1);
var G__15616 = c__4010__auto___15614;
var G__15617 = cljs.core.count(c__4010__auto___15614);
var G__15618 = 0;
seq__15594_15601 = G__15615;
chunk__15595_15602 = G__15616;
count__15596_15603 = G__15617;
i__15597_15604 = G__15618;
continue;
}
} else
{var vec__15599_15619 = cljs.core.first(seq__15594_15613__$1);var k_15620__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15599_15619,0,null);var v_15621__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15599_15619,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_15620__$1,v_15621__$1);
{
var G__15622 = cljs.core.next(seq__15594_15613__$1);
var G__15623 = null;
var G__15624 = 0;
var G__15625 = 0;
seq__15594_15601 = G__15622;
chunk__15595_15602 = G__15623;
count__15596_15603 = G__15624;
i__15597_15604 = G__15625;
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
var G__15600 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15600__delegate.call(this,elem,k,v,kvs);};
G__15600.cljs$lang$maxFixedArity = 3;
G__15600.cljs$lang$applyTo = (function (arglist__15626){
var elem = cljs.core.first(arglist__15626);
arglist__15626 = cljs.core.next(arglist__15626);
var k = cljs.core.first(arglist__15626);
arglist__15626 = cljs.core.next(arglist__15626);
var v = cljs.core.first(arglist__15626);
var kvs = cljs.core.rest(arglist__15626);
return G__15600__delegate(elem,k,v,kvs);
});
G__15600.cljs$core$IFn$_invoke$arity$variadic = G__15600__delegate;
return G__15600;
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
var G__15635__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15631_15636 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__15632_15637 = null;var count__15633_15638 = 0;var i__15634_15639 = 0;while(true){
if((i__15634_15639 < count__15633_15638))
{var k_15640__$1 = chunk__15632_15637.cljs$core$IIndexed$_nth$arity$2(null,i__15634_15639);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_15640__$1);
{
var G__15641 = seq__15631_15636;
var G__15642 = chunk__15632_15637;
var G__15643 = count__15633_15638;
var G__15644 = (i__15634_15639 + 1);
seq__15631_15636 = G__15641;
chunk__15632_15637 = G__15642;
count__15633_15638 = G__15643;
i__15634_15639 = G__15644;
continue;
}
} else
{var temp__4092__auto___15645 = cljs.core.seq(seq__15631_15636);if(cljs.core.truth_(temp__4092__auto___15645))
{var seq__15631_15646__$1 = temp__4092__auto___15645;if(cljs.core.chunked_seq_QMARK_(seq__15631_15646__$1))
{var c__4010__auto___15647 = cljs.core.chunk_first(seq__15631_15646__$1);{
var G__15648 = cljs.core.chunk_rest(seq__15631_15646__$1);
var G__15649 = c__4010__auto___15647;
var G__15650 = cljs.core.count(c__4010__auto___15647);
var G__15651 = 0;
seq__15631_15636 = G__15648;
chunk__15632_15637 = G__15649;
count__15633_15638 = G__15650;
i__15634_15639 = G__15651;
continue;
}
} else
{var k_15652__$1 = cljs.core.first(seq__15631_15646__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_15652__$1);
{
var G__15653 = cljs.core.next(seq__15631_15646__$1);
var G__15654 = null;
var G__15655 = 0;
var G__15656 = 0;
seq__15631_15636 = G__15653;
chunk__15632_15637 = G__15654;
count__15633_15638 = G__15655;
i__15634_15639 = G__15656;
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
var G__15635 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15635__delegate.call(this,elem,k,ks);};
G__15635.cljs$lang$maxFixedArity = 2;
G__15635.cljs$lang$applyTo = (function (arglist__15657){
var elem = cljs.core.first(arglist__15657);
arglist__15657 = cljs.core.next(arglist__15657);
var k = cljs.core.first(arglist__15657);
var ks = cljs.core.rest(arglist__15657);
return G__15635__delegate(elem,k,ks);
});
G__15635.cljs$core$IFn$_invoke$arity$variadic = G__15635__delegate;
return G__15635;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__15659 = dommy.template.__GT_node_like(elem);G__15659.style.display = ((show_QMARK_)?"":"none");
return G__15659;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__15661 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__15661,false);
return G__15661;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__15663 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__15663,true);
return G__15663;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__15665 = dommy.template.__GT_node_like(elem).getBoundingClientRect();(G__15665["constructor"] = Object);
return G__15665;
})(),cljs.core.array_seq([cljs.core.constant$keyword$111,true], 0));
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);var top = cljs.core.constant$keyword$170.cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect(elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
