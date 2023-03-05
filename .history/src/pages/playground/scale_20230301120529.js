import { useState, useEffect } from "react";
import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import { Layout } from "@/dev/components/layout";
import { FontDropdown } from "@/dev/components/dropdowns";

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

  useEffect(() => {
    // must do this here to wait for loading
    const el = document.getElementById("para");
    setEl(el);
  }, []);

  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      height: "100vh",
    },
    col1: {
      height: "100vh",
    },
    para: {
      backgroundColor: "white",
      padding: "5%",
      alignSelf: "center",
    },
    form: {
      padding: "60px 5% 5% 10%",
      borderLeft: "1px solid gray",
    },
    label: {
      fontSize: ".8rem",
      color: "gray",
    },
    formHead: {
      textAlign: "center",
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
            <div id="col1" style={styles.col1}>
              <div style={styles.para}>
                <div id="para" style={theme.text.p}>
                  To start setting the scale for the project, select your
                  paragraph font. Play with the size of the font, until it looks
                  crisp and "right". When you've selected the size, enter it
                  into the calculator. Then, select a ratio, or how much
                  contrast you want between different sizes. The calculator will
                  then generate modular sizes.
                </div>
                <div style={styles.label}>Current Font: {getFont()}</div>
                <div style={styles.label}>
                  Current Font Size: {getFontSize()}
                </div>
              </div>
            </div>
            <div id="col2" style={styles.form}>
              <div style={styles.formHead}>Calculate Modular Scale</div>
              <FontDropdown section="fonts" element="body" isBaseLevel={true} />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
