import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";

const ScreenEmulator = ({ children, device, ...props }) => {
  const [width, setWidth] = useState("25em");
  const [baseFontSize, setBaseFontSize] = useState();
  const { theme } = useTheme();
  const screens = theme.screens;

  //get some valid heights

  useEffect(() => {
    console.log("device: ", props.device, "screensets:", screens[device]);
    setWidth(screens[device].min);
    setBaseFontSize(theme.fontSizes[device].fontSize);
  }, [props.device]);

  const scrStyles = {
    emulator: {
      border: "1px solid black",
      width: `${width}`,
      fontSize: `${baseFontSize}`,
      paddingLeft: "1rem",
      paddingRight: "2rem",
      paddingTop: "2rem",
      height: "550px",
      overflowY: "scroll",
      borderRadius: "10px",
    },
  };

  return <div style={scrStyles.emulator}>{children}</div>;
};

export default ScreenEmulator;
