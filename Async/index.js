// Asynchronous
const fs = require("fs");
// fs.writeFile("my.txt","Hello txt file",(err)=>{
//     console.log(err);
//     console.log("Succesfully File created");
// })

// fs.appendFile("my.txt","Created By Sufyan Shaikh",(err)=>{
//     console.log(err);
//     console.log("added");
// });

fs.readFile("my.txt","utf-8", (err, data)=>{
    console.log(data);
    console.log(err);


})