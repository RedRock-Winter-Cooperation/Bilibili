package controllers

import (
	"bili/pkg/view"
	"net/http"
)

// ArticlesController 文章相关页面
type ArticlesController struct {
}

func(*ArticlesController) Index(w http.ResponseWriter,r *http.Request){
	view.Render(w,view.D{},"article.index")
}