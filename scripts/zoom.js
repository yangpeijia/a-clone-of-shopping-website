/*放大镜效果*/
var zoom_pad=document.getElementById("zoomPad");
var zoom_window=document.getElementById("zoomWindow");
var zoom_pup=document.getElementById("zoomPup");
var b_img=document.getElementById("b_img");
var content=document.getElementById("content");

zoom_pad.onmouseover=function(){//鼠标移动到zoomPad上显示大图片和选框
    zoom_window.style.display="block";
    zoom_pup.style.display="block";
    
}
zoom_pad.onmouseout=function(){//鼠标移开zoomPad不显示大图片和选框
    zoom_window.style.display="none";
    zoom_pup.style.display="none";
}

zoom_window.onmousemove=function(){//解决光标在zoomwindow可以滑动问题
    zoom_window.style.display="none";
    zoom_pup.style.display="none";
}

zoom_pad.onmousemove=function(e){//获取鼠标位置
    var x=e.pageX;//鼠标相对于视口的位置
    var y=e.pageY;
    var t=zoom_pad.offsetTop;//zoomPad相对于视口的位置
    var l=zoom_pad.offsetLeft;
    var content_l=content.offsetLeft;//content相对于视口位置
    var content_t=content.offsetTop;
    var _left=x-l-content_l-zoom_pup.offsetWidth/2;//计算zoomPup的位置
    var _top=y-t-content_t-zoom_pup.offsetHeight/2;
    var max_top=zoom_pad.offsetHeight-zoom_pup.offsetHeight//zoomPup可移动最大高度
    var max_left=zoom_pad.offsetWidth-zoom_pup.offsetWidth//zoomPup可移动最大宽度
    if(_top<=0){//滑到zoomPad的最顶部
        _top=0;
    }else if(_top>=max_top){//滑到zoomPad的最底部
        _top=max_top;
    }
    if(_left<=0){//滑到zoomPad的最左边
        _left=0;
    }else if(_left>=max_left){//滑到zoomPad的最左边
        _left=max_left;
    }
    zoom_pup.style.top=_top+"px";
    zoom_pup.style.left=_left+"px";//设置zoomPup的位置
    var w=_left/max_left;//移动比例
    var h=_top/max_top;
    var b_img_top=(b_img.offsetHeight-zoom_window.offsetHeight)*h;
    var b_img_left=(b_img.offsetWidth-zoom_window.offsetWidth)*w;
    b_img.style.top=-b_img_top+"px";
    b_img.style.left=-b_img_left+"px";
}
