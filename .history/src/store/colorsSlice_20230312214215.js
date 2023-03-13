import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = {
  themed: currentTheme.colors,
  variants: currentTheme.variants,
};

export const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    updateColor(state, action) {
      state[action.payload.key] = action.payload.value; //hex code
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.colors,
        };
      },
    },
  },
});

export const { updateColor } = colorsSlice.actions;
export const selectColors = (state) => state.colors;
export const selectFontObjs = (state) => state.fonts.objs;
export default fontsSlice.reducer;
