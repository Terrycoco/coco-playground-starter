import { createSelector } from "@reduxjs/toolkit";
import { selectAllDevices } from "./fontSizesSlice";
import { selectFonts } from "./fontsSlice";

export const selectTheme = createSelector(
  selectFonts,
  selectAllDevices,
  (fonts, fontSizes) => {
    return { fonts: fonts, fontSizes: fontSizes };
  }
);
