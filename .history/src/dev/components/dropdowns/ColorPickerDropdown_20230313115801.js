import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useRef } from "react";
import css from "./dropdowns.module.css";
import { mdiPalette } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import OutsideAlerter from "@/components/OutsideAlerter";
import ColorPicker from "./ColorPicker";

const ColorPickerDropdown = ({ defaultColor, onSelect, id, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(defaultColor);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(true);
  };

  const getClass = () => {
    if (isOpen) {
      return `${css.dropdowncontent} ${css.open}`;
    } else {
      return css.dropdowncontent;
    }
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
    <OutsideAlerter
      key={Math.random()}
      onClickOutside={closeMe}
      className={css.dropdown}
    >
      <>
        <div className={css.dropbtn} onClick={handleClick}>
          <span style={{ fontFamily: current.value }}>{current.label}</span>{" "}
          <IconButton
            type={mdiPalette}
            color="darkgray"
            onClick={handleClick}
            style={{ borderLeft: "1px solid lightgray" }}
          />
        </div>

        <div className={getClass()}>
          <ColorPicker
            color={current}
            onSelect={handleSelect}
            onClose={closeMe}
          />
        </div>
      </>
    </OutsideAlerter>
  );
};

ColorPickerDropdown.propTypes = {
  defaultColor: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default FontDropdown;
