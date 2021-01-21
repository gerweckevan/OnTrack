
module.exports=function(app){
app.get("/", function(req, res){
    res.render("index")
})
app.get("/view", function(req, res){
    res.render("view")
})
app.get("/signUp", function(req, res){
    res.render("signUp")
})
app.get("/members", function(req, res){
    res.render("members")
})
app.get("/logout", function(req, res){
    res.render("logout")
})


}


