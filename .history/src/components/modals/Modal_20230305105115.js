import { useState, useEffect } from "react";
import styles from "./modals.module.css";

const Modal = (props) => {
  return (
    <>
      {props.show && (
        <div className={styles.modal}>
          <div className={styles.content}>
            <span className={styles.close}>&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
