import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";
import { getFontVariable } from "@/utils/fonts";

const initialState = {
  themed: currentTheme.fonts,
  objs: {
    body: {
      fontVar: getFontVariable(currentTheme.fonts.body), //fontVar
      name: currentTheme.fonts.body, //name
    },
    display: {
      fontVar: getFontVariable(currentTheme.fonts.display),
      name: currentTheme.fonts.display,
    },
    forms: {
      fontVar: getFontVariable(currentTheme.fonts.forms),
      name: currentTheme.fonts.forms,
    },
    special: {
      fontVar: getFontVariable(currentTheme.fonts.special),
      name: currentTheme.fonts.special,
    },
    mono: {
      fontVar: getFontVariable(currentTheme.fonts.mono),
      name: currentTheme.fonts.mono,
    },
  },
};

export const fontsSlice = createSlice({
  name: "fonts",
  initialState,
  reducers: {
    // updateFont(state, action) {
    //   console.log("slice recd:", action);
    //   state.themed[action.payload.key] = action.payload.label; //full name
    //   state.objs[action.payload.key] = {
    //     value: action.payload.value,
    //     label: action.payload.label,
    //   };
    // },

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

export const {} = fontsSlice.actions;
export const selectFonts = (state) => state.fonts.themed;
export const selectFontObjs = (state) => state.fonts.objs;
export default fontsSlice.reducer;
