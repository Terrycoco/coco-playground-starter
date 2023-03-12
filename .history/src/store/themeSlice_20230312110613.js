import { createSelector } from "@reduxjs/toolkit";
import { selectAllDeviceSizes } from "./fontSizesSlice";
import { selectFonts } from "./fontsSlice";

export const selectTheme = createSelector(
  selectFonts,
  selectAllDeviceSizes,
  (fonts, fontSizes) => {
    return { fonts: fonts, fontSizes: fontSizes };
  }
);
