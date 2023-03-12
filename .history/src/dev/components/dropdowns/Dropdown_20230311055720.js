import { useState } from "react";
import css from "./dropdowns.module.css";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (e) => {
    console.log("clicked", e.target.dataset.value);
  };

  return (
    <div className={css.dropdown}>
      <div className={css.dropbtn} onClick={handleClick}>
        Click me
      </div>
      <ul className={`${css.dropdowncontent} ${isOpen ? css.open : ""}`}>
        <li data-value="1" onClick={handleSelect}>
          Option 1
        </li>
        <li data-value="2" onClick={handleSelect}>
          Option 2
        </li>
        <li data-value="3" onClick={handleSelect}>
          Option 3
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;