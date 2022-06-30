const http=require("http")
const server=http.createServer(function(req,res){
    res.write("This is my First Server")
    res.write("<h1> This is my First Server</h1>")
    res.write(JSON.stringify({Name:"This is my First Server",Age:25}))
    res.end()
})
server.listen(4000)