import { useState, useEffect } from "react";

//may want to pass in width val

const Drawer = (props) => {
  const [width, setWidth] = useState("0px");

  useEffect(() => {
    if (props.show) {
      setWidth("250px");
    } else {
      setWidth("0px");
    }
  }, [props.show]);

  let styles = {
    drawer: {
      height: "100vh",
      width: width,
      position: "fixed",
      zIndex: "99999",
      top: "0",
      right: "0",
      backgroundColor: "var(--clr-whitish)",
      overflowX: "hidden",
      paddingTop: "60px",
      transition: " 0.5s",
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
