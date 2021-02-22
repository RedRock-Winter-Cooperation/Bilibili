var lis = document.getElementsByClassName('wrapLi');
var points = document.getElementsByClassName('point');
var right=document.getElementsByClassName('wrap-right');
var index=0;
var clearShow=function(){
    for(var i=0;i<lis.length;i++){
        lis[i].className="wrapLi";
    }
    for(var i=0;i<points.length;i++){
        points[i].className="point";
    }
}
var goIndex=function(){
    if(index==5){
        index=0;
    }
    clearShow();
    lis[index].className='wrapLi show';
    points[index].className='point show';
}
for(var i=0;i<points.length;i++){
    points[i].addEventListener('click',function(){
        var pointIndex=this.getAttribute('data-index');
        index=pointIndex;
        goIndex();
        time=0;
    })
}
var time=0;
var test=setInterval(function(){
    time++;
    if(time==30){
        index++;
        goIndex();
        time=0;
    }
},100)

var tops=document.getElementsByClassName('top');
var bottoms=document.getElementsByClassName('bottom');
var btnLeft=document.getElementsByClassName('btn1')[0];
var btnRight=document.getElementsByClassName('btn2')[0];
var lookIndex=0;
var clearLook=function(){
    for(var i=0;i<tops.length;i++){
        tops[i].className="top";
    }
    for(var i=0;i<bottoms.length;i++){
        bottoms[i].className="bottom";
    }
}
var goLook=function(){
    clearLook();
    tops[lookIndex].className='top look';
    bottoms[lookIndex].className='bottom look';
}
var goLeft=function(){
    if(lookIndex==0){
        lookIndex=2;
    }else{
        lookIndex--;
    }
    console.log(lookIndex)
    goLook();
}
var goRight=function(){
    if(lookIndex==2){
        lookIndex=0;
    }else{
        lookIndex++;
    }
    console.log(lookIndex)
    goLook();
}
btnLeft.onclick=function(){
    goLeft();
}
btnRight.onclick=function(){
    goRight();
}

var spans=document.getElementsByClassName("topSpan");
var rBottoms=document.getElementsByClassName("r-bottom");
var spanIndex=0;
var clearSpan=function(){
    for(var i=0;i<spans.length;i++){
        spans[i].className="topSpan";
        rBottoms[i].className="r-bottom"
    }
}
var goSpan=function(){
    clearSpan();
    spans[spanIndex].className='topSpan show1';
    rBottoms[spanIndex].className='r-bottom show1';
}
spans[0].onclick=function(){
    spanIndex=0;
    goSpan();
}
spans[1].onclick=function(){
    spanIndex=1;
    goSpan();
}
spans[2].onclick=function(){
    spanIndex=2;
    goSpan();
}


var search=document.getElementsByClassName("navSearch");
var nav=document.getElementsByClassName("leftNav");
var body=document.getElementsByTagName("body");
window.onresize=function(){
    var aw=body[0].clientWidth
    if(aw<=1200){
        search[0].className="navSearch searchShow";
    }else{
        search[0].className="navSearch";
    }
    if(aw<=1350){
        nav[0].className="leftNav navShow";
    }else{
        nav[0].className="leftNav";
    }
}

window.onscroll = function () {
    let bodyScroll = document.documentElement.scrollTop;
    let navDiv = document.getElementsByClassName("navDiv");
    for(let i = 0; i < navDiv.length; i++){
        navDiv[i].className = "navDiv"
    }
    if(bodyScroll > 900 && bodyScroll < 1320){
        navDiv[0].className = 'navDiv divShow'
    }else if(bodyScroll > 1320 && bodyScroll < 1760){
        navDiv[1].className = "navDiv divShow"
     }else if(bodyScroll > 1760 && bodyScroll < 2670){
        navDiv[2].className = "navDiv divShow"
    }else if(bodyScroll > 2670){
        navDiv[3].className = "navDiv divShow"
    }
}