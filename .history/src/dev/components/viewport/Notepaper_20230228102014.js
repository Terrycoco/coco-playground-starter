import { useTheme } from "@/dev/hooks";

const Notepaper = (props) => {
  const styles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#0000E0",
  };

  return <div style={styles}></div>;
};

export default Notepaper;
