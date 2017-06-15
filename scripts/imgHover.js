/*滑过图片出现放大镜效果*/
var jnBrandList=document.getElementById("jnBrandList");
var _list=jnBrandList.getElementsByTagName("li");
_list.len=_list.length;
var span=null;
// 为所有图片添加span标签
for (var m=0;m<_list.len;m++){
        var img_w=185;
        var img_h=164;
        span=document.createElement("span");
        addClass(span,"imageMask");
         span.setAttribute("style","position:absolute;top:0;left:5 px;width:"+img_w+"px;height:"+img_h+"px;");
        _list[m].appendChild(span);     
}
// 滑过图片出现放大镜效果，滑出图片效果消失
for(var p=0;p<_list.len;p++){
    var span_list=jnBrandList.getElementsByClassName("imageMask");
    _list[p].onmouseover=(function(n){
        return function(){
            addClass(span_list[n],"imageOver");
        }
    })(p);
    _list[p].onmouseout=(function(n){
        return function(){
            removeClass(span_list[n],"imageOver");
        }
    })(p);
}


function addClass(obj,classname){
    if(!hasClass(obj,classname)){
        obj.className+=" "+classname;
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