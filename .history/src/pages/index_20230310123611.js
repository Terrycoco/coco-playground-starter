import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Page from "@/components/layout/Page";
//import styles from "@/styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { StyleGrid, StyleGridItem } from "@/dev/components/forms";
import { AllFontDropdown } from "@/dev/components/dropdowns";
import { selectFonts } from "@/store/fontsSlice";

import { FontForm } from "@/dev/components/forms";

const style = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#FFFFE0",
};

import { ColorDropdown } from "@/dev/components/dropdowns";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const fonts = useSelector((state) => state.fonts); //works

  const test = () => {};

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Page>
          <Link type="button" href="/playground">
            To Playground
          </Link>
          <button onClick={test}>Test</button>
          <div>
            <FontForm />
          </div>
        </Page>
      </main>
    </>
  );
}
