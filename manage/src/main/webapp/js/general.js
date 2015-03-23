// JavaScript Document
$(document).ready(function (e) {
    $("#header .logged .letter").click(function () {
        $("#header .logged .letter_box").fadeToggle("fast");
    });
    $(window).scroll(function () {
        var mainScrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollHeight = docHeight - winHeight;
        if (mainScrollTop > 0) {
            $(".scrollTop").fadeIn();
        }
        else {
            $(".scrollTop").fadeOut();
        }
    });
    $(".scrollTop").click(function () {
        $("body,html").animate({scrollTop: 0}, 200);
    });

});