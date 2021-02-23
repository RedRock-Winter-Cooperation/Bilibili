var span=document.getElementsByClassName("issue");
var item=document.getElementsByClassName("Oitem");

var clearShow=function(){
    for(var i=0;i<span.length;i++){
        span[i].className="issue";
        item[i].className="Oitem";
    }
}
span[0].onclick=function(){
    clearShow();
    span[0].className="issue show1";
    item[0].className="Oitem show";
}
span[1].onclick=function(){
    clearShow();
    span[1].className="issue show1";
    item[1].className="Oitem show";
}
span[2].onclick=function(){
    clearShow();
    span[2].className="issue show1";
    item[2].className="Oitem show";
}