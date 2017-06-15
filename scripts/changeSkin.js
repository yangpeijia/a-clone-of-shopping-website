// 网站换肤
var skin=document.getElementById("skin");
var list=skin.getElementsByTagName("li");

var CookieUtil={
    get:function(name){
        var cookieName=encodeURIComponent(name)+"=",
            cookieStart=document.cookie.indexOf(cookieName),
            cookieValue=null;
        if(cookieStart>-1){
            var cookieEnd=document.cookie.indexOf(";",cookieStart);
            if(cookieEnd==-1){
                cookieEnd=document.cookie.length;
            }
            cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
        }
        return cookieValue;    
    },
    set:function(name,value,expires,path,domain,secure){
        var cookieText=encodeURIComponent(name)+"="+encodeURIComponent(value);
        if(expires instanceof Date){
            cookieText+="; expires="+expires.toGMTString();
        }
        if(path){
            cookieText+="; path="+path;
        }
        if(domain){
            cooieText+="; domain="+domain;
        }
        if(secure){
            cookieText+="; secure";
        }
        document.cookie=cookieText;
    },
    unset:function(name,path,domain,secure){
        this.set(name,"",new Date(0),path,domain,secure);
    }
}


for(var i=0;i<list.length;i++){
    list[i].onclick=function(){
        switchSkin(this.id);
    }
}
var cookie_skin=CookieUtil.get("MyCssSkin");
if(cookie_skin){
    switchSkin(cookie_skin);
}



function switchSkin(skinName){
    var skin_name=document.getElementById(skinName);
    for(var i=0;i<list.length;i++){
        removeClass(list[i],"selected");
    }
    addClass(skin_name,"selected");
    var css_file=document.getElementById("cssfile");
    css_file.setAttribute("href","styles/skin/"+skinName+".css");
    CookieUtil.unset("MyCssSkin");
    CookieUtil.set("MyCssSkin",skinName,new Date(new Date().valueOf()+10*24*60*60*1000),"/");
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
        obj.className=obj.className.replace(reg," ");
    }
}

