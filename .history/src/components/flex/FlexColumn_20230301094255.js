let styles = {
  display: "flex",
  flexDirection: "column",
};

//TODO MERGE STYLES WITH INCOMING?

const FlexColumn = (props) => {
  return (
    <div {...props} style={styles}>
      {props.children}
    </div>
  );
};

export default FlexColumn;
