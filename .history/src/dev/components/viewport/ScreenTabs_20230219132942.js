import { useTheme } from "@/hooks";

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "gray",
    justifyContent: "stretch",
  },
  item: {
    flex: 1,
  },
};

const ScreenTabs = (props) => {
  return (
    <div style={styles.container}>
      <button style={styles.item}>Mobile</button>
      <button style={styles.item}>Lg Mobile</button>
      <button style={styles.item}>Tablet</button>
      <button style={styles.item}>Laptop</button>
      <button style={styles.item}>Desktop</button>
      <button style={styles.item}>TV</button>
    </div>
  );
};

export default ScreenTabs;
