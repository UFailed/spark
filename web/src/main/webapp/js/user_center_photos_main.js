$(document).ready(function (e) {
    var htmlobjS = $.ajax({
        url: "/user/media/album/",
        async: false,
        beforeSend: function () {
            $(".user_picture_list").html("<img src='images/loading.gif />'");
        }
    });
    $(".user_picture_list").html(htmlobjS.responseText);

    $("#picture_b").click(function () {
        $(this).addClass("list_tab_cur");
        $("#video_b").removeClass("list_tab_cur");
        var htmlobjS = $.ajax({
            url: "/user/media/album/",
            async: false,
            beforeSend: function () {
                $(".user_video_list").html("");
                $(".user_picture_list").html("<img src='images/loading.gif />'");
            }
        });
        $(".user_picture_list").html(htmlobjS.responseText);
    });
    $("#video_b").click(function () {
        $(this).addClass("list_tab_cur");
        $("#picture_b").removeClass("list_tab_cur");
        var htmlobjS = $.ajax({
            url: "/user/media/video/",
            async: false,
            beforeSend: function () {
                $(".user_picture_list").html("");
                $(".user_video_list").html("<img src='images/loading.gif />'");
            }
        });
        $(".user_video_list").html(htmlobjS.responseText);
    });
});