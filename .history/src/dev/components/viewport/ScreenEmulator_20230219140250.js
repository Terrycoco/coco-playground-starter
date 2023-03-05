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

  const setWidth = (e) => {
    let scr = e.target.id;
    console.log("scr:", scr);
  };

  const getStyles = () => {
    return {
      border: "2px solid black",
      width: `${screen}px`,
    };
  };

  return (
    <div>
      <div style={styles.tabContainer}>
        <button id="mobile" style={styles.tab} onClick={setWidth}>
          mobile
        </button>
        <button id="lbMobile" style={styles.tab}>
          Mobile-lg
        </button>
        <button id="tablet" style={styles.tab}>
          Tablet
        </button>
        <button id="laptop" style={styles.tab}>
          Laptop
        </button>
        <button id="desktop" style={styles.tab}>
          Desktop
        </button>
        <button id="tv" style={styles.tab}>
          TV
        </button>
      </div>
      <div style={getStyles()}>{props.children}</div>
    </div>
  );
};

export default ScreenEmulator;
