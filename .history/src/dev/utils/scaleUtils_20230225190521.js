// let BODY_SIZE = 2; //em
// let LEVELS = 3; //number of headers deep to use
// let RATIO = 2; //how much contrast
import { getUnitFromCSS, getValFromCSS } from "@/utils/strings";

export const calcFontSizes = (bodySize, LEVELS, RATIO) => {
  console.log("bs:", bodySize, "levs:", LEVELS, "ratio:", RATIO);
  let BODY_SIZE = getValFromCSS(bodySize);
  console.log("bs:", BODY_SIZE);
  let unit = getUnitFromCSS(bodySize);
  let fontSizes = {};
  let counter = 0;

  for (let i = 1; i <= LEVELS; i++) {
    let power = i / LEVELS;
    let multiplier = Math.pow(RATIO, power);
    let fs = BODY_SIZE * multiplier;
    let lev = LEVELS - counter;
    fontSizes[`h${lev}`] = `${fs.toFixed(4)}${unit}`;
    counter++;
  }
  //small size
  let power = -1 / LEVELS;
  let multiplier = Math.pow(RATIO, power);
  let sm = BODY_SIZE * multiplier;
  fontSizes.small = `${sm.toFixed(4)}${unit}`;

  console.log("fontSizes", fontSizes);

  return fontSizes;
};
