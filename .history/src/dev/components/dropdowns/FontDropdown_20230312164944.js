import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useRef } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import OutsideAlerter from "@/components/OutsideAlerter";

const DropdownOption = (props) => {
  const handleSelect = (e) => {
    props.onSelect({
      key: props.cat,
      value: props.value,
      label: props.label,
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

const FontDropdown = ({ options, defaultObj, onSelect, id }) => {
  const [isOpen, setIsOpen] = useState(false);
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
    if (options == undefined) return <li>"Loading..."</li>;
    options.map((opt) => {
      result.push(
        <DropdownOption
          cat={id}
          key={opt.value}
          onSelect={handleSelect}
          value={opt.value}
          label={opt.label}
          style={{ fontFamily: opt.value }}
        />
      );
    });
    return result;
  };

  return (
    <OutsideAlerter
      key={Math.random()}
      onclickoutside={closeMe}
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

FontDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  defaultObj: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default FontDropdown;
