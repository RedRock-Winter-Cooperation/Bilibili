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

	router.HandleFunc("/api/cors", corsHandler).Methods(http.MethodGet, http.MethodPut, http.MethodOptions)
	// CORSMethodMiddleware 中间件会将上一步设置的方法设置到 Access-Control-Allow-Methods 响应头
	router.Use(mux.CORSMethodMiddleware(router))

	http.ListenAndServe(":3000", middlewares.RemoveTrailingSlash(router))
}

func corsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	if r.Method == http.MethodOptions {
		return
	}

	w.Write([]byte("Cors Request"))
}