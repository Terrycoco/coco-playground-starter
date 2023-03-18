import { useState, useEffect, useCallback, useMemo } from "react";
import Head from "next/head";
import { fontVariables, getFontVariable } from "@/utils/fonts";
import { getValFromCSS } from "@/utils/strings";
import { Layout } from "@/dev/components/layout";
// import { Drawer } from "@/components/drawers";
// import ScaleForm from "@/dev/components/forms/ScaleForm";
import ScreenEmulator from "@/dev/components/viewport/ScreenEmulator";

//store------------------------------
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllDeviceSizes,
  selectCurrentDeviceSizes,
  selectCurrentDevice,
} from "@/store/fontSizesSlice";
import { setCurrentPage, setCurrentForm } from "@/store/playgroundSlice";
import { selectFontObjs } from "@/store/fontsSlice";
import { selectVariables } from "@/store/variablesSlice";
import { selectText } from "@/store/textSlice";

export default function Scale() {
  const dispatch = useDispatch();
  const fontSizes = useSelector(selectAllDeviceSizes);
  const currentDevice = useSelector(selectCurrentDevice);
  const currentSizes = useSelector(selectCurrentDeviceSizes);
  const themeFonts = useSelector(selectFontObjs);
  const variables = useSelector(selectVariables);
  const text = useSelector(selectText);

  //make sure proper form is showing after render
  useEffect(() => {
    dispatch(setCurrentForm("scale"));
    dispatch(setCurrentPage("/playground/scale"));
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
  };

  const getParaStyle = () => {
    if (currentDevice !== undefined) {
      let style = { ...text["p"] };
      style.fontFamily = variables["var(--font-body)"];
      style.fontSize = fontSizes[currentDevice].body.fontSize + "px";
      style.lineHeight = fontSizes[currentDevice].body.lineHeight;

      return style;
    }
  };

  const getHeadingStyle = (level) => {
    if (level !== undefined && currentDevice !== undefined) {
      console.log("levelis:", level);
      let mb = level.replace("fs", "") * 0.5 + 1;

      let style = {
        fontFamily: variables["var(--font-display)"],
        fontSize: fontSizes[currentDevice][level].fontSize + "px",
        lineHeight: fontSizes[currentDevice][level].lineHeight,
      };
      return style;
    }
    return { fontFamily: variables["var(--font-display)"] };
  };

  const getHeadings = () => {
    if (fontSizes) {
      let keys = Object.keys(fontSizes.mobile);
      console.log("keys:", keys);
      let result = [];
      for (let i = 1; i < keys.length; i++) {
        console.log("key:", keys[i]);
        result.unshift(
          <div
            key={keys[i]}
            style={getHeadingStyle(keys[i])}
          >{`Heading ${keys[i]}  Adjust line height between these lines`}</div>
        );
      }
      return result;
    }
  };

  return (
    <>
      <Head>
        <title>Font Scale</title>
        <meta name="description" content="Font Scale For Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <div style={styles.page}>
            <div style={styles.contentSide}>
              <div>
                <ScreenEmulator device={currentDevice}>
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
                        Keep adding heading levels to fit the project content.
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
                <div style={styles.labelblock}>
                  <div style={styles.label}>
                    Body Font: {variables["var(--font-body)"]}
                  </div>
                  <div style={styles.label}>
                    {currentDevice
                      ? `Body Font Size: ${fontSizes[currentDevice].body.fontSize}px`
                      : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
