const project = {
  baseFontSize: "18px",
  baseRatio: 2,
  baseLineHeight: 1.5,
  p1FontSize: "20px",
  p1LineHeight: 1.5,
};

const scale = {};

const screens = {
  mobile: {
    min: "320px", //should be in ems?  if change root does this affect?
    max: "480px",
    baseLineHeight: "1.4",
    baseFontSize: "16px", // different than spacing root size
    fontRatio: 2, //for heading calculations
  },
  tablet: {
    min: "481px",
    max: "768px",
    baseLineHeight: "1.4",
    baseFontSize: "17px",
    fontRatio: 3,
  },
  laptop: {
    min: "769px",
    max: "1024px",
    baseLineHeight: "1.4",
    baseFontSize: "18px",
    fontRatio: 3,
  },
  desktop: {
    min: "1025px",
    max: "1200px",
    baseLineHeight: "1.4",
    baseFontSize: "19px",
    fontRatio: 3,
  },
  tv: {
    min: "1201px",
    max: "9999px",
    baseLineHeight: "1.4",
    baseFontSize: "20px",
    fontRatio: 3,
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

const spacing = {
  //nbothiung here
};

const text = {
  p: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-body)",
    fontWeight: "400",
    fontSize: "var(--fs-p)", //16px mobile
    lineHeight: "var(--lh-base)",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: 0,
    wordSpacing: 0,
    maxWidth: "60ch",
  },
  h1: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "var(--fs-h1)",
    lineHeight: "115%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },

  h2: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "var(--fs-h2)",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h3: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "var(--fs-h3)",
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
    fontSize: "var(--fs-p1)",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  small: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-body)",
    fontWeight: "400",
    fontSize: "var(--fs-small)",
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

const elements = {
  section: {
    padding: "var(--sp-section-padding)",
  },
  nav: {
    fontSize: "var(--fs-nav-link)",
  },
};

const layout = {
  section: {
    backgroundColor: colors.whitish,
  },
};

let theme = {
  project,
  screens,
  colors,
  colorVariants,
  fonts,
  text,
  spacing,
  elements,
  layout,
};

module.exports = theme;
