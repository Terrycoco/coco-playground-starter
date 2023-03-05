import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import { ColorDropdown, FontDropdown } from "@/dev/components/dropdowns";
import Slider from "@/dev/components/Slider";
import { calcFontSizes } from "@/dev/utils/scaleUtils";

const TextForm = ({ styleObj, section, element, device, ...props }) => {
  const [thisSO, setThisSO] = useState(styleObj);
  const [keyPref, setKeyPref] = useState(element + device);
  const { theme, setTheme } = useTheme();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (element + device !== keyPref) {
      setThisSO(styleObj);
      setKeyPref(element + device);
    }
  }, [styleObj, thisSO, element, device, keyPref]);

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

  const recalcFonts = (e) => {
    let fontSizes = calcFontSizes();
    let newtheme = Object.assign({}, theme);
    console.log("newtheme:", newtheme);
    //eventually each device will have own section
    //now just mobile (default)
    for (const level in fontSizes) {
      newtheme.text[level].fontSize = fontSizes[level];
    }
    //setTheme(newtheme);
    console.log("newtheme:", newtheme);
  };

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
        <div style={styles.heading}>project</div>

        <div key={"base-size-levels"} style={styles.row}>
          <div style={styles.prop}>headingLevels</div>
          <div style={styles.val}>3</div>
        </div>

        <div style={styles.heading}>{device}</div>

        <div key={"base-size-row"} style={styles.row}>
          <div style={styles.prop}>baseUnit</div>
          <div style={styles.val}>{theme.baseFontSizes[device]}</div>
        </div>
        <div key={"font-ratio"} style={styles.row}>
          <div style={styles.prop}>fontRatio</div>
          <div style={styles.val}>
            <span>Classic</span>
            <button onClick={recalcFonts}>Recalc</button>
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

        <div key={`${keyPref}size-row`} style={styles.row}>
          <div style={styles.prop}>fontSize</div>
          <div style={styles.val}>
            <Slider
              key={`${keyPref}fontSize}`}
              id="fontSize"
              min=".5000"
              max="15.500"
              defaultValue={thisSO.fontSize}
              onChange={handleValueChange}
              suf="rem"
            />
          </div>
        </div>

        <div key={"lh-row"} style={styles.row}>
          <div style={styles.prop}>lineHeight</div>
          <div style={styles.val}>
            <Slider
              key={`${keyPref}lineheight}`}
              id="lineHeight"
              min="100"
              max="300"
              defaultValue={thisSO.lineHeight}
              onChange={handleValueChange}
              suf="%"
            />
          </div>
        </div>

        <div key={"weight-row"} style={styles.row}>
          <div style={styles.prop}>fontWeight</div>
          <div style={styles.val}>
            <Slider
              key={`${keyPref}fontweight}`}
              id="fontWeight"
              min="1"
              max="1000"
              defaultValue={thisSO.fontWeight}
              onChange={handleValueChange}
              suf=""
            />
          </div>
        </div>

        <div key={"spacing-row"} style={styles.row}>
          <div style={styles.prop}>letterSpacing</div>
          <div style={styles.val}>
            <Slider
              key={`${keyPref}ls}`}
              id="letterSpacing"
              min="-5"
              max="8"
              defaultValue={thisSO.letterSpacing}
              onChange={handleValueChange}
              suf="px"
            />
          </div>
        </div>

        <div key={"wdspacing-row"} style={styles.row}>
          <div style={styles.prop}>wordSpacing</div>
          <div style={styles.val}>
            <Slider
              key={`${keyPref}wordsp}`}
              id="wordSpacing"
              min="-10"
              max="10"
              defaultValue={thisSO.wordSpacing}
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
