import { globalColorVars } from "@/theme-config/colors";
import { globalTextVars } from "@/theme-config/text";
import { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps }) {
  const glColors = globalColorVars();
  const glText = globalTextVars();

  const GlobalStyles = createGlobalStyle`

     ${glText}
    `;

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
