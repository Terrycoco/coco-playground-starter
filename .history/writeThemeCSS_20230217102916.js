var fs = require("fs");
var theme = require("./src/themes/learn.js");
var { getFontVariable } = require("./src/utils/fonts");

function toCSS(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("-").toLowerCase();
}

let css = ":root {\n";
let prefix = "";

function sectionToCSS(themesection, prefix) {
  let result = "";
  const keys = Object.keys(themesection);
  keys.forEach((key, i) => {
    result += `${prefix}${toCSS(key)}: ${themesection[key]};\n`;
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

//fonts
//TODO this will be different in production v dev
const fonts = theme.fonts;
prefix = "";
css += sectionToCSS(fonts, prefix);

var data = css + "}\n";
fs.writeFile("src/styles/theme.css", data, (err) => {
  if (err) console.log(err);
  console.log("theme css written");
});
