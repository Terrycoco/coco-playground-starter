import { StyleGrid, StyleGridItem } from "@/dev/components/forms";
import { useState, useEffect, useMemo } from "react";
import { AllFontDropdown } from "@/dev/components/dropdowns";
import { useSelector } from "react-redux";
import { selectFonts, selectAllFonts } from "@/store/fontsSlice";
import { Button } from "@/components/buttons";

const FontForm = (props) => {
  const fonts = useSelector(selectFonts);
  const allFonts = useSelector(selectAllFonts);
  const [options, setOptions] = useState();

  //load up options only once
  useEffect(() => {
    let opts = [];
    for (const f in allFonts) {
      //label is font name, value is the real font variable in store
      opts.push({ label: allFonts[f], value: f });
    }
    setOptions(opts);
    console.log("options:", opts);
  }, [allFonts]);

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

  return (
    <div style={styles.form}>
      <div>
        <div style={styles.buttonrow}>
          <Button>Reset</Button>
          <Button>Delete</Button>
          <Button>Add Another Category</Button>
        </div>
        <StyleGrid title="theme fonts">
          <StyleGridItem label="body" key="body">
            <AllFontDropdown key="ddbody" category="body" data={allFonts} />
          </StyleGridItem>
          <StyleGridItem label="display" key="display">
            <AllFontDropdown
              key="dddisplay"
              category="display"
              options={options}
            />
          </StyleGridItem>
        </StyleGrid>
      </div>
    </div>
  );
};

export default FontForm;
