import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  body: "Gelasio",
  display: "Josefin Sans",
};

export const fontsSlice = createSlice({
  name: "fonts",
  initialState,
  reducers: {
    update(state, action) {
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

export const selectFontByKey = createSelector(
  [
    // Usual first input - extract value from `state`
    (state) => state.fonts,
    // Take the second arg, `key`, and forward to the output selector
    (state, key) => key,
  ],
  // Output selector gets (`fonts, key)` as args
  (fonts, key) => fonts.filter((key) => fonts.hasOwnProperty(key))
);

export default fontsSlice.reducer;
