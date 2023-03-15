import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectFontObjs } from "@/store/fontsSlice";
import { updateFont } from "@/store/sharedActions";
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
    buttonrow: {
      marginTop: "1rem",
    },
  };
  const handleSelect = (objFromDropdown) => {
    console.log("updating to:", objFromDropdown);
    // dispatch(updateFont(objFromDropdown));
  };

  return (
    <FormWrapper>
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
    </FormWrapper>
  );
};

export default FontForm;
