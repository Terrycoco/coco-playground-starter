import styles from "./slider.module.css";
import { useState } from "react";

const Slider = (props) => {
  const [val, setVal] = useState(props.defaultValue ? props.defaultValue : "");

  const changeValue = (e) => {
    setVal(e.target.value); //send to parent? //change theme?
    let val = e.target.id === "fontSize" ? e.target.value / 16 : e.target.value;
    props.onChange(e.target.id, val + (props.suf ? props.suf : ""));
  };

  return (
    <div className={styles.slidecontainer}>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={val}
        className={styles.slider}
        id={props.id}
        onInput={changeValue}
      />
      <span className="sliderlabel">{val}</span>
    </div>
  );
};

export default Slider;
