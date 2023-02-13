import { fontVariables, getFontClassName, fontClassNames } from "@/utils/fonts";
import { globalColorVars } from "@/theme-config/colors";
import { globalTextVars } from "@/theme-config/text";
import { createGlobalStyle } from "styled-components";

const glColors = globalColorVars();
const glText = globalTextVars();
const clNames = fontVariables;

console.log("glText: ", glText);

const GlobalStyles = createGlobalStyle`
     ${clNames}
     ${glColors}
     ${glText}
    `;

export default function App({ Component, pageProps }) {
  return (
    <div className={clNames}>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
