import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  currentPage: "/playground",
  drawerIsOpen: false,
  currentForm: "fonts",
};

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setDrawerIsOpen(state, action) {
      state.drawerIsOpen = action.payload;
    },
    setCurrentForm(state, action) {
      state.currentForm = action.payload;
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

export const { setCurrentPage, setDrawerIsOpen, setCurrentForm } =
  playgroundSlice.actions;
export const selectCurrentPage = (state) => state.playground.currentPage;
export const selectDrawerIsOpen = (state) => state.playground.drawerIsOpen;
export const selectCurrentForm = (state) => state.playground.currentForm;
export default playgroundSlice.reducer;
