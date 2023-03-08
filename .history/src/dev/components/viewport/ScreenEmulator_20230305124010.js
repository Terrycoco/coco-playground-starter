import { useState, useEffect } from "react";
import { useViewport, useTheme } from "@/hooks";

const ScreenEmulator = ({ children, ...props }) => {
  const [width, setWidth] = useState("25em");
  const [baseFontSize, setBaseFontSize] = useState();
  const { theme } = useTheme();
  const screens = theme.screens;

  const styles = {
    tabContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "gray",
      justifyContent: "stretch",
    },
    tab: {
      flex: 1,
    },
  };

  useEffect(() => {
    console.log("device: ", props.device, "screensets:", screens[props.device]);
    setWidth(screens[props.device].min);
    setBaseFontSize(theme.fontSizes[device].fontSize);
  }, [props.device]);

  const scrStyles = {
    emulator: {
      border: "1px solid black",
      width: `${width}`,
      fontSize: `${baseFontSize}`,
      paddingLeft: "2rem",
      paddingRight: "3rem",
      marginTop: "4rem",
    },
  };

  return <div style={scrStyles.emulator}>{children}</div>;
};

export default ScreenEmulator;
