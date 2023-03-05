import { useState, useEffect } from "react";
import { useViewport } from "@/hooks";

const ScreenEmulator = (props) => {
  const [screen, setScreen] = useState();
  const { width } = useViewport(300);

  //default width is current width
  useEffect(() => {
    setScreen(width);
    console.log("init vp:", width);
  }, []);

  const getStyles = () => {
    return {
      border: "2px solid black",
      width: `${screen}px`,
    };
  };

  return <div style={getStyles()}>{props.children}</div>;
};

export default ScreenEmulator;
