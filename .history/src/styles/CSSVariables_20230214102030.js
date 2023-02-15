//to create global CSS variables dependent on Theme
import { createGlobalStyle } from "styled-components";
import { useTheme } from "@/hooks";
import { fontVariables } from "@/utils/fonts";
//import { currentTheme } from "@/themes";

//TODO MAKE THIS DYNAMIC LOADING OF FONT CATEGORIES?
const GlobalStyle = createGlobalStyle`
 body {
    --font-body: var(--font-montserrat);
    --font-display: ${(props) => props.theme.fonts.display};
    --font-special: var(--font-josefin-sans);
    --font-mono: var(--font-josefin-sans);
 }
`;

const CSSVariables = (props) => {
  const { theme } = useTheme();
  return <GlobalStyle theme={theme} />;
};

export default CSSVariables;
