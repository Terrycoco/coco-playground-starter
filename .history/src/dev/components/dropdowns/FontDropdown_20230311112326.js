import { useState, useEffect } from "react";
import css from "./dropdowns.module.css";
import { mdiAlphaPBox, mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";

const DropdownOption = (props) => {
  const handleSelect = (e) => {
    props.onSelect(props.value, props.label);
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

const Dropdown = ({ options, defaultValue, onSelect, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState({ value: null, label: "Select..." });

  useEffect(() => {
    if (defaultValue) {
      let v = options.find((item) => item.label === defaultValue);
      setCurrent(v);
    }
  }, []);

  useEffect(() => {
    let v = options.find((item) => item.label === defaultValue);
    setCurrent(v);
  }, [defaultValue]);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const getClass = () => {
    if (isOpen) {
      return `${css.dropdowncontent} ${css.open}`;
    } else {
      return css.dropdowncontent;
    }
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  const handleSelect = (newval, newlabel) => {
    setCurrent({ value: newval, label: newlabel });
    onSelect({ value: newval, label: newlabel });
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    options.map((opt) => {
      result.push(
        <DropdownOption
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
    <div className={css.dropdown} onMouseLeave={handleBlur}>
      <div className={css.dropbtn} onClick={handleClick}>
        <span className={css.value}>{current.label}</span>{" "}
        <IconButton
          type={mdiMenuDown}
          color="darkgray"
          onClick={handleClick}
          style={{ borderLeft: "1px solid lightgray" }}
        />
      </div>

      <ul className={getClass()}>{getOptions()}</ul>
    </div>
  );
};

export default Dropdown;
