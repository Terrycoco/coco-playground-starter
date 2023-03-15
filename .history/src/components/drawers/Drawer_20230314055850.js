import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";

//may want to pass in width val

const Drawer = (props) => {
  const [width, setWidth] = useState("0px");
  const { theme } = useTheme();

  useEffect(() => {
    if (props.show) {
      setWidth(props.openWidth);
    } else {
      setWidth("0px");
    }
  }, [props.show, props.openWidth]);

  let styles = {
    drawer: {
      height: "100vh",
      width: width,
      position: "fixed",
      zIndex: "99999",
      top: theme.containers.header.height + "rem",
      right: "0",
      backgroundColor: "var(--clr-whitish)",
      overflowX: "hidden",
      transition: " 0.5s",
      WebkitBoxShadow: "-3px 0px 3px -3px gray",
      boxShadow: "-3px 0px 3px -3px gray",
    },
  };

  return (
    <div id="drawer" style={styles.drawer}>
      {props.children}
    </div>
  );
};

export default Drawer;
