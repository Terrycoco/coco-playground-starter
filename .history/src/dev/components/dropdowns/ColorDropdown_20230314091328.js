import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useRef } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import OutsideAlerter from "@/components/OutsideAlerter";
import { useSelector } from "react-redux";
import { selectColors } from "@/store/colorsSlice";

const DropdownOption = (props) => {
  const handleSelect = (e) => {
    props.onSelect({
      key: props.key,
      value: props.value,
    }); //to parent
  };

  return (
    <li
      key={props.value}
      data-value={props.value}
      onClick={handleSelect}
      {...props}
    >
      {props.label}
    </li>
  );
};

const ColorDropdown = ({ defaultKey, onSelect, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const colors = useSelector(selectColors);
  const [current, setCurrent] = useState(defaultObj);

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

  const handleSelect = (obj) => {
    setCurrent(obj);
    onSelect(obj); //to parent
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    if (colors == undefined) return <li>"Loading..."</li>;
    Object.keys(colors).map((key) => {
      result.push(
        <DropdownOption
          cat={key}
          key={key}
          onSelect={handleSelect}
          value={colors[key]}
          label={key}
          style={{ backgroundColor: colors[key] }}
        />
      );
    });
    return result;
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
            type={mdiMenuDown}
            color="darkgray"
            onClick={handleClick}
            style={{ borderLeft: "1px solid lightgray" }}
          />
        </div>

        <ul className={getClass()}>{getOptions()}</ul>
      </>
    </OutsideAlerter>
  );
};

ColorDropdown.propTypes = {
  defaultKey: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ColorDropdown;
