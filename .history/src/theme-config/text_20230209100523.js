import { createGlobalStyle } from "styled-components";
import { getFontVariable, getFontClassName } from "@/utils/fonts";

//from theme
const FONTS = {
  base: "Montserrat",
  display: "Josefin Sans",
  special: "Montserrat",
  mono: "Roboto Mono",
};

console.log("fontClassName: ", getFontClassName("Montserrat"));

//get variables to load at top of app
const FONTVARS = {
  display: "var(--font-josefin-sans)",
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
    --font-display: ${FONTVARS.display};
    --font-base: ${FONTVARS.base};
    --font-special: ${FONTVARS.special};
    --font-mono: ${FONTVARS.mono};
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
