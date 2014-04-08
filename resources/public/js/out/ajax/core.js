// Compiled by ClojureScript 0.0-2202
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
ajax.core.AjaxImpl = (function (){var obj9620 = {};return obj9620;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__3469__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__9621){var map__9622 = p__9621;var map__9622__$1 = ((cljs.core.seq_QMARK_(map__9622))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9622):map__9622);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9622__$1,cljs.core.constant$keyword$116);var this$__$1 = this;var G__9623 = this$__$1;goog.events.listen(G__9623,goog.net.EventType.COMPLETE,handler);
G__9623.send(uri,method,body,headers,timeout);
return G__9623;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__9624){var map__9625 = p__9624;var map__9625__$1 = ((cljs.core.seq_QMARK_(map__9625))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9625):map__9625);var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9625__$1,cljs.core.constant$keyword$117);var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9625__$1,cljs.core.constant$keyword$118);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9625__$1,cljs.core.constant$keyword$116);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9625__$1,cljs.core.constant$keyword$119);var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,201,202,204,205,206], null));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string(xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$120,ajax.core.read_edn,cljs.core.constant$keyword$121,"EDN"], null);
});
ajax.core.edn_request_format = (function edn_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$122,cljs.core.pr_str,cljs.core.constant$keyword$123,"application/edn"], null);
});
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js(params)))).toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$122,ajax.core.params_to_str,cljs.core.constant$keyword$123,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function raw_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$120,ajax.core.read_text,cljs.core.constant$keyword$121,"raw text"], null);
});
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function json_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$122,ajax.core.write_json,cljs.core.constant$keyword$123,"application/json"], null);
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
ajax.core.json_response_format = (function json_response_format(p__9626){var map__9628 = p__9626;var map__9628__$1 = ((cljs.core.seq_QMARK_(map__9628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9628):map__9628);var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9628__$1,cljs.core.constant$keyword$124);var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9628__$1,cljs.core.constant$keyword$125);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$120,((function (map__9628,map__9628__$1,keywords_QMARK_,prefix){
return (function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$111,keywords_QMARK_], 0));
});})(map__9628,map__9628__$1,keywords_QMARK_,prefix))
,cljs.core.constant$keyword$121,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = xhrio.getResponseHeader("Content-Type");var format = (cljs.core.truth_((function (){var and__3469__auto__ = ct;if(cljs.core.truth_(and__3469__auto__))
{return (ct.indexOf("json") >= 0);
} else
{return and__3469__auto__;
}
})())?ajax.core.json_response_format(cljs.core.PersistentArrayMap.EMPTY):ajax.core.edn_response_format());return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(format,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121], null),((function (ct,format){
return (function (p1__9629_SHARP_){return [cljs.core.str(p1__9629_SHARP_),cljs.core.str(" (default)")].join('');
});})(ct,format))
);
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(format,cljs.core.constant$keyword$122);
});
ajax.core.codec = (function codec(request_format,p__9630){var map__9632 = p__9630;var map__9632__$1 = ((cljs.core.seq_QMARK_(map__9632))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9632):map__9632);var response_format = map__9632__$1;var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9632__$1,cljs.core.constant$keyword$121);var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9632__$1,cljs.core.constant$keyword$120);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request_format,cljs.core.constant$keyword$120,read,cljs.core.array_seq([cljs.core.constant$keyword$121,description], 0));
});
ajax.core.get_format = (function get_format(format){if(cljs.core.map_QMARK_(format))
{return format;
} else
{if(cljs.core.ifn_QMARK_(format))
{return ajax.core.codec(ajax.core.url_request_format(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$120,format,cljs.core.constant$keyword$121,"custom"], null));
} else
{if(cljs.core.constant$keyword$105)
{throw (new Error([cljs.core.str("unrecognized format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__9633,xhrio){var map__9635 = p__9633;var map__9635__$1 = ((cljs.core.seq_QMARK_(map__9635))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9635):map__9635);var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9635__$1,cljs.core.constant$keyword$121);var response = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$126,status,cljs.core.constant$keyword$127,null], null);var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$128,status_text,cljs.core.array_seq([cljs.core.constant$keyword$129,true,cljs.core.constant$keyword$130,xhrio.getResponseText()], 0));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return parse_error;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$128,xhrio.getStatusText(),cljs.core.array_seq([cljs.core.constant$keyword$131,parse_error], 0));
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){try{var xhrio = response.target;var status = xhrio.getStatus();var format__$1 = (cljs.core.truth_(cljs.core.constant$keyword$120.cljs$core$IFn$_invoke$arity$1(format))?format:(get_default_format.cljs$core$IFn$_invoke$arity$1 ? get_default_format.cljs$core$IFn$_invoke$arity$1(xhrio) : get_default_format.call(null,xhrio)));var parse = cljs.core.constant$keyword$120.cljs$core$IFn$_invoke$arity$1(format__$1);try{var response__$1 = (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(xhrio) : parse.call(null,xhrio));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$126,status,cljs.core.constant$keyword$128,xhrio.getStatusText(),cljs.core.constant$keyword$127,response__$1], null)], null);
}
}catch (e9639){if((e9639 instanceof Object))
{var e = e9639;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else
{if(cljs.core.constant$keyword$105)
{throw e9639;
} else
{return null;
}
}
}}catch (e9638){if((e9638 instanceof Object))
{var e = e9638;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$126,0,cljs.core.constant$keyword$128,e.message,cljs.core.constant$keyword$127,null], null)], null);
} else
{if(cljs.core.constant$keyword$105)
{throw e9638;
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
ajax.core.process_inputs = (function process_inputs(uri,method,p__9640,p__9641){var map__9645 = p__9640;var map__9645__$1 = ((cljs.core.seq_QMARK_(map__9645))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9645):map__9645);var format = map__9645__$1;var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9645__$1,cljs.core.constant$keyword$123);var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9645__$1,cljs.core.constant$keyword$122);var map__9646 = p__9641;var map__9646__$1 = ((cljs.core.seq_QMARK_(map__9646))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9646):map__9646);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9646__$1,cljs.core.constant$keyword$132);var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9646__$1,cljs.core.constant$keyword$133);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers], null);
} else
{var map__9647 = format;var map__9647__$1 = ((cljs.core.seq_QMARK_(map__9647))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9647):map__9647);var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9647__$1,cljs.core.constant$keyword$123);var write__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9647__$1,cljs.core.constant$keyword$122);var body = (write__$1.cljs$core$IFn$_invoke$arity$1 ? write__$1.cljs$core$IFn$_invoke$arity$1(params) : write__$1.call(null,params));var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3481__auto__ = headers;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
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
ajax.core.base_handler = (function base_handler(format,p__9648){var map__9650 = p__9648;var map__9650__$1 = ((cljs.core.seq_QMARK_(map__9650))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9650):map__9650);var get_default_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9650__$1,cljs.core.constant$keyword$134);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9650__$1,cljs.core.constant$keyword$135);return ((function (map__9650,map__9650__$1,get_default_format,handler){
return (function (xhrio){return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(ajax.core.interpret_response(format,xhrio,(function (){var or__3481__auto__ = get_default_format;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return ajax.core.no_format;
}
})())) : handler.call(null,ajax.core.interpret_response(format,xhrio,(function (){var or__3481__auto__ = get_default_format;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return ajax.core.no_format;
}
})())));
});
;})(map__9650,map__9650__$1,get_default_format,handler))
});
ajax.core.ajax_request = (function() {
var ajax_request = null;
var ajax_request__3 = (function (uri,method,opts){return ajax_request.cljs$core$IFn$_invoke$arity$4(uri,method,opts,(new goog.net.XhrIo()));
});
var ajax_request__4 = (function (uri,method,p__9651,js_ajax){var map__9654 = p__9651;var map__9654__$1 = ((cljs.core.seq_QMARK_(map__9654))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9654):map__9654);var opts = map__9654__$1;var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9654__$1,cljs.core.constant$keyword$136);var format__$1 = ajax.core.get_format(format);var method__$1 = ajax.core.normalize_method(method);var vec__9655 = ajax.core.process_inputs(uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9655,0,null);var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9655,1,null);var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9655,2,null);var handler = ajax.core.base_handler(format__$1,opts);return ajax.core._js_ajax_request(js_ajax,uri__$1,method__$1,body,cljs.core.clj__GT_js(headers),handler,opts);
});
ajax_request = function(uri,method,p__9651,js_ajax){
switch(arguments.length){
case 3:
return ajax_request__3.call(this,uri,method,p__9651);
case 4:
return ajax_request__4.call(this,uri,method,p__9651,js_ajax);
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
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__9657 = format;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$137,G__9657))
{return ajax.core.url_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$138,G__9657))
{return ajax.core.url_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$139,G__9657))
{return ajax.core.edn_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$140,G__9657))
{return ajax.core.json_request_format();
} else
{if(cljs.core.constant$keyword$105)
{throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){var G__9659 = format;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$138,G__9659))
{return ajax.core.raw_response_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$139,G__9659))
{return ajax.core.edn_response_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$140,G__9659))
{return ajax.core.json_response_format(format_params);
} else
{if(cljs.core.constant$keyword$105)
{return null;
} else
{return null;
}
}
}
}
});
ajax.core.transform_handler = (function transform_handler(p__9660){var map__9665 = p__9660;var map__9665__$1 = ((cljs.core.seq_QMARK_(map__9665))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9665):map__9665);var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9665__$1,cljs.core.constant$keyword$141);var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9665__$1,cljs.core.constant$keyword$142);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9665__$1,cljs.core.constant$keyword$135);return ((function (map__9665,map__9665__$1,finally$,error_handler,handler){
return (function easy_handler(p__9666){var vec__9668 = p__9666;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9668,0,null);var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9668,1,null);var temp__4124__auto___9669 = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4124__auto___9669))
{var h_9670 = temp__4124__auto___9669;(h_9670.cljs$core$IFn$_invoke$arity$1 ? h_9670.cljs$core$IFn$_invoke$arity$1(result) : h_9670.call(null,result));
} else
{}
if(cljs.core.fn_QMARK_(finally$))
{return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else
{return null;
}
});
;})(map__9665,map__9665__$1,finally$,error_handler,handler))
});
ajax.core.transform_format = (function transform_format(p__9671){var map__9673 = p__9671;var map__9673__$1 = ((cljs.core.seq_QMARK_(map__9673))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9673):map__9673);var opts = map__9673__$1;var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9673__$1,cljs.core.constant$keyword$143);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9673__$1,cljs.core.constant$keyword$136);var rf = ajax.core.keyword_response_format(response_format,opts);if((format == null))
{return ajax.core.codec(ajax.core.edn_request_format(),rf);
} else
{if((format instanceof cljs.core.Keyword))
{return ajax.core.codec(ajax.core.keyword_request_format(format,opts),rf);
} else
{if(cljs.core.constant$keyword$105)
{return format;
} else
{return null;
}
}
}
});
ajax.core.transform_opts = (function transform_opts(opts){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$135,ajax.core.transform_handler(opts),cljs.core.array_seq([cljs.core.constant$keyword$136,ajax.core.transform_format(opts),cljs.core.constant$keyword$134,ajax.core.get_default_format], 0));
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
var GET__delegate = function (uri,p__9674){var vec__9676 = p__9674;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9676,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"GET",ajax.core.transform_opts(opts));
};
var GET = function (uri,var_args){
var p__9674 = null;if (arguments.length > 1) {
  p__9674 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__9674);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__9677){
var uri = cljs.core.first(arglist__9677);
var p__9674 = cljs.core.rest(arglist__9677);
return GET__delegate(uri,p__9674);
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
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,p__9678){var vec__9680 = p__9678;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9680,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"PUT",ajax.core.transform_opts(opts));
};
var PUT = function (uri,var_args){
var p__9678 = null;if (arguments.length > 1) {
  p__9678 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,p__9678);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__9681){
var uri = cljs.core.first(arglist__9681);
var p__9678 = cljs.core.rest(arglist__9681);
return PUT__delegate(uri,p__9678);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
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
var POST__delegate = function (uri,p__9682){var vec__9684 = p__9682;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9684,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"POST",ajax.core.transform_opts(opts));
};
var POST = function (uri,var_args){
var p__9682 = null;if (arguments.length > 1) {
  p__9682 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__9682);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__9685){
var uri = cljs.core.first(arglist__9685);
var p__9682 = cljs.core.rest(arglist__9685);
return POST__delegate(uri,p__9682);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
