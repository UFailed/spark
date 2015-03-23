// JavaScript Document
$(document).ready(function (e) {
    //图片弹出层
    $(".pic_list li a").click(function () {
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        $(".overlay").css({width: winWidth, height: winHeight});
        $(".overlay .overlay_slide").css({marginTop: winHeight / 2 - 300});
        $(".overlay .overlay_slide").css({marginLeft: winWidth / 2 - 425});
        $(".overlay").fadeIn(); //点击打开定位弹层
        var SpiclistNum = $(".overlay_S_piclist li").size();
        var LpiclistNum = $(".overlay_L_piclist li").size();
        $(".overlay_S_piclist").width(SpiclistNum * 90);
        //设置小图列表宽度
        var LpiclistWidth = LpiclistNum * 720;
        $(".overlay_L_piclist").width(LpiclistWidth);
        var noteLiNum = $(this).parent("li").index();
        var LpicNum = 0 - noteLiNum;
        var NumX = noteLiNum + 1;
        $(".overlay_L_piclist").animate({left: LpicNum * 720});
        $(".overlay_S_piclist li").css({width: "80px", height: "80px", border: "none"});
        $(".overlay_S_piclist li:eq(" + noteLiNum + ")").css({
            width: "74px",
            height: "74px",
            border: "3px solid #2175d0"
        });
        var Smove = Math.abs(NumX * 90 - 680);
        if (noteLiNum > 6) {
            $(".overlay_S_piclist").animate({left: -Smove});
        }
    });
    window.onresize = function () {
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        $(".overlay").css({width: winWidth, height: winHeight});
        $(".overlay .overlay_slide").css({marginTop: winHeight / 2 - 300});
        $(".overlay .overlay_slide").css({marginLeft: winWidth / 2 - 425});
    }//窗口变换定位弹层
    $(".overlay_close").click(function () {
        $(".overlay").fadeOut("fast");
    });//关闭按钮
    $(".overlay_S_piclist li").click(function () {
        var SpicNUM = $(this).index();
        var LpicNUM = 0 - SpicNUM;
        $(".overlay_L_piclist").animate({left: LpicNUM * 720});
        $(".overlay_S_piclist li").css({width: "80px", height: "80px", border: "none"});
        $(this).css({width: "74px", height: "74px", border: "3px solid #2175d0"});
    });//点击小图显示相应的大图
    //大图左侧滑动按钮
    $(".b_prev").click(function () {
        var LpiclistLeft = parseInt($(".overlay_L_piclist").css("left"));
        var mod = LpiclistLeft % 720;
        if (mod != 0) {
            return false;
        }
        if (LpiclistLeft == 0) {
            return false;
        }
        else {
            var LpiclistMoveLeft = LpiclistLeft + 720;
            $(".overlay_L_piclist").animate({left: LpiclistMoveLeft});
            var LpicNum = Math.abs(LpiclistLeft) / 720 - 1;
            $(".overlay_S_piclist li").css({width: "80px", height: "80px", border: "none"});
            $(".overlay_S_piclist li:eq(" + LpicNum + ")").css({
                width: "74px",
                height: "74px",
                border: "3px solid #2175d0"
            });
        }
        if (LpicNum > 5) {
            var SpiclistMoveLeft = (LpicNum - 4) * 90;
            $(".overlay_S_piclist").animate({left: -SpiclistMoveLeft});
        }
        else if (LpicNum <= 4) {
            $(".overlay_S_piclist").animate({left: 0});
        }
    });
    //大图右侧滑动按钮
    $(".b_next").click(function () {
        var LpiclistLeft = parseInt($(".overlay_L_piclist").css("left"));
        var LpicNum = Math.abs(LpiclistLeft) / 720;
        var mod = LpiclistLeft % 720;
        var aaa = $(".overlay_L_piclist").width();
        var bbb = aaa + LpiclistLeft;
        if (mod != 0 || bbb == 720) {
            return false;
        }
        var LpiclistMoveRight = LpiclistLeft - 720;
        $(".overlay_L_piclist").animate({left: LpiclistMoveRight});
        var LpicNum = Math.abs(LpiclistLeft) / 720 + 1;
        $(".overlay_S_piclist li").css({width: "80px", height: "80px", border: "none"});
        $(".overlay_S_piclist li:eq(" + LpicNum + ")").css({
            width: "74px",
            height: "74px",
            border: "3px solid #2175d0"
        });
        if (LpicNum > 6) {
            var SpiclistMoveLeft = (LpicNum - 4) * 90;
            $(".overlay_S_piclist").animate({left: -SpiclistMoveLeft});
        }

    });
    //小图左滑动
    $(".S_prev").click(function () {
        var SpiclistLeft = parseInt($(".overlay_S_piclist").css("left"));
        if (-SpiclistLeft > 680) {
            $(".overlay_S_piclist").animate({left: SpiclistLeft + 630});
        }
        else {
            $(".overlay_S_piclist").animate({left: 0});
        }
    });
    //小图右滑动
    $(".S_next").click(function () {
        var SpiclistWidth = parseInt($(".overlay_S_piclist").width());
        var SpiclistLeft = parseInt($(".overlay_S_piclist").css("left"));
        var cha = SpiclistWidth + SpiclistLeft - 630;
        if (cha > 680) {
            $(".overlay_S_piclist").animate({left: SpiclistLeft - 630});
        }
        else {
            $(".overlay_S_piclist").animate({left: SpiclistLeft - cha});
        }
    });
});