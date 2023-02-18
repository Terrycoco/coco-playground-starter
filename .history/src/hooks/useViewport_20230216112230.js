import { useState, useEffect } from "react";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    //f to call
    const handleWindowResize = () => setWidth(window.innerWidth);

    //add listener that calls f
    window.addEventListener("resize", handleWindowResize);

    //return cleanup f
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  //return width so we can use in our components
  return { width };
};

export default useViewport;
