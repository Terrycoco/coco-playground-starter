import { ChromePicker } from "react-color";
import { useState } from "react";
import { Button } from "@/components/buttons";

const ColorPicker = (props) => {
  const [background, setBackground] = useState("#fff");
  const [color, setColor] = useState(props.color ? props.color : "#fff");

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };

  const handleChange = (color) => {
    setColor(color);
  };

  const handleChangeComplete = (color) => {
    // setBackground({ background: color.hex });
    props.onSelect(color.hex); //to parent
  };

  const preventClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClose = () => {
    props.onClose(color.hex);
  };

  return (
    <div style={styles.container} onClose={handleClose} onClick={preventClose}>
      <ChromePicker
        color={color}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
      />
      <Button>Close</Button>
    </div>
  );
};

export default ColorPicker;
