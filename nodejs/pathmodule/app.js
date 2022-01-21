const path = require("path");

var pathobj = path.parse(__filename);

console.log(pathobj);

console.log(process.env.PATH);