import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import ColorDropdown from "./dropdowns/ColorDropdown";

const StyleForm = ({ section, element, ...props }) => {
  const { theme, setTheme } = useTheme();
  const [styleObj, setStyleObj] = useState({});

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (element) {
      setStyleObj(Object.assign({}, theme[section][element]));
    }
  }, [section, element, theme]);

  const handleChange = (e) => {
    //do nothing here
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleBlur = (e) => {
    let propname = e.target.dataset.propname;
    if (styleObj[propname] !== e.target.value) {
      //console.log("property to change:", propname);
      let newtheme = Object.assign({}, theme);
      newtheme[section][element][propname] = e.target.value;
      //  console.log("newtheme:", newtheme);
      setTheme(newtheme);
    }
  };

  const styles = {
    form: {
      backgroundColor: theme.colorVariants.blackish[10],
      padding: "10%",
      zIndex: 10,
    },
    heading: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    element: {
      fontWeight: "normal",
      fontFamily: "Arial",
      fontSize: "16px",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "50% 50%",
    },
    prop: {
      fontWeight: "bold",
      border: "1px solid gray",
      padding: "10px",
    },
    val: {
      fontWeight: "normal",
      border: "1px solid gray",
      textAlign: "left",
      padding: "10px",
    },
  };

  const renderElement = () => {
    console.log("renderingObj:", styleObj);
    let result = [];
    for (const p in styleObj) {
      if (p.toLowerCase().includes("color")) {
        result.push(
          <div id={p} style={styles.row}>
            <div style={styles.prop}>{p}</div>
            <ColorDropdown section={section} element={element} property={p} />
          </div>
        );
      } else {
        result.push(
          <div id={p} style={styles.row}>
            <div style={styles.prop}>{p}</div>
            <input
              type="text"
              key={`${section}-${p}`}
              data-propname={p}
              defaultValue={styleObj[p]}
              style={styles.val}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        );
      }
    }

    return result;
  };

  return element ? (
    <>
      <div style={styles.form} onClick={handleClick}>
        <div style={styles.heading}>{element}</div>
        <div style={styles.element}>{renderElement()}</div>
      </div>
    </>
  ) : null;
};

export default StyleForm;
