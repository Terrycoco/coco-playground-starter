import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useId } from "react";
import css from "./dropdowns.module.css";
import { mdiMenuDown } from "@mdi/js";
import { IconButton } from "@/components/buttons";
import OutsideAlerter from "@/components/OutsideAlerter";
import { useSelector } from "react-redux";
import { selectHeadingCount, updateHeadingCount } from "@/store/fontSizesSlice";
import { selectVariables } from "@/store/variablesSlice";

const HeadingCountDropdown = (props) => {
  const headingCount = useSelector(selectHeadingCount);
  const variables = useSelector(selectVariables);
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(1);

  let styles = {
    dropdown: {
      position: "relative",
      display: "block",
      width: "auto", /*takes width of parent */,
    },
  };

  useEffect(() => {
    setCurrent(headingCount);
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

  const handleSelect = (e) => {
    console.log(e.target);
    //onSelect(val); //right up to parent (form)
    setIsOpen(false);
  };

  if (current !== undefined) {
    return (
      <OutsideAlerter
        key={Math.random()}
        onClickOutside={closeMe}
        className={styles.dropdown}
      >
        <>
          <div className={css.dropbtn} onClick={handleClick}>
            <span style={{ fontFamily: variables["var(--font-forms)"] }}>
              {current}
            </span>{" "}
            <IconButton
              type={mdiMenuDown}
              color="darkgray"
              onClick={handleClick}
              style={{ borderLeft: "1px solid lightgray" }}
            />
          </div>

          <ul className={getClass()}>
            <li
              key="hc1"
              data-value={1}
              onClick={handleSelect}
              style={{
                fontFamily: variables["var(--font-forms)"],
              }}
            >
              1
            </li>
          </ul>
        </>
      </OutsideAlerter>
    );
  } else {
    return null;
  }
};

export default HeadingCountDropdown;
