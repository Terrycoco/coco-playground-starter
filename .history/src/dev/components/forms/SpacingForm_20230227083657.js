import { useTheme } from "@/hooks";
import styles from "./forms.module.css";
import { Slider } from "@/dev/components/forms";

const SpacingForm = (props) => {
  const { theme } = useTheme();
  return (
    <div className={styles.form}>
      <div className={styles.heading}>Section</div>
      <div key={`${keyPref}section-pt`} className={styles.row}>
        <div className={styles.prop}>paddingTop</div>
        <div className={styles.val}>
          <Slider
            key={`${keyPref}section-pt}`}
            id="paddingTop"
            min="0"
            max="6"
            defaultValue={theme.spacing.sectionPaddingTop}
            onChange={handleValueChange}
            suf="rem"
          />
        </div>
      </div>
      <div key={"section-pr"} className={styles.row}>
        <div className={styles.prop}>PaddingRight</div>
        <div className={styles.val}>3</div>
      </div>
      <div key={"section-pr"} className={styles.row}>
        <div className={styles.prop}>PaddingBottom</div>
        <div className={styles.val}>3</div>
      </div>
      <div key={"section-pr"} className={styles.row}>
        <div className={styles.prop}>PaddingLeft</div>
        <div className={styles.val}>3</div>
      </div>
    </div>
  );
};

export default SpacingForm;
