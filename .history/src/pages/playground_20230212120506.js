import { useState } from "react";
import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
import H1 from "@/components/text/H1";
//import styles from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import StyleForm from "@/dev/components/StyleForm";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Page } from "@/components/layout";

export default function Playground() {
  const { theme } = useTheme();
  const [section, setSection] = useState(); //TODO flatten theme?
  const [element, setElement] = useState();

  const clickMe = (e, section, el) => {
    e.stopPropagation();
    e.preventDefault();
    //  console.log("el clicked:", el);
    setSection(section);
    setElement(el);
  };

  console.log("playground gets theme: ", theme);
  return (
    <>
      <Head>
        <title>Style Playground</title>
        <meta name="description" content="Play with Project Styles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={fontVariables}>
        <Page onClick={clickMe}>
          <FlexLayout
            style={{
              justifyContent: "space-between",
            }}
          >
            <FlexColumn style={{ flexBasis: "60%" }}>
              <H1 onClick={(e) => clickMe(e, "text", "h1")}>
                Welcome to the Playground!
              </H1>
            </FlexColumn>

            <FlexColumn style={{ width: "400px" }}>
              <StyleForm section={section} element={element} />
            </FlexColumn>
          </FlexLayout>
        </Page>
      </main>
    </>
  );
}
