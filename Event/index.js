const EventEmiter = require("events");

const event = new EventEmiter;

event.on("myEvent", (status, msg) =>{
    console.log("event run",status,msg);
})
event.on("myEvent", (status, msg) =>{
    console.log("event run",status,msg);
})
event.on("myEvent", (status, msg) =>{
    console.log("event run",status,msg);
})

event.emit("myEvent", 200, "Succes");