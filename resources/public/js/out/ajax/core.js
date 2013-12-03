// Compiled by ClojureScript 0.0-2075
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
ajax.core.AjaxImpl = (function (){var obj14684 = {};return obj14684;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__3279__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__3889__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__3889__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__14685){var map__14686 = p__14685;var map__14686__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__14686))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14686):map__14686);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14686__$1,cljs.core.constant$keyword$116);var this$__$1 = this;var G__14687 = this$__$1;goog.events.listen(G__14687,goog.net.EventType.COMPLETE,handler);
G__14687.send(uri,method,body,headers,timeout);
return G__14687;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__14688){var map__14689 = p__14688;var map__14689__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__14689))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14689):map__14689);var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14689__$1,cljs.core.constant$keyword$117);var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14689__$1,cljs.core.constant$keyword$118);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14689__$1,cljs.core.constant$keyword$116);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14689__$1,cljs.core.constant$keyword$119);var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
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
ajax.core.json_response_format = (function json_response_format(p__14690){var map__14692 = p__14690;var map__14692__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__14692))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14692):map__14692);var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14692__$1,cljs.core.constant$keyword$124);var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14692__$1,cljs.core.constant$keyword$125);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$120,(function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$111,keywords_QMARK_], 0));
}),cljs.core.constant$keyword$121,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = xhrio.getResponseHeader("Content-Type");var format = (cljs.core.truth_((function (){var and__3279__auto__ = ct;if(cljs.core.truth_(and__3279__auto__))
{return (ct.indexOf("json") >= 0);
} else
{return and__3279__auto__;
}
})())?ajax.core.json_response_format(cljs.core.PersistentArrayMap.EMPTY):ajax.core.edn_response_format());return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(format,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121], null),(function (p1__14693_SHARP_){return [cljs.core.str(p1__14693_SHARP_),cljs.core.str(" (default)")].join('');
}));
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(format,cljs.core.constant$keyword$122);
});
ajax.core.codec = (function codec(request_format,p__14694){var map__14696 = p__14694;var map__14696__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__14696))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14696):map__14696);var response_format = map__14696__$1;var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14696__$1,cljs.core.constant$keyword$121);var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14696__$1,cljs.core.constant$keyword$120);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request_format,cljs.core.constant$keyword$120,read,cljs.core.array_seq([cljs.core.constant$keyword$121,description], 0));
});
ajax.core.get_format = (function get_format(format){if(cljs.core.truth_(cljs.core.map_QMARK_(format)))
{return format;
} else
{if(cljs.core.truth_(cljs.core.ifn_QMARK_(format)))
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
ajax.core.exception_response = (function exception_response(e,status,p__14697,xhrio){var map__14699 = p__14697;var map__14699__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__14699))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14699):map__14699);var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14699__$1,cljs.core.constant$keyword$121);var response = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$126,status,cljs.core.constant$keyword$127,null], null);var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$128,status_text,cljs.core.array_seq([cljs.core.constant$keyword$129,true,cljs.core.constant$keyword$130,xhrio.getResponseText()], 0));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
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
}catch (e14703){if((e14703 instanceof Object))
{var e = e14703;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else
{if(cljs.core.constant$keyword$105)
{throw e14703;
} else
{return null;
}
}
}}catch (e14702){if((e14702 instanceof Object))
{var e = e14702;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$126,0,cljs.core.constant$keyword$128,e.message,cljs.core.constant$keyword$127,null], null)], null);
} else
{if(cljs.core.constant$keyword$105)
{throw e14702;
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
ajax.core.process_inputs = (function process_inputs(uri,method,p__14704,p__14705){var map__14709 = p__14704;var map__14709__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__14709))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14709):map__14709);var format = map__14709__$1;var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14709__$1,cljs.core.constant$keyword$123);var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14709__$1,cljs.core.constant$keyword$122);var map__14710 = p__14705;var map__14710__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__14710))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14710):map__14710);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14710__$1,cljs.core.constant$keyword$132);var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14710__$1,cljs.core.constant$keyword$133);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers], null);
} else
{var map__14711 = format;var map__14711__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__14711))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14711):map__14711);var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14711__$1,cljs.core.constant$keyword$123);var write__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14711__$1,cljs.core.constant$keyword$122);var body = (write__$1.cljs$core$IFn$_invoke$arity$1 ? write__$1.cljs$core$IFn$_invoke$arity$1(params) : write__$1.call(null,params));var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3291__auto__ = headers;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
ajax.core.base_handler = (function base_handler(format,p__14712){var map__14714 = p__14712;var map__14714__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__14714))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14714):map__14714);var get_default_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14714__$1,cljs.core.constant$keyword$134);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14714__$1,cljs.core.constant$keyword$135);return (function (xhrio){return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(ajax.core.interpret_response(format,xhrio,(function (){var or__3291__auto__ = get_default_format;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return ajax.core.no_format;
}
})())) : handler.call(null,ajax.core.interpret_response(format,xhrio,(function (){var or__3291__auto__ = get_default_format;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
var ajax_request__4 = (function (uri,method,p__14715,js_ajax){var map__14718 = p__14715;var map__14718__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__14718))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14718):map__14718);var opts = map__14718__$1;var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14718__$1,cljs.core.constant$keyword$136);var format__$1 = ajax.core.get_format(format);var method__$1 = ajax.core.normalize_method(method);var vec__14719 = ajax.core.process_inputs(uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14719,0,null);var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14719,1,null);var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14719,2,null);var handler = ajax.core.base_handler(format__$1,opts);return ajax.core._js_ajax_request(js_ajax,uri__$1,method__$1,body,cljs.core.clj__GT_js(headers),handler,opts);
});
ajax_request = function(uri,method,p__14715,js_ajax){
switch(arguments.length){
case 3:
return ajax_request__3.call(this,uri,method,p__14715);
case 4:
return ajax_request__4.call(this,uri,method,p__14715,js_ajax);
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
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__14721 = format;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$137,G__14721))
{return ajax.core.url_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$138,G__14721))
{return ajax.core.url_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$139,G__14721))
{return ajax.core.edn_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$140,G__14721))
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
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){var G__14723 = format;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$138,G__14723))
{return ajax.core.raw_response_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$139,G__14723))
{return ajax.core.edn_response_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$140,G__14723))
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
ajax.core.transform_handler = (function transform_handler(p__14724){var map__14729 = p__14724;var map__14729__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__14729))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14729):map__14729);var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14729__$1,cljs.core.constant$keyword$141);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14729__$1,cljs.core.constant$keyword$135);return (function easy_handler(p__14730){var vec__14732 = p__14730;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14732,0,null);var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14732,1,null);var temp__4090__auto__ = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4090__auto__))
{var h = temp__4090__auto__;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(result) : h.call(null,result));
} else
{return null;
}
});
});
ajax.core.transform_format = (function transform_format(p__14733){var map__14735 = p__14733;var map__14735__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_(map__14735))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14735):map__14735);var opts = map__14735__$1;var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,cljs.core.constant$keyword$142);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,cljs.core.constant$keyword$136);var rf = ajax.core.keyword_response_format(response_format,opts);if((format == null))
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
var GET__delegate = function (uri,p__14736){var vec__14738 = p__14736;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14738,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"GET",ajax.core.transform_opts(opts));
};
var GET = function (uri,var_args){
var p__14736 = null;if (arguments.length > 1) {
  p__14736 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__14736);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__14739){
var uri = cljs.core.first(arglist__14739);
var p__14736 = cljs.core.rest(arglist__14739);
return GET__delegate(uri,p__14736);
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
var POST__delegate = function (uri,p__14740){var vec__14742 = p__14740;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14742,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$3(uri,"POST",ajax.core.transform_opts(opts));
};
var POST = function (uri,var_args){
var p__14740 = null;if (arguments.length > 1) {
  p__14740 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__14740);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__14743){
var uri = cljs.core.first(arglist__14743);
var p__14740 = cljs.core.rest(arglist__14743);
return POST__delegate(uri,p__14740);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
