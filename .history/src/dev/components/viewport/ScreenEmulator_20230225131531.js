import { useState, useEffect } from "react";
import { useViewport, useTheme } from "@/hooks";

const ScreenEmulator = ({ children, ...props }) => {
  const [width, setWidth] = useState("45em");
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
    switch (props.device) {
      case "mobile":
        setWidth("45em");
        setBaseFontSize(theme.screenSettings.mobile.baseFontSize); //use px
        break;
      case "full":
        setWidth(window.innerWidth);
        setBaseFontSize(theme.baseFontSizes.laptop); //use rem
        break;
      default:
        setWidth(screens[props.device]);
        let em = theme.baseFontSizes.mobile.replace("rem", "em");
        setBaseFontSize(theme.baseFontSizes.mobile); //use px
    }
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
    full: {
      width: `${width}`,
      fontSize: `2rem`,
      padding: "3rem 2rem",
    },
  };

  return props.device === "full" ? (
    <div style={scrStyles.full}>{children}</div>
  ) : (
    <div style={scrStyles.emulator}>{children}</div>
  );
};

export default ScreenEmulator;
