/*右侧产品尺寸切换、产品数量与价格联动*/
var pro_size=document.getElementById("proSize");
var size=document.getElementById("size");
var size_list=pro_size.getElementsByTagName("li");
var size_len=size_list.length;

//尺寸切换
for(var i=0;i<size_len;i++){
    size_list[i].onclick=(function(n){
        return function(){
            removeAllCur()
            var size_text=size_list[n].innerHTML;
            var size=document.getElementById("size");
            size.innerHTML=size_text;
            addClass(size_list[n],"cur");
        } 
    })(i);
}


function removeAllCur(){
    for(var i=0;i<size_len;i++){
        removeClass(size_list[i],"cur");
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

// 产品数量与价格联动
var total_price=document.getElementById("totalPrice");
var form=document.getElementById("proNum");
var select_box=form.elements["amount"];
select_box.onchange=function(){
    var selected_index=select_box.selectedIndex;
    var selected_option=select_box.options[selected_index];
    var select_text=selected_option.text;
    var total=200*select_text;
    total_price.innerHTML=total;
}
