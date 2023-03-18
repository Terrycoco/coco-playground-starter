import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = currentTheme.text;

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    updateText(state, action) {
      state[action.payload.element][action.payload.propName] =
        action.payload.value;
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.text,
        };
      },
    },
  },
});

export const { updateText } = textSlice.actions;
export const selectText = (state) => state.text;
export const selectElement = (state) => state.text[element];
export default textSlice.reducer;
