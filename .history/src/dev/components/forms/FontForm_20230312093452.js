import PropTypes from "prop-types";

const FontForm = (props) => {
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
  return <div style={styles.form}></div>;
};

FontForm.propTypes = {
  options: PropTypes.array.isRequired,
};

export default FontForm;
