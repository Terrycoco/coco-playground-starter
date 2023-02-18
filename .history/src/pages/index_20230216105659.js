import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
//import styles from "@/styles/Home.module.css";

import { ColorDropdown } from "@/dev/components/dropdowns";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section
          style={{ maxWidth: "600px", backgroundColor: "var(--clr-primary" }}
        >
          <p key={Math.random()} elem="h1">
            I am a h1 heading
          </p>

          <p key={Math.random()} elem="h2">
            I am a h2 heading
          </p>
          <p key={Math.random()} elem="h3">
            I am a h3 heading
          </p>
          <p key={Math.random()} elem="h4">
            I am a h4 heading
          </p>

          <p key={Math.random()} elem="h5">
            I am a h5 heading
          </p>
          <p key={Math.random()} elem="h6">
            I am a h6 heading
          </p>
          <p key={Math.random()} elem="subtitle1">
            I am a subtitle1
          </p>
          <p key={Math.random()} elem="subtitle2">
            I am a subtitle2
          </p>
        </section>
      </main>
    </>
  );
}