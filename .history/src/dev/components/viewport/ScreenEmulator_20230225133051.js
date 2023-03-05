import { useState, useEffect } from "react";
import { useViewport, useTheme } from "@/hooks";

const ScreenEmulator = ({ children, ...props }) => {
  const [width, setWidth] = useState("45em");
  const [baseFontSize, setBaseFontSize] = useState();
  const { theme } = useTheme();
  const screens = theme.screenSettings;

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
    setWidth(screens[props.device].max);
    let em = screens[props.device].bodyFontSize.replace("rem", "em");
    setBaseFontSize(em);
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
