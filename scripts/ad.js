/*首页大屏广告效果*/
var jnImagerollText=document.getElementById("jnImagerollText");
var links=jnImagerollText.getElementsByTagName("a");
var len=links.length;
var index=0;
var adTimer=null;
play();
for(var i=0;i<len;i++){
    links[i].onmouseover=(function(n){
        return function(){
            index=n;
            showImg(index);
        }
    })(i)
}
// 滑入 停止动画，滑出开始动画
var jnImageroll=document.getElementById("jnImageroll");
jnImageroll.onmouseover=stop;

jnImageroll.onmouseout=play;

// 显示不同的幻灯片
function showImg(index){
    var jnImageroll=document.getElementById("jnImageroll");
    var jnImagerollText=document.getElementById("jnImagerollText");
    var roll_list=jnImagerollText.getElementsByTagName("a");
    var new_href=roll_list[index].getAttribute("href");
    var JS_imgWrap=document.getElementById("JS_imgWrap");
    JS_imgWrap.setAttribute("href",new_href);
    var imgs=JS_imgWrap.getElementsByTagName("img");
    var img_len=imgs.length
    
    for(var j=0;j<img_len;j++){
        removeClass(imgs[j],"fade-in");
        removeClass(links[j],"chos");    
        removeClass(links[j],"show");
    }
    addClass(imgs[index],"fade-in");
    addClass(links[index],"chos");
    addClass(links[index],"show");
}
// 自动轮播
function play(){
    adTimer=setInterval("imgRoll()",3000); 
}
// 停止自动轮播
function stop(){
    if(adTimer){
        clearInterval(adTimer);
    }
}
// 计时器函数
function imgRoll(){
    showImg(index);
    index++;
    if(index==len){
        index=0;
    }
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


