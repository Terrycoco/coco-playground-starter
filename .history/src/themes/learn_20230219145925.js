const screens = {
  //min widths
  mobile: "0em",
  lgMobile: "36em",
  tablet: "62em",
  laptop: "62em",
  desktop: "75em",
  tv: "87.5em",
};

const baseFontSizes = {
  //must match screen keys
  mobile: "16px",
  lgMobile: "17px",
  tablet: "18px",
  laptop: "19px",
  desktop: "20px",
  tv: "21px",
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
    fontSize: "1em",
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
    fontSize: "2em",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },

  h2: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h3: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "1rem",
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
  section: {
    padding: "5% 5%",
  },
};

const layout = {
  page: {
    backgroundColor: colors.whitish,
  },
};

let theme = {
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
