import { useState, useEffect } from "react";
import Head from "next/head";
import { fontVariables, getFontVariable } from "@/utils/fonts";
import { getValFromCSS } from "@/utils/strings";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import { Layout, DeviceMenu } from "@/dev/components/layout";
import { FontDropdown, RatioDropdown } from "@/dev/components/dropdowns";
import { Slider, StyleGrid, StyleGridItem } from "@/dev/components/forms";
import { calcScale, calcFontSizes } from "@/dev/utils/scaleUtils";
import { Resizable } from "re-resizable";
// import {
//   SpacingForm,
//   Slider,
//   TextForm,
//   ScaleForm,
// } from "@/dev/components/forms";
import Notepaper from "@/dev/components/Notepaper";

const FontLevel = (props) => {
  <StyleGrid title="smallest heading">
    <StyleGridItem label="Font">
      <FontDropdown
        key={`${props.level}font`}
        section="fonts"
        element="display"
        isBaseLevel={true}
      />
    </StyleGridItem>
    <StyleGridItem label="Font Size">
      <Slider
        key={`${props.level}FontSize`}
        id={props.level}
        min={getValFromCSS(pFontSize) + 1}
        max="60"
        step="1"
        defaultValue={p1FontSize}
        onChange={handleP1FontSizeChange}
        suf="px"
      />
    </StyleGridItem>

    <StyleGridItem label="Line Height">
      <Slider
        key={`${props.level}LineHeight`}
        id={`${props.level}LineHeight`}
        min=".98"
        max="3.0"
        step="0.01"
        defaultValue={`${props.level}LineHeight`}
        onChange={handleP1LineHeightChange}
        suf=""
      />
    </StyleGridItem>
    <StyleGridItem label="Ratio To Base">
      <div>{p1Ratio}</div>
    </StyleGridItem>
  </StyleGrid>;
};

export default function Scale() {
  const { theme, setTheme } = useTheme();
  const [el, setEl] = useState(null);
  const [baseFont, setBaseFont] = useState();
  const [baseFontSize, setBaseFontSize] = useState();
  const [baseLineHeight, setBaseLineHeight] = useState();
  const [p1Font, setP1Font] = useState();
  const [p1FontSize, setP1FontSize] = useState();
  const [p1Ratio, setP1Ratio] = useState();
  const [p1LineHeight, setP1LineHeight] = useState();
  const [tab, setTab] = useState(1);
  const [sizes, setSizes] = useState();
  const [levelCount, setLevelCount] = useState(0);
  const [levels, setLevels] = useState({});

  useEffect(() => {
    // must do this here to wait for loading
    const el = document.getElementById("para");
    setEl(el);
    setBaseFont(theme.fonts.base);
    setBaseFontSize(theme.fontLevels.base.fontSize);
    setBaseLineHeight(theme.fontLevels.base.lineHeight);
    setLevels(theme.fontLevels.base);
  }, []);

  useEffect(() => {
    if (theme.fonts.base !== baseFont) {
      setBaseFont(theme.fonts.base);
    }
    if (theme.fontLevels.base.fontSize !== baseFontSize) {
      setBaseFontSize(theme.fontLevels.base.fontSize);
    }
    if (theme.project.baseLineHeight !== baseLineHeight) {
      setBaseLineHeight(theme.fontLevels.base.LineHeight);
    }
  }, [theme]);

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

  const generate = () => {
    // let fs = getValFromCSS(p1FontSize);
    // let ratio = fs / getValFromCSS(pFontSize);
    // setP1Ratio(ratio);
    // let sizes = calcScale(pFontSize, ratio);
    // setSizes(sizes);
    // setTab(2);
    // calcFontSizes("18px", 2, 1.6667);
    // calcFontSizes("19px", 2, 2.7368);
    let nextlevel = levelCount + 1;

    //add new level to levels
    let levs = Object.assign({}, levels);
    let level = `fs${nextlevel}`;
    let prev = levelCount == 0 ? "base" : `fs${levelCount}`;
    if (!levs.hasOwnProperty(level)) {
      levs[level] = {
        fontSize: levs[prev].fontSize,
        lineHeight: levs[prev].lineHeight,
      };
    }

    setLevelCount(nextlevel);
    setLevels(levs);
    console.log("levs:", levs);
  };

  const changeTab = () => {
    setTab(1);
  };

  const getFontSize = (e) => {
    if (el !== null) {
      let styles = window.getComputedStyle(el);
      return styles.getPropertyValue("font-size");
    }
  };
  const getFont = (e) => {
    if (el !== null) {
      let styles = window.getComputedStyle(el);
      return styles.getPropertyValue("font-family");
    }
  };

  const getParaStyle = () => {
    let style = {
      fontFamily: getFontVariable(baseFont),
      fontSize: baseFontSize,
      lineHeight: baseLineHeight,
      marginBottom: "1rem",
    };
    return style;
  };

  const getP1Style = () => {
    let style = {
      fontFamily: getFontVariable(p1Font),
      fontSize: p1FontSize,
      lineHeight: p1LineHeight,
      marginBottom: "1rem",
    };
    return style;
  };

  const getLevelStyle = (level) => {
    let style = {
      fontFamily: getFontVariable(theme.fonts.display),
      fontSize: levels[level].fontSize,
      lineHeight: levels[level].lineHeight,
      marginBottom: "2rem",
    };
    return style;
  };

  const handleFontSizeChange = (id, valUnit) => {
    //update theme or just save val?

    setBaseFontSize(valUnit);
  };

  const handleP1FontSizeChange = (id, valUnit) => {
    setP1FontSize(valUnit);
    if (pFontSize) {
      let fs = getValFromCSS(valUnit);

      let ratio = fs / getValFromCSS(pFontSize);
      setP1Ratio(ratio);
    }
  };

  const handleLineHeightChange = (id, valUnit) => {
    setPLineHeight(valUnit);
  };

  const handleP1LineHeightChange = (id, valUnit) => {
    setP1LineHeight(valUnit);
  };

  const updateRatio = (newval) => {
    setPRatio(newval);
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
                {levelCount > 0 && (
                  <div style={getP1Style()}>
                    I Am The First Level Up Heading (fs1) <br />
                    Adjust my line height between lines
                  </div>
                )}
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
                  <div style={styles.label}>P Font: {pFont}</div>
                  <div style={styles.label}>P Font Size: {pFontSize}</div>
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
              <StyleGrid title="base">
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
                    defaultValue={pFontSize}
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
                    defaultValue={pLineHeight}
                    onChange={handleLineHeightChange}
                    suf=""
                  />
                </StyleGridItem>
              </StyleGrid>

              <div style={styles.buttonrow}>
                <button onClick={changeTab}>Back</button>
                <button onClick={generate}>Add Heading Level</button>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
