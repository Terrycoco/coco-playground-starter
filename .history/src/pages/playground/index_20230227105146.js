import { useState } from "react";
import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Layout } from "@/dev/components/layout";
import { SpacingForm, Slider } from "@/dev/components/forms";

export default function Playground() {
  const { theme } = useTheme();
  const [section, setSection] = useState(); //TODO flatten theme?
  const [element, setElement] = useState();
  const [styleObj, setStyleObj] = useState({});
  const [showSpacing, setShowSpacing] = useState(false);

  // const clickMe = (e, sect, el) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   setStyleObj(theme[sect][el]);
  //   setSection(sect);
  //   setElement(el);
  // };

  const toggleSpacing = () => {
    setShowSpacing(!showSpacing);
  };

  const handleValueChange = () => {
    console.log("got here");
  };

  const getSpacingStyle = (el) => {
    let bc;
    if (showSpacing) {
      bc = "#FFFFE0";
    } else {
      bc = "var(--clr-whitish)";
    }
    return { ...theme.spacing[el], backgroundColor: `${bc}` };
  };
  const getTextStyle = (el) => {
    let bc;
    if (showSpacing) {
      bc = "var(--clr-whitish)";
    } else {
      bc = "#FFFFFF";
    }
    return { ...theme.text[el], backgroundColor: `${bc}` };
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
        <Layout onClickSpacing={toggleSpacing}>
          <section style={getSpacingStyle("section")}>
            <h1 style={getTextStyle("h1")}>I am a heading h1</h1>
            <h2 style={getTextStyle("h2")}>I am a heading h2</h2>
            <h3 style={getTextStyle("h3")}>I am a heading h3</h3>
            <p data-el="p" style={getTextStyle("p")}>
              Play with typography here. I am a paragraph style. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.{" "}
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h3>I am a heading h3</h3>
            <p data-el="p">
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

          {showSpacing && <SpacingForm />}
        </Layout>
      </main>
    </>
  );
}
