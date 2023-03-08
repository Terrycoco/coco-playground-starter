import styles from "./drawer.module.css";

const Drawer = (props) => {
  return <div className={styles.drawer}>{props.children}</div>;
};

export default Drawer;
