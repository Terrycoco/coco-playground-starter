import { useState, useEffect, memo } from "react";
import styles from "./slider.module.css";

const RangeSlider = memo(
  ({ classes, label, onChange, value, ...sliderProps }) => {
    const [sliderVal, setSliderVal] = useState(0);
    const [mouseState, setMouseState] = useState(null); //may add this later

    useEffect(() => {
      setSliderVal(value);
    }, [value]);

    const changeCallback = (e) => {
      setSliderVal(e.target.value);
      onChange(e.target.value);
    };

    // useEffect(() => {
    //   if (mouseState === "up") {
    //     onChange(sliderVal);
    //   }
    // }, [mouseState]);
    // console.log("RENDER");
    return (
      <div className={styles.slidercontainer}>
        <p>{label}</p>
        <input
          type="range"
          value={sliderVal}
          {...sliderProps}
          className={`slider ${classes}`}
          id="myRange"
          onChange={changeCallback}
          onMouseDown={() => setMouseState("down")}
          onMouseUp={() => setMouseState("up")}
        />
      </div>
    );
  }
);

export default RangeSlider;
