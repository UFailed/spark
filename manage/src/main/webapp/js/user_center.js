// JavaScript Document
$(document).ready(function (e) {
    //左侧菜单样式切换
    //设置导航字体切换样式
    $(".user_main .left .user_navigator li a").mouseup(function () {
        $(".user_main .left .user_navigator li a").css("color", "#666");
        $(this).css("color", "#fff");
    });
    //默认加载数据中心
    $(".user_main .right").css("display", "none");
    $("#user_IDC").css("display", "block");
    var htmlobjs = $.ajax({
        url: "user_IDC-ajax.html",
        async: false,
        beforeSend: function () {
            $(".user_main .right").html("");
            $(".user_main #user_IDC").html("<img src='images/loading.gif />'");
        },
        //success:function(){
        //$(".user_main #user_IDC").html(htmlobjs.responseText);
        //}
    });
    $(".user_main #user_IDC").html(htmlobjs.responseText);
    $("#user_IDC").css("display", "block");
    //点击数据中心导航
    $(".user_main .left .user_navigator #nav_IDC").mousedown(function () {
        $(".user_main .left .blue_back").animate({top: "0px"}, 200);
        $(".user_main .right").css("display", "none");
        $("#user_IDC").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_IDC-ajax.html",
            async: false,
            beforeSend: function () {
                $(".user_main .right").html("");
                $(".user_main #user_IDC").html("<img src='images/loading.gif />'");
            },
            //success:function(){
            //	$(".user_main #user_IDC").html(htmlobj.responseText);
            //}
        });
        $(".user_main #user_IDC").html(htmlobj.responseText);
    });
    //点击好友管理导航
    $(".user_main .left .user_navigator #nav_friend").mousedown(function () {
        $(".blue_back").animate({top: "40px"}, 200);
        $(".user_main .right").css("display", "none");
        $("#user_friend").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_friend-ajax.html",
            async: false,
            beforeSend: function () {
                $(".user_main .right").html("");
                $(".user_main #user_friend").html("<img src='images/loading.gif />'");
            },
            //success:function(){
            //$(".user_main #user_friend").html(htmlobj.responseText);
            //}
        });
        $("#user_friend").html(htmlobj.responseText);
    });
    //点击消息中心	导航
    $(".user_main .left .user_navigator #nav_message").mousedown(function () {
        $(".blue_back").animate({top: "80px"}, 200);
        $(".user_main .right").css("display", "none");
        $("#user_message").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_message-ajax.html",
            async: false,
            beforeSend: function () {
                $(".user_main .right").html("");
                $(".user_main #user_message").html("<img src='images/loading.gif />'");
            },
            //success:function(){
            //$(".user_main #user_message").html(htmlobj.responseText);
            //}
        });
        $(".user_main #user_message").html(htmlobj.responseText);
    });
    //点击帖子管理导航
    $(".user_main .left .user_navigator #nav_note").mousedown(function () {
        $(".blue_back").animate({top: "120px"}, 200);
        $(".user_main .right").css("display", "none");
        $("#user_note").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_note-ajax.html",
            async: false,
            beforeSend: function () {
                $(".user_main .right").html("");
                $(".user_main #user_note").html("<img src='images/loading.gif />'");
            },
            //success:function(){
            //$(".user_main #user_note").html(htmlobj.responseText);
            //}
        });
        $(".user_main #user_note").html(htmlobj.responseText);
    });
    //点击相册管理导航
    $(".user_main .left .user_navigator #nav_photos").mousedown(function () {
        $(".blue_back").animate({top: "160px"}, 200);
        $(".user_main .right").css("display", "none");
        $("#user_photos").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_photos-ajax.html",
            async: false,
            beforeSend: function () {
                $(".user_main .right").html("");
                $(".user_main #user_photos").html("<img src='images/loading.gif />'");
            },
            //success:function(){
            //$(".user_main #user_photos").html(htmlobj.responseText);
            //}
        });
        $(".user_main #user_photos").html(htmlobj.responseText);
    });
    //点击收藏管理导航
    $(".user_main .left .user_navigator #nav_collection").mousedown(function () {
        $(".blue_back").animate({top: "200px"}, 200);
        $(".user_main .right").css("display", "none");
        $("#user_collection").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_collection-ajax.html",
            async: false,
            beforeSend: function () {
                $(".user_main .right").html("");
                $(".user_main #user_collection").html("<img src='images/loading.gif />'");
            },
            //success:function(){
            //$(".user_main #user_collection").html(htmlobj.responseText);
            //}
        });
        $(".user_main #user_collection").html(htmlobj.responseText);
    });
    //点击积分商城导航
    $(".user_main .left .user_navigator #nav_mall").mousedown(function () {
        $(".blue_back").animate({top: "240px"}, 200);
        $(".user_main .right").css("display", "none");
        $("#user_mall").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_mall-ajax.html",
            async: false,
            beforeSend: function () {
                $(".user_main .right").html("");
                $(".user_main #user_mall").html("<img src='images/loading.gif />'");
            },
            //success:function(){
            //$(".user_main #user_mall").html(htmlobj.responseText);
            //}
        });
        $(".user_main #user_mall").html(htmlobj.responseText);
    });
    //点击个人设置导航
    $(".user_main .left .user_navigator #nav_setup").mousedown(function () {
        $(".blue_back").animate({top: "280px"}, 200);
        $(".user_main .right").css("display", "none");
        $("#user_setup").css("display", "block");
        var htmlobj = $.ajax({
            url: "user_setup-ajax.html",
            async: false,
            beforeSend: function () {
                $(".user_main .right").html("");
                $(".user_main #user_setup").html("<img src='images/loading.gif />'");
            },
            //success:function(){
            //$(".user_main #user_setup").html(htmlobj.responseText);
            //}
        });
        $(".user_main #user_setup").html(htmlobj.responseText);
    });

});