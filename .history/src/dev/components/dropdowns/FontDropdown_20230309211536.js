import Select, { components } from "react-select";
import { Fragment, useState, useCallback, useEffect, useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllFontsByVariable,
  getFontVariable,
  getFontNameFromVar,
} from "@/utils/fonts";
import { selectFonts, updateFont } from "@/store/fontsSlice";
import { selectText, updateText } from "@/store/textSlice";

const FontDropdown = ({ section, element, isBaseLevel, ...props }) => {
  const dispatch = useDispatch();
  const themedFonts = useSelector(selectFonts);
  const elementFonts = useSelector(selectText);
  const allFonts = getAllFontsByVariable();
  const [currentVal, setCurrentVal] = useState(null);
  const [currentLabel, setCurrentLabel] = useState(null);

  useEffect(() => {
    setCurrent();
  }, []);

  // useEffect(() => {
  //   setCurrent();
  // }, [theme, section, element]);

  const setCurrent = useCallback(() => {
    let val, label;
    if (isBaseLevel == true) {
      //theme.fonts.body = "Gelasio"
      val = getFontVariable(themedFonts[element]);
      label = themedFonts[element];
    } else {
      //theme.text.p.fontFamily = "var(--font-body)"
      val = elementFonts[element].fontFamily;
      if (val.startsWith("var(")) {
        if (allFonts.hasOwnProperty(val)) {
          label = allFonts[val];
        } else {
          label = themedFonts[getFontNameFromVar(val)];
        }
      }
    }
    setCurrentVal(val);
    setCurrentLabel(label);
    console.log("val:", val, "label:", label);
  });

  const handleSelect = (e) => {
    setCurrentVal(e.value);
    setCurrentLabel(e.label);
    // let newtheme = Object.assign({}, theme);

    if (isBaseLevel) {
      updateFont({ key: element, value: e.label });
    } else {
      updateText({ element: element, key: "fontFamily", value: e.value });
    }
  };

  const Option = (props) => {
    //console.log("option gets props:", props.data.value);
    return (
      <Fragment>
        <components.Option {...props} key={Math.random()}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ fontFamily: props.data.value }}>{props.children}</div>
          </div>
        </components.Option>
      </Fragment>
    );
  };

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: "none",
      fontFamily: "Arial",
      fontSize: "14px",
    }),
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      display: "block",
      textAlign: "left",
      width: "100%",
      fontFamily: "Arial",
      border: "none",
    }),
  };

  //two kinds of dropdowns -- one just the themed fonts, the other all the fonts
  const getOptions = () => {
    let themeOptions = [];
    let allOptions = [];
    let groupedOptions = [];

    for (const t in themedFonts) {
      themeOptions.push({
        value: getFontVariable(themedFonts[t]),
        label: themedFonts[t],
      });
    }

    if (!isBaseLevel) {
      groupedOptions.push({
        label: "----------themed fonts-----------",
        options: themeOptions,
      });
    }

    for (const f in allFonts) {
      allOptions.push({
        value: f,
        label: allFonts[f],
      });
    }
    groupedOptions.push({
      label: "----------all fonts-----------",
      options: allOptions,
    });

    return groupedOptions;
  };

  return (
    <div style={{ width: "100%" }}>
      <Select
        id="fontselect"
        instanceId={useId()}
        options={getOptions()}
        components={{ Option }}
        onChange={handleSelect}
        placeholder="Select Font"
        styles={customStyles}
        value={
          currentVal
            ? {
                label: currentLabel,
                value: currentVal,
              }
            : null
        }
      />
    </div>
  );
};

export default FontDropdown;
