<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>XXXXXBBS兴趣社区内测</title>
    <link href="css/style.css" rel="stylesheet" type="text/css" />
</head>

<body onLoad="$('input').blur()">
<div class="overlay">
    <span class="arrow"><em></em></span>
    <div class="overlay_box">
        <dl>
            <dt>球类运动：</dt>
            <dd>足球/足球鞋、篮球/篮球鞋、棒垒球、橄榄球、网球、羽毛球、乒乓球、壁球、台球、高尔夫球、保龄球；</dd>
            <dt>健身运动：</dt>
            <dd>瑜伽、健身操、器械健身、跑步机、武术、舞蹈；</dd>
            <dt>水上运动：</dt>
            <dd>游泳、潜水、帆板、帆船、皮划艇、快艇/摩托艇、漂流、戏水、风筝冲浪；</dd>
            <dt>冰雪运动：</dt>
            <dd>单板滑雪、双板滑雪、滑冰、攀冰、雪地摩托、冰球、戏雪；</dd>
            <dt>极限运动：</dt>
            <dd>滑板、长板、轮滑、跑酷、BMX、攀爬自行车、速降自行车、跳伞、滑翔伞、蹦极、翼装飞行、攀岩、建筑物攀爬、定向越野；</dd>
            <dt>户外运动：</dt>
            <dd>徒步穿越、跑步、登山、露营、骑马、垂钓、射箭、射击、自行车骑行、真人CS、马拉松、探洞、探险、户外装备、打猎;</dd>
            <dt>汽车/摩托车：</dt>
            <dd>秀汽车、秀摩托车、卡丁车、赛车、汽摩越野、自驾游、行车实录、全地形车 ；</dd>
            <dt>空中飞行：</dt>
            <dd>秀头等舱、秀开飞机、飞机模拟舱；</dd>
            <dt>遥控/模型：</dt>
            <dd>遥控车、遥控船、遥控飞机、静态模型、玩具；</dd>
            <dt>数码/科技/时尚：</dt>
            <dd>秀手机/平板、极限相机、无人机/航拍、相机/摄影、天文摄影、拍火车、拍飞机、秀手表、前沿科技、其他最新数码产品；</dd>
            <dt>军事武器：</dt>
            <dd>陆上作战武器、空中作战武器、海上作战武器、枪械、冷兵器、弓/弩；</dd>
            <dt>其它分类：</dt>
            <dd>NB酒店写真、秀我的少见职业、秀公司福利/年会、秀闺蜜、秀化妆品、秀奢侈品、秀宠物、秀文玩/首饰、秀美食、秀音乐/乐器、秀音响/耳机、秀家装/装饰、秀游艇、秀夜生活、秀身材、秀纹身、Cosplay、电子竞技、做广告、仿真人偶、我们也不知道如何分类。</dd>
        </dl>
    </div>
</div>
<div class="layers"></div>
<div class="bg">
    <img src="images/bg.jpg" class="bgimg"  />
</div>
<div class="container">
    <div class="page1">
        <p>5X兴趣社区涵盖了百余种不同的<a href="javascript:;">兴趣<span class="ask_ico"></span></a>  ，不论是你的想得到的，还是想不到的，这里都会有你的一片专属天地。你还可以尽情的和拥有共同兴趣的伙伴分享经验，比拼装备，切磋玩法。</p>
        <p>本次认证活动我们意在征集5X兴趣社区首批内测用户，在网站正式上线之后，您将会享受区别于开放注册用户的独有荣誉和认证，并被永久记录和保留。
            不论你是菜鸟、达人还是大神，只要你以往的NB作品符合我们所列兴趣的范围，都可以将原帖的链接贴入下页的框框里，我们会通过严谨的审核，邀请你加入5X兴趣社区的内测。</p>
        <a href="javascript:;" class="scroll_button">
            <div class="more"></div>
            滚动鼠标进行注册
        </a>
    </div>
    <div class="page2">
        <div class="input_area">
            <form id="form1">
                <div class="input_box"><input type="text" value="请输入您的手机号" id="phone" style="width:210px" name="phone" /><a href="javascript:;" class="get_CAPTCHA">发送验证码</a><div class="timeCount">60秒后重新获取</div><div class="mention">请输入正确的手机号码</div></div>
                <div class="input_box" style="margin-left:20px;"><input type="text" id="CAPTCHA" value="请输入您收到的验证码" name="code" /><div class="error_success"></div><div class="mention">验证码输入有误，请核对后重新输入</div></div>
                <div class="input_box"><input type="text" id="password-t" value="请输入您的密码" /><input type="password" id="password" name="password" style="display:none" /><div class="error_success"></div></div>
                <div class="input_box" style="margin-left:20px;"><input type="text" id="password_again-t" value="请再次输入您的密码" /><input type="password" id="password_again" name="password" style="display:none" /><div class="error_success"></div><div class="mention">两次输入的密码不一致，请重新输入</div></div>
                <div style="height:20px; clear:both"></div>
                <div class="input_box"><input type="text" id="note1" value="请输入您的帖子链接" name="urls[]" class="note" /><div class="error_success"></div></div>
                <div class="input_box" style="margin-left:20px;"><input type="text" id="note2" value="请输入您的帖子链接" name="urls[]" class="note" /><div class="error_success"></div></div>
                <div class="input_box"><input type="text" id="note3" value="请输入您的帖子链接" name="urls[]" class="note"/><div class="error_success"></div></div>
                <div class="input_box" style="margin-left:20px;"><input type="text" id="note4" value="请输入您的帖子链接" name="urls[]" class="note" /><div class="error_success"></div></div>
        </div>
        <input type="button" class="register" />
        </form>
    </div>
</div>

</body>
</html>
<script src="js/jquery.min.js"></script>
<script src="js/jquery.mousewheel.min.js"></script>
<script src="js/test.js"></script>
<script>
    $(".register").click(function () {
        for(var i=1;i<5;i++){
            var vals=$("#note"+i).val();
            if(vals=="请输入您的帖子链接"){
                $("#note"+i).val("");
            }
        }

        var urls=document.getElementsByName("urls[]");
        var array=new Array();

        for(var j=0;j<urls.length;j++){
            array[j]=urls.item(j).value;
        }

        var options = {
            url: '/register',
            type: 'post',
            dataType: 'text',
            data:{
                urls:array.toString(),
                phone:$("#phone").val(),
                code:$("#CAPTCHA").val(),
                password:$("#password").val()
            },
            success: function (data) {
                if(data==""){
                    alert("注册成功！")
                }
                else{
                    alert("注册失败！")
                }
            }
        };
        $.ajax(options);
        return false;
    });

    $(".get_CAPTCHA").click(function () {

        var options = {
            url: '/code',
            type: 'post',
            dataType: 'text',
            data: {
                phone: $("#phone").val()
            },
            success: function (data) {
                if (data == "") {
                    alert("验证码发送成功！")
                }
                else {
                    alert("验证码发送失败！")
                }
            }
        };
        $.ajax(options);
        return false;
    });
</script>
