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
  const { theme, setTheme } = useTheme();
  const [device, setDevice] = useState("mobile");
  const [el, setEl] = useState(null);
  const [tab, setTab] = useState(1);
  const [levelCount, setLevelCount] = useState(0);
  const [levels, setLevels] = useState({});
  const [firstRatio, setFirstRatio] = useState(1.6);
  const [showTheme, setShowTheme] = useState(false);

  useEffect(() => {
    // must do this here to wait for loading
    const el = document.getElementById("para");
    setEl(el);
    setLevels(theme.fontSizes.mobile);
    setRatio();
  }, []);

  const styles = {
    page: {
      display: "flex",
      flexDirection: "row",
    },
    contentSide: {
      flexBasis: "50%",
      overflowY: "hidden",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    formSide: {
      backgroundColor: "white",
      flexBasis: "50%",
      height: "100vh",
      overflowY: "hidden",
      padding: "5%",
    },
    form: {
      padding: "var(--sp-header-height) 5% 5% 10%",
      borderLeft: "1px solid gray",
      overflowY: "scroll",
      width: "100%",
    },
    labelblock: {
      marginTop: "20px",
    },
    label: {
      fontSize: "14px",
      color: "gray",
      fontFamily: "Arial",
      backgroundColor: "yellow",
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
      marginTop: "2rem",
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
    console.log("level copy:", levs);
    let next = `fs${nextlevel}`;

    let prev = levelCount === 0 ? "base" : `fs${levelCount}`;
    if (levels.hasOwnProperty(prev) && firstRatio != null) {
      let suggested = levels[prev].fontSize * firstRatio;
      console.log("suggested: ", suggested);

      if (!levs.hasOwnProperty(next)) {
        levs[next] = {};
        levs[next].fontSize = suggested.toFixed(0); //suggest a size?
        levs[next].lineHeight = levs[prev].lineHeight;
      }
    }

    setLevelCount(nextlevel);
    setLevels(levs);
    console.log("new levs:", levs);
  };

  const changeTab = () => {
    setTab(1);
  };

  const changeDevice = (dev) => {
    console.log("dev:", dev);
    setDevice(dev);
  };

  const getParaStyle = () => {
    if (levels.hasOwnProperty("base")) {
      let style = {
        fontFamily: getFontVariable(theme.fonts.base),
        fontSize: levels.base.fontSize + "px",
        lineHeight: levels.base.lineHeight,
        marginBottom: "1rem",
      };
      return style;
    }
  };

  const getHeadingStyle = (level) => {
    if (levels.hasOwnProperty(level)) {
      let style = {
        fontFamily: getFontVariable(theme.fonts.display),
        fontSize: levels[level].fontSize + "px",
        lineHeight: levels[level].lineHeight,
        fontWeight: "bold",
        marginBottom: level.replace("fs", "") + "rem",
      };
      return style;
    }
  };

  const handleLineHeightChange = (id, newval) => {
    //console.log("recd from ", id, newval);
    let levs = Object.assign({}, levels);
    levs[id].lineHeight = newval;
    setLevels(levs);
  };

  const handleFontSizeChange = (id, newval) => {
    // console.log("recd from ", id, newval);
    let levs = Object.assign({}, levels);
    levs[id].fontSize = newval;
    setLevels(levs);

    //set latest ratio
    if (id === "fs1") {
      let bfs = levels.base.fontSize;
      let ratio = newval / bfs;
      setFirstRatio(ratio.toFixed(4));
    }
  };

  const showLevels = () => {
    //only show levels if count is correct
    let result = [];
    for (let i = 0; i < levelCount + 1; i++) {
      let levelName = i == 0 ? "base" : `fs${i}`;
      console.log("levelName:", levelName);
      if (levels.hasOwnProperty(levelName)) {
        let fs = getValFromCSS(levels[levelName].fontSize);
        //   // console.log("fs to ", levelName, fs);
        result.unshift(
          <FontLevel
            key={levelName}
            fontSize={fs}
            lineHeight={levels[levelName].lineHeight}
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
    setShowTheme(!showTheme);
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

  return (
    <>
      <Head>
        <title>Project Sizing Scale</title>
        <meta name="description" content="Modular Sizing For Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <ThemeViewer onClose={toggleTheme} show={showTheme} />
          <div style={styles.page}>
            {tab === 1 && (
              <div style={styles.contentSide}>
                <ScreenEmulator device={device}>
                  <div style={styles.parablock}>
                    {getHeadings()}
                    <div id="para">
                      <div style={getParaStyle()}>
                        To create the scale for your project, first select the
                        paragraph font (fs0). Play with the size of the font,
                        until it looks crisp and "right" to your eye. Then, play
                        with the line height for readability.
                      </div>
                      <div style={getParaStyle()}>
                        Once you have the paragraph settings, do the same for
                        the
                        <b> first level up</b>, or smallest, heading (fs1). The
                        ratio between the body and the first level will suggest
                        further sizes, <b>but tweak them as you like.</b>
                      </div>
                      <div style={getParaStyle()}>
                        Keep adding heading levels to fit your project.
                      </div>
                      <div style={getParaStyle()}>
                        When you are satisfied that it looks good at mobile
                        size, save your mobile settings. Then, check each device
                        resolution to make adjustments.{" "}
                        <b>Your eye is the best judge!</b>
                      </div>
                    </div>
                  </div>
                </ScreenEmulator>
                <div className="scalecopy" style={styles.labelblock}>
                  <div style={styles.label}>Body Font: {theme.fonts.base}</div>
                  <div style={styles.label}>
                    Body Font Size: {theme.fontSizes.mobile.base.fontSize}
                  </div>
                </div>
              </div>
            )}

            <div id="col2" style={styles.formSide}>
              <DeviceMenu device={device} onChange={changeDevice} />
              <div className={css.scroll}>
                <div style={styles.buttonrow}>
                  <Button onClick={changeTab}>Back</Button>
                  <Button onClick={generate}>Add Heading Level</Button>
                  <Button onClick={toggleTheme}>View Theme</Button>
                </div>

                {showLevels()}
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

// {showTheme && (
//   <ThemeViewer show={showTheme} onClose={toggleTheme} />
// )}
