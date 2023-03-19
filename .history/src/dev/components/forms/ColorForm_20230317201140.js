import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectColors, selectVariants } from "@/store/colorsSlice";
import { selectVariables } from "@/store/variablesSlice";
import { selectText } from "@/store/textSlice";
import { updateColor } from "@/store/sharedActions";
import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridExpander from "@/dev/components/forms/StyleGridExpander";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { Button, TabContainer, Tab } from "@/components/buttons";
import ColorPickerDropdown from "@/dev/components/dropdowns/ColorPickerDropdown";
import ColorDropdown from "@/dev/components/dropdowns/ColorDropdown";

const ColorForm = (props) => {
  const dispatch = useDispatch();
  const colors = useSelector(selectColors);
  const variants = useSelector(selectVariants);
  const variables = useSelector(selectVariables);
  const text = useSelector(selectText);
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

  const getTabStyle = (me) => {
    console.log("me is ", me);
    if (tab == me) {
      return {
        backgroundColor: variables["var(--clr-primary5)"],
        color: variables["var(--clr-primary)"],
      };
    } else {
      return {
        backgroundColor: variables["var(--clr-blackish10)"],
        color: variables["var(--clr-blackish50)"],
      };
    }
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

  const updateElementColor = (obj) => {};

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
      <TabContainer style={styles.tabrow}>
        <Tab id={1} onClick={clickTab} style={getTabStyle(1)}>
          Elements
        </Tab>
        <Tab id={2} onClick={clickTab} style={getTabStyle(2)}>
          Settings
        </Tab>
      </TabContainer>
      {tab == 2 && (
        <FormWrapper>
          <div style={styles.buttonrow}>
            <Button>Reset</Button>
            <Button>Delete</Button>
            <Button>Add Another Category</Button>
          </div>
          <StyleGrid title="Theme Colors">{getColorItems()}</StyleGrid>
          <StyleGrid title="Variants (calculated)">
            {getVariantItems()}
          </StyleGrid>
        </FormWrapper>
      )}
      {tab == 1 && (
        <FormWrapper>
          <StyleGridExpander title="p">
            <StyleGridItem label="color" key={Math.random()}>
              <ColorDropdown
                key={Math.random()}
                element={"p"}
                propName="color"
                id="pbgcolor"
                defaultValue={text.p.color} //should be var(--clr-primary)
                onSelect={updateElementColor}
              />
            </StyleGridItem>
          </StyleGridExpander>
          <StyleGridExpander title="p">
            <StyleGridItem label="color" key={Math.random()}>
              <ColorDropdown
                key={Math.random()}
                element={"h1"}
                propName="color"
                id="h1bgcolor"
                defaultValue={text.h1.color} //should be var(--clr-primary)
                onSelect={updateElementColor}
              />
            </StyleGridItem>
          </StyleGridExpander>
        </FormWrapper>
      )}
    </>
  );
};

export default ColorForm;
