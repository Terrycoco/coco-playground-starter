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
      <div style={styles.tabContainer}>
        <button style={styles.tab}>XS</button>
        <button style={styles.tab}>Mobile-lg</button>
        <button style={styles.tab}>Tablet</button>
        <button style={styles.tab}>Laptop</button>
        <button style={styles.tab}>Desktop</button>
        <button style={styles.tab}>TV</button>
      </div>
      <div style={getStyles()}>{props.children}</div>
    </div>
  );
};

export default ScreenEmulator;
