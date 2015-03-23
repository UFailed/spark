// JavaScript Document
$(document).ready(function (e) {
    var htmlobjs = $.ajax({
        url: "user_message_comment-ajax.html",
        async: false,
        beforeSend: function () {
            $("#user_letter_list").html("");
            $("#sys_message_list").html("");
            $("#user_comment_list").html("<img src='images/loading.gif />'");
        }
    });
    $("#user_comment_list").html(htmlobjs.responseText);
    $(".user_main .right .user_list_top .list_tab li").click(function () {
        $(".user_main .right .user_list_top .list_tab li").removeClass("list_tab_cur");
        $(this).addClass("list_tab_cur");
    });
    $("#user_comment_b").click(function () {
        $(".search").css("display", "none");
        $(".ms01").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_message_comment-ajax.html",
            async: false,
            beforeSend: function () {
                $("#user_letter_list").html("");
                $("#sys_message_list").html("");
                $("#user_comment_list").html("<img src='images/loading.gif />'");
            }
        });
        $("#user_comment_list").html(htmlobj.responseText);
    });
    $("#user_letter_b").click(function () {
        $(".search").css("display", "none");
        $(".ms02").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_message_letter-ajax.html",
            async: false,
            beforeSend: function () {
                $("#user_comment_list").html("");
                $("#sys_message_list").html("");
                $("#user_letter_list").html("<img src='images/loading.gif />'");
            }
        });
        $("#user_letter_list").html(htmlobj.responseText);
    });
    $("#sys_message_b").click(function () {
        $(".search").css("display", "none");
        $(".ms03").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_sys_message-ajax.html",
            async: false,
            beforeSend: function () {
                $("#user_comment_list").html("");
                $("#user_letter_list").html("");
                $("#sys_message_list").html("<img src='images/loading.gif />'");
            }
        });
        $("#sys_message_list").html(htmlobj.responseText);
    });
});