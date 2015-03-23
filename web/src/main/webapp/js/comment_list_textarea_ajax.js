$(document).ready(function (e) {
    //评论帖子提交
    var comment_submit = function () {
        var pubText = $(".comment_textarea textarea").val();
        if (pubText == "请发表评论，评论中不要带有侮辱国家，他人" || pubText == "") {
            return false;
        }
        var htmlobj = $.ajax({
            url: "关注页-留言列表内容页.html",
            async: false,
        });
        $(this).parents(".note").find(".comment_list").prepend("<li></li>");
        $(this).parents(".note").find(".comment_list li:eq(0)").html(htmlobj.responseText);
        $(this).parents(".note").find(".comment_list li:eq(0) p").text(pubText);
        var floorNum = $(this).parents(".note").find(".comment_list li").size();
        $(this).parents(".note").find(".comment_list li:eq(0) h6 .comment_date_floor").text("[" + floorNum + "楼]");
    }
    $(".comment_textarea input").click(comment_submit);
});