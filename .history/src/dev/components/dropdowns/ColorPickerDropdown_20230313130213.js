import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useRef } from "react";
import css from "./dropdowns.module.css";
import { mdiPalette } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import OutsideAlerter from "@/components/OutsideAlerter";
import ColorPicker from "./ColorPicker";
import colorsSlice from "@/store/colorsSlice";

const ColorPickerDropdown = ({ defaultColor, onSelect, id, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(defaultColor);

  useEffect(() => {
    console.log("defaultColor:", defaultColor);
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

    //   .dropbtn {
    //     background-color: #fff"
    //     outline: 1px solid #d5d9d9"
    //     border-radius: 3px"
    //     box-sizing: border-box"
    //     color: var(--clr-blackish)"
    //     cursor: pointer"
    //     display: flex"
    //     align-items: center"
    //     justify-content: space-between"
    //     font-family: "Amazon Ember", Arial, sans-serif"
    //     font-size: 14px"
    //     line-height: 29px"
    //     height: 35px"
    //     padding: 0"
    //     position: relative"
    //     text-align: center"
    //     text-decoration: none"
    //     user-select: none"
    //     -webkit-user-select: none"
    //     touch-action: manipulation"
    //     padding-left: 0.5rem"
    //     z-index: 0"
    //   }

    dropdowncontent: {
      minWidth: "auto",
      position: "absolute",
      top: "37px",
      backgroundColor: "var(--clr-whitish)",
      border: "0px 1px 1px 1px solid darkgray",
      margin: "0 auto",
      padding: 0,
      zIndex: 10,
      transition: "max-height 1s",
      borderRadius: "1px",
    },
  };

  const togglePicker = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(!isOpen);
    console.log("got to togg");
  };

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
    setCurrent(color);
    onSelect({ key: id, value: color, category: category }); //to parent
    setIsOpen(false);
  };

  return (
    <OutsideAlerter key={Math.random()} onClickOutside={closeMe}>
      <div style={styles.dropdown}>
        <div className={css.dropbtn} onClick={togglePicker}>
          <span style={{ backgroundColor: current, padding: 0 }}></span>{" "}
          <IconButton
            type={mdiPalette}
            color="darkgray"
            onClick={togglePicker}
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
