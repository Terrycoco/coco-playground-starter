import { createGlobalStyle } from "styled-components";

const FONTS = {
  base: "Montserrat",
  display: "Josefin Sans",
  special: "Montserrat", //will calculate
  mono: "Roboto Mono",
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
    --font-display: ${FONTS.display};
    --font-base: ${FONTS.base};
    --font-special: ${FONTS.special};
    --font-mono: ${FONTS.mono};
  }
  
  h1 {
    font-family: var(--font-display),
    font-size: 16px;
    letter-spacing: -1.5px;
    font-weight: 'lightest';
    color: var(--secondary);
  }
`;
};

module.exports = { SIZES, globalTextVars };
