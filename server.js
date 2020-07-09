const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receps = require("./data")

server.use(express.static('public'))

server.set("view engine","njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("index", {items:receps})
})

server.get("/receita", function(req, res){
    return res.render("receita", {items:receps})
})

server.get("/receita/:index", function(req, res){
    const recipeIndex = req.params.index
    return res.render("detalhes-da-receita", {items: receps[recipeIndex]})
})

server.get("/sobre", function(req, res){
    return res.render("sobre")
})


server.use(function(req, res) {
    res.status(404).render("not-found")
});

server.listen(5000, function(){
    console.log("server is running")
})
