import { useState, useEffect, useCallback } from "react";

const useSlider = ({ value, ...config }) => {
  // keep a state for each slider
  const [sliderVal, setSliderVal] = useState(value);
  // keep the configuration for each slider
  const [configuration, setConfiguration] = useState(config);
  // useCallback why? we dont need to recreate onChange function every time this hook gets called
  const onChange = useCallback((val) => {
    setSliderVal(val);
  }, []);

  // when sliderVal gets changed call this effect
  // and return a new configuration, so the slider can rerender with latest configuration
  useEffect(() => {
    setConfiguration({
      ...config,
      onChange,
      value: sliderVal,
    });
  }, [sliderVal]);

  return [sliderVal, configuration];
};

export default useSlider;
