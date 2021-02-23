package controllers

import (
	"io"
	"net/http"
)

type FeedbackController struct {

}

var feedValue string

func feed(err map[string][]string) {
	if err!=nil{
		feedValue="false"
	}else{
		feedValue="true"
	}
}

func (*FeedbackController) NameErr(w http.ResponseWriter,r *http.Request){
	io.WriteString(w,feedValue)
}

func (*FeedbackController) PhoneErr(w http.ResponseWriter,r *http.Request){

}

