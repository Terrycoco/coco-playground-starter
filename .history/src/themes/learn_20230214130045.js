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
    color: colors.primary,
    fontFamily: "var(--font-display)",
    fontSize: "122px",
    fontWeight: "normal",
    lineHeight: 1.1,
    letterSpacing: "-.9px",
  },
  h2: {
    color: colors.primary,
    fontFamily: "var(--font-display)",
    fontSize: "96px",
    fontWeight: "lighter",
    lineHeight: 1.2,
    letterSpacing: "-.9px",
  },
  h3: {
    color: colors.primary,
    fontFamily: "var(--font-display)",
    fontWeight: "normal",
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

export const layout = {
  page: {
    backgroundColor: "green",
  },
};

let theme = { colors, colorVariants, fonts, text, layout };

export default theme;
