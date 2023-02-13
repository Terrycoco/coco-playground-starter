import { useTheme } from "@/hooks";

const StyleForm = ({ section, element, ...props }) => {
  const { theme, setTheme } = useTheme();

  const styles = {
    element: {
      fontWeight: "bold",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "50% 50%",
    },
    prop: {
      fontWeight: "bold",
      border: "1px solid gray",
    },
    val: {
      fontWeight: "normal",
      border: "1px solid gray",
      textAlign: "left",
      paddingLeft: "10px",
    },
  };

  const renderElement = () => {
    let obj = theme[section][element];
    let result = [];
    for (const p in obj) {
      result.push(
        <div style={styles.row}>
          <div style={styles.prop}>{p}</div>
          <div style={styles.val}>{obj[p]}</div>
        </div>
      );
    }

    return result;
  };

  return (
    <div>
      <div style={styles.element}>{renderElement()}</div>
    </div>
  );
};

export default StyleForm;
