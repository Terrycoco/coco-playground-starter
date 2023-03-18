import { useState, useEffect, memo } from "react";
import styles from "./slider.module.css";

const RangeSlider = memo(({ label, onChange, value, unit, ...sliderProps }) => {
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
      <input
        type="range"
        className={styles.myslider}
        value={sliderVal}
        {...sliderProps}
        id="myRange"
        onChange={changeCallback}
        onMouseDown={() => setMouseState("down")}
        onMouseUp={() => setMouseState("up")}
      />
      <span>{`${sliderVal}${unit}`}</span>
    </div>
  );
});

export default RangeSlider;
