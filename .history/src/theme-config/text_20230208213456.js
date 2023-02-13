import { createGlobalStyle } from "styled-components";

const SIZES = {
  h1: "122px",
  h2: "76px",
  h3: "61px",
};

const globalTextVars = () => {
  return `
  html {

  }

  h1 {
    font-family: 'Roboto Mono',
    font-size: 122px;
    letter-spacing: -1.5px;
    font-weight: 'lightest';
    color: var(--primary);
  }

   `;
};

module.exports = { SIZES, globalTextVars };
