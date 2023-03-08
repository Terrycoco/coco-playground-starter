import "@/styles/theme.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { wrapper } from "@/store/store";

import { ThemeProvider } from "@/context";

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider key="themeprovider">
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>

          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
