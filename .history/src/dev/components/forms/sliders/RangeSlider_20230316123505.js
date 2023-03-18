import { useState, useEffect, memo } from "react";
import styles from "./slider.module.css";

const RangeSlider = memo(
  ({ label, onChange, defaultValue, unit, ...sliderProps }) => {
    const [sliderVal, setSliderVal] = useState(0);
    const [mouseState, setMouseState] = useState(null); //may add this later

    useEffect(() => {
      console.log("Range defaultValue is:", defaultValue);
      setSliderVal(defaultValue);
    }, [defaultValue]);

    const changeCallback = (e) => {
      setSliderVal(e.target.value);
      onChange(e.target.value);
    };

    const handleMouseUp = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setMouseState("up");
    };

    return (
      <div className={styles.slidercontainer}>
        <input
          type="range"
          className={styles.myslider}
          value={sliderVal}
          {...sliderProps}
          id="myRange"
          onChange={changeCallback}
          onMouseDown={() => setMouseState("down")}
          onMouseUp={handleMouseUp}
        />
        <span>{`${sliderVal}${unit}`}</span>
      </div>
    );
  }
);

export default RangeSlider;
