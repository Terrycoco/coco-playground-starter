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
    for (const s in screens) {
      if (s.min <= w && w <= s.max) {
        setScreen(s);
      }
    }
  };

  useEffect(() => {
    setScreens(currentTheme.screens);
    let w = window.innerWidth;
    setWidth(w);
    for (const s in screens) {
      console.log("testing ", screens[s]);
      if (screens[s].min <= w && w <= screens[s].max) {
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
