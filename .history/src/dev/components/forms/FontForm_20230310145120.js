import { StyleGrid, StyleGridItem } from "@/dev/components/forms";
import { useState, useEffect, useMemo } from "react";
import { AllFontDropdown } from "@/dev/components/dropdowns";
import { useSelector } from "react-redux";
import { selectFonts, selectAllFonts } from "@/store/fontsSlice";
import { Button } from "@/components/buttons";

const FontForm = (props) => {
  const fonts = useSelector(selectFonts);
  const allFonts = useSelector(selectAllFonts);

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
            <AllFontDropdown key="ddbody" category="body" />
          </StyleGridItem>
          <StyleGridItem label="display" key="display">
            <AllFontDropdown key="dddisplay" category="display" />
          </StyleGridItem>
        </StyleGrid>
      </div>
    </div>
  );
};

export default FontForm;
