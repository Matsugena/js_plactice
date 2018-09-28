const http = require("http");

http.createServer(function (req,res){
	res.setHeader("Content-Type","text/plain");
	res.end("Hello World\n");
}).listen(1337,"localhost");

console.log("Server runnning at http://localhost:1337/");

