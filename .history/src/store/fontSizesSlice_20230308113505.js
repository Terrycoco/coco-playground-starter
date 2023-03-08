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
      // console.log("action.payload:", action.payload);
      state.all[state.currentDevice][action.payload.level][action.payload.key] =
        action.payload.value;
    },
    updateDevice(state, action) {
      state.currentDevice = action.payload;
    },
    deleteLevel(state, action) {
      //delete on all levels if there
      let newstate = {};
      for (const device in state.all) {
        newstate[device] = Object.fromEntries(
          Object.entries(state.all[device]).filter(
            ([key]) => key !== action.payload
          )
        );
      }
      return { ...state, ...newstate };
    },
    addLevel(state, action) {
      //add on all levels if not there
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

export const { update, updateDevice, addLevel, deleteLevel } =
  scaleSlice.actions;
export const selectAllDevices = (state) => state.fontSizes.all;
export const selectCurrentDeviceSizes = (state) => {
  let cd = state.fontSizes.currentDevice;
  return state.fontSizes.all[cd];
};
export default scaleSlice.reducer;
