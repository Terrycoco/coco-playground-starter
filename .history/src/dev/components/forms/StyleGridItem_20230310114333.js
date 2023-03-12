const StyleGridItem = (props) => {
  return (
    <div style={styles.row}>
      <div style={styles.label}>{props.label}</div>
      <div style={styles.child}>{props.children}</div>
    </div>
  );
};

export default StyleGridItem;
