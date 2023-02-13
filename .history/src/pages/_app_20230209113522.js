import { fontVariables, getFontClassName, fontClassNames } from "@/utils/fonts";
import { globalColorVars } from "@/theme-config/colors";
import { globalTextVars } from "@/theme-config/text";
import { createGlobalStyle } from "styled-components";
import { DEV_CLIENT_PAGES_MANIFEST } from "next/dist/shared/lib/constants";

const GlobalStyles = createGlobalStyle`
     ${glColors}
     ${glText}
    `;

console.log(GlobalStyles);

export default function App({ Component, pageProps }) {
  const glColors = globalColorVars();
  const glText = globalTextVars();

  const clNames = fontVariables;

  console.log("fontVariables", clNames);

  return (
    <div className={clNames}>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
