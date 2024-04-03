// Asynchronous
const fs = require("fs");
fs.writeFile("async.txt", "Make Asynchronous file system ",(err)=>{
    console.log(err);
})

// fs.appendFile("async.txt", "New Data Added", (err)=>{
//     console.log(err);
// })

// fs.readFileSync("async.txt","utf-8",(err, data)=>{
//     console.log(data);
//     console.log(err);
// })
// console.log("After Reading");

// fs.rename("async.txt","asyncs.txt",(err)=>{
//     console.log(err);
// })

// fs.unlink("async.txt",(err)=>{
//     console.log(err);
// })

// fs.rmdir("dumi",(err)=>{
//     console.log(err);
// })