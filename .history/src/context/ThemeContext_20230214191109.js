import { createContext, useState, useContext } from "react";
import { initVariants } from "@/dev/utils/colorUtils";
import { currentTheme as mytheme } from "@/themes";

//create context object with defaults
export const ThemeContext = createContext({
  theme: {},
  setTheme: () => {},
  timestamp: 0,
});

//export Provider
export function ThemeProvider(props) {
  const setTheme = (theme) => {
    theme.timestamp = Date.now();
    setState({ ...state, theme: theme });
  };
  const initState = {
    theme: initVariants(mytheme),
    setTheme: setTheme,
  };

  const [state, setState] = useState(initState);
  console.log("initialTheme: , ", state);
  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  );
}

//export useContext hook
export function useTheme() {
  return useContext(ThemeContext);
}
