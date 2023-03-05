import { useTheme } from "@/hooks";
import styles from "./forms.module.css";

const SpacingForm = (props) => {
  return (
    <div className={styles.form}>
      <div className={styles.heading}>Section</div>
      <div key={"section-sp"} className={styles.row}>
        <div className={styles.prop}>PaddingTop</div>
        <div className={styles.val}>3</div>
      </div>
    </div>
  );
};

export default SpacingForm;
