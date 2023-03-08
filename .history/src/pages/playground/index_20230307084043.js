import { useState } from "react";
import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Layout } from "@/dev/components/layout";
import {
  SpacingForm,
  Slider,
  TextForm,
  ScaleForm,
} from "@/dev/components/forms";
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

  // const clickMe = (e, sect, el) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   setStyleObj(theme[sect][el]);
  //   setSection(sect);
  //   setElement(el);
  // };

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
    let bc;
    if (showSpacing) {
      bc = "#FFFFE0";
    } else {
      bc = "transparent";
    }
    return { ...theme.spacing[el], backgroundColor: `${bc}` };
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
            I am a drawer
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
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h3 style={getTextStyle("h3")}>I am a heading h3</h3>
            <p data-el="p" style={getTextStyle("p")}>
              Play with typography here. I am a paragraph style. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </section>

          {showScale && <ScaleForm />}
          {showSpacing && <SpacingForm />}
          {showTypography && (
            <TextForm
              styleObj={styleObj}
              element={element}
              section={section}
              device="laptop"
              onChange={handleStyleChange}
            />
          )}
        </Layout>
      </main>
    </>
  );
}
