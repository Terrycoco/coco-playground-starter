import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import {
  ColorDropdown,
  FontDropdown,
  RatioDropdown,
} from "@/dev/components/dropdowns";
import Slider from "@/dev/components/forms";
let calcFontSizes = require("@/dev/utils/scaleUtils");
import styles from "./forms.module.css";

const TextForm = ({ styleObj, section, element, device, ...props }) => {
  const [thisSO, setThisSO] = useState(styleObj);
  const [keyPref, setKeyPref] = useState(element + device);
  const { theme, setTheme } = useTheme();
  const [fontRatio, setFontRatio] = useState(2);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (element + device !== keyPref) {
      setThisSO(styleObj);
      setKeyPref(element + device);
      setFontRatio(theme.screens[device].fontRatio);
    }
  }, [styleObj, thisSO, element, device, keyPref, fontRatio]);

  const handleChange = (e) => {
    //do nothing here
  };

  const handleValueChange = (id, newval) => {
    let newobj = Object.assign({}, styleObj);

    console.log("got to textform:", id, newval);

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

  const updateFontRatio = (newval) => {
    setFontRatio(newval);
  };

  const recalcFonts = (e) => {
    let bodySize = theme.screens[device].bodyFontSize;
    let fontSizes = calcFontSizes(bodySize, 3, fontRatio);
    let newtheme = Object.assign({}, theme);
    //console.log("newtheme:", newtheme);
    //eventually each device will have own section
    //now just mobile (default)
    for (const level in fontSizes) {
      let obj = { ...newtheme.text[level] };
      obj.fontSize = fontSizes[level];
      newtheme.text[level] = obj;
    }
    //setTheme(newtheme);
    console.log("newtheme:", newtheme);
    setTheme(newtheme);
  };

  return (
    <div>
      <div className={styles.form} onClick={handleClick}>
        <div className={styles.heading}>project</div>

        <div key={"base-size-levels"} className={styles.row}>
          <div className={styles.prop}>headingLevels</div>
          <div className={styles.val}>3</div>
        </div>

        <div className={styles.heading}>{device}</div>

        <div key={`${keyPref}base-unit`} style={styles.row}>
          <div className={styles.prop}>baseUnit</div>
          <div className={styles.val}>{theme.screens[device].baseUnit}</div>
        </div>
        <div key={`${keyPref}body-font-size`} style={styles.row}>
          <div className={styles.prop}>bodyFontSize</div>
          <div className={styles.val}>{theme.screens[device].bodyFontSize}</div>
        </div>
        <div key={`${keyPref}font-ratio`} style={styles.row}>
          <div className={styles.prop}>fontRatio</div>
          <div className={styles.val}>
            <RatioDropdown
              defaultValue={theme.screens[device].fontRatio}
              onChange={updateFontRatio}
            />
            <button onClick={recalcFonts}>Recalc</button>
          </div>
        </div>

        <div className={styles.heading}>{element}</div>

        <div key={`${keyPref}font-row`} className={styles.row}>
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
          <div className={styles.prop}>fontSize</div>
          <div className={styles.val}>
            <Slider
              key={`${keyPref}fontSize}`}
              id="fontSize"
              min=".6000"
              max="6.0000"
              defaultValue={thisSO.fontSize}
              onChange={handleValueChange}
              suf="rem"
            />
          </div>
        </div>

        <div key={"lh-row"} style={styles.row}>
          <div className={styles.prop}>lineHeight</div>
          <div className={styles.val}>
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
          <div className={styles.prop}>fontWeight</div>
          <div className={styles.val}>
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
          <div className={styles.prop}>letterSpacing</div>
          <div className={styles.val}>
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
          <div className={styles.prop}>wordSpacing</div>
          <div className={styles.val}>
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
          <div key={"width-row"} className={styles.row}>
            <div className={styles.prop}>maxWidth</div>
            <div className={styles.val}>
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
