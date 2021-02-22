package main

import (
	"bili/app/http/middlewares"
	"bili/bootstrap"
	"github.com/gorilla/mux"
	"net/http"
)

var router *mux.Router

func main() {

	bootstrap.SetupDB()
	router = bootstrap.SetupRoute()

	http.ListenAndServe(":3000", middlewares.RemoveTrailingSlash(router))
}
