var put_in=document.getElementById("putIn");
var form=document.getElementById("proNum");
var select_box=form.elements["amount"];
var selected_index=select_box.selectedIndex;
var selected_option=select_box.options[selected_index];
var dialog_ok=document.getElementById("basic-dialog-ok");
var sim_container=document.getElementById("simplemodal-container")
var sim_overlay=document.getElementById("simplemodal-overlay")
//已选择数据
put_in.onclick=function(){
    var pro_name=document.getElementById("proName").innerHTML;
    var pro_color=document.getElementById("textChange").innerHTML;
    var pro_size=document.getElementById("size").innerHTML;
    var form=document.getElementById("proNum");
var select_box=form.elements["amount"];
var selected_index=select_box.selectedIndex;
var selected_option=select_box.options[selected_index];
    var pro_num=selected_option.text;
    var pro_price=document.getElementById("totalPrice").innerHTML;
    if(pro_size=="未选择"){
        alert("请选择尺码！")
        return;
    }else{
        var dialog="感谢您的购买。<div style='font-size:12px;font-weight:400;'>您购买的产品是："+pro_name+"; "+
                "尺寸是："+pro_size+"; "+
                "颜色是："+pro_color+"; "+
                "数量是："+pro_num+"; "+
                "总价是："+pro_price+"元。</div>";
        var jn_dialog_content=document.getElementById("jnDialogContent");
        jn_dialog_content.innerHTML=dialog;
        show();
        return false;
    }
}

function show(){
    sim_overlay.style.opacity=0.5;//遮罩层显示
    sim_overlay.style.top=0;
    sim_overlay.style.left=0;
    sim_overlay.style.position="fixed";
    sim_overlay.style.width="100%";
    sim_overlay.style.height="100%";
    sim_overlay.style.zIndex=1001;
    sim_overlay.style.display="block";
    //内容层显示
    var pageWidth=window.innerWidth;//获取视口的宽和高
    var pageHeight=window.innerHeight;
    var H=sim_container.style.height=190;//设置内容层位置
    var W=sim_container.style.width=500;
    var T=(pageHeight-H)/2;
    var L=(pageWidth-W)/2;
    sim_container.style.top=T+"px";
    sim_container.style.left=L+"px";
    sim_container.style.display="block";
    sim_container.style.position="fixed";
    sim_container.style.zIndex=1002;
}

//关闭弹出框

    var simple_close=document.getElementById("simplemodalClose");
    simple_close.onclick=function(){
        sim_overlay.style.display="none";
        sim_container.style.display="none";
    }
    var close_button=document.getElementById("closeButton");
    close_button.onclick=function(){
        sim_overlay.style.display="none";
        sim_container.style.display="none";
    }
    
    document.addEventListener("keydown",function(e){
        if(e.keyCode == 27){
            sim_overlay.style.display="none";
            sim_container.style.display="none";
        }
    },false)
    
    
    

