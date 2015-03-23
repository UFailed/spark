// JavaScript Document
$(document).ready(function (e) {
    var myDate = new Date();
    var nowYear = myDate.getFullYear();
    $(".year a").click(function () {
        var i;
        var j = nowYear - 1899;
        for (i = 1; i < j; i++) {
            $(".year_list").prepend("<li><a href='javascript:;'>" + parseInt(1900 + i) + "</a></li>");
        }
        $(".year_list").fadeIn();
    });
    $(".month a").click(function () {
        var i;
        for (i = 1; i < 13; i++) {
            $(".month_list").prepend("<li><a href='javascript:;'" + i + "</a></li>");
        }
    });
});