var fs = require("fs");
var data = ":root { font-size: 18px; } ";

fs.writeFile("src/styles/theme.css", data, (err) => {
  if (err) console.log(err);
  console.log("file written!");
});
