// Compiled by ClojureScript 0.0-2138
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri.QueryData');
goog.require('goog.events');
goog.require('goog.net.XhrManager');
goog.require('cljs.reader');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.Uri.QueryData');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.structs');
goog.require('cljs.reader');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.Uri');
ajax.core.AjaxImpl = (function (){var obj10469 = {};return obj10469;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__3396__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__10470){var map__10471 = p__10470;var map__10471__$1 = ((cljs.core.seq_QMARK_(map__10471))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10471):map__10471);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10471__$1,cljs.core.constant$keyword$111);var this$__$1 = this;var G__10472 = this$__$1;goog.events.listen(G__10472,goog.net.EventType.COMPLETE,handler);
G__10472.send(uri,method,body,headers,timeout);
return G__10472;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__10473){var map__10474 = p__10473;var map__10474__$1 = ((cljs.core.seq_QMARK_(map__10474))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10474):map__10474);var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10474__$1,cljs.core.constant$keyword$112);var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10474__$1,cljs.core.constant$keyword$113);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10474__$1,cljs.core.constant$keyword$111);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10474__$1,cljs.core.constant$keyword$114);var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,201,202,204,205,206], null));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string(xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$115,ajax.core.read_edn,cljs.core.constant$keyword$116,"EDN"], null);
});
ajax.core.edn_request_format = (function edn_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$117,cljs.core.pr_str,cljs.core.constant$keyword$118,"application/edn"], null);
});
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js(params)))).toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$117,ajax.core.params_to_str,cljs.core.constant$keyword$118,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function raw_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$115,ajax.core.read_text,cljs.core.constant$keyword$116,"raw text"], null);
});
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function json_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$117,ajax.core.write_json,cljs.core.constant$keyword$118,"application/json"], null);
});
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should use this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function json_response_format(p__10475){var map__10477 = p__10475;var map__10477__$1 = ((cljs.core.seq_QMARK_(map__10477))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10477):map__10477);var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10477__$1,cljs.core.constant$keyword$119);var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10477__$1,cljs.core.constant$keyword$120);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$115,(function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$106,keywords_QMARK_], 0));
}),cljs.core.constant$keyword$116,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = xhrio.getResponseHeader("Content-Type");var format = (cljs.core.truth_((function (){var and__3396__auto__ = ct;if(cljs.core.truth_(and__3396__auto__))
{return (ct.indexOf("json") >= 0);
} else
{return and__3396__auto__;
}
})())?ajax.core.json_response_format(cljs.core.PersistentArrayMap.EMPTY):ajax.core.edn_response_format());return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(format,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$116], null),(function (p1__10478_SHARP_){return [cljs.core.str(p1__10478_SHARP_),cljs.core.str(" (default)")].join('');
}));
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(format,cljs.core.constant$keyword$117);
});
ajax.core.codec = (function codec(request_format,p__10479){var map__10481 = p__10479;var map__10481__$1 = ((cljs.core.seq_QMARK_(map__10481))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10481):map__10481);var response_format = map__10481__$1;var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10481__$1,cljs.core.constant$keyword$116);var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10481__$1,cljs.core.constant$keyword$115);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request_format,cljs.core.constant$keyword$115,read,cljs.core.array_seq([cljs.core.constant$keyword$116,description], 0));
});
ajax.core.get_format = (function get_format(format){if(cljs.core.map_QMARK_(format))
{return format;
} else
{if(cljs.core.ifn_QMARK_(format))
{return ajax.core.codec(ajax.core.url_request_format(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$115,format,cljs.core.constant$keyword$116,"custom"], null));
} else
{if(cljs.core.constant$keyword$100)
{throw (new Error([cljs.core.str("unrecognized format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__10482,xhrio){var map__10484 = p__10482;var map__10484__$1 = ((cljs.core.seq_QMARK_(map__10484))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10484):map__10484);var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10484__$1,cljs.core.constant$keyword$116);var response = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$121,status,cljs.core.constant$keyword$122,null], null);var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$123,status_text,cljs.core.array_seq([cljs.core.constant$keyword$124,true,cljs.core.constant$keyword$125,xhrio.getResponseText()], 0));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return parse_error;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$123,xhrio.getStatusText(),cljs.core.array_seq([cljs.core.constant$keyword$126,parse_error], 0));
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){try{var xhrio = response.target;var status = xhrio.getStatus();var format__$1 = (cljs.core.truth_(cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(format))?format:(get_default_format.cljs$core$IFn$_invoke$arity$1 ? get_default_format.cljs$core$IFn$_invoke$arity$1(xhrio) : get_default_format.call(null,xhrio)));var parse = cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(format__$1);try{var response__$1 = (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(xhrio) : parse.call(null,xhrio));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$121,status,cljs.core.constant$keyword$123,xhrio.getStatusText(),cljs.core.constant$keyword$122,response__$1], null)], null);
}
}catch (e10488){if((e10488 instanceof Object))
{var e = e10488;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else
{if(cljs.core.constant$keyword$100)
{throw e10488;
} else
{return null;
}
}
}}catch (e10487){if((e10487 instanceof Object))
{var e = e10487;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$121,0,cljs.core.constant$keyword$123,e.message,cljs.core.constant$keyword$122,null], null)], null);
} else
{if(cljs.core.constant$keyword$100)
{throw e10487;
} else
{return null;
}
}
}});
ajax.core.no_format = (function no_format(xhrio){throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){if(cljs.core.truth_(params))
{return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str(params))].join('');
} else
{return uri;
}
});
ajax.core.process_inputs = (function process_inputs(uri,method,p__10489,p__10490){var map__10494 = p__10489;var map__10494__$1 = ((cljs.core.seq_QMARK_(map__10494))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10494):map__10494);var format = map__10494__$1;var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10494__$1,cljs.core.constant$keyword$118);var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10494__$1,cljs.core.constant$keyword$117);var map__10495 = p__10490;var map__10495__$1 = ((cljs.core.seq_QMARK_(map__10495))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10495):map__10495);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10495__$1,cljs.core.constant$keyword$127);var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10495__$1,cljs.core.constant$keyword$128);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers], null);
} else
{var map__10496 = format;var map__10496__$1 = ((cljs.core.seq_QMARK_(map__10496))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10496):map__10496);var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10496__$1,cljs.core.constant$keyword$118);var write__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10496__$1,cljs.core.constant$keyword$117);var body = (write__$1.cljs$core$IFn$_invoke$arity$1 ? write__$1.cljs$core$IFn$_invoke$arity$1(params) : write__$1.call(null,params));var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3408__auto__ = headers;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2], 0));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.normalize_method = (function normalize_method(method){if((method instanceof cljs.core.Keyword))
{return clojure.string.upper_case(cljs.core.name(method));
} else
{return method;
}
});
ajax.core.base_handler = (function base_handler(format,p__10497){var map__10499 = p__10497;var map__10499__$1 = ((cljs.core.seq_QMARK_(map__10499))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10499):map__10499);var get_default_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10499__$1,cljs.core.constant$keyword$129);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10499__$1,cljs.core.constant$keyword$130);return (function (xhrio){return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(ajax.core.interpret_response(format,xhrio,(function (){var or__3408__auto__ = get_default_format;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return ajax.core.no_format;
}
})())) : handler.call(null,ajax.core.interpret_response(format,xhrio,(function (){var or__3408__auto__ = get_default_format;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return ajax.core.no_format;
}
})())));
});
});
ajax.core.ajax_request = (function() {
var ajax_request = null;
var ajax_request__3 = (function (uri,method,opts){return ajax_request.cljs$core$IFn$_invoke$arity$4(uri,method,opts,(new goog.net.XhrIo()));
});
var ajax_request__4 = (function (uri,method,p__10500,js_ajax){var map__10503 = p__10500;var map__10503__$1 = ((cljs.core.seq_QMARK_(map__10503))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10503):map__10503);var opts = map__10503__$1;var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10503__$1,cljs.core.constant$keyword$131);var format__$1 = ajax.core.get_format(format);var method__$1 = ajax.core.normalize_method(method);var vec__10504 = ajax.core.process_inputs(uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10504,0,null);var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10504,1,null);var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10504,2,null);var handler = ajax.core.base_handler(format__$1,opts);return ajax.core._js_ajax_request(js_ajax,uri__$1,method__$1,body,cljs.core.clj__GT_js(headers),handler,opts);
});
ajax_request = function(uri,method,p__10500,js_ajax){
switch(arguments.length){
case 3:
return ajax_request__3.call(this,uri,method,p__10500);
case 4:
return ajax_request__4.call(this,uri,method,p__10500,js_ajax);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax_request.cljs$core$IFn$_invoke$arity$3 = ajax_request__3;
ajax_request.cljs$core$IFn$_invoke$arity$4 = ajax_request__4;
return ajax_request;
})()
;
ajax.core.json_format = (function json_format(format_params){return ajax.core.codec(ajax.core.json_request_format(),ajax.core.json_response_format(format_params));
});
ajax.core.edn_format = (function edn_format(){return ajax.core.codec(ajax.core.edn_request_format(),ajax.core.edn_response_format());
});
ajax.core.raw_format = (function raw_format(){return ajax.core.codec(ajax.core.url_request_format(),ajax.core.raw_response_format());
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__10506 = format;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$132,G__10506))
{return ajax.core.url_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$133,G__10506))
{return ajax.core.url_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$134,G__10506))
{return ajax.core.edn_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$135,G__10506))
{return ajax.core.json_request_format();
} else
{if(cljs.core.constant$keyword$100)
{throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){var G__10508 = format;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$133,G__10508))
{return ajax.core.raw_response_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$134,G__10508))
{return ajax.core.edn_response_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$135,G__10508))
{return ajax.core.json_response_format(format_params);
} else
{if(cljs.core.constant$keyword$100)
{return null;
} else
{return null;
}
}
}
}
});
ajax.core.transform_handler = (function transform_handler(p__10509){var map__10514 = p__10509;var map__10514__$1 = ((cljs.core.seq_QMARK_(map__10514))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10514):map__10514);var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10514__$1,cljs.core.constant$keyword$136);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10514__$1,cljs.core.constant$keyword$130);return (function easy_handler(p__10515){var vec__10517 = p__10515;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10517,0,null);var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10517,1,null);var temp__4090__auto__ = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4090__auto__))
{var h = temp__4090__auto__;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(result) : h.call(null,result));
} else
{return null;
}
});
});
ajax.core.transform_format = (function transform_format(p__10518){var map__10520 = p__10518;var map__10520__$1 = ((cljs.core.seq_QMARK_(map__10520))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10520):map__10520);var opts = map__10520__$1;var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10520__$1,cljs.core.constant$keyword$137);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10520__$1,cljs.core.constant$keyword$131);var rf = ajax.core.keyword_response_format(response_format,opts);if((format == null))
{return ajax.core.codec(ajax.core.edn_request_format(),rf);
} else
{if((format instanceof cljs.core.Keyword))
{return ajax.core.codec(ajax.core.keyword_request_format(format,opts),rf);
} else
{if(cljs.core.constant$keyword$100)
{return format;
} else
{return null;
}
}
}
});
ajax.core.transform_opts = (function transform_opts(opts){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$130,ajax.core.transform_handler(opts),cljs.core.array_seq([cljs.core.constant$keyword$131,ajax.core.transform_format(opts),cljs.core.constant$keyword$129,ajax.core.get_default_format], 0));
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the deserialized
* response
* :error-handler - the handler function for errors, should accept a map
* with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,p__10521){var vec__10523 = p__10521;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10523,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"GET",ajax.core.transform_opts(opts));
};
var GET = function (uri,var_args){
var p__10521 = null;if (arguments.length > 1) {
  p__10521 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__10521);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__10524){
var uri = cljs.core.first(arglist__10524);
var p__10521 = cljs.core.rest(arglist__10524);
return GET__delegate(uri,p__10521);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the deserialized
* response
* :error-handler - the handler function for errors, should accept a map
* with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,p__10525){var vec__10527 = p__10525;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10527,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"POST",ajax.core.transform_opts(opts));
};
var POST = function (uri,var_args){
var p__10525 = null;if (arguments.length > 1) {
  p__10525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__10525);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__10528){
var uri = cljs.core.first(arglist__10528);
var p__10525 = cljs.core.rest(arglist__10528);
return POST__delegate(uri,p__10525);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
