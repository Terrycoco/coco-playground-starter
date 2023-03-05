import { Children } from "react";

const styles = {
  grid: {
    display: "flex",
    flexDirection: "row",
  },
  row: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    flexBasis: "35%",
  },
};

const StyleGridItem = (props) => {
  const arrayChildren = Children.toArray(props.children);
  {
    Children.map(arrayChildren, (child, idx) => {
      return (
        <div style={styles.row}>
          <div style={styles.label}>{props.label}</div>
          {child}
        </div>
      );
    });
  }
};

const StyleGrid = (props) => {
  return <div style={styles.grid}>{props.children}</div>;
};

module.exports = { StyleGridItem, StyleGrid };
