import { useState, useEffect, useCallback, useMemo } from "react";
import { getValFromCSS } from "@/utils/strings";
import { DeviceMenu } from "@/dev/components/layout";
import { Button } from "@/components/buttons";
import StyleGrid from '@/dev/components/forms/StyleGrid';
import StyleGridItem  from '@/dev/components/forms/StyleGridItem;
import { RangeSlider } from "@/dev/components/forms";

//store------------------------------
import { useSelector, useDispatch } from "react-redux";
import {
  addLevel,
  update,
  updateDevice,
  selectAllDeviceSizes,
  selectCurrentDeviceSizes,
  deleteLevel,
  selectCurrentDevice,
} from "@/store/fontSizesSlice";
import { selectFonts } from "@/store/fontsSlice";


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
  const currentSizes = useSelector(selectCurrentDeviceSizes);
  const fonts = useSelector(selectFonts);
  const [el, setEl] = useState(null);
  const [tab, setTab] = useState(1);
  const [firstRatio, setFirstRatio] = useState(1.5);

  useEffect(() => {
    setRatio();
  }, []);

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

  //need to redo this to fetch smallest heading
  const setRatio = useCallback(() => {
    if (fontSizes.mobile.hasOwnProperty("fs1")) {
      let base = getValFromCSS(fontSizes.mobile.body.fontSize);
      let fs1 = getValFromCSS(fontSizes.mobile.fs1.fontSize);
      let ratio = fs1 / base;
      setFirstRatio(ratio.toFixed(4));
    }
  });

  const addHeadingLevel = useCallback(() => {
    let devices = Object.keys(fontSizes);
    let keys = Object.keys(currentSizes);
    let keyCount = keys.length;
    let lastKey = keyCount === 1 ? "body" : "fs" + (keyCount - 1);
    let newKey = "fs" + keyCount;

    devices.map((dev) => {
      let prevFS = fontSizes[dev][lastKey].fontSize; //pct of last size
      let newFS = parseInt(prevFS * firstRatio);
      let newLH = fontSizes[dev][lastKey].lineHeight;
      let payload = {
        device: dev,
        level: newKey,
        fontSize: parseInt(newFS),
        lineHeight: newLH,
      };
      dispatch(addLevel(payload));
    });
  });

  const reset = () => {
    //TODO WARN THAT WILL LOSE ANY HEADINGS SET SO FAR
  };

  const changeDevice = (dev) => {
    dispatch(updateDevice(dev)); //will update all subscribers
  };

  const deleteLastLevel = () => {
    let keys = Object.keys(currentSizes);

    let lastOne = keys[keys.length - 1];
    if (lastOne === "body") return;
    dispatch(deleteLevel(lastOne));
  };

  const handleLineHeightChange = (levelname, newval) => {
    dispatch(update({ level: levelname, key: "lineHeight", value: newval }));
  };

  const handleFontSizeChange = (levelname, newval) => {
    // console.log("recd from ", id, newval);
    dispatch(update({ level: levelname, key: "fontSize", value: newval }));

    //set latest ratio
    if (levelname === "fs1") {
      let bfs = fontSizes[device].body.fontSize;
      let ratio = newval / bfs;
      setFirstRatio(ratio.toFixed(4));
    }
  };

  const showLevels = () => {
    let result = [];
    let levelCount = Object.keys(currentSizes).length;

    for (let i = 0; i < levelCount; i++) {
      let levelName = i == 0 ? "body" : `fs${i}`;
      let fs = currentSizes[levelName].fontSize;
      //   // console.log("fs to ", levelName, fs);
      result.unshift(
        <FontLevel
          key={`${currentDevice}${levelName}`}
          fontSize={fs}
          lineHeight={currentSizes[levelName].lineHeight}
          levelName={levelName}
          onLineHeightChange={handleLineHeightChange}
          onFontSizeChange={handleFontSizeChange}
        />
      );
    }
    return result;
  };

  return (
    <>
      <div style={styles.form}>
        <DeviceMenu device={currentDevice} onChange={changeDevice} />
        <div>
          <div style={styles.buttonrow}>
            <Button onClick={reset}>Reset</Button>
            <Button onClick={deleteLastLevel}>Delete</Button>
            <Button onClick={addHeadingLevel}>Add Heading Level</Button>
          </div>

          {showLevels()}
        </div>
      </div>
    </>
  );
};

export default ScaleForm;
