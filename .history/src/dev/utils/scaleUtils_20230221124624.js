let BODY_SIZE = 1; //em
let LEVELS = 2; //number of headers deep to use
let RATIO = 2; //how much contrast

export const calcHeader = () => {
  let fontSizes = {};
  //eventually read and write to theme
  for (const i = LEVELS; i > 0; i--) {
    //start at bottommost level (h2)
    let fs = BODY_SIZE * RATIO * (1 / LEVELS);
    console.log(`h${i}: ${fs}em`);
  }
  /// plus one small one
};
