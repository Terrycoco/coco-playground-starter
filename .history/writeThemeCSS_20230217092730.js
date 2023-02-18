var fs = require("fs");
var theme = require("./src/themes/learn.js");

function toCSS(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("-").toLowerCase();
}

//do colors first
const colors = theme.colors;
const prefix = "--clr-";
const clrkeys = Object.keys(colors);

clrkeys.forEach((key, i) => {
  console.log(`${key}: ${colors[key]}`);
});

var data = ":root { backgroundColor: red; } ";

fs.writeFile("src/styles/theme.css", data, (err) => {
  if (err) console.log(err);
  console.log("theme css written");
});
