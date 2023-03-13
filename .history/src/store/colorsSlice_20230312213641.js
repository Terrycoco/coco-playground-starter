import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = {
  themed: currentTheme.colors,
  variants: currentTheme.colorVariants,
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
      };
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
export const selectFontObjs = (state) => state.fonts.objs;
export default fontsSlice.reducer;
