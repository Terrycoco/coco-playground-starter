import { useState } from "react";
import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import StyleForm from "@/dev/components/StyleForm";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Page } from "@/components/layout";

export default function Playground() {
  const { theme } = useTheme();
  const [section, setSection] = useState(); //TODO flatten theme?
  const [element, setElement] = useState();
  const [styleObj, setStyleObj] = useState({});

  const clickMe = (e, sect, el) => {
    e.stopPropagation();
    e.preventDefault();
    setStyleObj(theme[sect][el]);
    setSection(sect);
    setElement(el);
  };

  //console.log("playground gets theme: ", theme);
  return (
    <>
      <Head>
        <title>Style Playground</title>
        <meta name="description" content="Play with Project Styles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Page onClick={clickMe}>
          <StyleForm
            key={`${section}${element}`}
            section={section}
            element={element}
            styleObj={styleObj}
          />

          <section style={{ maxWidth: "600px" }}>
            <Text key={Math.random()} elem="h1" clicked={clickMe}>
              I am a h1 heading
            </Text>

            <Text key={Math.random()} elem="h2" clicked={clickMe}>
              I am a h2 heading
            </Text>
            <Text key={Math.random()} elem="h3" clicked={clickMe}>
              I am a h3 heading
            </Text>
            <Text key={Math.random()} elem="h4" clicked={clickMe}>
              I am a h4 heading
            </Text>

            <Text key={Math.random()} elem="h5" clicked={clickMe}>
              I am a h5 heading
            </Text>
            <Text key={Math.random()} elem="h6" clicked={clickMe}>
              I am a h6 heading
            </Text>
            <Text key={Math.random()} elem="subtitle1" clicked={clickMe}>
              I am a subtitle1
            </Text>
            <Text key={Math.random()} elem="subtitle2" clicked={clickMe}>
              I am a subtitle2
            </Text>
          </section>
        </Page>
      </main>
    </>
  );
}
