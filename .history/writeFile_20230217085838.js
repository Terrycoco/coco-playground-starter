var fs = require("fs");
var data = ":root { font-size: 15px; } ";

fs.writeFile("/src/styles/temp.css", data, (err) => {
  if (err) console.log(err);
  console.log();
});
