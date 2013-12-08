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
{if(cljs.core.truth_(dommy.attrs.class_match_QMARK_(class_name,class$,i)))
{return i;
} else
{{
var G__14804 = (i + class$.length);
start_from = G__14804;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index(class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
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
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var classes__$1 = clojure.string.trim(cljs.core.name(classes));if(cljs.core.truth_(cljs.core.seq(classes__$1)))
{var temp__4090__auto___14829 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14829))
{var class_list_14830 = temp__4090__auto___14829;var seq__14817_14831 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__14818_14832 = null;var count__14819_14833 = 0;var i__14820_14834 = 0;while(true){
if((i__14820_14834 < count__14819_14833))
{var class_14835 = chunk__14818_14832.cljs$core$IIndexed$_nth$arity$2(null,i__14820_14834);class_list_14830.add(class_14835);
{
var G__14836 = seq__14817_14831;
var G__14837 = chunk__14818_14832;
var G__14838 = count__14819_14833;
var G__14839 = (i__14820_14834 + 1);
seq__14817_14831 = G__14836;
chunk__14818_14832 = G__14837;
count__14819_14833 = G__14838;
i__14820_14834 = G__14839;
continue;
}
} else
{var temp__4092__auto___14840 = cljs.core.seq(seq__14817_14831);if(cljs.core.truth_(temp__4092__auto___14840))
{var seq__14817_14841__$1 = temp__4092__auto___14840;if(cljs.core.chunked_seq_QMARK_(seq__14817_14841__$1))
{var c__4010__auto___14842 = cljs.core.chunk_first(seq__14817_14841__$1);{
var G__14843 = cljs.core.chunk_rest(seq__14817_14841__$1);
var G__14844 = c__4010__auto___14842;
var G__14845 = cljs.core.count(c__4010__auto___14842);
var G__14846 = 0;
seq__14817_14831 = G__14843;
chunk__14818_14832 = G__14844;
count__14819_14833 = G__14845;
i__14820_14834 = G__14846;
continue;
}
} else
{var class_14847 = cljs.core.first(seq__14817_14841__$1);class_list_14830.add(class_14847);
{
var G__14848 = cljs.core.next(seq__14817_14841__$1);
var G__14849 = null;
var G__14850 = 0;
var G__14851 = 0;
seq__14817_14831 = G__14848;
chunk__14818_14832 = G__14849;
count__14819_14833 = G__14850;
i__14820_14834 = G__14851;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_14852 = elem__$1.className;var seq__14821_14853 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__14822_14854 = null;var count__14823_14855 = 0;var i__14824_14856 = 0;while(true){
if((i__14824_14856 < count__14823_14855))
{var class_14857 = chunk__14822_14854.cljs$core$IIndexed$_nth$arity$2(null,i__14824_14856);if(cljs.core.truth_(dommy.attrs.class_index(class_name_14852,class_14857)))
{} else
{elem__$1.className = (((class_name_14852 === ""))?class_14857:[cljs.core.str(class_name_14852),cljs.core.str(" "),cljs.core.str(class_14857)].join(''));
}
{
var G__14858 = seq__14821_14853;
var G__14859 = chunk__14822_14854;
var G__14860 = count__14823_14855;
var G__14861 = (i__14824_14856 + 1);
seq__14821_14853 = G__14858;
chunk__14822_14854 = G__14859;
count__14823_14855 = G__14860;
i__14824_14856 = G__14861;
continue;
}
} else
{var temp__4092__auto___14862 = cljs.core.seq(seq__14821_14853);if(cljs.core.truth_(temp__4092__auto___14862))
{var seq__14821_14863__$1 = temp__4092__auto___14862;if(cljs.core.chunked_seq_QMARK_(seq__14821_14863__$1))
{var c__4010__auto___14864 = cljs.core.chunk_first(seq__14821_14863__$1);{
var G__14865 = cljs.core.chunk_rest(seq__14821_14863__$1);
var G__14866 = c__4010__auto___14864;
var G__14867 = cljs.core.count(c__4010__auto___14864);
var G__14868 = 0;
seq__14821_14853 = G__14865;
chunk__14822_14854 = G__14866;
count__14823_14855 = G__14867;
i__14824_14856 = G__14868;
continue;
}
} else
{var class_14869 = cljs.core.first(seq__14821_14863__$1);if(cljs.core.truth_(dommy.attrs.class_index(class_name_14852,class_14869)))
{} else
{elem__$1.className = (((class_name_14852 === ""))?class_14869:[cljs.core.str(class_name_14852),cljs.core.str(" "),cljs.core.str(class_14869)].join(''));
}
{
var G__14870 = cljs.core.next(seq__14821_14863__$1);
var G__14871 = null;
var G__14872 = 0;
var G__14873 = 0;
seq__14821_14853 = G__14870;
chunk__14822_14854 = G__14871;
count__14823_14855 = G__14872;
i__14824_14856 = G__14873;
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
var G__14874__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__14825_14875 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__14826_14876 = null;var count__14827_14877 = 0;var i__14828_14878 = 0;while(true){
if((i__14828_14878 < count__14827_14877))
{var c_14879 = chunk__14826_14876.cljs$core$IIndexed$_nth$arity$2(null,i__14828_14878);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_14879);
{
var G__14880 = seq__14825_14875;
var G__14881 = chunk__14826_14876;
var G__14882 = count__14827_14877;
var G__14883 = (i__14828_14878 + 1);
seq__14825_14875 = G__14880;
chunk__14826_14876 = G__14881;
count__14827_14877 = G__14882;
i__14828_14878 = G__14883;
continue;
}
} else
{var temp__4092__auto___14884 = cljs.core.seq(seq__14825_14875);if(cljs.core.truth_(temp__4092__auto___14884))
{var seq__14825_14885__$1 = temp__4092__auto___14884;if(cljs.core.chunked_seq_QMARK_(seq__14825_14885__$1))
{var c__4010__auto___14886 = cljs.core.chunk_first(seq__14825_14885__$1);{
var G__14887 = cljs.core.chunk_rest(seq__14825_14885__$1);
var G__14888 = c__4010__auto___14886;
var G__14889 = cljs.core.count(c__4010__auto___14886);
var G__14890 = 0;
seq__14825_14875 = G__14887;
chunk__14826_14876 = G__14888;
count__14827_14877 = G__14889;
i__14828_14878 = G__14890;
continue;
}
} else
{var c_14891 = cljs.core.first(seq__14825_14885__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_14891);
{
var G__14892 = cljs.core.next(seq__14825_14885__$1);
var G__14893 = null;
var G__14894 = 0;
var G__14895 = 0;
seq__14825_14875 = G__14892;
chunk__14826_14876 = G__14893;
count__14827_14877 = G__14894;
i__14828_14878 = G__14895;
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
var G__14874 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14874__delegate.call(this,elem,classes,more_classes);};
G__14874.cljs$lang$maxFixedArity = 2;
G__14874.cljs$lang$applyTo = (function (arglist__14896){
var elem = cljs.core.first(arglist__14896);
arglist__14896 = cljs.core.next(arglist__14896);
var classes = cljs.core.first(arglist__14896);
var more_classes = cljs.core.rest(arglist__14896);
return G__14874__delegate(elem,classes,more_classes);
});
G__14874.cljs$core$IFn$_invoke$arity$variadic = G__14874__delegate;
return G__14874;
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
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index(class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__14897 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__14897;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___14906 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14906))
{var class_list_14907 = temp__4090__auto___14906;class_list_14907.remove(class$__$1);
} else
{var class_name_14908 = elem__$1.className;var new_class_name_14909 = dommy.attrs.remove_class_str(class_name_14908,class$__$1);if((class_name_14908 === new_class_name_14909))
{} else
{elem__$1.className = new_class_name_14909;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__14910__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__14902 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__14903 = null;var count__14904 = 0;var i__14905 = 0;while(true){
if((i__14905 < count__14904))
{var c = chunk__14903.cljs$core$IIndexed$_nth$arity$2(null,i__14905);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__14911 = seq__14902;
var G__14912 = chunk__14903;
var G__14913 = count__14904;
var G__14914 = (i__14905 + 1);
seq__14902 = G__14911;
chunk__14903 = G__14912;
count__14904 = G__14913;
i__14905 = G__14914;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__14902);if(cljs.core.truth_(temp__4092__auto__))
{var seq__14902__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__14902__$1))
{var c__4010__auto__ = cljs.core.chunk_first(seq__14902__$1);{
var G__14915 = cljs.core.chunk_rest(seq__14902__$1);
var G__14916 = c__4010__auto__;
var G__14917 = cljs.core.count(c__4010__auto__);
var G__14918 = 0;
seq__14902 = G__14915;
chunk__14903 = G__14916;
count__14904 = G__14917;
i__14905 = G__14918;
continue;
}
} else
{var c = cljs.core.first(seq__14902__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__14919 = cljs.core.next(seq__14902__$1);
var G__14920 = null;
var G__14921 = 0;
var G__14922 = 0;
seq__14902 = G__14919;
chunk__14903 = G__14920;
count__14904 = G__14921;
i__14905 = G__14922;
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
var G__14910 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14910__delegate.call(this,elem,class$,classes);};
G__14910.cljs$lang$maxFixedArity = 2;
G__14910.cljs$lang$applyTo = (function (arglist__14923){
var elem = cljs.core.first(arglist__14923);
arglist__14923 = cljs.core.next(arglist__14923);
var class$ = cljs.core.first(arglist__14923);
var classes = cljs.core.rest(arglist__14923);
return G__14910__delegate(elem,class$,classes);
});
G__14910.cljs$core$IFn$_invoke$arity$variadic = G__14910__delegate;
return G__14910;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___14924 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14924))
{var class_list_14925 = temp__4090__auto___14924;class_list_14925.toggle(class$__$1);
} else
{toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,class$__$1,cljs.core.not(dommy.attrs.has_class_QMARK_(elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
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
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14928){var vec__14929 = p__14928;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14929,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14929,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str(":"),cljs.core.str(cljs.core.name(v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var style = elem__$1.style;var seq__14936_14942 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__14937_14943 = null;var count__14938_14944 = 0;var i__14939_14945 = 0;while(true){
if((i__14939_14945 < count__14938_14944))
{var vec__14940_14946 = chunk__14937_14943.cljs$core$IIndexed$_nth$arity$2(null,i__14939_14945);var k_14947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14940_14946,0,null);var v_14948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14940_14946,1,null);(style[cljs.core.name(k_14947)] = v_14948);
{
var G__14949 = seq__14936_14942;
var G__14950 = chunk__14937_14943;
var G__14951 = count__14938_14944;
var G__14952 = (i__14939_14945 + 1);
seq__14936_14942 = G__14949;
chunk__14937_14943 = G__14950;
count__14938_14944 = G__14951;
i__14939_14945 = G__14952;
continue;
}
} else
{var temp__4092__auto___14953 = cljs.core.seq(seq__14936_14942);if(cljs.core.truth_(temp__4092__auto___14953))
{var seq__14936_14954__$1 = temp__4092__auto___14953;if(cljs.core.chunked_seq_QMARK_(seq__14936_14954__$1))
{var c__4010__auto___14955 = cljs.core.chunk_first(seq__14936_14954__$1);{
var G__14956 = cljs.core.chunk_rest(seq__14936_14954__$1);
var G__14957 = c__4010__auto___14955;
var G__14958 = cljs.core.count(c__4010__auto___14955);
var G__14959 = 0;
seq__14936_14942 = G__14956;
chunk__14937_14943 = G__14957;
count__14938_14944 = G__14958;
i__14939_14945 = G__14959;
continue;
}
} else
{var vec__14941_14960 = cljs.core.first(seq__14936_14954__$1);var k_14961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941_14960,0,null);var v_14962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941_14960,1,null);(style[cljs.core.name(k_14961)] = v_14962);
{
var G__14963 = cljs.core.next(seq__14936_14954__$1);
var G__14964 = null;
var G__14965 = 0;
var G__14966 = 0;
seq__14936_14942 = G__14963;
chunk__14937_14943 = G__14964;
count__14938_14944 = G__14965;
i__14939_14945 = G__14966;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14967){
var elem = cljs.core.first(arglist__14967);
var kvs = cljs.core.rest(arglist__14967);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"k","k",-1640531420,null)], 0)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like(elem))[cljs.core.name(k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__14974_14980 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__14975_14981 = null;var count__14976_14982 = 0;var i__14977_14983 = 0;while(true){
if((i__14977_14983 < count__14976_14982))
{var vec__14978_14984 = chunk__14975_14981.cljs$core$IIndexed$_nth$arity$2(null,i__14977_14983);var k_14985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14978_14984,0,null);var v_14986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14978_14984,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_14985,[cljs.core.str(v_14986),cljs.core.str("px")].join('')], 0));
{
var G__14987 = seq__14974_14980;
var G__14988 = chunk__14975_14981;
var G__14989 = count__14976_14982;
var G__14990 = (i__14977_14983 + 1);
seq__14974_14980 = G__14987;
chunk__14975_14981 = G__14988;
count__14976_14982 = G__14989;
i__14977_14983 = G__14990;
continue;
}
} else
{var temp__4092__auto___14991 = cljs.core.seq(seq__14974_14980);if(cljs.core.truth_(temp__4092__auto___14991))
{var seq__14974_14992__$1 = temp__4092__auto___14991;if(cljs.core.chunked_seq_QMARK_(seq__14974_14992__$1))
{var c__4010__auto___14993 = cljs.core.chunk_first(seq__14974_14992__$1);{
var G__14994 = cljs.core.chunk_rest(seq__14974_14992__$1);
var G__14995 = c__4010__auto___14993;
var G__14996 = cljs.core.count(c__4010__auto___14993);
var G__14997 = 0;
seq__14974_14980 = G__14994;
chunk__14975_14981 = G__14995;
count__14976_14982 = G__14996;
i__14977_14983 = G__14997;
continue;
}
} else
{var vec__14979_14998 = cljs.core.first(seq__14974_14992__$1);var k_14999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14979_14998,0,null);var v_15000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14979_14998,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_14999,[cljs.core.str(v_15000),cljs.core.str("px")].join('')], 0));
{
var G__15001 = cljs.core.next(seq__14974_14992__$1);
var G__15002 = null;
var G__15003 = 0;
var G__15004 = 0;
seq__14974_14980 = G__15001;
chunk__14975_14981 = G__15002;
count__14976_14982 = G__15003;
i__14977_14983 = G__15004;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__15005){
var elem = cljs.core.first(arglist__15005);
var kvs = cljs.core.rest(arglist__15005);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style(dommy.template.__GT_node_like(elem),k);if(cljs.core.truth_(cljs.core.seq(pixels)))
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
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.truth_(cljs.core.fn_QMARK_(v)))
{var G__15014 = dommy.template.__GT_node_like(elem);(G__15014[cljs.core.name(k)] = v);
return G__15014;
} else
{var G__15015 = dommy.template.__GT_node_like(elem);G__15015.setAttribute(cljs.core.name(k),(((k === cljs.core.constant$keyword$167))?dommy.attrs.style_str(v):v));
return G__15015;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__15022__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15016_15023 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs)));var chunk__15017_15024 = null;var count__15018_15025 = 0;var i__15019_15026 = 0;while(true){
if((i__15019_15026 < count__15018_15025))
{var vec__15020_15027 = chunk__15017_15024.cljs$core$IIndexed$_nth$arity$2(null,i__15019_15026);var k_15028__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15020_15027,0,null);var v_15029__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15020_15027,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_15028__$1,v_15029__$1);
{
var G__15030 = seq__15016_15023;
var G__15031 = chunk__15017_15024;
var G__15032 = count__15018_15025;
var G__15033 = (i__15019_15026 + 1);
seq__15016_15023 = G__15030;
chunk__15017_15024 = G__15031;
count__15018_15025 = G__15032;
i__15019_15026 = G__15033;
continue;
}
} else
{var temp__4092__auto___15034 = cljs.core.seq(seq__15016_15023);if(cljs.core.truth_(temp__4092__auto___15034))
{var seq__15016_15035__$1 = temp__4092__auto___15034;if(cljs.core.chunked_seq_QMARK_(seq__15016_15035__$1))
{var c__4010__auto___15036 = cljs.core.chunk_first(seq__15016_15035__$1);{
var G__15037 = cljs.core.chunk_rest(seq__15016_15035__$1);
var G__15038 = c__4010__auto___15036;
var G__15039 = cljs.core.count(c__4010__auto___15036);
var G__15040 = 0;
seq__15016_15023 = G__15037;
chunk__15017_15024 = G__15038;
count__15018_15025 = G__15039;
i__15019_15026 = G__15040;
continue;
}
} else
{var vec__15021_15041 = cljs.core.first(seq__15016_15035__$1);var k_15042__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15021_15041,0,null);var v_15043__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15021_15041,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_15042__$1,v_15043__$1);
{
var G__15044 = cljs.core.next(seq__15016_15035__$1);
var G__15045 = null;
var G__15046 = 0;
var G__15047 = 0;
seq__15016_15023 = G__15044;
chunk__15017_15024 = G__15045;
count__15018_15025 = G__15046;
i__15019_15026 = G__15047;
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
var G__15022 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15022__delegate.call(this,elem,k,v,kvs);};
G__15022.cljs$lang$maxFixedArity = 3;
G__15022.cljs$lang$applyTo = (function (arglist__15048){
var elem = cljs.core.first(arglist__15048);
arglist__15048 = cljs.core.next(arglist__15048);
var k = cljs.core.first(arglist__15048);
arglist__15048 = cljs.core.next(arglist__15048);
var v = cljs.core.first(arglist__15048);
var kvs = cljs.core.rest(arglist__15048);
return G__15022__delegate(elem,k,v,kvs);
});
G__15022.cljs$core$IFn$_invoke$arity$variadic = G__15022__delegate;
return G__15022;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$168,null,cljs.core.constant$keyword$169,null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name(k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__15057__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__15053_15058 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__15054_15059 = null;var count__15055_15060 = 0;var i__15056_15061 = 0;while(true){
if((i__15056_15061 < count__15055_15060))
{var k_15062__$1 = chunk__15054_15059.cljs$core$IIndexed$_nth$arity$2(null,i__15056_15061);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_15062__$1);
{
var G__15063 = seq__15053_15058;
var G__15064 = chunk__15054_15059;
var G__15065 = count__15055_15060;
var G__15066 = (i__15056_15061 + 1);
seq__15053_15058 = G__15063;
chunk__15054_15059 = G__15064;
count__15055_15060 = G__15065;
i__15056_15061 = G__15066;
continue;
}
} else
{var temp__4092__auto___15067 = cljs.core.seq(seq__15053_15058);if(cljs.core.truth_(temp__4092__auto___15067))
{var seq__15053_15068__$1 = temp__4092__auto___15067;if(cljs.core.chunked_seq_QMARK_(seq__15053_15068__$1))
{var c__4010__auto___15069 = cljs.core.chunk_first(seq__15053_15068__$1);{
var G__15070 = cljs.core.chunk_rest(seq__15053_15068__$1);
var G__15071 = c__4010__auto___15069;
var G__15072 = cljs.core.count(c__4010__auto___15069);
var G__15073 = 0;
seq__15053_15058 = G__15070;
chunk__15054_15059 = G__15071;
count__15055_15060 = G__15072;
i__15056_15061 = G__15073;
continue;
}
} else
{var k_15074__$1 = cljs.core.first(seq__15053_15068__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_15074__$1);
{
var G__15075 = cljs.core.next(seq__15053_15068__$1);
var G__15076 = null;
var G__15077 = 0;
var G__15078 = 0;
seq__15053_15058 = G__15075;
chunk__15054_15059 = G__15076;
count__15055_15060 = G__15077;
i__15056_15061 = G__15078;
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
var G__15057 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15057__delegate.call(this,elem,k,ks);};
G__15057.cljs$lang$maxFixedArity = 2;
G__15057.cljs$lang$applyTo = (function (arglist__15079){
var elem = cljs.core.first(arglist__15079);
arglist__15079 = cljs.core.next(arglist__15079);
var k = cljs.core.first(arglist__15079);
var ks = cljs.core.rest(arglist__15079);
return G__15057__delegate(elem,k,ks);
});
G__15057.cljs$core$IFn$_invoke$arity$variadic = G__15057__delegate;
return G__15057;
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
{return dommy.template.__GT_node_like(elem).getAttribute(cljs.core.name(k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.attrs.attr(elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k);
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
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like(elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like(elem);toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,dommy.attrs.hidden_QMARK_(elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__15081 = dommy.template.__GT_node_like(elem);G__15081.style.display = ((show_QMARK_)?"":"none");
return G__15081;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__15083 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__15083,false);
return G__15083;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__15085 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__15085,true);
return G__15085;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__15087 = dommy.template.__GT_node_like(elem).getBoundingClientRect();(G__15087["constructor"] = Object);
return G__15087;
})(),cljs.core.array_seq([cljs.core.constant$keyword$111,true], 0));
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);var top = cljs.core.constant$keyword$170.cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect(elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
