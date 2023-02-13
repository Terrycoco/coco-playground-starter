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
    },
    val: {
      fontWeight: "normal",
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
