import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { authSlice } from "./authSlice";
import { fontsSlice } from "./fontsSlice";
import { fontSizesSlice } from "./fontSizesSlice";
import { textSlice } from "./textSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [fontsSlice.name]: fontsSlice.reducer,
      [fontSizesSlice.name]: fontSizesSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
