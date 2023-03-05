import { useState, useEffect } from "react";
import { useViewport, useTheme } from "@/hooks";

const ScreenEmulator = (props) => {
  const [screen, setScreen] = useState(300);
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
    console.log("scr:", scr);
    console.log("wd:", theme.screens[scr]);
    setScreen(theme.screens[scr]);
  };

  const getStyles = () => {
    return {
      border: "2px solid black",
      width: `${screen}`,
    };
  };

  return (
    <div>
      <div style={styles.tabContainer}>
        <button id="mobile" style={styles.tab} onClick={setWidth}>
          mobile
        </button>
        <button id="lgMobile" style={styles.tab} onClick={setWidth}>
          Mobile-lg
        </button>
        <button id="tablet" style={styles.tab} onClick={setWidth}>
          Tablet
        </button>
        <button id="laptop" style={styles.tab} onClick={setWidth}>
          Laptop
        </button>
        <button id="desktop" style={styles.tab} onClick={setWidth}>
          Desktop
        </button>
        <button id="tv" style={styles.tab} onClick={setWidth}>
          TV
        </button>
      </div>
      <div style={getStyles()}>{props.children}</div>
    </div>
  );
};

export default ScreenEmulator;
