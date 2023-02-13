import { fontVariables, getFontClassName, fontClassNames } from "@/utils/fonts";
import { globalColorVars } from "@/theme-config/colors";
import { globalTextVars } from "@/theme-config/text";
import { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps }) {
  const glColors = globalColorVars();
  const glText = globalTextVars();

  const clName = fontClassNames;

  console.log(`
  ${glColors}
  ${glText}
 `);

  const GlobalStyles = createGlobalStyle`
     ${glColors}
     ${glText}
    `;

  return (
    <div className={clName}>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
