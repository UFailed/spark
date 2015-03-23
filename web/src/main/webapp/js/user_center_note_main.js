// JavaScript Document
$(document).ready(function (e) {
    $(".user_note_order li:eq(0) a").css("color", "#2175d0");
    $(".user_note_order li:eq(0) .down em").css("border-top-color", "#2175d0");
    $(".user_note_order a").click(function () {
        $(".user_note_order a").css("color", "#666");
        $(".down em").css("border-top-color", "#666");
        $(".up em").css("border-bottom-color", "#666");
        $(this).css("color", "#2175d0");
        $(this).parents("li").find(".down em").css("border-top-color", "#2175d0");
    });
    $(".up").click(function () {
        $(".up em").css("border-bottom-color", "#666");
        $(".down em").css("border-top-color", "#666");
        $(this).parents("li").find("a").css("color", "#2175d0");
        $(this).children("em").css("border-bottom-color", "#2175d0");
    });
    $(".down").click(function () {
        $(".up em").css("border-bottom-color", "#666");
        $(".down em").css("border-top-color", "#666");
        $(this).parents("li").find("a").css("color", "#2175d0");
        $(this).children("em").css("border-top-color", "#2175d0");
    });
    var thisX;
    var thisY;
    var layerWidth;
    var layerHeight;
    var X;
    var Y;
    var liNum;
    $(".operate_layer").css({display: "none"});
    $(".note_delete_application").css({display: "none"});
    $(".note_delete").click(function () {
        thisX = parseInt($(this).offset().left);
        thisY = parseInt($(this).offset().top);
        layerWidth = parseInt($(".operate_layer").width());
        layerHeight = parseInt($(".operate_layer").height());
        $(".operate_layer .arrow").css("margin-left", layerWidth / 2);
        X = thisX - layerWidth / 2 + 34;
        Y = thisY - layerHeight;
        liNum = $(this).parents(".user_note_list").index();
        if ($(this).parents(".user_note_list").attr("data-type") != "essence_note") {
            $(".operate_layer").css("z-index", "10001");
            $(".operate_layer .content p").text("确定要删除此条帖子吗？");
            $(".operate_layer").css({left: X, top: Y})
            $(".operate_layer").fadeIn(100);
            return liNum;
        }
        else {
            XX = X - 310;
            YY = Y + 150;
            $(".note_delete_application").css("z-index", "10001");
            $(".note_delete_application").css({left: XX, top: YY})
            $(".note_delete_application").fadeIn();
        }
    });
    $(".note_delete_application .cancel").click(function () {
        $(".note_delete_application").fadeOut();
    });
    $(".note_delete_application .tj").click(function () {
        $(".note_delete_application").fadeOut();
    });
    //确定取消按钮
    $(".operate_layer .cancel").click(function () {
        $(".operate_layer").fadeOut();
        setTimeout(function () {
            $(".operate_layer").css("z-index", "-50");
        }, 500);
    });
    $(".operate_layer .ok").click(function () {
        var listremove = function () {
            $(".user_note_list:eq(" + liNum + ")").remove();
        }
        $(".user_note_list:eq(" + liNum + ")").slideUp();

        setTimeout(function () {
            listremove()
        }, 1000);
        $(".operate_layer").fadeOut(100);
        setTimeout(function () {
            $(".operate_layer").css("z-index", "-50");
        }, 500);
    });
});