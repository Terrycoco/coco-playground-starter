import { globalColorVars } from "@/theme-config/colors";
import { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps }) {
  const GlobalStyles = createGlobalStyle`
   ${globalColorVars()}
`;

  console.log("GlobalStyles:", GlobalStyles);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
