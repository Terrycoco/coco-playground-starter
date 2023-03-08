const project = {
  baseFontSize: "18px",
  baseRatio: 2,
  baseLineHeight: 1.5,
  p1FontSize: "25px",
  p1LineHeight: 1.16,
};

const fonts = {
  base: "Gelasio",
  display: "Gelasio",
  special: "Oleo Script",
  mono: "Space Mono",
};

const fontLevels = {
  //put all font sizes as numbers (in px)
  base: {
    fontSize: 18,
    lineHeight: 1.5,
  },
  fs1: {
    fontSize: 25,
    lineHeight: 1.16,
  },
};

const screens = {
  mobile: {
    min: "20em",
    max: "30em",
    baseLineHeight: "1.4",
    baseFontSize: "16px",
    fontRatio: 2,
  },
  tablet: {
    min: "30.0625em",
    max: "48em",
    baseLineHeight: "1.4",
    baseFontSize: "17px",
    fontRatio: 3,
  },
  laptop: {
    min: "48.0625em",
    max: "64em",
    baseLineHeight: "1.4",
    baseFontSize: "18px",
    fontRatio: 3,
  },
  desktop: {
    min: "64.0625em",
    max: "75em",
    baseLineHeight: "1.4",
    baseFontSize: "19px",
    fontRatio: 3,
  },
  tv: {
    min: "75.0625",
    max: "625em",
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
  fonts,
  project,
  fontLevels,
  screens,
  colors,
  colorVariants,
  text,
  spacing,
  elements,
  layout,
};

module.exports = theme;
