// Compiled by ClojureScript 0.0-2202
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3469__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3469__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3469__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_(class_name,class$,i))
{return i;
} else
{{
var G__10769 = (i + class$.length);
start_from = G__10769;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index(class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= 0);
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
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var classes__$1 = clojure.string.trim(cljs.core.name(classes));if(cljs.core.seq(classes__$1))
{var temp__4124__auto___10794 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___10794))
{var class_list_10795 = temp__4124__auto___10794;var seq__10782_10796 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__10783_10797 = null;var count__10784_10798 = 0;var i__10785_10799 = 0;while(true){
if((i__10785_10799 < count__10784_10798))
{var class_10800 = chunk__10783_10797.cljs$core$IIndexed$_nth$arity$2(null,i__10785_10799);class_list_10795.add(class_10800);
{
var G__10801 = seq__10782_10796;
var G__10802 = chunk__10783_10797;
var G__10803 = count__10784_10798;
var G__10804 = (i__10785_10799 + 1);
seq__10782_10796 = G__10801;
chunk__10783_10797 = G__10802;
count__10784_10798 = G__10803;
i__10785_10799 = G__10804;
continue;
}
} else
{var temp__4126__auto___10805 = cljs.core.seq(seq__10782_10796);if(temp__4126__auto___10805)
{var seq__10782_10806__$1 = temp__4126__auto___10805;if(cljs.core.chunked_seq_QMARK_(seq__10782_10806__$1))
{var c__4229__auto___10807 = cljs.core.chunk_first(seq__10782_10806__$1);{
var G__10808 = cljs.core.chunk_rest(seq__10782_10806__$1);
var G__10809 = c__4229__auto___10807;
var G__10810 = cljs.core.count(c__4229__auto___10807);
var G__10811 = 0;
seq__10782_10796 = G__10808;
chunk__10783_10797 = G__10809;
count__10784_10798 = G__10810;
i__10785_10799 = G__10811;
continue;
}
} else
{var class_10812 = cljs.core.first(seq__10782_10806__$1);class_list_10795.add(class_10812);
{
var G__10813 = cljs.core.next(seq__10782_10806__$1);
var G__10814 = null;
var G__10815 = 0;
var G__10816 = 0;
seq__10782_10796 = G__10813;
chunk__10783_10797 = G__10814;
count__10784_10798 = G__10815;
i__10785_10799 = G__10816;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_10817 = elem__$1.className;var seq__10786_10818 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__10787_10819 = null;var count__10788_10820 = 0;var i__10789_10821 = 0;while(true){
if((i__10789_10821 < count__10788_10820))
{var class_10822 = chunk__10787_10819.cljs$core$IIndexed$_nth$arity$2(null,i__10789_10821);if(cljs.core.truth_(dommy.attrs.class_index(class_name_10817,class_10822)))
{} else
{elem__$1.className = (((class_name_10817 === ""))?class_10822:[cljs.core.str(class_name_10817),cljs.core.str(" "),cljs.core.str(class_10822)].join(''));
}
{
var G__10823 = seq__10786_10818;
var G__10824 = chunk__10787_10819;
var G__10825 = count__10788_10820;
var G__10826 = (i__10789_10821 + 1);
seq__10786_10818 = G__10823;
chunk__10787_10819 = G__10824;
count__10788_10820 = G__10825;
i__10789_10821 = G__10826;
continue;
}
} else
{var temp__4126__auto___10827 = cljs.core.seq(seq__10786_10818);if(temp__4126__auto___10827)
{var seq__10786_10828__$1 = temp__4126__auto___10827;if(cljs.core.chunked_seq_QMARK_(seq__10786_10828__$1))
{var c__4229__auto___10829 = cljs.core.chunk_first(seq__10786_10828__$1);{
var G__10830 = cljs.core.chunk_rest(seq__10786_10828__$1);
var G__10831 = c__4229__auto___10829;
var G__10832 = cljs.core.count(c__4229__auto___10829);
var G__10833 = 0;
seq__10786_10818 = G__10830;
chunk__10787_10819 = G__10831;
count__10788_10820 = G__10832;
i__10789_10821 = G__10833;
continue;
}
} else
{var class_10834 = cljs.core.first(seq__10786_10828__$1);if(cljs.core.truth_(dommy.attrs.class_index(class_name_10817,class_10834)))
{} else
{elem__$1.className = (((class_name_10817 === ""))?class_10834:[cljs.core.str(class_name_10817),cljs.core.str(" "),cljs.core.str(class_10834)].join(''));
}
{
var G__10835 = cljs.core.next(seq__10786_10828__$1);
var G__10836 = null;
var G__10837 = 0;
var G__10838 = 0;
seq__10786_10818 = G__10835;
chunk__10787_10819 = G__10836;
count__10788_10820 = G__10837;
i__10789_10821 = G__10838;
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
var G__10839__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10790_10840 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__10791_10841 = null;var count__10792_10842 = 0;var i__10793_10843 = 0;while(true){
if((i__10793_10843 < count__10792_10842))
{var c_10844 = chunk__10791_10841.cljs$core$IIndexed$_nth$arity$2(null,i__10793_10843);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_10844);
{
var G__10845 = seq__10790_10840;
var G__10846 = chunk__10791_10841;
var G__10847 = count__10792_10842;
var G__10848 = (i__10793_10843 + 1);
seq__10790_10840 = G__10845;
chunk__10791_10841 = G__10846;
count__10792_10842 = G__10847;
i__10793_10843 = G__10848;
continue;
}
} else
{var temp__4126__auto___10849 = cljs.core.seq(seq__10790_10840);if(temp__4126__auto___10849)
{var seq__10790_10850__$1 = temp__4126__auto___10849;if(cljs.core.chunked_seq_QMARK_(seq__10790_10850__$1))
{var c__4229__auto___10851 = cljs.core.chunk_first(seq__10790_10850__$1);{
var G__10852 = cljs.core.chunk_rest(seq__10790_10850__$1);
var G__10853 = c__4229__auto___10851;
var G__10854 = cljs.core.count(c__4229__auto___10851);
var G__10855 = 0;
seq__10790_10840 = G__10852;
chunk__10791_10841 = G__10853;
count__10792_10842 = G__10854;
i__10793_10843 = G__10855;
continue;
}
} else
{var c_10856 = cljs.core.first(seq__10790_10850__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_10856);
{
var G__10857 = cljs.core.next(seq__10790_10850__$1);
var G__10858 = null;
var G__10859 = 0;
var G__10860 = 0;
seq__10790_10840 = G__10857;
chunk__10791_10841 = G__10858;
count__10792_10842 = G__10859;
i__10793_10843 = G__10860;
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
var G__10839 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10839__delegate.call(this,elem,classes,more_classes);};
G__10839.cljs$lang$maxFixedArity = 2;
G__10839.cljs$lang$applyTo = (function (arglist__10861){
var elem = cljs.core.first(arglist__10861);
arglist__10861 = cljs.core.next(arglist__10861);
var classes = cljs.core.first(arglist__10861);
var more_classes = cljs.core.rest(arglist__10861);
return G__10839__delegate(elem,classes,more_classes);
});
G__10839.cljs$core$IFn$_invoke$arity$variadic = G__10839__delegate;
return G__10839;
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
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index(class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__10862 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__10862;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4124__auto___10871 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___10871))
{var class_list_10872 = temp__4124__auto___10871;class_list_10872.remove(class$__$1);
} else
{var class_name_10873 = elem__$1.className;var new_class_name_10874 = dommy.attrs.remove_class_str(class_name_10873,class$__$1);if((class_name_10873 === new_class_name_10874))
{} else
{elem__$1.className = new_class_name_10874;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__10875__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10867 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__10868 = null;var count__10869 = 0;var i__10870 = 0;while(true){
if((i__10870 < count__10869))
{var c = chunk__10868.cljs$core$IIndexed$_nth$arity$2(null,i__10870);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__10876 = seq__10867;
var G__10877 = chunk__10868;
var G__10878 = count__10869;
var G__10879 = (i__10870 + 1);
seq__10867 = G__10876;
chunk__10868 = G__10877;
count__10869 = G__10878;
i__10870 = G__10879;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__10867);if(temp__4126__auto__)
{var seq__10867__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10867__$1))
{var c__4229__auto__ = cljs.core.chunk_first(seq__10867__$1);{
var G__10880 = cljs.core.chunk_rest(seq__10867__$1);
var G__10881 = c__4229__auto__;
var G__10882 = cljs.core.count(c__4229__auto__);
var G__10883 = 0;
seq__10867 = G__10880;
chunk__10868 = G__10881;
count__10869 = G__10882;
i__10870 = G__10883;
continue;
}
} else
{var c = cljs.core.first(seq__10867__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__10884 = cljs.core.next(seq__10867__$1);
var G__10885 = null;
var G__10886 = 0;
var G__10887 = 0;
seq__10867 = G__10884;
chunk__10868 = G__10885;
count__10869 = G__10886;
i__10870 = G__10887;
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
var G__10875 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10875__delegate.call(this,elem,class$,classes);};
G__10875.cljs$lang$maxFixedArity = 2;
G__10875.cljs$lang$applyTo = (function (arglist__10888){
var elem = cljs.core.first(arglist__10888);
arglist__10888 = cljs.core.next(arglist__10888);
var class$ = cljs.core.first(arglist__10888);
var classes = cljs.core.rest(arglist__10888);
return G__10875__delegate(elem,class$,classes);
});
G__10875.cljs$core$IFn$_invoke$arity$variadic = G__10875__delegate;
return G__10875;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4124__auto___10889 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___10889))
{var class_list_10890 = temp__4124__auto___10889;class_list_10890.toggle(class$__$1);
} else
{toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_(elem__$1,class$__$1)));
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
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10893){var vec__10894 = p__10893;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10894,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10894,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str(":"),cljs.core.str(cljs.core.name(v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like(elem);var style = elem__$1.style;var seq__10901_10907 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__10902_10908 = null;var count__10903_10909 = 0;var i__10904_10910 = 0;while(true){
if((i__10904_10910 < count__10903_10909))
{var vec__10905_10911 = chunk__10902_10908.cljs$core$IIndexed$_nth$arity$2(null,i__10904_10910);var k_10912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10905_10911,0,null);var v_10913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10905_10911,1,null);(style[cljs.core.name(k_10912)] = v_10913);
{
var G__10914 = seq__10901_10907;
var G__10915 = chunk__10902_10908;
var G__10916 = count__10903_10909;
var G__10917 = (i__10904_10910 + 1);
seq__10901_10907 = G__10914;
chunk__10902_10908 = G__10915;
count__10903_10909 = G__10916;
i__10904_10910 = G__10917;
continue;
}
} else
{var temp__4126__auto___10918 = cljs.core.seq(seq__10901_10907);if(temp__4126__auto___10918)
{var seq__10901_10919__$1 = temp__4126__auto___10918;if(cljs.core.chunked_seq_QMARK_(seq__10901_10919__$1))
{var c__4229__auto___10920 = cljs.core.chunk_first(seq__10901_10919__$1);{
var G__10921 = cljs.core.chunk_rest(seq__10901_10919__$1);
var G__10922 = c__4229__auto___10920;
var G__10923 = cljs.core.count(c__4229__auto___10920);
var G__10924 = 0;
seq__10901_10907 = G__10921;
chunk__10902_10908 = G__10922;
count__10903_10909 = G__10923;
i__10904_10910 = G__10924;
continue;
}
} else
{var vec__10906_10925 = cljs.core.first(seq__10901_10919__$1);var k_10926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10906_10925,0,null);var v_10927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10906_10925,1,null);(style[cljs.core.name(k_10926)] = v_10927);
{
var G__10928 = cljs.core.next(seq__10901_10919__$1);
var G__10929 = null;
var G__10930 = 0;
var G__10931 = 0;
seq__10901_10907 = G__10928;
chunk__10902_10908 = G__10929;
count__10903_10909 = G__10930;
i__10904_10910 = G__10931;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10932){
var elem = cljs.core.first(arglist__10932);
var kvs = cljs.core.rest(arglist__10932);
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
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10939_10945 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__10940_10946 = null;var count__10941_10947 = 0;var i__10942_10948 = 0;while(true){
if((i__10942_10948 < count__10941_10947))
{var vec__10943_10949 = chunk__10940_10946.cljs$core$IIndexed$_nth$arity$2(null,i__10942_10948);var k_10950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10943_10949,0,null);var v_10951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10943_10949,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_10950,[cljs.core.str(v_10951),cljs.core.str("px")].join('')], 0));
{
var G__10952 = seq__10939_10945;
var G__10953 = chunk__10940_10946;
var G__10954 = count__10941_10947;
var G__10955 = (i__10942_10948 + 1);
seq__10939_10945 = G__10952;
chunk__10940_10946 = G__10953;
count__10941_10947 = G__10954;
i__10942_10948 = G__10955;
continue;
}
} else
{var temp__4126__auto___10956 = cljs.core.seq(seq__10939_10945);if(temp__4126__auto___10956)
{var seq__10939_10957__$1 = temp__4126__auto___10956;if(cljs.core.chunked_seq_QMARK_(seq__10939_10957__$1))
{var c__4229__auto___10958 = cljs.core.chunk_first(seq__10939_10957__$1);{
var G__10959 = cljs.core.chunk_rest(seq__10939_10957__$1);
var G__10960 = c__4229__auto___10958;
var G__10961 = cljs.core.count(c__4229__auto___10958);
var G__10962 = 0;
seq__10939_10945 = G__10959;
chunk__10940_10946 = G__10960;
count__10941_10947 = G__10961;
i__10942_10948 = G__10962;
continue;
}
} else
{var vec__10944_10963 = cljs.core.first(seq__10939_10957__$1);var k_10964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10944_10963,0,null);var v_10965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10944_10963,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_10964,[cljs.core.str(v_10965),cljs.core.str("px")].join('')], 0));
{
var G__10966 = cljs.core.next(seq__10939_10957__$1);
var G__10967 = null;
var G__10968 = 0;
var G__10969 = 0;
seq__10939_10945 = G__10966;
chunk__10940_10946 = G__10967;
count__10941_10947 = G__10968;
i__10942_10948 = G__10969;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__10970){
var elem = cljs.core.first(arglist__10970);
var kvs = cljs.core.rest(arglist__10970);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style(dommy.template.__GT_node_like(elem),k);if(cljs.core.seq(pixels))
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
{if(cljs.core.fn_QMARK_(v))
{var G__10979 = dommy.template.__GT_node_like(elem);(G__10979[cljs.core.name(k)] = v);
return G__10979;
} else
{var G__10980 = dommy.template.__GT_node_like(elem);G__10980.setAttribute(cljs.core.name(k),(((k === cljs.core.constant$keyword$145))?dommy.attrs.style_str(v):v));
return G__10980;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__10987__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10981_10988 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs)));var chunk__10982_10989 = null;var count__10983_10990 = 0;var i__10984_10991 = 0;while(true){
if((i__10984_10991 < count__10983_10990))
{var vec__10985_10992 = chunk__10982_10989.cljs$core$IIndexed$_nth$arity$2(null,i__10984_10991);var k_10993__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10985_10992,0,null);var v_10994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10985_10992,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_10993__$1,v_10994__$1);
{
var G__10995 = seq__10981_10988;
var G__10996 = chunk__10982_10989;
var G__10997 = count__10983_10990;
var G__10998 = (i__10984_10991 + 1);
seq__10981_10988 = G__10995;
chunk__10982_10989 = G__10996;
count__10983_10990 = G__10997;
i__10984_10991 = G__10998;
continue;
}
} else
{var temp__4126__auto___10999 = cljs.core.seq(seq__10981_10988);if(temp__4126__auto___10999)
{var seq__10981_11000__$1 = temp__4126__auto___10999;if(cljs.core.chunked_seq_QMARK_(seq__10981_11000__$1))
{var c__4229__auto___11001 = cljs.core.chunk_first(seq__10981_11000__$1);{
var G__11002 = cljs.core.chunk_rest(seq__10981_11000__$1);
var G__11003 = c__4229__auto___11001;
var G__11004 = cljs.core.count(c__4229__auto___11001);
var G__11005 = 0;
seq__10981_10988 = G__11002;
chunk__10982_10989 = G__11003;
count__10983_10990 = G__11004;
i__10984_10991 = G__11005;
continue;
}
} else
{var vec__10986_11006 = cljs.core.first(seq__10981_11000__$1);var k_11007__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10986_11006,0,null);var v_11008__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10986_11006,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_11007__$1,v_11008__$1);
{
var G__11009 = cljs.core.next(seq__10981_11000__$1);
var G__11010 = null;
var G__11011 = 0;
var G__11012 = 0;
seq__10981_10988 = G__11009;
chunk__10982_10989 = G__11010;
count__10983_10990 = G__11011;
i__10984_10991 = G__11012;
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
var G__10987 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__10987__delegate.call(this,elem,k,v,kvs);};
G__10987.cljs$lang$maxFixedArity = 3;
G__10987.cljs$lang$applyTo = (function (arglist__11013){
var elem = cljs.core.first(arglist__11013);
arglist__11013 = cljs.core.next(arglist__11013);
var k = cljs.core.first(arglist__11013);
arglist__11013 = cljs.core.next(arglist__11013);
var v = cljs.core.first(arglist__11013);
var kvs = cljs.core.rest(arglist__11013);
return G__10987__delegate(elem,k,v,kvs);
});
G__10987.cljs$core$IFn$_invoke$arity$variadic = G__10987__delegate;
return G__10987;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$146,null,cljs.core.constant$keyword$147,null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name(k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__11022__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__11018_11023 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__11019_11024 = null;var count__11020_11025 = 0;var i__11021_11026 = 0;while(true){
if((i__11021_11026 < count__11020_11025))
{var k_11027__$1 = chunk__11019_11024.cljs$core$IIndexed$_nth$arity$2(null,i__11021_11026);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_11027__$1);
{
var G__11028 = seq__11018_11023;
var G__11029 = chunk__11019_11024;
var G__11030 = count__11020_11025;
var G__11031 = (i__11021_11026 + 1);
seq__11018_11023 = G__11028;
chunk__11019_11024 = G__11029;
count__11020_11025 = G__11030;
i__11021_11026 = G__11031;
continue;
}
} else
{var temp__4126__auto___11032 = cljs.core.seq(seq__11018_11023);if(temp__4126__auto___11032)
{var seq__11018_11033__$1 = temp__4126__auto___11032;if(cljs.core.chunked_seq_QMARK_(seq__11018_11033__$1))
{var c__4229__auto___11034 = cljs.core.chunk_first(seq__11018_11033__$1);{
var G__11035 = cljs.core.chunk_rest(seq__11018_11033__$1);
var G__11036 = c__4229__auto___11034;
var G__11037 = cljs.core.count(c__4229__auto___11034);
var G__11038 = 0;
seq__11018_11023 = G__11035;
chunk__11019_11024 = G__11036;
count__11020_11025 = G__11037;
i__11021_11026 = G__11038;
continue;
}
} else
{var k_11039__$1 = cljs.core.first(seq__11018_11033__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_11039__$1);
{
var G__11040 = cljs.core.next(seq__11018_11033__$1);
var G__11041 = null;
var G__11042 = 0;
var G__11043 = 0;
seq__11018_11023 = G__11040;
chunk__11019_11024 = G__11041;
count__11020_11025 = G__11042;
i__11021_11026 = G__11043;
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
var G__11022 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11022__delegate.call(this,elem,k,ks);};
G__11022.cljs$lang$maxFixedArity = 2;
G__11022.cljs$lang$applyTo = (function (arglist__11044){
var elem = cljs.core.first(arglist__11044);
arglist__11044 = cljs.core.next(arglist__11044);
var k = cljs.core.first(arglist__11044);
var ks = cljs.core.rest(arglist__11044);
return G__11022__delegate(elem,k,ks);
});
G__11022.cljs$core$IFn$_invoke$arity$variadic = G__11022__delegate;
return G__11022;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__11046 = dommy.template.__GT_node_like(elem);G__11046.style.display = ((show_QMARK_)?"":"none");
return G__11046;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__11048 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__11048,false);
return G__11048;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__11050 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__11050,true);
return G__11050;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__11052 = dommy.template.__GT_node_like(elem).getBoundingClientRect();(G__11052["constructor"] = Object);
return G__11052;
})(),cljs.core.array_seq([cljs.core.constant$keyword$111,true], 0));
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);var top = cljs.core.constant$keyword$148.cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect(elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
