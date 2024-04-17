const chalk = require("chalk");
const validator = require("validator");

const email = validator.isEmail("sk@gmailom");
console.log(email?chalk.green.inverse(email):chalk.red.inverse(email));