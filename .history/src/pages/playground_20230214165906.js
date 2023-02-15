import { useState } from "react";
import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
import { H1 } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import StyleForm from "@/dev/components/StyleForm";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Page } from "@/components/layout";

export default function Playground() {
  const { theme } = useTheme();
  const [section, setSection] = useState(); //TODO flatten theme?
  const [element, setElement] = useState();
  const [selectedStyleObj, setSelectedStyleObj] = useState({});

  const clickMe = (e, section, el) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("el clicked:", el);
    setSection(section);
    setElement(el);
  };

  // console.log("playground gets theme: ", theme);
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
          <StyleForm section={section} element={element} />

          <section style={{ flexBasis: "60%" }}>
            <H1 onClick={clickMe}>Welcome to the Playground!</H1>

            <h2 style={theme.text.h2} onClick={(e) => clickMe(e, "text", "h2")}>
              I am a h2 heading
            </h2>
            <h3 style={theme.text.h3} onClick={(e) => clickMe(e, "text", "h3")}>
              I am a h3 heading
            </h3>
          </section>
        </Page>
      </main>
    </>
  );
}
