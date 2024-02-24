const path = require("path");
console.log(path.dirname("D:/NodeJS/Path-Module/path.js"));
console.log(path.basename("D:/NodeJS/Path-Module/path.js"));
console.log(path.extname("D:/NodeJS/Path-Module/path.js"));

console.log(path.parse("D:/NodeJS/Path-Module/path.js"));
const pathData = path.parse("D:/NodeJS/Path-Module/path.js");
console.log(pathData.name);