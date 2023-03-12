import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectFonts } from "@/store/fontsSlice";

const FontForm = (props) => {
  const themeFonts = useSelector();
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
  return <div style={styles.form}>font form</div>;
};

FontForm.propTypes = {
  options: PropTypes.array.isRequired,
};

export default FontForm;
