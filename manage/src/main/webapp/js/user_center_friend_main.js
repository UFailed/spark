// JavaScript Document
$(document).ready(function (e) {
    var htmlobjs = $.ajax({
        url: "user_friend_follow-ajax.html",
        async: false,
        beforeSend: function () {
            $("#fans_list").html("");
            $("#black_list").html("");
            $("#follow_list").html("<img src='images/loading.gif />'");
        }
    });
    $("#follow_list").html(htmlobjs.responseText);
    $(".user_main .right .user_list_top .list_tab li").click(function () {
        $(".user_main .right .user_list_top .list_tab li").removeClass("list_tab_cur");
        $(this).addClass("list_tab_cur");
    });
    $("#follow_b").click(function () {
        $(".search").css("display", "none");
        $(".fs01").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_friend_follow-ajax.html",
            async: false,
            beforeSend: function () {
                $("#fans_list").html("");
                $("#black_list").html("");
                $("#follow_list").html("<img src='images/loading.gif />'");
            }
        });
        $("#follow_list").html(htmlobj.responseText);
    });
    $("#fans_b").click(function () {
        $(".search").css("display", "none");
        $(".fs02").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_friend_fans-ajax.html",
            async: false,
            beforeSend: function () {
                $("#follow_list").html("");
                $("#black_list").html("");
                $("#fans_list").html("<img src='images/loading.gif />'");
            }
        });
        $("#fans_list").html(htmlobj.responseText);
    });
    $("#black_b").click(function () {
        $(".search").css("display", "none");
        $(".fs03").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_friend_blacklist-ajax.html",
            async: false,
            beforeSend: function () {
                $("#follow_list").html("");
                $("#fans_list").html("");
                $("#black_list").html("<img src='images/loading.gif />'");
            }
        });
        $("#black_list").html(htmlobj.responseText);
    });
});