import { StyleGrid, StyleGridItem } from "@/dev/components/forms";
import { useState, useEffect, useMemo } from "react";
import { FontDropdown } from "@/dev/components/dropdowns";
import { useSelector, useDispatch } from "react-redux";
import { selectObjs, updateFont } from "@/store/fontsSlice";
import { Button } from "@/components/buttons";
import { getFontsArray } from "@/utils/fonts";

let options = getFontsArray();
//console.log("optons:", options);

const FontForm = (props) => {
  const dispatch = useDispatch();
  const themeFonts = useSelector(selectObjs);

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

  const handleSelect = (val) => {
    console.log("got to fontform onselect", val);
    // dispatch(updateFont(val));
  };

  return (
    <div style={styles.form}>
      <div>
        <div style={styles.buttonrow}>
          <Button>Reset</Button>
          <Button>Delete</Button>
          <Button>Add Another Category</Button>
        </div>
        {themeFonts === undefined ? (
          "loading..."
        ) : (
          <StyleGrid title="Theme Fonts">
            <StyleGridItem label="body">
              <FontDropdown
                id="body"
                onSelect={handleSelect}
                defaultObj={themeFonts.body}
                key="body"
                options={options}
              />
            </StyleGridItem>
            <StyleGridItem label="headings">
              <FontDropdown
                id="display"
                onSelect={handleSelect}
                defaultObj={themeFonts.display}
                key="display"
                options={options}
              />
            </StyleGridItem>
            <StyleGridItem label="forms">
              <FontDropdown
                id="forms"
                onSelect={handleSelect}
                defaultObj={themeFonts.forms}
                key="forms"
                options={options}
              />
            </StyleGridItem>
            <StyleGridItem label="special">
              <FontDropdown
                id="special"
                onSelect={handleSelect}
                defaultObj={themeFonts.special}
                key="special"
                options={options}
              />
            </StyleGridItem>
            <StyleGridItem label="mono">
              <FontDropdown
                id="mono"
                onSelect={handleSelect}
                defaultObj={themeFonts.mono}
                key="mono"
                options={options}
              />
            </StyleGridItem>
          </StyleGrid>
        )}
      </div>
    </div>
  );
};

export default FontForm;
