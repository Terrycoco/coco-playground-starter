import { createGlobalStyle } from "styled-components";

const SIZES = {
  h1: "122px",
  h2: "76px",
  h3: "61px",
};

const globalTextVars = () => {
  return `
  

  h1 {
    font-family: 'Josefin Sans',
    font-size: 16px;
    letter-spacing: -1.5px;
    font-weight: 'lightest';
    color: var(--secondary);
  }

   `;
};

module.exports = { SIZES, globalTextVars };
