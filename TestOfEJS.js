const http = require("http");
const fs = require("fs");
const url = require("url");
const ejs = require("ejs");

const index = fs.readFileSync("./index.ejs","utf8");
const style = fs.readFileSync("./style.css","utf8");

const server = http.createServer();
server.on("request",doRequest);
server.listen(1337,"localhost");

function doRequest(req,res){
	var path = url.parse(req.url)
	
	switch(path.pathname){
		case "/":
			var temp = ejs.render(index,{
				title:"Index Page",
				msg:"これはサンプルページです。"
			});
			res.setHeader("Content-Type","text/html");
			res.write(temp);
			res.end();
			break;
		case "/style.css":
			res.setHeader("Content-Type","text/plain");
			res.write(style);
			res.end();
			break;
		default:
			res.setHeader("Content-Type","text/plain");
			res.write("Error");
			res.end();
			break;
	}
}
console.log("server runnning ")