import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";

const initialState = currentTheme;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    update(state, action) {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const selectTheme = (state) => state;
export default themeSlice.reducer;
