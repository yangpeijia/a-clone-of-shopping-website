/*右侧产品颜色切换*/
var color_change=document.getElementById("colorChange");
var change_img=color_change.getElementsByTagName("img");//获取右侧产品所有图片
var change_img_len=change_img.length;
var text_change=document.getElementById("textChange");//获取颜色描述
var img_List=document.getElementById("imgList");
var list_item=img_List.getElementsByTagName("li");
var item_len=list_item.length;
var big_image=document.getElementById("bigImage");
var b_Img=document.getElementById("bImg");
var TB_image=document.getElementById("TB_Image");

    for(var z=0;z<change_img_len;z++){
        change_img[z].onclick=(function(n){
            return function(){
                AllRemoveHover();//移除所有hover样式
                addClass(change_img[n],"hover"); //点击图片显示hover样式         
                changeText(n);//改变颜色描述文字
                changeImgList(n);//改变左侧小图颜色
            }
        })(z)
    }


function  AllRemoveHover(){
    for(var i=0;i<change_img_len;i++){
        removeClass(change_img[i],"hover");
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

function changeText(num){
    var color_text=change_img[num].getAttribute("alt");
    text_change.innerHTML=color_text;
}

function changeImgList(num){
    var img_src=change_img[num].getAttribute("src");
    var i=img_src.lastIndexOf(".");
    var unit=img_src.substring(i);
    img_src=img_src.substring(0,i);
    var img_src_small=img_src+"_one_small"+unit;
    big_image.setAttribute("src",img_src_small);//改变大图链接
    var img_src_big=img_src+"_one_big"+unit;
    b_Img.setAttribute("src",img_src_big);//改变放大镜大图链接
    TB_image.setAttribute("src",img_src_big);

    var img_src_color=img_src.replace("images/pro_img/","")
    var new_img_src="image-list-"+img_src_color;//获取所需的左边图片列表的样式
   
    AllAddHide();
    for(var i=0;i<item_len;i++){
        (function(num){
            if(hasClass(list_item[num],new_img_src)){
                removeClass(list_item[num],"hide")
            }
        })(i)
    }
}

function AllAddHide(){
    for(var i=0;i<item_len;i++){
        addClass(list_item[i],"hide")
    }
}