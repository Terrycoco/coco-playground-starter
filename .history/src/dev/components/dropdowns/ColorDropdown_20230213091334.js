import Select from "react-select";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";

const ColorDropdown = ({ section, element }) => {
  const { theme } = useTheme();
  const [styleObj, setStyleObj] = useState();

  useEffect(() => {
    if (!element === undefined) {
      setStyleObj(Object.assign({}, theme[section][element]));
    }
  }, [section, element, theme]);

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      alignItems: "center",
      display: "flex",

      ":before": {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: "block",
        marginRight: 8,
        height: 10,
        width: 10,
      },
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  const getOptions = () => {
    const options = [];

    for (const p in theme.colors) {
      options.push({
        value: theme.colors[p],
        label: p,
      });
    }
    return options;
  };

  return <Select options={getOptions()} styles={customStyles} />;
};

export default ColorDropdown;
