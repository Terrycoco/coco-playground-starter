import { Children } from "react";

const styles = {
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "50vh",
    backgroundColor: "white",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  label: {
    flexBasis: "40%",
    paddingLeft: "1rem",
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
