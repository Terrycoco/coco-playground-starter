import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import authSlice from "./authSlice";
import commentSlice from "./commentSlice";

const combinedReducer = combineReducers({
  counter,
  users,
});

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
