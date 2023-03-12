import { useState, useEffect, useCallback, useMemo } from "react";
import Head from "next/head";
import { fontVariables, getFontVariable } from "@/utils/fonts";
import { getValFromCSS } from "@/utils/strings";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { Layout, DeviceMenu } from "@/dev/components/layout";
import { FontDropdown, RatioDropdown } from "@/dev/components/dropdowns";
import { Button, ButtonSketch } from "@/components/buttons";
import { Drawer } from "@/components/drawers";
import {
  RangeSlider,
  StyleGrid,
  StyleGridItem,
  ThemeViewer,
} from "@/dev/components/forms";
import { Modal } from "@/components/modals";
import { calcScale, calcFontSizes } from "@/dev/utils/scaleUtils";
import ScreenEmulator from "@/dev/components/viewport/ScreenEmulator";

//store------------------------------
import { useSelector, useDispatch } from "react-redux";
import {
  addLevel,
  update,
  updateDevice,
  selectAllDevices,
  selectCurrentDeviceSizes,
  deleteLevel,
} from "@/store/fontSizesSlice";
import { selectFonts } from "@/store/fontsSlice";
import { theme } from "@/store/themeSlice";

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
      <StyleGridItem label="Font">
        <FontDropdown
          key={`${levelName}font`}
          section="fonts"
          element={levelName == "body" ? "body" : "display"}
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

export default function Scale() {
  const dispatch = useDispatch();
  const fontSizes = useSelector(selectAllDevices);
  const currentSizes = useSelector(selectCurrentDeviceSizes);
  const fonts = useSelector(selectFonts);
  const [device, setDevice] = useState("mobile");
  const [el, setEl] = useState(null);
  const [tab, setTab] = useState(1);
  const [firstRatio, setFirstRatio] = useState(1.5);
  const [showTheme, setShowTheme] = useState(false);
  const [showSpacing, setShowSpacing] = useState(false);
  const [showTypography, setShowTypography] = useState(false);
  const [showScale, setShowScale] = useState(false);
  const [showDrawer, setShowDrawer] = useState(true);

  useEffect(() => {
    setRatio();
  }, []);

  const styles = {
    page: {
      display: "flex",
      flexDirection: "row",
    },
    contentSide: {
      paddingTop: "3rem",
      paddingLeft: "1rem",
      overflowY: "hidden",
      backgroundColor: "white",
    },
    form: {
      backgroundColor: "var(--clr-whitish)",
      overflowY: "scroll",
      paddingTop: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "3rem",
      overflowY: "scroll",
    },
    labelblock: {
      marginTop: "20px",
    },
    label: {
      fontSize: "14px",
      color: "gray",
      fontFamily: "Arial",
    },
    formHead: {
      textAlign: "center",
    },
    row: {
      backgroundColor: "white",
      display: "grid",
      gridTemplateColumns: "40% 60%",
      height: "2.2rem",
    },

    rowlabel: {
      border: "1px solid lightgray",
      fontFamily: "var(--font-body)",
      fontWeight: "normal",
      fontSize: "16px",
      paddingLeft: "1rem",
      display: "flex",
      alignItems: "center",
      color: "gray",
      height: "100%",
    },

    val: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: "normal",
      border: "1px solid lightgray",
      textAlign: "right",
      padding: "0 1rem",
      fontSize: "12px",
      fontFamily: "var(--font-body)",
      height: "100%",
    },
    buttonrow: {
      marginTop: "1rem",
    },
  };

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
    setDevice(dev);
    dispatch(updateDevice(dev));
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
    //only show levels if count is correct
    let result = [];
    let levelCount = Object.keys(currentSizes).length;

    for (let i = 0; i < levelCount; i++) {
      let levelName = i == 0 ? "body" : `fs${i}`;
      let fs = currentSizes[levelName].fontSize;
      //   // console.log("fs to ", levelName, fs);
      result.unshift(
        <FontLevel
          key={`${device}${levelName}`}
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

  const toggleTheme = () => {
    setShowDrawer(false);
    setShowTheme(!showTheme);
  };

  return (
    <>
      <div style={styles.form}>
        <DeviceMenu device={device} onChange={changeDevice} />
        <div>
          <div style={styles.buttonrow}>
            <Button onClick={reset}>Reset</Button>
            <Button onClick={deleteLastLevel}>Delete</Button>
            <Button onClick={addHeadingLevel}>Add Heading Level</Button>
            <Button onClick={toggleTheme}>View Theme</Button>
          </div>

          {showLevels()}
        </div>
      </div>
    </>
  );
}
