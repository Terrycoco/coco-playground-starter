import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { currentTheme } from "@/themes";
import { updateColor } from "@/store/colorsSlice";

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
  for (const key in currentTheme[section]) {
    variables[`${prefix}${key})`] = getFontVariable(currentTheme[section][key]);
  }

  //colors
  section = "colors";
  prefix = "var(--clr-";
  for (const key in currentTheme[section]) {
    variables[`${prefix}${key})`] = toCSS(currentTheme[section][key]);
  }

  //color variants
  section = "colorVariants";
  prefix = "var(--clr-";
  for (const key in currentTheme[section]) {
    variables[`${prefix}${key})`] = toCSS(currentTheme[section][key]);
  }

  return variables;
};

const initialState = loadInitVariables();

export const variablesSlice = createSlice({
  name: "variables",
  initialState,
  reducers: {
    updateVariable(state, action) {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateColor, (state, action) => {
      let varkey = `var(--clr-${action.payload.key})`;
      console.log("varkey:", varkey, state);
      if (state.hasOwnProperty(varkey)) {
        state[varkey] = action.payload.value;
      } else {
        console.log("adding new key");
        state[varkey] = action.payload.value;
      }
    });
  },
});

export const { updateVariable } = variablesSlice.actions;
export const selectVariables = (state) => state.variables;
export default variablesSlice.reducer;
