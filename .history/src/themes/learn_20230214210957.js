import { getFontVariable } from "@/utils/fonts";

export const colors = {
  primary: "#fc3a79",
  secondary: "#fe572e",
  blackish: "#261f22",
  whitish: "#f5f5f4",
  error: "#dc2626",
};

export const colorVariants = {};

export const fonts = {
  body: "var(--font-montserrat)",
  display: "var(--font-josefin-sans)",
  special: "var(--font-oleo-script)",
  mono: "var(--font-space-mono)",
};

export const text = {
  h1: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "6.063rem",
    fontWeight: "lighter",
    lineHeight: 1,
    letterSpacing: "-1.5px",
    wordSpacing: "-1.5px",
  },
  h2: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "3.813rem",
    fontWeight: "lighter",
    lineHeight: 1.1,
    letterSpacing: "-0.5px",
  },
  h3: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "3rem",
    fontWeight: "normal",
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  h4: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "34px",
    fontWeight: "normal",
    lineHeight: 1.4,
    letterSpacing: ".25px",
  },
  h5: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "1.5rem",
    fontWeight: "normal",
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  h6: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "1.25rem",
    fontWeight: "medium",
    lineHeight: 1.4,
    letterSpacing: ".15px",
  },
  subtitle1: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: 1.4,
    letterSpacing: ".15px",
  },
  subtitle2: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "14px",
    fontWeight: "medium",
    lineHeight: 1.4,
    letterSpacing: ".1px",
  },
};

export const layout = {
  page: {
    backgroundColor: colors.whitish,
  },
};

let theme = { colors, colorVariants, fonts, text, layout };

export default theme;
