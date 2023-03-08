import { useEffect, useState, useMemo } from "react";
import { useTheme } from "@/hooks";
import { RangeSlider, StyleGrid, StyleGridItem } from "@/dev/components/forms";

const SpacingForm = ({ section, ...props }) => {
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
    for (const property in theme.spacing[section]) {
      console.log("section:", section);
      console.log("props:", property, theme.spacing[section][property]);
    }
  }, []);

  //each slider needs own props
  const ptProps = useMemo(
    () => ({
      min: 8,
      max: 100,
      value: pt,
      step: 1,
      unit: "rem",
      onChange: (newval) => handleValueChange(newval),
    }),
    [pt]
  );

  const ptProps = useMemo(
    () => ({
      min: 0.8,
      max: 3,
      value: lhVal,
      step: 0.001,
      unit: "",
      onChange: (e) => handleLineHeightChange(e, property),
    }),
    [lhVal]
  );

  function handleValueChange(newval, section, property) {
    setPt(newval);
    //update theme here
  }

  //TODO think about whether to make fonts avail on any level
  return (
    <StyleGrid title={section}>
      <StyleGridItem label="paddingTop">
        <RangeSlider key={`pt`} {...ptProps} />
      </StyleGridItem>
    </StyleGrid>
  );
};

export default SpacingForm;
