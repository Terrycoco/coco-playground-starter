import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentDevice,
  selectAllDeviceSizes,
} from "@/store/fontSizesSlice";
import { useTheme } from "@/hooks";

const ScreenEmulator = ({ children, ...props }) => {
  const { theme } = useTheme();
  const [width, setWidth] = useState("400px");
  const device = useSelector(selectCurrentDevice);
  const [baseFontSize, setBaseFontSize] = useState();
  const fontSizes = useSelector(selectAllDeviceSizes);

  //get some valid heights

  useEffect(() => {
    if (device !== undefined) {
      setWidth(theme.screens[device].min + 100 + "px");
      setBaseFontSize(fontSizes[device].body.fontSize + "px");
    }
  }, [device]);

  const getScreenStyles = () => {
    return {
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
    };
  };

  return <div style={getScreenStyles()}>{children}</div>;
};

export default ScreenEmulator;
