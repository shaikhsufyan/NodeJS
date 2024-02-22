const os = require("os");
console.log(os.arch());
console.log(os.platform());
console.log(os.hostname());
console.log(os.tmpdir());



// const freeMem = os.freemem();
const totalMem = os.totalmem();
console.log(totalMem/1024/1024/1024);
