import { createGlobalStyle } from "styled-components";
import { getFontVariable } from "@/utils/fonts";

//from theme
const FONTS = {
  base: "Montserrat",
  display: "Josefin Sans",
  special: "Montserrat",
  mono: "Roboto Mono",
};

//get variables to load
const FONTVARS = {
  display: `var(${getFontVariable(FONTS.display)}`,
  base: `var(${getFontVariable(FONTS.base)}`,
  special: `var(${getFontVariable(FONTS.special)}`,
  mono: `var(${getFontVariable(FONTS.mono)}`,
};

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
