import { useSelector } from "react-redux";
import { selectVariables } from "@/store/variablesSlice";

const FormWrapper = (props) => {
  const styles = {
    form: {
      backgroundColor: "var(--clr-whitish)",
      overflowY: "scroll",
      paddingTop: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "5rem",
      overflowY: "scroll",
      height: "100vh",
      fontFamily,
    },
  };

  return <div style={styles.form}>{props.children}</div>;
};

export default FormWrapper;
