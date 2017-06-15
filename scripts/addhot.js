//热销效果
var jnCatainfo=document.getElementById("jnCatainfo");
var promoted=jnCatainfo.getElementsByClassName("promoted");
for(var i=0;i<promoted.length;i++){
    var insertNode=document.createElement("span");
    addClass(insertNode,"hot");
    promoted[i].appendChild(insertNode);
}

function addClass(obj,classname){
    if(!hasClass(obj,classname)){
        obj.className+=" "+classname;
    }
}
function hasClass(obj,classname){
    return obj.className.match(new RegExp('(\\s|^)'+classname+'(\\s|$)'));
}

