// JavaScript Document
$(document).ready(function (e) {

    //图片描述
    $(".pic_area .pic_info").mouseenter(function () {
        $(this).animate({marginTop: "62px"}, 200);
    });
    $(".pic_area .pic_info").mouseleave(function () {
        $(this).animate({marginTop: "98px"}, 200);
    });
    //幻灯片
    $(".slide_pic_list li").css("opacity", "0");
    $(".slide_pic_list li").css("z-index", "1");
    $(".slide_pic_list li:eq(0)").css("opacity", "1");
    $(".slide_pic_list li:eq(0)").css("z-index", "2");
    var i = 0;
    var j = 0;
    var abc = function () {
        $(".slide_pic_list li:eq(" + i + ")").animate({opacity: "0"}, 1500);
        $(".slide_pic_list li").css("z-index", "1");
        i = i + 1;
        if (i == 5) {
            i = 0;
        }
        $(".slide_pic_list li:eq(" + i + ")").animate({opacity: "1"}, 1500);
        $(".slide_pic_list li:eq(" + i + ")").css("z-index", "2");
        $(".slide_button a").css("color", "#fff");
        $(".slide_button a:eq(" + i + ")").css("color", "#2175d0");
        return i;
    }
    $(".slide_button a").click(function () {
        j = $(this).index();
        $(".slide_pic_list li:eq(" + i + ")").animate({opacity: "0"}, 1500);
        $(".slide_pic_list li").css("z-index", "1");
        $(".slide_pic_list li:eq(" + j + ")").animate({opacity: "1"}, 1500);
        $(".slide_pic_list li:eq(" + j + ")").css("z-index", "2");
        $(".slide_button a").css("color", "#fff");
        $(".slide_button a:eq(" + j + ")").css("color", "#2175d0");
        i = j;
        return j;
    });
    var aaa = setInterval(abc, 4000);
    $(".slide_show").mouseleave(function () {
        aaa = setInterval(abc, 4000)
    });
    $(".slide_show").mouseenter(function () {
        clearInterval(aaa);
    });

    //首页选卡导航
    $(".main_tab li").click(function () {
        $(".main_tab li").removeClass("current");
        $(this).addClass("current");
    });


});