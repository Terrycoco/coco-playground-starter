import { StyleGrid, StyleGridItem } from "@/dev/components/forms";
import { useState, useEffect, useMemo } from "react";
import { FontDropdown } from "@/dev/components/dropdowns";
import { useSelector, useDispatch } from "react-redux";
import { selectFonts } from "@/store/fontsSlice";
import { Button } from "@/components/buttons";
import { getFontsArray } from "@/utils/fonts";

let options = getFontsArray();
//console.log("optons:", options);

const FontForm = (props) => {
  const dispatch = useDispatch();
  const themeFonts = useSelector(selectFonts);

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

  const test = (e, category) => {
    console.log("got to fontform onselect", e, category);
  };

  return (
    <div style={styles.form} onClick={closeAll}>
      <div>
        <div style={styles.buttonrow}>
          <Button>Reset</Button>
          <Button>Delete</Button>
          <Button>Add Another Category</Button>
        </div>
        {themeFonts === undefined ? (
          "loading..."
        ) : (
          <div>
            <StyleGrid title="Theme Fonts">
              <StyleGridItem label="body">
                <FontDropdown
                  onSelect={test}
                  defaultValue="Gelasio"
                  key="body"
                  option={options}
                />
              </StyleGridItem>
            </StyleGrid>
          </div>
        )}
      </div>
    </div>
  );
};

export default FontForm;
