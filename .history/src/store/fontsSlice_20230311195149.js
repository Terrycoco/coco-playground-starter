import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = {
  themed: currentTheme.fonts,
  objs: {
    body: { value: "var(--font-body)", label: currentTheme.fonts.body },
    display: {
      value: "var(--font-display)",
      label: currentTheme.fonts.display,
    },
    forms: { value: "var(--font-forms)", label: currentTheme.fonts.forms },
    special: {
      value: "var(--font-special)",
      label: currentTheme.fonts.special,
    },
    mono: { value: "var(--font-mono)", label: currentTheme.fonts.mono },
  },
};

export const fontsSlice = createSlice({
  name: "fonts",
  initialState,
  reducers: {
    updateFont(state, action) {
      console.log("slice recd:", action);
      state.themed[action.payload.key] = action.payload.label; //full name
      state.objs[action.payload.key] = {
        value: action.payload.value,
        label: action.payload.label,
      }; //
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
export const selectObjs = (state) => state.fonts.objs;
export default fontsSlice.reducer;
