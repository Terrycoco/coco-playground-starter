var fs = require("fs");
var theme = require("./src/themes/learn.js");

function toCSS(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("-").toLowerCase();
}

let css = ":root {";
let prefix = "";

function sectionToCSS(themesection, prefix) {
  let result = "";
  const keys = Object.keys(themesection);
  keys.forEach((key, i) => {
    result += `${prefix}${key}: ${themesection[key]};\n`;
  });
  return result;
}

//screens
const screens = theme.screens;
prefix = "--";
css += sectionToCSS(screens, prefix);

//colors
const colors = theme.colors;
prefix = "--clr-";
css += sectionToCSS(colors, prefix);

var data = css + "}";

fs.writeFile("src/styles/theme.css", data, (err) => {
  if (err) console.log(err);
  console.log("theme css written");
});
