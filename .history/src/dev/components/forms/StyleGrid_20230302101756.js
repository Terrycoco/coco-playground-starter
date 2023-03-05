import { Children } from "react";

const styles = {
  grid: {
    display: "flex",
    flexDirection: "column",
    height: "50vh",
    backgroundColor: "yellow",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    height: "2rem",
    width: "100%",
    lineHeight: "2rem",
  },
  label: {
    flexBasis: "35%",
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
