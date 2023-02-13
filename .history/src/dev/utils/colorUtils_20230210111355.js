const getPctOfHex = (hex, pct) => {
  //incoming pct is pct opacity of orig color
  let inverted = 100 - pct;
  //convert incoming to hsl
  let hsl = hexToHSL(hex);

  //current lightness is 0%;
  let currentLightPct = hsl.l;
  let remainingLightPct = 100 - currentLightPct;
  let onepct = remainingLightPct / 100;
  let desiredPct = onepct * inverted + currentLightPct;
  let result = HSLToHex(hsl.h, hsl.s, desiredPct);
  return result;
};

const updateVariants = (base, category, passedtheme) => {
  //teal, brand, theme
  //just reset theme variants for one base
  let hex = passedtheme.colors[category];
  let variants = {};
  let keys = [75, 50, 25, 10, 5];
  keys.forEach((key) => {
    let val = getPctOfHex(hex, key);
    let obj = new ColorObj(category, key, val);
    variants[key] = obj;
  });

  if (!passedtheme.hasOwnProperty("variants")) {
    passedtheme.colorVariants = {};
  }
  if (!passedtheme.colorVariants.hasOwnProperty(category)) {
    passedtheme.colorVariants[category] = {};
  }
  passedtheme.colorVariants[category] = variants;
  // console.log("variants updated: ", variants);
  return passedtheme;
};

export const initVariants = (passedtheme) => {
  // let newtheme = Object.assign({}, passedtheme);

  const myColors = Object.keys(passedtheme.colors);

  for (const idx in myColors) {
    let category = myColors[idx];

    updateVariants(category, category, passedtheme);
  } //end for

  //console.log("variants initialized", passedtheme);
  return passedtheme;
};
