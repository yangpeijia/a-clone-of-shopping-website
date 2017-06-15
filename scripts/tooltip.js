// 超链接文字显示
 var x=10;
 var y=10;
 var jnNoticeInfo=document.getElementById("jnNoticeInfo");
 var tooltips=jnNoticeInfo.getElementsByClassName("tooltip");
 var t_len=tooltips.length;
 var body=document.getElementsByTagName("body");
 var myTitle="";
 for(var k=0;k<t_len;k++){
     tooltips[k].onmouseover=function(e){
        myTitle=this.title;
        this.title="";
        tooltip=document.createElement("div");
        tooltip.setAttribute("id","tooltip");
        var text_node=document.createTextNode(myTitle);
        tooltip.appendChild(text_node);
        body[0].appendChild(tooltip); //把它追加到文档中；
        tooltip.style.top=e.pageY+y+"px";   
        tooltip.style.left=e.pageX+x+"px";
        tooltip.style.display="block";//设置x坐标和y坐标，并且显示
     }
     tooltips[k].onmouseout=function(){
         this.title=myTitle;
         body[0].removeChild(tooltip);//移除
     }
     tooltips[k].onmousemove=function(e){
        tooltip.style.top=e.pageY+y+"px";
        tooltip.style.left=e.pageX+x+"px";
     }
 }

 function hasClass(obj,classname){
    return obj.className.match(new RegExp('(\\s|^)'+classname+'(\\s|$)'));
}
function removeClass(obj,classname){
    if(hasClass(obj,classname)){
        var reg=new RegExp('(\\s|^)'+classname+'(\\s|$)');
        obj.className=obj.className.replace(reg,' ');
    }
}