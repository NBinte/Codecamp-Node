const names = require("./firstModule");
const sayHi = require("./secondModule");
const data = require("./thirdModule");

require("./fourthModule");

// console.log(names);
// console.log(sayHi);
// console.log(data);


sayHi("boop");
sayHi(names.tsuki);
sayHi(names.shiba);
