import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Page from "@/components/layout/Page";
//import styles from "@/styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthUser, setAuthUser } from "@/store/authSlice";
import { selectFonts, selectFontByKey } from "@/store/fontsSlice";

const style = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#FFFFE0",
};

import { ColorDropdown } from "@/dev/components/dropdowns";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const authUser = useSelector(selectAuthUser);
  const fonts = useSelector(selectFonts);

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
          <span>{fonts}</span>
        </Page>
      </main>
    </>
  );
}
