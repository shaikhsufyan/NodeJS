const fs = require("fs");
const http = require("http");
 

const server = http.createServer((req, res)=>{
    const readStream = fs.createReadStream("readme.txt");
    // readStream.on("data", (smallData)=>{
    //     res.end(smallData)
    // })
    // readStream.on("end", (smallData)=>{
    //     res.end(smallData)
    // })
    // readStream.on("error", (smallData)=>{
    //     res.end(smallData)
    // })

    readStream.pipe(res);
     
})
 

server.listen(8000, '127.0.0.1',()=>{
    console.log("8000 port running");
});

 