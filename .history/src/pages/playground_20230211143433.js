import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
//import H1 from "@/components/text/H1";
//import styles from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import StyleForm from "@/dev/components/StyleForm";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Page } from "@/components/layout";

export default function Playground() {
  const { theme } = useTheme();
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
        <Page>
          <FlexLayout
            style={{
              justifyContent: "space-between",
            }}
          >
            <FlexColumn style={{ flexBasis: "60%" }}>
              <h1 style={theme.text.h1}>Welcome to the Playground!</h1>
            </FlexColumn>

            <FlexColumn style={{ width: "400px" }}>
              <StyleForm section="layout" element="page" />
            </FlexColumn>
          </FlexLayout>
        </Page>
      </main>
    </>
  );
}
