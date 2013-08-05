goog.provide('cemerick.cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
cemerick.cljs.test._STAR_report_counters_STAR_ = null;
cemerick.cljs.test._STAR_initial_report_counters_STAR_ = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:test",0,"\uFDD0:pass",0,"\uFDD0:fail",0,"\uFDD0:error",0], true);
cemerick.cljs.test._STAR_testing_vars_STAR_ = cljs.core.list.call(null);
cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.list.call(null);
cemerick.cljs.test._STAR_test_print_fn_STAR_ = null;
cemerick.cljs.test.registered_tests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_test_hooks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_fixtures = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.register_test_BANG_ = (function register_test_BANG_(ns,name){
return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_tests,cljs.core.update_in,cljs.core.PersistentVector.fromArray([ns], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),name);
});
cemerick.cljs.test.register_test_ns_hook_BANG_ = (function register_test_ns_hook_BANG_(ns,name){
return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_test_hooks,cljs.core.assoc,ns,name);
});
/**
* Returns a string representation of the current test.  Renders names
* in *testing-vars* as a list, then the source file and line of
* current assertion.
*/
cemerick.cljs.test.testing_vars_str = (function testing_vars_str(m){
var map__9331 = m;
var map__9331__$1 = ((cljs.core.seq_QMARK_.call(null,map__9331))?cljs.core.apply.call(null,cljs.core.hash_map,map__9331):map__9331);
var line = cljs.core.get.call(null,map__9331__$1,"\uFDD0:line");
var file = cljs.core.get.call(null,map__9331__$1,"\uFDD0:file");
return [cljs.core.str(cljs.core.pr_str.call(null,cljs.core.reverse.call(null,cemerick.cljs.test._STAR_testing_vars_STAR_))),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str(")")].join('');
});
/**
* Returns a string representation of the current test context. Joins
* strings in *testing-contexts* with spaces.
*/
cemerick.cljs.test.testing_contexts_str = (function testing_contexts_str(){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.reverse.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_)));
});
/**
* Increments the named counter in *report-counters*, a ref to a map.
* Does nothing if *report-counters* is nil.
*/
cemerick.cljs.test.inc_report_counter = (function inc_report_counter(name){
if(cljs.core.truth_(cemerick.cljs.test._STAR_report_counters_STAR_))
{return cljs.core.swap_BANG_.call(null,cemerick.cljs.test._STAR_report_counters_STAR_,cljs.core.update_in,cljs.core.PersistentVector.fromArray([name], true),cljs.core.fnil.call(null,cljs.core.inc,0));
} else
{return null;
}
});
/**
* Generic reporting function, may be overridden to plug in
* different report formats (e.g., TAP, JUnit).  Assertions such as
* 'is' call 'report' to indicate results.  The argument given to
* 'report' will be a map with a :type key.  See the documentation at
* the top of test_is.clj for more information on the types of
* arguments for 'report'.
*/
cemerick.cljs.test.report = (function (){var method_table__8354__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8355__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8358__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:hierarchy",cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn("report","\uFDD0:type","\uFDD0:default",hierarchy__8358__auto__,method_table__8354__auto__,prefer_table__8355__auto__,method_cache__8356__auto__,cached_hierarchy__8357__auto__));
})();
cemerick.cljs.test.file_and_line = (function file_and_line(error){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:file",error.fileName,"\uFDD0:line",error.lineNumber], true);
});
/**
* Add file and line information to a test result and call report.
* If you are writing a custom assert-expr method, call this function
* to pass test results to report.
*/
cemerick.cljs.test.do_report = (function do_report(m){
return cemerick.cljs.test.report.call(null,(function (){var G__9333 = (new cljs.core.Keyword("\uFDD0:type")).call(null,m);
if(cljs.core._EQ_.call(null,"\uFDD0:error",G__9333))
{return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,(new cljs.core.Keyword("\uFDD0:actual")).call(null,m)),m);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:fail",G__9333))
{return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,Error()),m);
} else
{if("\uFDD0:else")
{return m;
} else
{return null;
}
}
}
})());
});
cljs.core._add_method.call(null,cemerick.cljs.test.report,"\uFDD0:default",(function (m){
var _STAR_print_fn_STAR_9334 = cljs.core._STAR_print_fn_STAR_;
try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3943__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.prn.call(null,m);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9334;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,"\uFDD0:pass",(function (m){
var _STAR_print_fn_STAR_9336 = cljs.core._STAR_print_fn_STAR_;
try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3943__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cemerick.cljs.test.inc_report_counter.call(null,"\uFDD0:pass");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9336;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,"\uFDD0:fail",(function (m){
var _STAR_print_fn_STAR_9338 = cljs.core._STAR_print_fn_STAR_;
try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3943__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,"\uFDD0:fail");
cljs.core.println.call(null,"\nFAIL in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null));
} else
{}
var temp__4092__auto___9340 = (new cljs.core.Keyword("\uFDD0:message")).call(null,m);
if(cljs.core.truth_(temp__4092__auto___9340))
{var message_9341 = temp__4092__auto___9340;
cljs.core.println.call(null,message_9341);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,(new cljs.core.Keyword("\uFDD0:expected")).call(null,m)));
return cljs.core.println.call(null,"  actual:",cljs.core.pr_str.call(null,(new cljs.core.Keyword("\uFDD0:actual")).call(null,m)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9338;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,"\uFDD0:error",(function (m){
var _STAR_print_fn_STAR_9342 = cljs.core._STAR_print_fn_STAR_;
try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3943__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,"\uFDD0:error");
cljs.core.println.call(null,"\nERROR in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null));
} else
{}
var temp__4092__auto___9344 = (new cljs.core.Keyword("\uFDD0:message")).call(null,m);
if(cljs.core.truth_(temp__4092__auto___9344))
{var message_9345 = temp__4092__auto___9344;
cljs.core.println.call(null,message_9345);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,(new cljs.core.Keyword("\uFDD0:expected")).call(null,m)));
cljs.core.print.call(null,"  actual: ");
var actual = (new cljs.core.Keyword("\uFDD0:actual")).call(null,m);
if((actual instanceof Error))
{return cljs.core.println.call(null,actual.stack);
} else
{return cljs.core.prn.call(null,actual);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9342;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,"\uFDD0:summary",(function (m){
var _STAR_print_fn_STAR_9346 = cljs.core._STAR_print_fn_STAR_;
try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3943__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cljs.core.println.call(null,"\nRan",(new cljs.core.Keyword("\uFDD0:test")).call(null,m),"tests containing",(((new cljs.core.Keyword("\uFDD0:pass")).call(null,m) + (new cljs.core.Keyword("\uFDD0:fail")).call(null,m)) + (new cljs.core.Keyword("\uFDD0:error")).call(null,m)),"assertions.");
return cljs.core.println.call(null,(new cljs.core.Keyword("\uFDD0:fail")).call(null,m),"failures,",(new cljs.core.Keyword("\uFDD0:error")).call(null,m),"errors.");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9346;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,"\uFDD0:begin-test-ns",(function (m){
var _STAR_print_fn_STAR_9348 = cljs.core._STAR_print_fn_STAR_;
try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3943__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.println.call(null,"\nTesting",(new cljs.core.Keyword("\uFDD0:ns")).call(null,m));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9348;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,"\uFDD0:end-test-ns",(function (m){
return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,"\uFDD0:begin-test-var",(function (m){
return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,"\uFDD0:end-test-var",(function (m){
return null;
}));
/**
* Wrap test runs in a fixture function to perform setup and
* teardown. Using a fixture-type of :each wraps every test
* individually, while :once wraps the whole run in a single function.
* @param {...*} var_args
*/
cemerick.cljs.test.register_fixtures_BANG_ = (function() { 
var register_fixtures_BANG___delegate = function (ns_sym,fixture_type,fixture_fns){
return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_fixtures,cljs.core.update_in,cljs.core.PersistentVector.fromArray([ns_sym,fixture_type], true),cljs.core.constantly.call(null,fixture_fns));
};
var register_fixtures_BANG_ = function (ns_sym,fixture_type,var_args){
var fixture_fns = null;
if (arguments.length > 2) {
  fixture_fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return register_fixtures_BANG___delegate.call(this, ns_sym, fixture_type, fixture_fns);
};
register_fixtures_BANG_.cljs$lang$maxFixedArity = 2;
register_fixtures_BANG_.cljs$lang$applyTo = (function (arglist__9350){
var ns_sym = cljs.core.first(arglist__9350);
arglist__9350 = cljs.core.next(arglist__9350);
var fixture_type = cljs.core.first(arglist__9350);
var fixture_fns = cljs.core.rest(arglist__9350);
return register_fixtures_BANG___delegate(ns_sym, fixture_type, fixture_fns);
});
register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic = register_fixtures_BANG___delegate;
return register_fixtures_BANG_;
})()
;
/**
* The default, empty, fixture function.  Just calls its argument.
*/
cemerick.cljs.test.default_fixture = (function default_fixture(f){
return f.call(null);
});
/**
* Composes two fixture functions, creating a new fixture function
* that combines their behavior.
*/
cemerick.cljs.test.compose_fixtures = (function compose_fixtures(f1,f2){
return (function (g){
return f1.call(null,(function (){
return f2.call(null,g);
}));
});
});
/**
* Composes a collection of fixtures, in order.  Always returns a valid
* fixture function, even if the collection is empty.
*/
cemerick.cljs.test.join_fixtures = (function join_fixtures(fixtures){
return cljs.core.reduce.call(null,cemerick.cljs.test.compose_fixtures,cemerick.cljs.test.default_fixture,fixtures);
});
/**
* If v has a function in its :test metadata, calls that function,
* with *testing-vars* bound to (conj *testing-vars* v).
*/
cemerick.cljs.test.test_var = (function test_var(v){
if(cljs.core.fn_QMARK_.call(null,v))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("test-var must be passed the function to be tested (not a symbol naming it)"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"v","v",-1640531409,null))))].join('')));
}
var temp__4092__auto__ = (new cljs.core.Keyword("\uFDD0:test")).call(null,cljs.core.meta.call(null,v));
if(cljs.core.truth_(temp__4092__auto__))
{var t = temp__4092__auto__;
var _STAR_testing_vars_STAR_9354 = cemerick.cljs.test._STAR_testing_vars_STAR_;
try{cemerick.cljs.test._STAR_testing_vars_STAR_ = cljs.core.conj.call(null,cemerick.cljs.test._STAR_testing_vars_STAR_,(function (){var or__3943__auto__ = (new cljs.core.Keyword("\uFDD0:name")).call(null,cljs.core.meta.call(null,v));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return v;
}
})());
cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","\uFDD0:begin-test-var","\uFDD0:var",v], true));
cemerick.cljs.test.inc_report_counter.call(null,"\uFDD0:test");
try{t.call(null);
}catch (e9356){if((e9356 instanceof Error))
{var e_9357 = e9356;
cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","\uFDD0:error","\uFDD0:message","Uncaught exception, not in assertion.","\uFDD0:expected",null,"\uFDD0:actual",e_9357], true));
} else
{if("\uFDD0:else")
{throw e9356;
} else
{}
}
}return cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","\uFDD0:end-test-var","\uFDD0:var",v], true));
}finally {cemerick.cljs.test._STAR_testing_vars_STAR_ = _STAR_testing_vars_STAR_9354;
}} else
{return null;
}
});
/**
* Calls test-var on every var interned in the namespace, with fixtures.
*/
cemerick.cljs.test.test_all_vars = (function test_all_vars(ns_sym){
var once_fixture_fn = cemerick.cljs.test.join_fixtures.call(null,(new cljs.core.Keyword("\uFDD0:once")).call(null,ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));
var each_fixture_fn = cemerick.cljs.test.join_fixtures.call(null,(new cljs.core.Keyword("\uFDD0:each")).call(null,ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));
return once_fixture_fn.call(null,(function (){
var seq__9362 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests),ns_sym));
var chunk__9363 = null;
var count__9364 = 0;
var i__9365 = 0;
while(true){
if((i__9365 < count__9364))
{var v = cljs.core._nth.call(null,chunk__9363,i__9365);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:test")).call(null,cljs.core.meta.call(null,v))))
{each_fixture_fn.call(null,((function (seq__9362,chunk__9363,count__9364,i__9365,v){
return (function (){
return cemerick.cljs.test.test_var.call(null,v);
});})(seq__9362,chunk__9363,count__9364,i__9365,v))
);
} else
{}
{
var G__9366 = seq__9362;
var G__9367 = chunk__9363;
var G__9368 = count__9364;
var G__9369 = (i__9365 + 1);
seq__9362 = G__9366;
chunk__9363 = G__9367;
count__9364 = G__9368;
i__9365 = G__9369;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9362);
if(temp__4092__auto__)
{var seq__9362__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9362__$1))
{var c__8297__auto__ = cljs.core.chunk_first.call(null,seq__9362__$1);
{
var G__9370 = cljs.core.chunk_rest.call(null,seq__9362__$1);
var G__9371 = c__8297__auto__;
var G__9372 = cljs.core.count.call(null,c__8297__auto__);
var G__9373 = 0;
seq__9362 = G__9370;
chunk__9363 = G__9371;
count__9364 = G__9372;
i__9365 = G__9373;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__9362__$1);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:test")).call(null,cljs.core.meta.call(null,v))))
{each_fixture_fn.call(null,((function (seq__9362,chunk__9363,count__9364,i__9365,v,seq__9362__$1,temp__4092__auto__){
return (function (){
return cemerick.cljs.test.test_var.call(null,v);
});})(seq__9362,chunk__9363,count__9364,i__9365,v,seq__9362__$1,temp__4092__auto__))
);
} else
{}
{
var G__9374 = cljs.core.next.call(null,seq__9362__$1);
var G__9375 = null;
var G__9376 = 0;
var G__9377 = 0;
seq__9362 = G__9374;
chunk__9363 = G__9375;
count__9364 = G__9376;
i__9365 = G__9377;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
/**
* If the namespace defines a function named test-ns-hook, calls that.
* Otherwise, calls test-all-vars on the namespace.  'ns' is a
* namespace object or a symbol.
* 
* Internally binds *report-counters* to an atom initialized to
* *inital-report-counters*.  Returns the final, dereferenced state of
* *report-counters*.
*/
cemerick.cljs.test.test_ns = (function test_ns(ns_sym){
var _STAR_report_counters_STAR_9380 = cemerick.cljs.test._STAR_report_counters_STAR_;
try{cemerick.cljs.test._STAR_report_counters_STAR_ = cljs.core.atom.call(null,cemerick.cljs.test._STAR_initial_report_counters_STAR_);
cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","\uFDD0:begin-test-ns","\uFDD0:ns",ns_sym], true));
var temp__4090__auto___9382 = cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_test_hooks),ns_sym);
if(cljs.core.truth_(temp__4090__auto___9382))
{var test_hook_9383 = temp__4090__auto___9382;
test_hook_9383.call(null);
} else
{cemerick.cljs.test.test_all_vars.call(null,ns_sym);
}
cemerick.cljs.test.do_report.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:type","\uFDD0:end-test-ns","\uFDD0:ns",ns_sym], true));
return cljs.core.deref.call(null,cemerick.cljs.test._STAR_report_counters_STAR_);
}finally {cemerick.cljs.test._STAR_report_counters_STAR_ = _STAR_report_counters_STAR_9380;
}});
/**
* Runs all tests in the given namespaces; prints results.
* Defaults to current namespace if none given.  Returns a map
* summarizing test results.
* @param {...*} var_args
*/
cemerick.cljs.test.run_tests_STAR_ = (function() { 
var run_tests_STAR___delegate = function (namespaces){
var summary = cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.call(null,cemerick.cljs.test.test_ns,namespaces)),"\uFDD0:type","\uFDD0:summary");
cemerick.cljs.test.do_report.call(null,summary);
return summary;
};
var run_tests_STAR_ = function (var_args){
var namespaces = null;
if (arguments.length > 0) {
  namespaces = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return run_tests_STAR___delegate.call(this, namespaces);
};
run_tests_STAR_.cljs$lang$maxFixedArity = 0;
run_tests_STAR_.cljs$lang$applyTo = (function (arglist__9384){
var namespaces = cljs.core.seq(arglist__9384);
return run_tests_STAR___delegate(namespaces);
});
run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic = run_tests_STAR___delegate;
return run_tests_STAR_;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_tests_STAR_', cemerick.cljs.test.run_tests_STAR_);
/**
* Runs all tests in all namespaces; prints results.
* Optional argument is a regular expression; only namespaces with
* names matching the regular expression (with re-matches) will be
* tested.
*/
cemerick.cljs.test.run_all_tests = (function() {
var run_all_tests = null;
var run_all_tests__0 = (function (){
return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests)));
});
var run_all_tests__1 = (function (re){
return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.filter.call(null,(function (p1__9385_SHARP_){
return cljs.core.re_matches.call(null,re,cljs.core.name.call(null,p1__9385_SHARP_));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests))));
});
run_all_tests = function(re){
switch(arguments.length){
case 0:
return run_all_tests__0.call(this);
case 1:
return run_all_tests__1.call(this,re);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
run_all_tests.cljs$core$IFn$_invoke$arity$0 = run_all_tests__0;
run_all_tests.cljs$core$IFn$_invoke$arity$1 = run_all_tests__1;
return run_all_tests;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_all_tests', cemerick.cljs.test.run_all_tests);
/**
* Returns true if the given test summary indicates all tests
* were successful, false otherwise.
*/
cemerick.cljs.test.successful_QMARK_ = (function successful_QMARK_(summary){
var and__3941__auto__ = ((new cljs.core.Keyword("\uFDD0:fail")).call(null,summary,0) === 0);
if(and__3941__auto__)
{return ((new cljs.core.Keyword("\uFDD0:error")).call(null,summary,0) === 0);
} else
{return and__3941__auto__;
}
});
goog.exportSymbol('cemerick.cljs.test.successful_QMARK_', cemerick.cljs.test.successful_QMARK_);
cemerick.cljs.test.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('cemerick.cljs.test.set_print_fn_BANG_', cemerick.cljs.test.set_print_fn_BANG_);
