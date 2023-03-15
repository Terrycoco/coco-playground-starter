import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = currentTheme.containers;

export const containersSlice = createSlice({
  name: "containers",
  initialState,
  reducers: {
    updateContainer(state, action) {
      state[action.payload.element][action.payload.key] = action.payload.value; //hex code
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.containers,
        };
      },
    },
  },
});

export const { updateContainers } = colorsSlice.actions;
export const selectContainers = (state) => state.containers;
export default containersSlice.reducer;
