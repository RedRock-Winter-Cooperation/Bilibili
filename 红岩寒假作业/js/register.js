//用户名
var usernameErrorSpan=document.getElementById("usernameError");
                var nameEle=document.getElementById("username");
                nameEle.onblur=function () {
                    var name=nameEle.value;
                    name=name.trim();
                    if(name===""){
                        usernameErrorSpan.innerText="用户名不能为空";
                    }
                    else{
                        if(name.length<6||name.length>14) {
                            usernameErrorSpan.innerText="用户名不合法:用户名长度应在6到14之间";
                        }
                        else{
                            var fff=/^[A-Za-z0-9]+$/;
                            var ok=fff.test(name);
                            if(ok){
                            }
                            else{
                                usernameErrorSpan.innerText="用户名只能由数字和字母组成";
                            }
                        }
                    }
                }
                nameEle.onfocus=function () {
                    if(usernameErrorSpan.innerText!=""){
                        nameEle.value="";
                    }else{
                    usernameErrorSpan.innerText="";
                    }
                }
//密码
            var passwordEle=document.getElementById("password")
            var passwordErrorSpan=document.getElementById("passwordError")
            passwordEle.onblur=function(){
                var password=passwordEle.value;
                if(password===""){
                    passwordErrorSpan.innerText="密码不能为空";
                }
                else{
                    if(password.length<6||password.length>14){
                        passwordErrorSpan.innerText="密码不合法";
                    }else{
                        passwordErrorSpan=""
                        }
                    }
                }
            
            passwordEle.onfocus=function(){
                if(passwordErrorSpan.innerText!=""){
                    passwordEle.value="";
                }else{
                    passwordErrorSpan.innerText="";
                }
            }

//手机号
            var phoneEle=document.getElementById("phone");
            var phoneErrorSpan=document.getElementById("phoneError");
            phoneEle.onblur=function () {
                var phone=phoneEle.value;
                var mPattern = /^1[34578]\d{9}$/;
                var ok=mPattern.test(phone);
                if(ok){
                }
                else{
                    phoneErrorSpan.innerText="手机号格式错误";
                }
            }
            phoneEle.onfocus=function () {
                if(phoneErrorSpan.innerText!=""){
                    phoneEle.value="";
                }
                phoneErrorSpan.innerText="";
            }
//手机验证码
            var yzBtn=document.getElementsByClassName("yz")[0];
            /*yzBtn.onclick=function(){
                if(phoneErrorSpan.innerText==""&&phoneEle.value!=""){
                    var xhr=new XMLHttpRequest();
                    xhr.open('POST',URL,true);
                    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                    xhr.send("phone="+phoneEle.value);
                    xhr.onreadystatechange=function(){
                        if(xhr.readyState==4&&xhr.status==200){
                            var res=xhr.responseText;
                        }
                    }
                }
            }*/
            yzBtn.onclick=function(){
                ajax_post(url,data,function(data){
                    //方法
                });

            }
            



            var box=document.getElementById("checkbox");
            var checkval=box.checked
           
            var submitEle=document.getElementById("submit");
            submitEle.onclick=function () {
                if(usernameErrorSpan.innerText==""&&passwordErrorSpan.innerText==""&&phoneErrorSpan.innerText==""&&
                nameEle.value!=""&&passwordEle.value!=""&&phoneEle.value!=""&&checkval==true){   
                    /*var xhr=new XMLHttpRequest();
                    xhr.open('POST',URL,true);
                    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                    xhr.send("username="+nameEle.value+"&password="+passwordEle.value+"&+phone="+phoneEle.value);
                    xhr.onreadystatechange=function(){
                        if(xhr.readyState==4&&xhr.status==200){
                            var res=xhr.responseText;
                        }
                    }
                    window.location.href="./login.html"
                    alert('注册成功')*/

                    ajax_post(url,data,function(){
                        //方法

                        window.location.href='./login.html'
                    })
                  
                  }
                  else{alert('请正确输入')}
                nameEle.focus();
                nameEle.blur();
                passwordEle.focus();
                passwordEle.blur();
                phoneEle.focus();
                phoneEle.blur();
               
            }



