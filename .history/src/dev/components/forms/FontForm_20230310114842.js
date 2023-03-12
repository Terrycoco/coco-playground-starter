import { StyleGrid, StyleGridItem } from "@/dev/components/forms";
import { useState, useEffect } from "react";
import { AllFontDropdown } from "@/dev/components/dropdowns";
import { useSelector } from "react-redux";
import { selectFonts } from "@/store/fontsSlice";
import { Button } from "@/components/buttons";

const FontForm = (props) => {
  const fonts = useSelector(selectFonts);
  console.log("fontform got:", fonts);

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
    if (fonts) {
      let result = [];
      for (const cat in fonts) {
        result.push(<AllFontDropdown key={`dd${cat}`} category={cat} />);
      }
      return result;
    } else {
      return <div>loading...</div>;
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
        <StyleGrid title="Theme Fonts">
          <StyleGridItem label="body" key="body">
            <AllFontDropdown category="body" />
          </StyleGridItem>
        </StyleGrid>
      </div>
    </div>
  );
};

export default FontForm;
