import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";
import { updateFont } from "@/store/fontsSlice";

function toCSS(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("-").toLowerCase();
}

const getFontVariable = (fontName) => {
  let str = fontName.replaceAll(" ", "-").toLowerCase();
  return `var(--font-${str})`;
};

const loadInitVariables = () => {
  let variables = {};
  let section, prefix;

  //fonts
  section = "fonts";
  prefix = "var(--font-";
  for (const key in section) {
    variables[`${prefix}${key})`] = getFontVariable(section[key]);
  }
  return variables();
};

const initialState = loadInitVariables();

export const variablesSlice = createSlice({
  name: "variables",
  initialState,
  reducers: {
    updateVariable(state, action) {
      state.variableState[action.payload.key] = action.payload.value;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.variables,
        };
      },
    },
  },
});

export const { updateVariable } = variablesSlice.actions;
export const selectVariables = (state) => state.variables;
export const selectAuthUser = (state) => state.auth.authUser;
export default authSlice.reducer;
