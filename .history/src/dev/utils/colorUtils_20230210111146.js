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
