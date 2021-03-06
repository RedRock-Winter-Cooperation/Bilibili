package controllers

import (
	"bili/app/models/user"
	"bili/app/requests"
	"bili/pkg/auth"
	"bili/pkg/view"
	"fmt"
	"net/http"
)

type AuthController struct {

}

func (*AuthController) Register (w http.ResponseWriter,r *http.Request){

	w.Header().Set("Access-Control-Allow-Origin", "*")
	view.Render(w,view.D{},"auth.register")
}

func (*AuthController) DoRegister (w http.ResponseWriter,r *http.Request){

	w.Header().Set("Access-Control-Allow-Origin", "*")

	_user := user.User{
		Name:     r.PostFormValue("username"),
		Email: 	  r.PostFormValue("email"),
		Phone:    r.PostFormValue("phone"),
		Password: r.PostFormValue("password"),
	}
	errs:=requests.ValidateRegistrationForm(_user)

	if len(errs) > 0 {
		feed(errs)
		fmt.Println(errs)
	} else {
		feed(nil)
		_user.Create()
		if _user.ID > 0 {
			//auth.Login(_user)
			http.Redirect(w, r, "/", http.StatusFound)
		} else {
			w.WriteHeader(http.StatusInternalServerError)
			fmt.Fprint(w, "注册失败，请联系管理员")
		}
	}

	// 3. 表单不通过 —— 重新显示表单
}

func (*AuthController) Login (w http.ResponseWriter,r *http.Request) {
	view.Render(w, view.D{},  "auth.login")
}

func (*AuthController) DoLogin (w http.ResponseWriter,r *http.Request) {
	// 1. 初始化表单数据
	account := r.PostFormValue("account")
	password := r.PostFormValue("password")

	// 2. 尝试登录
	if err := auth.Attempt(account, password); err == nil {
		// 登录成功
		http.Redirect(w, r, "/", http.StatusFound)
	} else {
		// 3. 失败，显示错误提示
		view.Render(w, view.D{
			"Error":    err.Error(),
			"Email":    account,
			"Password": password,
		}, "auth.login")
	}
}

func (*AuthController) Logout (w http.ResponseWriter,r *http.Request) {
	auth.Logout()
	http.Redirect(w, r, "/", http.StatusFound)
}

