import { useTheme } from "@/hooks";

const StyleForm = ({ section, element, ...props }) => {
  const { theme, setTheme } = useTheme();

  const styles = {
    element: {
      fontWeight: "bold",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "auto auto",
    },
    prop: {
      fontWeight: "bold",
      border: "1px solid gray",
    },
    val: {
      fontWeight: "normal",
      border: "1px solid gray",
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
