import Select, { components } from "react-select";
import { Fragment, useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import { getFontsByCategory, getFontVariable } from "@/utils/fonts";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontDropdown = ({ section, element, property }) => {
  const { theme, setTheme } = useTheme();
  const [styleObj, setStyleObj] = useState();

  useEffect(() => {
    if (!element === undefined) {
      setStyleObj(Object.assign({}, theme[section][element]));
    }
  }, [section, element, theme]);

  const handleSelect = (e) => {
    let newtheme = Object.assign({}, theme);
    newtheme[section][element][property] = e.value;
    setTheme(newtheme);
  };

  const Option = (props) => {
    console.log("option gets props:", props.data.value);
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

  const getOptions = () => {
    let options = [];
    let themedFonts = theme.fonts;
    // console.log("allFonts: ", allFonts);

    for (const f in themedFonts) {
      options.push({
        value: getFontVariable(theme.fonts[f]),
        label: f,
      });
    }
    // groupedOptions.push({ label: "main colors", options: mainOptions });
    // for (const v in theme.colorVariants) {
    //   variants.push({
    //     value: theme.colorVariants[v],
    //     label: v,
    //   });
    // }
    // options.push({ label: "variants", options: variants });

    return options;
  };

  return (
    <Select
      options={getOptions()}
      components={{ Option }}
      onChange={handleSelect}
    />
  );
};

export default FontDropdown;
