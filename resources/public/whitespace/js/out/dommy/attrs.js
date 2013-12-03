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
var G__9651 = (i + class$.length);
start_from = G__9651;
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
{var temp__4090__auto___9676 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9676))
{var class_list_9677 = temp__4090__auto___9676;var seq__9664_9678 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9665_9679 = null;var count__9666_9680 = 0;var i__9667_9681 = 0;while(true){
if((i__9667_9681 < count__9666_9680))
{var class_9682 = cljs.core._nth.call(null,chunk__9665_9679,i__9667_9681);class_list_9677.add(class_9682);
{
var G__9683 = seq__9664_9678;
var G__9684 = chunk__9665_9679;
var G__9685 = count__9666_9680;
var G__9686 = (i__9667_9681 + 1);
seq__9664_9678 = G__9683;
chunk__9665_9679 = G__9684;
count__9666_9680 = G__9685;
i__9667_9681 = G__9686;
continue;
}
} else
{var temp__4092__auto___9687 = cljs.core.seq.call(null,seq__9664_9678);if(cljs.core.truth_(temp__4092__auto___9687))
{var seq__9664_9688__$1 = temp__4092__auto___9687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9664_9688__$1))
{var c__4010__auto___9689 = cljs.core.chunk_first.call(null,seq__9664_9688__$1);{
var G__9690 = cljs.core.chunk_rest.call(null,seq__9664_9688__$1);
var G__9691 = c__4010__auto___9689;
var G__9692 = cljs.core.count.call(null,c__4010__auto___9689);
var G__9693 = 0;
seq__9664_9678 = G__9690;
chunk__9665_9679 = G__9691;
count__9666_9680 = G__9692;
i__9667_9681 = G__9693;
continue;
}
} else
{var class_9694 = cljs.core.first.call(null,seq__9664_9688__$1);class_list_9677.add(class_9694);
{
var G__9695 = cljs.core.next.call(null,seq__9664_9688__$1);
var G__9696 = null;
var G__9697 = 0;
var G__9698 = 0;
seq__9664_9678 = G__9695;
chunk__9665_9679 = G__9696;
count__9666_9680 = G__9697;
i__9667_9681 = G__9698;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_9699 = elem__$1.className;var seq__9668_9700 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9669_9701 = null;var count__9670_9702 = 0;var i__9671_9703 = 0;while(true){
if((i__9671_9703 < count__9670_9702))
{var class_9704 = cljs.core._nth.call(null,chunk__9669_9701,i__9671_9703);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9699,class_9704)))
{} else
{elem__$1.className = (((class_name_9699 === ""))?class_9704:[cljs.core.str(class_name_9699),cljs.core.str(" "),cljs.core.str(class_9704)].join(''));
}
{
var G__9705 = seq__9668_9700;
var G__9706 = chunk__9669_9701;
var G__9707 = count__9670_9702;
var G__9708 = (i__9671_9703 + 1);
seq__9668_9700 = G__9705;
chunk__9669_9701 = G__9706;
count__9670_9702 = G__9707;
i__9671_9703 = G__9708;
continue;
}
} else
{var temp__4092__auto___9709 = cljs.core.seq.call(null,seq__9668_9700);if(cljs.core.truth_(temp__4092__auto___9709))
{var seq__9668_9710__$1 = temp__4092__auto___9709;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9668_9710__$1))
{var c__4010__auto___9711 = cljs.core.chunk_first.call(null,seq__9668_9710__$1);{
var G__9712 = cljs.core.chunk_rest.call(null,seq__9668_9710__$1);
var G__9713 = c__4010__auto___9711;
var G__9714 = cljs.core.count.call(null,c__4010__auto___9711);
var G__9715 = 0;
seq__9668_9700 = G__9712;
chunk__9669_9701 = G__9713;
count__9670_9702 = G__9714;
i__9671_9703 = G__9715;
continue;
}
} else
{var class_9716 = cljs.core.first.call(null,seq__9668_9710__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9699,class_9716)))
{} else
{elem__$1.className = (((class_name_9699 === ""))?class_9716:[cljs.core.str(class_name_9699),cljs.core.str(" "),cljs.core.str(class_9716)].join(''));
}
{
var G__9717 = cljs.core.next.call(null,seq__9668_9710__$1);
var G__9718 = null;
var G__9719 = 0;
var G__9720 = 0;
seq__9668_9700 = G__9717;
chunk__9669_9701 = G__9718;
count__9670_9702 = G__9719;
i__9671_9703 = G__9720;
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
var G__9721__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9672_9722 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__9673_9723 = null;var count__9674_9724 = 0;var i__9675_9725 = 0;while(true){
if((i__9675_9725 < count__9674_9724))
{var c_9726 = cljs.core._nth.call(null,chunk__9673_9723,i__9675_9725);add_class_BANG_.call(null,elem__$1,c_9726);
{
var G__9727 = seq__9672_9722;
var G__9728 = chunk__9673_9723;
var G__9729 = count__9674_9724;
var G__9730 = (i__9675_9725 + 1);
seq__9672_9722 = G__9727;
chunk__9673_9723 = G__9728;
count__9674_9724 = G__9729;
i__9675_9725 = G__9730;
continue;
}
} else
{var temp__4092__auto___9731 = cljs.core.seq.call(null,seq__9672_9722);if(cljs.core.truth_(temp__4092__auto___9731))
{var seq__9672_9732__$1 = temp__4092__auto___9731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9672_9732__$1))
{var c__4010__auto___9733 = cljs.core.chunk_first.call(null,seq__9672_9732__$1);{
var G__9734 = cljs.core.chunk_rest.call(null,seq__9672_9732__$1);
var G__9735 = c__4010__auto___9733;
var G__9736 = cljs.core.count.call(null,c__4010__auto___9733);
var G__9737 = 0;
seq__9672_9722 = G__9734;
chunk__9673_9723 = G__9735;
count__9674_9724 = G__9736;
i__9675_9725 = G__9737;
continue;
}
} else
{var c_9738 = cljs.core.first.call(null,seq__9672_9732__$1);add_class_BANG_.call(null,elem__$1,c_9738);
{
var G__9739 = cljs.core.next.call(null,seq__9672_9732__$1);
var G__9740 = null;
var G__9741 = 0;
var G__9742 = 0;
seq__9672_9722 = G__9739;
chunk__9673_9723 = G__9740;
count__9674_9724 = G__9741;
i__9675_9725 = G__9742;
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
var G__9721 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9721__delegate.call(this,elem,classes,more_classes);};
G__9721.cljs$lang$maxFixedArity = 2;
G__9721.cljs$lang$applyTo = (function (arglist__9743){
var elem = cljs.core.first(arglist__9743);
arglist__9743 = cljs.core.next(arglist__9743);
var classes = cljs.core.first(arglist__9743);
var more_classes = cljs.core.rest(arglist__9743);
return G__9721__delegate(elem,classes,more_classes);
});
G__9721.cljs$core$IFn$_invoke$arity$variadic = G__9721__delegate;
return G__9721;
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
var G__9744 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__9744;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9753 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9753))
{var class_list_9754 = temp__4090__auto___9753;class_list_9754.remove(class$__$1);
} else
{var class_name_9755 = elem__$1.className;var new_class_name_9756 = dommy.attrs.remove_class_str.call(null,class_name_9755,class$__$1);if((class_name_9755 === new_class_name_9756))
{} else
{elem__$1.className = new_class_name_9756;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__9757__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9749 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__9750 = null;var count__9751 = 0;var i__9752 = 0;while(true){
if((i__9752 < count__9751))
{var c = cljs.core._nth.call(null,chunk__9750,i__9752);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9758 = seq__9749;
var G__9759 = chunk__9750;
var G__9760 = count__9751;
var G__9761 = (i__9752 + 1);
seq__9749 = G__9758;
chunk__9750 = G__9759;
count__9751 = G__9760;
i__9752 = G__9761;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9749);if(cljs.core.truth_(temp__4092__auto__))
{var seq__9749__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9749__$1))
{var c__4010__auto__ = cljs.core.chunk_first.call(null,seq__9749__$1);{
var G__9762 = cljs.core.chunk_rest.call(null,seq__9749__$1);
var G__9763 = c__4010__auto__;
var G__9764 = cljs.core.count.call(null,c__4010__auto__);
var G__9765 = 0;
seq__9749 = G__9762;
chunk__9750 = G__9763;
count__9751 = G__9764;
i__9752 = G__9765;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__9749__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9766 = cljs.core.next.call(null,seq__9749__$1);
var G__9767 = null;
var G__9768 = 0;
var G__9769 = 0;
seq__9749 = G__9766;
chunk__9750 = G__9767;
count__9751 = G__9768;
i__9752 = G__9769;
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
var G__9757 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9757__delegate.call(this,elem,class$,classes);};
G__9757.cljs$lang$maxFixedArity = 2;
G__9757.cljs$lang$applyTo = (function (arglist__9770){
var elem = cljs.core.first(arglist__9770);
arglist__9770 = cljs.core.next(arglist__9770);
var class$ = cljs.core.first(arglist__9770);
var classes = cljs.core.rest(arglist__9770);
return G__9757__delegate(elem,class$,classes);
});
G__9757.cljs$core$IFn$_invoke$arity$variadic = G__9757__delegate;
return G__9757;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9771 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9771))
{var class_list_9772 = temp__4090__auto___9771;class_list_9772.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__9775){var vec__9776 = p__9775;var k = cljs.core.nth.call(null,vec__9776,0,null);var v = cljs.core.nth.call(null,vec__9776,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__9783_9789 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9784_9790 = null;var count__9785_9791 = 0;var i__9786_9792 = 0;while(true){
if((i__9786_9792 < count__9785_9791))
{var vec__9787_9793 = cljs.core._nth.call(null,chunk__9784_9790,i__9786_9792);var k_9794 = cljs.core.nth.call(null,vec__9787_9793,0,null);var v_9795 = cljs.core.nth.call(null,vec__9787_9793,1,null);(style[cljs.core.name.call(null,k_9794)] = v_9795);
{
var G__9796 = seq__9783_9789;
var G__9797 = chunk__9784_9790;
var G__9798 = count__9785_9791;
var G__9799 = (i__9786_9792 + 1);
seq__9783_9789 = G__9796;
chunk__9784_9790 = G__9797;
count__9785_9791 = G__9798;
i__9786_9792 = G__9799;
continue;
}
} else
{var temp__4092__auto___9800 = cljs.core.seq.call(null,seq__9783_9789);if(cljs.core.truth_(temp__4092__auto___9800))
{var seq__9783_9801__$1 = temp__4092__auto___9800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9783_9801__$1))
{var c__4010__auto___9802 = cljs.core.chunk_first.call(null,seq__9783_9801__$1);{
var G__9803 = cljs.core.chunk_rest.call(null,seq__9783_9801__$1);
var G__9804 = c__4010__auto___9802;
var G__9805 = cljs.core.count.call(null,c__4010__auto___9802);
var G__9806 = 0;
seq__9783_9789 = G__9803;
chunk__9784_9790 = G__9804;
count__9785_9791 = G__9805;
i__9786_9792 = G__9806;
continue;
}
} else
{var vec__9788_9807 = cljs.core.first.call(null,seq__9783_9801__$1);var k_9808 = cljs.core.nth.call(null,vec__9788_9807,0,null);var v_9809 = cljs.core.nth.call(null,vec__9788_9807,1,null);(style[cljs.core.name.call(null,k_9808)] = v_9809);
{
var G__9810 = cljs.core.next.call(null,seq__9783_9801__$1);
var G__9811 = null;
var G__9812 = 0;
var G__9813 = 0;
seq__9783_9789 = G__9810;
chunk__9784_9790 = G__9811;
count__9785_9791 = G__9812;
i__9786_9792 = G__9813;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__9814){
var elem = cljs.core.first(arglist__9814);
var kvs = cljs.core.rest(arglist__9814);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9821_9827 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9822_9828 = null;var count__9823_9829 = 0;var i__9824_9830 = 0;while(true){
if((i__9824_9830 < count__9823_9829))
{var vec__9825_9831 = cljs.core._nth.call(null,chunk__9822_9828,i__9824_9830);var k_9832 = cljs.core.nth.call(null,vec__9825_9831,0,null);var v_9833 = cljs.core.nth.call(null,vec__9825_9831,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9832,[cljs.core.str(v_9833),cljs.core.str("px")].join(''));
{
var G__9834 = seq__9821_9827;
var G__9835 = chunk__9822_9828;
var G__9836 = count__9823_9829;
var G__9837 = (i__9824_9830 + 1);
seq__9821_9827 = G__9834;
chunk__9822_9828 = G__9835;
count__9823_9829 = G__9836;
i__9824_9830 = G__9837;
continue;
}
} else
{var temp__4092__auto___9838 = cljs.core.seq.call(null,seq__9821_9827);if(cljs.core.truth_(temp__4092__auto___9838))
{var seq__9821_9839__$1 = temp__4092__auto___9838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9821_9839__$1))
{var c__4010__auto___9840 = cljs.core.chunk_first.call(null,seq__9821_9839__$1);{
var G__9841 = cljs.core.chunk_rest.call(null,seq__9821_9839__$1);
var G__9842 = c__4010__auto___9840;
var G__9843 = cljs.core.count.call(null,c__4010__auto___9840);
var G__9844 = 0;
seq__9821_9827 = G__9841;
chunk__9822_9828 = G__9842;
count__9823_9829 = G__9843;
i__9824_9830 = G__9844;
continue;
}
} else
{var vec__9826_9845 = cljs.core.first.call(null,seq__9821_9839__$1);var k_9846 = cljs.core.nth.call(null,vec__9826_9845,0,null);var v_9847 = cljs.core.nth.call(null,vec__9826_9845,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9846,[cljs.core.str(v_9847),cljs.core.str("px")].join(''));
{
var G__9848 = cljs.core.next.call(null,seq__9821_9839__$1);
var G__9849 = null;
var G__9850 = 0;
var G__9851 = 0;
seq__9821_9827 = G__9848;
chunk__9822_9828 = G__9849;
count__9823_9829 = G__9850;
i__9824_9830 = G__9851;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__9852){
var elem = cljs.core.first(arglist__9852);
var kvs = cljs.core.rest(arglist__9852);
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
{var G__9861 = dommy.template.__GT_node_like.call(null,elem);(G__9861[cljs.core.name.call(null,k)] = v);
return G__9861;
} else
{var G__9862 = dommy.template.__GT_node_like.call(null,elem);G__9862.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__9862;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__9869__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9863_9870 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__9864_9871 = null;var count__9865_9872 = 0;var i__9866_9873 = 0;while(true){
if((i__9866_9873 < count__9865_9872))
{var vec__9867_9874 = cljs.core._nth.call(null,chunk__9864_9871,i__9866_9873);var k_9875__$1 = cljs.core.nth.call(null,vec__9867_9874,0,null);var v_9876__$1 = cljs.core.nth.call(null,vec__9867_9874,1,null);set_attr_BANG_.call(null,elem__$1,k_9875__$1,v_9876__$1);
{
var G__9877 = seq__9863_9870;
var G__9878 = chunk__9864_9871;
var G__9879 = count__9865_9872;
var G__9880 = (i__9866_9873 + 1);
seq__9863_9870 = G__9877;
chunk__9864_9871 = G__9878;
count__9865_9872 = G__9879;
i__9866_9873 = G__9880;
continue;
}
} else
{var temp__4092__auto___9881 = cljs.core.seq.call(null,seq__9863_9870);if(cljs.core.truth_(temp__4092__auto___9881))
{var seq__9863_9882__$1 = temp__4092__auto___9881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9863_9882__$1))
{var c__4010__auto___9883 = cljs.core.chunk_first.call(null,seq__9863_9882__$1);{
var G__9884 = cljs.core.chunk_rest.call(null,seq__9863_9882__$1);
var G__9885 = c__4010__auto___9883;
var G__9886 = cljs.core.count.call(null,c__4010__auto___9883);
var G__9887 = 0;
seq__9863_9870 = G__9884;
chunk__9864_9871 = G__9885;
count__9865_9872 = G__9886;
i__9866_9873 = G__9887;
continue;
}
} else
{var vec__9868_9888 = cljs.core.first.call(null,seq__9863_9882__$1);var k_9889__$1 = cljs.core.nth.call(null,vec__9868_9888,0,null);var v_9890__$1 = cljs.core.nth.call(null,vec__9868_9888,1,null);set_attr_BANG_.call(null,elem__$1,k_9889__$1,v_9890__$1);
{
var G__9891 = cljs.core.next.call(null,seq__9863_9882__$1);
var G__9892 = null;
var G__9893 = 0;
var G__9894 = 0;
seq__9863_9870 = G__9891;
chunk__9864_9871 = G__9892;
count__9865_9872 = G__9893;
i__9866_9873 = G__9894;
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
var G__9869 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__9869__delegate.call(this,elem,k,v,kvs);};
G__9869.cljs$lang$maxFixedArity = 3;
G__9869.cljs$lang$applyTo = (function (arglist__9895){
var elem = cljs.core.first(arglist__9895);
arglist__9895 = cljs.core.next(arglist__9895);
var k = cljs.core.first(arglist__9895);
arglist__9895 = cljs.core.next(arglist__9895);
var v = cljs.core.first(arglist__9895);
var kvs = cljs.core.rest(arglist__9895);
return G__9869__delegate(elem,k,v,kvs);
});
G__9869.cljs$core$IFn$_invoke$arity$variadic = G__9869__delegate;
return G__9869;
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
var G__9904__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9900_9905 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__9901_9906 = null;var count__9902_9907 = 0;var i__9903_9908 = 0;while(true){
if((i__9903_9908 < count__9902_9907))
{var k_9909__$1 = cljs.core._nth.call(null,chunk__9901_9906,i__9903_9908);remove_attr_BANG_.call(null,elem__$1,k_9909__$1);
{
var G__9910 = seq__9900_9905;
var G__9911 = chunk__9901_9906;
var G__9912 = count__9902_9907;
var G__9913 = (i__9903_9908 + 1);
seq__9900_9905 = G__9910;
chunk__9901_9906 = G__9911;
count__9902_9907 = G__9912;
i__9903_9908 = G__9913;
continue;
}
} else
{var temp__4092__auto___9914 = cljs.core.seq.call(null,seq__9900_9905);if(cljs.core.truth_(temp__4092__auto___9914))
{var seq__9900_9915__$1 = temp__4092__auto___9914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9900_9915__$1))
{var c__4010__auto___9916 = cljs.core.chunk_first.call(null,seq__9900_9915__$1);{
var G__9917 = cljs.core.chunk_rest.call(null,seq__9900_9915__$1);
var G__9918 = c__4010__auto___9916;
var G__9919 = cljs.core.count.call(null,c__4010__auto___9916);
var G__9920 = 0;
seq__9900_9905 = G__9917;
chunk__9901_9906 = G__9918;
count__9902_9907 = G__9919;
i__9903_9908 = G__9920;
continue;
}
} else
{var k_9921__$1 = cljs.core.first.call(null,seq__9900_9915__$1);remove_attr_BANG_.call(null,elem__$1,k_9921__$1);
{
var G__9922 = cljs.core.next.call(null,seq__9900_9915__$1);
var G__9923 = null;
var G__9924 = 0;
var G__9925 = 0;
seq__9900_9905 = G__9922;
chunk__9901_9906 = G__9923;
count__9902_9907 = G__9924;
i__9903_9908 = G__9925;
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
var G__9904 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9904__delegate.call(this,elem,k,ks);};
G__9904.cljs$lang$maxFixedArity = 2;
G__9904.cljs$lang$applyTo = (function (arglist__9926){
var elem = cljs.core.first(arglist__9926);
arglist__9926 = cljs.core.next(arglist__9926);
var k = cljs.core.first(arglist__9926);
var ks = cljs.core.rest(arglist__9926);
return G__9904__delegate(elem,k,ks);
});
G__9904.cljs$core$IFn$_invoke$arity$variadic = G__9904__delegate;
return G__9904;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__9928 = dommy.template.__GT_node_like.call(null,elem);G__9928.style.display = ((show_QMARK_)?"":"none");
return G__9928;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__9930 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9930,false);
return G__9930;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__9932 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9932,true);
return G__9932;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__9934 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__9934["constructor"] = Object);
return G__9934;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
