import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
//import { Inter } from "@next/font/google";
import Link from "next/link";
import Page from "@/components/layout/Page";
import { getFontsArray } from "@/utils/fonts";
import { useSelector, useDispatch } from "react-redux";
import { updateFont, selectFonts } from "@/store/fontsSlice";

const style = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#FFFFE0",
};

// let options = [
//   { label: "Gelasio", value: "var(--font-gelasio)" },
//   { label: "Work Sans", value: "var(--font-work-sans)" },
//   { label: "Montserrat", value: "var(--font-montserrat)" },
// ];

let options = getFontsArray();

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const themeFonts = useSelector(selectFonts);

  useEffect(() => {
    console.log("themeFonts:", themeFonts);
  }, []);

  const test = (val) => {
    val.key = "body";
    dispatch(updateFont(val));
  };

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

          <p>
            <a href="/" target="_blank">
              {" "}
              Anchor tag{" "}
            </a>
          </p>
          <p>
            <i> italic text </i>
          </p>
          <p>
            <b>bold text </b>
          </p>
          <p>
            <strong> strong text </strong>
          </p>
          <p>
            <em> strong text </em>
          </p>
          <p>
            <sub> subscripted text </sub>
          </p>
          <p>
            <sup> superscripted text </sup>
          </p>
          <p>
            <small> small text </small>
          </p>
          <p>
            <del> deleted text </del>
          </p>
          <p>
            <ins> inserted text </ins>
          </p>
          <p>
            <blockquote> blockquote </blockquote>
          </p>
          <p>
            <q> inline quote </q>
          </p>
          <p>
            <cite> cited text </cite>
          </p>
          <p>
            <address> address </address>
          </p>
          <p>
            <abbr> inserted text </abbr>
          </p>
          <p>
            <code> code snippet </code>
          </p>
          <p>
            <mark> marked text </mark>
          </p>
        </Page>
      </main>
    </>
  );
}

// <StyleGrid title="Theme Fonts">
// <StyleGridItem label="body">
//   <FontDropdown
//     onSelect={test}
//     defaultObj={themeFonts.body}
//     key="body"
//     options={options}
//   />
// </StyleGridItem>
// <StyleGridItem label="headings">
//   <FontDropdown
//     onSelect={test}
//     defaultObj={themeFonts.display}
//     key="display"
//     options={options}
//   />
// </StyleGridItem>
// </StyleGrid>
