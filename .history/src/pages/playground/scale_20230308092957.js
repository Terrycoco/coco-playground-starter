import { useState, useEffect, useCallback, useMemo } from "react";
import Head from "next/head";
import { fontVariables, getFontVariable } from "@/utils/fonts";
import { getValFromCSS } from "@/utils/strings";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
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
import { Resizable } from "re-resizable";
import ScreenEmulator from "@/dev/components/viewport/ScreenEmulator";

import { useSelector, useDispatch } from "react-redux";
import {
  update,
  updateDevice,
  selectAllDevices,
  selectCurrentDeviceSizes,
} from "@/store/fontSizesSlice";

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

export default function Scale() {
  const dispatch = useDispatch();
  const fontSizes = useSelector(selectAllDevices);
  const currentSizes = useSelector(selectCurrentDeviceSizes);
  const bodyFont = useSelector((state) => state.fonts.body);
  const displayFont = useSelector((state) => state.fonts.display);
  //const { theme, setTheme } = useTheme();
  const [device, setDevice] = useState("mobile");
  const [el, setEl] = useState(null);
  const [tab, setTab] = useState(1);
  const [levelCount, setLevelCount] = useState(0);
  const [levels, setLevels] = useState({});
  const [firstRatio, setFirstRatio] = useState(1.6);
  const [showTheme, setShowTheme] = useState(false);
  const [showSpacing, setShowSpacing] = useState(false);
  const [showTypography, setShowTypography] = useState(false);
  const [showScale, setShowScale] = useState(false);
  const [showDrawer, setShowDrawer] = useState(true);

  useEffect(() => {
    // must do this here to wait for loading
    const el = document.getElementById("para");
    setEl(el);
    setRatio();
    setLevels(Object.assign({}, fontSizes)); //copy or ref?
    dispatch(updateDevice("mobile")); //default
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
    if (levels.hasOwnProperty("fs1")) {
      let base = getValFromCSS(levels.base.fontSize);
      let fs1 = getValFromCSS(levels.fs1.fontSize);
      let ratio = fs1 / base;
      setFirstRatio(ratio.toFixed(4));
    }
  });

  const generate = () => {
    let nextlevel = levelCount + 1;

    //add new level to levels
    let levs = Object.assign({}, levels);
    let next = `fs${nextlevel}`;
    let prev = levelCount === 0 ? "body" : `fs${levelCount}`;

    //add to each device
    for (let device in theme.screens) {
      console.log("device:", device);

      if (levels[device].hasOwnProperty(prev) && firstRatio != null) {
        let suggested = levels[device][prev].fontSize * firstRatio;

        //level doesn't exist add it to this device
        if (!levs[device].hasOwnProperty(next)) {
          levs[device][next] = {};
          levs[device][next].fontSize = parseInt(suggested); //suggest a size?
          levs[device][next].lineHeight = levs[device][prev].lineHeight;
        }
      }
    }

    setLevelCount(nextlevel);
    setLevels(levs);

    //save new level to theme?
    // let newtheme = Object.assign({}, theme);
    // newtheme.fontSizes = levs;
    // setTheme(newtheme);
    // console.log("newtheme:", newtheme);
  };

  const reset = () => {
    //TODO WARN THAT WILL LOSE ANY HEADINGS SET SO FAR
  };

  const changeDevice = (dev) => {
    setDevice(dev);
    dispatch(updateDevice(dev));
  };

  const getParaStyle = () => {
    console.log("alldevices:", fontSizes);
    console.log("current:", currentSizes);
    // if (device && deviceSizes.hasOwnProperty(device)) {
    //   let style = {
    //     fontFamily: getFontVariable(bodyFont),
    //     fontSize: fontSizes[device].body.fontSize + "px",
    //     lineHeight: fontSizes[device].body.lineHeight,
    //     marginBottom: "1rem",
    //   };
    //   return style;
    // }
  };

  const getHeadingStyle = (level) => {
    if (levels[device].hasOwnProperty(level)) {
      let style = {
        fontFamily: getFontVariable(displayFont),
        fontSize: levels[device][level].fontSize + "px",
        lineHeight: levels[device][level].lineHeight,
        fontWeight: "bold",
        marginBottom: level.replace("fs", "") + "em",
      };
      return style;
    }
  };

  const getHeadings = () => {
    let result = [];
    for (let i = 1; i < levelCount + 1; i++) {
      result.unshift(
        <div
          style={getHeadingStyle(`fs${i}`)}
        >{`Heading fs${i}  Adjust line height between these lines`}</div>
      );
    }
    return result;
  };

  const handleLineHeightChange = (levelname, newval) => {
    //should use
    let levs = Object.assign({}, levels);
    levs[device][levelname].lineHeight = newval;
    setLevels(levs);
  };

  const handleFontSizeChange = (levelname, newval) => {
    // console.log("recd from ", id, newval);
    dispatch(update({ key: "fontSize", value: newval }));

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
    for (let i = 0; i < levelCount + 1; i++) {
      let levelName = i == 0 ? "body" : `fs${i}`;

      if (
        levels &&
        levels.hasOwnProperty(device) &&
        levels[device].hasOwnProperty(levelName)
      ) {
        let fs = getValFromCSS(levels[device][levelName].fontSize);
        //   // console.log("fs to ", levelName, fs);
        result.unshift(
          <FontLevel
            key={`${device}${levelName}`}
            fontSize={fs}
            lineHeight={levels[device][levelName].lineHeight}
            levelName={levelName}
            onLineHeightChange={handleLineHeightChange}
            onFontSizeChange={handleFontSizeChange}
          />
        );
      }
    }
    return result;
  };

  const toggleTheme = () => {
    //update current theme first
    let newtheme = Object.assign({}, theme);
    newtheme.fontSizes = levels;
    setTheme(newtheme);
    setShowDrawer(false);
    setShowTheme(!showTheme);
  };
  const toggleScale = () => {
    setShowScale(!showScale);
    setShowSpacing(false);
    setShowTypography(false);
  };

  const toggleSpacing = () => {
    setShowSpacing(!showSpacing);
    setShowTypography(false);
    setShowScale(false);
  };
  const toggleTypography = () => {
    setShowTypography(!showTypography);
    setShowSpacing(false);
    setShowScale(false);
  };

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <Head>
        <title>Project Sizing Scale</title>
        <meta name="description" content="Modular Sizing For Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout
          onClickSpacing={toggleSpacing}
          onClickTypography={toggleTypography}
          onClickScale={toggleScale}
          onClickDesign={toggleDrawer}
        >
          <ThemeViewer onClose={toggleTheme} show={showTheme} />
          <Drawer show={showDrawer} onClose={toggleDrawer} openWidth="500px">
            <div style={styles.form}>
              <DeviceMenu device={device} onChange={changeDevice} />
              <div>
                <div style={styles.buttonrow}>
                  <Button onClick={reset}>Reset</Button>
                  <Button onClick={generate}>Add Heading Level</Button>
                  <Button onClick={toggleTheme}>View Theme</Button>
                </div>

                {showLevels()}
              </div>
            </div>
          </Drawer>

          <div style={styles.page}>
            {tab === 1 && (
              <div style={styles.contentSide}>
                <div>
                  <ScreenEmulator device={device}>
                    <div style={styles.parablock}>
                      {getHeadings()}
                      <div id="para">
                        <div style={getParaStyle()}>
                          To create the scale for your project, first select the
                          paragraph font (fs0). Play with the size of the font,
                          until it looks crisp and "right" to your eye. Then,
                          play with the line height for readability.
                        </div>
                        <div style={getParaStyle()}>
                          Once you have the paragraph settings, do the same for
                          the
                          <b> first level up</b>, or smallest, heading (fs1).
                          The ratio between the body and the first level will
                          suggest further sizes,{" "}
                          <b>but tweak them as you like.</b>
                        </div>
                        <div style={getParaStyle()}>
                          Keep adding heading levels to fit your project.
                        </div>
                        <div style={getParaStyle()}>
                          When you are satisfied that it looks good at mobile
                          size, save your mobile settings. Then, check each
                          device resolution to make adjustments.{" "}
                          <b>Your eye is the best judge!</b>
                        </div>
                      </div>
                    </div>
                  </ScreenEmulator>
                  <div style={styles.labelblock}>
                    <div style={styles.label}>Body Font: {bodyFont}</div>
                    <div style={styles.label}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Layout>
      </main>
    </>
  );
}
