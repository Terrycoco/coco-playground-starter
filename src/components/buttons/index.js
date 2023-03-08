import IconButton from "./IconButton";

import styles from "./buttons.module.css";
//TODO MERGE STYLES WITH INCOMING

export const Button = (props) => {
  return (
    <button role="button" className={styles.btn} {...props}>
      {props.children}
    </button>
  );
};

export const ButtonSketch = (props) => {
  return (
    <button role="button" className={styles.btnSketch} {...props}>
      {props.children}
    </button>
  );
};

module.exports = { Button, ButtonSketch, IconButton };
