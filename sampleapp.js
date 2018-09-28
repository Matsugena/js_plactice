const http = require("http");

const server = http.createServer();
server.on("request",doRequest);
server.listen(1234);

function doRequest(request,res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Hello");
	res.end();
}