import { useState } from "react";
import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Layout } from "@/dev/components/layout";
import { SpacingForm } from "@/dev/components/forms";
import { Drawer } from "@/components/drawers";

export default function Playground() {
  const { theme } = useTheme();
  const [section, setSection] = useState(); //TODO flatten theme?
  const [element, setElement] = useState();
  const [styleObj, setStyleObj] = useState({});
  const [showSpacing, setShowSpacing] = useState(false);
  const [showTypography, setShowTypography] = useState(false);
  const [showScale, setShowScale] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleScale = () => {
    setShowScale(!showScale);
    setShowSpacing(false);
    setShowTypography(false);
  };

  const toggleSpacing = () => {
    setShowDrawer(true);
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
    if (theme.spacing[el] === undefined) return {};

    return {
      backgroundColor: "yellow",
    };
  };

  const getTextStyle = (el) => {
    let bc;
    if (showSpacing) {
      bc = "transparent";
    } else {
      bc = "transparent";
    }
    return { ...theme.text[el], backgroundColor: `transparent` };
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
        >
          <Drawer show={showDrawer} onClose={closeDrawer} openWidth="500px">
            <SpacingForm />
          </Drawer>
          <section style={getSpacingStyle("section")}>
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
              This is the paragraph element. To alter the font size and scale
              between paragraph and the headings and line heights, go to
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
