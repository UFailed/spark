// JavaScript Document
$(document).ready(function (e) {
    var htmlobjS = $.ajax({
        url: "/user/friend/follow/",
        async: false,
        beforeSend: function () {
            $("#fans_list").html("");
            $("#black_list").html("");
            $("#follow_list").html("<img src='images/loading.gif />'");
        }
    });
    $("#follow_list").html(htmlobjS.responseText);
    $(".user_main .right .user_list_top .list_tab li").click(function () {
        $(".user_main .right .user_list_top .list_tab li").removeClass("list_tab_cur");
        $(this).addClass("list_tab_cur");
    });
    $("#follow_b").click(function () {
        var htmlobjS = $.ajax({
            url: "/user/friend/follow/",
            async: false,
            beforeSend: function () {
                $("#fans_list").html("");
                $("#black_list").html("");
                $("#follow_list").html("<img src='images/loading.gif />'");
            }
        });
        $("#follow_list").html(htmlobjS.responseText);
        $(".search").css("display", "none");
        $(".fs01").css("display", "block");
    });
    $("#fans_b").click(function () {
        var htmlobjS = $.ajax({
            url: "/user/friend/fans/",
            async: false,
            beforeSend: function () {
                $("#follow_list").html("");
                $("#black_list").html("");
                $("#fans_list").html("<img src='images/loading.gif />'");
            }
        });
        $("#fans_list").html(htmlobjS.responseText);
        $(".search").css("display", "none");
        $(".fs02").css("display", "block");
    });
    $("#black_b").click(function () {
        var htmlobjS = $.ajax({
            url: "/user/friend/black/",
            async: false,
            beforeSend: function () {
                $("#follow_list").html("");
                $("#fans_list").html("");
                $("#black_list").html("<img src='images/loading.gif />'");
            }
        });
        $("#black_list").html(htmlobjS.responseText);
        $(".search").css("display", "none");
        $(".fs03").css("display", "block");
    });
});