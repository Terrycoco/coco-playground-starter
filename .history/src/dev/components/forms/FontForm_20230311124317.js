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
  const [refresh, doRefresh] = useState(0);
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

  const closeAll = () => {
    doRefresh((prev) => prev + 1);
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
          <StyleGrid title="Theme fonts">
            <StyleGridItem label="body" key="body">
              <FontDropdown
                key="ddbody"
                options={options}
                defaultValue={themeFonts.body}
                onSelect={test}
                refresh={refresh}
              />
            </StyleGridItem>
            {/*  <StyleGridItem label="display" key="display">
          //     <FontDropdown
          //       key="dddisplay"
          //       options={options}
          //       defaultValue={themeFonts.display}
          //       onSelect={test}
          //       refresh={refresh}
          //     />
          //   </StyleGridItem>
          //   <StyleGridItem label="forms" key="forms">
          //     <FontDropdown
          //       key="ddforms"
          //       options={options}
          //       defaultValue={themeFonts.forms}
          //       onSelect={test}
          //       refresh={refresh}
          //     />
          //   </StyleGridItem>
          //   <StyleGridItem label="special" key="special">
          //     <FontDropdown
          //       key="ddspecial"
          //       options={options}
          //       defaultValue={themeFonts.special}
          //       onSelect={test}
          //       refresh={refresh}
          //     />
          //   </StyleGridItem>
          //   <StyleGridItem label="mono" key="mono">
          //     <FontDropdown
          //       key="ddmono"
          //       options={options}
          //       defaultValue={themeFonts.mono}
          //       onSelect={test}
          //       refresh={refresh}
          //     />
          //   </StyleGridItem>

        */}
          </StyleGrid>
        )}
      </div>
    </div>
  );
};

export default FontForm;
