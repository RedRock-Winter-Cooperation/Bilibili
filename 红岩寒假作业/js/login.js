var span1=document.getElementsByClassName("password-login")[0];
console.log(span1)
var span2=document.getElementsByClassName("message-login")[0];
var work=document.getElementsByClassName("work");
var check=document.getElementsByClassName("checkbox")[0];
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var tip=document.getElementsByClassName("tip")

span1.addEventListener("click",function(){
    span1.className="password-login show1";
    span2.className="message-login";
    work[0].className="work"
    work[1].className="work show"
})
if(span1.className=="password-login show1"){
    var userName=document.getElementById("ipt1");
    var passWord=document.getElementById("ipt2");
    userName.onblur=function(){  
        if(userName.value===""){
            tip[0].innerText="用户名不能为空"
        }
        else{
            tip[0].innerText="";
        }
    }
    userName.onfocus=function(){
        if(tip[0].innerText!=""){
            userName.value="";
        }
        tip[0].innerText="";
    }  
    passWord.onblur=function(){
        if(passWord.value===""){
        tip[1].innerText="密码不能为空"
        }
    }
    passWord.onfocus=function(){
        if(tip[1].innerText!=""){
            passWord.value=""
        }
        tip[1].innerText=""
    }

    btn1.onclick=function(){
        if(userName!=""&&passWord!=""){
            ajax_get(URL,"userName="+userName.value+"&passWord="+passWord.value,function(){
        //点击登录的方法
        //需要使用cookie
            })
        }
    }
}



span2.addEventListener("click",function(){
    span1.className="password-login";
    span2.className="message-login show1";
    work[0].className="work show"
    work[1].className="work"

    var phone=document.getElementById("ipt4");
    var phoneWord=document.getElementById("ipt5");
    var phoneBtn=document.getElementById("get-code")
    phone.onblur=function(){  
        if(phone.value===""){
            tip[2].innerText="手机号不能为空"
        }
        else{
            tip[2].innerText="";
        }
    }
    phone.onfocus=function(){
        if(tip[2].innerText!=""){
            phone.value="";
        }
        tip[2].innerText="";
    }     
    phoneWord.onblur=function(){
        if(phoneWord.value===""){
        tip[4].innerText="验证码不能为空"
        }
    }
    phoneWord.onfocus=function(){
        if(tip[3].innerText!=""){
            phoneWord.value=""
        }
        tip[3].innerText=""
    }

    phoneBtn.onclick=function(){
        if(phone.value!=""){
            ajax_get(url,"phone="+phone.value,function(){
                //手机验证码方法
            })
        }
    }
    btn1.onclick=function(){
        if(phone.value!=""&&phoneWord===res){
            ajax_get(url,"phone="+phone.value+"&phoneWord="+phoneWord.value,function(){
                //点击登录的方法
                //需要使用cookie
            })
        }
    }
})



