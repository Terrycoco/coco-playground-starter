import { useTheme } from "@/hooks";

const StyleForm = ({ section, element, ...props }) => {
  const { theme, setTheme } = useTheme();

  const styles = {
    element: {
      fontWeight: "bold",
      display: "grid",
      gridTemplateColumns: "auto auto",
    },
    row: {
      display: "flex",
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
      console.log(p, obj[p]);
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
