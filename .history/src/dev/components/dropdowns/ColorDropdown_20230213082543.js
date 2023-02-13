import Select from "react-select";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";

const ColorDropdown = ({ section, element }) => {
  const { theme } = useTheme();
  const [styleObj, setStyleObj] = useState();

  useEffect(() => {
    if (element) {
      setStyleObj(Object.assign({}, theme[section][element]));
    }
  }, [section, element, theme]);

  const getOptions = () => {
    const options = [];
    for (const p in theme.colors) {
      options.push({
        value: styleObj[p],
        label: p,
      });
    }
    return options;
  };

  return <Select options={getOptions()} />;
};

export default ColorDropdown;
