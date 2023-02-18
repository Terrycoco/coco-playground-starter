var fs = require("fs");
var theme = require("./src/themes/learn.js");

function toCSS(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("-").toLowerCase();
}

//do colors first
const colors = theme.colors;
const clrkeys = Object.keys(colors);
console.log("color keys:", clrkeys);

var data = ":root { backgroundColor: red; } ";

fs.writeFile("src/styles/theme.css", data, (err) => {
  if (err) console.log(err);
  console.log("theme css written");
});
