  /**
 * Single Page Nav Plugin
 */
"function"!=typeof Object.create&&(Object.create=function(t){function i(){}return i.prototype=t,new i}),function(t,i,n,s){var o={init:function(n,s){this.options=t.extend({},t.fn.singlePageNav.defaults,n),this.container=s,this.$container=t(s),this.$links=this.$container.find("a"),""!==this.options.filter&&(this.$links=this.$links.filter(this.options.filter)),this.$window=t(i),this.$htmlbody=t("html, body"),this.$links.on("click.singlePageNav",t.proxy(this.handleClick,this)),this.didScroll=!1,this.checkPosition(),this.setTimer()},handleClick:function(i){var n=this,s=i.currentTarget,o=t(s.hash);i.preventDefault(),o.length&&(n.clearTimer(),"function"==typeof n.options.beforeStart&&n.options.beforeStart(),n.setActiveLink(s.hash),n.scrollTo(o,function(){n.options.updateHash&&history.pushState&&history.pushState(null,null,s.hash),n.setTimer(),"function"==typeof n.options.onComplete&&n.options.onComplete()}))},scrollTo:function(t,i){var n=this,s=n.getCoords(t).top,o=!1;n.$htmlbody.stop().animate({scrollTop:s},{duration:n.options.speed,easing:n.options.easing,complete:function(){"function"!=typeof i||o||i(),o=!0}})},setTimer:function(){var t=this;t.$window.on("scroll.singlePageNav",function(){t.didScroll=!0}),t.timer=setInterval(function(){t.didScroll&&(t.didScroll=!1,t.checkPosition())},250)},clearTimer:function(){clearInterval(this.timer),this.$window.off("scroll.singlePageNav"),this.didScroll=!1},checkPosition:function(){var t=this.$window.scrollTop(),i=this.getCurrentSection(t);null!==i&&this.setActiveLink(i)},getCoords:function(t){return{top:Math.round(t.offset().top)-this.options.offset}},setActiveLink:function(t){var i=this.$container.find("a[href$='"+t+"']");i.hasClass(this.options.currentClass)||(this.$links.removeClass(this.options.currentClass),i.addClass(this.options.currentClass))},getCurrentSection:function(i){var n,s,o;for(n=0;n<this.$links.length;n++)s=this.$links[n].hash,t(s).length&&i>=this.getCoords(t(s)).top-this.options.threshold&&(o=s);return o||(0===this.$links.length?null:this.$links[0].hash)}};t.fn.singlePageNav=function(t){return this.each(function(){Object.create(o).init(t,this)})},t.fn.singlePageNav.defaults={offset:0,threshold:120,speed:400,currentClass:"actscr-link",easing:"swing",updateHash:!1,filter:"",onComplete:!1,beforeStart:!1}}(jQuery,window,document);

$(document).ready(function () {
    $(".menu_init").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 30,
        threshold:  0,
        speed: 1200,
        currentClass: "actscr-link"
    });
});


 