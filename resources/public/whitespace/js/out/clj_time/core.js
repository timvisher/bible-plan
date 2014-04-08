// Compiled by ClojureScript 0.0-2202
goog.provide('clj_time.core');
goog.require('cljs.core');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.DateTime');
goog.require('goog.date.Interval');
goog.require('goog.date.Date');
clj_time.core.DateTimeProtocol = (function (){var obj6018 = {};return obj6018;
})();
clj_time.core.year = (function year(this$){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$year$arity$1;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$year$arity$1(this$);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.year[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.year["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
})().call(null,this$);
}
});
clj_time.core.month = (function month(this$){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$month$arity$1;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$month$arity$1(this$);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.month[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.month["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
})().call(null,this$);
}
});
clj_time.core.day = (function day(this$){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$day$arity$1;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$day$arity$1(this$);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.day[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.day["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
})().call(null,this$);
}
});
clj_time.core.day_of_week = (function day_of_week(this$){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$day_of_week$arity$1;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.day_of_week[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.day_of_week["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
})().call(null,this$);
}
});
clj_time.core.hour = (function hour(this$){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$hour$arity$1;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$hour$arity$1(this$);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.hour[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.hour["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
})().call(null,this$);
}
});
clj_time.core.minute = (function minute(this$){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$minute$arity$1;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$minute$arity$1(this$);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.minute[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.minute["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
})().call(null,this$);
}
});
clj_time.core.sec = (function sec(this$){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$sec$arity$1;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$sec$arity$1(this$);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.sec[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.sec["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
})().call(null,this$);
}
});
clj_time.core.second = (function second(this$){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$second$arity$1;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$second$arity$1(this$);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.second[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.second["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
})().call(null,this$);
}
});
clj_time.core.milli = (function milli(this$){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$milli$arity$1;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$milli$arity$1(this$);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.milli[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.milli["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
})().call(null,this$);
}
});
clj_time.core.after_QMARK_ = (function after_QMARK_(this$,that){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$after_QMARK_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.after_QMARK_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.after_QMARK_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
})().call(null,this$,that);
}
});
clj_time.core.before_QMARK_ = (function before_QMARK_(this$,that){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$before_QMARK_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.before_QMARK_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.before_QMARK_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
})().call(null,this$,that);
}
});
clj_time.core.plus_ = (function plus_(this$,period){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$plus_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.plus_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.plus_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
})().call(null,this$,period);
}
});
clj_time.core.minus_ = (function minus_(this$,period){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.clj_time$core$DateTimeProtocol$minus_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return this$.clj_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (clj_time.core.minus_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (clj_time.core.minus_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
})().call(null,this$,period);
}
});
goog.date.Date.prototype.clj_time$core$DateTimeProtocol$ = true;
goog.date.Date.prototype.clj_time$core$DateTimeProtocol$year$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getFullYear();
});
goog.date.Date.prototype.clj_time$core$DateTimeProtocol$month$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMonth();
});
goog.date.Date.prototype.clj_time$core$DateTimeProtocol$day$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDate();
});
goog.date.Date.prototype.clj_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDay();
});
goog.date.Date.prototype.clj_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (0 < goog.date.Date.compare(this$__$1,that));
});
goog.date.Date.prototype.clj_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (0 > goog.date.Date.compare(this$__$1,that));
});
goog.date.Date.prototype.clj_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,interval){var this$__$1 = this;var G__6019 = this$__$1.clone();G__6019.add(interval);
return G__6019;
});
goog.date.Date.prototype.clj_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,interval){var this$__$1 = this;var G__6020 = this$__$1.clone();G__6020.add(interval.getInverse());
return G__6020;
});
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$ = true;
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$year$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getFullYear();
});
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$month$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMonth();
});
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$day$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDate();
});
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDay();
});
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getHours();
});
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMinutes();
});
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$second$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getSeconds();
});
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMilliseconds();
});
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (0 < goog.date.Date.compare(this$__$1,that));
});
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (0 > goog.date.Date.compare(this$__$1,that));
});
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,interval){var this$__$1 = this;var G__6021 = this$__$1.clone();G__6021.add(interval);
return G__6021;
});
goog.date.DateTime.prototype.clj_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,interval){var this$__$1 = this;var G__6022 = this$__$1.clone();G__6022.add(interval.getInverse());
return G__6022;
});
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$ = true;
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$year$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getFullYear();
});
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$month$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMonth();
});
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$day$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDate();
});
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDay();
});
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getHours();
});
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMinutes();
});
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$second$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getSeconds();
});
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMilliseconds();
});
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (0 < goog.date.Date.compare(this$__$1,that));
});
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (0 > goog.date.Date.compare(this$__$1,that));
});
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,interval){var this$__$1 = this;var G__6023 = this$__$1.clone();G__6023.add(interval);
return G__6023;
});
goog.date.UtcDateTime.prototype.clj_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,interval){var this$__$1 = this;var G__6024 = this$__$1.clone();G__6024.add(interval.getInverse());
return G__6024;
});
clj_time.core.now = (function now(){return (new goog.date.DateTime());
});
/**
* Returns a new date/time corresponding to the given date/time moved forwards by
* the given Period(s).
* @param {...*} var_args
*/
clj_time.core.plus = (function() {
var plus = null;
var plus__2 = (function (dt,p){return clj_time.core.plus_.call(null,dt,p);
});
var plus__3 = (function() { 
var G__6025__delegate = function (dt,p,ps){return cljs.core.reduce.call(null,clj_time.core.plus_,clj_time.core.plus_.call(null,dt,p),ps);
};
var G__6025 = function (dt,p,var_args){
var ps = null;if (arguments.length > 2) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6025__delegate.call(this,dt,p,ps);};
G__6025.cljs$lang$maxFixedArity = 2;
G__6025.cljs$lang$applyTo = (function (arglist__6026){
var dt = cljs.core.first(arglist__6026);
arglist__6026 = cljs.core.next(arglist__6026);
var p = cljs.core.first(arglist__6026);
var ps = cljs.core.rest(arglist__6026);
return G__6025__delegate(dt,p,ps);
});
G__6025.cljs$core$IFn$_invoke$arity$variadic = G__6025__delegate;
return G__6025;
})()
;
plus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return plus__2.call(this,dt,p);
default:
return plus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plus.cljs$lang$maxFixedArity = 2;
plus.cljs$lang$applyTo = plus__3.cljs$lang$applyTo;
plus.cljs$core$IFn$_invoke$arity$2 = plus__2;
plus.cljs$core$IFn$_invoke$arity$variadic = plus__3.cljs$core$IFn$_invoke$arity$variadic;
return plus;
})()
;
clj_time.core.years = (function years(n){return (new goog.date.Interval(n));
});
clj_time.core.days = (function days(n){return (new goog.date.Interval(0,0,n));
});
