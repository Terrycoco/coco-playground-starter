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

const calcScale = (bodySize, ratio) => {
  let sizes = {};
  sizes.p = getValFromCSS(bodySize);
  sizes.p1 = bodyVal * ratio;
  sizes.p2 = p1 * ratio;
  sizes.p3 = p2 * ratio;
  sizes.p4 = p3 * ratio;
  sizes.p5 = p4 * ratio;
  sizes.p6 = p5 * ratio;
  sizes.s1 = bodyVal * ratio * -1;
  sizes.s2 = s1 * ratio * -1;
  sizes.s3 = s2 * ratio * -1;
  sizes.s4 = s3 * ratio * -1;
  console.log("sizes:", sizes);
};

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

module.exports = calcFontSizes;
