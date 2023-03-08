import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = {
  all: currentTheme.fontSizes,
  currentDevice: "mobile",
};

export const scaleSlice = createSlice({
  name: "fontSizes",
  initialState,
  reducers: {
    update(state, action) {
      state.all[state.currentDevice][action.payload.key] = action.payload.value;
    },
    updateDevice(state, action) {
      console.log("action:", action);
      state.currentDevice = action.payload;
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

export const { update, updateDevice } = scaleSlice.actions;
export const selectAllDevices = (state) => state.fontSizes.all;

export default scaleSlice.reducer;
