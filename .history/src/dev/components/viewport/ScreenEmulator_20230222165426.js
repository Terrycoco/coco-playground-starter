import { useState, useEffect } from "react";
import { useViewport, useTheme } from "@/hooks";

const ScreenEmulator = (props) => {
  const [screen, setScreen] = useState(300);
  const [baseFontSize, setBaseFontSize] = useState();
  const { width } = useViewport();
  const { theme } = useTheme();

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

  //default width is current width
  useEffect(() => {
    setScreen(window.innerWidth);
  }, []);

  const setWidth = (e) => {
    let scr = e.target.id;
    if (scr === "mobile") {
      //put average screen for mobile
      setScreen("25em");
    } else {
      setScreen(theme.screens[scr]);
    }
    setBaseFontSize(theme.baseFontSizes[scr]);
  };

  const getStyles = () => {
    return {
      border: "2px solid black",
      width: `${screen}`,
      fontSize: `${baseFontSize}`,
    };
  };

  return (
    <div>
      <div style={getStyles()}>{props.children}</div>
    </div>
  );
};

export default ScreenEmulator;
