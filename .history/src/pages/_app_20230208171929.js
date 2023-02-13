import { globalColorVars } from "@/theme-config/colors";
import { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps }) {
  const GlobalStyles = createGlobalStyle`
   ${globalColorVars()}
`;

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
