import { useState, useEffect } from "react";
import { useViewport, useTheme } from "@/hooks";

const ScreenEmulator = (props) => {
  const [screen, setScreen] = useState(300);
  const { width } = useViewport();

  const styles = {
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "gray",
      justifyContent: "stretch",
    },
    item: {
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
      <div></div>
    </div>
  );
};

export default ScreenEmulator;
