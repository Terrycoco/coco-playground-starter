import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "../context/ThemeContext";
import "../libraries/fontawesome";
import { fontVariables } from "@/utils/fonts";
import CSSVariables from "@/styles/CSSVariables";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = 



export default function App({ Component, pageProps }) {
  return (
    <div className={fontVariables}>
      <ThemeProvider key="themeprovider">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <CSSVariables>
          <Component {...pageProps} />
        </CSSVariables>
      </ThemeProvider>
    </div>
  );
}
