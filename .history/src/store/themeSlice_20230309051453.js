import { createSelector } from "@reduxjs/toolkit";
import { selectAllDevices } from "./fontSizesSlice";
import { selectFonts } from "./fontsSlice";

export const theme = createSelector(selectAllDevices, selectFonts);
