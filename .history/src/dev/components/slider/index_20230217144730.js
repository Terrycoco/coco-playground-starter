import "./slider.module.css";
import { useState } from "react";

const Slider = (props) => {
  const [val, setVal] = useState(
    props.defaultValue ? props.defaultValue : null
  );

  const changeValue = (e) => {
    setVal(e.target.value); //send to parent? //change theme?
  };

  return (
    <div className="slidecontainer">
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={val}
        className="slider"
        id={props.id}
        onInput={changeValue}
      />
      {val}
    </div>
  );
};

export default Slider;
