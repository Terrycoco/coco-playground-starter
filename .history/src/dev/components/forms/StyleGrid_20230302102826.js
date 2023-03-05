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
  },
  label: {
    flexBasis: "40%",
    paddingLeft: "1rem",
    fontFamily: "Arial",
    fontSize: ".8rem",
    display: "flex",
    alignItems: "center",
    color: "gray",
  },
  child: {
    paddingLeft: "1rem",
    border: "1px solid lightgray",
  },
};

const StyleGridItem = (props) => {
  const arrayChildren = Children.toArray(props.children);

  return Children.map(arrayChildren, (child, idx) => {
    return (
      <div style={styles.row}>
        <div style={styles.label}>{props.label}</div>
        {child}
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
