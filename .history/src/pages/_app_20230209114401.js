import { fontVariables, getFontClassName, fontClassNames } from "@/utils/fonts";
import { globalColorVars } from "@/theme-config/colors";
import { globalTextVars } from "@/theme-config/text";
import { createGlobalStyle } from "styled-components";
import { DEV_CLIENT_PAGES_MANIFEST } from "next/dist/shared/lib/constants";

const glColors = globalColorVars();
const glText = globalTextVars();

console.log("glText: ", glText);

const GlobalStyles = createGlobalStyle`
     ${glColors}
     ${glText}
    `;

export default function App({ Component, pageProps }) {
  const clNames = fontVariables;

  return (
    <div className={clNames}>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
