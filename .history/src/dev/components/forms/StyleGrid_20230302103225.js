import { Children } from "react";

const styles = {
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
    minHeight: "2rem",
    borderBottom: "1px solid lightgray",
  },
  label: {
    flexBasis: "50%",
    paddingLeft: "1rem",
    fontFamily: "Arial",
    fontSize: ".8rem",
    display: "flex",
    alignItems: "center",
    color: "gray",
  },
  child: {
    border: "1px solid lightgray",
    width: "100%",
  },
};

const StyleGridItem = (props) => {
  const arrayChildren = Children.toArray(props.children);

  return Children.map(arrayChildren, (child, idx) => {
    return (
      <div style={styles.row}>
        <div style={styles.label}>{props.label}</div>
        <div style={styles.child}>{child}</div>
      </div>
    );
  });
};

const StyleGrid = (props) => {
  return (
    <div id="stylegrid" style={styles.grid}>
      {props.children}
    </div>
  );
};

module.exports = { StyleGridItem, StyleGrid };
