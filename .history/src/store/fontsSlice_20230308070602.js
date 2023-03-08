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
export default fontsSlice.reducer;
