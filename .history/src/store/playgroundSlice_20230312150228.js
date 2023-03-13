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
    setDrawer(state, action) {
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

export const { setAuthState, setAuthUser } = authSlice.actions;
export const selectAuthState = (state) => state.auth.authState;
export const selectAuthUser = (state) => state.auth.authUser;
export default authSlice.reducer;
