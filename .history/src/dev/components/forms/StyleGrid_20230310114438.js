import { useId } from "react";

const styles = {
  title: {
    fontFamily: "Arial",
    fontSize: "14px",
    textTransform: "uppercase",
    paddingTop: "1rem",
    color: "var(--clr-primary)",
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
      <div id={useId} style={styles.grid}>
        {props.children}
      </div>
    </div>
  );
};

export default StyleGrid;
