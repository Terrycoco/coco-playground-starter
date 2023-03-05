let styles = {
  display: "flex",
  flexDirection: "column",
};

const FlexColumn = (props) => {
  return (
    <div {...props} style={styles}>
      {props.children}
    </div>
  );
};

export default FlexColumn;
