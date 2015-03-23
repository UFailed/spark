// JavaScript Document
$(document).ready(function (e) {
    var liNum;
    var thisX;
    var thisY;
    var layerWidth;
    var layerHeight;
    var username;
    var X;
    var Y;
    $(".operate_layer").css({opacity: "0"});
    //加关注
    $(".follow_button").click(function () {
        $(this).css("display", "none");
        $(this).parent(".button_box").find(".following_button").fadeIn();
    });
    //移除好友
    $(".remove_button").click(function () {
        $(".operate_layer").css("z-index", "10001");
        username = $(this).parents("li").find("h5").text();
        $(".operate_layer .content p span:eq(1)").text(username);
        $(".operate_layer .content p span:eq(0)").text("移除");
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
    $(".blacklist_button").click(function () {
        $(".operate_layer").css("z-index", "10001");
        username = $(this).parents("li").find("h5").text();
        $(".operate_layer .content p span:eq(1)").text("加入黑名单");
        $(".operate_layer .content p span:eq(0)").text("将" + username);
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
    //取消关注
    $(".unfollow_button").click(function () {
        $(".operate_layer").css("z-index", "10001");
        username = $(this).parents("li").find("h5").text();
        $(".operate_layer .content p span:eq(1)").text("的关注吗");
        $(".operate_layer .content p span:eq(0)").text("取消对" + username);
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
    //移除黑名单
    $(".remove_blacklist_button").click(function () {
        $(".operate_layer").css("z-index", "10001");
        username = $(this).parents("li").find("h5").text();
        $(".operate_layer .content p span:eq(1)").text("移出黑名单吗");
        $(".operate_layer .content p span:eq(0)").text("将" + username);
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