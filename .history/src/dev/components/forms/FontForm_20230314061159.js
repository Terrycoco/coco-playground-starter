import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectFontObjs, updateFont } from "@/store/fontsSlice";
import { Button } from "@/components/buttons";
import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { FontDropdown } from "@/dev/components/dropdowns";
import { getFontsArray } from "@/utils/fonts";

const FontForm = (props) => {
  const dispatch = useDispatch();
  const options = getFontsArray();
  const themeFonts = useSelector(selectFontObjs);

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
    console.log("updating to:", val);
    dispatch(updateFont(val));
  };
  return (
    <div style={styles.form}>
      <div style={styles.buttonrow}>
        <Button>Reset</Button>
        <Button>Delete</Button>
        <Button>Add Another Category</Button>
      </div>
      <StyleGrid title="theme fonts">
        <StyleGridItem label="body">
          <FontDropdown
            options={options}
            id="body"
            defaultObj={themeFonts.body}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="headings">
          <FontDropdown
            options={options}
            id="display"
            defaultObj={themeFonts.display}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="forms">
          <FontDropdown
            options={options}
            id="forms"
            defaultObj={themeFonts.forms}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="special">
          <FontDropdown
            options={options}
            id="special"
            defaultObj={themeFonts.special}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="mono">
          <FontDropdown
            options={options}
            id="mono"
            defaultObj={themeFonts.mono}
            onSelect={handleSelect}
          />
        </StyleGridItem>
      </StyleGrid>
    </div>
  );
};

export default FontForm;
