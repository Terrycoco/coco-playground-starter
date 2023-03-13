import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  currentPage: "/playground",
  drawerIsOpen: false,
  formShowing: "fonts",
};

export const authSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setDrawerIsOpen(state, action) {
      state.drawerIsOpen = action.payload;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.playground,
        };
      },
    },
  },
});

export const { setCurrentPage, setDrawerIsOpen } = playgroundSlice.actions;
export const selectCurrentPage = (state) => state.playground.currentPage;
export const selectDrawerIsOpen = (state) => state.playground.drawerIsOpen;
export default playgroundSlice.reducer;
