const fonts = {
  base: "Gelasio",
  display: "Gelasio",
  special: "Oleo Script",
  mono: "Space Mono",
};

const fontSizes = {
  mobile: {
    body: {
      fontSize: 18,
      lineHeight: 1.5,
    },
    fs1: {
      fontSize: 25,
      lineHeight: 1.16,
    },
  },
  tablet: {
    body: {
      fontSize: 18,
      lineHeight: 1.5,
    },
    fs1: {
      fontSize: 25,
      lineHeight: 1.16,
    },
  },
  laptop: {
    body: {
      fontSize: 18,
      lineHeight: 1.5,
    },
    fs1: {
      fontSize: 25,
      lineHeight: 1.16,
    },
  },
  desktop: {
    body: {
      fontSize: 18,
      lineHeight: 1.5,
    },
    fs1: {
      fontSize: 25,
      lineHeight: 1.16,
    },
  },
  tv: {
    body: {
      fontSize: 18,
      lineHeight: 1.5,
    },
    fs1: {
      fontSize: 25,
      lineHeight: 1.16,
    },
  },
};

//convert to ems for media queries
const screens = {
  mobile: {
    min: "320px",
    max: "479px",
  },
  tablet: {
    min: "480px",
    max: "767px",
  },
  laptop: {
    min: "768px",
    max: "1023px",
  },
  desktop: {
    min: "1024ox",
    max: "1999px",
  },
  tv: {
    min: "1200px",
    max: "9999px",
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
    fontVariationSettings: "wght 400", // 1 - 1000 works font-variation-settings
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
    fontVariationSettings: "wght 400", // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },

  h2: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "var(--fs-h2)",
    lineHeight: "150%",
    fontVariationSettings: "wght 400", // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h3: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "var(--fs-h3)",
    lineHeight: "150%",
    fontVariationSettings: "wght 400", // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h4: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "150%",
    fontVariationSettings: "wght 400", // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h5: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "150%",
    fontVariationSettings: "wght 400", // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h6: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "var(--fs-p1)",
    lineHeight: "150%",
    fontVariationSettings: "wght 400", // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  small: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-body)",
    fontWeight: "400",
    fontSize: "var(--fs-small)",
    lineHeight: "150%",
    fontVariationSettings: "wght 400", // 1 - 1000 works font-variation-settings
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
  fontSizes,
  screens,
  colors,
  colorVariants,
  text,
  spacing,
  elements,
  layout,
};

module.exports = theme;
