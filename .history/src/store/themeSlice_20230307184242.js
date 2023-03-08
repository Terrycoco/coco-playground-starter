import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
//import { currentTheme } from "@/themes";

const initialState = {
  fonts: {
    body: "Gelasio",
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});
