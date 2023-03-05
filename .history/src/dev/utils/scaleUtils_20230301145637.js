function getValFromCSS(input) {
  if (!input) return null;
  let matches = input.match(/[a-z]/); //search for unit pos
  if (matches) {
    let val = parseFloat(input.substring(0, matches.index));
    return val;
  } else {
    return parseFloat(input);
  }
}
function getUnitFromCSS(input) {
  let matches = input.match(/[a-z]/); //search for unit pos
  if (matches) {
    let unit = input.substring(matches.index);
    return unit;
  } else {
    return null;
  }
}

function calcScale(bodySize, ratio) {
  let sizes = {};
  sizes.p = getValFromCSS(bodySize);
  sizes.p1 = sizes.p * ratio;
  sizes.p2 = sizes.p1 * ratio;
  sizes.p3 = sizes.p2 * ratio;
  sizes.p4 = sizes.p3 * ratio;
  sizes.p5 = sizes.p4 * ratio;
  sizes.p6 = sizes.p5 * ratio;
  sizes.s1 = sizes.p * (1 - ratio);
  sizes.s2 = sizes.s1 * ratio;
  sizes.s3 = sizes.s2 * ratio;
  sizes.s4 = sizes.s3 * ratio;
  console.log("sizes:", sizes);
}

//another way of calculating
const calcFontSizes = (bodySize, LEVELS, RATIO) => {
  let BODY_SIZE = getValFromCSS(bodySize);
  let unit = getUnitFromCSS(bodySize);
  let places = 4;
  if (unit === "px") {
    places = 0;
  }
  let fontSizes = {};
  let counter = 0;

  for (let i = 1; i <= LEVELS; i++) {
    let power = i / LEVELS;
    let multiplier = Math.pow(RATIO, power);
    let fs = BODY_SIZE * multiplier;
    let lev = LEVELS - counter;
    fontSizes[`h${lev}`] = `${fs.toFixed(places)}${unit}`;
    counter++;
  }
  //paragraph
  fontSizes.p = bodySize;

  //small size
  let power = -1 / LEVELS;
  let multiplier = Math.pow(RATIO, power);
  let sm = BODY_SIZE * multiplier;
  fontSizes.small = `${sm.toFixed(places)}${unit}`;

  console.log("fontSizes", fontSizes);

  return fontSizes;
};

module.exports = calcScale;
