import { useState } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import { getAllFontsByVariable } from "@/utils/fonts";

const options = getAllFontsByVariable();
console.log("options:", options);

const DropdownOption = (props) => {
  const handleSelect = () => {
    props.onSelect(e.target.dataset.value);
  };

  return (
    <li data-value={props.value} style={props.style} onClick={handleSelect}>
      {props.label}
    </li>
  );
};

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [val, setVal] = useState(
    props.defaultValue ? props.defaultValue : "Select..."
  );

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

  const handleSelect = (e) => {
    setVal(e.target.dataset.value);
    props.onSelect(e.target.dataset.value);
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    for (const opt in props.options) {
      result.push(
        <DropdownOption
          onSelect={handleSelect}
          style={{ fontFamily: opt }}
          value={opt}
          label={options[opt]}
        />
      );
    }
    return result;
  };

  return (
    <div className={css.dropdown}>
      <div className={css.dropbtn} onClick={handleClick}>
        <span className={css.value}>{val}</span>{" "}
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
