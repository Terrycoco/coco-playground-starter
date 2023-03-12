import { useState } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import { getFontVariable } from "@/utils/fonts";

const DropdownOption = (props) => {
  const handleSelect = () => {
    props.onSelect(e.target.dataset.value);
  };

  return (
    <li data-value={props.value} style={props.style} onClick={handleSelect}>
      {props.value}
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
          style={{ fontFamily: getFontVariable(opt) }}
          value={opt}
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

      <ul className={getClass()}>
        <li
          data-value="Rubik"
          style={{ fontFamily: "var(--font-rubik)" }}
          onClick={handleSelect}
        >
          Option 1
        </li>
        <li
          data-value="Gelasio"
          style={{ fontFamily: "var(--font-gelasio)" }}
          onClick={handleSelect}
        >
          Option 2
        </li>
        <li
          data-value="Oleo Script"
          style={{ fontFamily: "var(--font-oleo-script)" }}
          onClick={handleSelect}
        >
          Option 3
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
