// JavaScript Document
$(document).ready(function (e) {
    $("textarea").focus(function () {
        if ($(this).val() == "请发表评论，评论中不要带有侮辱国家，他人") {
            $(this).val("");
            $(this).css("color", "#666");
        }
    });
    $("textarea").blur(function () {
        if ($(this).val() == "") {
            $(this).val("请发表评论，评论中不要带有侮辱国家，他人");
            $(this).css("color", "#c7c7c7");
        }
    });
    $("#user_message_reply_button").click(function () {
        $(this).parents("ul").prepend("<li></li>");
        var htmlobj = $.ajax({
            url: "user_message_comment_reply.html",
            async: false,
        });
        var newtext = $(this).parents("li").find("textarea").val();
        var oldtext = $(this).parents("li").find("dl p").text();
        var otherusername = $(this).parents("li").find("dl h5 a:eq(0)").text();
        var notetitle = $(this).parents("li").find("dl h5 a:eq(1)").text();
        $(this).parents("ul").find("li:eq(0)").html(htmlobj.responseText);
        $(this).parents("ul").find("li:eq(0) dl p").text(newtext);
        $(this).parents("ul").find("li:eq(0) .original_note p").text(oldtext);
        $(this).parents("ul").find("li:eq(0) .original_note h5 a:eq(0)").text(otherusername);
        $(this).parents("ul").find("li:eq(0) .original_note h5 a:eq(1)").text(notetitle);
        $(this).parents(".user_message_textarea").css("display", "none");
        $(".feedback").css("display", "block");
        $(".feedback_active").css("display", "none");
        setTimeout(function () {
            $(".user_message_textarea .content").html("");
        }, 500);
    });
});