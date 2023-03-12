import { createSelector } from "@reduxjs/toolkit";
import { selectAllDevices } from "./fontSizesSlice";
import { selectFonts } from "./fontsSlice";

const theme = createSelector(selectAllDevices, selectFonts);

export default theme;
