import { useSelector, useDispatch } from "react-redux";
import { selectColors, selectVariants, updateColor } from "@/store/colorsSlice";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { Button } from "@/components/buttons";

const ColorForm = (props) => {
  const styles = {
    form: {
      backgroundColor: "var(--clr-whitish)",
      overflowY: "scroll",
      paddingTop: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "3rem",
      overflowY: "scroll",
      height: "100vh",
    },
    buttonrow: {
      marginTop: "1rem",
    },
    colorBox: {
      width: "100%",
      height: "100%",
      backgroundColor: "var(--clr-primary)",
    },
  };
  return (
    <div style={styles.form}>
      <div style={styles.buttonrow}>
        <Button>Reset</Button>
        <Button>Delete</Button>
        <Button>Add Another Category</Button>
        <Button>Regenerate Variants</Button>
      </div>
      <StyleGrid title="Theme Colors">
        <StyleGridItem label="primary">
          <div style={styles.colorBox}></div>
        </StyleGridItem>
        <StyleGridItem label="secondary">
          <div style={styles.colorBox}></div>
        </StyleGridItem>
      </StyleGrid>
    </div>
  );
};

export default ColorForm;
