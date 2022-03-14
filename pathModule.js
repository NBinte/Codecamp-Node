const path = require("path");

//show platform specific seperator
console.log(path.sep);

//show normalized file path
const filePath = path.join("/content/", "subContent", "test.txt");
console.log(filePath);

//get base name
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subContent", "test.txt");
console.log(absolute);


