package controllers

import (
	"bili/pkg/view"
	"net/http"
)

// ArticlesController 文章相关页面
type ArticlesController struct {
}

func(*ArticlesController) Index(w http.ResponseWriter,r *http.Request){
	view.Render(w,view.D{},"articles.index")
}

func(*ArticlesController) Person(w http.ResponseWriter,r *http.Request){
	view.Render(w,view.D{},"articles.homepage")
}

func(*ArticlesController) Video(w http.ResponseWriter,r *http.Request){
	view.Render(w,view.D{},"articles.video")
}