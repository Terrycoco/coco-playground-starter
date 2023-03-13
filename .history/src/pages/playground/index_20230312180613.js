import { useState, useEffect } from "react";
import Head from "next/head";
import { useViewport } from "@/hooks";
import { getFontNameFromVar } from "@/utils/fonts";
import { Layout } from "@/dev/components/layout";
import { SpacingForm, FontForm } from "@/dev/components/forms";
//import { Drawer } from "@/components/drawers";
import { useSelector, useDispatch } from "react-redux"; //redux hooks
//import { selectTheme } from "@/store/themeSlice";
import { selectText, selectTextByElement } from "@/store/textSlice";
import { selectFontObjs } from "@/store/fontsSlice";
import { selectAllDeviceSizes, updateDevice } from "@/store/fontSizesSlice";
import { getFontsArray } from "@/utils/fonts";

export default function Playground() {
  const { screen } = useViewport();
  const [options, setOptions] = useState([]);
  const themeFonts = useSelector(selectFontObjs);
  const allFonts = getFontsArray();
  const allFontSizes = useSelector(selectAllDeviceSizes);
  const text = useSelector(selectText);
  const dispatch = useDispatch(); //to use hook
  const [showSpacing, setShowSpacing] = useState(false);
  const [showTypography, setShowTypography] = useState(false);
  const [showScale, setShowScale] = useState(false);
  const [showFont, setShowFont] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  //on load set current viewport
  useEffect(() => {
    dispatch(updateDevice(screen));
    setIsLoaded(true);
  }, []);

  const toggleScale = () => {
    setShowScale(!showScale);
    setShowSpacing(false);
    setShowTypography(false);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  // const toggleOption = (option) => {
  //   //if drawer is open and option is not showing just show that
  //   //but leave drawer open
  //   switch (option) {
  //     case "fonts": {
  //       if (showFont === true) {
  //         //already showing
  //         setShowFont(false);
  //         setShowDrawer(false); //close drawer
  //       } else {
  //         setShowFont(true); //show
  //         setShowTypography(false);
  //         setShowSpacing(false);
  //         setShowDrawer(true); //open drawer
  //       }
  //       break;
  //     }
  //     case "drawer": {
  //       setShowDrawer(!showDrawer);
  //       break;
  //     }
  //   }
  // };

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
      console.log("fontsizes:", allFontSizes);
      style.fontFamily = themeFonts.body.value;
      style.fontSize = allFontSizes[screen].body.fontSize + "px";
      style.lineHeight = allFontSizes[screen].body.lineHeight;
      return style;
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
        <Layout onSelect={toggleOption}>
          <section>
            <h1 style={getTextStyle("h1")}>
              This is the end result of your Theme
            </h1>
            <h2 style={getTextStyle("h2")}>Your Default Styles Are Shown</h2>

            <p data-el="p" style={getTextStyle("p")}>
              Your typography styles will show up here. These are the default
              styles for each element, which will be consistent across your
              project. You can, of course, alter them for individual elements as
              you see fit.
            </p>
            <p data-el="p" style={getTextStyle("p")}>
              This is the paragraph element. To set the font scale among the
              different headings and at different screen resolutions, go to{" "}
              <b>SCALE</b>. The rest of the paragraph settings can be found by
              clicking <b>TYPOGRAPHY</b>
            </p>

            <p data-el="p" style={getTextStyle("p")}>
              Don't like the spacing? Click <b>SPACING</b> to set default
              padding and margins for elements like sections, headers,
              paragraphs, etc.
            </p>
          </section>
        </Layout>
      </main>
    </>
  );
}
