import { useState, useEffect } from "react";
import Head from "next/head";
import { fontVariables, getFontVariable } from "@/utils/fonts";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import { Layout } from "@/dev/components/layout";
import { FontDropdown } from "@/dev/components/dropdowns";
import { Slider } from "@/dev/components/forms";

// import {
//   SpacingForm,
//   Slider,
//   TextForm,
//   ScaleForm,
// } from "@/dev/components/forms";
import Notepaper from "@/dev/components/Notepaper";

export default function Scale() {
  const { theme } = useTheme();
  const [el, setEl] = useState(null);
  const [currentFont, setCurrentFont] = useState();
  const [currentFontSize, setCurrentFontSize] = useState();

  useEffect(() => {
    // must do this here to wait for loading
    const el = document.getElementById("para");
    setEl(el);
    setCurrentFont(theme.project.baseFont);
    setCurrentFontSize(theme.project.baseFontSize);
  }, []);

  useEffect(() => {
    if (theme.project.baseFont !== currentFont) {
      setCurrentFont(theme.project.baseFont);
    }
  }, [theme]);

  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      height: "100vh",
    },
    parablock: {
      backgroundColor: "white",
      padding: "5%",
      alignSelf: "center",
    },
    form: {
      padding: "80px 5% 5% 10%",
      borderLeft: "1px solid gray",
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
      height: "auto",
    },

    rowlabel: {
      border: "1px solid gray",
      fontFamily: "var(--font-body)",
      fontWeight: "normal",
      fontSize: "16px",
      paddingLeft: "1rem",
      display: "flex",
      alignItems: "center",
    },

    val: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: "normal",
      border: "1px solid gray",
      textAlign: "right",
      padding: " 1rem",
      fontSize: "1.5rem",
      fontFamily: "var(--font-body)",
    },
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
    };
    console.log("style:", style);
    return style;
  };

  const handleFontSizeChange = (id, valUnit) => {
    console.log("id:", id, "valUnit", valUnit);
    setCurrentFontSize(valUnit);
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
          <div style={styles.grid}>
            <div style={styles.parablock}>
              <div id="para" style={getParaStyle()}>
                To start setting the scale for the project, select your
                paragraph font. Play with the size of the font, until it looks
                crisp and "right" to your eye. (Don't worry about line height
                yet). When you've selected the size, enter it into the
                calculator. Then, select a ratio, or how much contrast you want
                between different sizes. The calculator will then generate
                modular sizes.
              </div>
              <div style={styles.labelblock}>
                <div style={styles.label}>Current Font: {currentFont}</div>
                <div style={styles.label}>
                  Current Font Size: {currentFontSize}
                </div>
              </div>
            </div>
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
                <Slider
                  key="baseFontSize"
                  id="baseFontSize"
                  min="4"
                  max="26"
                  defaultValue={currentFontSize}
                  onChange={handleFontSizeChange}
                  suf="px"
                />
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
