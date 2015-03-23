$(document).ready(function () {
    var TextInputVal;
    $("input").focus(function () {
        TextInputVal = $(this).val();
        if (TextInputVal == "搜索帖子、用户" || TextInputVal == "在这里输入标题，最多输入30个文字" || TextInputVal == "可不选" || TextInputVal == "搜索关注的人" || TextInputVal == "搜索粉丝" || TextInputVal == "搜索黑名单" || TextInputVal == "搜索私信" || TextInputVal == "搜索系统消息" || TextInputVal == "搜索评论" || TextInputVal == "搜索我的帖子" || TextInputVal == "搜索我的收藏") {
            $(this).val("");
            $(this).css("color", "#666");
        }

    });
    $("#header input").blur(function () {
        TextInputVal = $(this).val();
        if (TextInputVal == "") {
            $(this).val("搜索帖子、用户");
            $(this).css("color", "#979797");
        }
    });
    $(".pub_title_box .title").blur(function () {
        TextInputVal = $(this).val();
        if (TextInputVal == "") {
            $(this).val("在这里输入标题，最多输入30个文字");
            $(this).css("color", "#979797");
        }
    });
    $(".pub_title_box .intst").blur(function () {
        TextInputVal = $(this).val();
        if (TextInputVal == "") {
            $(this).val("可不选");
            $(this).css("color", "#979797");
        }
    });
    $(".fs01 input").blur(function () {
        TextInputVal = $(this).val();
        if (TextInputVal == "") {
            $(this).val("搜索关注的人");
            $(this).css("color", "#979797");
        }
    });
    $(".fs02 input").blur(function () {
        TextInputVal = $(this).val();
        if (TextInputVal == "") {
            $(this).val("搜索粉丝");
            $(this).css("color", "#979797");
        }
    });
    $(".fs03 input").blur(function () {
        TextInputVal = $(this).val();
        if (TextInputVal == "") {
            $(this).val("搜索黑名单");
            $(this).css("color", "#979797");
        }
    });
    $(".ms01 input").blur(function () {
        TextInputVal = $(this).val();
        if (TextInputVal == "") {
            $(this).val("搜索评论");
            $(this).css("color", "#979797");
        }
    });
    $(".ms02 input").blur(function () {
        TextInputVal = $(this).val();
        if (TextInputVal == "") {
            $(this).val("搜索私信");
            $(this).css("color", "#979797");
        }
    });
    $(".ms03 input").blur(function () {
        TextInputVal = $(this).val();
        if (TextInputVal == "") {
            $(this).val("搜索系统消息");
            $(this).css("color", "#979797");
        }
    });
    $(".ns .search_user").blur(function () {
        TextInputVal = $(this).val();
        if (TextInputVal == "") {
            $(this).val("搜索我的帖子");
            $(this).css("color", "#979797");
        }
    });
    $("input").keyup(function () {
        var abc = $(this).val();
        $(".abc").css("display", "block");
        $(".abc").text(abc);
        if (abc == "") {
            $(".abc").css("display", "none");
        }
    });


}); 
