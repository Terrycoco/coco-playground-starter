import { useContext, createContext, useState, useEffect } from "react";

export const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(0); //avoid window not defined error

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
  console.log("width:", width);
  return { width };
};
