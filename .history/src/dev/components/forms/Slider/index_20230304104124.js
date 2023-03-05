import styles from "./slider.module.css";
import { useState, useEffect } from "react";

const Slider = (props) => {
  //console.log("sliderprops:", props);
  const [val, setVal] = useState(props.defaultValue);
  const [valUnit, setValUnit] = useState();

  useEffect(() => {
    let vu = props.defaultValue + (props.suf ? props.suf : "");
    setValUnit(vu);
  }, []);

  const changeValue = (e) => {
    setVal(e.target.value);
    let vu = e.target.value + (props.suf ? props.suf : "");
    setValUnit(vu);
    props.onChange(e.target.id, val, valUnit);
  };

  return (
    <div className={styles.slidecontainer}>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={val}
        id={props.id}
        step={props.step}
        onChange={changeValue}
      />
      <span>{valUnit}</span>
    </div>
  );
};

export default Slider;
