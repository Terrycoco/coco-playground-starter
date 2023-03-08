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
    height: "100vh",
    width: { width },
    position: "fixed",
    zIndex: "99999",
    top: "0",
    right: "0",
    backgroundColor: "#111",
    overflowX: "hidden",
    paddingTop: "60px",
    transition: " 0.5s",
  };

  const closeMe = () => {
    props.onClose();
  };

  return (
    <div id="drawer" className={styles.drawer} width={width}>
      <a href="#" className={styles.closebtn} onClick={closeMe}>
        &times;
      </a>
      {props.children}
    </div>
  );
};

export default Drawer;
