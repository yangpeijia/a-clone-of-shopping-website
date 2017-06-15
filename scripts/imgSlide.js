/*品牌活动模块横向滚动*/

var jn_Brand_Tab=document.getElementById("jnBrandTab");
var b_list=jn_Brand_Tab.getElementsByTagName("a");
var b_len=b_list.length;
var idx=0;

showBrandList(idx);
for(var l=0;l<b_len;l++){
    
    b_list[l].onclick=(function(num){
        if(b_list[num].className=="chaos"){
            return false;
        }else{
            return function(){
                remove();//移除所有"chos"
                idx=num;
                showBrandList(idx);
                return false;
            }
        }
    })(l);
}
function showBrandList(index){
    addClass( b_list[index].parentNode,"chos");
    var roll_Width=780*index;
    var jn_Brand_List=document.getElementById("jnBrandList");
    jn_Brand_List.style.left=-roll_Width+"px";
}


function remove(){
    for(var i=0;i<b_len;i++){
        removeClass(b_list[i].parentNode,"chos");
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

