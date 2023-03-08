import { Button } from "@/components/buttons";
import styles from "./modals.module.css";

const Modal = (props) => {
  return (
    <>
      <Button id="myBtn">Open Modal</Button>

      <div className={styles.modal}>
        <div className={styles.content}>
          <span className={styles.close}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
