import { useState, useEffect, useMemo } from "react";
import DeviceMenu from "@/dev/components/layout/DeviceMenu";
import { useSelector, useDispatch } from "react-redux";
import {
  update,
  updateDevice,
  selectCurrentDevice,
  selectAllDeviceSizes,
} from "@/store/fontSizesSlice";
import { Button } from "@/components/buttons";
import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import RangeSlider from "@/dev/components/forms/sliders/RangeSlider";
import HeadingCountDropdown from "@/dev/components/dropdowns/HeadingCountDropdown";

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
    buttonrow: {
      marginTop: "1rem",
      display: "flex",
      justifyContent: "space-between",
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
    //console.log("currentDevice", currentDevice);
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

  const getHeadingLevels = () => {
    if (fontSizes !== undefined && currentDevice !== undefined) {
      let keys = Object.keys(fontSizes.mobile);
      //console.log("keys:", keys);
      let result = [];
      for (let i = 1; i < keys.length; i++) {
        let thiskey = keys[i];
        //console.log("key", i, thiskey);
        result.unshift(
          <FontLevel
            key={`${currentDevice}${thiskey}`}
            fontSize={fontSizes[currentDevice][thiskey].fontSize}
            lineHeight={fontSizes[currentDevice][thiskey].lineHeight}
            levelName={thiskey}
            onLineHeightChange={handleLineHeightChange}
            onFontSizeChange={handleFontSizeChange}
          />
        );
      }
      return result;
    }
  };

  return (
    <FormWrapper>
      <DeviceMenu />
      {currentDevice !== undefined && (
        <div>
          <div style={styles.buttonrow}>
            <span>Number of Headings:</span>
            <HeadingCountDropdown />
            <Button onClick={reset}>Reset</Button>
            {/*}
            <Button onClick={deleteLastLevel}>Delete</Button>
            <Button onClick={addHeadingLevel}>Add Heading Level</Button> */}
          </div>
          {getHeadingLevels()}
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
    </FormWrapper>
  );
};

export default ScaleForm;
