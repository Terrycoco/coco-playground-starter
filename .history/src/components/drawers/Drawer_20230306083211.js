import { useState, useEffect } from "react";
import styles from "./drawer.module.css";

const Drawer = (props) => {
  const [width, setWidth] = useState("0px");

  useEffect(() => {
    if (props.show) {
      setWidth("250px");
    } else {
      setWidth("0px");
    }
  }, [props.show]);
  const closeMe = () => {
    props.onClose();
  };

  return (
    <div className={styles.drawer} width={width}>
      <a
        href="javascript:void(0)"
        className={styles.closebtn}
        onClick={closeMe}
      >
        &times;
      </a>
      {props.children}
    </div>
  );
};

export default Drawer;
