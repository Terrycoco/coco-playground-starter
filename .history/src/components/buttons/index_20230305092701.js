import styles from "./buttons.module.css";

export const Button = (props) => {
  return (
    <button style={styles.btn} {...props}>
      {props.children}
    </button>
  );
};

module.exports = { Button };
