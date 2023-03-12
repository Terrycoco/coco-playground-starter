import { useState, useEffect, useCallback, useMemo } from "react";
import Head from "next/head";
import { fontVariables, getFontVariable } from "@/utils/fonts";
import { getValFromCSS } from "@/utils/strings";
import { Layout } from "@/dev/components/layout";
import { Drawer } from "@/components/drawers";
import { ThemeViewer, ScaleForm } from "@/dev/components/forms";
import ScreenEmulator from "@/dev/components/viewport/ScreenEmulator";

//store------------------------------
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllDevices,
  selectCurrentDeviceSizes,
  selectCurrentDevice,
} from "@/store/fontSizesSlice";
import { selectFonts } from "@/store/fontsSlice";

export default function Scale() {
  const dispatch = useDispatch();
  const fontSizes = useSelector(selectAllDevices);
  const currentDevice = useSelector(selectCurrentDevice);
  const currentSizes = useSelector(selectCurrentDeviceSizes);
  const fonts = useSelector(selectFonts);
  const [device, setDevice] = useState("mobile");
  const [el, setEl] = useState(null);
  const [tab, setTab] = useState(1);
  const [showTheme, setShowTheme] = useState(false);
  const [showSpacing, setShowSpacing] = useState(false);
  const [showTypography, setShowTypography] = useState(false);
  const [showScale, setShowScale] = useState(false);
  const [showDrawer, setShowDrawer] = useState(true);

  useEffect(() => {
    // must do this here to wait for loading
    const el = document.getElementById("para");
    setEl(el);
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
    if (currentSizes) {
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
    }
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
        <title>Font Scale</title>
        <meta name="description" content="Font Scale For Project" />
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
            <ScaleForm />
          </Drawer>

          <div style={styles.page}>
            {tab === 1 && (
              <div style={styles.contentSide}>
                <div>
                  <ScreenEmulator device={currentDevice}>
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
