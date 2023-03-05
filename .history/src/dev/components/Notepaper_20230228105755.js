import { useTheme } from "@/hooks";

const Notepaper = (props) => {
  const styles = {
    paper: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: -100,
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#FFFFE0",
    },
    lines: {
      width: "100%",
      height: "var(--sp-vert-unit)",
      outlineBottom: "1px solid lightblue",
    },
  };

  const getLines = () => {
    let result = [];
    for (let i = 0; i < 60; i++) {
      result.push(<div style={styles.lines}></div>);
    }
    return result;
  };

  return <div style={styles.paper}>{getLines()}</div>;
};

export default Notepaper;
