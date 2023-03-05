import styles from "./slider.module.css";
import { useState } from "react";
import { getValFromCSS } from "@/utils";

const Slider = (props) => {
  const [val, setVal] = useState(props.defaultValue ? props.defaultValue : "");
  const [valunit, setValunit] = useState();

  const changeValue = (e) => {
    setVal(e.target.value); //send to parent? //change theme?
    let valunit = e.target.value + (props.suf ? props.suf : "");
    props.onChange(e.target.id, valunit);
  };

  return (
    <div className={styles.slidecontainer}>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={val}
        id={props.id}
        onInput={changeValue}
      />
      <span>
        {val}
        {props.suf ? props.suf : ""}
      </span>
    </div>
  );
};

export default Slider;
