import styles from "./drawer.module.css";

const Drawer = (props) => {
  return (
    <div className={styles.drawer}>
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
