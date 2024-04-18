const fs = require("fs");
const { json } = require("stream/consumers");
 
let data = {
    name:"sufyan",
    age:21,
    proff:"Software Engineer"
};
const jsonData = JSON.stringify(data);
console.log(jsonData);
  
fs.writeFile("data.json",jsonData,(err)=>{
    // console.log(err);
})

fs.readFile("data.json","utf-8",(err,data)=>{
    // console.log(err);
    console.log(data);

})

const objData = JSON.parse(jsonData);
console.log(objData);