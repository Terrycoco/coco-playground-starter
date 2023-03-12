import { useState } from "react";
import Head from "next/head";
import { useTheme } from "@/hooks";
import { Layout } from "@/dev/components/layout";
import { SpacingForm, FontForm } from "@/dev/components/forms";
import { Drawer } from "@/components/drawers";
import { useSelector, useDispatch } from "react-redux"; //redux hooks
import { selectTheme } from "@/store/themeSlice";
import { selectText, selectTextByElement } from "@/store/textSlice";

export default function Playground() {
  const theme = useSelector(selectTheme);
  const text = useSelector(selectText);
  const dispatch = useDispatch(); //to use hook
  const [showSpacing, setShowSpacing] = useState(false);
  const [showTypography, setShowTypography] = useState(false);
  const [showScale, setShowScale] = useState(false);
  const [showFont, setShowFont] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleScale = () => {
    setShowScale(!showScale);
    setShowSpacing(false);
    setShowTypography(false);
  };

  const toggleSpacing = () => {
    // setShowDrawer(true);
    dispatch(increment());
    console.log("count:", counter);
  };
  const toggleTypography = () => {
    setShowTypography(!showTypography);
    setShowSpacing(false);
    setShowScale(false);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const toggleDrawer = () => {
    console.log("got to toggleDrawer on index");
    setShowDrawer(!showDrawer);
  };

  const handleStyleChange = () => {
    console.log("got here");
  };

  const getSpacingStyle = (el) => {
    console.log("el:", el);
  };

  const getTextStyle = (el) => {
    console.log("text:", text);
    let bc;
    if (showSpacing) {
      bc = "transparent";
    } else {
      bc = "transparent";
    }
    console.log("elis:", el, text[el]);
    return { ...text[el], backgroundColor: `transparent` };
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
        <Layout
          onClickSpacing={toggleSpacing}
          onClickTypography={toggleTypography}
          onClickScale={toggleScale}
          onClickDesign={toggleDrawer}
          onClickFont={toggleFont}
        >
          <Drawer
            show={showDrawer}
            onClose={closeDrawer}
            openWidth="500px"
          ></Drawer>
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
