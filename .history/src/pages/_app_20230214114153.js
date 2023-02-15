import "../styles/globals.css";
import { useState, useContext } from "react";
import Head from "next/head";
import { ThemeProvider } from "../context/ThemeContext";
import "../libraries/fontawesome";
import { fontVariables } from "@/utils/fonts";
import CSSVariables from "@/styles/CSSVariables";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider key="themeprovider">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CSSVariables />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
