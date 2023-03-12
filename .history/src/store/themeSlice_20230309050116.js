import { createSelector } from "@reduxjs/toolkit";
import { selectAllDevices } from "./fontSizesSlice";
import { selectFonts } from "./fontsSlice";

export default theme = createSelector(selectAllDevices, selectFonts);
