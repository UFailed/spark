// JavaScript Document
$(document).ready(function (e) {
    $(".feedback").click(function () {
        $(".feedback").css("display", "block");
        $(".feedback_active").css("display", "none");
        $(this).css("display", "none");
        $(this).parent(".button_box").find(".feedback_active").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_message_comment_textarea.html",
            async: false,
            beforeSend: function () {
                $(".user_message_textarea .content").html("");
                $(".user_message_textarea .content").html("<img src='images/loading.gif />'");
            }
        });
        $(this).parents("li").find(".user_message_textarea .content").html(htmlobj.responseText);
        $(".user_message_textarea").css("display", "none");
        $(this).parents("li").find(".user_message_textarea").slideDown("fast");
    });
    $(".feedback_active").click(function () {
        $(".feedback").css("display", "block");
        $(".feedback_active").css("display", "none");
        $(this).parents("li").find(".user_message_textarea").slideUp("fast");
        setTimeout(function () {
            $(".user_message_textarea .content").html("");
        }, 500);
    });
    //删除信息
    $(".operate_layer").css({opacity: "0"})
    $(".delete").click(function () {
        $(".operate_layer").css("z-index", "10001");
        $(".operate_layer .content p").text("确定要删除此条吗？");
        thisX = parseInt($(this).offset().left);
        thisY = parseInt($(this).offset().top);
        layerWidth = parseInt($(".operate_layer").width());
        layerHeight = parseInt($(".operate_layer").height());
        $(".operate_layer .arrow").css("margin-left", layerWidth / 2);
        X = thisX - layerWidth / 2 + 34;
        Y = thisY - layerHeight;
        $(".operate_layer").css({left: X, top: Y})
        $(".operate_layer").animate({opacity: "1"}, 100);
        liNum = $(this).parents("li").index();
        return liNum;
    });
    //加入黑名单
    $(".blacklist").click(function () {
        $(".operate_layer").css("z-index", "10001");
        $(".operate_layer .content p").text("确定要将Ta加入黑名单吗？");
        thisX = parseInt($(this).offset().left);
        thisY = parseInt($(this).offset().top);
        layerWidth = parseInt($(".operate_layer").width());
        layerHeight = parseInt($(".operate_layer").height());
        $(".operate_layer .arrow").css("margin-left", layerWidth / 2);
        X = thisX - layerWidth / 2 + 34;
        Y = thisY - layerHeight;
        $(".operate_layer").css({left: X, top: Y})
        $(".operate_layer").animate({opacity: "1"}, 100);
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
            $(".right ul:eq(1) li:eq(" + liNum + ")").remove();
        }
        $(".right ul:eq(1) li:eq(" + liNum + ")").slideUp();

        setTimeout(function () {
            listremove()
        }, 1000);
        $(".operate_layer").animate({opacity: "0"}, 100);
        setTimeout(function () {
            $(".operate_layer").css("z-index", "-50");
        }, 500);
    });

});