const http = require("http");
 
const server = http.createServer((req, res)=>{
 
    res.end("Sufyan Shaikh Created Server::")

})

server.listen(8000,'127.0.0.1',()=>{
    console.log("8000 port started");
}) 