import { useState, useEffect } from "react";

//may want to pass in width val

const Drawer = (props) => {
  const [width, setWidth] = useState("0px");

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
      top: "var(--sp-header-height)",
      right: "0",
      backgroundColor: "var(--clr-whitish)",
      overflowX: "hidden",
      paddingTop: "60px",
      transition: " 0.5s",
      padding: "5%",
    },
    closebtn: {
      position: "absolute",
      top: "0",
      right: "25px",
      fontSize: "36px",
      marginLeft: "50px",
    },
  };

  const closeMe = () => {
    props.onClose();
  };

  return (
    <div id="drawer" style={styles.drawer}>
      <a href="#" style={styles.closebtn} onClick={closeMe}>
        &times;
      </a>
      {props.children}
    </div>
  );
};

export default Drawer;
