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

  const styles = {
    dropdown: {
      position: "relative",
      display: "block",
      width: "100%" /*takes width of parent */,
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

    //   .dropdowncontent {
    //     display: none"
    //     min-width: 98%"
    //     max-height: 0" /* this will change on open */
    //     position: absolute"
    //     top: 22px"
    //     height: 0"
    //     background-color: var(--clr-whitish)"
    //     border: 0px 1px 1px 1px solid darkgray"
    //     margin-left: 1px"
    //     margin-right: 1%"
    //     padding: 0"
    //     z-index: 5"
    //     transition: max-height 1s"
    //     border-radius: 1px"
    //   }

    //   .open {
    //     display: block"
    //     height: auto"
    //     max-height: 200px"
    //     overflow-y: scroll"
    //   }
  };

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
      className={styles.dropdown}
    >
      <>
        <div className={css.dropbtn} onClick={handleClick}>
          <span style={{ backgroundColor: current, padding: 0 }}></span>{" "}
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

export default ColorPickerDropdown;
