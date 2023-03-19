import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectColors, selectVariants } from "@/store/colorsSlice";
import { updateColor } from "@/store/sharedActions";
import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { Button, TabContainer, Tab } from "@/components/buttons";
import ColorPickerDropdown from "@/dev/components/dropdowns/ColorPickerDropdown";

const ColorForm = (props) => {
  const dispatch = useDispatch();
  const colors = useSelector(selectColors);
  const variants = useSelector(selectVariants);
  const [initColors, setInitColors] = useState(null); // store initial state for reset
  const [tab, setTab] = useState(1);

  useEffect(() => {
    setInitColors(colors);
  }, []);

  const styles = {
    tabrow: {
      border: "1px solid #ccc",
      backgroundColor: "#f1f1f1",
      display: "flex",
    },
    tab: {
      flexBasis: "50%",
      backgroundColor: "inherit",
      border: "none",
      outline: "none",
      cursor: "pointer",
      padding: "14px 16px",
      transition: "0.3s",
      fontSize: "17px",
    },
    buttonrow: {
      marginTop: "1rem",
    },
  };

  const clickTab = (e) => {
    setTab(e.target.id);
  };

  const resetColor = (key) => {
    // console.log("key to reset:", key);
    //  console.log("orig val:", initColors[key]);
    dispatch(updateColor({ key: key, value: initColors[key] }));
  };

  const getColorItems = useCallback(() => {
    if (colors !== undefined) {
      let result = [];
      for (let key in colors) {
        result.push(
          <StyleGridItem label={key} key={key}>
            <ColorPickerDropdown
              defaultColor={colors[key]}
              category="colors"
              key={key}
              propName={key}
              onSelect={colorSelected}
              onReset={resetColor}
            />
          </StyleGridItem>
        );
      }
      return result;
    }
  });

  const colorSelected = (newpayload) => {
    dispatch(updateColor(newpayload));
    // console.log("newcolor:", newpayload);
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
    <>
      <FormWrapper>
        <TabContainer style={styles.tabrow}>
          <Tab id={1} onClick={clickTab}>
            Elements
          </Tab>
          <Tab id={2} onClick={clickTab}>
            Settings
          </Tab>
        </TabContainer>
        <div style={styles.buttonrow}>
          <Button>Reset</Button>
          <Button>Delete</Button>
          <Button>Add Another Category</Button>
        </div>
        <StyleGrid title="Theme Colors">{getColorItems()}</StyleGrid>
        <StyleGrid title="Variants (calculated)">{getVariantItems()}</StyleGrid>
      </FormWrapper>
    </>
  );
};

export default ColorForm;
