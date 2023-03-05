let BODY_SIZE = 2; //em
let LEVELS = 3; //number of headers deep to use
let RATIO = 2; //how much contrast

export const calcFontSizes = () => {
  let fontSizes = {};
  //eventually read and write to theme
  for (let i = 1; i <= LEVELS; i++) {
    let power = i / LEVELS;
    let multiplier = Math.pow(RATIO, power);
    let fs = BODY_SIZE * multiplier;
    fontSizes[`h${LEVELS - i}`] = fs.toFixed(4);
  }
  //small size
  let power = -1 / LEVELS;
  let multiplier = Math.pow(RATIO, power);
  let sm = BODY_SIZE * multiplier;
  fontSizes[`small`] = sm.toFixed(4);

  console.log("fontsizes:", fontSizes);
  return fontSizes;
};
