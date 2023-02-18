//practice reading and writing a file
var fs = require("fs");

fs.readFile("temp.txt", "utf-8", (err, buf) => {
  if (err) {
    console.log(err);
  }
  console.log(buf);
});
