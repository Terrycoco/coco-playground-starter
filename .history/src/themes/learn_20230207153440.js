export const colors = {
  primary: "#fc3a79",
  secondary: "#fe572e",
  blackish: "#261f22",
  whitish: "#f5f5f4",
  error: "#dc2626",
};

export const fonts = {
  base: "Montserrat",
  display: "Josefin Sans",
  special: "Montserrat",
  mono: "Space Mono",
};

export const fontSizes = {
  122: "122px",
  12: "12px",
};

const theme = {
  h1: {
    color: colors.primary,
    fontFamily: fonts.display,
    fontSize: fontSizes[122],
    fontWeight: "lighter",
    lineHeight: 1.4,
  },
};

export default theme;
