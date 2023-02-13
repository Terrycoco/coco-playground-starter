import { useState } from "react";
import Select from "react-select";
import { useTheme } from "@/hooks";

const ColorDropdown = ({ section, element }) => {
  const { theme } = useTheme();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return <Select options={options} />;
};

export default ColorDropdown;
