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
  if (sectionname == null) {
    themesection = { ...themeobj };
  } else {
    themesection = themeobj[sectionname];
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
//defaults (mobile)
css += `font-size: ${theme.fontSizes.mobile.body.fontSize}px;\n`;
css += `line-height: ${theme.fontSizes.mobile.body.lineHeight};\n`;
//now each header level for mobile
for (const level in theme.fontSizes.mobile) {
  let last = level.slice(-1);
  if (level === "body") {
    css += `fs${level}: --${theme.fontSizes.mobile[level].fontSize}px;\n`;
    css += `lh${level}: --${theme.fontSizes.mobile[level].lineHeight};\n`;
    css += `fs0: --${theme.fontSizes.mobile[level].fontSize}px;\n`;
    css += `lh0: --${theme.fontSizes.mobile[level].lineHeight};\n`;
  } else {
    css += `fs${last}: --${theme.fontSizes.mobile[level].fontSize}px;\n`;
    css += `lh${last}: --${theme.fontSizes.mobile[level].lineHeight};\n`;
  }
}

//TODO spacing variables
prefix = "--sp-";
css += sectionToCSS(theme, "spacing", prefix);
css += "}\n\n";

//end variables --------------------------

//text
for (const key in theme.text) {
  prefix = "";
  css += `${key} {\n`;
  css += sectionToCSS(theme.text, key, prefix);
  css += "}\n\n";
}

//elements
for (const key in theme.elements) {
  prefix = "";
  css += `${key} {\n`;
  css += sectionToCSS(theme.elements, key, prefix);
  css += "}\n\n";
}

//media queries
for (const device in theme.screens) {
  //skip mobile
  if (device === "mobile") continue;

  let bp = theme.screens[device].min; //TODO CONVERT TO EMS?
  css += `@media (min-width: ${bp}) {\n`;
  css += `:root {\n`;

  for (const level in theme.fontSizes[device]) {
    let last = level.slice(-1);
    if (level === "body") {
      css += `fs${level}: --${theme.fontSizes.mobile[level].fontSize}px;\n`;
      css += `lh${level}: --${theme.fontSizes.mobile[level].lineHeight};\n`;
      css += `fs0: --${theme.fontSizes.mobile[level].fontSize}px;\n`;
      css += `lh0: --${theme.fontSizes.mobile[level].lineHeight};\n`;
    } else {
      css += `fs${last}: --${theme.fontSizes.mobile[level].fontSize}px;\n`;
      css += `lh${last}: --${theme.fontSizes.mobile[level].lineHeight};\n`;
    }
  }
}
css += `}\n`;

css += `body {\n`;

css += `}\n`;

//media queries for font sizes

css += `}\n\n`;

var data = css + "\n";
fs.writeFile("src/styles/theme.css", data, (err) => {
  if (err) console.log(err);
  console.log("theme css written");
});
