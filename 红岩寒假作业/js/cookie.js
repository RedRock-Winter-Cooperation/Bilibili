function setcookie(name,val,n){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+n);
    document.cookie=name+"="+val+";expires="+oDate;
}

function getcookie(name){
    var cookie=document.cookie;
    var arrCookie=cookie.split("; ");
    for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        if(arr[0]===name){
            return arr[1];
        }
    }
}

function removecookie(name){
    setcookie(name,1,-1)
}

//加密
//<script src="https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.18.0/js/md5.min.js"></script>
//用法 setcookie('username',md5(password),7);
