import { Button } from "@/components/buttons";
import styles from "./modals.module.css";

const Modal = (props) => {
  return (
    <>
      <Button id="myBtn">Open Modal</Button>

      <div id="myModal" className="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
