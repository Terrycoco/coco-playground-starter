import { useState } from "react";
import Select from "react-select";
import { useTheme, useEffect } from "@/hooks";

const ColorDropdown = ({ section, element }) => {
  const { theme } = useTheme();
  const [styleObj, setStyleObj] = useTheme();

  useEffect(() => {
    if (element) {
      setStyleObj(Object.assign({}, theme[section][element]));
    }
  }, [section, element, theme]);

  const getOptions = () => {
    const options = [];
    for (const p in styleObj) {
      options.push({
        value: styleObj[p],
      });
    }
    return options;
  };

  return <Select options={options} />;
};

export default ColorDropdown;
