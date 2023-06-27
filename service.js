// Creating a service, createServer is a function from HTTP module

var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write("Welcome Pavan!")
    res.end()
}).listen(8080)