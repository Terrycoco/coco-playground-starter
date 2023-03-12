import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = {
  themed: currentTheme.fonts,
  vars: {
    ["var(--font-body)"]: currentTheme.fonts.body,
    ["var(--font-display)"]: currentTheme.fonts.display,
    ["var(--font-special)"]: currentTheme.fonts.special,
    ["var(--font-mono)"]: currentTheme.fonts.mono,
    ["var(--font-forms)"]: currentTheme.fonts.forms,
  },
};

export const fontsSlice = createSlice({
  name: "fonts",
  initialState,
  reducers: {
    updateFont(state, action) {
      state[action.payload.key] = action.payload.value;
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
export const selectFonts = (state) => state.fonts;
export default fontsSlice.reducer;
