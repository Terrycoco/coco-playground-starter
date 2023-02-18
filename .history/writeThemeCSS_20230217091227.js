var fs = require("fs");
var theme = require("./src/themes/learn.js");

console.log("theme:", theme);

var data = ":root { font-size: 18px; } ";

fs.writeFile("src/styles/theme.css", data, (err) => {
  if (err) console.log(err);
  console.log("theme css written");
});
