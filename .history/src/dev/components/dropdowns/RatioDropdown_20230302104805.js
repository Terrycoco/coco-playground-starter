import React, { useState, useEffect } from "react";
import Select from "react-select";
import { findObjInArrayByValue } from "@/utils/objects";

const options = [
  { value: 1.618034, label: "Golden (1.6180)" },
  { value: 2, label: "Musical (2)" },
  { value: 3, label: "High (3)" },
];

export default function RatioDropdown(props) {
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    setSelectedOption(props.defaultValue);
  }, [props.defaultValue]);

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: "none",
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

  const handleSelected = (e) => {
    props.onChange(e.value);
  };

  return (
    <Select
      defaultValue={findObjInArrayByValue(options, "value", props.defaultValue)}
      onChange={handleSelected}
      options={options}
      styles={customStyles}
    />
  );
}
