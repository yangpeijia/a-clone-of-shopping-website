/*产品评分效果*/
var rate=document.getElementById("rate");
var rate_list=rate.getElementsByTagName("a");
var rate_list_len=rate_list.length;


for(var p=0;p<rate_list_len;p++){
    rate_list[p].onclick=function(){
            var s_title= this.getAttribute("title");
            alert("您给此产品的评分是："+s_title);
            var parent_node=this.parentNode;
            var cl=parent_node.getAttribute("class");
            parent_node.parentNode.className="";
            addClass(parent_node.parentNode,"rating "+cl+"star")
            return false;
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