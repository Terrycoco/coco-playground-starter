import { useState, useEffect } from "react";
import { useViewport } from "@/hooks";

const ScreenEmulator = (props) => {
  const [screen, setScreen] = useState();
  const { viewport } = useViewport();

  //default width is current width
  useEffect(() => {
    setScreen(viewport);
  }, []);

  const getStyle = () => {
    border: "2px solid black";
    width: "200px";
  };

  return <div style={getStyle()}>{props.children}</div>;
};

export default ScreenEmulator;
