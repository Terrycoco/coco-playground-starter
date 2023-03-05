import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "2", label: "Musical" },
  { value: "1.618034", label: "Golden" },
  { value: "3", label: "High-Contrast" },
];

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      display: "block",
      textAlign: "left",
      width: "100%",
    }),
  };

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={customStyles}
      />
    </div>
  );
}
