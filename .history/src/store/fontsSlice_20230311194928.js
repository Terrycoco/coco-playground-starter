import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = {
  themed: currentTheme.fonts,
  objs: [
    { value: "var(--font-body)", label: currentTheme.fonts.body },
    { value: "var(--font-display)", label: currentTheme.fonts.display },
    { value: "var(--font-forms)", label: currentTheme.fonts.forms },
    { value: "var(--font-special)", label: currentTheme.fonts.special },
    { value: "var(--font-mono)", label: currentTheme.fonts.mono },
  ],
};

export const fontsSlice = createSlice({
  name: "fonts",
  initialState,
  reducers: {
    updateFont(state, action) {
      console.log("slice recd:", action);
      state.themed[action.payload.key] = action.payload.label; //full name
      state.objs[`var(--font-${action.payload.key})`] = action.payload.value; //variable
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
