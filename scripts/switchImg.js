/*单击产品小图片切换大图*/
var img_List=document.getElementById("imgList");
var img_s=img_List.getElementsByTagName("img");
var img_s_len=img_s.length;
var big_image=document.getElementById("bigImage");
var b_Img=document.getElementById("bImg");
var TB_Image=document.getElementById("TB_Image");



    for(var i=0;i<img_s_len;i++){
        img_s[i].onclick=function(){
            var img_src=this.getAttribute("src");
            var i=img_src.lastIndexOf(".");
            var unit=img_src.substring(i);
            img_src=img_src.substring(0,i);
            var img_src_big=img_src+"_big"+unit;
            var img_src_small=img_src+"_small"+unit;
            big_image.setAttribute("src",img_src_small);
            b_Img.setAttribute("src",img_src_big);
            TB_Image.setAttribute("src",img_src_big)
        }
    }


