import Head from "next/head";
import Image from "next/image";
import H1 from "@/components/text/H1";

export default function Playground() {
  return (
    <>
      <Head>
        <title>Style Playground</title>
        <meta name="description" content="Play with Project Styles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>I am a H1 component text</h1>
      </main>
    </>
  );
}
