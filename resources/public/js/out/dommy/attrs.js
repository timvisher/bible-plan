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
{if(dommy.attrs.class_match_QMARK_(class_name,class$,i))
{return i;
} else
{{
var G__10537 = (i + class$.length);
start_from = G__10537;
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
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var classes__$1 = clojure.string.trim(cljs.core.name(classes));if(cljs.core.seq(classes__$1))
{var temp__4090__auto___10562 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___10562))
{var class_list_10563 = temp__4090__auto___10562;var seq__10550_10564 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__10551_10565 = null;var count__10552_10566 = 0;var i__10553_10567 = 0;while(true){
if((i__10553_10567 < count__10552_10566))
{var class_10568 = chunk__10551_10565.cljs$core$IIndexed$_nth$arity$2(null,i__10553_10567);class_list_10563.add(class_10568);
{
var G__10569 = seq__10550_10564;
var G__10570 = chunk__10551_10565;
var G__10571 = count__10552_10566;
var G__10572 = (i__10553_10567 + 1);
seq__10550_10564 = G__10569;
chunk__10551_10565 = G__10570;
count__10552_10566 = G__10571;
i__10553_10567 = G__10572;
continue;
}
} else
{var temp__4092__auto___10573 = cljs.core.seq(seq__10550_10564);if(temp__4092__auto___10573)
{var seq__10550_10574__$1 = temp__4092__auto___10573;if(cljs.core.chunked_seq_QMARK_(seq__10550_10574__$1))
{var c__4150__auto___10575 = cljs.core.chunk_first(seq__10550_10574__$1);{
var G__10576 = cljs.core.chunk_rest(seq__10550_10574__$1);
var G__10577 = c__4150__auto___10575;
var G__10578 = cljs.core.count(c__4150__auto___10575);
var G__10579 = 0;
seq__10550_10564 = G__10576;
chunk__10551_10565 = G__10577;
count__10552_10566 = G__10578;
i__10553_10567 = G__10579;
continue;
}
} else
{var class_10580 = cljs.core.first(seq__10550_10574__$1);class_list_10563.add(class_10580);
{
var G__10581 = cljs.core.next(seq__10550_10574__$1);
var G__10582 = null;
var G__10583 = 0;
var G__10584 = 0;
seq__10550_10564 = G__10581;
chunk__10551_10565 = G__10582;
count__10552_10566 = G__10583;
i__10553_10567 = G__10584;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_10585 = elem__$1.className;var seq__10554_10586 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__10555_10587 = null;var count__10556_10588 = 0;var i__10557_10589 = 0;while(true){
if((i__10557_10589 < count__10556_10588))
{var class_10590 = chunk__10555_10587.cljs$core$IIndexed$_nth$arity$2(null,i__10557_10589);if(cljs.core.truth_(dommy.attrs.class_index(class_name_10585,class_10590)))
{} else
{elem__$1.className = (((class_name_10585 === ""))?class_10590:[cljs.core.str(class_name_10585),cljs.core.str(" "),cljs.core.str(class_10590)].join(''));
}
{
var G__10591 = seq__10554_10586;
var G__10592 = chunk__10555_10587;
var G__10593 = count__10556_10588;
var G__10594 = (i__10557_10589 + 1);
seq__10554_10586 = G__10591;
chunk__10555_10587 = G__10592;
count__10556_10588 = G__10593;
i__10557_10589 = G__10594;
continue;
}
} else
{var temp__4092__auto___10595 = cljs.core.seq(seq__10554_10586);if(temp__4092__auto___10595)
{var seq__10554_10596__$1 = temp__4092__auto___10595;if(cljs.core.chunked_seq_QMARK_(seq__10554_10596__$1))
{var c__4150__auto___10597 = cljs.core.chunk_first(seq__10554_10596__$1);{
var G__10598 = cljs.core.chunk_rest(seq__10554_10596__$1);
var G__10599 = c__4150__auto___10597;
var G__10600 = cljs.core.count(c__4150__auto___10597);
var G__10601 = 0;
seq__10554_10586 = G__10598;
chunk__10555_10587 = G__10599;
count__10556_10588 = G__10600;
i__10557_10589 = G__10601;
continue;
}
} else
{var class_10602 = cljs.core.first(seq__10554_10596__$1);if(cljs.core.truth_(dommy.attrs.class_index(class_name_10585,class_10602)))
{} else
{elem__$1.className = (((class_name_10585 === ""))?class_10602:[cljs.core.str(class_name_10585),cljs.core.str(" "),cljs.core.str(class_10602)].join(''));
}
{
var G__10603 = cljs.core.next(seq__10554_10596__$1);
var G__10604 = null;
var G__10605 = 0;
var G__10606 = 0;
seq__10554_10586 = G__10603;
chunk__10555_10587 = G__10604;
count__10556_10588 = G__10605;
i__10557_10589 = G__10606;
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
var G__10607__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10558_10608 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__10559_10609 = null;var count__10560_10610 = 0;var i__10561_10611 = 0;while(true){
if((i__10561_10611 < count__10560_10610))
{var c_10612 = chunk__10559_10609.cljs$core$IIndexed$_nth$arity$2(null,i__10561_10611);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_10612);
{
var G__10613 = seq__10558_10608;
var G__10614 = chunk__10559_10609;
var G__10615 = count__10560_10610;
var G__10616 = (i__10561_10611 + 1);
seq__10558_10608 = G__10613;
chunk__10559_10609 = G__10614;
count__10560_10610 = G__10615;
i__10561_10611 = G__10616;
continue;
}
} else
{var temp__4092__auto___10617 = cljs.core.seq(seq__10558_10608);if(temp__4092__auto___10617)
{var seq__10558_10618__$1 = temp__4092__auto___10617;if(cljs.core.chunked_seq_QMARK_(seq__10558_10618__$1))
{var c__4150__auto___10619 = cljs.core.chunk_first(seq__10558_10618__$1);{
var G__10620 = cljs.core.chunk_rest(seq__10558_10618__$1);
var G__10621 = c__4150__auto___10619;
var G__10622 = cljs.core.count(c__4150__auto___10619);
var G__10623 = 0;
seq__10558_10608 = G__10620;
chunk__10559_10609 = G__10621;
count__10560_10610 = G__10622;
i__10561_10611 = G__10623;
continue;
}
} else
{var c_10624 = cljs.core.first(seq__10558_10618__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_10624);
{
var G__10625 = cljs.core.next(seq__10558_10618__$1);
var G__10626 = null;
var G__10627 = 0;
var G__10628 = 0;
seq__10558_10608 = G__10625;
chunk__10559_10609 = G__10626;
count__10560_10610 = G__10627;
i__10561_10611 = G__10628;
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
var G__10607 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10607__delegate.call(this,elem,classes,more_classes);};
G__10607.cljs$lang$maxFixedArity = 2;
G__10607.cljs$lang$applyTo = (function (arglist__10629){
var elem = cljs.core.first(arglist__10629);
arglist__10629 = cljs.core.next(arglist__10629);
var classes = cljs.core.first(arglist__10629);
var more_classes = cljs.core.rest(arglist__10629);
return G__10607__delegate(elem,classes,more_classes);
});
G__10607.cljs$core$IFn$_invoke$arity$variadic = G__10607__delegate;
return G__10607;
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
var G__10630 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__10630;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___10639 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___10639))
{var class_list_10640 = temp__4090__auto___10639;class_list_10640.remove(class$__$1);
} else
{var class_name_10641 = elem__$1.className;var new_class_name_10642 = dommy.attrs.remove_class_str(class_name_10641,class$__$1);if((class_name_10641 === new_class_name_10642))
{} else
{elem__$1.className = new_class_name_10642;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__10643__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10635 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__10636 = null;var count__10637 = 0;var i__10638 = 0;while(true){
if((i__10638 < count__10637))
{var c = chunk__10636.cljs$core$IIndexed$_nth$arity$2(null,i__10638);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__10644 = seq__10635;
var G__10645 = chunk__10636;
var G__10646 = count__10637;
var G__10647 = (i__10638 + 1);
seq__10635 = G__10644;
chunk__10636 = G__10645;
count__10637 = G__10646;
i__10638 = G__10647;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10635);if(temp__4092__auto__)
{var seq__10635__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10635__$1))
{var c__4150__auto__ = cljs.core.chunk_first(seq__10635__$1);{
var G__10648 = cljs.core.chunk_rest(seq__10635__$1);
var G__10649 = c__4150__auto__;
var G__10650 = cljs.core.count(c__4150__auto__);
var G__10651 = 0;
seq__10635 = G__10648;
chunk__10636 = G__10649;
count__10637 = G__10650;
i__10638 = G__10651;
continue;
}
} else
{var c = cljs.core.first(seq__10635__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__10652 = cljs.core.next(seq__10635__$1);
var G__10653 = null;
var G__10654 = 0;
var G__10655 = 0;
seq__10635 = G__10652;
chunk__10636 = G__10653;
count__10637 = G__10654;
i__10638 = G__10655;
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
var G__10643 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10643__delegate.call(this,elem,class$,classes);};
G__10643.cljs$lang$maxFixedArity = 2;
G__10643.cljs$lang$applyTo = (function (arglist__10656){
var elem = cljs.core.first(arglist__10656);
arglist__10656 = cljs.core.next(arglist__10656);
var class$ = cljs.core.first(arglist__10656);
var classes = cljs.core.rest(arglist__10656);
return G__10643__delegate(elem,class$,classes);
});
G__10643.cljs$core$IFn$_invoke$arity$variadic = G__10643__delegate;
return G__10643;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___10657 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___10657))
{var class_list_10658 = temp__4090__auto___10657;class_list_10658.toggle(class$__$1);
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
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10661){var vec__10662 = p__10661;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10662,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10662,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str(":"),cljs.core.str(cljs.core.name(v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like(elem);var style = elem__$1.style;var seq__10669_10675 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__10670_10676 = null;var count__10671_10677 = 0;var i__10672_10678 = 0;while(true){
if((i__10672_10678 < count__10671_10677))
{var vec__10673_10679 = chunk__10670_10676.cljs$core$IIndexed$_nth$arity$2(null,i__10672_10678);var k_10680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10673_10679,0,null);var v_10681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10673_10679,1,null);(style[cljs.core.name(k_10680)] = v_10681);
{
var G__10682 = seq__10669_10675;
var G__10683 = chunk__10670_10676;
var G__10684 = count__10671_10677;
var G__10685 = (i__10672_10678 + 1);
seq__10669_10675 = G__10682;
chunk__10670_10676 = G__10683;
count__10671_10677 = G__10684;
i__10672_10678 = G__10685;
continue;
}
} else
{var temp__4092__auto___10686 = cljs.core.seq(seq__10669_10675);if(temp__4092__auto___10686)
{var seq__10669_10687__$1 = temp__4092__auto___10686;if(cljs.core.chunked_seq_QMARK_(seq__10669_10687__$1))
{var c__4150__auto___10688 = cljs.core.chunk_first(seq__10669_10687__$1);{
var G__10689 = cljs.core.chunk_rest(seq__10669_10687__$1);
var G__10690 = c__4150__auto___10688;
var G__10691 = cljs.core.count(c__4150__auto___10688);
var G__10692 = 0;
seq__10669_10675 = G__10689;
chunk__10670_10676 = G__10690;
count__10671_10677 = G__10691;
i__10672_10678 = G__10692;
continue;
}
} else
{var vec__10674_10693 = cljs.core.first(seq__10669_10687__$1);var k_10694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10674_10693,0,null);var v_10695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10674_10693,1,null);(style[cljs.core.name(k_10694)] = v_10695);
{
var G__10696 = cljs.core.next(seq__10669_10687__$1);
var G__10697 = null;
var G__10698 = 0;
var G__10699 = 0;
seq__10669_10675 = G__10696;
chunk__10670_10676 = G__10697;
count__10671_10677 = G__10698;
i__10672_10678 = G__10699;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10700){
var elem = cljs.core.first(arglist__10700);
var kvs = cljs.core.rest(arglist__10700);
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
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10707_10713 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__10708_10714 = null;var count__10709_10715 = 0;var i__10710_10716 = 0;while(true){
if((i__10710_10716 < count__10709_10715))
{var vec__10711_10717 = chunk__10708_10714.cljs$core$IIndexed$_nth$arity$2(null,i__10710_10716);var k_10718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10711_10717,0,null);var v_10719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10711_10717,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_10718,[cljs.core.str(v_10719),cljs.core.str("px")].join('')], 0));
{
var G__10720 = seq__10707_10713;
var G__10721 = chunk__10708_10714;
var G__10722 = count__10709_10715;
var G__10723 = (i__10710_10716 + 1);
seq__10707_10713 = G__10720;
chunk__10708_10714 = G__10721;
count__10709_10715 = G__10722;
i__10710_10716 = G__10723;
continue;
}
} else
{var temp__4092__auto___10724 = cljs.core.seq(seq__10707_10713);if(temp__4092__auto___10724)
{var seq__10707_10725__$1 = temp__4092__auto___10724;if(cljs.core.chunked_seq_QMARK_(seq__10707_10725__$1))
{var c__4150__auto___10726 = cljs.core.chunk_first(seq__10707_10725__$1);{
var G__10727 = cljs.core.chunk_rest(seq__10707_10725__$1);
var G__10728 = c__4150__auto___10726;
var G__10729 = cljs.core.count(c__4150__auto___10726);
var G__10730 = 0;
seq__10707_10713 = G__10727;
chunk__10708_10714 = G__10728;
count__10709_10715 = G__10729;
i__10710_10716 = G__10730;
continue;
}
} else
{var vec__10712_10731 = cljs.core.first(seq__10707_10725__$1);var k_10732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10712_10731,0,null);var v_10733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10712_10731,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_10732,[cljs.core.str(v_10733),cljs.core.str("px")].join('')], 0));
{
var G__10734 = cljs.core.next(seq__10707_10725__$1);
var G__10735 = null;
var G__10736 = 0;
var G__10737 = 0;
seq__10707_10713 = G__10734;
chunk__10708_10714 = G__10735;
count__10709_10715 = G__10736;
i__10710_10716 = G__10737;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__10738){
var elem = cljs.core.first(arglist__10738);
var kvs = cljs.core.rest(arglist__10738);
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
{var G__10747 = dommy.template.__GT_node_like(elem);(G__10747[cljs.core.name(k)] = v);
return G__10747;
} else
{var G__10748 = dommy.template.__GT_node_like(elem);G__10748.setAttribute(cljs.core.name(k),(((k === cljs.core.constant$keyword$148))?dommy.attrs.style_str(v):v));
return G__10748;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__10755__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10749_10756 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs)));var chunk__10750_10757 = null;var count__10751_10758 = 0;var i__10752_10759 = 0;while(true){
if((i__10752_10759 < count__10751_10758))
{var vec__10753_10760 = chunk__10750_10757.cljs$core$IIndexed$_nth$arity$2(null,i__10752_10759);var k_10761__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10753_10760,0,null);var v_10762__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10753_10760,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_10761__$1,v_10762__$1);
{
var G__10763 = seq__10749_10756;
var G__10764 = chunk__10750_10757;
var G__10765 = count__10751_10758;
var G__10766 = (i__10752_10759 + 1);
seq__10749_10756 = G__10763;
chunk__10750_10757 = G__10764;
count__10751_10758 = G__10765;
i__10752_10759 = G__10766;
continue;
}
} else
{var temp__4092__auto___10767 = cljs.core.seq(seq__10749_10756);if(temp__4092__auto___10767)
{var seq__10749_10768__$1 = temp__4092__auto___10767;if(cljs.core.chunked_seq_QMARK_(seq__10749_10768__$1))
{var c__4150__auto___10769 = cljs.core.chunk_first(seq__10749_10768__$1);{
var G__10770 = cljs.core.chunk_rest(seq__10749_10768__$1);
var G__10771 = c__4150__auto___10769;
var G__10772 = cljs.core.count(c__4150__auto___10769);
var G__10773 = 0;
seq__10749_10756 = G__10770;
chunk__10750_10757 = G__10771;
count__10751_10758 = G__10772;
i__10752_10759 = G__10773;
continue;
}
} else
{var vec__10754_10774 = cljs.core.first(seq__10749_10768__$1);var k_10775__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10754_10774,0,null);var v_10776__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10754_10774,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_10775__$1,v_10776__$1);
{
var G__10777 = cljs.core.next(seq__10749_10768__$1);
var G__10778 = null;
var G__10779 = 0;
var G__10780 = 0;
seq__10749_10756 = G__10777;
chunk__10750_10757 = G__10778;
count__10751_10758 = G__10779;
i__10752_10759 = G__10780;
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
var G__10755 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__10755__delegate.call(this,elem,k,v,kvs);};
G__10755.cljs$lang$maxFixedArity = 3;
G__10755.cljs$lang$applyTo = (function (arglist__10781){
var elem = cljs.core.first(arglist__10781);
arglist__10781 = cljs.core.next(arglist__10781);
var k = cljs.core.first(arglist__10781);
arglist__10781 = cljs.core.next(arglist__10781);
var v = cljs.core.first(arglist__10781);
var kvs = cljs.core.rest(arglist__10781);
return G__10755__delegate(elem,k,v,kvs);
});
G__10755.cljs$core$IFn$_invoke$arity$variadic = G__10755__delegate;
return G__10755;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$149,null,cljs.core.constant$keyword$150,null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name(k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__10790__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__10786_10791 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__10787_10792 = null;var count__10788_10793 = 0;var i__10789_10794 = 0;while(true){
if((i__10789_10794 < count__10788_10793))
{var k_10795__$1 = chunk__10787_10792.cljs$core$IIndexed$_nth$arity$2(null,i__10789_10794);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_10795__$1);
{
var G__10796 = seq__10786_10791;
var G__10797 = chunk__10787_10792;
var G__10798 = count__10788_10793;
var G__10799 = (i__10789_10794 + 1);
seq__10786_10791 = G__10796;
chunk__10787_10792 = G__10797;
count__10788_10793 = G__10798;
i__10789_10794 = G__10799;
continue;
}
} else
{var temp__4092__auto___10800 = cljs.core.seq(seq__10786_10791);if(temp__4092__auto___10800)
{var seq__10786_10801__$1 = temp__4092__auto___10800;if(cljs.core.chunked_seq_QMARK_(seq__10786_10801__$1))
{var c__4150__auto___10802 = cljs.core.chunk_first(seq__10786_10801__$1);{
var G__10803 = cljs.core.chunk_rest(seq__10786_10801__$1);
var G__10804 = c__4150__auto___10802;
var G__10805 = cljs.core.count(c__4150__auto___10802);
var G__10806 = 0;
seq__10786_10791 = G__10803;
chunk__10787_10792 = G__10804;
count__10788_10793 = G__10805;
i__10789_10794 = G__10806;
continue;
}
} else
{var k_10807__$1 = cljs.core.first(seq__10786_10801__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_10807__$1);
{
var G__10808 = cljs.core.next(seq__10786_10801__$1);
var G__10809 = null;
var G__10810 = 0;
var G__10811 = 0;
seq__10786_10791 = G__10808;
chunk__10787_10792 = G__10809;
count__10788_10793 = G__10810;
i__10789_10794 = G__10811;
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
var G__10790 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10790__delegate.call(this,elem,k,ks);};
G__10790.cljs$lang$maxFixedArity = 2;
G__10790.cljs$lang$applyTo = (function (arglist__10812){
var elem = cljs.core.first(arglist__10812);
arglist__10812 = cljs.core.next(arglist__10812);
var k = cljs.core.first(arglist__10812);
var ks = cljs.core.rest(arglist__10812);
return G__10790__delegate(elem,k,ks);
});
G__10790.cljs$core$IFn$_invoke$arity$variadic = G__10790__delegate;
return G__10790;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__10814 = dommy.template.__GT_node_like(elem);G__10814.style.display = ((show_QMARK_)?"":"none");
return G__10814;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__10816 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__10816,false);
return G__10816;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__10818 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__10818,true);
return G__10818;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__10820 = dommy.template.__GT_node_like(elem).getBoundingClientRect();(G__10820["constructor"] = Object);
return G__10820;
})(),cljs.core.array_seq([cljs.core.constant$keyword$106,true], 0));
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);var top = cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect(elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
