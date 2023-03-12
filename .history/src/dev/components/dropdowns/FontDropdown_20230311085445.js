import { useState, useEffect } from "react";
import css from "./dropdowns.module.css";
import { mdiAlphaPBox, mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import { getFontsArray } from "@/utils/fonts";

const options = getFontsArray();
console.log("options:", options);

const DropdownOption = (props) => {
  const handleSelect = (e) => {
    props.onSelect(props.value, props.label);
  };

  return (
    <li
      key={props.value}
      data-value={props.value}
      style={props.style}
      onClick={handleSelect}
    >
      {props.label}
    </li>
  );
};

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState({ value: null, label: "Select..." });

  useEffect(() => {
    if (props.defaultValue) {
      let v = options.find((item) => item.label === props.defaultValue);
      setCurrent(v);
    }
  }, []);

  useEffect(() => {
    let v = options.find((item) => item.label === props.defaultValue);
    setCurrent(v);
  }, [props.defaultValue]);

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

  const handleSelect = (newval, newlabel) => {
    setVal(newval);
    setLabel(newlabel);
    props.onSelect(newval);
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    options.map((opt) => {
      result.push(
        <DropdownOption
          onSelect={handleSelect}
          style={{ fontFamily: opt.value }}
          value={opt.value}
          label={opt.label}
        />
      );
    });
    return result;
  };

  return (
    <div className={css.dropdown}>
      <div className={css.dropbtn} onClick={handleClick}>
        <span style={{ fontFamily: `${current.value}` }} className={css.value}>
          {current.label}
        </span>{" "}
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
