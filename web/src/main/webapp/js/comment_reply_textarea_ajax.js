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
    $(".comment_list_textarea input").click(function () {
        var replyText = $(".comment_list_textarea textarea").val();
        var commentText = $(this).parents("li").find(".comment_content p:first").text();
        $(this).parents(".note").find(".comment_list").prepend("<li></li>");
        var htmlobj = $.ajax({
            url: "关注页-回复留言列表内容页.html",
            async: false,
        });
        $(this).parents(".note").find(".comment_list li:eq(0)").html(htmlobj.responseText);
        $(this).parents(".note").find(".comment_list li:eq(0) p:first").text(replyText);
        $(this).parents(".note").find(".comment_list li:eq(0) .comment_content .comment_reply p").text(commentText);
        var floorNum = $(this).parents(".note").find(".comment_list li").size();
        $(this).parents(".note").find(".comment_list li:eq(0) h6 .comment_date_floor").text("[" + floorNum + "楼]");
        $(".comment_list_textarea").html("");
        $(".comment_list .button_feedback_active").css("display", "none");
        $(".comment_list .button_feedback").css("display", "block");
    });

});