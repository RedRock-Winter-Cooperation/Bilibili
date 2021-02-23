package view

import (
	"bili/pkg/logger"
	"bili/pkg/route"
	"fmt"
	"html/template"
	"io"
	"strings"
)

type D map[string]interface{}


func Render(w io.Writer,data D,tplFiles string){
	RenderTemplate(w,data,tplFiles)
}

// Render 渲染视图
func RenderTemplate(w io.Writer,data D,tplFiles string ) {

	//data["isLogined"] = auth.Check()

	// 1 设置模板相对路径
	viewDir := "resources/views/"
	tplName:=strings.Split(tplFiles,".")
	tplFiles = viewDir+strings.Replace(tplFiles, ".", "/", -1)+".gohtml"
	fmt.Println(tplName)
	// 解析模板文件
	tmpl, err := template.New(tplName[1]+".gohtml").
		Funcs(template.FuncMap{
			"RouteName2URL": route.Name2URL,
		}).ParseFiles(tplFiles)
	logger.LogError(err)

	// 渲染模板
	tmpl.Execute(w,data)
}

/*func getTemplateFiles(tplFiles...string) []string{


	// 2. 语法糖，将 articles.show 更正为 articles/show


	// 3 所有布局模板文件 Slice
	files, err := filepath.Glob(viewDir + "layouts/*.gohtml")
	logger.LogError(err)

	// 4 在 Slice 里新增我们的目标文件
	return append(files, tplFiles...)
}*/