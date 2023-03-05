import { useState, useEffect, useCallback, useMemo } from "react";
import Head from "next/head";
import { fontVariables, getFontVariable } from "@/utils/fonts";
import { getValFromCSS } from "@/utils/strings";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import { Layout, DeviceMenu } from "@/dev/components/layout";
import { FontDropdown, RatioDropdown } from "@/dev/components/dropdowns";
import { RangeSlider, StyleGrid, StyleGridItem } from "@/dev/components/forms";
import { calcScale, calcFontSizes } from "@/dev/utils/scaleUtils";
import { Resizable } from "re-resizable";
import Notepaper from "@/dev/components/Notepaper";

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
      max: 72,
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

  return (
    <StyleGrid title={levelName}>
      <StyleGridItem label="Font">
        <FontDropdown
          key={`${levelName}font`}
          section="fonts"
          element="display"
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
  const [el, setEl] = useState(null);
  const [tab, setTab] = useState(1);
  const [levelCount, setLevelCount] = useState(0);
  const [levels, setLevels] = useState({});
  const [firstRatio, setFirstRatio] = useState();

  useEffect(() => {
    // must do this here to wait for loading
    const el = document.getElementById("para");
    setEl(el);
    setLevels(theme.fontLevels);
    setRatio();
  }, []);

  const styles = {
    parablock: {
      backgroundColor: "white",
      padding: "5%",
      alignSelf: "center",
      flexBasis: "50%",
    },
    form: {
      padding: "80px 5% 5% 10%",
      borderLeft: "1px solid gray",
      flexBasis: "50%",
    },
    labelblock: {
      marginTop: "20px",
    },
    label: {
      fontSize: ".8rem",
      color: "gray",
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
    if (levels.hasOwnProperty(prev)) {
      let suggested = levels[prev].fontSize * firstRatio;
      console.log("suggested: ", suggested);
    }

    if (!levs.hasOwnProperty(next)) {
      levs[next] = {};
      levs[next].fontSize = levs[prev].fontSize; //suggest a size?
      levs[next].lineHeight = levs[prev].lineHeight;
    } else {
    }

    setLevelCount(nextlevel);
    setLevels(levs);
    console.log("new levs:", levs);
  };

  const changeTab = () => {
    setTab(1);
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
        marginBottom: "1rem",
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

  const updateRatio = (newval) => {
    setPRatio(newval);
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

  const getHeadings = () => {
    let result = [];
    for (let i = 1; i < levelCount + 1; i++) {
      result.unshift(
        <div
          style={getHeadingStyle(`fs${i}`)}
        >{`Heading for Level fs${i}`}</div>
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
          <div className={css.scalepage}>
            {tab === 1 && (
              <div className={css.scalecopy} style={styles.parablock}>
                {getHeadings()}
                <div id="para">
                  <div style={getParaStyle()}>
                    To create the scale for your project, first select the
                    paragraph font (fs0). Play with the size of the font, until
                    it looks crisp and "right" to your eye. Then, play with the
                    line height for readability.
                  </div>
                  <div style={getParaStyle()}>
                    Once you have the paragraph settings, do the same for the
                    <b> first level up</b>, or smallest, heading (fs1). The
                    level of contrast between the paragraph and the headings
                    depends on how many levels you intend to use.
                  </div>
                  <div style={getParaStyle()}>
                    Keep adding heading levels to fit your project.
                  </div>
                  <div style={getParaStyle()}>
                    When you are satisfied that it looks good at mobile size,
                    save your mobile settings. Then, check each device
                    resolution to make adjustments.{" "}
                    <b>Your eye is the best judge!</b>
                  </div>
                </div>
                <div className="scalecopy" style={styles.labelblock}>
                  <div style={styles.label}>P Font: {theme.fonts.base}</div>
                  <div style={styles.label}>
                    P Font Size: {theme.fontLevels.base.fontSize}
                  </div>
                </div>
              </div>
            )}

            {tab === 2 && (
              <div className={css.scalecopy} style={styles.parablock}>
                <div style={getHStyle("p6")}>P6 I am the next size up</div>
                <div style={getHStyle("p5")}>P5 I am the next size up</div>
                <div style={getHStyle("p4")}>P4 I am the next size up</div>
                <div style={getHStyle("p3")}>P3 I am the next size up</div>
                <div style={getHStyle("p2")}>P2 I am the next size up</div>
                <div style={getP1Style("p1")}>P1 I am the next size up</div>
                <div style={getParaStyle()}>
                  These are harmonious sizes for your project.
                </div>
              </div>
            )}

            <div id="col2" style={styles.form}>
              <div style={styles.buttonrow}>
                <button onClick={changeTab}>Back</button>
                <button onClick={generate}>Add Heading Level</button>
              </div>

              {showLevels()}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

{
  /* <StyleGrid title="base">
<StyleGridItem label="Base Font">
  <FontDropdown
    key="basefont"
    section="fonts"
    element="base"
    isBaseLevel={true}
  />
</StyleGridItem>
<StyleGridItem label="Base Font Size">
  <Slider
    key="baseFontSize"
    id="baseFontSize"
    min="4"
    max="40"
    step="1"
    defaultValue={baseFontSize}
    onChange={handleFontSizeChange}
    suf="px"
  />
</StyleGridItem>
<StyleGridItem label="Base Line Height">
  <Slider
    key="baseLineHeight"
    id="baseLineHeight"
    min="1"
    max="3.0"
    step="0.01"
    defaultValue={baseLineHeight}
    onChange={handleLineHeightChange}
    suf=""
  />
</StyleGridItem>
</StyleGrid> */
}
