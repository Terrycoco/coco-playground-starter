import { useState, useEffect } from "react";
import Head from "next/head";
import { fontVariables, getFontVariable } from "@/utils/fonts";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import { Layout } from "@/dev/components/layout";
import { FontDropdown, RatioDropdown } from "@/dev/components/dropdowns";
import { Slider, StyleGrid, StyleGridItem } from "@/dev/components/forms";
import calcScale from "@/dev/utils/scaleUtils";

// import {
//   SpacingForm,
//   Slider,
//   TextForm,
//   ScaleForm,
// } from "@/dev/components/forms";
import Notepaper from "@/dev/components/Notepaper";

export default function Scale() {
  const { theme, setTheme } = useTheme();
  const [el, setEl] = useState(null);
  const [currentFont, setCurrentFont] = useState();
  const [currentFontSize, setCurrentFontSize] = useState();
  const [currentRatio, setCurrentRatio] = useState();
  const [currentLineHeight, setCurrentLineHeight] = useState();
  const [tab, setTab] = useState(1);

  useEffect(() => {
    // must do this here to wait for loading
    const el = document.getElementById("para");
    setEl(el);
    setCurrentFont(theme.project.baseFont);
    setCurrentFontSize(theme.project.baseFontSize);
    setCurrentRatio(theme.project.baseRatio);
    setCurrentLineHeight(theme.project.baseLineHeight);
  }, []);

  useEffect(() => {
    if (theme.project.baseFont !== currentFont) {
      setCurrentFont(theme.project.baseFont);
    }
    if (theme.project.baseRatio !== currentRatio) {
      setCurrentRatio(theme.project.baseRatio);
    }
    if (theme.project.baseLineHeight !== currentLineHeight) {
      setCurrentLineHeight(theme.project.baseLineHeight);
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
    calcScale(currentFontSize, currentRatio);
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
      fontFamily: getFontVariable(currentFont),
      fontSize: currentFontSize,
      lineHeight: currentLineHeight,
    };
    console.log("style:", style);
    return style;
  };

  const handleFontSizeChange = (id, valUnit) => {
    setCurrentFontSize(valUnit);
  };

  const handleLineHeightChange = (id, valUnit) => {
    setCurrentLineHeight(valUnit);
  };

  const updateRatio = (newval) => {
    setCurrentRatio(newval);
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
                <h6>I am the first size up (p1)</h6>
                <div id="para" style={getParaStyle()}>
                  To create the scale for the project, first select your
                  paragraph font. Play with the size of the font, until it looks
                  crisp and "right" to your eye. Then, play with the line height
                  for readability. Once you have the paragraph settings, select
                  your display font, and the font size for the
                  <b> first level up</b> heading. The calculator will then
                  generate suggested harmonious sizes.
                </div>
                <div className="scalecopy" style={styles.labelblock}>
                  <div style={styles.label}>Current Font: {currentFont}</div>
                  <div style={styles.label}>
                    Current Font Size: {currentFontSize}
                  </div>
                </div>
              </div>
            )}

            {tab === 2 && (
              <div className={css.scalecopy} style={styles.parablock}>
                <div style={{ fontSize: "27px" }}>I am the next size up</div>
                <div style={{ fontSize: "36px" }}>I am the next size up</div>
                <div style={{ fontSize: "45px" }}>I am the next size up</div>
                <div style={{ fontSize: "54px" }}>I am the next size up</div>
                <div style={{ fontSize: "63px" }}>I am the next size up</div>
                <div style={{ fontSize: "72px" }}>I am the next size up</div>
              </div>
            )}

            <div id="col2" style={styles.form}>
              <StyleGrid title="base">
                <StyleGridItem label="Base Font">
                  <FontDropdown
                    section="project"
                    element="baseFont"
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
                    defaultValue={currentFontSize}
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
                    defaultValue={currentLineHeight}
                    onChange={handleLineHeightChange}
                    suf=""
                  />
                </StyleGridItem>
                <StyleGridItem label="Ratio">
                  <RatioDropdown
                    defaultValue={theme.project.baseRatio}
                    onChange={updateRatio}
                  />
                </StyleGridItem>
              </StyleGrid>

              <StyleGrid title="smallest heading">
                <StyleGridItem label="Base Font">
                  <FontDropdown
                    section="project"
                    element="baseFont"
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
                    defaultValue={currentFontSize}
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
                    defaultValue={currentLineHeight}
                    onChange={handleLineHeightChange}
                    suf=""
                  />
                </StyleGridItem>
                <StyleGridItem label="Ratio">
                  <RatioDropdown
                    defaultValue={theme.project.baseRatio}
                    onChange={updateRatio}
                  />
                </StyleGridItem>
              </StyleGrid>
              <div style={styles.buttonrow}>
                <button onClick={generate}>Generate Scale</button>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
