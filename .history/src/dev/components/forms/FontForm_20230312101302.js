import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectObjs } from "@/store/fontsSlice";
import { Button } from "@/components/buttons";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { FontDropdown } from "@/dev/components/dropdowns";

const FontForm = (props) => {
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
    console.log("selected:", val);
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
            options={props.options}
            id="body"
            defaultObj={themeFonts.body}
            onSelect={handleSelect}
          />
        </StyleGridItem>
        <StyleGridItem label="display">
          <div>fontform</div>
        </StyleGridItem>
        <StyleGridItem label="forms">
          <div>fontform</div>
        </StyleGridItem>
        <StyleGridItem label="special">
          <div>fontform</div>
        </StyleGridItem>
        <StyleGridItem label="mono">
          <div>fontform</div>
        </StyleGridItem>
      </StyleGrid>
    </div>
  );
};

FontForm.propTypes = {
  options: PropTypes.array.isRequired,
};

export default FontForm;
