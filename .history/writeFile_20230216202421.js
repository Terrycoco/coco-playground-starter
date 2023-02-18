var fs = require("fs");
var data = "new file contents";

fs.writeFile("temp.txt", data, (err) => {
  if (err) console.log(err);
  console.log("successfully written to file");
});
