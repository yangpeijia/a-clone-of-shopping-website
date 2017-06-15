// 网站导航
var nav=document.getElementById("nav");
var lists=nav.getElementsByTagName("li");
for(var i=1;i<lists.length-1;i++){
    lists[i].onmouseover=function(){
        var jnNav=this.getElementsByClassName("jnNav");
        jnNav[0].setAttribute("style","display:block");
    }
    lists[i].onmouseout=function(){
        var jnNav=this.getElementsByClassName("jnNav");
        jnNav[0].setAttribute("style","display:hide");
    }
}