import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider, ViewportProvider } from "@/context";
import "../libraries/fontawesome";
import { fontVariables } from "@/utils/fonts";
import CSSVariables from "@/styles/CSSVariables";

export default function App({ Component, pageProps }) {
  return (
    <div className={fontVariables}>
      <ThemeProvider key="themeprovider">
        <CSSVariables>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>

          <Component {...pageProps} />
        </CSSVariables>
      </ThemeProvider>
    </div>
  );
}
