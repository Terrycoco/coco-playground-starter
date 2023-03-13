import { useState, useEffect } from "react";
import Head from "next/head";
import { useViewport } from "@/hooks";
import { getFontNameFromVar } from "@/utils/fonts";
import { Layout } from "@/dev/components/layout";

import { useSelector, useDispatch } from "react-redux"; //redux hooks
import { selectText, selectTextByElement } from "@/store/textSlice";
import { selectFontObjs } from "@/store/fontsSlice";
import { selectAllDeviceSizes, updateDevice } from "@/store/fontSizesSlice";

export default function Playground() {
  const { screen } = useViewport();
  //const [options, setOptions] = useState([]);
  const themeFonts = useSelector(selectFontObjs);
  const [hCount, setHCount] = useState(0);
  const fontSizes = useSelector(selectAllDeviceSizes);
  const text = useSelector(selectText);
  const dispatch = useDispatch(); //to use hook
  const [isLoaded, setIsLoaded] = useState(false);

  //on load set current viewport
  useEffect(() => {
    dispatch(updateDevice(screen));
    setIsLoaded(true);
    setHCount(Object.keys(fontSizes.mobile) - 1);
  }, []);

  useEffect(() => {
    setHCount(Object.keys(fontSizes.mobile) - 1);
  }, [fontSizes]);

  let styles = {
    smgray: {
      color: "var(--clr-blackish50)",
      fontSize: "smaller",
    },
  };

  const handleStyleChange = () => {
    console.log("got here");
  };

  const getSpacingStyle = (el) => {
    //  console.log("el:", el);
  };

  const getTextStyle = (el) => {
    if (screen !== undefined) {
      let style = { ...text[el] }; //whats in theme
      console.log("screen:", screen);
      console.log("fontsizes:", fontSizes);
      style.fontFamily = themeFonts.body.value;
      style.fontSize = fontSizes[screen].body.fontSize + "px";
      style.lineHeight = fontSizes[screen].body.lineHeight;
      return style;
    }
  };

  const getHStyle = (hnum) => {
    //how many are we dealing with here?
    if (hnum <= hCount) {
      return {
        fontFamily: themeFonts.display.value,
        fontSize: fontSizes[currentDevice],
      };
    } else {
      return { display: "none" };
    }
  };

  return (
    <>
      <Head>
        <title>Style Playground</title>
        <meta name="description" content="Play with Project Styles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <section>
            <h1 style={getHStyle(1)}>
              This the result of your Theme{"   "}
              <span style={styles.smgray}>(h1)</span>
            </h1>
            <h2 style={getHStyle(2)}>
              Your Default Styles Are Shown{"   "}
              <span style={styles.smgray}>(h2)</span>
            </h2>
            <h3 style={getHStyle(3)}>
              You selected {`${hCount}`} levels of headings.
              <span style={styles.smgray}>(h3)</span>
            </h3>

            <h4 style={getHStyle(4)}>
              I am a heading level 4 {"   "}
              <span style={styles.smgray}>(h4)</span>
            </h4>

            <h5 style={getHStyle(5)}>
              I am a heading level 5{"   "}
              <span style={styles.smgray}>(h5)</span>
            </h5>

            <h6 style={getHStyle(6)}>
              I am a heading level 6{"   "}
              <span style={styles.smgray}>(h6)</span>
            </h6>

            <p data-el="p" style={getTextStyle("p")}>
              Your typography styles will show up here. These are the default
              styles for each element, which will be consistent across your
              project. You can, of course, alter them for individual elements as
              you see fit. <span style={styles.smgray}>(p)</span>
            </p>
            <p data-el="p" style={getTextStyle("p")}>
              This is the paragraph element. To set the font scale among the
              different headings and at different screen resolutions, go to{" "}
              <b>SCALE</b>. The rest of the paragraph settings can be found by
              clicking <b>TYPOGRAPHY</b> <span style={styles.smgray}>(p)</span>
            </p>

            <p data-el="p" style={getTextStyle("p")}>
              Don't like the spacing? Click <b>SPACING</b> to set default
              padding and margins for elements like sections, headers,
              paragraphs, etc. <span style={styles.smgray}>(p)</span>
            </p>
          </section>
        </Layout>
      </main>
    </>
  );
}
