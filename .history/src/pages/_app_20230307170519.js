import "@/styles/theme.css";
import Head from "next/head";
import { wrapper } from "@/src/store/store";

import { ThemeProvider, ViewportProvider } from "@/context";

function App({ Component, pageProps }) {
  return (
    <div>
      <ViewportProvider>
        <ThemeProvider key="themeprovider">
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>

          <Component {...pageProps} />
        </ThemeProvider>
      </ViewportProvider>
    </div>
  );
}

export default wrapper.withRedux(App);
