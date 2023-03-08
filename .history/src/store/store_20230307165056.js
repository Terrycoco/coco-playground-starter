import { combineReducers, configureStore } from "@reduxjs/toolkit";

import users from "./usersSlice";
import counter from "./counterSlice";

const combinedReducer = combineReducers({
 
  counter,
  users
});


export const makeStore = () =>