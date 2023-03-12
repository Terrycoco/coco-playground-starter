import Head from "next/head";
import Image from "next/image";
//import { Inter } from "@next/font/google";
import Link from "next/link";
import Page from "@/components/layout/Page";
import { FontDropdown } from "@/dev/components/dropdowns";
import { FontForm } from "@/dev/components/forms";
import { StyleGrid, StyleGridItem } from "@/dev/components/forms";
import { getFontsArray } from "@/utils/fonts";
import { useSelector, useDispatch } from "react-redux";
import { selectFonts, updateFont } from "@/store/fontsSlice";

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
  let themeFonts = useSelector(selectFonts);

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
            <StyleGrid title="Theme Fonts">
              <StyleGridItem label="body">
                <FontDropdown
                  onSelect={test}
                  defaultValue={themeFonts.body}
                  key="body"
                  options={options}
                />
              </StyleGridItem>
            </StyleGrid>
          </div>
        </Page>
      </main>
    </>
  );
}

// <StyleGrid title="theme fonts">
// <StyleGridItem label="sup">
//   <OutsideAlerter onClickOutside={outsidetest2}>
//     <FontDropdown
//       onSelect={test}
//       defaultValue="Gelasio"
//       key="body"
//       options={options}
//     />
//   </OutsideAlerter>
// </StyleGridItem>
// </StyleGrid>
