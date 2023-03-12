import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectFonts } from "@/store/fontsSlice";
import { Button } from "@/components/buttons";

const FontForm = (props) => {
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
  return (
    <div style={styles.form}>
      <div style={styles.buttonrow}>
        <Button>Reset</Button>
        <Button>Delete</Button>
        <Button>Add Another Category</Button>
      </div>
      {themeFonts === undefined ? (
        <div>"loading..."</div>
      ) : (
        <div>font form</div>
      )}
    </div>
  );
};

FontForm.propTypes = {
  options: PropTypes.array.isRequired,
};

export default FontForm;
