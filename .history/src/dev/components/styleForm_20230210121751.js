import { useTheme } from "@/hooks";

const StyleForm = ({ section, element, ...props }) => {
  const { theme, setTheme } = useTheme();

  const styles = {
    row: {
      border: "solid gray 1px",
    },
  };

  renderElement = () => {
    let obj = theme[section][element];

    for (p in obj) {
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
      <div style={styles.header}>
        {element}
        {renderElemenbt()}
      </div>
    </div>
  );
};

export default StyleForm;
