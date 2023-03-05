let BODY_SIZE = 1; //em
let LEVELS = 3; //number of headers deep to use
let RATIO = 2; //how much contrast

export const calcFontSizes = () => {
  let fontSizes = {};
  //eventually read and write to theme
  for (let i = LEVELS; i > 0; i--) {
    //start at bottommost level (h2)
    console.log("i: ", i);
    let fs = (i * BODY_SIZE * RATIO) / LEVELS;
    console.log(i, fs);
  }
  /// plus one small one
};
