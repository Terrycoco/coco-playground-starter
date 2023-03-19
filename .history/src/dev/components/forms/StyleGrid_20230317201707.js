import { useSelector } from "react-redux";
import { selectVariables } from "variablesSlice";

const styles = {
  title: {
    fontFamily: variables["var(font-forms)"],
    fontSize: "14px",
    textTransform: "uppercase",
    paddingTop: "1rem",
    color: variables["var(--clr-primary)"],
  },
  grid: {
    display: "flex",
    height: "auto",
    flexDirection: "column",
    backgroundColor: "white",
    border: "1px solid lightgray",
  },
};

const StyleGrid = (props) => {
  return (
    <div>
      {props.title ? <div style={styles.title}>{props.title}</div> : null}
      <div style={styles.grid}>{props.children}</div>
    </div>
  );
};

export default StyleGrid;
