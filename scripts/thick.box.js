var TB_window=document.getElementById("TB_window");
var TB_image=document.getElementById("TB_Image");
var thick_Img=document.getElementById("thickImg");
var TB_overlay=document.getElementById("TB_overlay");
var box=document.getElementById("box");
var close_Button=document.getElementById("TB_closeWindowButton");

thick_Img.onclick=function(){
    TB_overlay.style.display="block";//遮罩层显示
    var pageWidth=window.innerWidth;//获取视口的宽和高
    var pageHeight=window.innerHeight;
    var img_h=pageHeight*0.7;//设置图片宽高
    var img_w=img_h;
    TB_image.style.width=img_w+"px";
    TB_image.style.height=img_h+"px";
    var H=box.offsetHeight;//设置窗口位置
    var W=box.offsetWidth;
    var T=(pageHeight-H)/2;
    var L=(pageWidth-W)/2;
    TB_window.style.top=T+"px";
    TB_window.style.left=L+"px";
}

close_Button.onclick=function(){
    TB_overlay.style.display="none";
    TB_window.style.top="";
    TB_window.style.left="";
    return false;
}

document.onkeydown=function(e){
    if(e.keyCode == 27){
        TB_overlay.style.display="none";
        TB_window.style.top="";
        TB_window.style.left="";
    }
}

 document.addEventListener("keydown",function(e){
        if(e.keyCode == 27){
            TB_overlay.style.display="none";
            TB_window.style.top="";
            TB_window.style.left="";
        }
    },false)