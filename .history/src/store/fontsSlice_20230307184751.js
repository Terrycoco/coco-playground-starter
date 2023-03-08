import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  body: "Gelasio",
  display: "Josefin Sans",
};

export const fontsSlice = createSlice({
  name: "fonts",
  initialState,
  reducers: {
    update(state, action) {
      state[action.payload.key] = action.payload.value;
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

export const { setAuthState, setAuthUser } = authSlice.actions;
export const selectAuthState = (state) => state.auth.authState;
export const selectAuthUser = (state) => state.auth.authUser;
export default authSlice.reducer;
