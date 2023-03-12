import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentDevice } from "@/store/fontSizesSlice";

const ScreenEmulator = ({ children, device, ...props }) => {
  const [width, setWidth] = useState("400px");
  const [baseFontSize, setBaseFontSize] = useState();
  const { theme } = useTheme();
  const screens = theme.screens;

  //get some valid heights

  useEffect(() => {
    setWidth(screens[device].min);
    setBaseFontSize(theme.fontSizes[device].fontSize);
  }, [device]);

  const scrStyles = {
    emulator: {
      border: "1px solid darkgray",
      width: `${width}`,
      fontSize: `${baseFontSize}`,
      paddingLeft: "1rem",
      paddingRight: "2rem",
      paddingTop: "2rem",
      height: "550px",
      overflow: "scroll",
      borderRadius: "10px",
      boxShadow: "rgba(213, 217, 217, 0.5) 0 2px 5px 0",
    },
  };

  return <div style={scrStyles.emulator}>{children}</div>;
};

export default ScreenEmulator;
