import { useState, useEffect, useCallback, useRef } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import { OutsideAlerter } from "@/components/OutsideAlerter";

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

const FontDropdown = ({ options, defaultValue, onSelect, ...props }) => {
  //create a ref to this dropdown
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState({
    value: "var(--font-lato)",
    label: "Select...",
  });

  const findOptionByLabel = useCallback(() => {
    let v = options.find((item) => item.label === defaultValue);
    setCurrent(v);
  }, [options]);

  useEffect(() => {
    if (defaultValue && options !== undefined) {
      findOptionByLabel();
    }
  }, []);

  useEffect(() => {
    findOptionByLabel();
  }, [defaultValue]);

  useEffect(() => {
    if (props.refresh > 0) {
      setIsOpen(false);
    }
  }, [props.refresh]);

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

  const handleSelect = (newval, newlabel) => {
    setCurrent({ value: newval, label: newlabel });
    onSelect({ value: newval, label: newlabel }); //to parent
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    if (options == undefined) return <li>"Loading..."</li>;
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
    <div className={css.dropdown} ref={ref}>
      <div className={css.dropbtn} tabIndex="{0}" onClick={handleClick}>
        <span style={{ fontFamily: current.value }}>{current.label}</span>{" "}
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

export default FontDropdown;
