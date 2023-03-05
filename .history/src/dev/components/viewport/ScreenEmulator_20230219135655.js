import { useState, useEffect } from "react";
import { useViewport, useTheme } from "@/hooks";

const ScreenEmulator = (props) => {
  const [screen, setScreen] = useState(300);
  const { width } = useViewport();

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
    console.log("init vp:", window.innerWidth);
  }, []);

  const getStyles = () => {
    return {
      border: "2px solid black",
      width: `${screen}px`,
    };
  };

  return (
    <div>
      <div style={styles.tabs}></div>
    </div>
  );
};

export default ScreenEmulator;
