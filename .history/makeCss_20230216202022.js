//practice reading and writing a file
var fs = require("fs");

fs.readFile("temp.txt", function (err, buf) {
  if (err) {
    console.log(err);
  }
  console.log(buf);
});
