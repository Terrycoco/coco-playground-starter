import { useState, useEffect, useCallback, useMemo } from "react";
import Head from "next/head";
import { fontVariables, getFontVariable } from "@/utils/fonts";
import { getValFromCSS } from "@/utils/strings";
import { Layout, DeviceMenu } from "@/dev/components/layout";
import { FontDropdown, RatioDropdown } from "@/dev/components/dropdowns";
import { Drawer } from "@/components/drawers";
import {
  RangeSlider,
  StyleGrid,
  StyleGridItem,
  ThemeViewer,
  ScaleForm,
} from "@/dev/components/forms";
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
    // must do this here to wait for loading
    const el = document.getElementById("para");
    setEl(el);
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

  const getParaStyle = () => {
    // console.log("current:", currentSizes);

    let style = {
      fontFamily: getFontVariable(fonts.body),
      fontSize: currentSizes.body.fontSize + "px",
      lineHeight: currentSizes.body.lineHeight,
      marginBottom: "1rem",
    };
    return style;
  };

  const getHeadingStyle = (level) => {
    if (level !== undefined) {
      let mb = level.replace("fs", "") * 0.5 + 1;
      let style = {
        fontFamily: getFontVariable(fonts.display),
        fontSize: currentSizes[level].fontSize + "px",
        lineHeight: currentSizes[level].lineHeight,
        fontWeight: "bold",
        marginBottom: mb + "rem",
      };
      return style;
    }
  };

  const getHeadings = () => {
    let keys = Object.keys(currentSizes);
    let result = [];
    for (let i = 1; i < keys.length; i++) {
      console.log("key:", keys[i]);
      result.unshift(
        <div
          style={getHeadingStyle(keys[i])}
        >{`Heading ${keys[i]}  Adjust line height between these lines`}</div>
      );
    }
    return result;
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
        <title>Font Sizing</title>
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
            <ScaleForm device={device} />
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
                          Keep adding heading levels to fit the project content.
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
                    <div style={styles.label}>Body Font: {fonts.body}</div>
                    <div
                      style={styles.label}
                    >{`Body Font Size: ${currentSizes.body.fontSize}px`}</div>
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
