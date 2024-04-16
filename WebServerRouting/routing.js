const http = require("http");
const url = require("url");
const fs = require("fs");
 
               
const readJson = fs.readFileSync(`${__dirname}/userApi/api.json`,"utf-8");
const objData=JSON.parse(readJson);
        
 
const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == "/"){
        res.end("Home PAGE HERE")
    }else if(req.url == "/about"){
        res.end("ABOUT US PAGE")
    }else if(req.url == "/contact"){
        res.end("CONTACT US PAGE")
    }else if(req.url == "/api"){
 
        res.writeHead(200, {"Content-type":"application/json"})
        res.end(readJson);
 
    }else{
        res.writeHead(404, {"Content-type":"text/html"});
        res.end("<h1>ERROR PAGE IS HERE</h1>")

    }
    // res.end("Sufyan Shaikh Created Server::")

})

server.listen(8000,'127.0.0.1',()=>{
    console.log("8000 port started");
}) 