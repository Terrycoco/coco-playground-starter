const useSlider = ({ value, ...config }) => {
  // keep a state for each slider
  const [sliderVal, setSliderVal] = useState(value); 
  // keep the configuration for each slider
  const [configuration, setConfiguration] = useState(config); 
  // useCallback why? we dont need to recreate every time this hook gets called
  const onChange = useCallback((val) => {
    setSliderVal(val);
  }, []);

  useEffect(() => {
    setConfiguration({
      ...config,
      onChange,
      value: sliderVal,
    // when sliderVal gets changed call this effect
    // and return a new configuration, so the slider can rerender with latest configuration
  }, [sliderVal]);

  return [sliderVal, configuration];
};
