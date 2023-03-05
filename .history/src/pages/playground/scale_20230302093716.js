import { useState, useEffect } from "react";
import Head from "next/head";
import { fontVariables, getFontVariable } from "@/utils/fonts";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import { Layout } from "@/dev/components/layout";
import { FontDropdown, RatioDropdown } from "@/dev/components/dropdowns";
import { Slider } from "@/dev/components/forms";
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
      flexBasis: 1,
    },
    form: {
      padding: "80px 5% 5% 10%",
      borderLeft: "1px solid gray",
      width: "50%",
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
              <div style={styles.parablock}>
                <div id="para" style={getParaStyle()}>
                  To create the scale for the project, first select your
                  paragraph font. Play with the size of the font, until it looks
                  crisp and "right" to your eye. Then, play with the line height
                  for readability. Once you have the paragraph settings, select
                  a ratio, or how much <b>contrast</b> you want between
                  different sizes. The calculator will then generate suggested
                  harmonious sizes.
                </div>
                <div style={styles.labelblock}>
                  <div style={styles.label}>Current Font: {currentFont}</div>
                  <div style={styles.label}>
                    Current Font Size: {currentFontSize}
                  </div>
                </div>
              </div>
            )}

            {tab === 2 && (
              <div id="scaleblock" style={styles.parablock}>
                <h6>It's all about Readability</h6>
              </div>
            )}

            <div id="col2" style={styles.form}>
              <div style={styles.row}>
                <span style={styles.rowlabel}>Base Font:</span>
                <FontDropdown
                  section="project"
                  element="baseFont"
                  isBaseLevel={true}
                />
              </div>
              <div style={styles.row}>
                <span style={styles.rowlabel}>Base Font Size:</span>
                <div style={styles.val}>
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
                </div>
              </div>
              <div style={styles.row}>
                <span style={styles.rowlabel}>Base Line Height:</span>
                <div style={styles.val}>
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
                </div>
              </div>
              <div style={styles.row}>
                <span style={styles.rowlabel}>Ratio:</span>
                <RatioDropdown
                  defaultValue={theme.project.baseRatio}
                  onChange={updateRatio}
                />
              </div>

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
