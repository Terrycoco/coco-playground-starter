import "../styles/globals.css";
import { useState, useContext } from "react";
import Head from "next/head";
import { ThemeProvider } from "../context/ThemeContext";
// import your fontawesome library
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(faGithub, faAngleDown);

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider key="themeprovider">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
