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
var G__15260 = (i + class$.length);
start_from = G__15260;
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
{var temp__4090__auto___15285 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15285))
{var class_list_15286 = temp__4090__auto___15285;var seq__15273_15287 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__15274_15288 = null;var count__15275_15289 = 0;var i__15276_15290 = 0;while(true){
if((i__15276_15290 < count__15275_15289))
{var class_15291 = chunk__15274_15288.cljs$core$IIndexed$_nth$arity$2(null,i__15276_15290);class_list_15286.add(class_15291);
{
var G__15292 = seq__15273_15287;
var G__15293 = chunk__15274_15288;
var G__15294 = count__15275_15289;
var G__15295 = (i__15276_15290 + 1);
seq__15273_15287 = G__15292;
chunk__15274_15288 = G__15293;
count__15275_15289 = G__15294;
i__15276_15290 = G__15295;
continue;
}
} else
{var temp__4092__auto___15296 = cljs.core.seq(seq__15273_15287);if(cljs.core.truth_(temp__4092__auto___15296))
{var seq__15273_15297__$1 = temp__4092__auto___15296;if(cljs.core.chunked_seq_QMARK_(seq__15273_15297__$1))
{var c__4010__auto___15298 = cljs.core.chunk_first(seq__15273_15297__$1);{
var G__15299 = cljs.core.chunk_rest(seq__15273_15297__$1);
var G__15300 = c__4010__auto___15298;
var G__15301 = cljs.core.count(c__4010__auto___15298);
var G__15302 = 0;
seq__15273_15287 = G__15299;
chunk__15274_15288 = G__15300;
count__15275_15289 = G__15301;
i__15276_15290 = G__15302;
continue;
}
} else
{var class_15303 = cljs.core.first(seq__15273_15297__$1);class_list_15286.add(class_15303);
{
var G__15304 = cljs.core.next(seq__15273_15297__$1);
var G__15305 = null;
var G__15306 = 0;
var G__15307 = 0;
seq__15273_15287 = G__15304;
chunk__15274_15288 = G__15305;
count__15275_15289 = G__15306;
i__15276_15290 = G__15307;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_15308 = elem__$1.className;var seq__15277_15309 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__15278_15310 = null;var count__15279_15311 = 0;var i__15280_15312 = 0;while(true){
if((i__15280_15312 < count__15279_15311))
{var class_15313 = chunk__15278_15310.cljs$core$IIndexed$_nth$arity$2(null,i__15280_15312);if(cljs.core.truth_(dommy.attrs.class_index(class_name_15308,class_15313)))
{} else
{elem__$1.className = (((class_name_15308 === ""))?class_15313:[cljs.core.str(class_name_15308),cljs.core.str(" "),cljs.core.str(class_15313)].join(''));
}
{
var G__15314 = seq__15277_15309;
var G__15315 = chunk__15278_15310;
var G__15316 = count__15279_15311;
var G__15317 = (i__15280_15312 + 1);
seq__15277_15309 = G__15314;
chunk__15278_15310 = G__15315;
count__15279_15311 = G__15316;
i__15280_15312 = G__15317;
continue;
}
} else
{var temp__4092__auto___15318 = cljs.core.seq(seq__15277_15309);if(cljs.core.truth_(temp__4092__auto___15318))
{var seq__15277_15319__$1 = temp__4092__auto___15318;if(cljs.core.chunked_seq_QMARK_(seq__15277_15319__$1))
{var c__4010__auto___15320 = cljs.core.chunk_first(seq__15277_15319__$1);{
var G__15321 = cljs.core.chunk_rest(seq__15277_15319__$1);
var G__15322 = c__4010__auto___15320;
var G__15323 = cljs.core.count(c__4010__auto___15320);
var G__15324 = 0;
seq__15277_15309 = G__15321;
chunk__15278_15310 = G__15322;
count__15279_15311 = G__15323;
i__15280_15312 = G__15324;
continue;
}
} else
{var class_15325 = cljs.core.first(seq__15277_15319__$1);if(cljs.core.truth_(dommy.attrs.class_index(class_name_15308,class_15325)))
{} else
{elem__$1.className = (((class_name_15308 === ""))?class_15325:[cljs.core.str(class_name_15308),cljs.core.str(" "),cljs.core.str(class_15325)].join(''));
}
{
var G__15326 = cljs.core.next(seq__15277_15319__$1);
var G__15327 = null;
var G__15328 = 0;
var G__15329 = 0;
seq__15277_15309 = G__15326;
chunk__15278_15310 = G__15327;
count__15279_15311 = G__15328;
i__15280_15312 = G__15329;
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
var G__15330__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15281_15331 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__15282_15332 = null;var count__15283_15333 = 0;var i__15284_15334 = 0;while(true){
if((i__15284_15334 < count__15283_15333))
{var c_15335 = chunk__15282_15332.cljs$core$IIndexed$_nth$arity$2(null,i__15284_15334);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_15335);
{
var G__15336 = seq__15281_15331;
var G__15337 = chunk__15282_15332;
var G__15338 = count__15283_15333;
var G__15339 = (i__15284_15334 + 1);
seq__15281_15331 = G__15336;
chunk__15282_15332 = G__15337;
count__15283_15333 = G__15338;
i__15284_15334 = G__15339;
continue;
}
} else
{var temp__4092__auto___15340 = cljs.core.seq(seq__15281_15331);if(cljs.core.truth_(temp__4092__auto___15340))
{var seq__15281_15341__$1 = temp__4092__auto___15340;if(cljs.core.chunked_seq_QMARK_(seq__15281_15341__$1))
{var c__4010__auto___15342 = cljs.core.chunk_first(seq__15281_15341__$1);{
var G__15343 = cljs.core.chunk_rest(seq__15281_15341__$1);
var G__15344 = c__4010__auto___15342;
var G__15345 = cljs.core.count(c__4010__auto___15342);
var G__15346 = 0;
seq__15281_15331 = G__15343;
chunk__15282_15332 = G__15344;
count__15283_15333 = G__15345;
i__15284_15334 = G__15346;
continue;
}
} else
{var c_15347 = cljs.core.first(seq__15281_15341__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_15347);
{
var G__15348 = cljs.core.next(seq__15281_15341__$1);
var G__15349 = null;
var G__15350 = 0;
var G__15351 = 0;
seq__15281_15331 = G__15348;
chunk__15282_15332 = G__15349;
count__15283_15333 = G__15350;
i__15284_15334 = G__15351;
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
var G__15330 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15330__delegate.call(this,elem,classes,more_classes);};
G__15330.cljs$lang$maxFixedArity = 2;
G__15330.cljs$lang$applyTo = (function (arglist__15352){
var elem = cljs.core.first(arglist__15352);
arglist__15352 = cljs.core.next(arglist__15352);
var classes = cljs.core.first(arglist__15352);
var more_classes = cljs.core.rest(arglist__15352);
return G__15330__delegate(elem,classes,more_classes);
});
G__15330.cljs$core$IFn$_invoke$arity$variadic = G__15330__delegate;
return G__15330;
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
var G__15353 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__15353;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___15362 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15362))
{var class_list_15363 = temp__4090__auto___15362;class_list_15363.remove(class$__$1);
} else
{var class_name_15364 = elem__$1.className;var new_class_name_15365 = dommy.attrs.remove_class_str(class_name_15364,class$__$1);if((class_name_15364 === new_class_name_15365))
{} else
{elem__$1.className = new_class_name_15365;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__15366__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15358 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__15359 = null;var count__15360 = 0;var i__15361 = 0;while(true){
if((i__15361 < count__15360))
{var c = chunk__15359.cljs$core$IIndexed$_nth$arity$2(null,i__15361);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__15367 = seq__15358;
var G__15368 = chunk__15359;
var G__15369 = count__15360;
var G__15370 = (i__15361 + 1);
seq__15358 = G__15367;
chunk__15359 = G__15368;
count__15360 = G__15369;
i__15361 = G__15370;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__15358);if(cljs.core.truth_(temp__4092__auto__))
{var seq__15358__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15358__$1))
{var c__4010__auto__ = cljs.core.chunk_first(seq__15358__$1);{
var G__15371 = cljs.core.chunk_rest(seq__15358__$1);
var G__15372 = c__4010__auto__;
var G__15373 = cljs.core.count(c__4010__auto__);
var G__15374 = 0;
seq__15358 = G__15371;
chunk__15359 = G__15372;
count__15360 = G__15373;
i__15361 = G__15374;
continue;
}
} else
{var c = cljs.core.first(seq__15358__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__15375 = cljs.core.next(seq__15358__$1);
var G__15376 = null;
var G__15377 = 0;
var G__15378 = 0;
seq__15358 = G__15375;
chunk__15359 = G__15376;
count__15360 = G__15377;
i__15361 = G__15378;
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
var G__15366 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15366__delegate.call(this,elem,class$,classes);};
G__15366.cljs$lang$maxFixedArity = 2;
G__15366.cljs$lang$applyTo = (function (arglist__15379){
var elem = cljs.core.first(arglist__15379);
arglist__15379 = cljs.core.next(arglist__15379);
var class$ = cljs.core.first(arglist__15379);
var classes = cljs.core.rest(arglist__15379);
return G__15366__delegate(elem,class$,classes);
});
G__15366.cljs$core$IFn$_invoke$arity$variadic = G__15366__delegate;
return G__15366;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___15380 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15380))
{var class_list_15381 = temp__4090__auto___15380;class_list_15381.toggle(class$__$1);
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
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15384){var vec__15385 = p__15384;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15385,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15385,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str(":"),cljs.core.str(cljs.core.name(v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like(elem);var style = elem__$1.style;var seq__15392_15398 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__15393_15399 = null;var count__15394_15400 = 0;var i__15395_15401 = 0;while(true){
if((i__15395_15401 < count__15394_15400))
{var vec__15396_15402 = chunk__15393_15399.cljs$core$IIndexed$_nth$arity$2(null,i__15395_15401);var k_15403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15396_15402,0,null);var v_15404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15396_15402,1,null);(style[cljs.core.name(k_15403)] = v_15404);
{
var G__15405 = seq__15392_15398;
var G__15406 = chunk__15393_15399;
var G__15407 = count__15394_15400;
var G__15408 = (i__15395_15401 + 1);
seq__15392_15398 = G__15405;
chunk__15393_15399 = G__15406;
count__15394_15400 = G__15407;
i__15395_15401 = G__15408;
continue;
}
} else
{var temp__4092__auto___15409 = cljs.core.seq(seq__15392_15398);if(cljs.core.truth_(temp__4092__auto___15409))
{var seq__15392_15410__$1 = temp__4092__auto___15409;if(cljs.core.chunked_seq_QMARK_(seq__15392_15410__$1))
{var c__4010__auto___15411 = cljs.core.chunk_first(seq__15392_15410__$1);{
var G__15412 = cljs.core.chunk_rest(seq__15392_15410__$1);
var G__15413 = c__4010__auto___15411;
var G__15414 = cljs.core.count(c__4010__auto___15411);
var G__15415 = 0;
seq__15392_15398 = G__15412;
chunk__15393_15399 = G__15413;
count__15394_15400 = G__15414;
i__15395_15401 = G__15415;
continue;
}
} else
{var vec__15397_15416 = cljs.core.first(seq__15392_15410__$1);var k_15417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397_15416,0,null);var v_15418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397_15416,1,null);(style[cljs.core.name(k_15417)] = v_15418);
{
var G__15419 = cljs.core.next(seq__15392_15410__$1);
var G__15420 = null;
var G__15421 = 0;
var G__15422 = 0;
seq__15392_15398 = G__15419;
chunk__15393_15399 = G__15420;
count__15394_15400 = G__15421;
i__15395_15401 = G__15422;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15423){
var elem = cljs.core.first(arglist__15423);
var kvs = cljs.core.rest(arglist__15423);
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
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15430_15436 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__15431_15437 = null;var count__15432_15438 = 0;var i__15433_15439 = 0;while(true){
if((i__15433_15439 < count__15432_15438))
{var vec__15434_15440 = chunk__15431_15437.cljs$core$IIndexed$_nth$arity$2(null,i__15433_15439);var k_15441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15434_15440,0,null);var v_15442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15434_15440,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_15441,[cljs.core.str(v_15442),cljs.core.str("px")].join('')], 0));
{
var G__15443 = seq__15430_15436;
var G__15444 = chunk__15431_15437;
var G__15445 = count__15432_15438;
var G__15446 = (i__15433_15439 + 1);
seq__15430_15436 = G__15443;
chunk__15431_15437 = G__15444;
count__15432_15438 = G__15445;
i__15433_15439 = G__15446;
continue;
}
} else
{var temp__4092__auto___15447 = cljs.core.seq(seq__15430_15436);if(cljs.core.truth_(temp__4092__auto___15447))
{var seq__15430_15448__$1 = temp__4092__auto___15447;if(cljs.core.chunked_seq_QMARK_(seq__15430_15448__$1))
{var c__4010__auto___15449 = cljs.core.chunk_first(seq__15430_15448__$1);{
var G__15450 = cljs.core.chunk_rest(seq__15430_15448__$1);
var G__15451 = c__4010__auto___15449;
var G__15452 = cljs.core.count(c__4010__auto___15449);
var G__15453 = 0;
seq__15430_15436 = G__15450;
chunk__15431_15437 = G__15451;
count__15432_15438 = G__15452;
i__15433_15439 = G__15453;
continue;
}
} else
{var vec__15435_15454 = cljs.core.first(seq__15430_15448__$1);var k_15455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15435_15454,0,null);var v_15456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15435_15454,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_15455,[cljs.core.str(v_15456),cljs.core.str("px")].join('')], 0));
{
var G__15457 = cljs.core.next(seq__15430_15448__$1);
var G__15458 = null;
var G__15459 = 0;
var G__15460 = 0;
seq__15430_15436 = G__15457;
chunk__15431_15437 = G__15458;
count__15432_15438 = G__15459;
i__15433_15439 = G__15460;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__15461){
var elem = cljs.core.first(arglist__15461);
var kvs = cljs.core.rest(arglist__15461);
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
{var G__15470 = dommy.template.__GT_node_like(elem);(G__15470[cljs.core.name(k)] = v);
return G__15470;
} else
{var G__15471 = dommy.template.__GT_node_like(elem);G__15471.setAttribute(cljs.core.name(k),(((k === cljs.core.constant$keyword$170))?dommy.attrs.style_str(v):v));
return G__15471;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__15478__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15472_15479 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs)));var chunk__15473_15480 = null;var count__15474_15481 = 0;var i__15475_15482 = 0;while(true){
if((i__15475_15482 < count__15474_15481))
{var vec__15476_15483 = chunk__15473_15480.cljs$core$IIndexed$_nth$arity$2(null,i__15475_15482);var k_15484__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15476_15483,0,null);var v_15485__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15476_15483,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_15484__$1,v_15485__$1);
{
var G__15486 = seq__15472_15479;
var G__15487 = chunk__15473_15480;
var G__15488 = count__15474_15481;
var G__15489 = (i__15475_15482 + 1);
seq__15472_15479 = G__15486;
chunk__15473_15480 = G__15487;
count__15474_15481 = G__15488;
i__15475_15482 = G__15489;
continue;
}
} else
{var temp__4092__auto___15490 = cljs.core.seq(seq__15472_15479);if(cljs.core.truth_(temp__4092__auto___15490))
{var seq__15472_15491__$1 = temp__4092__auto___15490;if(cljs.core.chunked_seq_QMARK_(seq__15472_15491__$1))
{var c__4010__auto___15492 = cljs.core.chunk_first(seq__15472_15491__$1);{
var G__15493 = cljs.core.chunk_rest(seq__15472_15491__$1);
var G__15494 = c__4010__auto___15492;
var G__15495 = cljs.core.count(c__4010__auto___15492);
var G__15496 = 0;
seq__15472_15479 = G__15493;
chunk__15473_15480 = G__15494;
count__15474_15481 = G__15495;
i__15475_15482 = G__15496;
continue;
}
} else
{var vec__15477_15497 = cljs.core.first(seq__15472_15491__$1);var k_15498__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15477_15497,0,null);var v_15499__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15477_15497,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_15498__$1,v_15499__$1);
{
var G__15500 = cljs.core.next(seq__15472_15491__$1);
var G__15501 = null;
var G__15502 = 0;
var G__15503 = 0;
seq__15472_15479 = G__15500;
chunk__15473_15480 = G__15501;
count__15474_15481 = G__15502;
i__15475_15482 = G__15503;
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
var G__15478 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15478__delegate.call(this,elem,k,v,kvs);};
G__15478.cljs$lang$maxFixedArity = 3;
G__15478.cljs$lang$applyTo = (function (arglist__15504){
var elem = cljs.core.first(arglist__15504);
arglist__15504 = cljs.core.next(arglist__15504);
var k = cljs.core.first(arglist__15504);
arglist__15504 = cljs.core.next(arglist__15504);
var v = cljs.core.first(arglist__15504);
var kvs = cljs.core.rest(arglist__15504);
return G__15478__delegate(elem,k,v,kvs);
});
G__15478.cljs$core$IFn$_invoke$arity$variadic = G__15478__delegate;
return G__15478;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$171,null,cljs.core.constant$keyword$172,null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name(k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__15513__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15509_15514 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__15510_15515 = null;var count__15511_15516 = 0;var i__15512_15517 = 0;while(true){
if((i__15512_15517 < count__15511_15516))
{var k_15518__$1 = chunk__15510_15515.cljs$core$IIndexed$_nth$arity$2(null,i__15512_15517);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_15518__$1);
{
var G__15519 = seq__15509_15514;
var G__15520 = chunk__15510_15515;
var G__15521 = count__15511_15516;
var G__15522 = (i__15512_15517 + 1);
seq__15509_15514 = G__15519;
chunk__15510_15515 = G__15520;
count__15511_15516 = G__15521;
i__15512_15517 = G__15522;
continue;
}
} else
{var temp__4092__auto___15523 = cljs.core.seq(seq__15509_15514);if(cljs.core.truth_(temp__4092__auto___15523))
{var seq__15509_15524__$1 = temp__4092__auto___15523;if(cljs.core.chunked_seq_QMARK_(seq__15509_15524__$1))
{var c__4010__auto___15525 = cljs.core.chunk_first(seq__15509_15524__$1);{
var G__15526 = cljs.core.chunk_rest(seq__15509_15524__$1);
var G__15527 = c__4010__auto___15525;
var G__15528 = cljs.core.count(c__4010__auto___15525);
var G__15529 = 0;
seq__15509_15514 = G__15526;
chunk__15510_15515 = G__15527;
count__15511_15516 = G__15528;
i__15512_15517 = G__15529;
continue;
}
} else
{var k_15530__$1 = cljs.core.first(seq__15509_15524__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_15530__$1);
{
var G__15531 = cljs.core.next(seq__15509_15524__$1);
var G__15532 = null;
var G__15533 = 0;
var G__15534 = 0;
seq__15509_15514 = G__15531;
chunk__15510_15515 = G__15532;
count__15511_15516 = G__15533;
i__15512_15517 = G__15534;
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
var G__15513 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15513__delegate.call(this,elem,k,ks);};
G__15513.cljs$lang$maxFixedArity = 2;
G__15513.cljs$lang$applyTo = (function (arglist__15535){
var elem = cljs.core.first(arglist__15535);
arglist__15535 = cljs.core.next(arglist__15535);
var k = cljs.core.first(arglist__15535);
var ks = cljs.core.rest(arglist__15535);
return G__15513__delegate(elem,k,ks);
});
G__15513.cljs$core$IFn$_invoke$arity$variadic = G__15513__delegate;
return G__15513;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__15537 = dommy.template.__GT_node_like(elem);G__15537.style.display = ((show_QMARK_)?"":"none");
return G__15537;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__15539 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__15539,false);
return G__15539;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__15541 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__15541,true);
return G__15541;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__15543 = dommy.template.__GT_node_like(elem).getBoundingClientRect();(G__15543["constructor"] = Object);
return G__15543;
})(),cljs.core.array_seq([cljs.core.constant$keyword$111,true], 0));
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);var top = cljs.core.constant$keyword$173.cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect(elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
