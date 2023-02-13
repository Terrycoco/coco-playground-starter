import { createGlobalStyle } from "styled-components";

const COLORS = {
  primary: "blue",
  secondary: "green",
  blackish: "black", //will calculate
  whitish: "white",
  error: "red",
};

const globalColorVars = () => {
  return `
  html {
        --primary: ${COLORS.primary};
        --secondary: ${COLORS.secondary};
        --blackish: ${COLORS.blackish};
        --whitish: ${COLORS.whitish};
        --error: ${COLORS.error};
  }
   `;
};

module.exports = { COLORS, globalColorVars };
