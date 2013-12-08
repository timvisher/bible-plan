// Compiled by ClojureScript 0.0-2075
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3279__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3279__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3279__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(cljs.core.truth_(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i)))
{return i;
} else
{{
var G__9099 = (i + class$.length);
start_from = G__9099;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.truth_(cljs.core.seq.call(null,classes__$1)))
{var temp__4090__auto___9124 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9124))
{var class_list_9125 = temp__4090__auto___9124;var seq__9112_9126 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9113_9127 = null;var count__9114_9128 = 0;var i__9115_9129 = 0;while(true){
if((i__9115_9129 < count__9114_9128))
{var class_9130 = cljs.core._nth.call(null,chunk__9113_9127,i__9115_9129);class_list_9125.add(class_9130);
{
var G__9131 = seq__9112_9126;
var G__9132 = chunk__9113_9127;
var G__9133 = count__9114_9128;
var G__9134 = (i__9115_9129 + 1);
seq__9112_9126 = G__9131;
chunk__9113_9127 = G__9132;
count__9114_9128 = G__9133;
i__9115_9129 = G__9134;
continue;
}
} else
{var temp__4092__auto___9135 = cljs.core.seq.call(null,seq__9112_9126);if(cljs.core.truth_(temp__4092__auto___9135))
{var seq__9112_9136__$1 = temp__4092__auto___9135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9112_9136__$1))
{var c__4010__auto___9137 = cljs.core.chunk_first.call(null,seq__9112_9136__$1);{
var G__9138 = cljs.core.chunk_rest.call(null,seq__9112_9136__$1);
var G__9139 = c__4010__auto___9137;
var G__9140 = cljs.core.count.call(null,c__4010__auto___9137);
var G__9141 = 0;
seq__9112_9126 = G__9138;
chunk__9113_9127 = G__9139;
count__9114_9128 = G__9140;
i__9115_9129 = G__9141;
continue;
}
} else
{var class_9142 = cljs.core.first.call(null,seq__9112_9136__$1);class_list_9125.add(class_9142);
{
var G__9143 = cljs.core.next.call(null,seq__9112_9136__$1);
var G__9144 = null;
var G__9145 = 0;
var G__9146 = 0;
seq__9112_9126 = G__9143;
chunk__9113_9127 = G__9144;
count__9114_9128 = G__9145;
i__9115_9129 = G__9146;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_9147 = elem__$1.className;var seq__9116_9148 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9117_9149 = null;var count__9118_9150 = 0;var i__9119_9151 = 0;while(true){
if((i__9119_9151 < count__9118_9150))
{var class_9152 = cljs.core._nth.call(null,chunk__9117_9149,i__9119_9151);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9147,class_9152)))
{} else
{elem__$1.className = (((class_name_9147 === ""))?class_9152:[cljs.core.str(class_name_9147),cljs.core.str(" "),cljs.core.str(class_9152)].join(''));
}
{
var G__9153 = seq__9116_9148;
var G__9154 = chunk__9117_9149;
var G__9155 = count__9118_9150;
var G__9156 = (i__9119_9151 + 1);
seq__9116_9148 = G__9153;
chunk__9117_9149 = G__9154;
count__9118_9150 = G__9155;
i__9119_9151 = G__9156;
continue;
}
} else
{var temp__4092__auto___9157 = cljs.core.seq.call(null,seq__9116_9148);if(cljs.core.truth_(temp__4092__auto___9157))
{var seq__9116_9158__$1 = temp__4092__auto___9157;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9116_9158__$1))
{var c__4010__auto___9159 = cljs.core.chunk_first.call(null,seq__9116_9158__$1);{
var G__9160 = cljs.core.chunk_rest.call(null,seq__9116_9158__$1);
var G__9161 = c__4010__auto___9159;
var G__9162 = cljs.core.count.call(null,c__4010__auto___9159);
var G__9163 = 0;
seq__9116_9148 = G__9160;
chunk__9117_9149 = G__9161;
count__9118_9150 = G__9162;
i__9119_9151 = G__9163;
continue;
}
} else
{var class_9164 = cljs.core.first.call(null,seq__9116_9158__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9147,class_9164)))
{} else
{elem__$1.className = (((class_name_9147 === ""))?class_9164:[cljs.core.str(class_name_9147),cljs.core.str(" "),cljs.core.str(class_9164)].join(''));
}
{
var G__9165 = cljs.core.next.call(null,seq__9116_9158__$1);
var G__9166 = null;
var G__9167 = 0;
var G__9168 = 0;
seq__9116_9148 = G__9165;
chunk__9117_9149 = G__9166;
count__9118_9150 = G__9167;
i__9119_9151 = G__9168;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__9169__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9120_9170 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__9121_9171 = null;var count__9122_9172 = 0;var i__9123_9173 = 0;while(true){
if((i__9123_9173 < count__9122_9172))
{var c_9174 = cljs.core._nth.call(null,chunk__9121_9171,i__9123_9173);add_class_BANG_.call(null,elem__$1,c_9174);
{
var G__9175 = seq__9120_9170;
var G__9176 = chunk__9121_9171;
var G__9177 = count__9122_9172;
var G__9178 = (i__9123_9173 + 1);
seq__9120_9170 = G__9175;
chunk__9121_9171 = G__9176;
count__9122_9172 = G__9177;
i__9123_9173 = G__9178;
continue;
}
} else
{var temp__4092__auto___9179 = cljs.core.seq.call(null,seq__9120_9170);if(cljs.core.truth_(temp__4092__auto___9179))
{var seq__9120_9180__$1 = temp__4092__auto___9179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9120_9180__$1))
{var c__4010__auto___9181 = cljs.core.chunk_first.call(null,seq__9120_9180__$1);{
var G__9182 = cljs.core.chunk_rest.call(null,seq__9120_9180__$1);
var G__9183 = c__4010__auto___9181;
var G__9184 = cljs.core.count.call(null,c__4010__auto___9181);
var G__9185 = 0;
seq__9120_9170 = G__9182;
chunk__9121_9171 = G__9183;
count__9122_9172 = G__9184;
i__9123_9173 = G__9185;
continue;
}
} else
{var c_9186 = cljs.core.first.call(null,seq__9120_9180__$1);add_class_BANG_.call(null,elem__$1,c_9186);
{
var G__9187 = cljs.core.next.call(null,seq__9120_9180__$1);
var G__9188 = null;
var G__9189 = 0;
var G__9190 = 0;
seq__9120_9170 = G__9187;
chunk__9121_9171 = G__9188;
count__9122_9172 = G__9189;
i__9123_9173 = G__9190;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__9169 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9169__delegate.call(this,elem,classes,more_classes);};
G__9169.cljs$lang$maxFixedArity = 2;
G__9169.cljs$lang$applyTo = (function (arglist__9191){
var elem = cljs.core.first(arglist__9191);
arglist__9191 = cljs.core.next(arglist__9191);
var classes = cljs.core.first(arglist__9191);
var more_classes = cljs.core.rest(arglist__9191);
return G__9169__delegate(elem,classes,more_classes);
});
G__9169.cljs$core$IFn$_invoke$arity$variadic = G__9169__delegate;
return G__9169;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__9192 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__9192;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9201 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9201))
{var class_list_9202 = temp__4090__auto___9201;class_list_9202.remove(class$__$1);
} else
{var class_name_9203 = elem__$1.className;var new_class_name_9204 = dommy.attrs.remove_class_str.call(null,class_name_9203,class$__$1);if((class_name_9203 === new_class_name_9204))
{} else
{elem__$1.className = new_class_name_9204;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__9205__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9197 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__9198 = null;var count__9199 = 0;var i__9200 = 0;while(true){
if((i__9200 < count__9199))
{var c = cljs.core._nth.call(null,chunk__9198,i__9200);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9206 = seq__9197;
var G__9207 = chunk__9198;
var G__9208 = count__9199;
var G__9209 = (i__9200 + 1);
seq__9197 = G__9206;
chunk__9198 = G__9207;
count__9199 = G__9208;
i__9200 = G__9209;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9197);if(cljs.core.truth_(temp__4092__auto__))
{var seq__9197__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9197__$1))
{var c__4010__auto__ = cljs.core.chunk_first.call(null,seq__9197__$1);{
var G__9210 = cljs.core.chunk_rest.call(null,seq__9197__$1);
var G__9211 = c__4010__auto__;
var G__9212 = cljs.core.count.call(null,c__4010__auto__);
var G__9213 = 0;
seq__9197 = G__9210;
chunk__9198 = G__9211;
count__9199 = G__9212;
i__9200 = G__9213;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__9197__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9214 = cljs.core.next.call(null,seq__9197__$1);
var G__9215 = null;
var G__9216 = 0;
var G__9217 = 0;
seq__9197 = G__9214;
chunk__9198 = G__9215;
count__9199 = G__9216;
i__9200 = G__9217;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__9205 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9205__delegate.call(this,elem,class$,classes);};
G__9205.cljs$lang$maxFixedArity = 2;
G__9205.cljs$lang$applyTo = (function (arglist__9218){
var elem = cljs.core.first(arglist__9218);
arglist__9218 = cljs.core.next(arglist__9218);
var class$ = cljs.core.first(arglist__9218);
var classes = cljs.core.rest(arglist__9218);
return G__9205__delegate(elem,class$,classes);
});
G__9205.cljs$core$IFn$_invoke$arity$variadic = G__9205__delegate;
return G__9205;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9219 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9219))
{var class_list_9220 = temp__4090__auto___9219;class_list_9220.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,cljs.core.not.call(null,dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__9223){var vec__9224 = p__9223;var k = cljs.core.nth.call(null,vec__9224,0,null);var v = cljs.core.nth.call(null,vec__9224,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__9231_9237 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9232_9238 = null;var count__9233_9239 = 0;var i__9234_9240 = 0;while(true){
if((i__9234_9240 < count__9233_9239))
{var vec__9235_9241 = cljs.core._nth.call(null,chunk__9232_9238,i__9234_9240);var k_9242 = cljs.core.nth.call(null,vec__9235_9241,0,null);var v_9243 = cljs.core.nth.call(null,vec__9235_9241,1,null);(style[cljs.core.name.call(null,k_9242)] = v_9243);
{
var G__9244 = seq__9231_9237;
var G__9245 = chunk__9232_9238;
var G__9246 = count__9233_9239;
var G__9247 = (i__9234_9240 + 1);
seq__9231_9237 = G__9244;
chunk__9232_9238 = G__9245;
count__9233_9239 = G__9246;
i__9234_9240 = G__9247;
continue;
}
} else
{var temp__4092__auto___9248 = cljs.core.seq.call(null,seq__9231_9237);if(cljs.core.truth_(temp__4092__auto___9248))
{var seq__9231_9249__$1 = temp__4092__auto___9248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9231_9249__$1))
{var c__4010__auto___9250 = cljs.core.chunk_first.call(null,seq__9231_9249__$1);{
var G__9251 = cljs.core.chunk_rest.call(null,seq__9231_9249__$1);
var G__9252 = c__4010__auto___9250;
var G__9253 = cljs.core.count.call(null,c__4010__auto___9250);
var G__9254 = 0;
seq__9231_9237 = G__9251;
chunk__9232_9238 = G__9252;
count__9233_9239 = G__9253;
i__9234_9240 = G__9254;
continue;
}
} else
{var vec__9236_9255 = cljs.core.first.call(null,seq__9231_9249__$1);var k_9256 = cljs.core.nth.call(null,vec__9236_9255,0,null);var v_9257 = cljs.core.nth.call(null,vec__9236_9255,1,null);(style[cljs.core.name.call(null,k_9256)] = v_9257);
{
var G__9258 = cljs.core.next.call(null,seq__9231_9249__$1);
var G__9259 = null;
var G__9260 = 0;
var G__9261 = 0;
seq__9231_9237 = G__9258;
chunk__9232_9238 = G__9259;
count__9233_9239 = G__9260;
i__9234_9240 = G__9261;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__9262){
var elem = cljs.core.first(arglist__9262);
var kvs = cljs.core.rest(arglist__9262);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9269_9275 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9270_9276 = null;var count__9271_9277 = 0;var i__9272_9278 = 0;while(true){
if((i__9272_9278 < count__9271_9277))
{var vec__9273_9279 = cljs.core._nth.call(null,chunk__9270_9276,i__9272_9278);var k_9280 = cljs.core.nth.call(null,vec__9273_9279,0,null);var v_9281 = cljs.core.nth.call(null,vec__9273_9279,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9280,[cljs.core.str(v_9281),cljs.core.str("px")].join(''));
{
var G__9282 = seq__9269_9275;
var G__9283 = chunk__9270_9276;
var G__9284 = count__9271_9277;
var G__9285 = (i__9272_9278 + 1);
seq__9269_9275 = G__9282;
chunk__9270_9276 = G__9283;
count__9271_9277 = G__9284;
i__9272_9278 = G__9285;
continue;
}
} else
{var temp__4092__auto___9286 = cljs.core.seq.call(null,seq__9269_9275);if(cljs.core.truth_(temp__4092__auto___9286))
{var seq__9269_9287__$1 = temp__4092__auto___9286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9269_9287__$1))
{var c__4010__auto___9288 = cljs.core.chunk_first.call(null,seq__9269_9287__$1);{
var G__9289 = cljs.core.chunk_rest.call(null,seq__9269_9287__$1);
var G__9290 = c__4010__auto___9288;
var G__9291 = cljs.core.count.call(null,c__4010__auto___9288);
var G__9292 = 0;
seq__9269_9275 = G__9289;
chunk__9270_9276 = G__9290;
count__9271_9277 = G__9291;
i__9272_9278 = G__9292;
continue;
}
} else
{var vec__9274_9293 = cljs.core.first.call(null,seq__9269_9287__$1);var k_9294 = cljs.core.nth.call(null,vec__9274_9293,0,null);var v_9295 = cljs.core.nth.call(null,vec__9274_9293,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9294,[cljs.core.str(v_9295),cljs.core.str("px")].join(''));
{
var G__9296 = cljs.core.next.call(null,seq__9269_9287__$1);
var G__9297 = null;
var G__9298 = 0;
var G__9299 = 0;
seq__9269_9275 = G__9296;
chunk__9270_9276 = G__9297;
count__9271_9277 = G__9298;
i__9272_9278 = G__9299;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__9300){
var elem = cljs.core.first(arglist__9300);
var kvs = cljs.core.rest(arglist__9300);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.truth_(cljs.core.seq.call(null,pixels)))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,v)))
{var G__9309 = dommy.template.__GT_node_like.call(null,elem);(G__9309[cljs.core.name.call(null,k)] = v);
return G__9309;
} else
{var G__9310 = dommy.template.__GT_node_like.call(null,elem);G__9310.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__9310;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__9317__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9311_9318 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__9312_9319 = null;var count__9313_9320 = 0;var i__9314_9321 = 0;while(true){
if((i__9314_9321 < count__9313_9320))
{var vec__9315_9322 = cljs.core._nth.call(null,chunk__9312_9319,i__9314_9321);var k_9323__$1 = cljs.core.nth.call(null,vec__9315_9322,0,null);var v_9324__$1 = cljs.core.nth.call(null,vec__9315_9322,1,null);set_attr_BANG_.call(null,elem__$1,k_9323__$1,v_9324__$1);
{
var G__9325 = seq__9311_9318;
var G__9326 = chunk__9312_9319;
var G__9327 = count__9313_9320;
var G__9328 = (i__9314_9321 + 1);
seq__9311_9318 = G__9325;
chunk__9312_9319 = G__9326;
count__9313_9320 = G__9327;
i__9314_9321 = G__9328;
continue;
}
} else
{var temp__4092__auto___9329 = cljs.core.seq.call(null,seq__9311_9318);if(cljs.core.truth_(temp__4092__auto___9329))
{var seq__9311_9330__$1 = temp__4092__auto___9329;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9311_9330__$1))
{var c__4010__auto___9331 = cljs.core.chunk_first.call(null,seq__9311_9330__$1);{
var G__9332 = cljs.core.chunk_rest.call(null,seq__9311_9330__$1);
var G__9333 = c__4010__auto___9331;
var G__9334 = cljs.core.count.call(null,c__4010__auto___9331);
var G__9335 = 0;
seq__9311_9318 = G__9332;
chunk__9312_9319 = G__9333;
count__9313_9320 = G__9334;
i__9314_9321 = G__9335;
continue;
}
} else
{var vec__9316_9336 = cljs.core.first.call(null,seq__9311_9330__$1);var k_9337__$1 = cljs.core.nth.call(null,vec__9316_9336,0,null);var v_9338__$1 = cljs.core.nth.call(null,vec__9316_9336,1,null);set_attr_BANG_.call(null,elem__$1,k_9337__$1,v_9338__$1);
{
var G__9339 = cljs.core.next.call(null,seq__9311_9330__$1);
var G__9340 = null;
var G__9341 = 0;
var G__9342 = 0;
seq__9311_9318 = G__9339;
chunk__9312_9319 = G__9340;
count__9313_9320 = G__9341;
i__9314_9321 = G__9342;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__9317 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__9317__delegate.call(this,elem,k,v,kvs);};
G__9317.cljs$lang$maxFixedArity = 3;
G__9317.cljs$lang$applyTo = (function (arglist__9343){
var elem = cljs.core.first(arglist__9343);
arglist__9343 = cljs.core.next(arglist__9343);
var k = cljs.core.first(arglist__9343);
arglist__9343 = cljs.core.next(arglist__9343);
var v = cljs.core.first(arglist__9343);
var kvs = cljs.core.rest(arglist__9343);
return G__9317__delegate(elem,k,v,kvs);
});
G__9317.cljs$core$IFn$_invoke$arity$variadic = G__9317__delegate;
return G__9317;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__9352__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9348_9353 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__9349_9354 = null;var count__9350_9355 = 0;var i__9351_9356 = 0;while(true){
if((i__9351_9356 < count__9350_9355))
{var k_9357__$1 = cljs.core._nth.call(null,chunk__9349_9354,i__9351_9356);remove_attr_BANG_.call(null,elem__$1,k_9357__$1);
{
var G__9358 = seq__9348_9353;
var G__9359 = chunk__9349_9354;
var G__9360 = count__9350_9355;
var G__9361 = (i__9351_9356 + 1);
seq__9348_9353 = G__9358;
chunk__9349_9354 = G__9359;
count__9350_9355 = G__9360;
i__9351_9356 = G__9361;
continue;
}
} else
{var temp__4092__auto___9362 = cljs.core.seq.call(null,seq__9348_9353);if(cljs.core.truth_(temp__4092__auto___9362))
{var seq__9348_9363__$1 = temp__4092__auto___9362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9348_9363__$1))
{var c__4010__auto___9364 = cljs.core.chunk_first.call(null,seq__9348_9363__$1);{
var G__9365 = cljs.core.chunk_rest.call(null,seq__9348_9363__$1);
var G__9366 = c__4010__auto___9364;
var G__9367 = cljs.core.count.call(null,c__4010__auto___9364);
var G__9368 = 0;
seq__9348_9353 = G__9365;
chunk__9349_9354 = G__9366;
count__9350_9355 = G__9367;
i__9351_9356 = G__9368;
continue;
}
} else
{var k_9369__$1 = cljs.core.first.call(null,seq__9348_9363__$1);remove_attr_BANG_.call(null,elem__$1,k_9369__$1);
{
var G__9370 = cljs.core.next.call(null,seq__9348_9363__$1);
var G__9371 = null;
var G__9372 = 0;
var G__9373 = 0;
seq__9348_9353 = G__9370;
chunk__9349_9354 = G__9371;
count__9350_9355 = G__9372;
i__9351_9356 = G__9373;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__9352 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9352__delegate.call(this,elem,k,ks);};
G__9352.cljs$lang$maxFixedArity = 2;
G__9352.cljs$lang$applyTo = (function (arglist__9374){
var elem = cljs.core.first(arglist__9374);
arglist__9374 = cljs.core.next(arglist__9374);
var k = cljs.core.first(arglist__9374);
var ks = cljs.core.rest(arglist__9374);
return G__9352__delegate(elem,k,ks);
});
G__9352.cljs$core$IFn$_invoke$arity$variadic = G__9352__delegate;
return G__9352;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__9376 = dommy.template.__GT_node_like.call(null,elem);G__9376.style.display = ((show_QMARK_)?"":"none");
return G__9376;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__9378 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9378,false);
return G__9378;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__9380 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9380,true);
return G__9380;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__9382 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__9382["constructor"] = Object);
return G__9382;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
