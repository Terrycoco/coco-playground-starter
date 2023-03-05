var fs = require("fs");
var theme = require("./src/themes/learn.js");

function toCSS(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("-").toLowerCase();
}

const getFontVariable = (name) => {
  let str = name.replaceAll(" ", "-").toLowerCase();
  return `var(--font-${str})`;
};

let css = `/*THIS FILE IS AUTOMATICALLY PRODUCED FROM THEME SETTINGS
DO NOT MAKE CHANGES HERE */\n
@import './reset.css';\n
@import './fonts.css';\n
:root {\n`;
let prefix = "";

function sectionToCSS(themeobj, sectionname, prefix) {
  let result = "";
  let value = "";
  let themesection = themeobj[sectionname];
  const keys = Object.keys(themesection);
  keys.forEach((key, i) => {
    if (sectionname == "fonts") {
      value = getFontVariable(themesection[key]);
    } else {
      value = themesection[key];
    }
    result += `${prefix}${toCSS(key)}: ${value};\n`;
  });
  return result;
}

//screens
// prefix = "--";
// css += sectionToCSS(theme, "screens", prefix);

//colors
prefix = "--clr-";
css += sectionToCSS(theme, "colors", prefix);

//fonts
//TODO this will be different in production v dev
prefix = "--font-";
css += sectionToCSS(theme, "fonts", prefix);

css += "}\n\n"; //end variables

//text
for (const key in theme.text) {
  prefix = "";
  css += `${key}: {\n`;
  css += sectionToCSS(theme.text, key, prefix);
  css += "}\n\n";
}

//media queries
for (const device in theme.screenSettings) {
  //mobile is device
  let bp = theme.screenSettings[key].breakpoint;
  css += `@media (min-width: ${bp}) {\n`;
  css += `:root {\n`;
  css += `font-size: ${theme.screenSettings[device].baseUnit};\n`;
  css += `}}\n\n`;
}

var data = css + "\n";
fs.writeFile("src/styles/theme.css", data, (err) => {
  if (err) console.log(err);
  console.log("theme css written");
});
