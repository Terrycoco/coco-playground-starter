import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = currentTheme.fontSizes;

export const scaleSlice = createSlice({
  name: "scale",
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

export const { update } = scaleSlice.actions;
export const selectAllScale = (state) => state.scale;
export default scaleSlice.reducer;
