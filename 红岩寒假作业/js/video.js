var video=document.querySelector("video");
var play=document.getElementsByClassName("switch")[0];
var expand=document.getElementsByClassName("expand")[0];
var progress=document.getElementsByClassName("progress")[0];
var line=document.getElementsByClassName("line")[0];
var currPlayTime=document.getElementsByClassName("current")[0];
var totalTime=document.getElementsByClassName("total")[0];
var img=document.getElementById("img");

video.oncanplay=function(){
    this.style.display="block";
    totalTime.innerHTML=getTime(this.duration);
}

play.onclick=function(){
    if(video.paused){
        video.play();
        img.src="./image/stop.png"
    }else{
        video.pause();
        img.src="./image/begin.png"
    }
    this.classList.toggle("fa-pause");
}

expand.onclick=function(){
    video.webkitRequestFullScreen();
}

video.ontimeupdate = function(){
    var currTime = this.currentTime;
    var duration = this.duration;
    var pre = currTime / duration * 100 + "%";
    line.style.width = pre;
    currPlayTime.innerHTML = getTime(currTime);
}


progress.onclick=function(e){
    var event=e||window.event;
    video.currentTime=(event.offsetX/this.offsetWidth)*video.duration;
}

video.onended=function(){
    var that=thie;
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
    line.style.width=0;
    currPlayTime.innerHTML=getTime();
    that.currentTime=0
}

function getTime(time){
    var time=time||0;
    var h=parseInt(time/3600);
    var m=parseInt(time%3600/60);
    var s=parseInt(time%60);
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    return h+":"+m+":"+s;
}


var div=document.getElementsByClassName("player")[0];
var ipt1=document.getElementById("ipt1");
var btn1=document.getElementById("btn1");

btn1.onclick=function(){
    if(ipt1.value!=""){
        let span=document.createElement("span");
        let big=div.clientHeight-100;
        span.className = "fa-barrage"
        span.innerHTML = ipt1.value;
        div.appendChild(span);
        span.style.top = Math.round(Math.random() * big) + "px";
        let timer = setInterval(function () {
            let far = span.offsetLeft;
            far-=5;
            span.style.left = far + 'px';
            if (far < -span.offsetWidth){
                clearInterval(timer);
                span.remove();
            }
        },40)
        ipt1.value = '';
    }
}


var ipt2=document.getElementById("ipt2");
var btn2=document.getElementById("btn2");
var disContent=document.getElementsByClassName("disContent")[0];


btn2.onclick=function(){
    if(ipt2.value!=""){
    let cDiv=document.createElement("div");
    cDiv.className="creatDiv";
    cDiv.innerHTML='<div><img class="disImg" src="https://i0.hdslb.com/bfs/face/member/noface.jpg@72w_72h_1c.webp"></div>'+
                    '<span class="disSpan">'+ipt2.value+'</span>'+
                    '<div><button class="disRemove">删除评论</button></div>';
    disContent.appendChild(cDiv);
    ipt2.value="";
    var rDiv=document.getElementsByClassName("creatDiv");
    var disRemove=document.getElementsByClassName("disRemove");
    var index=1;
    for(var i=0;i<rDiv.length;i++){
        disRemove[i].onclick=function(){
            rDiv[i-index].remove();
            index++;
        }
    }
}
}
