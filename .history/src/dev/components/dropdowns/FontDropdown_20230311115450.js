import { useState, useEffect } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
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

const Dropdown = ({ options, defaultValue, onSelect, close, ...props }) => {
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

  useEffect(() => {
    console.log("got to close effect");
    if (close == true && isOpen == true) {
      setIsOpen(false);
    }
  }, [close]);

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
    setCurrent({ value: newval, label: newlabel });
    onSelect({ value: newval, label: newlabel });
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    if (options == undefined) return <div>"Loading..."</div>;
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
    <div className={css.dropdown}>
      <div className={css.dropbtn} onClick={handleClick}>
        <span style={{ fontFamily: current.value }} className={css.value}>
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
