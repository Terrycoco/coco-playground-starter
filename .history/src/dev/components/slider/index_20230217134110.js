import "./slider.module.css";
import { useState } from "react";

const Slider = (props) => {
  const [val, setVal] = useState(
    props.defaultValue ? props.defaultValue : null
  );

  const changeValue = (e) => {
    setVal = e.target.value;
  };

  return (
    <div className="slidecontainer">
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        className="slider"
        id="myRange"
        oninput={changeValue}
      />
    </div>
  );
};

export default Slider;
