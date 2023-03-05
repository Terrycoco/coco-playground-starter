import { useTheme } from "@/hooks";
import styles from "./forms.module.css";

const SpacingForm = (props) => {
  return (
    <div className={styles.form}>
      <div className={styles.heading}>Spacing</div>
      <div key={"section-sp"} className={styles.row}>
        <div className={styles.prop}>SectionPadding</div>
        <div className={styles.val}>3</div>
      </div>
    </div>
  );
};

export default SpacingForm;
