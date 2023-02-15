import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import { ColorDropdown, FontDropdown } from "@/dev/components/dropdowns";

const StyleForm = ({ styleObj, section, element, ...props }) => {
  const { theme, setTheme } = useTheme();
  const [thisSO, setThisSO] = useState(styleObj);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setThisSO(styleObj);
    console.log("something changed! old", thisSO, "new", styleObj);
  }, [styleObj, thisSO]);

  const handleChange = (e) => {
    //do nothing here
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleBlur = (e) => {
    let propname = e.target.dataset.propname;
    if (thisSO[propname] !== e.target.value) {
      //console.log("property to change:", propname);
      let newtheme = Object.assign({}, theme);
      newtheme[section][element][propname] = e.target.value;
      //  console.log("newtheme:", newtheme);
      setTheme(newtheme);
    }
  };

  const styles = {
    form: {
      width: "100%",
      backgroundColor: theme.colors.whitish,
      padding: "5%",
      zIndex: 10,
      position: "fixed",
      top: "20px",
      right: "0px",
      maxWidth: "300px",
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
      gridTemplateColumns: "35% 60%",
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
    let result = [];
    for (const p in thisSO) {
      if (p.toLowerCase().includes("color")) {
        result.push(
          <div id={p} style={styles.row}>
            <div style={styles.prop}>{p}</div>
            <ColorDropdown
              key={`clr-${section}${element}${p}`}
              section={section}
              element={element}
              property={p}
            />
          </div>
        );
      } else if (p.toLowerCase().includes("fontfamily")) {
        result.push(
          <div id={p} style={styles.row}>
            <div style={styles.prop}>{p}</div>
            <FontDropdown
              key={`font-${section}${element}${p}`}
              section={section}
              element={element}
              property={p}
            />
          </div>
        );
      } else {
        result.push(
          <div id={p} style={styles.row}>
            <div style={styles.prop}>{p}</div>
            <input
              type="text"
              key={`${section}-${element}-${p}`}
              data-propname={p}
              defaultValue={thisSO[p]}
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

  return thisSO ? (
    <>
      <div style={styles.form} onClick={handleClick}>
        <div style={styles.heading}>{element}</div>
        <div style={styles.element}>{renderElement()}</div>
      </div>
    </>
  ) : null;
};

export default StyleForm;
