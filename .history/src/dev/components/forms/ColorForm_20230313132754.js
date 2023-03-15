import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectColors, selectVariants, updateColor } from "@/store/colorsSlice";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { Button } from "@/components/buttons";
import ColorPickerDropdown from "@/dev/components/dropdowns/ColorPickerDropdown";

const ColorForm = (props) => {
  const dispatch = useDispatch();
  const colors = useSelector(selectColors);
  const variants = useSelector(selectVariants);
  const initColors = useState(null); // store initial state for reset
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
        result.push(
          <StyleGridItem label={key} key={key}>
            <ColorPickerDropdown
              defaultColor={colors[key]}
              category="colors"
              key={key}
              id={key}
              onSelect={updateColor}
            />
          </StyleGridItem>
        );
      }
      return result;
    }
  };

  const updateColor = (newpayload) => {
    // dispatch(updateColor(newpayload));
    console.log("newcolor:", newpayload);
  };

  const getVariantItems = () => {
    //no color picker here
    if (variants !== undefined) {
      let result = [];
      for (let key in variants) {
        let style = {
          backgroundColor: variants[key],
          width: "100%",
          height: "100%",
        };
        result.push(
          <StyleGridItem label={key} key={key}>
            <div style={style}></div>
          </StyleGridItem>
        );
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
      <StyleGrid title="Variants">{getVariantItems()}</StyleGrid>
    </div>
  );
};

export default ColorForm;
