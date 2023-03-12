import { StyleGrid, StyleGridItem } from "@/dev/components/forms";
import { FontDropdown } from "@/dev/components/dropdowns";
import { useSelector, useDispatch } from "react-redux";
import { selectFonts } from "@/store/fontsSlice";

const FontForm = (props) => {
  const dispatch = useDispatch();
  const fonts = useSelector(selectFonts);

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
    buttonrow: {
      marginTop: "1rem",
    },
  };

  getFontLevels = () => {
    let result = [];
    for (const level in fonts) {
      console.log("fonts:", fonts);
      result.push(<StyleGridItem label={level}></StyleGridItem>);
    }
    return result;
  };

  return (
    <div style={styles.form}>
      <StyleGrid title={levelName}>
        <StyleGridItem label="Line Height"></StyleGridItem>
      </StyleGrid>
    </div>
  );
};

export default FontForm;
