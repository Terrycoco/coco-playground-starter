import Select, { components } from "react-select";
import { Fragment, useState, useEffect, useId } from "react";
import { useTheme } from "@/hooks";
import {
  fonts,
  getFontsByCategory,
  getFontVariable,
  getFontNameFromVar,
} from "@/utils/fonts";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontDropdown = ({ section, element }) => {
  const { theme, setTheme } = useTheme();
  const [currentVal, setCurrentVal] = useState(null);

  useEffect(() => {
    console.log("currentFont: ", theme[section][element].fontFamily);
    if (theme[section][element].hasOwnProperty("fontFamily")) {
      setCurrentVal(theme[section][element].fontFamily);
    } else {
      setCurrentVal(theme[section][element]); //for project settings
    }
  }, []);

  useEffect(() => {
    setCurrentVal(theme[section][element].fontFamily);
  }, [theme, section, element]);

  const handleSelect = (e) => {
    setCurrentVal(e.value);
    // console.log("selected:", e);
    let newtheme = Object.assign({}, theme);
    newtheme[section][element].fontFamily = e.value;

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

  //two kinds of dropdowns -- one just the themed fonts, the other all the fonts
  const getOptions = () => {
    let themeOptions = [];
    let allOptions = [];
    let groupedOptions = [];

    let themedFonts = theme.fonts;

    for (const t in themedFonts) {
      themeOptions.push({
        value: getFontVariable(t),
        label: t,
      });
    }

    groupedOptions.push({
      label: "----------themed fonts-----------",
      options: themeOptions,
    });

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
        defaultValue={
          currentVal
            ? {
                label: getFontNameFromVar(currentVal),
                value: currentVal,
              }
            : null
        }
      />
    </div>
  );
};

export default FontDropdown;
