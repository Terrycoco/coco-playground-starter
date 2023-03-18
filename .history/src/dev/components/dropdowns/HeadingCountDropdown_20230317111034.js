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
      maxWidth: "auto",
      fontFamily: variables["var(--font-forms)"],
    },
    labelBlock: {
      display: "inline-flex",
      alignItems: "center",
    },
    label: {
      paddingRight: "1rem",
      fontSize: ".8rem",
      color: "gray",
    },
    content: {
      paddingRight: "1rem",
    },
    li: {
      color: "var(--clr-blackish75)",
      backgroundColor: "yellow",
      fontSize: "16px",
      textDecoration: "none",
      listStyleType: "none",
      display: "block",
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
        style={styles.dropdown}
      >
        <div style={styles.labelBlock}>
          <span style={styles.label}>Number of Headings</span>

          <div className={css.dropbtn} onClick={handleClick}>
            <span style={styles.content}>{current}</span>{" "}
            <IconButton
              type={mdiMenuDown}
              color="darkgray"
              onClick={handleClick}
              style={{ borderLeft: "1px solid lightgray" }}
            />
            <ul className={getClass()}>
              <li
                key="hc1"
                data-value={1}
                onClick={handleSelect}
                style={styles.li}
              >
                1
              </li>
            </ul>
          </div>
        </div>
      </OutsideAlerter>
    );
  } else {
    return null;
  }
};

export default HeadingCountDropdown;
