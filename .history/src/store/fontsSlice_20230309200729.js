import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";
import { allFontsByVariable } from "@/utils/fonts";

function getFontVariable(name) {
  if (!name) return;
  let str = name.replaceAll(" ", "-").toLowerCase();
  return `var(--font-${str})`;
}

const initialState = {
  themeFonts: currentTheme.fonts,
  all: allFontsByVariable,
};

export const fontsSlice = createSlice({
  name: "fonts",
  initialState,
  reducers: {
    updateFont(state, action) {
      state.themeFonts[action.payload.key] = action.payload.value;
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
  },
});

export const { updateFont } = fontsSlice.actions;
export const selectFonts = (state) => state.themeFonts;
export const selectAllFonts = (state) => state.all;
export default fontsSlice.reducer;
