import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
//import H1 from "@/components/text/H1";
//import styles from "@/styles/Playground.module.css";
import useTheme from "@/hooks/useTheme";

export default function Playground() {
  return (
    <>
      <Head>
        <title>Style Playground</title>
        <meta name="description" content="Play with Project Styles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={fontVariables}>
        <h1>Welcome to the Playground!</h1>
      </main>
    </>
  );
}
