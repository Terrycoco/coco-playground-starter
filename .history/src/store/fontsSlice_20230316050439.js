import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";
import { getFontVariable } from "@/utils/fonts";
import { updateFont } from "@/store/sharedActions";

const initialState = {
  themed: currentTheme.fonts,
  objs: [
    {
      propName: "body",
      themeVar: "var(--font-body)",
      fontVar: getFontVariable(currentTheme.fonts.body),
      name: currentTheme.fonts.body,
    },
    {
      propName: "display",
      themeVar: "var(--font-display)",
      fontVar: getFontVariable(currentTheme.fonts.display),
      name: currentTheme.fonts.display,
    },
    {
      propName: "forms",
      themeVar: "var(--font-forms)",
      fontVar: getFontVariable(currentTheme.fonts.forms),
      name: currentTheme.fonts.forms,
    },
    {
      propName: "special",
      themeVar: "var(--font-special)",
      fontVar: getFontVariable(currentTheme.fonts.special),
      name: currentTheme.fonts.special,
    },
    {
      propName: "mono",
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
      //console.log("got here: payload:", action.payload);
      state.themed[action.payload.propName] = action.payload.name;
      //get OTHER objects from the array
      const rest = state.objs.filter(
        (obj) => obj.propName !== action.payload.propName
      );
      //add add the new one
      rest.push(action.payload);
      //mutate
      state.objs = rest;
    });
  },
});

export const {} = fontsSlice.actions;
export const selectFonts = (state) => state.fonts.themed;
export const selectFontObjs = (state) => state.fonts.objs;
export default fontsSlice.reducer;
