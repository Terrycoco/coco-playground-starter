import { useContext, createContext, useState, useEffect } from "react";
import { currentTheme } from '@/themes'



export const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(0); //avoid window not defined error
  const [screen, setScreen] = useState();

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    for (const screen in currentTheme.screens) {
      if (window.innerWidth)
    }
  };

  useEffect(() => {
    //lets set initial size here
    setWidth(window.innerWidth);
    //and listen for changes
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const { width } = useContext(viewportContext);
  return { width };
};
