var tab_menu=document.getElementById("tabMenu");
var tab_list=tab_menu.getElementsByTagName("li");
var list_len=tab_list.length;
var index=0;
var tab_box=document.getElementById("tabBox");
var divs=tab_box.getElementsByTagName("div");

for(var i=0;i<list_len;i++){
    tab_list[i].onclick=(function(n){
            return function(){
                allRemoveSelected();
                addClass(tab_list[n],"selected")
                allAddHide();
                removeClass(divs[n],"hide"); 
            }
    })(i)
}

function allRemoveSelected(){
    for(var i=0;i<list_len;i++){
        removeClass(tab_list[i],"selected");
    }
}

function allAddHide(){
    for(var i=0;i<list_len;i++){
        addClass(divs[i],"hide");
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