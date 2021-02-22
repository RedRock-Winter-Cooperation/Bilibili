package view

import (
	"bili/pkg/auth"
	"bili/pkg/logger"
	"bili/pkg/route"
	"html/template"
	"io"
	"path/filepath"
	"strings"
)

type D map[string]interface{}


func Render(w io.Writer,data D,tplfiles... string){
	RenderTemplate(w,"app",data,tplfiles...)
}

func RenderSimple(w io.Writer,data D,tplfiles... string)  {
	RenderTemplate(w,"simple",data,tplfiles...)
}

// Render 渲染视图
func RenderTemplate(w io.Writer,name string,data D,tplFiles... string ) {

	data["isLogined"] = auth.Check()
	// 1 设置模板相对路径
	allFiles := getTemplateFiles(tplFiles...)

	// 5 解析所有模板文件
	tmpl, err := template.New("").
		Funcs(template.FuncMap{
			"RouteName2URL": route.Name2URL,
		}).ParseFiles(allFiles...)
	logger.LogError(err)

	// 6 渲染模板
	tmpl.ExecuteTemplate(w, name, data)
}

func getTemplateFiles(tplFiles...string) []string{
	viewDir := "resources/views/"

	// 2. 语法糖，将 articles.show 更正为 articles/show
	for i,name:=range tplFiles{
		tplFiles[i] = viewDir+strings.Replace(name, ".", "/", -1)+".gohtml"
	}

	// 3 所有布局模板文件 Slice
	files, err := filepath.Glob(viewDir + "layouts/*.gohtml")
	logger.LogError(err)

	// 4 在 Slice 里新增我们的目标文件
	return append(files, tplFiles...)
}