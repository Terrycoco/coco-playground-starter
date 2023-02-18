import "./slider.module.css";
import { useState } from "react";

const Slider = (props) => {
  return (
    <div className="slidecontainer">
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        className="slider"
        id="myRange"
        oninput={changeValue}
      />
    </div>
  );
};

export default Slider;
