import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
//import H1 from "@/components/text/H1";
//import styles from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import StyleForm from "@/dev/components/StyleForm";
import { FlexColumn, FlexLayout } from "@/components/flex";

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
        <FlexLayout>
          <FlexColumn width="50vw">
            {" "}
            <h1>Welcome to the Playground!</h1>
          </FlexColumn>

          <FlexColumn>
            <StyleForm section="text" element="h1" />
          </FlexColumn>
        </FlexLayout>
      </main>
    </>
  );
}
