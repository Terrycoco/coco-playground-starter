import { Children } from "react";

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
    minHeight: "2rem",
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
    <div>
      {props.title ? <div style={styles.title}>{props.title}</div> : null}
      <div id="stylegrid" style={styles.grid}>
        {props.children}
      </div>
    </div>
  );
};

module.exports = { StyleGridItem, StyleGrid };
