/**
 * Created by Administrator on 2016/8/17 0017.
 */
window.onload=function(){
    //控制图片在不同的屏幕的大小适配
    window.onresize=function(){
        var flowp=document.getElementById("flowp");
        var footimg=document.getElementById("footimg");
        if(window.innerWidth<=768){
            footimg.src="imgs/b_12.png";
        }else{
            footimg.src="";
        }

        if(window.innerWidth<=767){
            flowp.className+=" flow_add";
        }else{
            flowp.className="center";
        }
    }
    //在应用场景和解决方案的点击切换类名
    var ul=document.getElementsByClassName("use_ul")[0];
    var lis=ul.children;
    var divs=document.getElementById("use_list").children;
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
            for(var j=0;j<divs.length;j++){
                divs[j].className="none";
                lis[j].className="move";
            }
            divs[this.index].className+='block';
            this.className="active";
            console.log(divs[this.index]);
        }
    }

    //顶部导航栏在不同尺寸屏幕的样式切换类名
    var banul=document.getElementById("banner_ul");
    var banlis=banul.children;
    for(var i=0;i<banlis.length;i++){
        if($(window)[0].innerWidth<=750)
        {
            banlis[i].className="samll";
        }else{
            banlis[i].className=" ";
        }
    }
}
function abc(){
    console.log("this is a code");
}
