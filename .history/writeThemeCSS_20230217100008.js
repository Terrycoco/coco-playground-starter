var fs = require("fs");
var theme = require("./src/themes/learn.js");

function toCSS(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("-").toLowerCase();
}

let css = ":root {";
let prefix = "";

function sectionToCSS(themesection, prefix) {
  const keys = Object.keys(themesection);
  keys.forEach((key, i) => {
    css += `${prefix}${key}: ${themesection[key]};\n`;
  });
}

//screens
const screens = theme.screens;
prefix = "--";
const scrkeys = Object.keys(screens);

//colors
const colors = theme.colors;
prefix = "--clr-";
const clrkeys = Object.keys(colors);

clrkeys.forEach((key, i) => {
  css += `${prefix}${key}: ${colors[key]};`;
});

var data = css + "}";

fs.writeFile("src/styles/theme.css", data, (err) => {
  if (err) console.log(err);
  console.log("theme css written");
});
