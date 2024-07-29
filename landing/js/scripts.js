function initDiamant() {
    "use strict";
    //   loader ------------------
    firstLoad();
    function firstLoad() {
        $(".loader").delay(500).fadeOut(300, function () {
            setTimeout(function () {
                $('.cd-loader-layer').addClass('closing');
                $("#main").animate({
                    opacity: 1
                }, 500);
            }, 300);
            setTimeout(function () {
                $(".loader-wrap").fadeOut(1);
            }, 1200);
        });
    }
    //   Background image ------------------
    var a = $(".bg");
    a.each(function (a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
    function cardRaining() {
        $.fn.duplicate = function (a, b) {
            var c = [];
            for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
            return this.pushStack(c);
        };
        var cr = $(".star-rating");
        cr.each(function (cr) {
            var starcount = $(this).attr("data-starrating");
            $("<i class='fa-light fa-star'></i>").duplicate(starcount).prependTo(this);
        });
    }
    cardRaining();	
 $('#fall-holder').snowfall({flakeCount : 60, maxSpeed : 5});
}
//   Init All ------------------
$(document).ready(function () {
    initDiamant();
});