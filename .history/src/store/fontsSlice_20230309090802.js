import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = currentTheme.fonts;

export const fontsSlice = createSlice({
  name: "fonts",
  initialState,
  reducers: {
    updateFont(state, action) {
      state[action.payload.key] = action.payload.value;
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

export const { update } = fontsSlice.actions;
export const selectFonts = (state) => state.fonts;
export default fontsSlice.reducer;
