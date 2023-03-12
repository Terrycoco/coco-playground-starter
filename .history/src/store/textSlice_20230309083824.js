import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = currentTheme.text;

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    update(state, action) {
      state[action.payload.element][action.payload.key] = action.payload.value;
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

export const { update } = textSlice.actions;
const selectTextByElement = createSelector(
  [
    // Usual first input - extract value from `state`
    (state) => state.text,
    // Take the second arg, `element`, and forward to the output selector
    (state, element) => element,
  ],
  // Output selector gets (`items, category)` as args
  (text, element) => text[element]
);
export const selectText = (state) => state.text;
export const selectElement = (state) => state.text[element];
export default textSlice.reducer;
