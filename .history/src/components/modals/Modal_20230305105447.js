import styles from "./modals.module.css";

const Modal = (props) => {
  const closeMe = () => {
    props.onClose();
  };
  return (
    <>
      {props.show && (
        <div className={styles.modal}>
          <div className={styles.content}>
            <span className={styles.close} onClick={closeMe}>
              &times;
            </span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
