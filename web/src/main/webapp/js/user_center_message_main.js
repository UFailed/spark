// JavaScript Document
$(document).ready(function (e) {
    $(".user_main .right .user_list_top .list_tab li").click(function () {
        $(".user_main .right .user_list_top .list_tab li").removeClass("list_tab_cur");
        $(this).addClass("list_tab_cur");
    });
    var htmlobjS = $.ajax({
        url: "/user/message/comment/",
        async: false,
        beforeSend: function () {
            $("#user_letter_list").html("");
            $("#sys_message_list").html("");
            $("#user_comment_list").html("<img src='images/loading.gif />'");
        }
    });
    $("#user_comment_list").html(htmlobjS.responseText);
    $("#user_comment_b").click(function () {
        var htmlobjS = $.ajax({
            url: "/user/message/comment/",
            async: false,
            beforeSend: function () {
                $("#user_letter_list").html("");
                $("#sys_message_list").html("");
                $("#user_comment_list").html("<img src='images/loading.gif />'");
            }
        });
        $(".search").css("display", "none");
        $(".ms01").css("display", "block");
        $("#user_comment_list").html(htmlobjS.responseText);
    });
    $("#user_letter_b").click(function () {
        $(".search").css("display", "none");
        $(".ms02").css("display", "block");
        var htmlobjS = $.ajax({
            url: "/user/message/private/",
            async: false,
            beforeSend: function () {
                $("#user_comment_list").html("");
                $("#sys_message_list").html("");
                $("#user_letter_list").html("<img src='images/loading.gif />'");
            }
        });
        $("#user_letter_list").html(htmlobjS.responseText);
    });
    $("#sys_message_b").click(function () {
        $(".search").css("display", "none");
        $(".ms03").css("display", "block");
        var htmlobjS = $.ajax({
            url: "/user/message/system/",
            async: false,
            beforeSend: function () {
                $("#user_comment_list").html("");
                $("#user_letter_list").html("");
            }
        });
        $("#sys_message_list").html(htmlobjS.responseText);
    });
});