import "./slider.module.css";
import { useState } from "react";

const Slider = (props) => {
  const [val, setVal] = useState(props.defaultValue ? props.defaultValue : "");

  const changeValue = (e) => {
    setVal(e.target.value); //send to parent? //change theme?

    props.onChange(e.target.id, e.target.value + (props.suf ? props.suff : ""));
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
      <span className="sliderlabel">{val}</span>
    </div>
  );
};

export default Slider;
