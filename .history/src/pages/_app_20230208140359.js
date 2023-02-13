import { GlobalStyles } from "@/theme-config/colors";

export default function App({ Component, pageProps }) {
  return (
    <GlobalStyles>
      <Component {...pageProps} />
    </GlobalStyles>
  );
}
