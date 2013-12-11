// Compiled by ClojureScript 0.0-2075
goog.provide('clj_time.internal.fn');
goog.require('cljs.core');
/**
* Like clojure.core/partial but prepopulates last N arguments (first is passed in later)
* @param {...*} var_args
*/
clj_time.internal.fn.fpartial = (function() { 
var fpartial__delegate = function (f,args){return (function() { 
var G__13793__delegate = function (arg,more){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,more));
};
var G__13793 = function (arg,var_args){
var more = null;if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__13793__delegate.call(this,arg,more);};
G__13793.cljs$lang$maxFixedArity = 1;
G__13793.cljs$lang$applyTo = (function (arglist__13794){
var arg = cljs.core.first(arglist__13794);
var more = cljs.core.rest(arglist__13794);
return G__13793__delegate(arg,more);
});
G__13793.cljs$core$IFn$_invoke$arity$variadic = G__13793__delegate;
return G__13793;
})()
;
};
var fpartial = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fpartial__delegate.call(this,f,args);};
fpartial.cljs$lang$maxFixedArity = 1;
fpartial.cljs$lang$applyTo = (function (arglist__13795){
var f = cljs.core.first(arglist__13795);
var args = cljs.core.rest(arglist__13795);
return fpartial__delegate(f,args);
});
fpartial.cljs$core$IFn$_invoke$arity$variadic = fpartial__delegate;
return fpartial;
})()
;
