const screenSettings = {
  mobile: {
    min: "320px",
    max: "480px",
    baseUnit: "8px", //for even spacing in rems
    bodyFontSize: "2rem", //may be different than spacing root size
    fontRatio: 2, //for heading contrast calculations
  },
  tablet: {
    min: "481px",
    max: "768px",
    baseUnit: "10px",
    bodyFontSize: "1.8rem",
    fontRatio: 2,
  },
  laptop: {
    min: "769px",
    max: "1024px",
    baseUnit: "11px",
    bodyFontSize: "1.7272rem",
    fontRatio: 2,
  },
  desktop: {
    min: "1025px",
    max: "1200px",
    baseUnit: "11px",
    bodyFontSize: "1.7272rem",
    fontRatio: 2,
  },
  tv: {
    min: "1201px",
    max: "9999px",
    baseUnit: "12px",
    bodyFontSize: "1.6666rem",
    fontRatio: 2,
  },
};

// const screens = {
//   //min widths
//   mobile: "0em",
//   lgMobile: "64em",
//   tablet: "96em",
//   laptop: "124em",
//   desktop: "150em",
//   tv: "175em",
// };

// const baseFontSizes = {
//   //must match screen keys
//   mobile: "8px",
//   lgMobile: "9px",
//   tablet: "10px",
//   laptop: "11px",
//   desktop: "11px",
//   tv: "12px",
//   full: "11px",
// };

const colors = {
  primary: "#fc3a79",
  secondary: "#fe572e",
  blackish: "#261f22",
  whitish: "#f5f5f4",
  error: "#dc2626",
};

const colorVariants = {};

const fonts = {
  body: "Montserrat",
  display: "Josefin Sans",
  special: "Oleo Script",
  mono: "Space Mono",
};

const text = {
  p: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-body)",
    fontWeight: "400",
    fontSize: "2em", //16px mobile
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: 0,
    wordSpacing: 0,
    maxWidth: "60ch",
  },
  h1: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "3.1748rem",
    lineHeight: "115%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },

  h2: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "2.5198em",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h3: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "2.0em",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h4: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h5: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h6: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  small: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-body)",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  subtitle1: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "1.6rem",
    fontWeight: "normal",
    lineHeight: 1.4,
    letterSpacing: ".15px",
  },
  subtitle2: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "1.4rem",
    fontWeight: "medium",
    lineHeight: 1.4,
    letterSpacing: ".1px",
  },
};

const spacing = {
  header: "4rem",
};

const layout = {
  page: {
    backgroundColor: colors.whitish,
  },
};

let theme = {
  screenSettings,
  screens,
  baseFontSizes,
  colors,
  colorVariants,
  fonts,
  text,
  spacing,
  layout,
};

module.exports = theme;
