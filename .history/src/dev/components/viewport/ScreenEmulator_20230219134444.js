import { useState, useEffect } from "react";
import { useViewport } from "@/hooks";

const ScreenEmulator = (props) => {
  const [screen, setScreen] = useState();
  const { viewport } = useViewport();

  //default width is current width
  useEffect(() => {
    setScreen(viewport);
  }, []);

  const getStyles = () => {
    border: "2px solid black",
    width: `${screen}px`,
  };

  return <div style={getStyles()}>{props.children}</div>;
};

export default ScreenEmulator;
