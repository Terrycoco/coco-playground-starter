import { useState, useEffect } from "react";
import { useViewport, useTheme } from "@/hooks";

const ScreenEmulator = (props) => {
  const [width, setWidth] = useState(300);
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
    if (props.device === "mobile") {
      setWidth("45em"); //375px
    } else if (props.device === "full") {
      setWidth(window.innerWidth);
      console.log("innerwidth:", window.innerWidth);
    } else {
      setWidth(screens[props.device]);
    }
    setBaseFontSize(theme.baseFontSizes[props.device]);
  }, [props.device]);

  const getStyles = () => {
    return {
      border: "1px solid black",
      width: `${width}`,
      fontSize: `${baseFontSize}`,
      padding: "2em",
    };
  };

  return <div style={getStyles()}>{props.children}</div>;
};

export default ScreenEmulator;
