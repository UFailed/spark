$(document).ready(function (e) {
    //评论帖子提交
    var comment_submit = function () {
        var pubText = $(".comment_textarea textarea").val();
        if (pubText == "请发表评论，评论中不要带有侮辱国家，他人" || pubText == "") {
            return false;
        }
        $(this).parents(".note").find(".comment_list").prepend("<li></li>");
        $(this).parents(".note").find(".comment_list li:eq(0)").load("关注页-留言列表内容页.html");
    }
    $(".comment_textarea input").click(comment_submit);

    //取消收藏
    $(".collect_b").click(function () {
        $(".operate_layer").css("z-index", "10001");
        username = $(this).parents("li").find("h5").text();
        thisX = parseInt($(this).offset().left);
        thisY = parseInt($(this).offset().top);
        layerWidth = parseInt($(".operate_layer").width());
        layerHeight = parseInt($(".operate_layer").height());
        $(".operate_layer .arrow").css("margin-left", layerWidth / 2);
        X = thisX - layerWidth / 2 + 60;
        Y = thisY - layerHeight;
        $(".operate_layer").css({left: X, top: Y})
        $(".operate_layer").fadeIn(100);
        liNum = $(this).parents("li").index();
        return liNum;
    });
    //确定取消按钮
    $(".operate_layer .cancel").click(function () {
        $(".operate_layer").animate({opacity: "0"});
        setTimeout(function () {
            $(".operate_layer").css("z-index", "-50");
        }, 500);
    });
    $(".operate_layer .ok").click(function () {
        var listremove = function () {
            $(".note:eq(" + liNum + ")").remove();
        }
        $(".note:eq(" + liNum + ")").slideUp();
        setTimeout(function () {
            listremove()
        }, 1000);
        $(".operate_layer").fadeOut(100);
        setTimeout(function () {
            $(".operate_layer").css("z-index", "-50");
        }, 500);
    });
});