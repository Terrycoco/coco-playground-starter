import { fontVariables, getFontClassName, fontClassNames } from "@/utils/fonts";
import { globalColorVars } from "@/theme-config/colors";
import { globalTextVars } from "@/theme-config/text";
import { createGlobalStyle } from "styled-components";
import { DEV_CLIENT_PAGES_MANIFEST } from "next/dist/shared/lib/constants";

export default function App({ Component, pageProps }) {
  const glColors = globalColorVars();
  const glText = globalTextVars();

  const clNames = fontClassNames;

  console.log("fontClassNames", fontClassNames);

  const GlobalStyles = createGlobalStyle`
     ${glColors}
     ${glText}
    `;

  return (
    <div className={DEV_CLIENT_PAGES_MANIFEST}>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
