import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { authSlice } from "./authSlice";
import { commentSlice } from "./commentSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [commentSlice.name]: commentSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
