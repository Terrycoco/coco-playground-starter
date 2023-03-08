import { useEffect, useState, useMemo } from "react";
import { useTheme } from "@/hooks";
import { RangeSlider, StyleGrid, StyleGridItem } from "@/dev/components/forms";

const SpacingSection = ({ section }) => {
  return (
    <StyleGrid title={section}>
      <StyleGridItem label="paddingTop">
        <RangeSlider key={`pt`} {...ptProps} />
      </StyleGridItem>
    </StyleGrid>
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

  function handleValueChange(newval, section, property) {
    setPt(newval);
    //update theme here
  }

  return <div></div>;
};

export default SpacingForm;
