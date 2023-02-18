import "./slider.module.css";
import { useState } from "react";

const Slider = (props) => {
  const [val, setVal] = useState(
    props.defaultValue ? props.defaultValue : null
  );

  const changeValue = (e) => {
    setVal(e.target.value); //send to parent? //change theme?
    props.onChange(e.target.val, e.target.id);
  };

  return (
    <div className="slidecontainer">
      {props.min}
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={val}
        className="slider"
        id={props.id}
        onInput={changeValue}
      />
      {props.max}
    </div>
  );
};

export default Slider;
