import Head from "next/head";
import Image from "next/image";
//import { Inter } from "@next/font/google";
import Link from "next/link";
import Page from "@/components/layout/Page";
import { FontDropdown } from "@/dev/components/dropdowns";
import { FontForm } from "@/dev/components/forms";
import { StyleGrid, StyleGridItem } from "@/dev/components/forms";

const style = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#FFFFE0",
};

let options = [
  { label: "Gelasio", value: "var(--font-gelasio)" },
  { label: "Work Sans", value: "var(--font-work-sans)" },
  { label: "Montserrat", value: "var(--font-montserrat)" },
];

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const test = (val) => {
    console.log("got here", val);
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
          <button onClick={test}>Test</button>
          <div>
            <StyleGrid title="Theme fonts">
              <StyleGridItem label="body" key="body">
                <FontDropdown
                  key="ddbody"
                  options={options}
                  defaultValue="Gelasio"
                  onSelect={test}
                />
              </StyleGridItem>
              <StyleGridItem label="display" key="display">
                <FontDropdown
                  key="dddisplay"
                  options={options}
                  defaultValue="Gelasio"
                  onSelect={test}
                />
              </StyleGridItem>
              <StyleGridItem label="forms" key="forms">
                <FontDropdown
                  key="ddforms"
                  options={options}
                  defaultValue="Work Sans"
                  onSelect={test}
                />
              </StyleGridItem>
              <StyleGridItem label="special" key="special">
                <FontDropdown
                  key="ddspecial"
                  options={options}
                  defaultValue="Playfair Display"
                  onSelect={test}
                />
              </StyleGridItem>
            </StyleGrid>
          </div>
        </Page>
      </main>
    </>
  );
}
