import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useRef } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import OutsideAlerter from "@/components/OutsideAlerter";
import { useSelector } from "react-redux";
import { selectColors, selectVariants } from "@/store/colorsSlice";
import { getTextColorFromHex } from "@/dev/utils/colorUtils";

const DropdownOption = (props) => {
  const handleSelect = (e) => {
    props.onSelect({
      key: props.label,
      value: props.value,
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

const ColorDropdown = ({ defaultValue, onSelect, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const colors = useSelector(selectColors);
  const variants = useSelector(selectVariants);
  const [current, setCurrent] = useState(defaultValue);

  useEffect(() => {
    setCurrent(defaultValue);
  }, []);

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
    // setCurrent(obj);
    // onSelect(obj); //to parent
    // setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    if (colors == undefined) return <li>"Loading..."</li>;
    Object.keys(colors).map((key) => {
      result.push(
        <DropdownOption
          key={key}
          onSelect={handleSelect}
          value={colors[key]}
          label={key}
          style={{
            backgroundColor: colors[key],
            color: getTextColorFromHex(colors[key]),
          }}
        />
      );
    });
    Object.keys(variants).map((key) => {
      result.push(
        <DropdownOption
          key={key}
          onSelect={handleSelect}
          value={variants[key]}
          label={key}
          style={{
            backgroundColor: variants[key],
            color: getTextColorFromHex(variants[key]),
          }}
        />
      );
    });
    return result;
  };

  const valToKey = (val) => {
    let str = val;
    if (val.startsWith("var")) {
      str = val.substring(10);
      str = str.slice(0, -1);
    }
    return str;
  };

  return (
    <OutsideAlerter
      key={Math.random()}
      onClickOutside={closeMe}
      className={css.dropdown}
    >
      <>
        <div className={css.dropbtn} onClick={handleClick}>
          <span
            style={{
              backgroundColor: current,
              width: "100%",
              color: getTextColorFromHex(current),
            }}
          >
            {valToKey(current)}
          </span>{" "}
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

ColorDropdown.propTypes = {
  defaultValue: PropTypes.string.isRequired, //"white" or "var(--clr-...)" or hex
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ColorDropdown;
