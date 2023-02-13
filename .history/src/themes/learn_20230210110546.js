export const colors = {
  primary: "#fc3a79",
  secondary: "#fe572e",
  blackish: "#261f22",
  whitish: "#f5f5f4",
  error: "#dc2626",
};

export const colorVariants = {
  primary75: "#fc3a79",
  primary50: "#fc3a79",
  primary25: "#fc3a79",
  primary10: "#fc3a79",
  secondary75: "#fe572e",
  secondary50: "#fe572e",
  secondary25: "#fe572e",
  secondary10: "#fe572e",
  blackish75: "#261f22",
  blackish50: "#261f22",
  blackish25: "#261f22",
  blackish10: "#261f22",
};

export const fonts = {
  base: "Montserrat",
  display: "Josefin Sans",
  special: "Montserrat",
  mono: "Space Mono",
};

export const text = {
  h1: {
    color: colors.primary,
    fontFamily: fonts.display,
    fontSize: "122px",
    fontWeight: "lighter",
    lineHeight: 1.4,
    letterSpacing: "-.9px",
  },
  h2: {
    color: colors.primary,
    fontFamily: fonts.display,
    fontSize: "122px",
    fontWeight: "lighter",
    lineHeight: 1.4,
    letterSpacing: "-.9px",
  },
  h3: {
    color: colors.primary,
    fontFamily: fonts.display,
    fontSize: "122px",
    fontWeight: "lighter",
    lineHeight: 1.4,
    letterSpacing: "-.9px",
  },
  h4: {
    color: colors.primary,
    fontFamily: fonts.display,
    fontSize: "122px",
    fontWeight: "lighter",
    lineHeight: 1.4,
    letterSpacing: "-.9px",
  },
  h5: {
    color: colors.primary,
    fontFamily: fonts.display,
    fontSize: "122px",
    fontWeight: "lighter",
    lineHeight: 1.4,
    letterSpacing: "-.9px",
  },
  h6: {
    color: colors.primary,
    fontFamily: fonts.display,
    fontSize: "122px",
    fontWeight: "lighter",
    lineHeight: 1.4,
    letterSpacing: "-.9px",
  },
  subtitle1: {
    color: colors.primary,
    fontFamily: fonts.display,
    fontSize: "122px",
    fontWeight: "lighter",
    lineHeight: 1.4,
    letterSpacing: "-.9px",
  },
  subtitle2: {
    color: colors.primary,
    fontFamily: fonts.display,
    fontSize: "122px",
    fontWeight: "lighter",
    lineHeight: 1.4,
    letterSpacing: "-.9px",
  },
};

let theme = { colors, colorVariants, fonts, text };
console.log("theme: ", theme);
export default theme;
