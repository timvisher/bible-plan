// Compiled by ClojureScript 0.0-2138
goog.provide('clj_time.internal.fn');
goog.require('cljs.core');
/**
* Like clojure.core/partial but prepopulates last N arguments (first is passed in later)
* @param {...*} var_args
*/
clj_time.internal.fn.fpartial = (function() { 
var fpartial__delegate = function (f,args){return (function() { 
var G__5910__delegate = function (arg,more){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,args,more));
};
var G__5910 = function (arg,var_args){
var more = null;if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__5910__delegate.call(this,arg,more);};
G__5910.cljs$lang$maxFixedArity = 1;
G__5910.cljs$lang$applyTo = (function (arglist__5911){
var arg = cljs.core.first(arglist__5911);
var more = cljs.core.rest(arglist__5911);
return G__5910__delegate(arg,more);
});
G__5910.cljs$core$IFn$_invoke$arity$variadic = G__5910__delegate;
return G__5910;
})()
;
};
var fpartial = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fpartial__delegate.call(this,f,args);};
fpartial.cljs$lang$maxFixedArity = 1;
fpartial.cljs$lang$applyTo = (function (arglist__5912){
var f = cljs.core.first(arglist__5912);
var args = cljs.core.rest(arglist__5912);
return fpartial__delegate(f,args);
});
fpartial.cljs$core$IFn$_invoke$arity$variadic = fpartial__delegate;
return fpartial;
})()
;
