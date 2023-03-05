import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import { ColorDropdown, FontDropdown } from "@/dev/components/dropdowns";
import Slider from "@/dev/components/Slider";

const TextForm = ({ styleObj, section, element, device, ...props }) => {
  const [thisSO, setThisSO] = useState(styleObj);
  const { theme } = useTheme();

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

  const recalcFonts = (e) => {};

  const styles = {
    form: {
      width: "100%",
      backgroundColor: "transparent",
      zIndex: 10,
      position: "fixed",
      top: "8rem",
      right: "2rem",
      maxWidth: "40rem",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "var(--clr-primary)",
      fontFamily: "var(--font-display)",
      marginBottom: ".5rem",
      marginTop: "2rem",
    },

    row: {
      backgroundColor: "white",
      display: "grid",
      gridTemplateColumns: "40% 60%",
    },
    prop: {
      border: "1px solid gray",
      fontFamily: "var(--font-body)",
      fontWeight: "normal",
      fontSize: "1.75rem",
      paddingLeft: "1rem",
      display: "flex",
      alignItems: "center",
    },
    val: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: "normal",
      border: "1px solid gray",
      textAlign: "right",
      padding: "1rem",
      fontSize: "1.5rem",
      fontFamily: "var(--font-body)",
    },
  };

  return (
    <div>
      <div style={styles.form} onClick={handleClick}>
        <div style={styles.heading}>content</div>

        <div key={"base-size-levels"} style={styles.row}>
          <div style={styles.prop}>headingLevels</div>
          <div style={styles.val}>3</div>
        </div>

        <div style={styles.heading}>{device}</div>

        <div key={"base-size-row"} style={styles.row}>
          <div style={styles.prop}>baseFontSize</div>
          <div style={styles.val}>{theme.baseFontSizes[device]}</div>
        </div>
        <div key={"font-ratio"} style={styles.row}>
          <div style={styles.prop}>fontRatio</div>
          <div style={styles.val}>
            <span>Classic</span>
            <button>Recalc</button>
          </div>
        </div>

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
              min="100"
              max="300"
              defaultValue={styleObj.lineHeight}
              onChange={handleValueChange}
              suf="%"
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

        {styleObj.maxWidth ? (
          <div key={"width-row"} style={styles.row}>
            <div style={styles.prop}>maxWidth</div>
            <div style={styles.val}>
              <Slider
                id="maxWidth"
                min="50"
                max="90"
                defaultValue={styleObj.maxWidth}
                onChange={handleValueChange}
                suf="ch"
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TextForm;
