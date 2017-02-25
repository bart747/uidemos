package main

import (
	"html/template"
	"log"
	"net/http"

	"github.com/bart747/gota"
)

var tmplSet = []string{
	"layout.html",
	"signUpForm.html",
	"mastheads.html"}

func procTmpls(w http.ResponseWriter, r *http.Request) {
	tmpls := gota.ExtendPaths("templates/", tmplSet)
	t, err := template.ParseFiles(tmpls...)
	if err != nil {
		log.Print("procTmpl, template processing failure: ", err)
	}
	t.ExecuteTemplate(w, "layout", " ")
}

func main() {
	root := http.FileServer(http.Dir("."))
	http.HandleFunc("/", procTmpls)
	http.Handle("/assets/", root)
	http.Handle("/index/", http.StripPrefix("/index/", root))

	gota.CreatePage("index.html", tmplSet)

	log.Println(":9090", "Listening...")
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Print("server: ", err)
	}
}
