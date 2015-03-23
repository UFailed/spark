// JavaScript Document
$(document).ready(function () {
    //弹出兴趣菜单
    var selectText;
    $(".shut_intst_list").click(function () {
        $(".intst_list").fadeOut();
        var ttt = $(".intst_input").children(".intst_label").size();
        if (ttt == 0) {
            $(".intst").css("display", "block");
            $(".intst_input").css("display", "none");
        }
    });
    $(".intst_input").click(function () {
        $(".intst_list").fadeIn();
        $(".intst_list").css("marginTop", "42px");
    });
    $(".intst").focus(function () {
        $(".intst_list").fadeIn();
    });
    $(".intst_list ul li a").click(function () {
        selectText = $(this).text();
        $(".intst").css("display", "none");
        $(".intst_input").css("display", "block");
        $(".intst_list").css("marginTop", "42px");
        var abc = $(".pub_title_box .intst_input .intst_label").text();
        if (abc.indexOf(selectText) >= 0) {
            return false;
        }
        $(".pub_title_box .intst_input").append("<span class='intst_label'>" + selectText + "<a class='shut' onclick='$(this).parent().remove();' href='javascript:void(0);'>x</a></span>");
    });
    //上传图片尺寸约束
    var imgWidth = $(".pub_edit_box .img_box img").width();
    var imgHeight = $(".pub_edit_box .img_box img").height();
    $(".pub_edit_box .img_box img").width("738px");
    var imgFheight = 738 * imgHeight / imgWidth;
    $(".pub_edit_box .img_box img").height(imgFheight);

    //图片添加标签
    var i = 0;
    $(".pub_edit_box .img_box img").mousedown(function () {//添加标签
        var j = $(".img_box").children(".label").length;
        var SinitL = event.offsetX;//标签定位
        var SinitT = event.offsetY;
        var addLabel = function () {//定义添加标签方法
            $(".img_box").append("<div class='label' id='label" + i + "'><input type='text' value='在此输入内容'/><span></span><a href='javascript:void(0);' onclick='$(this).parent().remove();'>X</a></div>");
            $("#label" + i + " input").focus(function () {
                var defaultText = $("#label" + i + " input").val();
                if (defaultText == "在此输入内容") {
                    $("#label" + i + " input").val("");
                    $("#label" + i + " input").css("color", "#ccc");
                }
            });
            $("#label" + i).css({'left': SinitL + 2 + "px", 'top': SinitT - 15 + "px"});
        }
        var labelDirection = function () {//定义标签方向方法
            if (SinitL < 319 & SinitL > 130) {
                $("#label" + i).addClass("label-left");
                $("#label" + i).css({'left': SinitL - 130 + "px", 'top': SinitT - 15 + "px"})
                $("#label" + i + " span").css({float: "right", marginTop: "8px"});
                $("#label" + i + " a").css({float: "left", marginTop: "8px"});
            }
            else if (SinitL < 590 & SinitL > 318) {
                $("#label" + i + " span").css({float: "left", marginTop: "8px"});
                $("#label" + i + " a").css({float: "right", marginTop: "8px"});
            }
            else if (SinitL > 590) {
                $("#label" + i).addClass("label-left");
                $("#label" + i).css({'left': SinitL - 130 + "px", 'top': SinitT - 15 + "px"})
                $("#label" + i + " span").css({float: "right", marginTop: "8px"});
                $("#label" + i + " a").css({float: "left", marginTop: "8px"});
            }
            else {
                $("#label" + i + " span").css({float: "left", marginTop: "8px"});
                $("#label" + i + " a").css({float: "right", marginTop: "8px"});
            }
        }

        var onEnter = function () {//定义按回车键确认输入方法
            $("#label" + i + " input").keypress(function () {
                var key = event.keyCode;
                if (key == 13) {
                    var labelText = $("#label" + i + " input").val();
                    $(".label input").css("display", "none");
                    $("#label" + i + " span").text(labelText);
                    $("#label" + i + " a").css("display", "block");
                    $("#label" + i + " span").css("display", "block");
                    labelMove();
                }
            });
        }
        var labelMove = function () {//定义拖动标签方法
            $(".label").css("cursor", "move");
            var _move = false;//移动标记
            var aabb;
            var _x, _y;//鼠标离控件左上角的相对位置
            $(".label").mousedown(function (e) {
                _move = true;
                aabb = $(this).attr("id");
                _x = e.pageX - parseInt($(this).css("left"));
                _y = e.pageY - parseInt($(this).css("top"));
                $("#" + aabb).fadeTo(20, 0.5);//点击后开始拖动并透明显示
            });
            $(document).mousemove(function (e) {
                if (_move) {
                    var x = e.pageX - _x;//移动时根据鼠标位置计算控件左上角的绝对位置
                    var y = e.pageY - _y;
                    $("#" + aabb).css({top: y, left: x});

                }
            }).mouseup(function () {
                _move = false;
                $("#" + aabb).fadeTo("fast", 1);//松开鼠标后停止移动并恢复成不透明
            });
        }
        //判断添加标签的条件
        if (j < 5) {
            if (j == 0) {
                addLabel();
                labelDirection();
                onEnter();
                //---------------
            }
            else {
                if ($("#label" + i + " input").val() == "" || $("#label" + i + " input").val() == "在此输入内容") {
                    $("#label" + i).remove();
                    i = i + 1;
                    addLabel();
                    labelDirection();
                    onEnter();
                }
                else {
                    var labelText = $("#label" + i + " input").val();
                    $(".label input").css("display", "none");
                    $("#label" + i + " span").text(labelText);
                    $("#label" + i + " a").css("display", "block");
                    $("#label" + i + " span").css("display", "block");
                    labelMove();
                    i = i + 1;
                    addLabel();
                    onEnter();
                    labelDirection();
                }
            }
        }//j<5finish
        else if (j == 5) {
            var labelText = $("#label" + i + " input").val();
            $(".label input").css("display", "none");
            $("#label" + i + " span").text(labelText);
            $("#label" + i + " a").css("display", "block");
            $("#label" + i + " span").css("display", "block");
            $("#label" + i)
        }
    });//img mousedown finish


});//document.ready====================
