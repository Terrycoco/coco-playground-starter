import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useRef } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import OutsideAlerter from "@/components/OutsideAlerter";
import { useSelector } from "react-redux";
import { selectColors, selectVariants } from "@/store/colorsSlice";
import { getTextColorFromHex, isValidHexCode } from "@/dev/utils/colorUtils";

const valToKey = (val) => {
  let str = val;
  if (val.startsWith("var")) {
    str = val.substring(10);
    str = str.slice(0, -1);
  }
  return str;
};

const DropdownOption = ({
  element,
  propName,
  label,
  value,
  onSelect,
  isVariant = false,
}) => {
  const handleSelect = (e) => {
    e.stopPropagation();
    onSelect({
      key: label,
      value: value,
      isVariant: isVariant,
    }); //to parent
  };

  return (
    <li
      key={`${element}${propName}${value}`}
      data-value={value}
      onClick={handleSelect}
      style={{
        backgroundColor: value,
        color: getTextColorFromHex(value),
        display: "flex",
        justifyContent: "center",
      }}
    >
      {label}
    </li>
  );
};

const ColorDropdown = ({ element, propName, defaultValue, onSelect, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const colors = useSelector(selectColors);
  const variants = useSelector(selectVariants);
  const [currentValue, setCurrentValue] = useState();
  const [currentKey, setCurrentKey] = useState();

  useEffect(() => {
    //look up hex code if possible
    if (!isValidHexCode(defaultValue)) {
      let key = valToKey(defaultValue);
      setCurrentKey(key);
      if (colors[key]) {
        setCurrentValue(colors[key]);
      } else if (variants[key]) {
        setCurrentValue(variants[key]);
      }
    } else {
      setCurrentValue(defaultValue); //last resort
    }
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
    setCurrentKey(obj.key);
    setCurrentValue(obj.value);
    onSelect({
      element: element,
      propName: propName,
      key: obj.key,
      value: obj.value,
      isVariant: obj.isVariant,
    }); //to form
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    if (colors == undefined) return <li>"Loading..."</li>;

    Object.keys(colors).map((varname) => {
      result.push(
        <DropdownOption
          id={varname}
          key={`${element}${propName}${varname}`}
          onSelect={handleSelect}
          value={colors[varname]}
          label={valToKey(varname)}
          isVariant={false}
        />
      );
    });
    result.push(
      <div style={{ height: "1rem", color: "gray", marginTop: ".5rem" }}>
        VARIANTS
      </div>
    );
    Object.keys(variants).map((varname) => {
      result.push(
        <DropdownOption
          key={`${element}${propName}${varname}`}
          element={element}
          propName={propName}
          id={varname}
          onSelect={handleSelect}
          value={variants[varname]}
          label={valToKey(varname)}
          isVariant={true}
        />
      );
    });

    return result;
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
              backgroundColor: currentValue,
              width: "100%",
              color: getTextColorFromHex(currentValue),
            }}
          >
            {currentKey}
          </span>
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
  element: PropTypes.string.isRequired,
  propName: PropTypes.string.isRequired,
};

export default ColorDropdown;
