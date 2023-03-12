import { createSelector } from "@reduxjs/toolkit";
import { selectAllDevices } from "./fontSizesSlice";

export const theme = createSelector(selectAllDevices);
