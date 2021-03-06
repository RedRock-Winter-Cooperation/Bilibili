package routes

import (
	"bili/app/http/controllers"
	"github.com/gorilla/mux"
	"net/http"
)

func RegisterWebRoutes(r *mux.Router) {



	ac:=new(controllers.ArticlesController)
	r.HandleFunc("/", ac.Index).Methods("GET").Name("home")
	r.HandleFunc("/person", ac.Person).Methods("GET").Name("person")
	r.HandleFunc("/video", ac.Video).Methods("GET").Name("video")



	auc := new(controllers.AuthController)
	r.HandleFunc("/auth/register", auc.Register).Methods("GET").Name("auth.register")
	r.HandleFunc("/auth/do-register", auc.DoRegister).Methods("POST").Name("auth.doregister")
	r.HandleFunc("/auth/login", auc.Login).Methods("GET").Name("auth.login")
	r.HandleFunc("/auth/dologin", auc.DoLogin).Methods("POST").Name("auth.dologin")
	r.HandleFunc("/auth/logout", auc.Logout).Methods("POST").Name("auth.logout")

	fk := new(controllers.FeedbackController)
	r.HandleFunc("/feed/register/name",fk.NameErr).Methods("GET")

	r.PathPrefix("/image/").Handler(http.FileServer(http.Dir("./public")))
	r.PathPrefix("/css/").Handler(http.FileServer(http.Dir("./public")))
	r.PathPrefix("/js/").Handler(http.FileServer(http.Dir("./public")))
	r.PathPrefix("/video/").Handler(http.FileServer(http.Dir("./public")))


}

