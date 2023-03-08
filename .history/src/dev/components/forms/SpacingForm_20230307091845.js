import { useTheme } from "@/hooks";
import styles from "./forms.module.css";
import {
  RangeSlider,
  StyleGrid,
  StyleGridItem,
  ThemeViewer,
} from "@/dev/components/forms";

const SpacingForm = (props) => {
  const { theme, setTheme } = useTheme();

  const styles = {
    form: {
      backgroundColor: "var(--clr-whitish)",
      overflowY: "scroll",
      paddingTop: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "3rem",
      overflowY: "scroll",
    },
  };

  const handleValueChange = (id, newval) => {
    console.log("id", id, "newval", newval);
    let newtheme = Object.assign({}, theme);
    newtheme.spacing.section[id] = newval;
    setTheme(newtheme);
  };

  return (
    <div style={styles.form}>
      <StyleGrid title="Header">
        <StyleGridItem label="height">
          <RangeSlider key={`${headerht}fs`} {...fsProps} />
        </StyleGridItem>

        <StyleGridItem label="Line Height">
          <RangeSlider key={`${levelName}lh`} {...lhProps} />
        </StyleGridItem>
      </StyleGrid>
    </div>
  );
};

export default SpacingForm;
