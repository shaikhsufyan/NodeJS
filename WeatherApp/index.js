const http = require("http");
const fs = require("fs");
const requests = require("requests")
const readFile = fs.readFileSync("index.html","utf-8");


const weather = (tempData, currentData)=>{
    let htmlData = tempData.replace("{name}",currentData.name)
    htmlData = htmlData.replace("{temprature}",currentData.main.temp);
    htmlData = htmlData.replace("{country}",currentData.sys.country);
    htmlData = htmlData.replace("{humadity}",currentData.main.humidity);

    console.log(htmlData);
    return htmlData;
}

const server = http.createServer((req,res)=>{
     
    requests('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=6d83156e4e40ca97d0c6924b832fe00c')
.on('data', function (chunk) {
//   console.log(chunk)
  let objData = JSON.parse(chunk);
  let arrData = [objData];
  const weathData = arrData.map((curVal)=>{
    return weather(readFile, curVal)}).join("");

  console.log(weathData);
  res.write(weathData);
  console.log(arrData);
})
.on('end', function (err) {
  if (err) return console.log('connection closed due to errors', err);
  res.end();
 
  console.log('end');
});
     
})

server.listen(5000,"127.0.0.1")