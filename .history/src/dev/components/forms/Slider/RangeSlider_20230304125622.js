import { useState, useEffect, memo } from "react";
import styles from "./slider.module.css";

const RangeSlider = memo({ label, onChange, value, ...sliderProps }) => {
  //set initial value to 0 this will change inside useEffect on first render
  const [sliderVal, setSliderVal] = useState(0);

  /* keep mouse state to determine whether i should call parent onChange or not.
    so basically after dragging the slider and then release the mouse 
    then we will call the parent onChange, 
    otherwise parent function will get call each and every change */
  //const [mouseState, setMouseState] = useState(null);

  /* set new value on first render and every time value gets changed */
  useEffect(() => {
    setSliderVal(value);
  }, [value]);

  /* update local state of the value when changing */
  const changeCallback = (e) => {
    setSliderVal(e.target.value);
    onChange(sliderVal); //send to parent
  };

  /* can choose to only send to parent onMouseUp */
  //   useEffect(() => {
  //     if (mouseState === "up") {
  //       onChange(sliderVal); //to parent
  //     }
  //   }, [mouseState]);

  return (
    <div className={styles.slidecontainer}>
      <input
        type="range"
        {...sliderProps}
        value={sliderVal}
        onChange={changeCallback}
      />
      <span>{sliderVal}</span>
    </div>
  );
} //end const
); //end memo

export default RangeSlider;
const RangeSlider = memo(
    ({ classes, label, onChange, value, ...sliderProps }) => {
      const [sliderVal, setSliderVal] = useState(0);
      const [mouseState, setMouseState] = useState(null);
  
      useEffect(() => {
        setSliderVal(value);
      }, [value]);
  
      const changeCallback = e => {
        setSliderVal(e.target.value);
      };
  
      useEffect(() => {
        if (mouseState === "up") {
          onChange(sliderVal);
        }
      }, [mouseState]);
      console.log("RENDER");
      return (
        <div className="range-slider">
          <p>{label}</p>
          <h1>VALUE: {sliderVal}</h1>
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