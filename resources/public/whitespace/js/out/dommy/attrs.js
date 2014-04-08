// Compiled by ClojureScript 0.0-2202
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3469__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3469__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3469__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__7180 = (i + class$.length);
start_from = G__7180;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= 0);
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
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___7205 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7205))
{var class_list_7206 = temp__4124__auto___7205;var seq__7193_7207 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7194_7208 = null;var count__7195_7209 = 0;var i__7196_7210 = 0;while(true){
if((i__7196_7210 < count__7195_7209))
{var class_7211 = cljs.core._nth.call(null,chunk__7194_7208,i__7196_7210);class_list_7206.add(class_7211);
{
var G__7212 = seq__7193_7207;
var G__7213 = chunk__7194_7208;
var G__7214 = count__7195_7209;
var G__7215 = (i__7196_7210 + 1);
seq__7193_7207 = G__7212;
chunk__7194_7208 = G__7213;
count__7195_7209 = G__7214;
i__7196_7210 = G__7215;
continue;
}
} else
{var temp__4126__auto___7216 = cljs.core.seq.call(null,seq__7193_7207);if(temp__4126__auto___7216)
{var seq__7193_7217__$1 = temp__4126__auto___7216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7193_7217__$1))
{var c__4229__auto___7218 = cljs.core.chunk_first.call(null,seq__7193_7217__$1);{
var G__7219 = cljs.core.chunk_rest.call(null,seq__7193_7217__$1);
var G__7220 = c__4229__auto___7218;
var G__7221 = cljs.core.count.call(null,c__4229__auto___7218);
var G__7222 = 0;
seq__7193_7207 = G__7219;
chunk__7194_7208 = G__7220;
count__7195_7209 = G__7221;
i__7196_7210 = G__7222;
continue;
}
} else
{var class_7223 = cljs.core.first.call(null,seq__7193_7217__$1);class_list_7206.add(class_7223);
{
var G__7224 = cljs.core.next.call(null,seq__7193_7217__$1);
var G__7225 = null;
var G__7226 = 0;
var G__7227 = 0;
seq__7193_7207 = G__7224;
chunk__7194_7208 = G__7225;
count__7195_7209 = G__7226;
i__7196_7210 = G__7227;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_7228 = elem__$1.className;var seq__7197_7229 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7198_7230 = null;var count__7199_7231 = 0;var i__7200_7232 = 0;while(true){
if((i__7200_7232 < count__7199_7231))
{var class_7233 = cljs.core._nth.call(null,chunk__7198_7230,i__7200_7232);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7228,class_7233)))
{} else
{elem__$1.className = (((class_name_7228 === ""))?class_7233:[cljs.core.str(class_name_7228),cljs.core.str(" "),cljs.core.str(class_7233)].join(''));
}
{
var G__7234 = seq__7197_7229;
var G__7235 = chunk__7198_7230;
var G__7236 = count__7199_7231;
var G__7237 = (i__7200_7232 + 1);
seq__7197_7229 = G__7234;
chunk__7198_7230 = G__7235;
count__7199_7231 = G__7236;
i__7200_7232 = G__7237;
continue;
}
} else
{var temp__4126__auto___7238 = cljs.core.seq.call(null,seq__7197_7229);if(temp__4126__auto___7238)
{var seq__7197_7239__$1 = temp__4126__auto___7238;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7197_7239__$1))
{var c__4229__auto___7240 = cljs.core.chunk_first.call(null,seq__7197_7239__$1);{
var G__7241 = cljs.core.chunk_rest.call(null,seq__7197_7239__$1);
var G__7242 = c__4229__auto___7240;
var G__7243 = cljs.core.count.call(null,c__4229__auto___7240);
var G__7244 = 0;
seq__7197_7229 = G__7241;
chunk__7198_7230 = G__7242;
count__7199_7231 = G__7243;
i__7200_7232 = G__7244;
continue;
}
} else
{var class_7245 = cljs.core.first.call(null,seq__7197_7239__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7228,class_7245)))
{} else
{elem__$1.className = (((class_name_7228 === ""))?class_7245:[cljs.core.str(class_name_7228),cljs.core.str(" "),cljs.core.str(class_7245)].join(''));
}
{
var G__7246 = cljs.core.next.call(null,seq__7197_7239__$1);
var G__7247 = null;
var G__7248 = 0;
var G__7249 = 0;
seq__7197_7229 = G__7246;
chunk__7198_7230 = G__7247;
count__7199_7231 = G__7248;
i__7200_7232 = G__7249;
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
var G__7250__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7201_7251 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__7202_7252 = null;var count__7203_7253 = 0;var i__7204_7254 = 0;while(true){
if((i__7204_7254 < count__7203_7253))
{var c_7255 = cljs.core._nth.call(null,chunk__7202_7252,i__7204_7254);add_class_BANG_.call(null,elem__$1,c_7255);
{
var G__7256 = seq__7201_7251;
var G__7257 = chunk__7202_7252;
var G__7258 = count__7203_7253;
var G__7259 = (i__7204_7254 + 1);
seq__7201_7251 = G__7256;
chunk__7202_7252 = G__7257;
count__7203_7253 = G__7258;
i__7204_7254 = G__7259;
continue;
}
} else
{var temp__4126__auto___7260 = cljs.core.seq.call(null,seq__7201_7251);if(temp__4126__auto___7260)
{var seq__7201_7261__$1 = temp__4126__auto___7260;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7201_7261__$1))
{var c__4229__auto___7262 = cljs.core.chunk_first.call(null,seq__7201_7261__$1);{
var G__7263 = cljs.core.chunk_rest.call(null,seq__7201_7261__$1);
var G__7264 = c__4229__auto___7262;
var G__7265 = cljs.core.count.call(null,c__4229__auto___7262);
var G__7266 = 0;
seq__7201_7251 = G__7263;
chunk__7202_7252 = G__7264;
count__7203_7253 = G__7265;
i__7204_7254 = G__7266;
continue;
}
} else
{var c_7267 = cljs.core.first.call(null,seq__7201_7261__$1);add_class_BANG_.call(null,elem__$1,c_7267);
{
var G__7268 = cljs.core.next.call(null,seq__7201_7261__$1);
var G__7269 = null;
var G__7270 = 0;
var G__7271 = 0;
seq__7201_7251 = G__7268;
chunk__7202_7252 = G__7269;
count__7203_7253 = G__7270;
i__7204_7254 = G__7271;
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
var G__7250 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7250__delegate.call(this,elem,classes,more_classes);};
G__7250.cljs$lang$maxFixedArity = 2;
G__7250.cljs$lang$applyTo = (function (arglist__7272){
var elem = cljs.core.first(arglist__7272);
arglist__7272 = cljs.core.next(arglist__7272);
var classes = cljs.core.first(arglist__7272);
var more_classes = cljs.core.rest(arglist__7272);
return G__7250__delegate(elem,classes,more_classes);
});
G__7250.cljs$core$IFn$_invoke$arity$variadic = G__7250__delegate;
return G__7250;
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
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__7273 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__7273;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___7282 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7282))
{var class_list_7283 = temp__4124__auto___7282;class_list_7283.remove(class$__$1);
} else
{var class_name_7284 = elem__$1.className;var new_class_name_7285 = dommy.attrs.remove_class_str.call(null,class_name_7284,class$__$1);if((class_name_7284 === new_class_name_7285))
{} else
{elem__$1.className = new_class_name_7285;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__7286__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7278 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__7279 = null;var count__7280 = 0;var i__7281 = 0;while(true){
if((i__7281 < count__7280))
{var c = cljs.core._nth.call(null,chunk__7279,i__7281);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7287 = seq__7278;
var G__7288 = chunk__7279;
var G__7289 = count__7280;
var G__7290 = (i__7281 + 1);
seq__7278 = G__7287;
chunk__7279 = G__7288;
count__7280 = G__7289;
i__7281 = G__7290;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7278);if(temp__4126__auto__)
{var seq__7278__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7278__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__7278__$1);{
var G__7291 = cljs.core.chunk_rest.call(null,seq__7278__$1);
var G__7292 = c__4229__auto__;
var G__7293 = cljs.core.count.call(null,c__4229__auto__);
var G__7294 = 0;
seq__7278 = G__7291;
chunk__7279 = G__7292;
count__7280 = G__7293;
i__7281 = G__7294;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__7278__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7295 = cljs.core.next.call(null,seq__7278__$1);
var G__7296 = null;
var G__7297 = 0;
var G__7298 = 0;
seq__7278 = G__7295;
chunk__7279 = G__7296;
count__7280 = G__7297;
i__7281 = G__7298;
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
var G__7286 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7286__delegate.call(this,elem,class$,classes);};
G__7286.cljs$lang$maxFixedArity = 2;
G__7286.cljs$lang$applyTo = (function (arglist__7299){
var elem = cljs.core.first(arglist__7299);
arglist__7299 = cljs.core.next(arglist__7299);
var class$ = cljs.core.first(arglist__7299);
var classes = cljs.core.rest(arglist__7299);
return G__7286__delegate(elem,class$,classes);
});
G__7286.cljs$core$IFn$_invoke$arity$variadic = G__7286__delegate;
return G__7286;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___7300 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7300))
{var class_list_7301 = temp__4124__auto___7300;class_list_7301.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__7304){var vec__7305 = p__7304;var k = cljs.core.nth.call(null,vec__7305,0,null);var v = cljs.core.nth.call(null,vec__7305,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__7312_7318 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__7313_7319 = null;var count__7314_7320 = 0;var i__7315_7321 = 0;while(true){
if((i__7315_7321 < count__7314_7320))
{var vec__7316_7322 = cljs.core._nth.call(null,chunk__7313_7319,i__7315_7321);var k_7323 = cljs.core.nth.call(null,vec__7316_7322,0,null);var v_7324 = cljs.core.nth.call(null,vec__7316_7322,1,null);(style[cljs.core.name.call(null,k_7323)] = v_7324);
{
var G__7325 = seq__7312_7318;
var G__7326 = chunk__7313_7319;
var G__7327 = count__7314_7320;
var G__7328 = (i__7315_7321 + 1);
seq__7312_7318 = G__7325;
chunk__7313_7319 = G__7326;
count__7314_7320 = G__7327;
i__7315_7321 = G__7328;
continue;
}
} else
{var temp__4126__auto___7329 = cljs.core.seq.call(null,seq__7312_7318);if(temp__4126__auto___7329)
{var seq__7312_7330__$1 = temp__4126__auto___7329;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7312_7330__$1))
{var c__4229__auto___7331 = cljs.core.chunk_first.call(null,seq__7312_7330__$1);{
var G__7332 = cljs.core.chunk_rest.call(null,seq__7312_7330__$1);
var G__7333 = c__4229__auto___7331;
var G__7334 = cljs.core.count.call(null,c__4229__auto___7331);
var G__7335 = 0;
seq__7312_7318 = G__7332;
chunk__7313_7319 = G__7333;
count__7314_7320 = G__7334;
i__7315_7321 = G__7335;
continue;
}
} else
{var vec__7317_7336 = cljs.core.first.call(null,seq__7312_7330__$1);var k_7337 = cljs.core.nth.call(null,vec__7317_7336,0,null);var v_7338 = cljs.core.nth.call(null,vec__7317_7336,1,null);(style[cljs.core.name.call(null,k_7337)] = v_7338);
{
var G__7339 = cljs.core.next.call(null,seq__7312_7330__$1);
var G__7340 = null;
var G__7341 = 0;
var G__7342 = 0;
seq__7312_7318 = G__7339;
chunk__7313_7319 = G__7340;
count__7314_7320 = G__7341;
i__7315_7321 = G__7342;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7343){
var elem = cljs.core.first(arglist__7343);
var kvs = cljs.core.rest(arglist__7343);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7350_7356 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__7351_7357 = null;var count__7352_7358 = 0;var i__7353_7359 = 0;while(true){
if((i__7353_7359 < count__7352_7358))
{var vec__7354_7360 = cljs.core._nth.call(null,chunk__7351_7357,i__7353_7359);var k_7361 = cljs.core.nth.call(null,vec__7354_7360,0,null);var v_7362 = cljs.core.nth.call(null,vec__7354_7360,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7361,[cljs.core.str(v_7362),cljs.core.str("px")].join(''));
{
var G__7363 = seq__7350_7356;
var G__7364 = chunk__7351_7357;
var G__7365 = count__7352_7358;
var G__7366 = (i__7353_7359 + 1);
seq__7350_7356 = G__7363;
chunk__7351_7357 = G__7364;
count__7352_7358 = G__7365;
i__7353_7359 = G__7366;
continue;
}
} else
{var temp__4126__auto___7367 = cljs.core.seq.call(null,seq__7350_7356);if(temp__4126__auto___7367)
{var seq__7350_7368__$1 = temp__4126__auto___7367;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7350_7368__$1))
{var c__4229__auto___7369 = cljs.core.chunk_first.call(null,seq__7350_7368__$1);{
var G__7370 = cljs.core.chunk_rest.call(null,seq__7350_7368__$1);
var G__7371 = c__4229__auto___7369;
var G__7372 = cljs.core.count.call(null,c__4229__auto___7369);
var G__7373 = 0;
seq__7350_7356 = G__7370;
chunk__7351_7357 = G__7371;
count__7352_7358 = G__7372;
i__7353_7359 = G__7373;
continue;
}
} else
{var vec__7355_7374 = cljs.core.first.call(null,seq__7350_7368__$1);var k_7375 = cljs.core.nth.call(null,vec__7355_7374,0,null);var v_7376 = cljs.core.nth.call(null,vec__7355_7374,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7375,[cljs.core.str(v_7376),cljs.core.str("px")].join(''));
{
var G__7377 = cljs.core.next.call(null,seq__7350_7368__$1);
var G__7378 = null;
var G__7379 = 0;
var G__7380 = 0;
seq__7350_7356 = G__7377;
chunk__7351_7357 = G__7378;
count__7352_7358 = G__7379;
i__7353_7359 = G__7380;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__7381){
var elem = cljs.core.first(arglist__7381);
var kvs = cljs.core.rest(arglist__7381);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
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
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__7390 = dommy.template.__GT_node_like.call(null,elem);(G__7390[cljs.core.name.call(null,k)] = v);
return G__7390;
} else
{var G__7391 = dommy.template.__GT_node_like.call(null,elem);G__7391.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__7391;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__7398__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7392_7399 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__7393_7400 = null;var count__7394_7401 = 0;var i__7395_7402 = 0;while(true){
if((i__7395_7402 < count__7394_7401))
{var vec__7396_7403 = cljs.core._nth.call(null,chunk__7393_7400,i__7395_7402);var k_7404__$1 = cljs.core.nth.call(null,vec__7396_7403,0,null);var v_7405__$1 = cljs.core.nth.call(null,vec__7396_7403,1,null);set_attr_BANG_.call(null,elem__$1,k_7404__$1,v_7405__$1);
{
var G__7406 = seq__7392_7399;
var G__7407 = chunk__7393_7400;
var G__7408 = count__7394_7401;
var G__7409 = (i__7395_7402 + 1);
seq__7392_7399 = G__7406;
chunk__7393_7400 = G__7407;
count__7394_7401 = G__7408;
i__7395_7402 = G__7409;
continue;
}
} else
{var temp__4126__auto___7410 = cljs.core.seq.call(null,seq__7392_7399);if(temp__4126__auto___7410)
{var seq__7392_7411__$1 = temp__4126__auto___7410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7392_7411__$1))
{var c__4229__auto___7412 = cljs.core.chunk_first.call(null,seq__7392_7411__$1);{
var G__7413 = cljs.core.chunk_rest.call(null,seq__7392_7411__$1);
var G__7414 = c__4229__auto___7412;
var G__7415 = cljs.core.count.call(null,c__4229__auto___7412);
var G__7416 = 0;
seq__7392_7399 = G__7413;
chunk__7393_7400 = G__7414;
count__7394_7401 = G__7415;
i__7395_7402 = G__7416;
continue;
}
} else
{var vec__7397_7417 = cljs.core.first.call(null,seq__7392_7411__$1);var k_7418__$1 = cljs.core.nth.call(null,vec__7397_7417,0,null);var v_7419__$1 = cljs.core.nth.call(null,vec__7397_7417,1,null);set_attr_BANG_.call(null,elem__$1,k_7418__$1,v_7419__$1);
{
var G__7420 = cljs.core.next.call(null,seq__7392_7411__$1);
var G__7421 = null;
var G__7422 = 0;
var G__7423 = 0;
seq__7392_7399 = G__7420;
chunk__7393_7400 = G__7421;
count__7394_7401 = G__7422;
i__7395_7402 = G__7423;
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
var G__7398 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__7398__delegate.call(this,elem,k,v,kvs);};
G__7398.cljs$lang$maxFixedArity = 3;
G__7398.cljs$lang$applyTo = (function (arglist__7424){
var elem = cljs.core.first(arglist__7424);
arglist__7424 = cljs.core.next(arglist__7424);
var k = cljs.core.first(arglist__7424);
arglist__7424 = cljs.core.next(arglist__7424);
var v = cljs.core.first(arglist__7424);
var kvs = cljs.core.rest(arglist__7424);
return G__7398__delegate(elem,k,v,kvs);
});
G__7398.cljs$core$IFn$_invoke$arity$variadic = G__7398__delegate;
return G__7398;
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
var G__7433__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7429_7434 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__7430_7435 = null;var count__7431_7436 = 0;var i__7432_7437 = 0;while(true){
if((i__7432_7437 < count__7431_7436))
{var k_7438__$1 = cljs.core._nth.call(null,chunk__7430_7435,i__7432_7437);remove_attr_BANG_.call(null,elem__$1,k_7438__$1);
{
var G__7439 = seq__7429_7434;
var G__7440 = chunk__7430_7435;
var G__7441 = count__7431_7436;
var G__7442 = (i__7432_7437 + 1);
seq__7429_7434 = G__7439;
chunk__7430_7435 = G__7440;
count__7431_7436 = G__7441;
i__7432_7437 = G__7442;
continue;
}
} else
{var temp__4126__auto___7443 = cljs.core.seq.call(null,seq__7429_7434);if(temp__4126__auto___7443)
{var seq__7429_7444__$1 = temp__4126__auto___7443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7429_7444__$1))
{var c__4229__auto___7445 = cljs.core.chunk_first.call(null,seq__7429_7444__$1);{
var G__7446 = cljs.core.chunk_rest.call(null,seq__7429_7444__$1);
var G__7447 = c__4229__auto___7445;
var G__7448 = cljs.core.count.call(null,c__4229__auto___7445);
var G__7449 = 0;
seq__7429_7434 = G__7446;
chunk__7430_7435 = G__7447;
count__7431_7436 = G__7448;
i__7432_7437 = G__7449;
continue;
}
} else
{var k_7450__$1 = cljs.core.first.call(null,seq__7429_7444__$1);remove_attr_BANG_.call(null,elem__$1,k_7450__$1);
{
var G__7451 = cljs.core.next.call(null,seq__7429_7444__$1);
var G__7452 = null;
var G__7453 = 0;
var G__7454 = 0;
seq__7429_7434 = G__7451;
chunk__7430_7435 = G__7452;
count__7431_7436 = G__7453;
i__7432_7437 = G__7454;
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
var G__7433 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7433__delegate.call(this,elem,k,ks);};
G__7433.cljs$lang$maxFixedArity = 2;
G__7433.cljs$lang$applyTo = (function (arglist__7455){
var elem = cljs.core.first(arglist__7455);
arglist__7455 = cljs.core.next(arglist__7455);
var k = cljs.core.first(arglist__7455);
var ks = cljs.core.rest(arglist__7455);
return G__7433__delegate(elem,k,ks);
});
G__7433.cljs$core$IFn$_invoke$arity$variadic = G__7433__delegate;
return G__7433;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__7457 = dommy.template.__GT_node_like.call(null,elem);G__7457.style.display = ((show_QMARK_)?"":"none");
return G__7457;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__7459 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7459,false);
return G__7459;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__7461 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7461,true);
return G__7461;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__7463 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__7463["constructor"] = Object);
return G__7463;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
