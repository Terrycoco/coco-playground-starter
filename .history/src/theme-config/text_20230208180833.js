import { createGlobalStyle } from "styled-components";

const FONTSIZE = {};

const globalTextVars = () => {
  return `
  html {
        --base: ${FONTS.base};
        --display: ${FONTS.display};
        --blackish: ${COLORS.blackish};
        --whitish: ${COLORS.whitish};
        --error: ${COLORS.error};
  }

  h1 {
    font-size: 122px;
    letter-spacing: -1.5px;
    font-weight: 'lightest';
  }
   `;
};

module.exports = { COLORS, globalColorVars };
