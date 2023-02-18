import { useContext, createContext, useState, useEffect } from "react";

export const screenContext = createContext({});

export const ScreenProvider = ({ children }) => {
  const [screen, setScreen] = useState(); //avoid window not defined error

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
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
