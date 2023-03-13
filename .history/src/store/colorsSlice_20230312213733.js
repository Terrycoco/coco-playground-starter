import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = {
  themed: currentTheme.colors,
  variants: currentTheme.colorVariants,
};

export const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    updateColor(state, action) {
      state.themed[action.payload.key] = action.payload.hex; //hex code
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
