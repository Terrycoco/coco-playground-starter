const useSlider = ({ value, ...config }) => {
  const [sliderVal, setSliderVal] = useState(value); // keep a state for each slider

  const [configuration, setConfiguration] = useState(config); // keep the configuration for each slider

  const onChange = useCallback((val) => {
    setSliderVal(val);
    // useCallback why? we dont need to recreate every time this hook gets called
  }, []);

  useEffect(() => {
    setConfiguration({
      ...config,
      onChange,
      value: sliderVal,
    });
    // when sliderVal gets changed call this effect
    // and return a new configuration, so the slider can rerender with latest configuration
  }, [sliderVal]);

  return [sliderVal, configuration];
};
