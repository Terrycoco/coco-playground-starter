import { useState, useEffect } from "react";
import { useViewport, useTheme } from "@/hooks";

const screens = {
  //min widths
  mobile: "25em",
  lgMobile: "36em",
  tablet: "48em",
  laptop: "62em",
  desktop: "75em",
  tv: "87.5em",
};

const ScreenEmulator = (props) => {
  const [width, setWidth] = useState(300);
  const [baseFontSize, setBaseFontSize] = useState();
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

  useEffect(() => {
    if (props.device === "mobile") {
      setWidth("25em");
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
    };
  };

  return (
    <div>
      <div style={getStyles()}>{props.children}</div>
    </div>
  );
};

export default ScreenEmulator;
