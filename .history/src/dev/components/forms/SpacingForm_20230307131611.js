import { useEffect, useState, useMemo } from "react";
import { useTheme } from "@/hooks";
import { RangeSlider, StyleGrid, StyleGridItem } from "@/dev/components/forms";

const SpacingForm = ({ fontSize, lineHeight, levelName, ...props }) => {
  const [fsVal, setFsVal] = useState(16);
  const [lhVal, setLhVal] = useState(1.5);

  useEffect(() => {
    setFsVal(fontSize);
    setLhVal(lineHeight);
  }, []);

  const fsProps = useMemo(
    () => ({
      min: 8,
      max: 100,
      value: fsVal,
      step: 1,
      unit: "px",
      onChange: (e) => handleFontSizeChange(e),
    }),
    [fsVal]
  );

  const lhProps = useMemo(
    () => ({
      min: 0.8,
      max: 3,
      value: lhVal,
      step: 0.001,
      unit: "",
      onChange: (e) => handleLineHeightChange(e),
    }),
    [lhVal]
  );

  function handleLineHeightChange(newval) {
    setLhVal(newval);
    props.onLineHeightChange(levelName, newval);
  }

  function handleFontSizeChange(newval) {
    setFsVal(newval);
    props.onFontSizeChange(levelName, newval);
  }
  //TODO think about whether to make fonts avail on any level
  return (
    <StyleGrid title={levelName}>
      <StyleGridItem label="Font">
        <FontDropdown
          key={`${levelName}font`}
          section="fonts"
          element={levelName == "base" ? "base" : "display"}
          isBaseLevel={true}
        />
      </StyleGridItem>
      <StyleGridItem label="Font Size">
        <RangeSlider key={`${levelName}fs`} {...fsProps} />
      </StyleGridItem>

      <StyleGridItem label="Line Height">
        <RangeSlider key={`${levelName}lh`} {...lhProps} />
      </StyleGridItem>
    </StyleGrid>
  );
};

export default SpacingForm;
