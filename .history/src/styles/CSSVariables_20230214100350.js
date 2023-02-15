//to create global CSS variables dependent on Theme
import { createGlobalStyle } from "styled-components";
import { useTheme } from "@/hooks";
//import { currentTheme } from "@/themes";

//TODO MAKE THIS DYNAMIC LOADING OF FONT CATEGORIES?
const GlobalStyle = createGlobalStyle`
    --font-body: var(--font-montserrat);
    --font-display: var(--font-josefin-sans);
    --font-special: var(--font-josefin-sans);
    --font-mono: var(--font-josefin-sans);
`;

console.log("glVariables: ", GlobalStyle);

const CSSVariables = (props) => {
  const { theme } = useTheme();
  return <GlobalStyle theme={theme} />;
};

export default CSSVariables;
