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
import Notepaper from "@/dev/components/Notepaper";

export default function Scale() {
  const { theme } = useTheme();
  const [section, setSection] = useState(); //TODO flatten theme?
  const [element, setElement] = useState();
  const [styleObj, setStyleObj] = useState({});
  const [showSpacing, setShowSpacing] = useState(false);
  const [showTypography, setShowTypography] = useState(false);
  const [showScale, setShowScale] = useState(false);

  // const clickMe = (e, sect, el) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   setStyleObj(theme[sect][el]);
  //   setSection(sect);
  //   setElement(el);
  // };

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
        >
          <section>
            <p>
              To start setting the scale for the project, select your body font.
              Play with the size of the font, until it looks crisp and "right".
              When you've selected the size, enter it into the calculator. Then,
              select a ratio, or how much contrast you want between different
              sizes. The calculator will generate sizes on the scale.
            </p>
          </section>
        </Layout>
      </main>
    </>
  );
}
