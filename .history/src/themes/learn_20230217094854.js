const screens = {
  //min widths
  xs: "0em",
  mobile: "40em", //640px
  tablet: "48em", //768px
  laptop: "64em", //1024px
  desktop: "80em", //1280px
  tv: "96em", //1536px
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
  body: "var(--font-montserrat)",
  display: "var(--font-josefin-sans)",
  special: "var(--font-oleo-script)",
  mono: "var(--font-space-mono)",
};

const text = {
  h1: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "6.063rem",
    fontWeight: "lighter",
    lineHeight: 1,
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h2: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "4.75rem",
    fontWeight: "lighter",
    lineHeight: 1.1,
    letterSpacing: "-0.5px",
  },
  h3: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "4.8rem",
    fontWeight: "normal",
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  h4: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "3.4rem",
    fontWeight: "normal",
    lineHeight: 1.4,
    letterSpacing: ".25px",
  },
  h5: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "2.4rem",
    fontWeight: "normal",
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  h6: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "2rem",
    fontWeight: "medium",
    lineHeight: 1.4,
    letterSpacing: ".15px",
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

const layout = {
  page: {
    backgroundColor: colors.whitish,
  },
};

let theme = { screens, colors, colorVariants, fonts, text, layout };

module.exports = theme;
