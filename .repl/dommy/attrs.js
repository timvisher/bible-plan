goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){
var and__3941__auto__ = (function (){var or__3943__auto__ = (idx === 0);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt((idx - 1)));
}
})();
if(cljs.core.truth_(and__3941__auto__))
{var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len))
{var or__3943__auto__ = (stop === total_len);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt(stop));
}
} else
{return null;
}
} else
{return and__3941__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){
var start_from = 0;
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__6014 = (i + class$.length);
start_from = G__6014;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4090__auto__ = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;
return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;
if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;
var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);
if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;
return (i >= 0);
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
var add_class_BANG___2 = (function (elem,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));
if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___6039 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___6039))
{var class_list_6040 = temp__4090__auto___6039;
var seq__6027_6041 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__6028_6042 = null;
var count__6029_6043 = 0;
var i__6030_6044 = 0;
while(true){
if((i__6030_6044 < count__6029_6043))
{var class_6045 = cljs.core._nth.call(null,chunk__6028_6042,i__6030_6044);
class_list_6040.add(class_6045);
{
var G__6046 = seq__6027_6041;
var G__6047 = chunk__6028_6042;
var G__6048 = count__6029_6043;
var G__6049 = (i__6030_6044 + 1);
seq__6027_6041 = G__6046;
chunk__6028_6042 = G__6047;
count__6029_6043 = G__6048;
i__6030_6044 = G__6049;
continue;
}
} else
{var temp__4092__auto___6050 = cljs.core.seq.call(null,seq__6027_6041);
if(temp__4092__auto___6050)
{var seq__6027_6051__$1 = temp__4092__auto___6050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6027_6051__$1))
{var c__4479__auto___6052 = cljs.core.chunk_first.call(null,seq__6027_6051__$1);
{
var G__6053 = cljs.core.chunk_rest.call(null,seq__6027_6051__$1);
var G__6054 = c__4479__auto___6052;
var G__6055 = cljs.core.count.call(null,c__4479__auto___6052);
var G__6056 = 0;
seq__6027_6041 = G__6053;
chunk__6028_6042 = G__6054;
count__6029_6043 = G__6055;
i__6030_6044 = G__6056;
continue;
}
} else
{var class_6057 = cljs.core.first.call(null,seq__6027_6051__$1);
class_list_6040.add(class_6057);
{
var G__6058 = cljs.core.next.call(null,seq__6027_6051__$1);
var G__6059 = null;
var G__6060 = 0;
var G__6061 = 0;
seq__6027_6041 = G__6058;
chunk__6028_6042 = G__6059;
count__6029_6043 = G__6060;
i__6030_6044 = G__6061;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_6062 = elem__$1.className;
var seq__6031_6063 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__6032_6064 = null;
var count__6033_6065 = 0;
var i__6034_6066 = 0;
while(true){
if((i__6034_6066 < count__6033_6065))
{var class_6067 = cljs.core._nth.call(null,chunk__6032_6064,i__6034_6066);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6062,class_6067)))
{} else
{elem__$1.className = (((class_name_6062 === ""))?class_6067:[cljs.core.str(class_name_6062),cljs.core.str(" "),cljs.core.str(class_6067)].join(''));
}
{
var G__6068 = seq__6031_6063;
var G__6069 = chunk__6032_6064;
var G__6070 = count__6033_6065;
var G__6071 = (i__6034_6066 + 1);
seq__6031_6063 = G__6068;
chunk__6032_6064 = G__6069;
count__6033_6065 = G__6070;
i__6034_6066 = G__6071;
continue;
}
} else
{var temp__4092__auto___6072 = cljs.core.seq.call(null,seq__6031_6063);
if(temp__4092__auto___6072)
{var seq__6031_6073__$1 = temp__4092__auto___6072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6031_6073__$1))
{var c__4479__auto___6074 = cljs.core.chunk_first.call(null,seq__6031_6073__$1);
{
var G__6075 = cljs.core.chunk_rest.call(null,seq__6031_6073__$1);
var G__6076 = c__4479__auto___6074;
var G__6077 = cljs.core.count.call(null,c__4479__auto___6074);
var G__6078 = 0;
seq__6031_6063 = G__6075;
chunk__6032_6064 = G__6076;
count__6033_6065 = G__6077;
i__6034_6066 = G__6078;
continue;
}
} else
{var class_6079 = cljs.core.first.call(null,seq__6031_6073__$1);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6062,class_6079)))
{} else
{elem__$1.className = (((class_name_6062 === ""))?class_6079:[cljs.core.str(class_name_6062),cljs.core.str(" "),cljs.core.str(class_6079)].join(''));
}
{
var G__6080 = cljs.core.next.call(null,seq__6031_6073__$1);
var G__6081 = null;
var G__6082 = 0;
var G__6083 = 0;
seq__6031_6063 = G__6080;
chunk__6032_6064 = G__6081;
count__6033_6065 = G__6082;
i__6034_6066 = G__6083;
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
var G__6084__delegate = function (elem,classes,more_classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__6035_6085 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__6036_6086 = null;
var count__6037_6087 = 0;
var i__6038_6088 = 0;
while(true){
if((i__6038_6088 < count__6037_6087))
{var c_6089 = cljs.core._nth.call(null,chunk__6036_6086,i__6038_6088);
add_class_BANG_.call(null,elem__$1,c_6089);
{
var G__6090 = seq__6035_6085;
var G__6091 = chunk__6036_6086;
var G__6092 = count__6037_6087;
var G__6093 = (i__6038_6088 + 1);
seq__6035_6085 = G__6090;
chunk__6036_6086 = G__6091;
count__6037_6087 = G__6092;
i__6038_6088 = G__6093;
continue;
}
} else
{var temp__4092__auto___6094 = cljs.core.seq.call(null,seq__6035_6085);
if(temp__4092__auto___6094)
{var seq__6035_6095__$1 = temp__4092__auto___6094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6035_6095__$1))
{var c__4479__auto___6096 = cljs.core.chunk_first.call(null,seq__6035_6095__$1);
{
var G__6097 = cljs.core.chunk_rest.call(null,seq__6035_6095__$1);
var G__6098 = c__4479__auto___6096;
var G__6099 = cljs.core.count.call(null,c__4479__auto___6096);
var G__6100 = 0;
seq__6035_6085 = G__6097;
chunk__6036_6086 = G__6098;
count__6037_6087 = G__6099;
i__6038_6088 = G__6100;
continue;
}
} else
{var c_6101 = cljs.core.first.call(null,seq__6035_6095__$1);
add_class_BANG_.call(null,elem__$1,c_6101);
{
var G__6102 = cljs.core.next.call(null,seq__6035_6095__$1);
var G__6103 = null;
var G__6104 = 0;
var G__6105 = 0;
seq__6035_6085 = G__6102;
chunk__6036_6086 = G__6103;
count__6037_6087 = G__6104;
i__6038_6088 = G__6105;
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
var G__6084 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6084__delegate.call(this, elem, classes, more_classes);
};
G__6084.cljs$lang$maxFixedArity = 2;
G__6084.cljs$lang$applyTo = (function (arglist__6106){
var elem = cljs.core.first(arglist__6106);
arglist__6106 = cljs.core.next(arglist__6106);
var classes = cljs.core.first(arglist__6106);
var more_classes = cljs.core.rest(arglist__6106);
return G__6084__delegate(elem, classes, more_classes);
});
G__6084.cljs$core$IFn$_invoke$arity$variadic = G__6084__delegate;
return G__6084;
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
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;
{
var G__6107 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__6107;
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
var remove_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4090__auto___6116 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___6116))
{var class_list_6117 = temp__4090__auto___6116;
class_list_6117.remove(class$__$1);
} else
{var class_name_6118 = elem__$1.className;
var new_class_name_6119 = dommy.attrs.remove_class_str.call(null,class_name_6118,class$__$1);
if((class_name_6118 === new_class_name_6119))
{} else
{elem__$1.className = new_class_name_6119;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__6120__delegate = function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__6112 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__6113 = null;
var count__6114 = 0;
var i__6115 = 0;
while(true){
if((i__6115 < count__6114))
{var c = cljs.core._nth.call(null,chunk__6113,i__6115);
remove_class_BANG_.call(null,elem__$1,c);
{
var G__6121 = seq__6112;
var G__6122 = chunk__6113;
var G__6123 = count__6114;
var G__6124 = (i__6115 + 1);
seq__6112 = G__6121;
chunk__6113 = G__6122;
count__6114 = G__6123;
i__6115 = G__6124;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6112);
if(temp__4092__auto__)
{var seq__6112__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6112__$1))
{var c__4479__auto__ = cljs.core.chunk_first.call(null,seq__6112__$1);
{
var G__6125 = cljs.core.chunk_rest.call(null,seq__6112__$1);
var G__6126 = c__4479__auto__;
var G__6127 = cljs.core.count.call(null,c__4479__auto__);
var G__6128 = 0;
seq__6112 = G__6125;
chunk__6113 = G__6126;
count__6114 = G__6127;
i__6115 = G__6128;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6112__$1);
remove_class_BANG_.call(null,elem__$1,c);
{
var G__6129 = cljs.core.next.call(null,seq__6112__$1);
var G__6130 = null;
var G__6131 = 0;
var G__6132 = 0;
seq__6112 = G__6129;
chunk__6113 = G__6130;
count__6114 = G__6131;
i__6115 = G__6132;
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
var G__6120 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6120__delegate.call(this, elem, class$, classes);
};
G__6120.cljs$lang$maxFixedArity = 2;
G__6120.cljs$lang$applyTo = (function (arglist__6133){
var elem = cljs.core.first(arglist__6133);
arglist__6133 = cljs.core.next(arglist__6133);
var class$ = cljs.core.first(arglist__6133);
var classes = cljs.core.rest(arglist__6133);
return G__6120__delegate(elem, class$, classes);
});
G__6120.cljs$core$IFn$_invoke$arity$variadic = G__6120__delegate;
return G__6120;
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
var toggle_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var temp__4090__auto___6134 = elem__$1.classList;
if(cljs.core.truth_(temp__4090__auto___6134))
{var class_list_6135 = temp__4090__auto___6134;
class_list_6135.toggle(class$);
} else
{toggle_class_BANG_.call(null,elem__$1,class$,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_)
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
dommy.attrs.style_str = (function style_str(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__6138){
var vec__6139 = p__6138;
var k = cljs.core.nth.call(null,vec__6139,0,null);
var v = cljs.core.nth.call(null,vec__6139,1,null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var style = elem__$1.style;
var seq__6148_6154 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
var chunk__6149_6155 = null;
var count__6150_6156 = 0;
var i__6151_6157 = 0;
while(true){
if((i__6151_6157 < count__6150_6156))
{var vec__6152_6158 = cljs.core._nth.call(null,chunk__6149_6155,i__6151_6157);
var k_6159 = cljs.core.nth.call(null,vec__6152_6158,0,null);
var v_6160 = cljs.core.nth.call(null,vec__6152_6158,1,null);
(style[cljs.core.name.call(null,k_6159)] = v_6160);
{
var G__6161 = seq__6148_6154;
var G__6162 = chunk__6149_6155;
var G__6163 = count__6150_6156;
var G__6164 = (i__6151_6157 + 1);
seq__6148_6154 = G__6161;
chunk__6149_6155 = G__6162;
count__6150_6156 = G__6163;
i__6151_6157 = G__6164;
continue;
}
} else
{var temp__4092__auto___6165 = cljs.core.seq.call(null,seq__6148_6154);
if(temp__4092__auto___6165)
{var seq__6148_6166__$1 = temp__4092__auto___6165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6148_6166__$1))
{var c__4479__auto___6167 = cljs.core.chunk_first.call(null,seq__6148_6166__$1);
{
var G__6168 = cljs.core.chunk_rest.call(null,seq__6148_6166__$1);
var G__6169 = c__4479__auto___6167;
var G__6170 = cljs.core.count.call(null,c__4479__auto___6167);
var G__6171 = 0;
seq__6148_6154 = G__6168;
chunk__6149_6155 = G__6169;
count__6150_6156 = G__6170;
i__6151_6157 = G__6171;
continue;
}
} else
{var vec__6153_6172 = cljs.core.first.call(null,seq__6148_6166__$1);
var k_6173 = cljs.core.nth.call(null,vec__6153_6172,0,null);
var v_6174 = cljs.core.nth.call(null,vec__6153_6172,1,null);
(style[cljs.core.name.call(null,k_6173)] = v_6174);
{
var G__6175 = cljs.core.next.call(null,seq__6148_6166__$1);
var G__6176 = null;
var G__6177 = 0;
var G__6178 = 0;
seq__6148_6154 = G__6175;
chunk__6149_6155 = G__6176;
count__6150_6156 = G__6177;
i__6151_6157 = G__6178;
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
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_style_BANG___delegate.call(this, elem, kvs);
};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6179){
var elem = cljs.core.first(arglist__6179);
var kvs = cljs.core.rest(arglist__6179);
return set_style_BANG___delegate(elem, kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){
if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__6186_6192 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
var chunk__6187_6193 = null;
var count__6188_6194 = 0;
var i__6189_6195 = 0;
while(true){
if((i__6189_6195 < count__6188_6194))
{var vec__6190_6196 = cljs.core._nth.call(null,chunk__6187_6193,i__6189_6195);
var k_6197 = cljs.core.nth.call(null,vec__6190_6196,0,null);
var v_6198 = cljs.core.nth.call(null,vec__6190_6196,1,null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_6197,[cljs.core.str(v_6198),cljs.core.str("px")].join(''));
{
var G__6199 = seq__6186_6192;
var G__6200 = chunk__6187_6193;
var G__6201 = count__6188_6194;
var G__6202 = (i__6189_6195 + 1);
seq__6186_6192 = G__6199;
chunk__6187_6193 = G__6200;
count__6188_6194 = G__6201;
i__6189_6195 = G__6202;
continue;
}
} else
{var temp__4092__auto___6203 = cljs.core.seq.call(null,seq__6186_6192);
if(temp__4092__auto___6203)
{var seq__6186_6204__$1 = temp__4092__auto___6203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6186_6204__$1))
{var c__4479__auto___6205 = cljs.core.chunk_first.call(null,seq__6186_6204__$1);
{
var G__6206 = cljs.core.chunk_rest.call(null,seq__6186_6204__$1);
var G__6207 = c__4479__auto___6205;
var G__6208 = cljs.core.count.call(null,c__4479__auto___6205);
var G__6209 = 0;
seq__6186_6192 = G__6206;
chunk__6187_6193 = G__6207;
count__6188_6194 = G__6208;
i__6189_6195 = G__6209;
continue;
}
} else
{var vec__6191_6210 = cljs.core.first.call(null,seq__6186_6204__$1);
var k_6211 = cljs.core.nth.call(null,vec__6191_6210,0,null);
var v_6212 = cljs.core.nth.call(null,vec__6191_6210,1,null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_6211,[cljs.core.str(v_6212),cljs.core.str("px")].join(''));
{
var G__6213 = cljs.core.next.call(null,seq__6186_6204__$1);
var G__6214 = null;
var G__6215 = 0;
var G__6216 = 0;
seq__6186_6192 = G__6213;
chunk__6187_6193 = G__6214;
count__6188_6194 = G__6215;
i__6189_6195 = G__6216;
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
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_px_BANG___delegate.call(this, elem, kvs);
};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6217){
var elem = cljs.core.first(arglist__6217);
var kvs = cljs.core.rest(arglist__6217);
return set_px_BANG___delegate(elem, kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){
var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);
if(cljs.core.seq.call(null,pixels))
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
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__6226 = dommy.template.__GT_node_like.call(null,elem);
(G__6226[cljs.core.name.call(null,k)] = v);
return G__6226;
} else
{var G__6227 = dommy.template.__GT_node_like.call(null,elem);
G__6227.setAttribute(cljs.core.name.call(null,k),(((k === "\uFDD0:style"))?dommy.attrs.style_str.call(null,v):v));
return G__6227;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6234__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__6228_6235 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));
var chunk__6229_6236 = null;
var count__6230_6237 = 0;
var i__6231_6238 = 0;
while(true){
if((i__6231_6238 < count__6230_6237))
{var vec__6232_6239 = cljs.core._nth.call(null,chunk__6229_6236,i__6231_6238);
var k_6240__$1 = cljs.core.nth.call(null,vec__6232_6239,0,null);
var v_6241__$1 = cljs.core.nth.call(null,vec__6232_6239,1,null);
set_attr_BANG_.call(null,elem__$1,k_6240__$1,v_6241__$1);
{
var G__6242 = seq__6228_6235;
var G__6243 = chunk__6229_6236;
var G__6244 = count__6230_6237;
var G__6245 = (i__6231_6238 + 1);
seq__6228_6235 = G__6242;
chunk__6229_6236 = G__6243;
count__6230_6237 = G__6244;
i__6231_6238 = G__6245;
continue;
}
} else
{var temp__4092__auto___6246 = cljs.core.seq.call(null,seq__6228_6235);
if(temp__4092__auto___6246)
{var seq__6228_6247__$1 = temp__4092__auto___6246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6228_6247__$1))
{var c__4479__auto___6248 = cljs.core.chunk_first.call(null,seq__6228_6247__$1);
{
var G__6249 = cljs.core.chunk_rest.call(null,seq__6228_6247__$1);
var G__6250 = c__4479__auto___6248;
var G__6251 = cljs.core.count.call(null,c__4479__auto___6248);
var G__6252 = 0;
seq__6228_6235 = G__6249;
chunk__6229_6236 = G__6250;
count__6230_6237 = G__6251;
i__6231_6238 = G__6252;
continue;
}
} else
{var vec__6233_6253 = cljs.core.first.call(null,seq__6228_6247__$1);
var k_6254__$1 = cljs.core.nth.call(null,vec__6233_6253,0,null);
var v_6255__$1 = cljs.core.nth.call(null,vec__6233_6253,1,null);
set_attr_BANG_.call(null,elem__$1,k_6254__$1,v_6255__$1);
{
var G__6256 = cljs.core.next.call(null,seq__6228_6247__$1);
var G__6257 = null;
var G__6258 = 0;
var G__6259 = 0;
seq__6228_6235 = G__6256;
chunk__6229_6236 = G__6257;
count__6230_6237 = G__6258;
i__6231_6238 = G__6259;
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
var G__6234 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6234__delegate.call(this, elem, k, v, kvs);
};
G__6234.cljs$lang$maxFixedArity = 3;
G__6234.cljs$lang$applyTo = (function (arglist__6260){
var elem = cljs.core.first(arglist__6260);
arglist__6260 = cljs.core.next(arglist__6260);
var k = cljs.core.first(arglist__6260);
arglist__6260 = cljs.core.next(arglist__6260);
var v = cljs.core.first(arglist__6260);
var kvs = cljs.core.rest(arglist__6260);
return G__6234__delegate(elem, k, v, kvs);
});
G__6234.cljs$core$IFn$_invoke$arity$variadic = G__6234__delegate;
return G__6234;
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
var remove_attr_BANG___2 = (function (elem,k){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray(["\uFDD0:class",null,"\uFDD0:classes",null], true).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__6269__delegate = function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__6265_6270 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__6266_6271 = null;
var count__6267_6272 = 0;
var i__6268_6273 = 0;
while(true){
if((i__6268_6273 < count__6267_6272))
{var k_6274__$1 = cljs.core._nth.call(null,chunk__6266_6271,i__6268_6273);
remove_attr_BANG_.call(null,elem__$1,k_6274__$1);
{
var G__6275 = seq__6265_6270;
var G__6276 = chunk__6266_6271;
var G__6277 = count__6267_6272;
var G__6278 = (i__6268_6273 + 1);
seq__6265_6270 = G__6275;
chunk__6266_6271 = G__6276;
count__6267_6272 = G__6277;
i__6268_6273 = G__6278;
continue;
}
} else
{var temp__4092__auto___6279 = cljs.core.seq.call(null,seq__6265_6270);
if(temp__4092__auto___6279)
{var seq__6265_6280__$1 = temp__4092__auto___6279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6265_6280__$1))
{var c__4479__auto___6281 = cljs.core.chunk_first.call(null,seq__6265_6280__$1);
{
var G__6282 = cljs.core.chunk_rest.call(null,seq__6265_6280__$1);
var G__6283 = c__4479__auto___6281;
var G__6284 = cljs.core.count.call(null,c__4479__auto___6281);
var G__6285 = 0;
seq__6265_6270 = G__6282;
chunk__6266_6271 = G__6283;
count__6267_6272 = G__6284;
i__6268_6273 = G__6285;
continue;
}
} else
{var k_6286__$1 = cljs.core.first.call(null,seq__6265_6280__$1);
remove_attr_BANG_.call(null,elem__$1,k_6286__$1);
{
var G__6287 = cljs.core.next.call(null,seq__6265_6280__$1);
var G__6288 = null;
var G__6289 = 0;
var G__6290 = 0;
seq__6265_6270 = G__6287;
chunk__6266_6271 = G__6288;
count__6267_6272 = G__6289;
i__6268_6273 = G__6290;
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
var G__6269 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6269__delegate.call(this, elem, k, ks);
};
G__6269.cljs$lang$maxFixedArity = 2;
G__6269.cljs$lang$applyTo = (function (arglist__6291){
var elem = cljs.core.first(arglist__6291);
arglist__6291 = cljs.core.next(arglist__6291);
var k = cljs.core.first(arglist__6291);
var ks = cljs.core.rest(arglist__6291);
return G__6269__delegate(elem, k, ks);
});
G__6269.cljs$core$IFn$_invoke$arity$variadic = G__6269__delegate;
return G__6269;
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
dommy.attrs.attr = (function attr(elem,k){
if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){
return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
var G__6293 = dommy.template.__GT_node_like.call(null,elem);
G__6293.style.display = ((show_QMARK_)?"":"none");
return G__6293;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){
var G__6295 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__6295,false);
return G__6295;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){
var G__6297 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__6297,true);
return G__6297;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){
return cljs.core.js__GT_clj.call(null,(function (){var G__6299 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();
(G__6299["constructor"] = Object);
return G__6299;
})(),"\uFDD0:keywordize-keys",true);
});
