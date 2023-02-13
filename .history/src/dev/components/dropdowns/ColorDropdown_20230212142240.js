import { useState } from "react";
import Select from "react-select";
import { useTheme } from "@/hooks";

const ColorDropdown = (props) => {
  const { theme } = useTheme();

  const getOptions = () => {
    let options = [];
    for (const p in theme.colors) {
      options.push({ value: theme.colors[p], label: p });
    }
    return options;
  };

  return <Select options={getOptions()} />;
};

export default ColorDropdown;
