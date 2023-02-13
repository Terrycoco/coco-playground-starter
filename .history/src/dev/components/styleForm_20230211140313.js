import { useTheme } from "@/hooks";

const StyleForm = ({ section, element, ...props }) => {
  const { theme, setTheme } = useTheme();

  const styles = {
    heading: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    element: {
      fontWeight: "normal",
      fontFamily: "Arial",
      fontSize: "16px",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "50% 50%",
    },
    prop: {
      fontWeight: "bold",
      border: "1px solid gray",
      padding: "10px",
    },
    val: {
      fontWeight: "normal",
      border: "1px solid gray",
      textAlign: "left",
      padding: "10px",
    },
  };

  const renderElement = () => {
    let obj = theme[section][element];
    let result = [];
    for (const p in obj) {
      result.push(
        <div style={styles.row}>
          <div style={styles.prop}>{p}</div>
          <input type="text" value={obj[p]} style={styles.val} />
        </div>
      );
    }

    return result;
  };

  return (
    <div>
      <div style={styles.heading}>{element}</div>
      <div style={styles.element}>{renderElement()}</div>
    </div>
  );
};

export default StyleForm;
