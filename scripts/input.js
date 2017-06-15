var inputSearch=document.getElementById("inputSearch");
var place_holder=inputSearch.placeholder;

inputSearch.onfocus=function(){
    addClass(this,"focus");
    if(place_holder){
        this.placeholder="";
    }
}
inputSearch.onblur=function(){
    removeClass(this,"focus");
    if(this.placeholder==""){
        this.placeholder=place_holder;
    }
}
inputSearch.onkeyup=function(event){
    if(event.keyCode==13){
        alert("回车提交表单");
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
        obj.className=obj.className.replace(reg,'');
    }
}