import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import { ColorDropdown, FontDropdown } from "@/dev/components/dropdowns";
import Slider from "@/dev/components/Slider";

const TextForm = ({ styleObj, section, element, ...props }) => {
  // const { theme, setTheme } = useTheme();
  const [thisSO, setThisSO] = useState(styleObj);
  // const [fontWeight, setFontWeight] = useState(400);
  // const [fontSize, setFontSize] = useState(100);
  // const [fontStretch, setFontStretch] = useState(100);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (element) {
      setThisSO(styleObj);
      // setFontWeight(styleObj.fontWeight);
      // setFontSize(styleObj.fontSize);
      // setFontStretch(styleObj.fontStretch);
    }
  }, [styleObj, thisSO, element]);

  const handleChange = (e) => {
    //do nothing here
  };

  const handleValueChange = (id, newval) => {
    let newobj = Object.assign({}, styleObj);

    //exception if fontWeight change both fontWeight and fontVariationSettings
    if (id === "fontWeight") {
      newobj.fontVariationSettings = `"wght" ${newval}`;
    } else {
      newobj[id] = newval;
    }

    //set new obj to parent
    props.onChange(element, newobj);
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
      backgroundColor: "transparent",
      zIndex: 10,
      position: "fixed",
      top: "20px",
      right: "0px",
      maxWidth: "400px",
    },
    heading: {
      fontSize: "1.4rem",
      fontWeight: "bold",
      color: "var(--clr-primary)",
      fontFamily: "var(--font-body)",
      marginBottom: ".5rem",
    },
    element: {
      fontWeight: "normal",
      fontFamily: "var(--font-body)",
      fontSize: "16px",
    },
    row: {
      backgroundColor: "white",
      display: "grid",
      gridTemplateColumns: "50% 50%",
    },
    prop: {
      fontWeight: "bold",
      border: "1px solid gray",
      padding: "5%",
    },
    val: {
      fontWeight: "normal",
      border: "1px solid gray",
      textAlign: "left",
      padding: "10px",
      fontSize: "1rem",
    },
  };

  return (
    <>
      <div style={styles.form} onClick={handleClick}>
        <div style={styles.heading}>{element}</div>

        <div key={"font-row"} style={styles.row}>
          <div style={styles.prop}>font</div>
          <div style={styles.val}>
            <FontDropdown
              section={section}
              element={element}
              property="fontFamily"
            />
          </div>
        </div>

        <div key={"size-row"} style={styles.row}>
          <div style={styles.prop}>fontSize</div>
          <div style={styles.val}>
            <Slider
              id="fontSize"
              min="5"
              max="122"
              defaultValue={styleObj.fontSize}
              onChange={handleValueChange}
              suf="rem"
            />
          </div>
        </div>

        <div key={"lh-row"} style={styles.row}>
          <div style={styles.prop}>lineHeight</div>
          <div style={styles.val}>
            <Slider
              id="lineHeight"
              min="5"
              max="122"
              defaultValue={styleObj.lineHeight}
              onChange={handleValueChange}
              suf=""
            />
          </div>
        </div>

        <div key={"weight-row"} style={styles.row}>
          <div style={styles.prop}>fontWeight</div>
          <div style={styles.val}>
            <Slider
              id="fontWeight"
              min="1"
              max="1000"
              defaultValue={styleObj.fontWeight}
              onChange={handleValueChange}
              suf=""
            />
          </div>
        </div>

        <div key={"spacing-row"} style={styles.row}>
          <div style={styles.prop}>letterSpacing</div>
          <div style={styles.val}>
            <Slider
              id="letterSpacing"
              min="-5"
              max="8"
              defaultValue={styleObj.letterSpacing}
              onChange={handleValueChange}
              suf="px"
            />
          </div>
        </div>

        <div key={"wdspacing-row"} style={styles.row}>
          <div style={styles.prop}>wordSpacing</div>
          <div style={styles.val}>
            <Slider
              id="wordSpacing"
              min="-10"
              max="10"
              defaultValue={styleObj.wordSpacing}
              onChange={handleValueChange}
              suf="px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextForm;
