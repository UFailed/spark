$(document).ready(function (e) {
// JavaScript Document
    //自动加载选题
    var htmlobjS = $.ajax({
        url: "homepage-selected-ajax.html",
        async: false,
        beforeSend: function () {
            $(".interest_topic_main").html("");
            $(".follow_main").html("");
            $(".ranking_main").html("");
            $(".user_main").html("");
            $(".selected_topic_main").html("<img src='images/loading.gif />'");
        }
    });
    $(".selected_topic_main").html(htmlobjS.responseText);
    //点击选题选卡触发加载
    $(".main_tab #selected").click(function () {
        var htmlobj = $.ajax({
            url: "homepage-selected-ajax.html",
            async: false,
            beforeSend: function () {
                $(".interest_topic_main").html("");
                $(".follow_main").html("");
                $(".ranking_main").html("");
                $(".user_main").html("");
                $(".interest_topic_main").html("<img src='images/loading.gif />'");
            }
        });
        $(".selected_topic_main").html(htmlobj.responseText);
    });
    //点击兴趣选卡触发加载
    $(".main_tab #interest").click(function () {
        var htmlobj = $.ajax({
            url: "homepage-interest-ajax.html",
            async: false,
            beforeSend: function () {
                $(".selected_topic_main").html("");
                $(".follow_main").html("");
                $(".ranking_main").html("");
                $(".user_main").html("");
                $(".interest_topic_main").html("<img src='images/loading.gif />'");
            }
        });
        $(".interest_topic_main").html(htmlobj.responseText);
    });
    //点击关注选卡触发加载
    $(".main_tab #follow").click(function () {
        var htmlobj = $.ajax({
            url: "homepage-follow-ajax.html",
            async: false,
            beforeSend: function () {
                $(".selected_topic_main").html("");
                $(".interest_topic_main").html("");
                $(".ranking_main").html("");
                $(".user_main").html("");
                $(".follow_main").html("<img src='images/loading.gif />'");
            }
        });
        $(".follow_main").html(htmlobj.responseText);
    });
    //点击排行榜选卡触发加载
    $(".main_tab #ranking").click(function () {
        var htmlobj = $.ajax({
            url: "homepage-ranking-ajax.html",
            async: false,
            beforeSend: function () {
                $(".selected_topic_main").html("");
                $(".interest_topic_main").html("");
                $(".follow_main").html("");
                $(".user_main").html("");
                $(".ranking_main").html("<img src='images/loading.gif />'");
            }
        });
        $(".ranking_main").html(htmlobj.responseText);
    });
    //点击用户中心选卡触发加载
    $(".main_tab #user").click(function () {
        var htmlobj = $.ajax({
            url: "homepage-user-ajax.html",
            async: false,
            beforeSend: function () {
                $(".selected_topic_main").html("");
                $(".interest_topic_main").html("");
                $(".follow_main").html("");
                $(".ranking_main").html("");
                $(".user_main").html("<img src='images/loading.gif />'");
            }
        });
        $(".user_main").html(htmlobj.responseText);
    });
    return false;
});