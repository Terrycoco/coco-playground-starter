import {useTheme} from '@/hooks';
let BODY_SIZE = 2; //em
let LEVELS = 3; //number of headers deep to use
let RATIO = 2; //how much contrast

export const calcFontSizes = () => {
  const {theme, setTheme} = useTheme();
  let clone = { ...theme };

  console.log("clone: ", clone);
  let counter = 0;

  //eventually read and write to theme
  for (let i = 1; i <= LEVELS; i++) {
    let power = i / LEVELS;
    let multiplier = Math.pow(RATIO, power);
    let fs = BODY_SIZE * multiplier;
    let lev = `h${(LEVELS - counter)}`;
    let 
    clone.text(lev).fontSize = `${fs.toFixed(4)}rem`;
    counter++;
  }
  //small size
  let power = -1 / LEVELS;
  let multiplier = Math.pow(RATIO, power);
  let sm = BODY_SIZE * multiplier;
  clone.text.small.fontSize = `${sm.toFixed(4)}rem`;

  console.log("text?;", clone);
  return;
};
