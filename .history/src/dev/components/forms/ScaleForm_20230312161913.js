import { useState, useEffect, useMemo } from "react";
import { DeviceMenu } from "@/dev/components/layout";
import { useSelector, useDispatch } from "react-redux";
import {
  update,
  updateDevice,
  selectCurrentDevice,
  selectAllDeviceSizes,
} from "@/store/fontSizesSlice";
import { Button } from "@/components/buttons";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import RangeSlider from "@/dev/components/forms/sliders/RangeSlider";

//dumb component - talks back to parent
const FontLevel = ({ fontSize, lineHeight, levelName, ...props }) => {
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
      <StyleGridItem label="Font Size">
        <RangeSlider key={`${levelName}fs`} {...fsProps} />
      </StyleGridItem>

      <StyleGridItem label="Line Height">
        <RangeSlider key={`${levelName}lh`} {...lhProps} />
      </StyleGridItem>
    </StyleGrid>
  );
};

const ScaleForm = (props) => {
  const dispatch = useDispatch();
  const fontSizes = useSelector(selectAllDeviceSizes);
  const currentDevice = useSelector(selectCurrentDevice);
  const styles = {
    form: {
      backgroundColor: "var(--clr-whitish)",
      overflowY: "scroll",
      paddingTop: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "3rem",
      overflowY: "scroll",
    },
    buttonrow: {
      marginTop: "1rem",
    },
  };

  const handleLineHeightChange = (levelName, newval) => {
    if (currentDevice) {
      let payload = {
        device: currentDevice,
        level: levelName,
        key: "lineHeight",
        value: newval,
      };
      dispatch(update(payload));
    }
  };
  const handleFontSizeChange = (levelName, newval) => {
    console.log("currentDevice", currentDevice);
    if (currentDevice) {
      let payload = {
        device: currentDevice,
        level: levelName,
        key: "fontSize",
        value: newval,
      };
      dispatch(update(payload));
    }
  };
  const reset = () => {
    //TODO WARN THAT WILL LOSE ANY HEADINGS SET SO FAR
  };

  return (
    <div style={styles.form}>
      <DeviceMenu />
      {currentDevice && (
        <div>
          <div style={styles.buttonrow}>
            <Button onClick={reset}>Reset</Button>
            {/*}
            <Button onClick={deleteLastLevel}>Delete</Button>
            <Button onClick={addHeadingLevel}>Add Heading Level</Button> */}
          </div>
          <FontLevel
            key={`${currentDevice}body`}
            fontSize={fontSizes[currentDevice].body.fontSize}
            lineHeight={fontSizes[currentDevice].body.lineHeight}
            levelName="body"
            onLineHeightChange={handleLineHeightChange}
            onFontSizeChange={handleFontSizeChange}
          />
        </div>
      )}
    </div>
  );
};

export default ScaleForm;
