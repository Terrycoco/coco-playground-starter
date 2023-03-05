import { useTheme } from "@/hooks";
import styles from "./forms.module.css";
import { Slider } from "@/dev/components/forms";

const SpacingForm = (props) => {
  const { theme, setTheme } = useTheme();

  const handleValueChange = (id, newval) => {
    let newtheme = Object.assign({}, theme);
    newtheme.spacing.section[id] = newval;
    setTheme(newtheme);
  };

  return (
    <div className={styles.form}>
      <div className={styles.heading}>Section</div>

      <div key={`section-pt`} className={styles.row}>
        <div className={styles.prop}>paddingTop</div>
        <div className={styles.val}>
          <Slider
            key="section-pt-slider"
            id="paddingTop"
            min="0"
            max="10"
            defaultValue={theme.spacing.section.paddingTop}
            onChange={handleValueChange}
            suf="rem"
          />
        </div>
      </div>
    </div>
  );
};

export default SpacingForm;

// <div key={`section-pr`} className={styles.row}>
// <div className={styles.prop}>paddingRight</div>
// <div className={styles.val}>
//   <Slider
//     key="section-pr-slider"
//     id="sectionPaddingRight"
//     min="0"
//     max="10"
//     defaultValue={theme.spacing.sectionPaddingRight}
//     onChange={handleValueChange}
//     suf="rem"
//   />
// </div>
// </div>

// <div key={`section-pb`} className={styles.row}>
// <div className={styles.prop}>paddingBottom</div>
// <div className={styles.val}>
//   <Slider
//     key="section-pb-slider"
//     id="sectionPaddingBottom"
//     min="0"
//     max="10"
//     defaultValue={theme.spacing.sectionPaddingBottom}
//     onChange={handleValueChange}
//     suf="rem"
//   />
// </div>
// </div>

// <div key={`section-pl`} className={styles.row}>
// <div className={styles.prop}>paddingLeft</div>
// <div className={styles.val}>
//   <Slider
//     key="section-pl-slider"
//     id="sectionPaddingLeft"
//     min="0"
//     max="10"
//     defaultValue={theme.spacing.sectionPaddingLeft}
//     onChange={handleValueChange}
//     suf="rem"
//   />
// </div>
// </div>
