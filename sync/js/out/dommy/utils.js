// Compiled by ClojureScript 0.0-2075
goog.provide('dommy.utils');
goog.require('cljs.core');
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
dommy.utils.dissoc_in = (function dissoc_in(m,p__15511){var vec__15513 = p__15511;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15513,0,null);var ks = cljs.core.nthnext(vec__15513,1);if(cljs.core.truth_(m))
{var temp__4090__auto__ = (function (){var and__3279__auto__ = ks;if(cljs.core.truth_(and__3279__auto__))
{return dissoc_in((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)),ks);
} else
{return and__3279__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var res = temp__4090__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else
{var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);if(cljs.core.empty_QMARK_(res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
dommy.utils.__GT_Array = (function __GT_Array(array_like){return Array.prototype.slice.call(array_like);
});
