import Select, { components } from "react-select";
import { Fragment, useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import { getFontsByCategory } from "@/utils/fonts";
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
            <FontAwesomeIcon
              icon={["fas", "square"]}
              style={{
                color: `${props.data.value}`,
                height: "2rem",
                width: "2rem",
                paddingRight: "1rem",
              }}
              fixedWidth={true}
            />
            {props.children}
          </div>
        </components.Option>
      </Fragment>
    );
  };

  const getOptions = () => {
    let groupedOptions = [];
    let mainOptions = [];
    let variants = [];

    for (const f in theme.fonts) {
      mainOptions.push({
        value: theme.fonts[f],
        label: f,
      });
    }
    groupedOptions.push({ label: "main colors", options: mainOptions });
    for (const v in theme.colorVariants) {
      variants.push({
        value: theme.colorVariants[v],
        label: v,
      });
    }
    groupedOptions.push({ label: "variants", options: variants });

    return groupedOptions;
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
