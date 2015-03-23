// JavaScript Document
$(document).ready(function (e) {
    $(".gray_button").mouseenter(function () {
        var X = $(this).offset().left;
        var Y = $(this).offset().top;
        $(".attention").css({left: X - 40, top: Y + 30});
        $(".attention").fadeIn(100);
    });
    $(".gray_button").mouseout(function () {
        $(".attention").fadeOut(100);
    });
    //倒计时按钮
    $('.get_CAPTCHA').click(function () {
        $(this).css("display", "none");
        $(".timeCount").css("display", "block");
        var count = 59;
        var countdown1 = setInterval(CountDown, 1000);

        function CountDown() {
            $(".timeCount").text(count + "秒后重新获取");
            if (count == 0) {
                clearInterval(countdown1);
                $(".get_CAPTCHA").css("display", "block");
                $(".timeCount").css("display", "none");
            }
            count--;
        }
    });
    //原始头像图片框显示模式
    var OimgW = $(".original_pic img").width();
    var OimgH = $(".original_pic img").height();
    if (OimgW > OimgH) {
        $(".original_pic img").width(298);
    }
    else if (OimgW < OimgH) {
    }
});