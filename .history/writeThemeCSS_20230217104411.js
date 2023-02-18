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

let css = ":root {\n";
let prefix = "";

function sectionToCSS(section, prefix) {
  let result = "";
  let value = "";
  let themesection = theme[section];
  const keys = Object.keys(themesection);
  keys.forEach((key, i) => {
    if (section == "fonts") {
      value = getFontVariable(themesection[key]);
    } else {
      value = themesection[key];
    }
    result += `${prefix}${toCSS(key)}: ${value};\n`;
  });
  return result;
}

//screens
prefix = "--";
css += sectionToCSS("screens", prefix);

//colors
prefix = "--clr-";
css += sectionToCSS("colors", prefix);

//fonts
//TODO this will be different in production v dev
prefix = "";
let fontcss = sectionToCSS("fonts", prefix);
console.log("fontcss: ", fontcss);

var data = css + "}\n";
fs.writeFile("src/styles/theme.css", data, (err) => {
  if (err) console.log(err);
  console.log("theme css written");
});
