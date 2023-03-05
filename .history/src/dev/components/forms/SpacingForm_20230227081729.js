import { useTheme } from "@/hooks";
import styles from "./forms.module.css";

const SpacingForm = (props) => {
  return (
    <div className={styles.form}>
      <div className={styles.heading}>Spacing</div>
    </div>
  );
};

export default SpacingForm;
