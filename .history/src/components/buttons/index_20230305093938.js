import styles from "./buttons.module.css";
//TODO MERGE STYLES WITH INCOMING

export const Button = (props) => {
  return (
    <button className={styles.btn} {...props}>
      {props.children}
    </button>
  );
};

module.exports = { Button };
