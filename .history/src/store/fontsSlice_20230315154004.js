import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";
import { getFontVariable } from "@/utils/fonts";
import { updateFont } from "@/store/sharedActions";

const initialState = {
  themed: currentTheme.fonts,
  objs: [
    {
      category: "body",
      themeVar: "var(--font-body)",
      fontVar: getFontVariable(currentTheme.fonts.body),
      name: currentTheme.fonts.body,
    },
    {
      category: "display",
      themeVar: "var(--font-display)",
      fontVar: getFontVariable(currentTheme.fonts.display),
      name: currentTheme.fonts.display,
    },
    {
      category: "forms",
      themVar: "var(--font-forms)",
      fontVar: getFontVariable(currentTheme.fonts.forms),
      name: currentTheme.fonts.forms,
    },
    {
      category: "special",
      themeVar: "var(--font-special)",
      fontVar: getFontVariable(currentTheme.fonts.special),
      name: currentTheme.fonts.special,
    },
    {
      category: "mono",
      themeVar: "var(--font-mono)",
      fontVar: getFontVariable(currentTheme.fonts.mono),
      name: currentTheme.fonts.mono,
    },
  ],
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
  },
  extraReducers: (builder) => {
    builder.addCase(updateFont, (state, action) => {
      console.log("got here: payload:", action.payload);
      state.themed[action.payload.category] = action.payload.name;
      const rest = state.objs.filter(
        (obj) => obj.category !== action.payload.category
      );
      rest.push(action.payload);
      state.objs = rest;
    });
  },
});

export const {} = fontsSlice.actions;
export const selectFonts = (state) => state.fonts.themed;
export const selectFontObjs = (state) => state.fonts.objs;
export default fontsSlice.reducer;
