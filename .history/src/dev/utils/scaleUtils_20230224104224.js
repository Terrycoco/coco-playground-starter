let BODY_SIZE = 2; //em
let LEVELS = 3; //number of headers deep to use
let RATIO = 2; //how much contrast

export const calcFontSizes = (theme) => {
  let copy = Object.assign({}, theme);

  console.log("text: ", text);
  let counter = 0;
  //eventually read and write to theme
  for (let i = 1; i <= LEVELS; i++) {
    let power = i / LEVELS;
    let multiplier = Math.pow(RATIO, power);
    let fs = BODY_SIZE * multiplier;
    let lev = LEVELS - counter;
    text[`h${lev}`].fontSize = fs.toFixed(4);
    counter++;
  }
  //small size
  let power = -1 / LEVELS;
  let multiplier = Math.pow(RATIO, power);
  let sm = BODY_SIZE * multiplier;
  text.small.fontSize = sm.toFixed(4);

  console.log("text?;", text);
  return;
};
