import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useRef } from "react";
import css from "./dropdowns.module.css";
import { mdiPalette, mdiUndo } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import OutsideAlerter from "@/components/OutsideAlerter";
import ColorPicker from "./ColorPicker";
import colorsSlice from "@/store/colorsSlice";

const ColorPickerDropdown = ({
  defaultColor,
  onSelect,
  onReset,
  id,
  category,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(defaultColor);

  useEffect(() => {
    setCurrent(defaultColor);
  }, [defaultColor]);

  const styles = {
    dropdown: {
      position: "relative",
      display: "block",
      width: "100%" /*takes width of parent */,
    },
    closed: {
      display: "none",
      height: 0,
      maxHeight: 0,
      overflowY: "none",
    },
    open: {
      display: "block",
      height: "auto",
      maxHeight: "400px",
      overflowY: "scroll",
    },

    display: {
      outline: "1px solid #d5d9d9",
      borderRadius: "3px",
      boxSizing: "border-box",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      lineHeight: "29px",
      height: "35px",
      padding: 0,
      position: "relative",
      textAlign: "center",
      textDecoration: "none",
      userSelect: "none",
      WebkitUserSelect: "none",
      touchAction: "manipulation",
      zIndex: 0,
    },

    dropdowncontent: {
      width: "auto",
      position: "absolute",
      top: "37px",
      backgroundColor: "var(--clr-whitish)",
      border: "0px 1px 1px 1px solid darkgray",
      zIndex: 10,
      transition: "max-height 1s",
      borderRadius: "1px",
      overflowY: "none",
    },
  };

  const togglePicker = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(!isOpen);
    console.log("got to togg");
  };

  const undoSelection = (e) => {};

  const getClass = () => {
    let s;
    if (isOpen === true) {
      s = { ...styles.open, ...styles.dropdowncontent };
    } else {
      s = { ...styles.closed, ...styles.dropdowncontent };
    }
    console.log(s);
    return s;
  };

  const closeMe = () => {
    setIsOpen(false);
  };

  const handleSelect = (color) => {
    console.log("color selected is:", color);
    setCurrent(color);
    onSelect({ key: id, value: color, category: category }); //to parent
    setIsOpen(false);
  };

  return (
    <OutsideAlerter key={Math.random()} onClickOutside={closeMe}>
      <div style={styles.dropdown}>
        <div style={styles.display}>
          <span
            onClick={togglePicker}
            style={{
              backgroundColor: current,
              padding: 0,
              width: "100%",
              height: "100%",
            }}
          ></span>{" "}
          <IconButton
            type={mdiPalette}
            color="darkgray"
            onClick={togglePicker}
            style={{ borderLeft: "1px solid lightgray" }}
          />
          <IconButton
            type={mdiUndo}
            color="darkgray"
            onClick={undoSelection}
            style={{ borderLeft: "1px solid lightgray" }}
          />
        </div>

        <div style={getClass()}>
          <ColorPicker
            key={id}
            color={current}
            onSelect={handleSelect}
            onClose={closeMe}
          />
        </div>
      </div>
    </OutsideAlerter>
  );
};

ColorPickerDropdown.propTypes = {
  defaultColor: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ColorPickerDropdown;
