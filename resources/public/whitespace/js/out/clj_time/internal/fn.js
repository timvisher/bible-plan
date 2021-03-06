// Compiled by ClojureScript 0.0-2075
goog.provide('clj_time.internal.fn');
goog.require('cljs.core');
/**
* Like clojure.core/partial but prepopulates last N arguments (first is passed in later)
* @param {...*} var_args
*/
clj_time.internal.fn.fpartial = (function() { 
var fpartial__delegate = function (f,args){return (function() { 
var G__7860__delegate = function (arg,more){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,args,more));
};
var G__7860 = function (arg,var_args){
var more = null;if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__7860__delegate.call(this,arg,more);};
G__7860.cljs$lang$maxFixedArity = 1;
G__7860.cljs$lang$applyTo = (function (arglist__7861){
var arg = cljs.core.first(arglist__7861);
var more = cljs.core.rest(arglist__7861);
return G__7860__delegate(arg,more);
});
G__7860.cljs$core$IFn$_invoke$arity$variadic = G__7860__delegate;
return G__7860;
})()
;
};
var fpartial = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fpartial__delegate.call(this,f,args);};
fpartial.cljs$lang$maxFixedArity = 1;
fpartial.cljs$lang$applyTo = (function (arglist__7862){
var f = cljs.core.first(arglist__7862);
var args = cljs.core.rest(arglist__7862);
return fpartial__delegate(f,args);
});
fpartial.cljs$core$IFn$_invoke$arity$variadic = fpartial__delegate;
return fpartial;
})()
;
