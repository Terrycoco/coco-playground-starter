var fs = require("fs");
var theme = require("./src/themes/learn.js");
var calcFontSizes = require("./src/dev/utils/scaleUtils");

function toCSS(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("-").toLowerCase();
}

const getFontVariable = (name) => {
  let str = name.replaceAll(" ", "-").toLowerCase();
  return `var(--font-${str})`;
};

function sectionToCSS(themeobj, sectionname, prefix) {
  let result = "";
  let value = "";
  let themesection;
  if (sectionname === undefined) {
    themesection = themeobj;
  } else {}
   themeobj[sectionname];
  }
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

let css = `/*THIS FILE IS AUTOMATICALLY PRODUCED FROM THEME SETTINGS
DO NOT MAKE CHANGES HERE */\n
@import './reset.css';\n
@import './fonts.css';\n
:root {\n`;
//put in root font size here
css += `font-size: 8px;\n`;

let prefix = "";

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

//font sizing variables
if (theme.project.autoCalcHeadings === true) {
  let headingLevels = theme.project.headingLevels;
  let device = "mobile";
  let bodySize = theme.screens.bodyFontSize;
  let ratio = theme.screens.fontRatio;
  let fontSizes = calcFontSizes(bodySize, headingLevels, ratio);
  for (const key in fontSizes) {
    //put mobile sizes up top in variables
    prefix = "--fs-";
    css += sectionToCSS(fontSizes)
  }
  
}

//spacing variables
prefix = "--sp-";
css += sectionToCSS(theme, "spacing", prefix);

css += "}\n\n";

//end variables --------------------------

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
  let bp = theme.screens[device].min;
  css += `@media (min-width: ${bp}) {\n`;
  css += `html {\n`;
  css += `font-size: ${theme.screens[device].baseUnit};\n`;
  css += `}\n`;
  css += `body {\n`;
  css += `font-size: ${theme.screens[device].bodyFontSize};\n`;
  css += `}\n`;
  css += `}\n\n`;
}

var data = css + "\n";
fs.writeFile("src/styles/theme.css", data, (err) => {
  if (err) console.log(err);
  console.log("theme css written");
});
