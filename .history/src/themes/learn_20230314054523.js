//to use, import this file and set this as currentTheme in /src/themes/index
const fonts = {
  body: "Gelasio",
  display: "Gelasio",
  special: "Oleo Script",
  mono: "Space Mono",
  forms: "Poppins",
};

const fontSizes = {
  mobile: {
    body: {
      fontSize: "18",
      lineHeight: "1.5",
    },

    fs1: {
      fontSize: "25",
      lineHeight: "1.16",
    },

    fs2: {
      fontSize: "40",
      lineHeight: "1.16",
    },
  },

  tablet: {
    body: {
      fontSize: "19",
      lineHeight: "1.5",
    },

    fs1: {
      fontSize: "25",
      lineHeight: "1.16",
    },

    fs2: {
      fontSize: "40",
      lineHeight: "1.16",
    },
  },

  laptop: {
    body: {
      fontSize: "20",
      lineHeight: "1.329",
    },

    fs1: {
      fontSize: "40",
      lineHeight: "1.16",
    },

    fs2: {
      fontSize: "52",
      lineHeight: "1.16",
    },
  },

  desktop: {
    body: {
      fontSize: "24",
      lineHeight: "1.345",
    },

    fs1: {
      fontSize: "34",
      lineHeight: "1.16",
    },

    fs2: {
      fontSize: "57",
      lineHeight: "1.16",
    },
  },

  tv: {
    body: {
      fontSize: "28",
      lineHeight: "1.391",
    },

    fs1: {
      fontSize: "37",
      lineHeight: "1.16",
    },

    fs2: {
      fontSize: "67",
      lineHeight: "1.031",
    },
  },
};

const screens = {
  mobile: {
    min: 320,
    max: 479,
  },

  tablet: {
    min: 480,
    max: 767,
  },

  laptop: {
    min: 768,
    max: 1023,
  },

  desktop: {
    min: 1024,
    max: 1999,
  },

  tv: {
    min: 1200,
    max: 9999,
  },
};

const colors = {
  primary: "#fc3a79",
  secondary: "#fe572e",
  blackish: "#261f22",
  whitish: "#f5f5f4",
  error: "#dc2626",
};

const colorVariants = {
  primary75: "#fd6b99",

  primary50: "#fe9dbb",

  primary25: "#fecedd",

  primary10: "#ffebf1",

  primary5: "#fff5f8",

  secondary75: "#fe8162",

  secondary50: "#feab96",

  secondary25: "#ffd5cb",

  secondary10: "#ffeeea",

  secondary5: "#fff7f5",

  blackish75: "#635158",

  blackish50: "#9c868f",

  blackish25: "#cdc2c7",

  blackish10: "#ebe7e9",

  blackish5: "#f5f3f4",
};

const spacing = {
  header: {
    height: "2",
    paddingTop: "2",
    paddingRight: "0",
    paddingBottom: "0",
    paddingLeft: "0",
  },
  page: {
    paddingTop: "2",
    paddingRight: "0",
    paddingBottom: "0",
    paddingLeft: "0",
  },
  section: {
    paddingTop: "0",
    paddingRight: "0",
    paddingBottom: "0",
    paddingLeft: "0",
  },
};

const text = {
  p: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-body)",
    fontWeight: "400",
    fontSize: "var(--fs-body)",
    lineHeight: "var(--lh-body)",
    fontVariationSettings: "wght 400",
    letterSpacing: "0",
    wordSpacing: "0",
    maxWidth: "60ch",
  },

  h1: {
    color: "var(--clr-blackish)",

    fontFamily: "var(--font-display)",

    fontWeight: "400",

    fontSize: "var(--fs-h1)",

    lineHeight: "var(--lh-h1)",

    fontVariationSettings: "wght 400",

    letterSpacing: "-1.5px",

    wordSpacing: "-5px",
  },

  h2: {
    color: "var(--clr-blackish)",

    fontFamily: "var(--font-display)",

    fontWeight: "400",

    fontSize: "var(--fs-h2)",

    lineHeight: "var(--lh-h2)",

    fontVariationSettings: "wght 400",

    letterSpacing: "-1.5px",

    wordSpacing: "-5px",
  },

  h3: {
    color: "var(--clr-blackish)",

    fontFamily: "var(--font-display)",

    fontWeight: "400",

    fontSize: "1rem",

    lineHeight: "150%",

    fontVariationSettings: "wght 400",

    letterSpacing: "-1.5px",

    wordSpacing: "-5px",
  },

  h4: {
    color: "var(--clr-blackish)",

    fontFamily: "var(--font-display)",

    fontWeight: "400",

    fontSize: "1rem",

    lineHeight: "150%",

    fontVariationSettings: "wght 400",

    letterSpacing: "-1.5px",

    wordSpacing: "-5px",
  },

  h5: {
    color: "var(--clr-blackish)",

    fontFamily: "var(--font-display)",

    fontWeight: "400",

    fontSize: "1rem",

    lineHeight: "150%",

    fontVariationSettings: "wght 400",

    letterSpacing: "-1.5px",

    wordSpacing: "-5px",
  },

  h6: {
    color: "var(--clr-blackish)",

    fontFamily: "var(--font-display)",

    fontWeight: "400",

    fontSize: "1rem",

    lineHeight: "150%",

    fontVariationSettings: "wght 400",

    letterSpacing: "-1.5px",

    wordSpacing: "-5px",
  },

  small: {
    color: "var(--clr-blackish)",

    fontFamily: "var(--font-forms)",

    fontWeight: "400",

    fontSize: "var(--fs-sm)",

    lineHeight: "1",

    fontVariationSettings: "wght 400",

    letterSpacing: "-1.5px",

    wordSpacing: "-5px",
  },
};

const containers = {
  section: {
    padding: "var(--sp-section-padding)",
  },

  nav: {
    fontSize: "14px",
  },

  header: {
    backgroundColor: "var(--clr-primary)",
    height:
  },
};

const theme = {
  colors,
  colorVariants,
  fonts,
  fontSizes,
  screens,
  spacing,
  text,
  elements,
};

module.exports = {
  colors,
  colorVariants,
  fonts,
  fontSizes,
  screens,
  spacing,
  text,
  elements,
  theme,
};
