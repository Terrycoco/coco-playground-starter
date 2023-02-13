import { useTheme } from "@/hooks";

const StyleForm = ({ section, element, ...props }) => {
  const { theme, setTheme } = useTheme();

  const styles = {
    row: {
      border: "solid gray 1px",
      display: "flex",
    },
    element: {
      fontWeight: "bold",
    },
  };

  const renderElement = () => {
    let obj = theme[section][element];

    for (const p in obj) {
      console.log(p, obj[p]);
      return (
        <div style={styles.row}>
          <div>{p}</div>
          <div>{obj.p}</div>
        </div>
      );
    }
  };

  return (
    <div>
      <div style={styles.element}>
        {element}
        {renderElement()}
      </div>
    </div>
  );
};

export default StyleForm;
