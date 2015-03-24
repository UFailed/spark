// JavaScript Document
$(document).ready(function(e) {	
	  var windowHeight=$(window).height(); 
	  var windowWidth=$(window).width();
	  var margin=(windowWidth-3500)/2;
	  $(".page1").height(windowHeight);
	  $(".page2").height(windowHeight);
      $(".bg img").css("margin-left",margin);
	  $(".page1 p:first").css("margin-top",windowHeight/4);
	  $(".input_area").css("margin-top",windowHeight/4);
	  $(".container").css("margin-left",windowWidth/2-420); 
	  $(".scroll_button").css("margin-top",windowHeight/4);
	  $(".layers").height(windowHeight);
	  $(".layers").width(windowWidth);
   window.onresize=function(){
	  var windowHeight=$(window).height(); 
	  var windowWidth=$(window).width();
	  $(".layers").height(windowHeight);
	  $(".layers").width(windowWidth);
	  var margin=(windowWidth-3500)/2;
	  $(".page1").height(windowHeight);
	  $(".page2").height(windowHeight);
	  $(".page1 p:first").css("margin-top",windowHeight/4);
	  $(".input_area").css("margin-top",windowHeight/4);
      $(".bg img").css("margin-left",margin);
	  $(".container").css("margin-left",windowWidth/2-420);
	  $(".scroll_button").css("margin-top",windowHeight/4);
   }
   $(".page1 p a").mouseenter(function(){
	   var X=parseInt($(this).offset().left);
	   var Y=parseInt($(this).offset().top);
	   var overlayX=X-370;
	   var overlayY=Y+24;
	   $(".overlay").css({top:overlayY,left:overlayX});
	   $(".overlay").fadeIn();
	   $(".layers").fadeIn();
	   });
   $(".layers").click(function(){
	   $(this).fadeOut();
	   $(".overlay").fadeOut();
	   });

   $("body").mousewheel(function(event,delta){
     if(delta<0){$(".container").animate({top:-windowHeight},100)}
	 else if(delta>=0){$(".container").animate({top:0},100)}
	 });
  var arrowmove=function(){
	  $(".more").animate({top:"-40px",opacity:".4"},600);
	  $(".more").animate({top:"-50px",opacity:"1"},600);
	  }
  setInterval(arrowmove,500);
  $(".input_box input").focus(function(){
	  $(this).parents(".input_box").css("background-position","0px -45px");
	  var thisVal=$(this).val();
	  if(thisVal=="请输入您的手机号" || thisVal=="请输入您收到的验证码" || thisVal=="请输入您的帖子链接"){
		  $(this).val("");
		  $(this).css("color","#666");
		  }
	  });
   //电话号码输入
   $("#phone").blur(function(){
	  if($("#phone").val()=="" || $("#phone").val()=="请输入您的手机号"){
		  $(this).val("请输入您的手机号");
		  $(this).css("color","#a5a5a5");
		  }
	  else if(!$("#phone").val().match(/^(((13[0-9]{1})|159|153|188|186|189|177)+\d{8})$/) ){
           $(this).parent(".input_box").find(".mention").css("display","block");   
		   }
      else if($("#phone").val().match(/^(((13[0-9]{1})|159|153|188|186|189|177)+\d{8})$/) ){
		  $(this).parent(".input_box").find(".mention").css("display","none"); 
		  }
    });
//验证码控制
var CAPTCHAdata; 
$(".error_success").css("display","none"); 
$("#CAPTCHA").focus(function(){
	$.getJSON("./js/CAPTCHA.json",function(data){
  $.each(data,function(infoIndex,info){ 
    CAPTCHAdata= info["CAPTCHA"]; 
  }) 
});
	});
$("#CAPTCHA").blur(function(){
	var CAPval=$(this).val();
	if(CAPval=="" || CAPval=="请输入您收到的验证码" ){
	  if(CAPval==""){
		  $(this).val("请输入您收到的验证码");
		  $(this).css("color","#a5a5a5");
		  }
      $(this).parent(".input_box").find(".error_success").css("display","none");
	}
	else{
	  if(CAPval==CAPTCHAdata){
		  $(this).parent(".input_box").find(".error_success").css("display","block");
		  $(this).parent(".input_box").find(".error_success").css("background-position","0px 0px");
		  $(this).parent(".input_box").find(".mention").css("display","none");
		  }
	  else{
		  $(this).parent(".input_box").find(".error_success").css("display","block");
		  $(this).parent(".input_box").find(".error_success").css("background-position","0px -18px");
		  $(this).parent(".input_box").find(".mention").css("display","block");
		  }
		}
	});  
//密码框控制
var firstPassword;
var secondPassword
  $("#password-t").focus(function(){
	  $(this).css("display","none");
	  $(this).blur();
	  $("#password").css("display","inline-block");
	  $("#password").focus();
	  });
  $("#password").blur(function(){
	  if($(this).val()==""){
		  $(this).css("display","none");
		  $("#password-t").css("display","inline-block");
		  }
	  else{
		  $(this).parent(".input_box").find(".error_success").css("display","block");
		  firstPassword=$(this).val();
		  }
	  });
  $("#password_again-t").focus(function(){
	  $(this).css("display","none");
	  $(this).blur();
	  $("#password_again").css("display","inline-block");
	  $("#password_again").focus();
	  });
  $("#password_again").blur(function(){
	  if($(this).val()==""){
		  $(this).css("display","none");
		  $("#password_again-t").css("display","inline-block");
		  }
	  else{
		  $(this).parent(".input_box").find(".error_success").css("display","block");
		  secondPassword=$(this).val();
		  if(secondPassword!=firstPassword){
			  $(this).parent(".input_box").find(".error_success").css("background-position","0px -18px");
			  $(this).parent(".input_box").find(".mention").css("display","block");
			  }
		  else{
			  $(this).parent(".input_box").find(".error_success").css("background-position","0px 0px")
			  $(this).parent(".input_box").find(".mention").css("display","none");
			  }
		  }
	  });
  $(".input_box input").blur(function(){
	  $(this).parents(".input_box").css("background-position","0px 0px");
	  });
  $(".scroll_button").click(function(){
	  $(".container").animate({top:-windowHeight},100)
	  });
	//倒计时按钮	
	$('.get_CAPTCHA').click(function () { 
		$(this).css("display","none");
		$(".timeCount").css("display","block");
		var count = 59; 
		var countdown1 = setInterval(CountDown, 1000); 
		function CountDown() { 
		$(".timeCount").text(count + "秒后重新获取"); 
		if (count == 0) { 
		clearInterval(countdown1); 
		$(".get_CAPTCHA").css("display","block");
		$(".timeCount").css("display","none");
		} 
		count--; 
		} 
	});
$(".note").blur(function(){
	if($(this).val()==""){
		$(this).val("请输入您的帖子链接");
		$(this).css("color","#a5a5a5");
		}
	});
});