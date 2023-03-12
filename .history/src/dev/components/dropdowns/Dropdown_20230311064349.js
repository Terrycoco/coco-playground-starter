import { useState } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";

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

  const handleSelect = (e) => {
    console.log("clicked", e.target.dataset.value);
  };

  return (
    <div className={css.dropdown}>
      <div className={css.dropbtn} onClick={handleClick}>
        <span></span> <IconButton type={mdiMenuDown} color="darkgray" />
      </div>

      <ul className={getClass()}>
        <li
          data-value="Rubik"
          style={{ fontFamily: "Rubik" }}
          onClick={handleSelect}
        >
          Option 1
        </li>
        <li
          data-value="Gelasio"
          style={{ fontFamily: "Gelasio" }}
          onClick={handleSelect}
        >
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
