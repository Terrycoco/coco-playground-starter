import { globalColorVars } from "@/theme-config/colors";
import { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps }) {
  const GlobalStyle = createGlobalStyle`
   ${globalColorVars}
`;
  console.log("global style: ", globalColorVars);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
