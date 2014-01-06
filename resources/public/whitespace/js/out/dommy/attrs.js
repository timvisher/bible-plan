// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3396__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3396__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3396__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__7000 = (i + class$.length);
start_from = G__7000;
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
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___7025 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7025))
{var class_list_7026 = temp__4090__auto___7025;var seq__7013_7027 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7014_7028 = null;var count__7015_7029 = 0;var i__7016_7030 = 0;while(true){
if((i__7016_7030 < count__7015_7029))
{var class_7031 = cljs.core._nth.call(null,chunk__7014_7028,i__7016_7030);class_list_7026.add(class_7031);
{
var G__7032 = seq__7013_7027;
var G__7033 = chunk__7014_7028;
var G__7034 = count__7015_7029;
var G__7035 = (i__7016_7030 + 1);
seq__7013_7027 = G__7032;
chunk__7014_7028 = G__7033;
count__7015_7029 = G__7034;
i__7016_7030 = G__7035;
continue;
}
} else
{var temp__4092__auto___7036 = cljs.core.seq.call(null,seq__7013_7027);if(temp__4092__auto___7036)
{var seq__7013_7037__$1 = temp__4092__auto___7036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7013_7037__$1))
{var c__4150__auto___7038 = cljs.core.chunk_first.call(null,seq__7013_7037__$1);{
var G__7039 = cljs.core.chunk_rest.call(null,seq__7013_7037__$1);
var G__7040 = c__4150__auto___7038;
var G__7041 = cljs.core.count.call(null,c__4150__auto___7038);
var G__7042 = 0;
seq__7013_7027 = G__7039;
chunk__7014_7028 = G__7040;
count__7015_7029 = G__7041;
i__7016_7030 = G__7042;
continue;
}
} else
{var class_7043 = cljs.core.first.call(null,seq__7013_7037__$1);class_list_7026.add(class_7043);
{
var G__7044 = cljs.core.next.call(null,seq__7013_7037__$1);
var G__7045 = null;
var G__7046 = 0;
var G__7047 = 0;
seq__7013_7027 = G__7044;
chunk__7014_7028 = G__7045;
count__7015_7029 = G__7046;
i__7016_7030 = G__7047;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_7048 = elem__$1.className;var seq__7017_7049 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7018_7050 = null;var count__7019_7051 = 0;var i__7020_7052 = 0;while(true){
if((i__7020_7052 < count__7019_7051))
{var class_7053 = cljs.core._nth.call(null,chunk__7018_7050,i__7020_7052);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7048,class_7053)))
{} else
{elem__$1.className = (((class_name_7048 === ""))?class_7053:[cljs.core.str(class_name_7048),cljs.core.str(" "),cljs.core.str(class_7053)].join(''));
}
{
var G__7054 = seq__7017_7049;
var G__7055 = chunk__7018_7050;
var G__7056 = count__7019_7051;
var G__7057 = (i__7020_7052 + 1);
seq__7017_7049 = G__7054;
chunk__7018_7050 = G__7055;
count__7019_7051 = G__7056;
i__7020_7052 = G__7057;
continue;
}
} else
{var temp__4092__auto___7058 = cljs.core.seq.call(null,seq__7017_7049);if(temp__4092__auto___7058)
{var seq__7017_7059__$1 = temp__4092__auto___7058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7017_7059__$1))
{var c__4150__auto___7060 = cljs.core.chunk_first.call(null,seq__7017_7059__$1);{
var G__7061 = cljs.core.chunk_rest.call(null,seq__7017_7059__$1);
var G__7062 = c__4150__auto___7060;
var G__7063 = cljs.core.count.call(null,c__4150__auto___7060);
var G__7064 = 0;
seq__7017_7049 = G__7061;
chunk__7018_7050 = G__7062;
count__7019_7051 = G__7063;
i__7020_7052 = G__7064;
continue;
}
} else
{var class_7065 = cljs.core.first.call(null,seq__7017_7059__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7048,class_7065)))
{} else
{elem__$1.className = (((class_name_7048 === ""))?class_7065:[cljs.core.str(class_name_7048),cljs.core.str(" "),cljs.core.str(class_7065)].join(''));
}
{
var G__7066 = cljs.core.next.call(null,seq__7017_7059__$1);
var G__7067 = null;
var G__7068 = 0;
var G__7069 = 0;
seq__7017_7049 = G__7066;
chunk__7018_7050 = G__7067;
count__7019_7051 = G__7068;
i__7020_7052 = G__7069;
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
var G__7070__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7021_7071 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__7022_7072 = null;var count__7023_7073 = 0;var i__7024_7074 = 0;while(true){
if((i__7024_7074 < count__7023_7073))
{var c_7075 = cljs.core._nth.call(null,chunk__7022_7072,i__7024_7074);add_class_BANG_.call(null,elem__$1,c_7075);
{
var G__7076 = seq__7021_7071;
var G__7077 = chunk__7022_7072;
var G__7078 = count__7023_7073;
var G__7079 = (i__7024_7074 + 1);
seq__7021_7071 = G__7076;
chunk__7022_7072 = G__7077;
count__7023_7073 = G__7078;
i__7024_7074 = G__7079;
continue;
}
} else
{var temp__4092__auto___7080 = cljs.core.seq.call(null,seq__7021_7071);if(temp__4092__auto___7080)
{var seq__7021_7081__$1 = temp__4092__auto___7080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7021_7081__$1))
{var c__4150__auto___7082 = cljs.core.chunk_first.call(null,seq__7021_7081__$1);{
var G__7083 = cljs.core.chunk_rest.call(null,seq__7021_7081__$1);
var G__7084 = c__4150__auto___7082;
var G__7085 = cljs.core.count.call(null,c__4150__auto___7082);
var G__7086 = 0;
seq__7021_7071 = G__7083;
chunk__7022_7072 = G__7084;
count__7023_7073 = G__7085;
i__7024_7074 = G__7086;
continue;
}
} else
{var c_7087 = cljs.core.first.call(null,seq__7021_7081__$1);add_class_BANG_.call(null,elem__$1,c_7087);
{
var G__7088 = cljs.core.next.call(null,seq__7021_7081__$1);
var G__7089 = null;
var G__7090 = 0;
var G__7091 = 0;
seq__7021_7071 = G__7088;
chunk__7022_7072 = G__7089;
count__7023_7073 = G__7090;
i__7024_7074 = G__7091;
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
var G__7070 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7070__delegate.call(this,elem,classes,more_classes);};
G__7070.cljs$lang$maxFixedArity = 2;
G__7070.cljs$lang$applyTo = (function (arglist__7092){
var elem = cljs.core.first(arglist__7092);
arglist__7092 = cljs.core.next(arglist__7092);
var classes = cljs.core.first(arglist__7092);
var more_classes = cljs.core.rest(arglist__7092);
return G__7070__delegate(elem,classes,more_classes);
});
G__7070.cljs$core$IFn$_invoke$arity$variadic = G__7070__delegate;
return G__7070;
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
var G__7093 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__7093;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___7102 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7102))
{var class_list_7103 = temp__4090__auto___7102;class_list_7103.remove(class$__$1);
} else
{var class_name_7104 = elem__$1.className;var new_class_name_7105 = dommy.attrs.remove_class_str.call(null,class_name_7104,class$__$1);if((class_name_7104 === new_class_name_7105))
{} else
{elem__$1.className = new_class_name_7105;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__7106__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7098 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__7099 = null;var count__7100 = 0;var i__7101 = 0;while(true){
if((i__7101 < count__7100))
{var c = cljs.core._nth.call(null,chunk__7099,i__7101);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7107 = seq__7098;
var G__7108 = chunk__7099;
var G__7109 = count__7100;
var G__7110 = (i__7101 + 1);
seq__7098 = G__7107;
chunk__7099 = G__7108;
count__7100 = G__7109;
i__7101 = G__7110;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7098);if(temp__4092__auto__)
{var seq__7098__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7098__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7098__$1);{
var G__7111 = cljs.core.chunk_rest.call(null,seq__7098__$1);
var G__7112 = c__4150__auto__;
var G__7113 = cljs.core.count.call(null,c__4150__auto__);
var G__7114 = 0;
seq__7098 = G__7111;
chunk__7099 = G__7112;
count__7100 = G__7113;
i__7101 = G__7114;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__7098__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7115 = cljs.core.next.call(null,seq__7098__$1);
var G__7116 = null;
var G__7117 = 0;
var G__7118 = 0;
seq__7098 = G__7115;
chunk__7099 = G__7116;
count__7100 = G__7117;
i__7101 = G__7118;
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
var G__7106 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7106__delegate.call(this,elem,class$,classes);};
G__7106.cljs$lang$maxFixedArity = 2;
G__7106.cljs$lang$applyTo = (function (arglist__7119){
var elem = cljs.core.first(arglist__7119);
arglist__7119 = cljs.core.next(arglist__7119);
var class$ = cljs.core.first(arglist__7119);
var classes = cljs.core.rest(arglist__7119);
return G__7106__delegate(elem,class$,classes);
});
G__7106.cljs$core$IFn$_invoke$arity$variadic = G__7106__delegate;
return G__7106;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___7120 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7120))
{var class_list_7121 = temp__4090__auto___7120;class_list_7121.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__7124){var vec__7125 = p__7124;var k = cljs.core.nth.call(null,vec__7125,0,null);var v = cljs.core.nth.call(null,vec__7125,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__7132_7138 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__7133_7139 = null;var count__7134_7140 = 0;var i__7135_7141 = 0;while(true){
if((i__7135_7141 < count__7134_7140))
{var vec__7136_7142 = cljs.core._nth.call(null,chunk__7133_7139,i__7135_7141);var k_7143 = cljs.core.nth.call(null,vec__7136_7142,0,null);var v_7144 = cljs.core.nth.call(null,vec__7136_7142,1,null);(style[cljs.core.name.call(null,k_7143)] = v_7144);
{
var G__7145 = seq__7132_7138;
var G__7146 = chunk__7133_7139;
var G__7147 = count__7134_7140;
var G__7148 = (i__7135_7141 + 1);
seq__7132_7138 = G__7145;
chunk__7133_7139 = G__7146;
count__7134_7140 = G__7147;
i__7135_7141 = G__7148;
continue;
}
} else
{var temp__4092__auto___7149 = cljs.core.seq.call(null,seq__7132_7138);if(temp__4092__auto___7149)
{var seq__7132_7150__$1 = temp__4092__auto___7149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7132_7150__$1))
{var c__4150__auto___7151 = cljs.core.chunk_first.call(null,seq__7132_7150__$1);{
var G__7152 = cljs.core.chunk_rest.call(null,seq__7132_7150__$1);
var G__7153 = c__4150__auto___7151;
var G__7154 = cljs.core.count.call(null,c__4150__auto___7151);
var G__7155 = 0;
seq__7132_7138 = G__7152;
chunk__7133_7139 = G__7153;
count__7134_7140 = G__7154;
i__7135_7141 = G__7155;
continue;
}
} else
{var vec__7137_7156 = cljs.core.first.call(null,seq__7132_7150__$1);var k_7157 = cljs.core.nth.call(null,vec__7137_7156,0,null);var v_7158 = cljs.core.nth.call(null,vec__7137_7156,1,null);(style[cljs.core.name.call(null,k_7157)] = v_7158);
{
var G__7159 = cljs.core.next.call(null,seq__7132_7150__$1);
var G__7160 = null;
var G__7161 = 0;
var G__7162 = 0;
seq__7132_7138 = G__7159;
chunk__7133_7139 = G__7160;
count__7134_7140 = G__7161;
i__7135_7141 = G__7162;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7163){
var elem = cljs.core.first(arglist__7163);
var kvs = cljs.core.rest(arglist__7163);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7170_7176 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__7171_7177 = null;var count__7172_7178 = 0;var i__7173_7179 = 0;while(true){
if((i__7173_7179 < count__7172_7178))
{var vec__7174_7180 = cljs.core._nth.call(null,chunk__7171_7177,i__7173_7179);var k_7181 = cljs.core.nth.call(null,vec__7174_7180,0,null);var v_7182 = cljs.core.nth.call(null,vec__7174_7180,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7181,[cljs.core.str(v_7182),cljs.core.str("px")].join(''));
{
var G__7183 = seq__7170_7176;
var G__7184 = chunk__7171_7177;
var G__7185 = count__7172_7178;
var G__7186 = (i__7173_7179 + 1);
seq__7170_7176 = G__7183;
chunk__7171_7177 = G__7184;
count__7172_7178 = G__7185;
i__7173_7179 = G__7186;
continue;
}
} else
{var temp__4092__auto___7187 = cljs.core.seq.call(null,seq__7170_7176);if(temp__4092__auto___7187)
{var seq__7170_7188__$1 = temp__4092__auto___7187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7170_7188__$1))
{var c__4150__auto___7189 = cljs.core.chunk_first.call(null,seq__7170_7188__$1);{
var G__7190 = cljs.core.chunk_rest.call(null,seq__7170_7188__$1);
var G__7191 = c__4150__auto___7189;
var G__7192 = cljs.core.count.call(null,c__4150__auto___7189);
var G__7193 = 0;
seq__7170_7176 = G__7190;
chunk__7171_7177 = G__7191;
count__7172_7178 = G__7192;
i__7173_7179 = G__7193;
continue;
}
} else
{var vec__7175_7194 = cljs.core.first.call(null,seq__7170_7188__$1);var k_7195 = cljs.core.nth.call(null,vec__7175_7194,0,null);var v_7196 = cljs.core.nth.call(null,vec__7175_7194,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7195,[cljs.core.str(v_7196),cljs.core.str("px")].join(''));
{
var G__7197 = cljs.core.next.call(null,seq__7170_7188__$1);
var G__7198 = null;
var G__7199 = 0;
var G__7200 = 0;
seq__7170_7176 = G__7197;
chunk__7171_7177 = G__7198;
count__7172_7178 = G__7199;
i__7173_7179 = G__7200;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__7201){
var elem = cljs.core.first(arglist__7201);
var kvs = cljs.core.rest(arglist__7201);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
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
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__7210 = dommy.template.__GT_node_like.call(null,elem);(G__7210[cljs.core.name.call(null,k)] = v);
return G__7210;
} else
{var G__7211 = dommy.template.__GT_node_like.call(null,elem);G__7211.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__7211;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__7218__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7212_7219 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__7213_7220 = null;var count__7214_7221 = 0;var i__7215_7222 = 0;while(true){
if((i__7215_7222 < count__7214_7221))
{var vec__7216_7223 = cljs.core._nth.call(null,chunk__7213_7220,i__7215_7222);var k_7224__$1 = cljs.core.nth.call(null,vec__7216_7223,0,null);var v_7225__$1 = cljs.core.nth.call(null,vec__7216_7223,1,null);set_attr_BANG_.call(null,elem__$1,k_7224__$1,v_7225__$1);
{
var G__7226 = seq__7212_7219;
var G__7227 = chunk__7213_7220;
var G__7228 = count__7214_7221;
var G__7229 = (i__7215_7222 + 1);
seq__7212_7219 = G__7226;
chunk__7213_7220 = G__7227;
count__7214_7221 = G__7228;
i__7215_7222 = G__7229;
continue;
}
} else
{var temp__4092__auto___7230 = cljs.core.seq.call(null,seq__7212_7219);if(temp__4092__auto___7230)
{var seq__7212_7231__$1 = temp__4092__auto___7230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7212_7231__$1))
{var c__4150__auto___7232 = cljs.core.chunk_first.call(null,seq__7212_7231__$1);{
var G__7233 = cljs.core.chunk_rest.call(null,seq__7212_7231__$1);
var G__7234 = c__4150__auto___7232;
var G__7235 = cljs.core.count.call(null,c__4150__auto___7232);
var G__7236 = 0;
seq__7212_7219 = G__7233;
chunk__7213_7220 = G__7234;
count__7214_7221 = G__7235;
i__7215_7222 = G__7236;
continue;
}
} else
{var vec__7217_7237 = cljs.core.first.call(null,seq__7212_7231__$1);var k_7238__$1 = cljs.core.nth.call(null,vec__7217_7237,0,null);var v_7239__$1 = cljs.core.nth.call(null,vec__7217_7237,1,null);set_attr_BANG_.call(null,elem__$1,k_7238__$1,v_7239__$1);
{
var G__7240 = cljs.core.next.call(null,seq__7212_7231__$1);
var G__7241 = null;
var G__7242 = 0;
var G__7243 = 0;
seq__7212_7219 = G__7240;
chunk__7213_7220 = G__7241;
count__7214_7221 = G__7242;
i__7215_7222 = G__7243;
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
var G__7218 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__7218__delegate.call(this,elem,k,v,kvs);};
G__7218.cljs$lang$maxFixedArity = 3;
G__7218.cljs$lang$applyTo = (function (arglist__7244){
var elem = cljs.core.first(arglist__7244);
arglist__7244 = cljs.core.next(arglist__7244);
var k = cljs.core.first(arglist__7244);
arglist__7244 = cljs.core.next(arglist__7244);
var v = cljs.core.first(arglist__7244);
var kvs = cljs.core.rest(arglist__7244);
return G__7218__delegate(elem,k,v,kvs);
});
G__7218.cljs$core$IFn$_invoke$arity$variadic = G__7218__delegate;
return G__7218;
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
var G__7253__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7249_7254 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__7250_7255 = null;var count__7251_7256 = 0;var i__7252_7257 = 0;while(true){
if((i__7252_7257 < count__7251_7256))
{var k_7258__$1 = cljs.core._nth.call(null,chunk__7250_7255,i__7252_7257);remove_attr_BANG_.call(null,elem__$1,k_7258__$1);
{
var G__7259 = seq__7249_7254;
var G__7260 = chunk__7250_7255;
var G__7261 = count__7251_7256;
var G__7262 = (i__7252_7257 + 1);
seq__7249_7254 = G__7259;
chunk__7250_7255 = G__7260;
count__7251_7256 = G__7261;
i__7252_7257 = G__7262;
continue;
}
} else
{var temp__4092__auto___7263 = cljs.core.seq.call(null,seq__7249_7254);if(temp__4092__auto___7263)
{var seq__7249_7264__$1 = temp__4092__auto___7263;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7249_7264__$1))
{var c__4150__auto___7265 = cljs.core.chunk_first.call(null,seq__7249_7264__$1);{
var G__7266 = cljs.core.chunk_rest.call(null,seq__7249_7264__$1);
var G__7267 = c__4150__auto___7265;
var G__7268 = cljs.core.count.call(null,c__4150__auto___7265);
var G__7269 = 0;
seq__7249_7254 = G__7266;
chunk__7250_7255 = G__7267;
count__7251_7256 = G__7268;
i__7252_7257 = G__7269;
continue;
}
} else
{var k_7270__$1 = cljs.core.first.call(null,seq__7249_7264__$1);remove_attr_BANG_.call(null,elem__$1,k_7270__$1);
{
var G__7271 = cljs.core.next.call(null,seq__7249_7264__$1);
var G__7272 = null;
var G__7273 = 0;
var G__7274 = 0;
seq__7249_7254 = G__7271;
chunk__7250_7255 = G__7272;
count__7251_7256 = G__7273;
i__7252_7257 = G__7274;
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
var G__7253 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7253__delegate.call(this,elem,k,ks);};
G__7253.cljs$lang$maxFixedArity = 2;
G__7253.cljs$lang$applyTo = (function (arglist__7275){
var elem = cljs.core.first(arglist__7275);
arglist__7275 = cljs.core.next(arglist__7275);
var k = cljs.core.first(arglist__7275);
var ks = cljs.core.rest(arglist__7275);
return G__7253__delegate(elem,k,ks);
});
G__7253.cljs$core$IFn$_invoke$arity$variadic = G__7253__delegate;
return G__7253;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__7277 = dommy.template.__GT_node_like.call(null,elem);G__7277.style.display = ((show_QMARK_)?"":"none");
return G__7277;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__7279 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7279,false);
return G__7279;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__7281 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7281,true);
return G__7281;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__7283 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__7283["constructor"] = Object);
return G__7283;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
