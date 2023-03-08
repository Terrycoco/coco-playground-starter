import styles from "./buttons.module.css";
//TODO MERGE STYLES WITH INCOMING

export const Button = (props) => {
  return (
    <button role="button" className={styles.btn} {...props}>
      {props.children}
    </button>
  );
};

module.exports = { Button };

export const ButtonSketch = (props) => {
  return (
    <button role="button" className={styles.btn} {...props}>
      {props.children}
    </button>
  );
};
