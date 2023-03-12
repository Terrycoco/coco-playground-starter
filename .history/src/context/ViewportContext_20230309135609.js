import { useContext, createContext, useState, useEffect } from "react";
import { currentTheme } from "@/themes";

export const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(0); //avoid window not defined error
  const [screen, setScreen] = useState();
  const [screens, setScreens] = useState(currentTheme.screens);

  const handleWindowResize = () => {
    let w = window.innerWidth;
    setWidth(w);
    for (const s in currentTheme.screens) {
      if (s.min <= w && w <= s.max) {
        setScreen(s);
      }
    }
  };

  useEffect(() => {
    let w = window.innerWidth;
    setWidth(w);
    for (const s in currentTheme.screens) {
      console.log("testing ", s);
      if (s.min <= w && w <= s.max) {
        setScreen(s);
      }
    }
    //and listen for changes
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ screen }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const { screen } = useContext(viewportContext);
  return { screen };
};