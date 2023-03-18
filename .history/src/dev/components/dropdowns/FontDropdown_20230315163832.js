import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useRef } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import OutsideAlerter from "@/components/OutsideAlerter";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const DropdownOption = (props) => {
  const handleSelect = (e) => {
    props.onSelect({
      category: props.cat,
      name: props.name,
      fontVar: props.fontVar,
    }); //to parent
  };

  const getDisplay = () => {
    if (props.showCategory) {
      return [
        <span style={{ flexBasis: 1 }}>{props.category}</span>,
        <span>{props.name}</span>,
      ];
    } else {
      return props.name;
    }
  };

  return (
    <li
      key={`${props.value}${props.cat}`}
      data-value={props.value}
      onClick={handleSelect}
      style={{
        fontFamily: props.fontVar,
        display: props.showCategory ? "flex" : "block",
      }}
    >
      {getDisplay()}
    </li>
  );
};

const FontDropdown = ({ options, defaultObj, onSelect, id, showCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(defaultObj);

  useEffect(() => {
    setCurrent(defaultObj);
  }, [defaultObj]);

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
    setCurrent(obj);
    onSelect(obj); //to parent
    setIsOpen(false);
  };

  const getOptions = () => {
    let result = [];
    if (options == undefined) return <li>"Loading..."</li>;
    //is array (from all fonts )
    if (Array.isArray(options)) {
      options.map((opt) => {
        result.push(
          <DropdownOption
            cat={id} //this is either the category or the element
            key={`${opt.fontVar}${id}`}
            onSelect={handleSelect}
            fontVar={opt.fontVar}
            name={opt.name}
            category={opt.category}
            style={{ fontFamily: opt.fontVar }}
            showCategory={showCategory}
          />
        );
      });
    }
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
          <span style={{ fontFamily: current.fontVar }}>{current.name}</span>{" "}
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

FontDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  defaultObj: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  showCategory: PropTypes.bool,
};

export default FontDropdown;
