// Compiled by ClojureScript 0.0-2138
goog.provide('shodan.console');
goog.require('cljs.core');
goog.require('shodan.util');
goog.require('shodan.util');
/**
* Display messages to the console.
* @param {...*} var_args
*/
shodan.console.log = (function() { 
var log__delegate = function (args){return shodan.util.js_apply.call(null,console.log,console,args);
};
var log = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6992){
var args = cljs.core.seq(arglist__6992);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
if(cljs.core.truth_(shodan.util.node_js_QMARK_))
{} else
{/**
* Like `log` but marks the output as debugging information.
* @param {...*} var_args
*/
shodan.console.debug = (function() { 
var debug__delegate = function (args){return shodan.util.js_apply.call(null,console.debug,console,args);
};
var debug = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return debug__delegate.call(this,args);};
debug.cljs$lang$maxFixedArity = 0;
debug.cljs$lang$applyTo = (function (arglist__6993){
var args = cljs.core.seq(arglist__6993);
return debug__delegate(args);
});
debug.cljs$core$IFn$_invoke$arity$variadic = debug__delegate;
return debug;
})()
;
}
/**
* Like `log` but marks the output as an informative message.
* @param {...*} var_args
*/
shodan.console.info = (function() { 
var info__delegate = function (args){return shodan.util.js_apply.call(null,console.info,console,args);
};
var info = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return info__delegate.call(this,args);};
info.cljs$lang$maxFixedArity = 0;
info.cljs$lang$applyTo = (function (arglist__6994){
var args = cljs.core.seq(arglist__6994);
return info__delegate(args);
});
info.cljs$core$IFn$_invoke$arity$variadic = info__delegate;
return info;
})()
;
/**
* Like `log` but marks the output as a warning.
* @param {...*} var_args
*/
shodan.console.warn = (function() { 
var warn__delegate = function (args){return shodan.util.js_apply.call(null,console.warn,console,args);
};
var warn = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return warn__delegate.call(this,args);};
warn.cljs$lang$maxFixedArity = 0;
warn.cljs$lang$applyTo = (function (arglist__6995){
var args = cljs.core.seq(arglist__6995);
return warn__delegate(args);
});
warn.cljs$core$IFn$_invoke$arity$variadic = warn__delegate;
return warn;
})()
;
/**
* Like `log` but marks the output as an error.
* @param {...*} var_args
*/
shodan.console.error = (function() { 
var error__delegate = function (args){return shodan.util.js_apply.call(null,console.error,console,args);
};
var error = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return error__delegate.call(this,args);};
error.cljs$lang$maxFixedArity = 0;
error.cljs$lang$applyTo = (function (arglist__6996){
var args = cljs.core.seq(arglist__6996);
return error__delegate(args);
});
error.cljs$core$IFn$_invoke$arity$variadic = error__delegate;
return error;
})()
;
if(cljs.core.truth_(shodan.util.node_js_QMARK_))
{} else
{/**
* @param {...*} var_args
*/
shodan.console.group = (function() { 
var group__delegate = function (args){return shodan.util.js_apply.call(null,console.group,console,args);
};
var group = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return group__delegate.call(this,args);};
group.cljs$lang$maxFixedArity = 0;
group.cljs$lang$applyTo = (function (arglist__6997){
var args = cljs.core.seq(arglist__6997);
return group__delegate(args);
});
group.cljs$core$IFn$_invoke$arity$variadic = group__delegate;
return group;
})()
;
/**
* @param {...*} var_args
*/
shodan.console.group_collapsed = (function() { 
var group_collapsed__delegate = function (args){return shodan.util.js_apply.call(null,console.groupCollapsed,console,args);
};
var group_collapsed = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return group_collapsed__delegate.call(this,args);};
group_collapsed.cljs$lang$maxFixedArity = 0;
group_collapsed.cljs$lang$applyTo = (function (arglist__6998){
var args = cljs.core.seq(arglist__6998);
return group_collapsed__delegate(args);
});
group_collapsed.cljs$core$IFn$_invoke$arity$variadic = group_collapsed__delegate;
return group_collapsed;
})()
;
shodan.console.group_end = (function group_end(){return console.groupEnd;
});
}
/**
* @param {...*} var_args
*/
shodan.console.assert = (function() { 
var assert__delegate = function (args){return shodan.util.js_apply.call(null,console.assert,console,args);
};
var assert = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return assert__delegate.call(this,args);};
assert.cljs$lang$maxFixedArity = 0;
assert.cljs$lang$applyTo = (function (arglist__6999){
var args = cljs.core.seq(arglist__6999);
return assert__delegate(args);
});
assert.cljs$core$IFn$_invoke$arity$variadic = assert__delegate;
return assert;
})()
;
shodan.console.dir = (function dir(obj){return console.dir(obj);
});
if(cljs.core.truth_(shodan.util.node_js_QMARK_))
{} else
{shodan.console.dirxml = (function dirxml(node){return console.dirxml(node);
});
}
shodan.console.trace = (function trace(){return console.trace();
});
if(cljs.core.truth_(shodan.util.node_js_QMARK_))
{} else
{shodan.console.profile = (function profile(title){return console.profile(title);
});
shodan.console.profile_end = (function profile_end(){return console.profileEnd();
});
}
shodan.console.time = (function time(id){return console.time(id);
});
shodan.console.time_end = (function time_end(id){return console.timeEnd(id);
});
