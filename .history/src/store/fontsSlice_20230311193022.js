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
      console.log("slice recd:", action);
      state.themed[action.payload.key] = action.payload.value;
      state.vars[`${action.payload.key}`] = action.payload.value;
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
export const selectFonts = (state) => state.fonts.themed;
export const selectVars = (state) => state.fonts.vars;
export default fontsSlice.reducer;
