import { StyleGrid, StyleGridItem } from "@/dev/components/forms";
import { useState, useEffect, useMemo } from "react";
import { AllFontDropdown } from "@/dev/components/dropdowns";
import { useSelector } from "react-redux";
import { selectFonts } from "@/store/fontsSlice";
import { Button } from "@/components/buttons";

const FontCategory = ({ category, ...props }) => {
  const [fontVal, setFontVal] = useState(16);
  const [fontLabel, setFontLabel] = useState(1.5);

  useEffect(() => {
    setFontVal(fontSize);
  }, []);

  //each dropdown gets its own memo
  const myProps = useMemo(
    () => ({
      value: fontVal,
      onChange: (e) => handleFontChange(e),
    }),
    [fontVal]
  );

  function handleFontChange(newval) {
    setFontVal(newval);
    props.onFontChange(category, newval);
  }
  //TODO think about whether to make fonts avail on any level
  return (
    <StyleGridItem label={category}>
      <AllFontDropdown key={`${category}fs`} {...myProps} />
    </StyleGridItem>
  );
};

const FontForm = (props) => {
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

  const getGridItems = () => {
    let result = [];
    for (const cat in fonts) {
      result.push(
        <StyleGridItem label={cat}>
          <AllFontDropdown key={cat} category={cat} />
        </StyleGridItem>
      );
    }
    return result;
  };

  return (
    <div style={styles.form}>
      <div>
        <div style={styles.buttonrow}>
          <Button>Reset</Button>
          <Button>Delete</Button>
          <Button>Add Another Category</Button>
        </div>
        <StyleGrid title="theme fonts">{getGridItems()}</StyleGrid>
      </div>
    </div>
  );
};

export default FontForm;
