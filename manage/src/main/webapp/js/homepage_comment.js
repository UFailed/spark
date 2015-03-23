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

    //点击留言列表中的留言回复
    $(".comment_list .button_feedback").click(function () {
        var htmlobj = $.ajax({
            url: "comment_reply_textarea-ajax.html",
            async: false,
            beforeSend: function () {
                $(".follow_main .left .note .comment_area .comment_list li .comment_list_textarea").html("");
            }
        });
        $(this).parent("li").find("form").html(htmlobj.responseText);
        $(".comment_list .button_feedback").css("display", "block");
        $(this).css("display", "none");
        $(".comment_list .button_feedback_active").css("display", "none");
        $(this).parent("li").find(".button_feedback_active").css("display", "block")
    });
    $(".comment_list .button_feedback_active").click(function () {
        $(this).parent("li").find("form").html("");
        $(this).css("display", "none");
        $(this).parent("li").find(".button_feedback").css("display", "block");
    });
    $(".button_up").click(function () {
        var i = parseInt($(this).children("span").text());
        i = i + 1;
        $(this).children("span").text(i);
    });

});