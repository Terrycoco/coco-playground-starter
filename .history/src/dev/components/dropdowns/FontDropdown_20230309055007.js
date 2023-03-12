import Select, { components } from "react-select";
import { Fragment, useState, useCallback, useEffect, useId } from "react";
import { useSelector } from "react-redux";
import {
  fonts,
  getFontsByCategory,
  getFontVariable,
  getFontNameFromVar,
} from "@/utils/fonts";
import { selectFonts } from "@/store/fontsSlice";

const FontDropdown = ({ section, element, ...props }) => {
  const themedFonts = useSelector(selectFonts);
  const [currentVal, setCurrentVal] = useState(null);
  const [currentLabel, setCurrentLabel] = useState(null);

  useEffect(() => {
    setCurrent();
  }, []);

  useEffect(() => {
    setCurrent();
  }, [theme, section, element]);

  const setCurrent = useCallback(() => {
    let val, label;
    if (props.isBaseLevel == true) {
      //for project settings
      val = getFontVariable(theme[section][element]);
    } else {
      val = theme[section][element].fontFamily;
    }
    setCurrentVal(val);
    label = getFontNameFromVar(val);
    setCurrentLabel(label);
    console.log("val:", val, "label:", label);
  });

  const handleSelect = (e) => {
    // console.log(e.value);
    // console.log(e.label);
    setCurrentVal(e.value);
    setCurrentLabel(e.label);
    let newtheme = Object.assign({}, theme);

    if (props.isBaseLevel) {
      newtheme[section][element] = e.label;
    } else {
      newtheme[section][element].fontFamily = e.value;
    }
    setTheme(newtheme);
    console.log("newtheme:", newtheme);
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

    if (!props.isBaseLevel) {
      groupedOptions.push({
        label: "----------themed fonts-----------",
        options: themeOptions,
      });
    }

    for (const f in fonts) {
      allOptions.push({
        value: getFontVariable(fonts[f].name),
        label: fonts[f].name,
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
