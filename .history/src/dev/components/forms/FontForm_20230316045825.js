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
  const options = getFontsArray(); //all fonts
  const themeFonts = useSelector(selectFontObjs);

  const styles = {
    buttonrow: {
      marginTop: "1rem",
    },
  };
  const handleSelect = (objFromDropdown) => {
    console.log("updating to:", objFromDropdown);
    dispatch(updateFont(objFromDropdown));
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
            section="fonts"
            propName="body"
            options={options}
            id="body"
            defaultObj={themeFonts.find((obj) => obj.category == "body")}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="headings">
          <FontDropdown
            options={options}
            section="fonts"
            propName="display"
            id="display"
            defaultObj={themeFonts.find((obj) => obj.category == "display")}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="forms">
          <FontDropdown
            section="fonts"
            propName="forms"
            options={options}
            id="forms"
            defaultObj={themeFonts.find((obj) => obj.category == "forms")}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="special">
          <FontDropdown
            section="fonts"
            propName="special"
            options={options}
            id="special"
            defaultObj={themeFonts.find((obj) => obj.category == "special")}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="mono">
          <FontDropdown
            section="fonts"
            propName="mono"
            options={options}
            id="mono"
            defaultObj={themeFonts.find((obj) => obj.category == "mono")}
            onSelect={handleSelect}
          />
        </StyleGridItem>
      </StyleGrid>
    </FormWrapper>
  );
};

export default FontForm;
