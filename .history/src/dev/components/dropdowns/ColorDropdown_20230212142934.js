import { useState } from "react";
import Select from "react-select";
import { useTheme } from "@/hooks";

const ColorDropdown = (props) => {
  const { theme } = useTheme();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const getOptions = () => {
    if (!theme) {
      return options;
    } else {
      let options = [];
      for (const p in theme.colors) {
        options.push({ value: theme.colors[p], label: p });
      }
      return options;
    }
  };

  return <Select options={options} />;
};

export default ColorDropdown;
