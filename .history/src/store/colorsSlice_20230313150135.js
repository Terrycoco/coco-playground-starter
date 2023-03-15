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
      state.themed[action.payload.key] = action.payload.value; //hex code
    },
    updateVariant(state, action) {
      state.variants[action.payload.key] = action.payload.value; //hex code
    },
    bulkLoadVariants(state, action) {
      state.variants = action.payload.variants;
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

export const { updateColor, bulkLoadVariants } = colorsSlice.actions;
export const selectColors = (state) => state.colors.themed;
export const selectVariants = (state) => state.colors.variants;
export default colorsSlice.reducer;
