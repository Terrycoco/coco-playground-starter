import { createSlice, createSelector } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = {
  all: currentTheme.fontSizes,
  currentDevice: "mobile",
};

export const fontSizesSlice = createSlice({
  name: "fontSizes",
  initialState,
  reducers: {
    update(state, action) {
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
      console.log("deleted! newstate: ", { ...state, all: newstate });
      return { ...state, all: newstate };
    },
    addLevel(state, action) {
      //"mutate" existing state no return value needed
      //use current ratio to build next level
      state.all[action.payload.device][action.payload.level] = {
        fontSize: action.payload.fontSize,
        lineHeight: action.payload.lineHeight,
      };
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
  fontSizesSlice.actions;
export const selectAllDevices = (state) => state.fontSizes.all;
export const selectCurrentDeviceSizes = (state) => {
  let cd = state.fontSizes.currentDevice;
  return state.fontSizes.all[cd];
};
export const selectCurrentDevice = (state) => state.fontSizes.currentDevice;
export default fontSizesSlice.reducer;
