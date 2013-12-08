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
var G__9677 = (i + class$.length);
start_from = G__9677;
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
{var temp__4090__auto___9702 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9702))
{var class_list_9703 = temp__4090__auto___9702;var seq__9690_9704 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9691_9705 = null;var count__9692_9706 = 0;var i__9693_9707 = 0;while(true){
if((i__9693_9707 < count__9692_9706))
{var class_9708 = cljs.core._nth.call(null,chunk__9691_9705,i__9693_9707);class_list_9703.add(class_9708);
{
var G__9709 = seq__9690_9704;
var G__9710 = chunk__9691_9705;
var G__9711 = count__9692_9706;
var G__9712 = (i__9693_9707 + 1);
seq__9690_9704 = G__9709;
chunk__9691_9705 = G__9710;
count__9692_9706 = G__9711;
i__9693_9707 = G__9712;
continue;
}
} else
{var temp__4092__auto___9713 = cljs.core.seq.call(null,seq__9690_9704);if(cljs.core.truth_(temp__4092__auto___9713))
{var seq__9690_9714__$1 = temp__4092__auto___9713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9690_9714__$1))
{var c__4010__auto___9715 = cljs.core.chunk_first.call(null,seq__9690_9714__$1);{
var G__9716 = cljs.core.chunk_rest.call(null,seq__9690_9714__$1);
var G__9717 = c__4010__auto___9715;
var G__9718 = cljs.core.count.call(null,c__4010__auto___9715);
var G__9719 = 0;
seq__9690_9704 = G__9716;
chunk__9691_9705 = G__9717;
count__9692_9706 = G__9718;
i__9693_9707 = G__9719;
continue;
}
} else
{var class_9720 = cljs.core.first.call(null,seq__9690_9714__$1);class_list_9703.add(class_9720);
{
var G__9721 = cljs.core.next.call(null,seq__9690_9714__$1);
var G__9722 = null;
var G__9723 = 0;
var G__9724 = 0;
seq__9690_9704 = G__9721;
chunk__9691_9705 = G__9722;
count__9692_9706 = G__9723;
i__9693_9707 = G__9724;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_9725 = elem__$1.className;var seq__9694_9726 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9695_9727 = null;var count__9696_9728 = 0;var i__9697_9729 = 0;while(true){
if((i__9697_9729 < count__9696_9728))
{var class_9730 = cljs.core._nth.call(null,chunk__9695_9727,i__9697_9729);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9725,class_9730)))
{} else
{elem__$1.className = (((class_name_9725 === ""))?class_9730:[cljs.core.str(class_name_9725),cljs.core.str(" "),cljs.core.str(class_9730)].join(''));
}
{
var G__9731 = seq__9694_9726;
var G__9732 = chunk__9695_9727;
var G__9733 = count__9696_9728;
var G__9734 = (i__9697_9729 + 1);
seq__9694_9726 = G__9731;
chunk__9695_9727 = G__9732;
count__9696_9728 = G__9733;
i__9697_9729 = G__9734;
continue;
}
} else
{var temp__4092__auto___9735 = cljs.core.seq.call(null,seq__9694_9726);if(cljs.core.truth_(temp__4092__auto___9735))
{var seq__9694_9736__$1 = temp__4092__auto___9735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9694_9736__$1))
{var c__4010__auto___9737 = cljs.core.chunk_first.call(null,seq__9694_9736__$1);{
var G__9738 = cljs.core.chunk_rest.call(null,seq__9694_9736__$1);
var G__9739 = c__4010__auto___9737;
var G__9740 = cljs.core.count.call(null,c__4010__auto___9737);
var G__9741 = 0;
seq__9694_9726 = G__9738;
chunk__9695_9727 = G__9739;
count__9696_9728 = G__9740;
i__9697_9729 = G__9741;
continue;
}
} else
{var class_9742 = cljs.core.first.call(null,seq__9694_9736__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9725,class_9742)))
{} else
{elem__$1.className = (((class_name_9725 === ""))?class_9742:[cljs.core.str(class_name_9725),cljs.core.str(" "),cljs.core.str(class_9742)].join(''));
}
{
var G__9743 = cljs.core.next.call(null,seq__9694_9736__$1);
var G__9744 = null;
var G__9745 = 0;
var G__9746 = 0;
seq__9694_9726 = G__9743;
chunk__9695_9727 = G__9744;
count__9696_9728 = G__9745;
i__9697_9729 = G__9746;
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
var G__9747__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9698_9748 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__9699_9749 = null;var count__9700_9750 = 0;var i__9701_9751 = 0;while(true){
if((i__9701_9751 < count__9700_9750))
{var c_9752 = cljs.core._nth.call(null,chunk__9699_9749,i__9701_9751);add_class_BANG_.call(null,elem__$1,c_9752);
{
var G__9753 = seq__9698_9748;
var G__9754 = chunk__9699_9749;
var G__9755 = count__9700_9750;
var G__9756 = (i__9701_9751 + 1);
seq__9698_9748 = G__9753;
chunk__9699_9749 = G__9754;
count__9700_9750 = G__9755;
i__9701_9751 = G__9756;
continue;
}
} else
{var temp__4092__auto___9757 = cljs.core.seq.call(null,seq__9698_9748);if(cljs.core.truth_(temp__4092__auto___9757))
{var seq__9698_9758__$1 = temp__4092__auto___9757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9698_9758__$1))
{var c__4010__auto___9759 = cljs.core.chunk_first.call(null,seq__9698_9758__$1);{
var G__9760 = cljs.core.chunk_rest.call(null,seq__9698_9758__$1);
var G__9761 = c__4010__auto___9759;
var G__9762 = cljs.core.count.call(null,c__4010__auto___9759);
var G__9763 = 0;
seq__9698_9748 = G__9760;
chunk__9699_9749 = G__9761;
count__9700_9750 = G__9762;
i__9701_9751 = G__9763;
continue;
}
} else
{var c_9764 = cljs.core.first.call(null,seq__9698_9758__$1);add_class_BANG_.call(null,elem__$1,c_9764);
{
var G__9765 = cljs.core.next.call(null,seq__9698_9758__$1);
var G__9766 = null;
var G__9767 = 0;
var G__9768 = 0;
seq__9698_9748 = G__9765;
chunk__9699_9749 = G__9766;
count__9700_9750 = G__9767;
i__9701_9751 = G__9768;
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
var G__9747 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9747__delegate.call(this,elem,classes,more_classes);};
G__9747.cljs$lang$maxFixedArity = 2;
G__9747.cljs$lang$applyTo = (function (arglist__9769){
var elem = cljs.core.first(arglist__9769);
arglist__9769 = cljs.core.next(arglist__9769);
var classes = cljs.core.first(arglist__9769);
var more_classes = cljs.core.rest(arglist__9769);
return G__9747__delegate(elem,classes,more_classes);
});
G__9747.cljs$core$IFn$_invoke$arity$variadic = G__9747__delegate;
return G__9747;
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
var G__9770 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__9770;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9779 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9779))
{var class_list_9780 = temp__4090__auto___9779;class_list_9780.remove(class$__$1);
} else
{var class_name_9781 = elem__$1.className;var new_class_name_9782 = dommy.attrs.remove_class_str.call(null,class_name_9781,class$__$1);if((class_name_9781 === new_class_name_9782))
{} else
{elem__$1.className = new_class_name_9782;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__9783__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9775 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__9776 = null;var count__9777 = 0;var i__9778 = 0;while(true){
if((i__9778 < count__9777))
{var c = cljs.core._nth.call(null,chunk__9776,i__9778);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9784 = seq__9775;
var G__9785 = chunk__9776;
var G__9786 = count__9777;
var G__9787 = (i__9778 + 1);
seq__9775 = G__9784;
chunk__9776 = G__9785;
count__9777 = G__9786;
i__9778 = G__9787;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9775);if(cljs.core.truth_(temp__4092__auto__))
{var seq__9775__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9775__$1))
{var c__4010__auto__ = cljs.core.chunk_first.call(null,seq__9775__$1);{
var G__9788 = cljs.core.chunk_rest.call(null,seq__9775__$1);
var G__9789 = c__4010__auto__;
var G__9790 = cljs.core.count.call(null,c__4010__auto__);
var G__9791 = 0;
seq__9775 = G__9788;
chunk__9776 = G__9789;
count__9777 = G__9790;
i__9778 = G__9791;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__9775__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9792 = cljs.core.next.call(null,seq__9775__$1);
var G__9793 = null;
var G__9794 = 0;
var G__9795 = 0;
seq__9775 = G__9792;
chunk__9776 = G__9793;
count__9777 = G__9794;
i__9778 = G__9795;
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
var G__9783 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9783__delegate.call(this,elem,class$,classes);};
G__9783.cljs$lang$maxFixedArity = 2;
G__9783.cljs$lang$applyTo = (function (arglist__9796){
var elem = cljs.core.first(arglist__9796);
arglist__9796 = cljs.core.next(arglist__9796);
var class$ = cljs.core.first(arglist__9796);
var classes = cljs.core.rest(arglist__9796);
return G__9783__delegate(elem,class$,classes);
});
G__9783.cljs$core$IFn$_invoke$arity$variadic = G__9783__delegate;
return G__9783;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___9797 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___9797))
{var class_list_9798 = temp__4090__auto___9797;class_list_9798.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__9801){var vec__9802 = p__9801;var k = cljs.core.nth.call(null,vec__9802,0,null);var v = cljs.core.nth.call(null,vec__9802,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__9809_9815 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9810_9816 = null;var count__9811_9817 = 0;var i__9812_9818 = 0;while(true){
if((i__9812_9818 < count__9811_9817))
{var vec__9813_9819 = cljs.core._nth.call(null,chunk__9810_9816,i__9812_9818);var k_9820 = cljs.core.nth.call(null,vec__9813_9819,0,null);var v_9821 = cljs.core.nth.call(null,vec__9813_9819,1,null);(style[cljs.core.name.call(null,k_9820)] = v_9821);
{
var G__9822 = seq__9809_9815;
var G__9823 = chunk__9810_9816;
var G__9824 = count__9811_9817;
var G__9825 = (i__9812_9818 + 1);
seq__9809_9815 = G__9822;
chunk__9810_9816 = G__9823;
count__9811_9817 = G__9824;
i__9812_9818 = G__9825;
continue;
}
} else
{var temp__4092__auto___9826 = cljs.core.seq.call(null,seq__9809_9815);if(cljs.core.truth_(temp__4092__auto___9826))
{var seq__9809_9827__$1 = temp__4092__auto___9826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9809_9827__$1))
{var c__4010__auto___9828 = cljs.core.chunk_first.call(null,seq__9809_9827__$1);{
var G__9829 = cljs.core.chunk_rest.call(null,seq__9809_9827__$1);
var G__9830 = c__4010__auto___9828;
var G__9831 = cljs.core.count.call(null,c__4010__auto___9828);
var G__9832 = 0;
seq__9809_9815 = G__9829;
chunk__9810_9816 = G__9830;
count__9811_9817 = G__9831;
i__9812_9818 = G__9832;
continue;
}
} else
{var vec__9814_9833 = cljs.core.first.call(null,seq__9809_9827__$1);var k_9834 = cljs.core.nth.call(null,vec__9814_9833,0,null);var v_9835 = cljs.core.nth.call(null,vec__9814_9833,1,null);(style[cljs.core.name.call(null,k_9834)] = v_9835);
{
var G__9836 = cljs.core.next.call(null,seq__9809_9827__$1);
var G__9837 = null;
var G__9838 = 0;
var G__9839 = 0;
seq__9809_9815 = G__9836;
chunk__9810_9816 = G__9837;
count__9811_9817 = G__9838;
i__9812_9818 = G__9839;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__9840){
var elem = cljs.core.first(arglist__9840);
var kvs = cljs.core.rest(arglist__9840);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9847_9853 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__9848_9854 = null;var count__9849_9855 = 0;var i__9850_9856 = 0;while(true){
if((i__9850_9856 < count__9849_9855))
{var vec__9851_9857 = cljs.core._nth.call(null,chunk__9848_9854,i__9850_9856);var k_9858 = cljs.core.nth.call(null,vec__9851_9857,0,null);var v_9859 = cljs.core.nth.call(null,vec__9851_9857,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9858,[cljs.core.str(v_9859),cljs.core.str("px")].join(''));
{
var G__9860 = seq__9847_9853;
var G__9861 = chunk__9848_9854;
var G__9862 = count__9849_9855;
var G__9863 = (i__9850_9856 + 1);
seq__9847_9853 = G__9860;
chunk__9848_9854 = G__9861;
count__9849_9855 = G__9862;
i__9850_9856 = G__9863;
continue;
}
} else
{var temp__4092__auto___9864 = cljs.core.seq.call(null,seq__9847_9853);if(cljs.core.truth_(temp__4092__auto___9864))
{var seq__9847_9865__$1 = temp__4092__auto___9864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9847_9865__$1))
{var c__4010__auto___9866 = cljs.core.chunk_first.call(null,seq__9847_9865__$1);{
var G__9867 = cljs.core.chunk_rest.call(null,seq__9847_9865__$1);
var G__9868 = c__4010__auto___9866;
var G__9869 = cljs.core.count.call(null,c__4010__auto___9866);
var G__9870 = 0;
seq__9847_9853 = G__9867;
chunk__9848_9854 = G__9868;
count__9849_9855 = G__9869;
i__9850_9856 = G__9870;
continue;
}
} else
{var vec__9852_9871 = cljs.core.first.call(null,seq__9847_9865__$1);var k_9872 = cljs.core.nth.call(null,vec__9852_9871,0,null);var v_9873 = cljs.core.nth.call(null,vec__9852_9871,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9872,[cljs.core.str(v_9873),cljs.core.str("px")].join(''));
{
var G__9874 = cljs.core.next.call(null,seq__9847_9865__$1);
var G__9875 = null;
var G__9876 = 0;
var G__9877 = 0;
seq__9847_9853 = G__9874;
chunk__9848_9854 = G__9875;
count__9849_9855 = G__9876;
i__9850_9856 = G__9877;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__9878){
var elem = cljs.core.first(arglist__9878);
var kvs = cljs.core.rest(arglist__9878);
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
{var G__9887 = dommy.template.__GT_node_like.call(null,elem);(G__9887[cljs.core.name.call(null,k)] = v);
return G__9887;
} else
{var G__9888 = dommy.template.__GT_node_like.call(null,elem);G__9888.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__9888;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__9895__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9889_9896 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__9890_9897 = null;var count__9891_9898 = 0;var i__9892_9899 = 0;while(true){
if((i__9892_9899 < count__9891_9898))
{var vec__9893_9900 = cljs.core._nth.call(null,chunk__9890_9897,i__9892_9899);var k_9901__$1 = cljs.core.nth.call(null,vec__9893_9900,0,null);var v_9902__$1 = cljs.core.nth.call(null,vec__9893_9900,1,null);set_attr_BANG_.call(null,elem__$1,k_9901__$1,v_9902__$1);
{
var G__9903 = seq__9889_9896;
var G__9904 = chunk__9890_9897;
var G__9905 = count__9891_9898;
var G__9906 = (i__9892_9899 + 1);
seq__9889_9896 = G__9903;
chunk__9890_9897 = G__9904;
count__9891_9898 = G__9905;
i__9892_9899 = G__9906;
continue;
}
} else
{var temp__4092__auto___9907 = cljs.core.seq.call(null,seq__9889_9896);if(cljs.core.truth_(temp__4092__auto___9907))
{var seq__9889_9908__$1 = temp__4092__auto___9907;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9889_9908__$1))
{var c__4010__auto___9909 = cljs.core.chunk_first.call(null,seq__9889_9908__$1);{
var G__9910 = cljs.core.chunk_rest.call(null,seq__9889_9908__$1);
var G__9911 = c__4010__auto___9909;
var G__9912 = cljs.core.count.call(null,c__4010__auto___9909);
var G__9913 = 0;
seq__9889_9896 = G__9910;
chunk__9890_9897 = G__9911;
count__9891_9898 = G__9912;
i__9892_9899 = G__9913;
continue;
}
} else
{var vec__9894_9914 = cljs.core.first.call(null,seq__9889_9908__$1);var k_9915__$1 = cljs.core.nth.call(null,vec__9894_9914,0,null);var v_9916__$1 = cljs.core.nth.call(null,vec__9894_9914,1,null);set_attr_BANG_.call(null,elem__$1,k_9915__$1,v_9916__$1);
{
var G__9917 = cljs.core.next.call(null,seq__9889_9908__$1);
var G__9918 = null;
var G__9919 = 0;
var G__9920 = 0;
seq__9889_9896 = G__9917;
chunk__9890_9897 = G__9918;
count__9891_9898 = G__9919;
i__9892_9899 = G__9920;
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
var G__9895 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__9895__delegate.call(this,elem,k,v,kvs);};
G__9895.cljs$lang$maxFixedArity = 3;
G__9895.cljs$lang$applyTo = (function (arglist__9921){
var elem = cljs.core.first(arglist__9921);
arglist__9921 = cljs.core.next(arglist__9921);
var k = cljs.core.first(arglist__9921);
arglist__9921 = cljs.core.next(arglist__9921);
var v = cljs.core.first(arglist__9921);
var kvs = cljs.core.rest(arglist__9921);
return G__9895__delegate(elem,k,v,kvs);
});
G__9895.cljs$core$IFn$_invoke$arity$variadic = G__9895__delegate;
return G__9895;
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
var G__9930__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9926_9931 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__9927_9932 = null;var count__9928_9933 = 0;var i__9929_9934 = 0;while(true){
if((i__9929_9934 < count__9928_9933))
{var k_9935__$1 = cljs.core._nth.call(null,chunk__9927_9932,i__9929_9934);remove_attr_BANG_.call(null,elem__$1,k_9935__$1);
{
var G__9936 = seq__9926_9931;
var G__9937 = chunk__9927_9932;
var G__9938 = count__9928_9933;
var G__9939 = (i__9929_9934 + 1);
seq__9926_9931 = G__9936;
chunk__9927_9932 = G__9937;
count__9928_9933 = G__9938;
i__9929_9934 = G__9939;
continue;
}
} else
{var temp__4092__auto___9940 = cljs.core.seq.call(null,seq__9926_9931);if(cljs.core.truth_(temp__4092__auto___9940))
{var seq__9926_9941__$1 = temp__4092__auto___9940;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9926_9941__$1))
{var c__4010__auto___9942 = cljs.core.chunk_first.call(null,seq__9926_9941__$1);{
var G__9943 = cljs.core.chunk_rest.call(null,seq__9926_9941__$1);
var G__9944 = c__4010__auto___9942;
var G__9945 = cljs.core.count.call(null,c__4010__auto___9942);
var G__9946 = 0;
seq__9926_9931 = G__9943;
chunk__9927_9932 = G__9944;
count__9928_9933 = G__9945;
i__9929_9934 = G__9946;
continue;
}
} else
{var k_9947__$1 = cljs.core.first.call(null,seq__9926_9941__$1);remove_attr_BANG_.call(null,elem__$1,k_9947__$1);
{
var G__9948 = cljs.core.next.call(null,seq__9926_9941__$1);
var G__9949 = null;
var G__9950 = 0;
var G__9951 = 0;
seq__9926_9931 = G__9948;
chunk__9927_9932 = G__9949;
count__9928_9933 = G__9950;
i__9929_9934 = G__9951;
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
var G__9930 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9930__delegate.call(this,elem,k,ks);};
G__9930.cljs$lang$maxFixedArity = 2;
G__9930.cljs$lang$applyTo = (function (arglist__9952){
var elem = cljs.core.first(arglist__9952);
arglist__9952 = cljs.core.next(arglist__9952);
var k = cljs.core.first(arglist__9952);
var ks = cljs.core.rest(arglist__9952);
return G__9930__delegate(elem,k,ks);
});
G__9930.cljs$core$IFn$_invoke$arity$variadic = G__9930__delegate;
return G__9930;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__9954 = dommy.template.__GT_node_like.call(null,elem);G__9954.style.display = ((show_QMARK_)?"":"none");
return G__9954;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__9956 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9956,false);
return G__9956;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__9958 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9958,true);
return G__9958;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__9960 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__9960["constructor"] = Object);
return G__9960;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
