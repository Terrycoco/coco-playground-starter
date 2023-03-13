import { useSelector, useDispatch } from "react-redux";
import { selectColors, selectVariants, updateColor } from "@/store/colorsSlice";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { Button } from "@/components/buttons";

const ColorForm = (props) => {
  const colors = useSelector(selectColors);
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
  };

  const getColorItems = () => {
    if (colors !== undefined) {
      let result = [];
      for (let key in colors) {
        result.push(<StyleGridItem label={key} key={key}></StyleGridItem>);
      }
      return result;
    }
  };

  return (
    <div style={styles.form}>
      <div style={styles.buttonrow}>
        <Button>Reset</Button>
        <Button>Delete</Button>
        <Button>Add Another Category</Button>
        <Button>Regenerate Variants</Button>
      </div>
      <StyleGrid title="Theme Colors">{getColorItems()}</StyleGrid>
    </div>
  );
};

export default ColorForm;
