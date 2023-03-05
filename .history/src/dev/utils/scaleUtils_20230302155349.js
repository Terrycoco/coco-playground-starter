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
  let px = {};
  let rems = {};
  console.log("psize:", bodySize, "ratio:", ratio);
  let base = getValFromCSS(bodySize);
  px.p = base;
  px.p1 = px.p * ratio;
  px.p2 = px.p1 * ratio;
  px.p3 = px.p2 * ratio;
  px.p4 = px.p3 * ratio;
  px.p5 = px.p4 * ratio;
  px.p6 = px.p5 * ratio;
  px.s1 = px.p * (1 / ratio);
  px.s2 = px.s1 * (1 / ratio);
  px.s3 = px.s2 * (1 / ratio);
  px.s4 = px.s3 * (1 / ratio);
  console.log("sizes:", px);

  //convert to rem
  for (let size in px) {
    console.log("size:", size, px[size]);
    rems[size] = px[size];
  }
  return rems;
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
