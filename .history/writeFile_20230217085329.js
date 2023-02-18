var fs = require("fs");
var data = "new file contents";

fs.writeFile("/src/styles/temp.css", data, (err) => {
  if (err) console.log(err);
  console.log(":root { font-size: 15px; } ");
});
