const screens = {
  mobile: {
    min: "320px",
    max: "480px",
    baseUnit: "8px", //for even spacing in rems
    bodyFontSize: "16px", // different than spacing root size
    fontRatio: 2, //for heading calculations
    fontSizes: {
      body: "16px",
      p: "1rem",
      h1: "4rem",
      h2: "3rem",
    },
  },
  tablet: {
    min: "481px",
    max: "768px",
    baseUnit: "9px",
    bodyFontSize: "17px",
    fontRatio: 2,
  },
  laptop: {
    min: "769px",
    max: "1024px",
    baseUnit: "10px",
    bodyFontSize: "18px",
    fontRatio: 2,
  },
  desktop: {
    min: "1025px",
    max: "1200px",
    baseUnit: "11px",
    bodyFontSize: "19px",
    fontRatio: 2,
  },
  tv: {
    min: "1201px",
    max: "9999px",
    baseUnit: "12px",
    bodyFontSize: "20px",
    fontRatio: 2,
  },
};

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
    fontSize: "1.6rem", //16px mobile
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
    fontSize: "4.8rem",
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
  headerHeight: "4rem",
  sectionPadding: "4rem",
};

const layout = {
  page: {
    backgroundColor: colors.whitish,
  },
};

let theme = {
  screens,
  // screens,
  // baseFontSizes,
  colors,
  colorVariants,
  fonts,
  text,
  spacing,
  layout,
};

module.exports = theme;
