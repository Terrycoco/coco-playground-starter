import { StyleGrid, StyleGridItem } from "@/dev/components/forms";
import { FontDropdown } from "@/dev/components/dropdowns";
import { useSelector, useDispatch } from "react-redux";
import { selectFonts, updateFont } from "@/store/fontsSlice";
import { Button } from "@/components/buttons";

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

  const getThemeFonts = () => {
    if (fonts) {
      let result = [];
      for (const key in fonts) {
        console.log("fonts:", fonts);
        result.push(
          <StyleGridItem label={key}>
            <FontDropdown isBaseLevel={true} element={key} />
          </StyleGridItem>
        );
      }
      return result;
    }
  };

  return (
    <div style={styles.form}>
      <div>
        <div style={styles.buttonrow}>
          <Button>Reset</Button>
          <Button>Delete</Button>
          <Button>Add Another Category</Button>
        </div>

        <StyleGrid title="Theme Fonts">{getThemeFonts()}</StyleGrid>
      </div>
    </div>
  );
};

export default FontForm;
