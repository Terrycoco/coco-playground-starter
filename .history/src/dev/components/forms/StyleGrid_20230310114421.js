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
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    minHeight: "16px",
    borderBottom: "1px solid lightgray",
  },
  label: {
    flexBasis: "50%",
    paddingLeft: "1rem",
    fontFamily: "Arial",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    color: "gray",
    lineHeight: 1,
  },
  child: {
    border: "1px solid lightgray",
    width: "100%",
    fontFamily: "Arial",
    fontSize: "14px",
    paddingLeft: "1rem",
    color: "gray",
    display: "flex",
    alignItems: "center",
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
