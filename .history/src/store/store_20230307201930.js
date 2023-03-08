import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { authSlice } from "./authSlice";
import { fontsSlice } from "./fontsSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [fontsSlice.name]: fontsSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
