import "./slider.module.css";
import { useState } from "react";

const Slider = (props) => {
  const [val, setVal] = useState(
    props.defaultValue ? props.defaultValue : null
  );

  const changeValue = (e) => {
    setVal(e.target.value);
  };

  return (
    <div className="slidecontainer">
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={val}
        className="slider"
        id="myRange"
        oninput={changeValue}
      />
    </div>
  );
};

export default Slider;
