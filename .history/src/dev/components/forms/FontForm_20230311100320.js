import { StyleGrid, StyleGridItem } from "@/dev/components/forms";
// import { useState, useEffect, useMemo } from "react";
import { FontDropdown } from "@/dev/components/dropdowns";
import { useSelector, useDispatch } from "react-redux";
import { selectFonts } from "@/store/fontsSlice";
import { Button } from "@/components/buttons";
import { getFontsArray } from "@/utils/fonts";

const options = getFontsArray();
console.log("optons:", options);

const FontForm = (props) => {
  const dispatch = useDispatch();
  //const themeFonts = useSelector(selectFonts);

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

  const changeFont = (e, category) => {
    console.log("got to fontform onselect", e, category);
  };

  return (
    <div style={styles.form}>
      <div>
        <div style={styles.buttonrow}>
          <Button>Reset</Button>
          <Button>Delete</Button>
          <Button>Add Another Category</Button>
        </div>

        <StyleGrid title="themed fonts">
          <StyleGridItem label="body">
            <FontDropdown
              key="ddbody"
              options={options}
              defaultValue="Gelasio"
              onSelect={changeFont}
            />
          </StyleGridItem>
          <StyleGridItem label="display">
            <FontDropdown
              key="dddisplay"
              options={options}
              defaultValue="Josefin Sans"
              onSelect={changeFont}
            />
          </StyleGridItem>
          <StyleGridItem label="special">
            <FontDropdown
              key="ddspecial"
              options={options}
              defaultValue="Work Sans"
              onSelect={changeFont}
            />
          </StyleGridItem>
          <StyleGridItem label="forms">
            <FontDropdown
              key="ddspecial"
              options={options}
              defaultValue="Lato"
              onSelect={changeFont}
            />
          </StyleGridItem>
        </StyleGrid>
      </div>
    </div>
  );
};

export default FontForm;
