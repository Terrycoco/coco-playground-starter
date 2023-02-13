import { createGlobalStyle } from "styled-components";
import { getFontVariable } from "@/utils/fonts";

//from theme
const FONTS = {
  base: "Montserrat",
  display: "Josefin Sans",
  special: "Montserrat",
  mono: "Roboto Mono",
};

//get variables to load at top of app
const FONTVARS = {
  display: getFontVariable(FONTS.display),
  base: getFontVariable(FONTS.base),
  special: getFontVariable(FONTS.special),
  mono: getFontVariable(FONTS.mono),
};

console.log("font var: ", FONTVARS.display);

const SIZES = {
  h1: "122px",
  h2: "76px",
  h3: "61px",
};

const globalTextVars = () => {
  //this works!

  return `
  html {
    --font-display: var(${FONTVARS.display});
    --font-base: var(${FONTVARS.base});
    --font-special: var(${FONTVARS.special});
    --font-mono: var(${FONTVARS.mono});
  }
  
  h1 {
    font-family: var(--font-display);
    font-size: 72px;
    letter-spacing: -1.5px;
    font-weight: light;
    color: var(--secondary);
  }
`;
};

module.exports = { SIZES, globalTextVars };
