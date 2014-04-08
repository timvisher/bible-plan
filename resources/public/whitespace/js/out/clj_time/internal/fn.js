// Compiled by ClojureScript 0.0-2202
goog.provide('clj_time.internal.fn');
goog.require('cljs.core');
/**
* Like clojure.core/partial but prepopulates last N arguments (first is passed in later)
* @param {...*} var_args
*/
clj_time.internal.fn.fpartial = (function() { 
var fpartial__delegate = function (f,args){return (function() { 
var G__6027__delegate = function (arg,more){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,args,more));
};
var G__6027 = function (arg,var_args){
var more = null;if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__6027__delegate.call(this,arg,more);};
G__6027.cljs$lang$maxFixedArity = 1;
G__6027.cljs$lang$applyTo = (function (arglist__6028){
var arg = cljs.core.first(arglist__6028);
var more = cljs.core.rest(arglist__6028);
return G__6027__delegate(arg,more);
});
G__6027.cljs$core$IFn$_invoke$arity$variadic = G__6027__delegate;
return G__6027;
})()
;
};
var fpartial = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fpartial__delegate.call(this,f,args);};
fpartial.cljs$lang$maxFixedArity = 1;
fpartial.cljs$lang$applyTo = (function (arglist__6029){
var f = cljs.core.first(arglist__6029);
var args = cljs.core.rest(arglist__6029);
return fpartial__delegate(f,args);
});
fpartial.cljs$core$IFn$_invoke$arity$variadic = fpartial__delegate;
return fpartial;
})()
;
