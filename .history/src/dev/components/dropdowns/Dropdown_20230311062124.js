import { useState } from "react";
import css from "./dropdowns.module.css";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

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

  const getStyle = (font) => {
    return {
      fontFamily: font,
    };
  };

  const handleSelect = (e) => {
    console.log("clicked", e.target.dataset.value);
  };

  return (
    <div className={css.dropdown}>
      <div className={css.dropbtn} onClick={handleClick}>
        Click me
      </div>
      <ul className={getClass()}>
        <li data-value="Rubik" style={getStyle("Rubik")} onClick={handleSelect}>
          Option 1
        </li>
        <li data-value="Gelasio" onClick={handleSelect}>
          Option 2
        </li>
        <li data-value="Oleo Script" onClick={handleSelect}>
          Option 3
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
