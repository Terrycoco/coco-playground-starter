import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = {
  all: currentTheme.fontSizes,
  currentDevice: "mobile",
  ratio: 2,
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
    updateRatio(state, action) {
      state.ratio = action.payload;
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
      console.log("deleted! newstate: ", { ...state, all: newstate });
      return { ...state, all: newstate };
    },
    addLevel(state, action) {
      //use current ratio to build next level
      let keys = Object.keys(state.all.mobile);
      let keyCount = keys.length;
      let lastKey = keyCount === 1 ? "body" : "fs" + (keyCount - 1);
      let newKey = "fs" + keyCount;
      let newstate = {};

      for (const device in state.all) {
        let lastKey = keys[keys.length - 1];
        let lastLevel = state.all[device][lastKey];
        console.log("lastSize:", lastLevel);
        newstate[device] = { ...state[device] };
        newstate[device][action.payload.level] = {
          fontSize: parseInt(lastSize * state.ratio),
          lineHeight: action.payload.lineHeight,
        };
      }
      return { ...state, all: newstate };
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

export const { update, updateDevice, updateRatio, addLevel, deleteLevel } =
  scaleSlice.actions;
export const selectAllDevices = (state) => state.fontSizes.all;
export const selectCurrentDeviceSizes = (state) => {
  let cd = state.fontSizes.currentDevice;
  return state.fontSizes.all[cd];
};
export default scaleSlice.reducer;
