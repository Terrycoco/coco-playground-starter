import { globalColorVars } from "@/theme-config/colors";
import { globalTextVars } from "@/theme-config/text";
import { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps }) {
  const glColors = globalColorVars();

  const GlobalStyles = createGlobalStyle`
     ${glColors}
    `;

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
