import { useEffect, useState, useMemo, useId } from "react";
import { useTheme } from "@/hooks";
import { RangeSlider, StyleGrid, StyleGridItem } from "@/dev/components/forms";

const SpacingItem = ({ section, propName, value }) => {
  const { theme, setTheme } = useTheme();
  const [val, setVal] = useState(0);

  useEffect(() => {
    setVal(propVal);
  }, [propVal]);

  //each slider needs own props
  const sliderProps = useMemo(
    () => ({
      min: 0,
      max: 10,
      value: val,
      step: 0.5,
      unit: "rem",
      onChange: (newval) => handleValueChange(newval),
    }),
    [val]
  );

  //update comes from Slider
  function handleValueChange(newval) {
    setVal(newval);
    let newtheme = Object.assign({}, theme);
    newtheme.spacing[section][propName] = newval;
    setTheme(newtheme);
  }

  return (
    <StyleGridItem label={propName}>
      <RangeSlider key={useId} {...sliderProps} />
    </StyleGridItem>
  );
};

const SpacingForm = (props) => {
  const { theme } = useTheme();
  const [pt, setPt] = useState(0);
  const [pb, setPb] = useState(0);
  const [pr, setPr] = useState(0);
  const [pl, setPl] = useState(0);
  const [mt, setMt] = useState(0);
  const [mb, setMb] = useState(0);
  const [mr, setMr] = useState(0);
  const [ml, setMl] = useState(0);

  useEffect(() => {
    //loop through theme to set starting values
    setPt(theme.spacing[section].paddingTop);
  }, []);

  return <div></div>;
};

export default SpacingForm;
